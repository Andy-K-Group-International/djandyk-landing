import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Arrived As Someone Else — Six Trance Ballads | DJ Andy'K",
  description:
    "Six emotional trance ballads written as personal letters. A cinematic trance project by DJ Andy'K. First listen on SoundCloud.",
  alternates: { canonical: "https://www.djandykofficial.com/six-trance-ballads" },
  openGraph: {
    type: "music.album",
    url: "https://www.djandykofficial.com/six-trance-ballads",
    title: "I Arrived As Someone Else — Six Trance Ballads",
    description:
      "Six emotional trance ballads written as personal letters. A cinematic trance project by DJ Andy'K.",
    images: [
      {
        url: "/releases/i-arrived-as-someone-else.png",
        width: 1200,
        height: 1200,
        alt: "I Arrived As Someone Else",
      },
    ],
  },
};

const TRACKS = [
  {
    n: 1,
    title: "I Arrived As Someone Else",
    from: "From me, to me.",
    line: "I did not come back. I arrived as someone else.",
    status: "out" as const,
    date: "17.6.2026",
    coverUrl: "/releases/i-arrived-as-someone-else.png",
    accent: "#7eedc4",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
  },
  {
    n: 2,
    title: "A Letter With No Address",
    from: "From me, to someone I couldn't name.",
    line: "A letter unsent. A feeling without a name.",
    status: "soon" as const,
    coverUrl: "/releases/a-letter-with-no-address.png",
    accent: "#a78bfa",
  },
  {
    n: 3,
    title: "If This Finds You",
    from: "From me, to you.",
    line: "A message for the one who needed to hear it today.",
    status: "soon" as const,
    coverUrl: "/releases/if-this-finds-you.png",
    accent: "#60a5fa",
  },
  {
    n: 4,
    title: "Whatever You Believe",
    from: "From me, to God.",
    line: "I call it God. But whatever you believe, I hope it hears you too.",
    status: "soon" as const,
    coverUrl: "/releases/whatever-you-believe.png",
    accent: "#fbbf24",
  },
  {
    n: 5,
    title: "The Past Still Had My Voice",
    from: "From me, to the past.",
    line: "A voice I left behind, still calling through the dark.",
    status: "soon" as const,
    coverUrl: "/releases/the-past-still-had-my-voice.png",
    accent: "#f87171",
  },
  {
    n: 6,
    title: "If Tomorrow Lets Me In",
    from: "From me, to tomorrow.",
    line: "A door of light, waiting after the dark.",
    status: "soon" as const,
    coverUrl: "/releases/if-tomorrow-lets-me-in.png",
    accent: "#86efac",
  },
];

