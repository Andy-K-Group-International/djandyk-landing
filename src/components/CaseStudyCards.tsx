"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const CASE_STUDY_SLUGS = [
  "/case-studies/hospitality",
  "/case-studies/healthcare",
  "/case-studies/consulting",
] as const;

const CASE_STUDY_ICONS = [
  // Hotel/Building
  <svg key="hotel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Heart/Medical
  <svg key="health" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Briefcase/Consulting
  <svg key="consult" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function CaseStudyCards() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="relative pt-10 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.caseStudies.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.caseStudies.headingItalic}
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.caseStudies.cards.map((card, i) => (
            <Link
              key={i}
              href={CASE_STUDY_SLUGS[i]}
              className="group block"
            >
              <div className="glass-card rounded-xl p-7 h-full min-h-[260px] flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,112,125,0.1)] hover:border-rose-dark/20">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,192,192,0.2), rgba(205,160,165,0.15))",
                    color: "#cda0a5",
                  }}
                >
                  {CASE_STUDY_ICONS[i]}
                </div>

                {/* Short title */}
                <h3 className="text-base font-bold text-foreground tracking-tight mb-1.5">
                  {card.shortTitle}
                </h3>

                {/* Full title as subtitle */}
                <p className="text-sm text-muted-2 leading-relaxed mb-3">
                  {card.title}
                </p>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Learn More with pink chevron */}
                <div className="mt-5 flex items-center justify-end gap-1.5">
                  <span className="text-sm font-medium text-highlight transition-colors">
                    {card.link}
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-3.5 h-3.5 text-highlight transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
