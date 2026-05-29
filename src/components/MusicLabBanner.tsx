export default function MusicLabBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F5F5", paddingTop: "56px", paddingBottom: "56px", paddingInline: "2rem" }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full"
          style={{
            background: "rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.15)",
            color: "#111111",
          }}
        >
          Now Live
        </span>

        <h2
          className="text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-bold tracking-tight leading-[1.2] mb-3"
          style={{ color: "#111111" }}
        >
          🎛️{" "}
          <span className="font-serif italic font-light">Andy&apos;K</span>{" "}
          Music{" "}
          <span className="font-serif italic font-light">Lab</span>{" "}
          is Live!
        </h2>

        <p className="text-base font-light mb-2" style={{ color: "#525252" }}>
          Free professional tools for producers and DJs.
        </p>
        <p
          className="text-sm font-mono mb-8"
          style={{ color: "rgba(0,0,0,0.45)" }}
        >
          BPM Detector · DJ Planner · Mastering Tool
        </p>

        <a
          href="https://lab.djandykofficial.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "#111111",
            border: "1px solid transparent",
            color: "#ffffff",
          }}
        >
          Try Now →
        </a>
      </div>
    </section>
  );
}
