export default function MusicLabBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0d1117", paddingTop: "56px", paddingBottom: "56px", paddingInline: "2rem" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(99,179,154,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full"
          style={{
            background: "rgba(99,179,154,0.1)",
            border: "1px solid rgba(99,179,154,0.28)",
            color: "#63b39a",
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
          style={{ color: "rgba(99,179,154,0.65)" }}
        >
          BPM Detector · DJ Planner · Mastering Tool
        </p>

        <a
          href="https://lab.djandykofficial.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "rgba(99,179,154,0.1)",
            border: "1px solid rgba(99,179,154,0.4)",
            color: "#63b39a",
            boxShadow: "0 0 28px rgba(99,179,154,0.1)",
          }}
        >
          Try Now →
        </a>
      </div>
    </section>
  );
}
