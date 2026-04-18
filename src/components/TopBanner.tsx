"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TopBanner() {
  const { t } = useLanguage();
  const items = t.banner.items;

  return (
    <div className="bg-bg-light border-b border-grid-500 overflow-hidden h-10 flex items-center">
      <div className="animate-scroll-banner flex gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs text-muted-2 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
