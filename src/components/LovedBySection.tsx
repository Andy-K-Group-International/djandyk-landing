"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LovedBySection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-8 bg-bg-light overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-radial-bg" />
        <div className="cartesian-grid" style={{ opacity: 0.35 }} />
        <div className="noise-eggplant" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.about.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground">
            {t.about.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">{t.about.headingItalic}</span>
          </h2>
        </div>

        <div className="max-w-[680px] mx-auto mt-10 space-y-5">
          <p className="text-base leading-relaxed text-muted font-light text-center">
            {t.about.bio}
          </p>
        </div>

        <div className="text-center max-w-[740px] mx-auto py-10">
          <blockquote className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 font-serif font-light italic">
            {t.about.quote}
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-highlight" />
            <span className="text-xs uppercase tracking-widest text-muted-2 font-bold">
              {t.about.tagline}
            </span>
            <span className="w-8 h-[1px] bg-highlight" />
          </div>
        </div>
      </div>
    </section>
  );
}
