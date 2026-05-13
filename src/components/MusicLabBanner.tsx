"use client";

// [h1px, h2px, durationMs, delayMs, bright]
const BARS: [number, number, number, number, boolean][] = [
  [4,  10, 900, 0,   false],
  [6,  16, 820, 80,  false],
  [10, 24, 950, 40,  false],
  [14, 32, 780, 120, false],
  [20, 40, 860, 60,  true ],
  [26, 44, 920, 100, false],
  [32, 52, 840, 20,  false],
  [38, 58, 970, 140, false],
  [44, 62, 800, 80,  true ],
  [50, 66, 880, 40,  false],
  [54, 68, 940, 160, false],
  [56, 64, 810, 100, false],
  [58, 70, 960, 20,  true ],
  [60, 72, 830, 180, false],
  [60, 68, 900, 60,  false],
  [58, 66, 850, 130, false],
  [56, 72, 920, 80,  true ],
  [52, 64, 870, 40,  false],
  [48, 60, 940, 200, false],
  [44, 56, 800, 70,  false],
  [40, 54, 960, 110, true ],
  [36, 50, 820, 30,  false],
  [32, 46, 880, 150, false],
  [26, 40, 910, 90,  false],
  [30, 48, 840, 50,  true ],
  [36, 54, 970, 170, false],
  [42, 60, 800, 30,  false],
  [48, 64, 920, 120, false],
  [54, 70, 860, 60,  true ],
  [58, 72, 940, 80,  false],
  [60, 68, 810, 140, false],
  [58, 66, 880, 20,  false],
  [54, 64, 950, 100, true ],
  [48, 58, 830, 170, false],
  [42, 52, 900, 50,  false],
  [36, 46, 860, 90,  false],
  [28, 40, 970, 130, true ],
  [22, 34, 810, 60,  false],
  [16, 26, 880, 180, false],
  [10, 18, 930, 40,  false],
  [6,  12, 840, 100, false],
  [4,  8,  900, 20,  false],
];

export default function MusicLabBanner() {
  return (
    <section
      className="relative pt-14 pb-0 px-8 overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(126,237,196,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center pb-10">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full"
          style={{
            background: "rgba(126,237,196,0.1)",
            border: "1px solid rgba(126,237,196,0.28)",
            color: "#7eedc4",
          }}
        >
          Now Live
        </span>

        <h2
          className="text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-bold tracking-tight leading-[1.2] mb-3"
          style={{ color: "#ffffff" }}
        >
          🎛️{" "}
          <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
          Music{" "}
          <span className="font-serif italic font-light">Lab</span>{" "}
          is Live!
        </h2>

        <p className="text-base font-light mb-2" style={{ color: "#8b9ab0" }}>
          Free professional tools for producers and DJs.
        </p>
        <p
          className="text-sm font-mono mb-8"
          style={{ color: "rgba(126,237,196,0.65)" }}
        >
          BPM Detector · DJ Planner · Mastering Tool
        </p>

        <a
          href="https://lab.djandykofficial.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "rgba(126,237,196,0.1)",
            border: "1px solid rgba(126,237,196,0.4)",
            color: "#7eedc4",
            boxShadow: "0 0 28px rgba(126,237,196,0.1)",
          }}
        >
          Try Now →
        </a>
      </div>

      {/* Waveform */}
      <div
        className="relative z-10 flex items-end justify-center"
        style={{ height: "80px", gap: "3px", paddingInline: "4px" }}
      >
        {BARS.map(([h1, h2, dur, delay, bright], i) => (
          <div
            key={i}
            className="waveform-bar flex-1 rounded-sm"
            style={{
              minWidth: "2px",
              maxWidth: "10px",
              "--h1": `${h1}px`,
              "--h2": `${h2}px`,
              "--dur": `${dur}ms`,
              "--delay": `${delay}ms`,
              background: bright
                ? "rgba(126,237,196,0.55)"
                : "rgba(126,237,196,0.14)",
            } as React.CSSProperties}
          />
        ))}
      </div>

      <style>{`
        @keyframes waveform-pulse {
          from { height: var(--h1); }
          to   { height: var(--h2); }
        }
        .waveform-bar {
          animation-name: waveform-pulse;
          animation-duration: var(--dur);
          animation-delay: var(--delay);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: both;
          height: var(--h1);
        }
      `}</style>
    </section>
  );
}
