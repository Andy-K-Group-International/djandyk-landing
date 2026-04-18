"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCurrency } from "@/context/CurrencyContext";

const LOCALES = new Set(["en", "es", "sk", "nl", "pt", "de"]);

/**
 * Syncs the browser URL with the current locale and currency.
 * URL format: /es-pyg/rest or /es/rest (when default currency).
 * No prefix when locale is "en" and currency is "EUR".
 */
export default function LocaleUrlSync() {
  const { locale } = useLanguage();
  const { currency } = useCurrency();

  useEffect(() => {
    const { pathname, hash } = window.location;

    // Strip any existing locale prefix from the pathname
    const segments = pathname.split("/").filter(Boolean);
    let cleanPath = pathname;
    if (segments.length > 0) {
      const first = segments[0].toLowerCase();
      const match = first.match(/^([a-z]{2})(?:-([a-z]{3}))?$/);
      if (match && LOCALES.has(match[1])) {
        cleanPath = "/" + segments.slice(1).join("/");
        if (cleanPath === "") cleanPath = "/";
      }
    }

    // Build the new prefix
    let prefix = "";
    if (locale !== "en" || currency !== "EUR") {
      prefix = `/${locale}`;
      if (currency !== "EUR") {
        prefix += `-${currency.toLowerCase()}`;
      }
    }

    const newPath = prefix + (cleanPath === "/" ? "/" : cleanPath);
    const fullUrl = newPath + hash;

    // Only update if different
    if (pathname + hash !== fullUrl) {
      window.history.replaceState(null, "", fullUrl);
    }
  }, [locale, currency]);

  return null;
}
