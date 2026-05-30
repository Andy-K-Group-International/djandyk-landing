"use client";

const WAVE_HEIGHTS = [
  16, 24, 36, 52, 65, 72, 60, 78, 70, 55, 80, 72, 64, 76, 58, 82, 74, 66,
  88, 78, 90, 82, 76, 92, 88, 80, 92, 84, 78, 88, 82, 72, 86, 76, 66, 80,
  70, 60, 74, 62, 52, 68, 56, 44, 58, 40, 28, 18,
];

function LabWaveform() {
  return (
    <div className="lab-waveform" aria-hidden="true">
      {WAVE_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="lab-wave-bar"
          style={{
            height: `${h}px`,
            animationDelay: `${((i * 0.075) % 1.8).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}

const PLANS = [
  {
    id: "studio",
    name: "Studio Pass",
    price: "£29",
    period: "/ month",
    badge: "COMING SOON",
    tag: null,
    highlighted: false,
    features: [
      "Mastering — 3x per month",
      "BPM + Key Detector — unlimited",
      "DJ Set Planner — unlimited",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro Pass",
    price: "£199",
    period: "/ year",
    badge: "BEST VALUE · COMING SOON",
    tag: "Most Popular",
    highlighted: true,
    features: [
      "Everything in Studio Pass",
      "Mastering — unlimited",
      "1x personal Mix Feedback from DJ Andy'K per month",
      "Early access to new tools",
      "Priority support",
    ],
  },
  {
    id: "single",
    name: "Single Session",
    price: "£49",
    period: "/ one-time",
    badge: "COMING SOON",
    tag: null,
    highlighted: false,
    features: [
      "1x Mastering",
      "1x Mix Feedback",
      "BPM + Key — 5x",
    ],
  },
] as const;

const WAITLIST = "mailto:ceo@andykgroup.com?subject=Andy'K Music Lab Waitlist";

const CHECK_ICON = (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#111111" }}>
    <path d="M3 8l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MusicLabSection() {
  return (
    <section id="lab" className="relative pt-10 pb-0 px-8 overflow-hidden" style={{ background: "#F5F5F5" }}>
      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-[#111111] leading-[1.2] mb-4">
            <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
            Music{" "}
            <span className="font-serif italic font-light">Lab</span>
          </h2>
          <p className="text-base text-[rgba(0,0,0,0.6)] font-light">
            Professional music tools for producers and DJs — built by DJ Andy&apos;K.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`lab-pricing-card rounded-xl flex flex-col${plan.highlighted ? " lab-pricing-card--pro md:-mt-5" : ""}`}
              style={
                plan.highlighted
                  ? {
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.25)",
                      boxShadow: "0 0 48px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.1)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.1)",
                    }
              }
            >
              {/* Most Popular badge row */}
              {plan.tag ? (
                <div className="px-6 pt-5 pb-0">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      color: "#111111",
                    }}
                  >
                    ⭐ Most Popular
                  </span>
                </div>
              ) : null}

              <div className={`p-6 flex flex-col flex-1${plan.tag ? " pt-4" : ""}`}>
                {/* Plan name */}
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[rgba(0,0,0,0.45)] mb-3">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-bold text-[#111111]${plan.highlighted ? " text-4xl" : " text-3xl"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-[rgba(0,0,0,0.35)]">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[rgba(0,0,0,0.65)]">
                      {CHECK_ICON}
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WAITLIST}
                  className="block w-full text-center py-2.5 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    plan.highlighted
                      ? {
                          background: "#111111",
                          border: "1px solid transparent",
                          color: "#ffffff",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid rgba(0,0,0,0.18)",
                          color: "#111111",
                        }
                  }
                >
                  Join Waitlist →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-[rgba(0,0,0,0.3)] mt-10 mb-16 font-light">
          Launching on lab.djandyofficial.com — be first in line.
        </p>
      </div>

      {/* Waveform pinned to bottom of Lab section */}
      <LabWaveform />

      <style>{`
        .lab-pricing-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .lab-pricing-card:hover {
          transform: translateY(-4px);
          background: #f8f8f8 !important;
          border-color: rgba(0,0,0,0.2) !important;
        }
        .lab-pricing-card--pro:hover {
          background: #f5f5f5 !important;
          box-shadow: 0 0 48px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.15), 0 12px 48px rgba(0,0,0,0.12) !important;
          border-color: rgba(0,0,0,0.3) !important;
        }
      `}</style>
    </section>
  );
}
