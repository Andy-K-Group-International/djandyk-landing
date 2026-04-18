"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import CompanyLogo from "./CompanyLogo";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import { CURRENCIES } from "@/lib/currency";
import type { CurrencyCode } from "@/lib/currency";
import type { Locale } from "@/lib/translations";

function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Prefix hash-only hrefs with "/" when not on the homepage */
function resolveHref(href: string, isHome: boolean): string {
  if (isHome) return href;
  // Hash links like #about → /#about
  if (href.startsWith("#")) return `/${href}`;
  // Already absolute or path-based, leave alone
  return href;
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { currency, setCurrency } = useCurrency();
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Translated nav links
  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.caseStudies, href: "#case-studies" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  // Translated services dropdown
  const navServices = [
    {
      group: t.nav.groupSystems,
      isIT: false,
      items: [
        { label: "A.D.A.M.", description: t.nav.adamDesc, href: "#systems" },
      ],
    },
    {
      group: t.nav.groupBusiness,
      isIT: false,
      items: [
        { label: t.nav.endToEnd, description: t.nav.endToEndDesc, href: "#end-to-end" },
        { label: t.nav.b2bDev, description: t.nav.b2bDevDesc, href: "#pricing-b2b" },
        { label: t.nav.b2gPublic, description: t.nav.b2gPublicDesc, href: "#pricing-b2g" },
      ],
    },
    {
      group: t.nav.groupIT,
      isIT: true,
      items: [
        { label: t.nav.sysArch, description: t.nav.sysArchDesc, href: "#pricing-tech" },
        { label: t.nav.platformDev, description: t.nav.platformDevDesc, href: "#pricing-tech" },
        { label: t.nav.automation, description: t.nav.automationDesc, href: "#pricing-tech" },
        { label: t.nav.cto, description: t.nav.ctoDesc, href: "#pricing-tech" },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  const logoHref = isHome ? "#hero" : "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grid-300">
      <div className="relative max-w-[1200px] mx-auto flex items-center justify-between px-6 sm:px-8 h-[60px]">
        {/* Logo */}
        <a href={logoHref} className="shrink-0 text-foreground">
          <CompanyLogo size="md" />
        </a>

        {/* Desktop nav - centered */}
        <div className="hidden md:flex items-center gap-7 text-sm text-muted absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a key={link.href} href={resolveHref(link.href, isHome)} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {t.nav.services}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-full right-0 mt-2 w-[540px] bg-white rounded-xl border border-grid-300 shadow-lg p-6 grid grid-cols-2 gap-6">
                {navServices.map((group) => (
                  <div key={group.group} className={group.isIT ? "col-span-2" : ""}>
                    <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-3">
                      {group.group}
                    </p>
                    <div className={group.isIT ? "grid grid-cols-2 gap-2" : "space-y-2"}>
                      {group.items.map((item) => (
                        <a
                          key={item.href + item.label}
                          href={resolveHref(item.href, isHome)}
                          onClick={() => setServicesOpen(false)}
                          className="block p-2.5 -mx-1 rounded-lg hover:bg-bg-light transition-colors group/item"
                        >
                          <span className="text-sm font-medium text-foreground group-hover/item:text-highlight transition-colors">
                            {item.label}
                          </span>
                          <span className="block text-xs text-muted-2 mt-0.5">
                            {item.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Language & Currency selectors */}
        <div className="hidden md:flex items-center gap-1.5">
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            aria-label="Select language"
            className="text-xs text-muted bg-transparent border border-grid-500 rounded px-1.5 py-1 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none w-[52px]"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="sk">SK</option>
            <option value="nl">NL</option>
            <option value="pt">PT</option>
            <option value="de">DE</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            aria-label="Select currency"
            className="text-xs text-muted bg-transparent border border-grid-500 rounded px-1.5 py-1 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none w-[60px]"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-white overflow-y-auto">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href, isHome)}
                onClick={closeMobile}
                className="block py-3 text-base font-medium text-foreground border-b border-grid-300 last:border-b-0"
              >
                {link.label}
              </a>
            ))}

            {/* Services accordion */}
            <div className="border-b border-grid-300">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
              >
                {t.nav.services}
                <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pb-4 space-y-5">
                  {navServices.map((group) => (
                    <div key={group.group}>
                      <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-2 px-2">
                        {group.group}
                      </p>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <a
                            key={item.href + item.label}
                            href={resolveHref(item.href, isHome)}
                            onClick={closeMobile}
                            className="block px-3 py-2.5 rounded-lg hover:bg-bg-light transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="block text-xs text-muted-2 mt-0.5">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Language & Currency */}
            <div className="pt-4 flex items-center gap-2">
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                aria-label="Select language"
                className="text-xs text-muted bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="sk">SK</option>
                <option value="nl">NL</option>
                <option value="pt">PT</option>
                <option value="de">DE</option>
              </select>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                aria-label="Select currency"
                className="text-xs text-muted bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