export default function SixTranceBalladsPage() {
  return (
    <main className="min-h-screen font-sans" style={{ background: "#0d1117", color: "#e2e8f0" }}>
      {/* Top nav */}
      <div className="border-b px-6 py-4 flex items-center gap-4" style={{ borderColor: "#1e2939" }}>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          style={{ color: "#63B39A" }}
        >
          ← DJ Andy'K
        </Link>
        <span style={{ color: "#1e2939" }}>|</span>
        <span className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#4a5568" }}>
          Six Trance Ballads
        </span>
      </div>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-[1100px] mx-auto text-center">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
          style={{ color: "#63B39A", borderColor: "#63B39A33", background: "#63B39A0d" }}
        >
          Album · Trance Ballads · 2026
        </span>

        <h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-3"
          style={{ color: "#f0f6fc" }}
        >
          I Arrived As Someone Else
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light mb-6" style={{ color: "#63B39A" }}>
          Six Trance Ballads
        </p>

        <p
          className="text-base italic font-light mb-4 max-w-[560px] mx-auto"
          style={{ color: "#94a3b8", fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          "I did not come back. I arrived as someone else."
        </p>

        <p className="text-sm max-w-[480px] mx-auto" style={{ color: "#64748b" }}>
          Six emotional trance ballads written as personal letters. A cinematic trance project by
          DJ Andy'K.
        </p>
      </section>

      {/* SoundCloud early access badge */}
      <div className="px-6 pb-16 max-w-[1100px] mx-auto flex justify-center">
        <div
          className="inline-flex items-start gap-3 px-5 py-4 rounded-xl border text-left max-w-[480px]"
          style={{ background: "#0f1923", borderColor: "#ff550066" }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="#ff5500">
            <path d="M11.56 8.87V17h8.76c.96 0 1.68-.8 1.68-1.84 0-.76-.4-1.44-1.04-1.76l-.08-.04-.04-.08a2.87 2.87 0 0 0-2.8-3.52c-.12 0-.24 0-.36.04a4.63 4.63 0 0 0-4.56-3.92c-.64 0-1.28.12-1.56.99zM0 15.24C0 16.2.84 17 1.88 17H9V9.72c-.4-.48-.96-.76-1.56-.76-.92 0-1.72.64-1.92 1.52a2.4 2.4 0 0 0-1.24-.32C2.8 10.16 1.6 11.2 1.6 12.48c0 .2 0 .36.04.52C.68 13.24 0 14.16 0 15.24z" />
          </svg>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "#ff5500" }}>
              SoundCloud Early Access
            </p>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              Every release arrives on SoundCloud 5–7 days early. Because I still believe in it.
            </p>
          </div>
        </div>
      </div>

      {/* Track grid */}
      <section className="px-6 pb-24 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TRACKS.map((track) => (
            <div
              key={track.n}
              className="rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background: "#0c1119",
                borderColor: "#1e2939",
                borderTopColor: track.accent,
                borderTopWidth: "2px",
                boxShadow: `0 0 0 0 ${track.accent}00`,
              }}
            >
              {/* Cover image */}
              <div className="aspect-square w-full relative overflow-hidden">
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: track.status === "soon" ? "brightness(0.7) saturate(0.8)" : "none",
                  }}
                />
                {/* Coming soon overlay */}
                {track.status === "soon" && (
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, #0c111988 40%, transparent)" }}
                  >
                    <span
                      className="text-[9px] font-mono uppercase tracking-[0.3em] px-2 py-1 rounded border"
                      style={{ color: track.accent, borderColor: `${track.accent}55`, background: "#0c111988" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
                {track.status === "out" && (
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, #0c111988 40%, transparent)" }}
                  >
                    <span
                      className="text-[9px] font-mono uppercase tracking-[0.3em] px-2 py-1 rounded border"
                      style={{ color: track.accent, borderColor: `${track.accent}55`, background: "#0c111988" }}
                    >
                      Out Now · {track.date}
                    </span>
                  </div>
                )}
              </div>

              {/* Track info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: track.accent }}
                  >
                    {String(track.n).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: "#2d3f52" }}>/</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#4a5568" }}>
                    {track.from}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold tracking-tight mb-2 leading-snug"
                  style={{ color: track.status === "out" ? "#f0f6fc" : "#94a3b8" }}
                >
                  {track.title}
                </h3>

                <p
                  className="text-sm italic leading-relaxed mt-auto"
                  style={{ color: "#4a5568", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  "{track.line}"
                </p>

                {/* Links — out tracks only */}
                {track.status === "out" && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {"soundcloudUrl" in track && track.soundcloudUrl ? (
                      <a
                        href={track.soundcloudUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-colors hover:opacity-80"
                        style={{ color: "#ff5500", borderColor: "#ff550055" }}
                      >
                        SoundCloud
                      </a>
                    ) : (
                      <span
                        className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
                        style={{ color: "#2d3f52", borderColor: "#1e2939" }}
                      >
                        SoundCloud — soon
                      </span>
                    )}
                    {"spotifyUrl" in track && track.spotifyUrl ? (
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-colors hover:opacity-80"
                        style={{ color: "#1db954", borderColor: "#1db95455" }}
                      >
                        Spotify
                      </a>
                    ) : (
                      <span
                        className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
                        style={{ color: "#2d3f52", borderColor: "#1e2939" }}
                      >
                        Streaming — soon
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="border-t px-6 py-8 text-center" style={{ borderColor: "#1e2939" }}>
        <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "#2d3f52" }}>
          DJ Andy'K · 2026
        </p>
        <Link
          href="/"
          className="text-xs font-mono transition-opacity hover:opacity-60"
          style={{ color: "#63B39A" }}
        >
          djandykofficial.com
        </Link>
      </div>
    </main>
  );
}
