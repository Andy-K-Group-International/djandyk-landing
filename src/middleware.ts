import { NextRequest, NextResponse } from "next/server";

const LOCALES = new Set(["en", "es", "sk", "nl", "pt", "de"]);
const CURRENCY_CODES = new Set(["EUR", "GBP", "USD", "BRL", "PYG"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only process paths that start with a potential locale prefix
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return;

  const firstSegment = segments[0].toLowerCase();

  // Match: /es or /es-pyg (locale, optionally with currency)
  const match = firstSegment.match(/^([a-z]{2})(?:-([a-z]{3}))?$/);
  if (!match) return;

  const locale = match[1];
  const currencyRaw = match[2];

  if (!LOCALES.has(locale)) return;

  const currency = currencyRaw ? currencyRaw.toUpperCase() : null;
  if (currency && !CURRENCY_CODES.has(currency)) return;

  // Strip the locale prefix and rewrite to the actual page
  const restPath = "/" + segments.slice(1).join("/");
  const url = request.nextUrl.clone();
  url.pathname = restPath || "/";

  const response = NextResponse.rewrite(url);

  // Set cookies so the client-side contexts pick up the locale/currency
  response.cookies.set("andy-k-language", locale, {
    path: "/",
    maxAge: 365 * 24 * 60 * 60,
    sameSite: "lax",
  });
  if (currency) {
    response.cookies.set("andy-k-currency", currency, {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  // Only run middleware on paths that look like locale prefixes
  // Skip static files, API routes, and Next.js internals
  matcher: [
    "/((?!_next|api|favicon\\.ico|.*\\..*).*)",
  ],
};
