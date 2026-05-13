export default function MusicLabBanner() {
  return (
    <section className="relative py-16 px-8 overflow-hidden" style={{ background: "#060f0c" }}>
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(99,179,154,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full"
          style={{
            background: "rgba(99,179,154,0.12)",
            border: "1px solid rgba(99,179,154,0.35)",
            color: "#63b39a",
          }}
        >
          Now Live
        </span>

        <h2 className="text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-bold tracking-tight text-white leading-[1.2] mb-3">
          🎛️{" "}
          <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
          Music{" "}
          <span className="font-serif italic font-light">Lab</span>{" "}
          is Live!
        </h2>

        <p className="text-base text-white/55 font-light mb-2">
          Free professional tools for producers and DJs.
        </p>
        <p
          className="text-sm font-mono mb-8"
          style={{ color: "rgba(99,179,154,0.75)" }}
        >
          BPM Detector · DJ Planner · Mastering Tool
        </p>

        <a
          href="https://lab.djandykofficial.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "rgba(99,179,154,0.18)",
            border: "1px solid rgba(99,179,154,0.55)",
            color: "#63b39a",
            boxShadow: "0 0 24px rgba(99,179,154,0.15)",
          }}
        >
          Try Now →
        </a>
      </div>
    </section>
  );
}
