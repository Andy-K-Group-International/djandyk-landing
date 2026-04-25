"use client";

import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 px-8">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-4">
          {t.cta.eyebrow}
        </span>
        <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-white leading-[1.2] mb-4">
          <span className="font-serif italic font-light">Listen</span>{" "}now
        </h2>
        <p className="text-base text-white/80 leading-relaxed mb-8 max-w-[460px] mx-auto">
          {t.cta.subtitle}
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-10">
          <a
            href={COMPANY.hyperfollow}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient"
          >
            <span className="relative z-10">{t.cta.ctaPrimary}</span>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-all"
          >
            {t.cta.ctaSecondary}
          </a>
        </div>

        <a
          href={COMPANY.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <InstagramIcon />
          <span className="text-sm">{t.cta.followInstagram}</span>
        </a>
      </div>
    </section>
  );
}
