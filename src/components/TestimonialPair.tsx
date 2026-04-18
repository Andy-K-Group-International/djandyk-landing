"use client";
/* eslint-disable @next/next/no-img-element */
import { FOUNDERS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

export default function TestimonialPair() {
  const { t } = useLanguage();
  return (
    <div className="mb-8">
      <div className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono block mb-3">
          {t.about.label}
        </span>
        <h3 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-bold tracking-tight text-foreground">
          {t.about.heading}{" "}
          <span className="font-serif font-light italic text-[1.15em]">
            {t.about.headingItalic}
          </span>
        </h3>
      </div>

      <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
        {FOUNDERS.map((founder) => (
          <div
            key={founder.name}
            className="group relative rounded-2xl border border-grid-500 overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: [
                  "linear-gradient(to right, rgba(226,228,234,0.4) 1px, transparent 1px)",
                  "linear-gradient(to bottom, rgba(226,228,234,0.4) 1px, transparent 1px)",
                  "radial-gradient(circle, rgba(49,38,59,0.05) 1px, transparent 1px)",
                ].join(", "),
                backgroundSize: "40px 40px, 40px 40px, 14px 14px",
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-7 p-6 sm:p-7 bg-white/80">
              <div className="shrink-0 flex justify-center sm:justify-start">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-20 h-20 rounded-full object-cover object-top grayscale"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold tracking-tight text-foreground mb-0.5">
                  {founder.name}
                </h4>
                <div className="text-xs text-muted-2 uppercase tracking-wider font-mono mb-3">
                  {founder.role}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3 max-w-[600px]">
                  {founder.bio}
                </p>
                {founder.quote && (
                  <blockquote className="border-l-2 border-highlight/40 pl-4 mb-4 py-0.5">
                    <p className="text-sm italic text-muted-2 leading-relaxed">
                      {founder.quote}
                    </p>
                  </blockquote>
                )}
                <div className="flex items-center gap-4 flex-wrap text-xs text-muted-2">
                  {founder.email && (
                    <a href={`mailto:${founder.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                      <MailIcon />
                      <span>{founder.email}</span>
                    </a>
                  )}
                  {founder.website && (
                    <a href={founder.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                      <GlobeIcon />
                      <span>{founder.websiteLabel || "Website"}</span>
                    </a>
                  )}
                  {founder.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <LocationIcon />
                      {founder.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
