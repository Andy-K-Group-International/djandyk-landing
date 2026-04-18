"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TopBanner() {
  const { t } = useLanguage();

  const bannerItems = [
    { bold: t.banner.b2bLead, text: t.banner.b2bText },
    { bold: t.banner.adamSystem, text: t.banner.adamText },
    { bold: t.banner.b2gTender, text: t.banner.b2gText },
    { bold: t.banner.trusted, text: t.banner.trustedText },
  ];
  return (
    <div className="bg-bg-light border-b border-grid-500 overflow-hidden h-10 flex items-center">
      <div className="animate-scroll-banner flex gap-10 whitespace-nowrap">
        {[...bannerItems, ...bannerItems].map((item, i) => (
          <span key={i} className="text-xs text-muted-2 shrink-0">
            {item.bold && (
              <strong className="text-foreground font-medium">{item.bold}</strong>
            )}{" "}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
