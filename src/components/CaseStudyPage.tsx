"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "./Navbar";

type CaseStudySlug = "hospitality" | "healthcare" | "consulting";

const CASE_STUDY_ORDER: CaseStudySlug[] = ["hospitality", "healthcare", "consulting"];

export default function CaseStudyPage({ slug }: { slug: CaseStudySlug }) {
  const { t } = useLanguage();
  const cs = t.caseStudyPages[slug];

  const currentIndex = CASE_STUDY_ORDER.indexOf(slug);
  const nextSlug = CASE_STUDY_ORDER[(currentIndex + 1) % CASE_STUDY_ORDER.length];
  const nextCs = t.caseStudyPages[nextSlug];

  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <Navbar />

      <div className="max-w-[800px] mx-auto px-6 py-16 md:py-24">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-10">
          {cs.title}
        </h1>

        <div className="border-t border-grid-300" />

        {/* Content */}
        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">
              {t.caseStudyPages.problem}
            </h2>
            <p>{cs.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">
              {t.caseStudyPages.solution}
            </h2>
            <p>{cs.solution}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground tracking-tight mb-3">
              {t.caseStudyPages.outcome}
            </h2>
            <p>{cs.outcome}</p>
          </section>
        </article>

        {/* Next case study */}
        <div className="mt-16 pt-10 border-t border-grid-300 text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono mb-3">
            {t.caseStudyPages.nextCaseStudy}
          </p>
          <Link
            href={`/case-studies/${nextSlug}`}
            className="group inline-flex items-center gap-3 text-foreground hover:text-highlight transition-colors"
          >
            <span className="text-xl font-semibold tracking-tight">
              {nextCs.title}
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1">
              <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
