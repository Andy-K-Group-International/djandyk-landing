import Link from "next/link";

export default function SixTranceBalladsPromo() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
      {/* Album artwork background */}
      <img
        src="/releases/six-trance-ballads-the-album.png"
        alt="I Arrived As Someone Else — Six Trance Ballads"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.45) saturate(0.85)" }}
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.25) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-8 py-16 text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-5 px-3 py-1 rounded-full"
          style={{
            background: "rgba(99,179,154,0.15)",
            border: "1px solid rgba(99,179,154,0.4)",
            color: "#63B39A",
          }}
        >
          New Album — Out Now
        </span>

        <h2
          className="text-[clamp(1.8rem,1.4rem+1.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-3"
          style={{ color: "#ffffff" }}
        >
          I Arrived As{" "}
          <span className="font-serif italic font-light">Someone Else</span>
        </h2>

        <p className="text-base font-light mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>
          Six Trance Ballads · DJ Andy&apos;K
        </p>

        <p className="text-sm font-mono mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
          Six personal letters in trance · Listen now on SoundCloud &amp; Spotify
        </p>

        <Link
          href="/six-trance-ballads"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#ffffff", color: "#111111" }}
        >
          View Album →
        </Link>
      </div>
    </section>
  );
}
