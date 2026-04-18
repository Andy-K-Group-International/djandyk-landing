"use client";

import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 px-8">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose font-mono block mb-4">
              {t.cta.eyebrow}
            </span>
            <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-white leading-[1.2] mb-4">
              {t.cta.heading}{" "}
              <span className="font-serif font-light italic text-[1.2em]">
                {t.cta.headingItalic}
              </span>
            </h2>
            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-[460px]">
              {t.cta.subtitle}
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="#"
                className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient"
              >
                <span className="relative z-10">{t.cta.ctaPrimary}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}?subject=Custom Quote Request`}
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                {t.cta.ctaSecondary}
              </a>
            </div>

            {/* Social */}
            <a
              href={COMPANY.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <LinkedInIcon />
              <span className="text-sm">{t.cta.followLinkedIn}</span>
            </a>
          </div>

          {/* Right - Contact details */}
          <div className="space-y-3 lg:pt-10 lg:ml-auto">
            <p className="text-3xl font-bold tracking-tight text-white leading-[1.2]">
              <span className="block mb-1">Andy&apos;K Group</span>
              <span className="block font-serif font-light italic text-[0.85em]">
                International LTD
              </span>
            </p>
            <p className="text-sm text-white/80">
              {t.company.ukCompany} |{" "}
              <span className="text-rose font-medium font-mono">
                {COMPANY.companyNumber}
              </span>
            </p>
            <p className="text-sm text-white/80">
              {COMPANY.address}
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="block text-sm text-rose hover:text-rose-dark transition-colors"
            >
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="block text-sm text-rose hover:text-rose-dark transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
