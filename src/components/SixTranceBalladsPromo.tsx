import Link from "next/link";

export default function SixTranceBalladsPromo() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F5F5", paddingTop: "56px", paddingBottom: "56px", paddingInline: "2rem" }}
    >
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full"
          style={{
            background: "rgba(99,179,154,0.1)",
            border: "1px solid rgba(99,179,154,0.35)",
            color: "#63B39A",
          }}
        >
          New Album
        </span>

        <h2
          className="text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-bold tracking-tight leading-[1.2] mb-3"
          style={{ color: "#111111" }}
        >
          I Arrived As{" "}
          <span className="font-serif italic font-light">Someone Else</span>
        </h2>

        <p className="text-base font-light mb-2" style={{ color: "#525252" }}>
          Six Trance Ballads · First release: 17.6.2026
        </p>

        <p className="text-sm font-mono mb-8" style={{ color: "rgba(0,0,0,0.4)" }}>
          Six personal letters in trance · First listen on SoundCloud
        </p>

        <Link
          href="/six-trance-ballads"
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#111111", color: "#ffffff" }}
        >
          View Album →
        </Link>
      </div>
    </section>
  );
}
