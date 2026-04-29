"use client";

const BLINK_STYLES = `
  @keyframes lab-pulse { 0%,100% { opacity:1 } 50% { opacity:0.35 } }
  @keyframes lab-dot   { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.3; transform:scale(0.75) } }
  .lab-badge { animation: lab-pulse 2.4s ease-in-out infinite; }
  .lab-dot   { animation: lab-dot   1.2s ease-in-out infinite; }
`;

const TOOLS = [
  {
    emoji: "🎵",
    title: "BPM Detector",
    description: "Upload a track. Get the tempo instantly.",
  },
  {
    emoji: "🎼",
    title: "Key Finder",
    description: "Find the key of any track in seconds.",
  },
  {
    emoji: "📋",
    title: "DJ Set Planner",
    description: "Build harmonically perfect sets.",
  },
  {
    emoji: "🎛️",
    title: "Mastering Guide",
    description: "Master your track to Spotify standards.",
  },
];

function DevBadge() {
  return (
    <>
      <style>{BLINK_STYLES}</style>
      <div
        className="lab-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium mb-4 self-start"
        style={{
          background: "rgba(239,68,68,0.12)",
          border: "1px solid rgba(239,68,68,0.35)",
          color: "#ef4444",
        }}
      >
        <span className="lab-dot inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#ef4444" }} />
        IN DEVELOPMENT
      </div>
    </>
  );
}

export default function MusicLabSection() {
  return (
    <section id="lab" className="relative py-20 px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle green radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,179,154,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-4">
            Coming Soon
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight text-white leading-[1.2] mb-4">
            {"Andy'K Music Lab".split(" ").map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "font-serif italic font-light" : ""}>{i > 0 ? " " : ""}{word}</span>
            ))}
          </h2>
          <p className="text-base text-white/60 font-light">
            Free tools for producers and DJs — built by DJ Andy&apos;K.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl p-6 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(99,179,154,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <DevBadge />
              <span className="text-2xl mb-3">{tool.emoji}</span>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">{tool.title}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-highlight font-mono mb-4">
            Launching on lab.djandyofficial.com
          </p>
          <a
            href="mailto:info@djandyofficial.com?subject=Andy'K Music Lab Waitlist"
            className="inline-flex items-center gap-2 h-11 px-7 text-sm font-semibold text-white rounded border border-highlight hover:bg-highlight/10 transition-colors"
          >
            Join Waitlist
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
          <p className="text-xs text-white/30 mt-4 font-light">
            Be the first to know when Andy&apos;K Music Lab goes live.
          </p>
        </div>
      </div>
    </section>
  );
}
