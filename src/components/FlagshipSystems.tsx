"use client";

import { COMPANY, ADAM_FEATURES, EVA_FEATURES } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function FlagshipSystems() {
  const { t } = useLanguage();

  return (
    <section id="systems" className="relative pt-10 pb-20 px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
          {t.flagship.label}
        </span>
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          <span className="font-serif italic font-light">Flagship</span>{" "}albums
        </h2>
        <p className="text-lg text-muted font-light max-w-[560px] mx-auto">
          {t.flagship.subheading}
        </p>
      </div>

      {/* When Later Becomes Never */}
      <div className="glass-card rounded-xl p-8 mb-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] uppercase tracking-widest text-highlight font-mono">
            {t.flagship.label}
          </span>
          <div className="h-3 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-muted-2 font-mono">2026</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">
          {t.flagship.headingBold}{" "}
          <span className="font-serif font-light italic">{t.flagship.headingItalic}</span>
        </h3>
        <p className="text-sm text-muted-2 mb-6">{t.flagship.subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ADAM_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5 shrink-0">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href={COMPANY.socials.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">{t.flagship.listenNow}</span>
        </a>
      </div>

      {/* Piano Series */}
      <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] uppercase tracking-widest text-highlight font-mono">
            {t.flagship.pianoLabel}
          </span>
          <div className="h-3 w-px bg-grid-300" />
          <span className="text-[10px] uppercase tracking-widest text-muted-2 font-mono">2026</span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{t.flagship.pianoHeading}</h3>
        <p className="text-sm text-muted-2 mb-6">{t.flagship.pianoSubheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {EVA_FEATURES.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="text-highlight mt-0.5 shrink-0">&bull;</span>
              <span className="text-sm text-muted">{f}</span>
            </div>
          ))}
        </div>
        <a
          href={COMPANY.socials.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-foreground btn-primary-gradient"
        >
          <span className="relative z-10">{t.flagship.pianoListen}</span>
        </a>
      </div>
    </section>
  );
}
