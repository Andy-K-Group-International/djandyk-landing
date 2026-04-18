"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function HealthcareCaseStudy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <Navbar />

      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <p className="text-sm uppercase tracking-[0.2em] text-muted-2 font-mono mb-4">
          Case Study
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
          {t.caseStudyPages.healthcare.title}
        </h1>
        <p className="text-2xl font-bold text-foreground tracking-tight mb-2">
          End-to-End Business Development Service
        </p>
        <p className="text-base text-muted leading-relaxed mb-10">
          Healthcare Operations Digitalization: Physiotherapy Clinic Operating
          System + A.D.A.M. Healthcare
        </p>

        <div className="border-t border-grid-300" />

        {/* Overview Table */}
        <section className="mt-12 mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-grid-300">
              <tbody>
                {[
                  [
                    "Client",
                    "Independent Physiotherapy & Rehabilitation Clinic (LatAm)",
                  ],
                  [
                    "Service Type",
                    "End-to-End (Strategy \u2192 System Design \u2192 Compliance \u2192 Operations \u2192 Scale)",
                  ],
                  [
                    "Delivery Model",
                    "Modular rollout (Phase 1 \u2192 Phase 2 \u2192 Phase 3)",
                  ],
                  ["System Value", "\u20AC24,000 \u2013 \u20AC40,000"],
                  ["Year-1 Impact", "\u20AC28,000 \u2013 \u20AC42,000"],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 1 ? "bg-bg-light" : "bg-background"}
                  >
                    <td className="border border-grid-300 px-4 py-3 font-semibold text-foreground w-[180px]">
                      {label}
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
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            The Situation (Before)
          </h2>
          <p className="text-[15px] leading-relaxed text-muted mb-6">
            The clinic had strong demand, but the operation depended on manual
            coordination and scattered records. That created risk (medical data,
            consent, hygiene), slowed staff down, and limited the ability to
            scale patient volume.
          </p>
          <ul className="space-y-3 text-[15px] text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Appointments handled through messages / phone calls with no
                unified scheduling logic
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Patient intake forms stored in multiple places (no single source
                of truth)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Limited audit trail for consent, medical history, treatment
                acknowledgements
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Inconsistent hygiene documentation (cleaning cycles, equipment
                sterilization, incident logs)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                No standardized reporting to track retention, referral sources,
                or therapist utilization
              </span>
            </li>
          </ul>
        </section>

        {/* Goals */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Goals
          </h2>
          <ul className="space-y-3 text-[15px] text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Reduce admin workload through structured intake + automated
                confirmations
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Create a compliant patient-data flow (GDPR-style consent, access
                control, audit trail)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>Standardize hygiene &amp; safety documentation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Improve the patient experience (clear onboarding, reminders,
                transparent policies)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Enable growth (higher capacity per therapist, better retention,
                referral tracking)
              </span>
            </li>
          </ul>
        </section>

        {/* End-to-End Solution */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            End-to-End Solution
          </h2>
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="border border-grid-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded">
                  Phase 1
                </span>
                <span className="text-lg font-bold text-foreground tracking-tight">
                  Clinic Core (MVP)
                </span>
              </div>
              <ul className="space-y-2 text-[15px] text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    QR / link-based patient onboarding (mobile-first intake)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Digital consent package (privacy + data processing +
                    treatment consent)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Patient record structure (intake &rarr; assessment &rarr;
                    treatment plan &rarr; session notes)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Appointment scheduling rules + confirmation emails/SMS
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Admin dashboard (patients, sessions, documents, exports)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Basic reporting (new patients, returning, no-shows,
                    utilization)
                  </span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border border-grid-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded">
                  Phase 2
                </span>
                <span className="text-lg font-bold text-foreground tracking-tight">
                  Compliance &amp; Hygiene Module
                </span>
              </div>
              <ul className="space-y-2 text-[15px] text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Infection-control SOPs and checklists (daily / weekly /
                    monthly)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Sterilization / cleaning logs (equipment, treatment rooms,
                    linens)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>Incident &amp; accident reporting workflow</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Data retention policy + role-based access logic
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Policy bundle: clinic rules, cancellation policy, billing
                    terms
                  </span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border border-grid-300 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-highlight text-white text-xs font-bold px-3 py-1 rounded">
                  Phase 3
                </span>
                <span className="text-lg font-bold text-foreground tracking-tight">
                  Optimization &amp; Scale
                </span>
              </div>
              <ul className="space-y-2 text-[15px] text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Automation rules (reminders, follow-ups, missed-appointment
                    recovery)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Referral &amp; partner tracking (doctors, gyms, insurers)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Patient retention analytics (visit frequency, drop-off
                    points)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>
                    Multi-therapist scaling (capacity planning + performance
                    dashboards)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-highlight mt-1 shrink-0">&bull;</span>
                  <span>Multi-location readiness</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Value */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            System Value{" "}
            <span className="text-base font-normal text-muted">
              (market equivalent)
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-grid-300">
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
                  ["Phase 1 — Clinic Core (MVP)", "\u20AC12,000 \u2013 \u20AC18,000"],
                  ["Phase 2 — Compliance & Hygiene", "\u20AC6,000 \u2013 \u20AC10,000"],
                  ["Phase 3 — Optimization & Scale", "\u20AC6,000 \u2013 \u20AC12,000"],
                ].map(([phase, value], i) => (
                  <tr
                    key={phase}
                    className={i % 2 === 0 ? "bg-background" : "bg-bg-light"}
                  >
                    <td className="border border-grid-300 px-4 py-3 text-muted">
                      {phase}
                    </td>
                    <td className="border border-grid-300 px-4 py-3 text-muted">
                      {value}
                    </td>
                  </tr>
                ))}
                <tr className="bg-bg-light">
                  <td className="border border-grid-300 px-4 py-3 font-bold text-foreground">
                    Total
                  </td>
                  <td className="border border-grid-300 px-4 py-3 font-bold text-foreground">
                    &euro;24,000 &ndash; &euro;40,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ROI Model */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            ROI Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Savings */}
            <div className="bg-bg-light border border-grid-300 p-4">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                Savings (Year 1)
              </h3>
              <p className="text-xl font-bold text-highlight mb-4">
                &euro;16,000 &ndash; &euro;31,000
              </p>
              <ul className="space-y-2 text-[15px] text-muted leading-relaxed">
                <li className="flex justify-between">
                  <span>Operational efficiency</span>
                  <span className="font-medium text-foreground">
                    &euro;9,000 &ndash; &euro;15,000
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>No-show reduction + scheduling</span>
                  <span className="font-medium text-foreground">
                    &euro;5,000 &ndash; &euro;10,000
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Risk reduction</span>
                  <span className="font-medium text-foreground">
                    &euro;2,000 &ndash; &euro;6,000
                  </span>
                </li>
              </ul>
            </div>

            {/* Growth */}
            <div className="bg-bg-light border border-grid-300 p-4">
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4">
                Growth (Year 1)
              </h3>
              <p className="text-xl font-bold text-highlight mb-4">
                &euro;23,000 &ndash; &euro;40,000
              </p>
              <ul className="space-y-2 text-[15px] text-muted leading-relaxed">
                <li className="flex justify-between">
                  <span>Capacity uplift</span>
                  <span className="font-medium text-foreground">
                    &euro;12,000 &ndash; &euro;18,000
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Retention uplift</span>
                  <span className="font-medium text-foreground">
                    &euro;7,000 &ndash; &euro;12,000
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Referral uplift</span>
                  <span className="font-medium text-foreground">
                    &euro;4,000 &ndash; &euro;10,000
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Total highlight */}
          <div className="bg-highlight/10 border border-highlight/30 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-2 font-mono mb-2">
              Total Year-1 Impact
            </p>
            <p className="text-3xl font-bold text-foreground tracking-tight">
              &euro;28,000 &ndash; &euro;42,000
            </p>
          </div>
        </section>

        {/* Financial Projection */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            Financial Projection
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-grid-300">
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
                  ["6 months", "\u20AC14,000 \u2013 \u20AC20,000"],
                  ["1 year", "\u20AC28,000 \u2013 \u20AC42,000"],
                  ["2 years (cum.)", "\u20AC88,000 \u2013 \u20AC120,000"],
                  ["5 years (cum.)", "\u20AC170,000 \u2013 \u20AC230,000"],
                ].map(([period, impact], i) => (
                  <tr
                    key={period}
                    className={i % 2 === 0 ? "bg-background" : "bg-bg-light"}
                  >
                    <td className="border border-grid-300 px-4 py-3 text-muted">
                      {period}
                    </td>
                    <td className="border border-grid-300 px-4 py-3 text-muted font-medium">
                      {impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bar Chart */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-2 font-mono mb-2">
              Cumulative Impact Projection
            </p>
            {[
              { label: "6 months", value: "\u20AC14k\u2013\u20AC20k", pct: 9 },
              { label: "1 year", value: "\u20AC28k\u2013\u20AC42k", pct: 18 },
              { label: "2 years", value: "\u20AC88k\u2013\u20AC120k", pct: 52 },
              { label: "5 years", value: "\u20AC170k\u2013\u20AC230k", pct: 100 },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="text-sm text-muted w-[80px] shrink-0 text-right">
                  {row.label}
                </span>
                <div className="flex-1 bg-bg-light border border-grid-300 h-8 relative overflow-hidden">
                  <div
                    className="bg-highlight h-full transition-all duration-500"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground w-[130px] shrink-0">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* What Makes This E2E */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-6">
            What Makes This End-to-End
          </h2>
          <ul className="space-y-3 text-[15px] text-muted leading-relaxed">
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Mapped operational bottlenecks and patient-flow friction points
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Designed compliant data + consent system with audit trail
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>
                Standardized hygiene documentation (infection-control, cleaning,
                sterilization)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>Improved capacity and predictability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-highlight mt-1 shrink-0">&bull;</span>
              <span>Prepared scalable structure for growth</span>
            </li>
          </ul>
        </section>

        {/* One-Line Summary */}
        <section className="mb-14">
          <div className="border-l-4 border-highlight pl-6 py-2">
            <p className="text-[15px] leading-relaxed text-muted font-serif italic">
              &ldquo;We transformed a physiotherapy clinic from manual admin and
              fragmented records into a scalable healthcare operating system
              &mdash; with a conservative &euro;28k&ndash;&euro;42k Year-1
              impact and a 5-year path to ~&euro;170k&ndash;&euro;230k total
              value.&rdquo;
            </p>
          </div>
        </section>

        {/* Next Case Study */}
        <div className="mt-16 pt-10 border-t border-grid-300 text-right">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono mb-3">
            {t.caseStudyPages.nextCaseStudy}
          </p>
          <Link
            href="/case-studies/consulting"
            className="group inline-flex items-center gap-3 text-foreground hover:text-highlight transition-colors"
          >
            <span className="text-xl font-semibold tracking-tight">
              {t.caseStudyPages.consulting.title}
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
