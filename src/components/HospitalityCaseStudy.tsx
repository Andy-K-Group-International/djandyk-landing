"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "./Navbar";

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                              */
/* ------------------------------------------------------------------ */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
      {children}
    </h2>
  );
}

function Bar({
  label,
  value,
  max,
  suffix = "",
}: {
  label: string;
  value: number;
  max: number;
  suffix?: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="w-24 shrink-0 text-right text-muted font-medium">
        {label}
      </span>
      <div className="flex-1 h-7 bg-bg-light rounded overflow-hidden border border-grid-300">
        <div
          className="h-full bg-highlight rounded transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-20 shrink-0 text-muted-2 text-xs font-mono">
        {value}
        {suffix}
      </span>
    </div>
  );
}

function PhaseCard({
  phase,
  title,
  items,
}: {
  phase: number;
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-grid-300 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-highlight text-white text-sm font-bold">
          {phase}
        </span>
        <h3 className="text-lg font-bold text-foreground tracking-tight">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
            <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function HospitalityCaseStudy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        {/* -------------------------------------------------------- */}
        {/* Header                                                    */}
        {/* -------------------------------------------------------- */}
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono mb-4">
          Case Study
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
          {t.caseStudyPages.hospitality.title}
        </h1>
        <p className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-2">
          End-to-End Business Development &amp; Growth Architecture
        </p>
        <p className="text-base text-muted italic font-serif">
          Hospitality Operating System + A.D.A.M. Hospitality
        </p>

        <div className="border-t border-grid-300 mt-10" />

        {/* -------------------------------------------------------- */}
        {/* Overview Table                                            */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Overview</SectionTitle>

          <div className="border border-grid-300 rounded-lg overflow-hidden text-sm">
            {[
              ["Client", "Independent hostel with on-site restaurant (Asuncion, Paraguay)"],
              ["Sector", "Hospitality (Accommodation + Food & Beverage)"],
              ["Service Type", "End-to-End Growth Architecture"],
              ["Delivery Model", "Modular Rollout (Phase 1 \u2192 Phase 2 \u2192 Phase 3)"],
              ["Languages", "ES / EN"],
              ["Core Outcome", "From manual daily chaos \u2192 to a repeatable operating system"],
            ].map(([field, value], i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 0 ? "bg-bg-light" : "bg-background"}`}
              >
                <span className="w-40 md:w-48 shrink-0 px-4 py-3 font-semibold text-foreground border-r border-grid-300">
                  {field}
                </span>
                <span className="px-4 py-3 text-muted">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Executive Summary                                        */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Executive Summary</SectionTitle>

          <p className="text-[15px] leading-relaxed text-muted mb-8">
            We engineered a full operating architecture for a growing hostel in
            Asuncion -- covering digital onboarding (QR check-in), centralized
            guest data with audit trail, compliance readiness (GDPR-style
            consent), hospitality operational policies, HACCP-aligned hygiene
            structure for restaurant readiness, and a scalable foundation for
            upsell (hostel &rarr; restaurant), analytics, and multi-location growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Market-equivalent system value (Ph 1\u20133)",
                value: "\u20AC18,000 \u2013 \u20AC28,000",
              },
              {
                label: "Conservative Year-1 impact",
                value: "\u20AC25,500 \u2013 \u20AC32,000",
              },
              {
                label: "5-year cumulative benefit",
                value: "~\u20AC155,000 \u2013 \u20AC215,000",
              },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-bg-light border border-grid-300 rounded-lg p-4 text-center"
              >
                <p className="text-xs text-muted-2 uppercase tracking-wider mb-2">
                  {metric.label}
                </p>
                <p className="text-lg font-bold text-foreground">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Market Context                                            */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Market Context</SectionTitle>

          <p className="text-[15px] leading-relaxed text-muted mb-8">
            In Asuncion, many hospitality operators still run WhatsApp-first
            communication, manual check-ins, paper rules, and ad-hoc staff
            routines. This creates a clear opportunity: the first operator with
            structure gains margin, control, and repeatability.
          </p>

          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Market Growth Index
          </h3>
          <div className="space-y-3">
            <Bar label="2024" value={100} max={138} />
            <Bar label="2025" value={108} max={138} />
            <Bar label="2026" value={117} max={138} />
            <Bar label="2027" value={127} max={138} />
            <Bar label="2028" value={138} max={138} />
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* The Situation (Before)                                    */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>The Situation (Before)</SectionTitle>

          <ul className="space-y-3">
            {[
              "Check-in handled via paper / chat messages / ad-hoc steps",
              "Guest data scattered, inconsistent, often incomplete",
              "Weak documentation and acceptance flow (rules, liability, consent)",
              "Peak arrival chaos (time loss + mistakes)",
              "No system foundation to scale hostel + restaurant experience",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] text-muted leading-relaxed"
              >
                <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Goals                                                     */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Goals</SectionTitle>

          <ul className="space-y-3">
            {[
              "Reduce staff workload and repetitive manual work",
              "Standardize onboarding and rule acceptance",
              "Create auditability (who accepted what and when)",
              "Improve guest experience",
              "Enable upsell readiness (restaurant linkage)",
              "Build HACCP compliance structure",
              "Prepare scale (analytics, automation, multi-location)",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] text-muted leading-relaxed"
              >
                <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* End-to-End Solution                                       */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>End-to-End Solution</SectionTitle>

          <div className="space-y-6">
            <PhaseCard
              phase={1}
              title="Hostel Core System (MVP)"
              items={[
                "QR-based guest onboarding (mobile-first)",
                "Digital registration form (structured)",
                "Acceptance of House Rules + Annexes (ES/EN)",
                "Centralized guest database (check-in/out + export)",
                "Confirmation emails (guest + admin)",
                "Admin dashboard foundation",
                "Operational policies & documentation pack",
              ]}
            />
            <PhaseCard
              phase={2}
              title="Restaurant Module"
              items={[
                "Guest \u2194 restaurant linkage",
                "Staff roles & access structure",
                "Digital menu / order structure foundation",
                "Hygiene & food-safety (HACCP alignment)",
              ]}
            />
            <PhaseCard
              phase={3}
              title="Optimization & Scale"
              items={[
                "Automation rules (reminders, check-in triggers, internal alerts)",
                "Operational analytics dashboards",
                "Expanded audit trail & retention policies",
                "Multi-location scalability",
              ]}
            />
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Compliance Layer                                          */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Compliance Layer</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data & consent readiness */}
            <div className="border border-grid-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                Data &amp; Consent Readiness
              </h3>
              <ul className="space-y-2">
                {[
                  "Consent capture and timestamped acceptance",
                  "Standardized document acceptance",
                  "Exportable records",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* HACCP-aligned hygiene structure */}
            <div className="border border-grid-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                HACCP-Aligned Hygiene Structure
              </h3>
              <ul className="space-y-2">
                {[
                  "Cleaning schedules & accountability logic",
                  "Food storage and cross-contamination prevention rules",
                  "Incident logging readiness",
                  "Staff hygiene workflow",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Baseline Metrics                                          */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Baseline Metrics</SectionTitle>

          <div className="border border-grid-300 rounded-lg overflow-hidden text-sm">
            {[
              ["Check-ins per month", "180 \u2013 260"],
              ["Time per check-in (before)", "10 \u2013 14 min"],
              ["Time per check-in (after QR)", "4 \u2013 6 min"],
              ["Time saved per check-in", "~6 \u2013 8 min"],
              ["Staff cost assumption", "\u20AC5 \u2013 \u20AC8/hour"],
              ["Restaurant conversion rate", "25% \u2013 40%"],
              ["Avg restaurant spend", "\u20AC6 \u2013 \u20AC10"],
            ].map(([metric, value], i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 0 ? "bg-bg-light" : "bg-background"}`}
              >
                <span className="w-56 md:w-64 shrink-0 px-4 py-3 font-semibold text-foreground border-r border-grid-300">
                  {metric}
                </span>
                <span className="px-4 py-3 text-muted">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Operational Impact                                        */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Operational Impact</SectionTitle>

          <div className="bg-bg-light border border-grid-300 rounded-lg p-4 mb-8">
            <p className="text-sm text-muted leading-relaxed font-mono">
              220 check-ins/month &times; 7 min saved = ~1,540 min/month = ~25.7
              staff hours/month = <strong className="text-foreground">~300 staff hours/year saved</strong>
            </p>
          </div>

          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Cumulative Staff Hours Saved
          </h3>
          <div className="space-y-3">
            <Bar label="6 months" value={150} max={650} suffix="h" />
            <Bar label="12 months" value={300} max={650} suffix="h" />
            <Bar label="24 months" value={650} max={650} suffix="h" />
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* ROI Model                                                 */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>ROI Model</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Savings */}
            <div className="border border-grid-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                Savings (Year 1)
              </h3>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Operational efficiency</span>
                  <span className="font-medium text-foreground">&euro;4,500 &ndash; &euro;7,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk reduction</span>
                  <span className="font-medium text-foreground">&euro;2,000 &ndash; &euro;5,000</span>
                </div>
                <div className="border-t border-grid-300 pt-3 flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span>&euro;6,500 &ndash; &euro;12,500</span>
                </div>
              </div>
            </div>

            {/* Growth */}
            <div className="border border-grid-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                Growth (Year 1)
              </h3>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Occupancy stability uplift</span>
                  <span className="font-medium text-foreground">&euro;6,000 &ndash; &euro;11,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant upsell readiness</span>
                  <span className="font-medium text-foreground">&euro;13,000 &ndash; &euro;20,000</span>
                </div>
                <div className="border-t border-grid-300 pt-3 flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span>&euro;19,000 &ndash; &euro;31,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Year 1 Impact */}
          <div className="bg-highlight rounded-lg p-6 text-center">
            <p className="text-sm text-white/80 uppercase tracking-wider mb-1">
              Total Year 1 Impact
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              &euro;25,500 &ndash; &euro;32,000
            </p>
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* Financial Projection                                      */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Financial Projection</SectionTitle>

          <div className="border border-grid-300 rounded-lg overflow-hidden text-sm mb-8">
            {/* Header row */}
            <div className="flex bg-bg-light font-semibold text-foreground">
              <span className="w-28 md:w-36 shrink-0 px-4 py-3 border-r border-grid-300">
                Period
              </span>
              <span className="flex-1 px-4 py-3 border-r border-grid-300 text-center">
                Savings
              </span>
              <span className="flex-1 px-4 py-3 border-r border-grid-300 text-center">
                Growth
              </span>
              <span className="flex-1 px-4 py-3 text-center">Total</span>
            </div>
            {[
              ["6 months", "\u20AC3k\u2013\u20AC6k", "\u20AC9k\u2013\u20AC15k", "\u20AC12k\u2013\u20AC16k"],
              ["1 year", "\u20AC6.5k\u2013\u20AC12.5k", "\u20AC19k\u2013\u20AC31k", "\u20AC25.5k\u2013\u20AC32k"],
              ["2 years (cum.)", "\u2014", "\u2014", "\u20AC54.5k\u2013\u20AC72k"],
              ["5 years (cum.)", "\u2014", "\u2014", "\u20AC155k\u2013\u20AC215k"],
            ].map(([period, savings, growth, total], i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 0 ? "bg-background" : "bg-bg-light"}`}
              >
                <span className="w-28 md:w-36 shrink-0 px-4 py-3 font-medium text-foreground border-r border-grid-300">
                  {period}
                </span>
                <span className="flex-1 px-4 py-3 text-muted text-center border-r border-grid-300">
                  {savings}
                </span>
                <span className="flex-1 px-4 py-3 text-muted text-center border-r border-grid-300">
                  {growth}
                </span>
                <span className="flex-1 px-4 py-3 text-foreground font-semibold text-center">
                  {total}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Cumulative Value Timeline
          </h3>
          <div className="space-y-3">
            <Bar label="6 months" value={16} max={215} suffix="k" />
            <Bar label="1 year" value={32} max={215} suffix="k" />
            <Bar label="2 years" value={72} max={215} suffix="k" />
            <Bar label="5 years" value={215} max={215} suffix="k" />
          </div>
        </section>

        <div className="border-t border-grid-300" />

        {/* -------------------------------------------------------- */}
        {/* One-Line Summary                                          */}
        {/* -------------------------------------------------------- */}
        <section className="py-12">
          <SectionTitle>Summary</SectionTitle>

          <blockquote className="border-l-4 border-highlight pl-6 text-[15px] leading-relaxed text-muted italic font-serif">
            We transformed a hostel + restaurant from manual operations into a
            scalable hospitality operating system -- delivering a conservative
            &euro;25.5k&ndash;&euro;32k Year-1 impact and building a clear
            5-year path to &euro;155k&ndash;&euro;215k in measurable value.
          </blockquote>
        </section>

        {/* -------------------------------------------------------- */}
        {/* Next Case Study                                           */}
        {/* -------------------------------------------------------- */}
        <div className="mt-4 pt-10 border-t border-grid-300 text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono mb-3">
            {t.caseStudyPages.nextCaseStudy}
          </p>
          <Link
            href="/case-studies/healthcare"
            className="group inline-flex items-center gap-3 text-foreground hover:text-highlight transition-colors"
          >
            <span className="text-xl font-semibold tracking-tight">
              {t.caseStudyPages.healthcare.title}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
