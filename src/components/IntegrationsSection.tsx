"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_CARDS: { href: string | null; accent: string }[] = [
  { href: "#end-to-end", accent: "rgba(201,112,125,0.12)" },
  { href: "#pricing-b2b", accent: "rgba(49,38,59,0.08)" },
  { href: "#pricing-b2g", accent: "rgba(49,38,59,0.08)" },
  { href: "#pricing-tech", accent: "rgba(49,38,59,0.08)" },
];

const SERVICE_ICONS = [
  // Layers — End-to-End
  <svg key="e2e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0l4.179 2.25L12 17.25 6.429 14.25m5.571 3v4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // Users — B2B
  <svg key="b2b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // Building — B2G
  <svg key="b2g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  // CPU — IT Services
  <svg key="it" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

export default function IntegrationsSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative pt-10 pb-20 px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-foreground mb-4">
          {t.services.heading}{" "}
          <span className="font-serif font-light italic text-[1.2em]">
            {t.services.headingItalic}
          </span>
        </h2>
        <p className="text-lg text-muted font-light max-w-[560px] mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.services.items.map((item, i) => {
          const card = SERVICE_CARDS[i];
          const icon = SERVICE_ICONS[i];
          const isClickable = card.href !== null;

          const inner = (
            <div
              className={`relative rounded-xl border border-grid-300 bg-white p-6 h-full flex flex-col transition-all duration-300 ${
                isClickable ? "group hover:border-rose-dark/30 hover:shadow-[0_8px_30px_rgba(201,112,125,0.08)]" : ""
              }`}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ background: card.accent, color: "#cda0a5" }}
              >
                {icon}
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <h4 className="text-base font-bold text-foreground tracking-tight">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed flex-1">{item.description}</p>
            </div>
          );

          if (!isClickable) {
            return <div key={item.title}>{inner}</div>;
          }

          if (typeof card.href === "string" && card.href.startsWith("http")) {
            return (
              <a key={item.title} href={card.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            );
          }

          if (typeof card.href === "string" && card.href.startsWith("#")) {
            return (
              <a key={item.title} href={card.href}>
                {inner}
              </a>
            );
          }

          return (
            <Link key={item.title} href={card.href as string}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
