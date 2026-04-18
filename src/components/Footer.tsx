"use client";

import { COMPANY } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { CURRENCIES } from "@/lib/currency";
import type { CurrencyCode } from "@/lib/currency";
import type { Locale } from "@/lib/translations";

export default function Footer() {
  const { currency, setCurrency } = useCurrency();
  const { locale, setLocale, t } = useLanguage();

  const footerLinks = [
    { label: t.footer.linkHome, href: "#hero" },
    { label: t.footer.linkSystems, href: "#systems" },
    { label: t.footer.linkPricing, href: "#pricing" },
    { label: t.footer.linkContact, href: "#contact" },
    { label: t.footer.linkPrivacy, href: "/privacy-policy" },
    { label: t.footer.linkCookies, href: "/cookies-policy" },
    { label: t.footer.linkTerms, href: "/terms-and-conditions" },
    { label: t.footer.linkDisclaimer, href: "/disclaimer" },
    { label: t.footer.linkLegalNotice, href: "/company-information" },
    { label: t.footer.linkClientPortal, href: "https://adameva.app" },
  ];

  return (
    <footer className="border-t border-grid-300 py-12 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#hero" className="text-foreground">
            <CompanyLogo size="sm" />
          </a>
          <span className="text-xs text-muted-2">
            {t.footer.copyright} {COMPANY.name}
          </span>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted-2 hover:text-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            {t.company.location}
          </div>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            aria-label="Select language"
            className="text-xs text-muted-2 bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none focus:ring-1 focus:ring-highlight/30"
          >
            <option value="en">{t.languages.en}</option>
            <option value="es">{t.languages.es}</option>
            <option value="sk">{t.languages.sk}</option>
            <option value="nl">{t.languages.nl}</option>
            <option value="pt">{t.languages.pt}</option>
            <option value="de">{t.languages.de}</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="text-xs text-muted-2 bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none focus:ring-1 focus:ring-highlight/30"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}
