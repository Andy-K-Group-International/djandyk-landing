"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("andyk_email", email);
    router.push(`/questionnaire?email=${encodeURIComponent(email)}`);
  };

  return (
    <section id="hero" className="text-center py-20 px-8 max-w-[900px] mx-auto">
      <h1 className="gradient-text font-bold tracking-tight leading-[1.2] text-[clamp(2.375rem,1.6rem+2.75vw,3.75rem)] mb-6">
        <span className="block">Andy&apos;K Group</span>
        <span className="block font-serif font-light italic text-[1.3em]">
          International
        </span>
      </h1>
      <p className="text-xl leading-relaxed text-muted font-light max-w-[620px] mx-auto mb-3">
        {t.company.tagline}
      </p>
      <p className="text-base leading-relaxed text-muted-2 font-light max-w-[540px] mx-auto mb-9">
        {t.company.subtitle}
        <br />
        {t.company.subtitleLine2}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[480px] mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="w-full sm:flex-1 h-12 px-4 text-sm rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-foreground placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/30 transition-colors"
        />
        <button
          type="submit"
          className="relative inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-foreground btn-primary-gradient w-full sm:w-auto shrink-0"
        >
          <span className="relative z-10">{t.hero.ctaPrimary}</span>
        </button>
      </form>
    </section>
  );
}
