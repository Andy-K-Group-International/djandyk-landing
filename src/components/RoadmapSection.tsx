"use client";

import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS = [
  // Inspiration — lightbulb
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Composition — music note
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Production — sliders / mixing
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M6 8h12M6 12h12M6 16h12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="16" r="2" fill="currentColor" stroke="none" />
  </svg>,
  // Mastering — diamond / gem
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Release — upload / send
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Connection — users / heart
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-2">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-highlight">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="hidden lg:flex items-center px-2">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-highlight">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function JourneyCard({
  item,
  icon,
  stepNumber,
}: {
  item: { title: string; description: string };
  icon: React.ReactNode;
  stepNumber: number;
}) {
  return (
    <div className="relative flex-1 max-w-[340px]">
      <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(220,239,230,0.2), rgba(168,213,194,0.15))",
              color: "#2F6B58",
            }}
          >
            {icon}
          </div>
          <span className="text-[11px] font-mono text-muted-2 uppercase tracking-wider">
            {String(stepNumber).padStart(2, "0")}
          </span>
        </div>
        <h4 className="text-base font-bold text-foreground tracking-tight mb-2">
          {item.title}
        </h4>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="relative py-20 px-8">
      <div className="line-grid line-grid-fade" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.journey.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.journey.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.journey.headingItalic}
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            {t.journey.description}
          </p>
        </div>

        {/* Desktop: 3×2 grid with arrows */}
        <div className="hidden lg:block">
          <div className="flex items-stretch justify-center">
            {t.journey.steps.slice(0, 3).map((item, i) => (
              <div key={i + 1} className="contents">
                <JourneyCard item={item} icon={STEP_ICONS[i]} stepNumber={i + 1} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
          <div className="h-6" />
          <div className="flex items-stretch justify-center">
            {t.journey.steps.slice(3, 6).map((item, i) => (
              <div key={i + 4} className="contents">
                <JourneyCard item={item} icon={STEP_ICONS[i + 3]} stepNumber={i + 4} />
                {i < 2 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col items-center">
          {t.journey.steps.map((item, i) => (
            <div key={i + 1}>
              <JourneyCard item={item} icon={STEP_ICONS[i]} stepNumber={i + 1} />
              {i < t.journey.steps.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
