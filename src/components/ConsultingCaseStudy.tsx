"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function ConsultingCaseStudy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
            {t.caseStudyPages.consulting.title}
          </h1>
          <p className="text-lg text-muted font-serif italic">
            Client Operating System (LatAm)
          </p>
        </header>

        <div className="border-t border-grid-300" />

        {/* Overview Table */}
        <section className="mt-10 mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border border-grid-300">
              <tbody>
                {[
                  ["Client", "Independent Emotional Consulting Practitioner (LatAm)"],
                  ["Service Type", "End-to-End (Positioning \u2192 Offer Architecture \u2192 Booking + Prepayment \u2192 Rules + Templates \u2192 Launch)"],
                  ["Delivery Model", "Modular rollout (Phase 1 \u2192 Phase 2 \u2192 Phase 3 \u2192 Launch)"],
                  ["System Value", "\u20AC4,000 \u2013 \u20AC7,800"],
                  ["Year-1 Impact", "\u20AC6,000 \u2013 \u20AC12,500"],
                  ["Compliance Note", "Professional support service \u2014 not clinical therapy or medical treatment"],
                ].map(([field, value], i) => (
                  <tr key={field} className={i % 2 === 0 ? "bg-bg-light" : "bg-background"}>
                    <td className="border border-grid-300 px-4 py-3 font-semibold text-foreground w-[200px] align-top">
                      {field}
                    </td>
                    <td className="border border-grid-300 px-4 py-3 text-muted">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Situation (Before) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            The Situation (Before)
          </h2>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            {[
              "Service delivered with high emotional load, but without a strong operating structure",
              "Client communication handled ad-hoc (WhatsApp), creating time leakage and blurred boundaries",
              "Pricing and session duration not anchored in a clear system (scope creep)",
              "Bookings not standardized \u2192 cancellations/no-shows reduce revenue stability",
              "No professional separation (personal vs work), reducing perceived value and trust",
              "No clear rule-set to protect energy: timeboxes, payment before session, reschedule policy",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Goals
          </h2>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            {[
              "Productize the service: clear session types, durations, outcomes, and pricing logic",
              "Make revenue predictable with a prepayment-first booking flow",
              "Protect the practitioner\u2019s time and energy with simple, enforceable rules",
              "Increase trust and conversion through professional presentation and onboarding",
              "Create reusable templates to reduce admin load",
              "Enable scale: more sessions with less operational friction",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* End-to-End Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            End-to-End Solution
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Phase 1 */}
            <div className="border border-grid-300 p-6">
              <span className="inline-block bg-highlight text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                Phase 1
              </span>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                Profile &amp; Offer Architecture (Foundation)
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Clarified positioning: emotional support and pre-therapy guidance (non-clinical)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Defined service menu: session types, duration, boundaries, deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Created pricing structure and packages for local market + international positioning</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border border-grid-300 p-6">
              <span className="inline-block bg-highlight text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                Phase 2
              </span>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                Digital Structure (Booking + Prepayment)
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Professional email + WhatsApp Business setup (labels, quick replies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Booking workflow: Client &rarr; books &rarr; pays &rarr; receives confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Rules embedded: fixed timebox, pay-before, reschedule/cancellation policy</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border border-grid-300 p-6">
              <span className="inline-block bg-highlight text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                Phase 3
              </span>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                Professional Materials &amp; Templates
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Client intake form (structured data capture)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Session report template (professional continuity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Reservation conditions / working terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Client agreement + consent language aligned with privacy expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Pitch deck / presentation materials for credibility and sales</span>
                </li>
              </ul>
            </div>

            {/* Launch */}
            <div className="border border-grid-300 p-6">
              <span className="inline-block bg-highlight text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
                Launch
              </span>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                Test, Refine, Activate
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>System testing (booking, payment, confirmations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-2 shrink-0" />
                  <span>Soft launch with first users, template tuning based on real conversations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Equivalent Value */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Market Equivalent Value
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border border-grid-300">
              <thead>
                <tr className="bg-bg-light">
                  <th className="border border-grid-300 px-4 py-3 text-left font-semibold text-foreground">
                    Phase
                  </th>
                  <th className="border border-grid-300 px-4 py-3 text-left font-semibold text-foreground">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Phase 1 (Foundation)", "\u20AC1,200 \u2013 \u20AC2,000"],
                  ["Phase 2 (Booking + Prepayment)", "\u20AC1,500 \u2013 \u20AC3,000"],
                  ["Phase 3 (Templates + materials)", "\u20AC1,300 \u2013 \u20AC2,800"],
                ].map(([phase, value], i) => (
                  <tr key={phase} className={i % 2 === 0 ? "bg-background" : "bg-bg-light"}>
                    <td className="border border-grid-300 px-4 py-3 text-muted">{phase}</td>
                    <td className="border border-grid-300 px-4 py-3 text-muted">{value}</td>
                  </tr>
                ))}
                <tr className="bg-bg-light">
                  <td className="border border-grid-300 px-4 py-3 font-bold text-foreground">
                    Total
                  </td>
                  <td className="border border-grid-300 px-4 py-3 font-bold text-foreground">
                    {"\u20AC4,000 \u2013 \u20AC7,800"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROI Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            ROI Model
          </h2>
          <div className="bg-bg-light border border-grid-300 p-4 mb-6 text-[15px] text-muted leading-relaxed">
            <p className="font-semibold text-foreground mb-2">Assumptions</p>
            <p>
              12&ndash;20 paid sessions/week; &euro;25&ndash;&euro;60 avg per session; 10&ndash;20% revenue
              leakage from cancellations.
            </p>
          </div>
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
              <span>
                <strong className="text-foreground">Savings:</strong> 2&ndash;5 hours/week saved via
                templates + standardized flow
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
              <span>
                <strong className="text-foreground">Cashflow stability:</strong> prepayment + rules
                reduce leakage and last-minute cancellations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
              <span>
                <strong className="text-foreground">Growth:</strong> higher conversion + higher
                rebooking rate
              </span>
            </li>
          </ul>
        </section>

        {/* Financial Projection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Financial Projection
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-[15px] border border-grid-300">
              <thead>
                <tr className="bg-bg-light">
                  <th className="border border-grid-300 px-4 py-3 text-left font-semibold text-foreground">
                    Period
                  </th>
                  <th className="border border-grid-300 px-4 py-3 text-left font-semibold text-foreground">
                    Total Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6 months", "\u20AC2,500 \u2013 \u20AC5,200"],
                  ["1 year", "\u20AC6,000 \u2013 \u20AC12,500"],
                  ["2 years (cum.)", "\u20AC14,000 \u2013 \u20AC28,000"],
                ].map(([period, impact], i) => (
                  <tr key={period} className={i % 2 === 0 ? "bg-background" : "bg-bg-light"}>
                    <td className="border border-grid-300 px-4 py-3 text-muted">{period}</td>
                    <td className="border border-grid-300 px-4 py-3 text-muted">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bar chart */}
          <div className="bg-bg-light border border-grid-300 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-2 font-mono mb-6">
              Financial Projection
            </p>
            <div className="space-y-4">
              {[
                { label: "6 months", value: "\u20AC2.5k\u2013\u20AC5.2k", pct: 19 },
                { label: "1 year", value: "\u20AC6k\u2013\u20AC12.5k", pct: 45 },
                { label: "2 years", value: "\u20AC14k\u2013\u20AC28k", pct: 100 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-muted">{item.value}</span>
                  </div>
                  <div className="h-6 w-full bg-background border border-grid-300 overflow-hidden">
                    <div
                      className="h-full bg-highlight transition-all duration-500"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Year 1 Impact Split */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Year 1 Impact Split
          </h2>
          <div className="bg-bg-light border border-grid-300 p-6">
            <div className="space-y-6">
              {/* Savings */}
              <div>
                <div className="flex justify-between text-[13px] mb-1">
                  <span className="text-foreground font-medium">Savings</span>
                  <span className="text-muted">{"\u20AC1,800 \u2013 \u20AC4,200"}</span>
                </div>
                <div className="h-8 w-full bg-background border border-grid-300 overflow-hidden">
                  <div
                    className="h-full bg-rose transition-all duration-500"
                    style={{ width: "34%" }}
                  />
                </div>
              </div>
              {/* Growth */}
              <div>
                <div className="flex justify-between text-[13px] mb-1">
                  <span className="text-foreground font-medium">Growth</span>
                  <span className="text-muted">{"\u20AC4,200 \u2013 \u20AC8,300"}</span>
                </div>
                <div className="h-8 w-full bg-background border border-grid-300 overflow-hidden">
                  <div
                    className="h-full bg-highlight transition-all duration-500"
                    style={{ width: "66%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cashflow Stability Effect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Cashflow Stability Effect
          </h2>
          <div className="bg-bg-light border border-grid-300 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-2 font-mono mb-6">
              Revenue Capture Ratio
            </p>
            <div className="space-y-6">
              {/* Before */}
              <div>
                <div className="flex justify-between text-[13px] mb-1">
                  <span className="text-foreground font-medium">
                    Before (pay after / leakage)
                  </span>
                  <span className="text-muted">~0.83 ratio</span>
                </div>
                <div className="h-8 w-full bg-background border border-grid-300 overflow-hidden">
                  <div
                    className="h-full bg-rose transition-all duration-500"
                    style={{ width: "83%" }}
                  />
                </div>
              </div>
              {/* After */}
              <div>
                <div className="flex justify-between text-[13px] mb-1">
                  <span className="text-foreground font-medium">
                    After (prepay + rules)
                  </span>
                  <span className="text-muted">~0.97 ratio</span>
                </div>
                <div className="h-8 w-full bg-background border border-grid-300 overflow-hidden">
                  <div
                    className="h-full bg-highlight transition-all duration-500"
                    style={{ width: "97%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Is E2E */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Why This Is E2E
          </h2>
          <div className="bg-bg-light border border-grid-300 p-6 text-[15px] leading-relaxed text-muted">
            <p>
              We didn&rsquo;t &ldquo;make a website&rdquo;. We built a professional operating model
              that protects time, raises perceived value, and stabilizes revenue. The system enforces
              boundaries and creates trust via clarity and consistency. This becomes a reusable
              framework that can scale.
            </p>
          </div>
        </section>

        {/* One-Line Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            One-Line Summary
          </h2>
          <div className="bg-bg-light border border-grid-300 p-4">
            <p className="text-[15px] leading-relaxed text-muted font-serif italic">
              &ldquo;We transformed an emotional consulting practice into a professional client
              operating system &mdash; adding prepayment, rules, and reusable templates to stabilize
              revenue and deliver a conservative &euro;6k&ndash;&euro;12.5k Year-1 impact.&rdquo;
            </p>
          </div>
        </section>

        {/* Next Case Study */}
        <div className="mt-16 pt-10 border-t border-grid-300 text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono mb-3">
            {t.caseStudyPages.nextCaseStudy}
          </p>
          <Link
            href="/case-studies/hospitality"
            className="group inline-flex items-center gap-3 text-foreground hover:text-highlight transition-colors"
          >
            <span className="text-xl font-semibold tracking-tight">
              {t.caseStudyPages.hospitality.title}
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
