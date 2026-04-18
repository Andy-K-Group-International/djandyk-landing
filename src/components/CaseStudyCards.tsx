"use client";

import { useLanguage } from "@/context/LanguageContext";

const ALBUM_ICONS = [
  // Album / vinyl
  <svg key="album1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v0" strokeWidth={2.5} strokeLinecap="round" />
  </svg>,
  // Piano / music note
  <svg key="album2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 4 elements / layers
  <svg key="album3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function CaseStudyCards() {
  const { t } = useLanguage();

  return (
    <section id="featured" className="relative pt-10 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.featured.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.featured.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.featured.headingItalic}
            </span>
          </h2>
          <p className="text-base text-muted font-light">{t.featured.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.featured.cards.map((card, i) => (
            <a
              key={i}
              href="https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="glass-card rounded-xl p-7 h-full min-h-[260px] flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,179,154,0.1)]">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(220,239,230,0.2), rgba(168,213,194,0.15))",
                    color: "#2F6B58",
                  }}
                >
                  {ALBUM_ICONS[i]}
                </div>

                <h3 className="text-base font-bold text-foreground tracking-tight mb-1.5">
                  {card.shortTitle}
                </h3>
                <p className="text-sm text-muted-2 leading-relaxed mb-3">{card.title}</p>
                <p className="text-sm text-muted leading-relaxed flex-1">{card.description}</p>

                <div className="mt-5 flex items-center justify-end gap-1.5">
                  <span className="text-sm font-medium text-highlight transition-colors">
                    {card.link}
                  </span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-highlight transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
