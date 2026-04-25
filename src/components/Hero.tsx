"use client";

import { useLanguage } from "@/context/LanguageContext";
import { COMPANY } from "@/lib/data";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="text-center py-24 px-8 max-w-[860px] mx-auto">
      <span className="text-[11px] uppercase tracking-[0.3em] text-highlight font-mono block mb-6">
        {t.hero.eyebrow}
      </span>

      <h1 className="font-bold tracking-tight leading-[1.15] text-[clamp(2.5rem,1.8rem+3vw,4.25rem)] mb-6">
        <span className="block gradient-text">
          {(t.hero.title + " " + t.hero.titleItalic).split(" ").map((word, i) => (
            <span key={i} className={i % 2 === 0 ? "font-serif italic" : ""}>{i > 0 ? " " : ""}{word}</span>
          ))}
        </span>
      </h1>

      <p className="text-xl leading-relaxed text-muted font-light max-w-[580px] mx-auto mb-2">
        {t.hero.subtitle}
      </p>
      <p className="text-base leading-relaxed text-muted-2 font-light max-w-[520px] mx-auto mb-10">
        {t.hero.subtitleLine2}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={COMPANY.hyperfollow}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-foreground btn-primary-gradient w-full sm:w-auto"
        >
          <span className="relative z-10">{t.hero.ctaPrimary}</span>
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium border border-grid-500 text-muted hover:border-highlight hover:text-highlight transition-all w-full sm:w-auto"
        >
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
