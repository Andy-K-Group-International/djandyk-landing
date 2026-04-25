"use client";

import { useLanguage } from "@/context/LanguageContext";

const SOUND_ICONS = [
  // Progressive House — waveform
  <svg key="ph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M3 12h2l2-7 2 14 2-10 2 6 2-3 2 3h2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Trance — infinity / pulse
  <svg key="tr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 3v18M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
  // Deep Melodic — headphones
  <svg key="dm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Cinematic EDM — film
  <svg key="ce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Emotional Storytelling — heart
  <svg key="es" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Studio Craft — sliders
  <svg key="sc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M6 8h12M6 12h12M6 16h12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="16" r="2" fill="currentColor" stroke="none" />
  </svg>,
];

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="music" className="relative py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sound-dots-sm" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="18" r="1" fill="rgba(49,38,59,0.07)" />
              <circle cx="52" cy="44" r="1.2" fill="rgba(49,38,59,0.06)" />
              <circle cx="68" cy="12" r="0.8" fill="rgba(49,38,59,0.08)" />
              <circle cx="32" cy="64" r="1" fill="rgba(49,38,59,0.05)" />
            </pattern>
            <pattern id="sound-dots-md" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="25" r="1.8" fill="rgba(99,179,154,0.06)" />
              <circle cx="90" cy="70" r="2" fill="rgba(99,179,154,0.05)" />
              <circle cx="15" cy="95" r="1.5" fill="rgba(99,179,154,0.07)" />
              <circle cx="75" cy="15" r="2.2" fill="rgba(99,179,154,0.04)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sound-dots-sm)" />
          <rect width="100%" height="100%" fill="url(#sound-dots-md)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.sound.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {(t.sound.heading + " " + t.sound.headingItalic).split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "font-serif italic font-light" : ""}>{i > 0 ? " " : ""}{word}</span>
            ))}
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed">
            {t.sound.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.sound.items.map((item, i) => (
            <div key={item.title} className="glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(220,239,230,0.2), rgba(168,213,194,0.15))",
                    color: "#2F6B58",
                  }}
                >
                  {SOUND_ICONS[i]}
                </div>
                <h4 className="text-base font-bold text-foreground tracking-tight">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
