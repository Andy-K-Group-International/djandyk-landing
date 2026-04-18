"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { CurrencyCode, ExchangeRates } from "@/lib/currency";
import { CURRENCIES, fetchRates, convertPrice, formatPrice } from "@/lib/currency";

const COOKIE_KEY = "andy-k-currency";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

const VALID_CODES = new Set(CURRENCIES.map((c) => c.code));

/** Map browser locale regions to likely currencies */
const REGION_CURRENCY_MAP: Record<string, CurrencyCode> = {
  GB: "GBP", UK: "GBP",
  US: "USD",
  BR: "BRL",
  PY: "PYG",
  // EU / DACH / Benelux / other EUR countries
  DE: "EUR", AT: "EUR", NL: "EUR", BE: "EUR", ES: "EUR", PT: "EUR",
  FR: "EUR", IT: "EUR", IE: "EUR", SK: "EUR", FI: "EUR", LU: "EUR",
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

/** Detect currency from browser language/locale */
function detectBrowserCurrency(): CurrencyCode | null {
  if (typeof navigator === "undefined") return null;
  const languages = navigator.languages ?? [navigator.language];
  for (const lang of languages) {
    const parts = lang.split("-");
    if (parts.length >= 2) {
      const region = parts[parts.length - 1].toUpperCase();
      if (REGION_CURRENCY_MAP[region]) {
        return REGION_CURRENCY_MAP[region];
      }
    }
  }
  return null;
}

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  convert: (amount: number, from: CurrencyCode) => string;
  ready: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "EUR",
  setCurrency: () => {},
  convert: () => "",
  ready: false,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EUR");
  const [rates, setRates] = useState<ExchangeRates | null>(null);

  // Load from cookie on mount, falling back to browser locale detection
  useEffect(() => {
    const saved = getCookie(COOKIE_KEY) as CurrencyCode | null;
    if (saved && VALID_CODES.has(saved)) {
      setCurrencyState(saved);
    } else {
      const detected = detectBrowserCurrency();
      if (detected) {
        setCurrencyState(detected);
      }
    }
  }, []);

  // Persist to cookie on change
  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    setCookie(COOKIE_KEY, code);
  }, []);

  useEffect(() => {
    fetchRates()
      .then(setRates)
      .catch(() => {
        setRates({ EUR: 0.92, GBP: 0.79, USD: 1, BRL: 5.1, PYG: 7750 });
      });
  }, []);

  const convert = useCallback(
    (amount: number, from: CurrencyCode): string => {
      if (!rates) return formatPrice(amount, from);
      const converted = convertPrice(amount, from, currency, rates);
      return formatPrice(converted, currency);
    },
    [rates, currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, ready: !!rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
