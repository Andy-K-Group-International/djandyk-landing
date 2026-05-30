"use client";
/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/context/LanguageContext";

export default function LovedBySection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-[#F5F5F5]">
      {/* Cinematic split layout */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* Left — artist photo */}
        <div className="relative lg:w-[45%] min-h-[400px] lg:min-h-[600px] shrink-0">
          <img
            src="/photos/artist-main.jpg"
            alt="DJ Andy'K"
            className="absolute inset-0 w-full h-full object-contain object-top"
          />
          {/* subtle right-fade overlay so text side bleeds in */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, #F5F5F5 100%)",
            }}
          />
          {/* bottom fade on mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to bottom, transparent 60%, #F5F5F5 100%)",
            }}
          />
        </div>

        {/* Right — text content */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 lg:py-20 lg:pl-12 lg:pr-16 lg:w-[55%]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-4">
            {t.about.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-[#111111] mb-6">
            {(t.about.heading + " " + t.about.headingItalic).split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "font-serif italic font-light" : ""}>{i > 0 ? " " : ""}{word}</span>
            ))}
          </h2>

          <p className="text-base leading-relaxed text-[rgba(0,0,0,0.65)] font-light mb-8 max-w-[520px]">
            {t.about.bio}
          </p>

          <blockquote className="border-l-2 border-highlight pl-5 mb-8">
            <p className="text-lg md:text-xl font-serif font-light italic text-[rgba(0,0,0,0.8)] leading-relaxed">
              {t.about.quote}
            </p>
          </blockquote>

          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-highlight" />
            <span className="text-xs uppercase tracking-widest text-[rgba(0,0,0,0.4)] font-mono">
              {t.about.tagline}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
