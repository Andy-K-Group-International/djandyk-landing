"use client";

import { COMPANY, FOOTER_LINKS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";
import AdminUnlock from "@/components/AdminUnlock";

export default function Footer() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <footer className="border-t border-grid-300 py-12 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#hero" className="text-foreground font-bold tracking-tight text-sm">
            <AdminUnlock>DJ Andy&apos;K</AdminUnlock>
          </a>
          <span className="text-xs text-muted-2">{t.footer.copyright}</span>
        </div>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          {FOOTER_LINKS.map((link) => (
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
            <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
            {t.company.location}
          </div>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            aria-label="Select language"
            className="text-xs text-muted-2 bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none focus:ring-1 focus:ring-highlight/30"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="sk">SK</option>
          </select>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-6 pt-6 border-t border-grid-300 text-center">
        <p className="text-[11px] text-muted-2 font-mono">{t.footer.label}</p>
        <p className="text-[11px] text-muted-2 mt-1">
          <a href={COMPANY.labelWebsite} target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">
            {COMPANY.labelWebsite}
          </a>
        </p>
      </div>
    </footer>
  );
}
