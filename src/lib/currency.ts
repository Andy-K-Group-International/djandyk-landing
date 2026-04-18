export type CurrencyCode = "EUR" | "GBP" | "USD" | "BRL" | "PYG";

export const CURRENCIES: { code: CurrencyCode; symbol: string; label: string }[] = [
  { code: "EUR", symbol: "\u20AC", label: "EUR (\u20AC)" },
  { code: "GBP", symbol: "\u00A3", label: "GBP (\u00A3)" },
  { code: "USD", symbol: "$", label: "USD ($)" },
  { code: "BRL", symbol: "R$", label: "BRL (R$)" },
  { code: "PYG", symbol: "\u20B2", label: "PYG (\u20B2)" },
];

export type ExchangeRates = Record<CurrencyCode, number>;

const CURRENCY_CODES = CURRENCIES.map((c) => c.code).join(",");

export async function fetchRates(): Promise<ExchangeRates> {
  const key = process.env.NEXT_PUBLIC_FREECURRENCY_API_KEY;
  if (!key) throw new Error("Missing NEXT_PUBLIC_FREECURRENCY_API_KEY");

  const res = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${key}&currencies=${CURRENCY_CODES}`
  );
  if (!res.ok) throw new Error("Failed to fetch exchange rates");
  const json = await res.json();
  return json.data as ExchangeRates;
}

/**
 * Convert a price from one currency to another using USD-based rates.
 * Rates from freecurrencyapi are relative to USD (USD = 1).
 */
export function convertPrice(
  amount: number,
  from: CurrencyCode,
  to: CurrencyCode,
  rates: ExchangeRates
): number {
  if (from === to) return amount;
  // Convert to USD first, then to target
  const amountInUsd = amount / rates[from];
  return amountInUsd * rates[to];
}

export function formatPrice(amount: number, currency: CurrencyCode): string {
  const info = CURRENCIES.find((c) => c.code === currency)!;
  const rounded = Math.round(amount);

  // Format with thousand separators
  const formatted = rounded.toLocaleString("en-US");
  return `${info.symbol}${formatted}`;
}
