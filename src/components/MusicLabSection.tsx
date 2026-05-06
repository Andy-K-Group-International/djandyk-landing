"use client";

const PLANS = [
  {
    id: "studio",
    name: "Studio Pass",
    price: "£19",
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
    price: "£149",
    period: "/ year",
    badge: "BEST VALUE · COMING SOON",
    tag: "Most Popular",
    highlighted: true,
    features: [
      "Everything in Studio Pass",
      "Mastering — unlimited",
      "1x personal Mix Feedback from DJ Andy’K per month",
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

const WAITLIST = "mailto:info@djandyofficial.com?subject=Andy'K Music Lab Waitlist";

const CHECK_ICON = (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#63b39a" }}>
    <path d="M3 8l3.5 3.5 6.5-6.5" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MusicLabSection() {
  return (
    <section id="lab" className="relative py-20 px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,179,154,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-4">
            Coming Soon
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-white leading-[1.2] mb-4">
            <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
            Music{" "}
            <span className="font-serif italic font-light">Lab</span>
          </h2>
          <p className="text-base text-white/60 font-light">
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
                      background: "rgba(8,20,16,0.85)",
                      border: "1px solid rgba(99,179,154,0.55)",
                      boxShadow:
                        "0 0 48px rgba(99,179,154,0.2), 0 0 0 1px rgba(99,179,154,0.25), 0 8px 32px rgba(0,0,0,0.5)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(99,179,154,0.18)",
                    }
              }
            >
              {/* Most Popular badge row */}
              {plan.tag ? (
                <div className="px-6 pt-5 pb-0">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest"
                    style={{
                      background: "rgba(99,179,154,0.15)",
                      border: "1px solid rgba(99,179,154,0.45)",
                      color: "#63b39a",
                    }}
                  >
                    ⭐ Most Popular
                  </span>
                </div>
              ) : null}

              <div className={`p-6 flex flex-col flex-1${plan.tag ? " pt-4" : ""}`}>
                {/* Plan name */}
                <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45 mb-3">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1.5">
                  <span
                    className={`font-bold text-white${plan.highlighted ? " text-4xl" : " text-3xl"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/35">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                      {CHECK_ICON}
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Badge */}
                <span
                  className="block text-center text-[9px] font-mono uppercase tracking-[0.2em] pb-3"
                  style={{ color: "rgba(99,179,154,0.55)" }}
                >
                  {plan.badge}
                </span>

                {/* CTA */}
                <a
                  href={WAITLIST}
                  className="block w-full text-center py-2.5 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    plan.highlighted
                      ? {
                          background: "rgba(99,179,154,0.18)",
                          border: "1px solid rgba(99,179,154,0.6)",
                          color: "#63b39a",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.6)",
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
        <p className="text-center text-xs text-white/25 mt-10 font-light">
          Launching on lab.djandyofficial.com — be first in line.
        </p>
      </div>

      <style>{`
        .lab-pricing-card {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .lab-pricing-card:hover {
          transform: translateY(-4px);
        }
        .lab-pricing-card--pro:hover {
          box-shadow: 0 0 60px rgba(99,179,154,0.28), 0 0 0 1px rgba(99,179,154,0.35), 0 12px 48px rgba(0,0,0,0.6) !important;
          border-color: rgba(99,179,154,0.75) !important;
        }
      `}</style>
    </section>
  );
}
