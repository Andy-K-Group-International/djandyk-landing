"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PRICING_B2B, PRICING_B2G, PRICING_TECH } from "@/lib/data";
import { COMPANY } from "@/lib/data";
import { useCurrency } from "@/context/CurrencyContext";
import { useLanguage } from "@/context/LanguageContext";
import type { CurrencyCode } from "@/lib/currency";
import TabSwitcher from "@/components/TabSwitcher";

// Tab IDs are constant
const TAB_IDS = ["b2b", "b2g", "tech"] as const;


function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-highlight">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface PricingCardData {
  name: string;
  basePrice: number;
  baseCurrency: CurrencyCode;
  period?: string;
  prefix?: string;
  highlighted?: boolean;
  features: string[];
}

function PricingCardComponent({ card, translatedName, translatedFeatures }: { card: PricingCardData; translatedName: string; translatedFeatures: string[] }) {
  const { convert } = useCurrency();
  const { t } = useLanguage();
  const displayPrice = convert(card.basePrice, card.baseCurrency);

  return (
    <div
      className={`relative rounded-xl p-6 flex flex-col h-full transition-all duration-300 ${
        card.highlighted
          ? "bg-foreground text-white shadow-[0_8px_40px_rgba(1,1,27,0.2)]"
          : "bg-white border border-grid-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      }`}
    >
      {card.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-widest font-mono bg-highlight text-white rounded-full">
          {t.pricing.popular}
        </span>
      )}

      <div className="mb-5">
        <h4
          className={`text-base font-bold tracking-tight mb-3 ${
            card.highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {translatedName}
        </h4>
        <div className="flex items-baseline gap-1">
          {card.prefix && (
            <span
              className={`text-sm ${card.highlighted ? "text-white/60" : "text-muted-2"}`}
            >
              {t.pricing.from}
            </span>
          )}
          <span
            className={`text-3xl font-bold tracking-tight ${
              card.highlighted ? "text-white" : "text-foreground"
            }`}
          >
            {displayPrice}
          </span>
          {card.period && (
            <span
              className={`text-sm ${card.highlighted ? "text-white/60" : "text-muted-2"}`}
            >
              {card.period === "/ month" ? t.pricing.perMonth : t.pricing.perHour}
            </span>
          )}
        </div>
      </div>

      <div
        className={`w-full h-px mb-5 ${card.highlighted ? "bg-white/15" : "bg-grid-300"}`}
      />

      <ul className="space-y-3 flex-1 mb-6">
        {translatedFeatures.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <div className={card.highlighted ? "text-highlight" : ""}>
              <CheckIcon />
            </div>
            <span
              className={`text-sm leading-snug ${
                card.highlighted ? "text-white/80" : "text-muted"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${COMPANY.email}?subject=Inquiry: ${translatedName} Plan`}
        className={`block text-center py-3 px-4 text-sm font-medium transition-all duration-200 ${
          card.highlighted
            ? "bg-white text-foreground hover:bg-white/90"
            : "bg-foreground text-white hover:bg-foreground/90"
        }`}
      >
        {t.pricing.getStarted}
      </a>
    </div>
  );
}

export default function PricingSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("b2b");
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const switchToTabFromHash = useCallback((hash: string, scroll = false) => {
    const match = hash.match(/^#pricing-?(b2b|b2g|tech)$/);
    if (match) {
      const tab = match[1];
      if (TAB_IDS.includes(tab as typeof TAB_IDS[number])) {
        setActiveTab(tab);
        if (scroll) {
          document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  useEffect(() => {
    switchToTabFromHash(window.location.hash, true);
    function onHashChange() {
      switchToTabFromHash(window.location.hash, true);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [switchToTabFromHash]);

  // Translation keys for each pricing plan, in the same order as data arrays
  const B2B_KEYS = [t.pricing.b2bCore, t.pricing.b2bAdvance, t.pricing.b2bVanguard, t.pricing.b2bPrestige] as const;
  const B2G_KEYS = [t.pricing.b2gStarter, t.pricing.b2gExpand, t.pricing.b2gElite] as const;
  const TECH_KEYS = [t.pricing.techArchitecture, t.pricing.techPlatforms, t.pricing.techAutomation, t.pricing.techAudit, t.pricing.techCTO] as const;

  // Build tabs dynamically based on translations
  const TABS = [
    { id: "b2b", label: t.pricing.tabB2B, data: PRICING_B2B, keys: B2B_KEYS },
    { id: "b2g", label: t.pricing.tabB2G, data: PRICING_B2G, keys: B2G_KEYS },
    { id: "tech", label: t.pricing.tabTech, data: PRICING_TECH, keys: TECH_KEYS },
  ];

  const activeData = TABS.find((tab) => tab.id === activeTab)!;

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab) return;

    const tabIds = TABS.map(t => t.id);
    const oldIndex = tabIds.indexOf(activeTab);
    const newIndex = tabIds.indexOf(newTabId);
    const direction = newIndex > oldIndex ? "right" : "left";

    setSlideDirection(direction);
    setIsAnimating(true);

    requestAnimationFrame(() => {
      setTimeout(() => {
        setActiveTab(newTabId);
        requestAnimationFrame(() => {
          setTimeout(() => setIsAnimating(false), 20);
        });
      }, 150);
    });
  };

  const getTransform = () => {
    if (!isAnimating) return "translateX(0)";
    return slideDirection === "right" ? "translateX(-24px)" : "translateX(24px)";
  };

  return (
    <section id="pricing" className="relative py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono block mb-3">
            {t.pricing.eyebrow}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.pricing.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.pricing.headingItalic}
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <TabSwitcher
            tabs={TABS.map(({ id, label }) => ({ id, label }))}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Commitment note */}
        <div className="flex flex-col items-center mb-8 max-w-[600px] mx-auto text-center">
          <span className="text-sm text-muted-2">
            {t.pricing.commitment}
          </span>
        </div>

        {/* Cards with slide animation */}
        <div
          ref={contentRef}
          className="transition-all duration-300 ease-out"
          style={{
            transform: getTransform(),
            opacity: isAnimating ? 0 : 1,
          }}
        >
          <div
            className={`grid gap-6 ${
              activeData.data.length <= 3
                ? "grid-cols-1 md:grid-cols-3 max-w-[960px] mx-auto"
                : activeData.data.length === 4
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[1200px] mx-auto"
            }`}
          >
            {activeData.data.map((card, idx) => (
              <PricingCardComponent
                key={card.name}
                card={card}
                translatedName={activeData.keys[idx]?.name ?? card.name}
                translatedFeatures={activeData.keys[idx]?.features ?? card.features}
              />
            ))}
          </div>
        </div>

        {/* Billing terms */}
        <div className="text-center mt-8 space-y-1">
          <p className="text-sm text-muted-2">
            {t.pricing.billingBasis} &middot; {t.pricing.billingMinimum}
          </p>
          <p className="text-sm text-muted-2">
            {t.pricing.billingRenewal} &middot; {t.pricing.billingCancellation}
          </p>
        </div>

        {/* Custom quote CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted mb-3">
            {t.pricing.customQuote}
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=Custom Quote Request`}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
          >
            {t.pricing.requestCustomQuote}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
