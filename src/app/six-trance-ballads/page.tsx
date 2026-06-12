"use client";

import { useState } from "react";
import Link from "next/link";

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
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "I knew this air before. But not with these lungs.",
      "I knew these lights before. But not with these eyes.",
      "I did not come back. I arrived as someone else.",
      "The floor remembers footsteps that no longer belong to me.",
      "The glass reflects a face I had to become carefully.",
      "I carried no answers, only proof I survived the change.",
      "Do not ask where I was. Some places never explain.",
      "Do not call me by yesterday. I do not turn to that name.",
      "I arrived as someone else, under lights that knew me before.",
      "The streets kept all my shadows, but I don't live there anymore.",
      "I did not come back broken. I came back passing through.",
    ],
  },
  {
    n: 2,
    title: "A Letter With No Address",
    from: "From me, to someone I couldn't name.",
    line: "A letter unsent. A feeling without a name.",
    status: "soon" as const,
    coverUrl: "/releases/a-letter-with-no-address.png",
    accent: "#a78bfa",
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "I wrote your name in silence. But silence gave it back.",
      "I folded every question and left the answer blank.",
      "This was never sent. It had nowhere to go.",
      "There is a page inside me I never learned to close.",
      "A sentence with no ending, a place nobody knows.",
      "I did not know your number. I did not know your name.",
      "But something in the empty line kept writing you the same.",
      "I wrote a letter with no address, to someone I could never name.",
      "I left it open on the table, but the silence never came.",
      "No address. No name. I wrote it anyway.",
    ],
  },
  {
    n: 3,
    title: "If This Finds You",
    from: "From me, to you.",
    line: "A message for the one who needed to hear it today.",
    status: "soon" as const,
    coverUrl: "/releases/if-this-finds-you.png",
    accent: "#60a5fa",
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "If this finds you tired, you don't have to explain.",
      "Let the room stay quiet. Let the night keep your name.",
      "You made it this far. That is enough for now.",
      "I don't know where you are listening. I don't know what today became.",
      "Maybe you are holding everything and calling it by no name.",
      "I won't tell you to be stronger. I won't tell you what to do.",
      "I only made a little space and left it here for you.",
      "If this finds you, let it stay beside you.",
      "You don't have to become light just to make it through.",
      "You are still here today.",
    ],
  },
  {
    n: 4,
    title: "Whatever You Believe",
    from: "From me, to God.",
    line: "I call it God. But whatever you believe, I hope it hears you too.",
    status: "soon" as const,
    coverUrl: "/releases/whatever-you-believe.png",
    accent: "#fbbf24",
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "I don't know what you call it when the night stops answering.",
      "God. Mercy. Light. Nothing. I only know I was still speaking.",
      "I have asked the ceiling questions it could never keep.",
      "Not for heaven. Not for proof. Just for one quiet second where I did not have to carry everything alone.",
      "I won't tell you what is holy. I won't tell you what is true.",
      "Some people kneel in silence. Some just break in two.",
      "Whatever you believe, I hope it finds you there.",
      "When your voice has left your body and your name feels hard to wear.",
      "I call it God. But whatever you believe, I hope it hears you too.",
    ],
  },
  {
    n: 5,
    title: "The Past Still Had My Voice",
    from: "From me, to the past.",
    line: "A voice I left behind, still calling through the dark.",
    status: "soon" as const,
    coverUrl: "/releases/the-past-still-had-my-voice.png",
    accent: "#f87171",
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "I did not open the door to go back inside.",
      "I only came to listen to what I left behind.",
      "The past still had my voice. I came to take it back.",
      "There were years I never answered, stacked like boxes in the dark.",
      "I won't ask the past for mercy. I won't ask it to explain.",
      "The past still had my voice, so I came to take it back.",
      "Not the years, not the reason, not the road that turned to black.",
      "I can hear the boy I was, without becoming him somehow.",
      "The past still had my voice. Now it doesn't.",
    ],
  },
  {
    n: 6,
    title: "If Tomorrow Lets Me In",
    from: "From me, to tomorrow.",
    line: "A door of light, waiting after the dark.",
    status: "soon" as const,
    coverUrl: "/releases/if-tomorrow-lets-me-in.png",
    accent: "#86efac",
    audioSrc: "",
    soundcloudUrl: null as string | null,
    spotifyUrl: null as string | null,
    lyrics: [
      "I don't know your face yet. I don't know your name.",
      "But I have walked through enough night to know I am not the same.",
      "If tomorrow lets me in, I won't arrive empty.",
      "There are mornings I have not met, waiting somewhere out of view.",
      "I am not asking for a promise. I am not asking for a sign.",
      "I have carried what was heavy. I have buried what was gone.",
      "If tomorrow lets me in, I will not arrive empty.",
      "I will bring the nights I crossed and the voice they couldn't end in me.",
      "I have lost enough of yesterday to walk in with my name.",
      "From me, to tomorrow.",
    ],
  },
];

type Track = (typeof TRACKS)[number];

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
      style={{
        background: "#0c1119",
        borderColor: "#1e2939",
        borderTopColor: track.accent,
        borderTopWidth: "2px",
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
        <div
          className="absolute inset-0 flex items-end p-4"
          style={{ background: "linear-gradient(to top, #0c111988 40%, transparent)" }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-[0.3em] px-2 py-1 rounded border"
            style={{ color: track.accent, borderColor: `${track.accent}55`, background: "#0c111988" }}
          >
            {track.status === "out" ? `Out Now · ${track.date}` : "Coming Soon"}
          </span>
        </div>
      </div>

      {/* Track info */}
      <div className="p-5 flex flex-col flex-1">
        {/* Number + from */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono font-bold" style={{ color: track.accent }}>
            {String(track.n).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-mono" style={{ color: "#2d3f52" }}>/</span>
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "#4a5568" }}>
            {track.from}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold tracking-tight mb-2 leading-snug"
          style={{ color: track.status === "out" ? "#f0f6fc" : "#94a3b8" }}
        >
          {track.title}
        </h3>

        {/* Core line */}
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: "#4a5568", fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          "{track.line}"
        </p>

        {/* Audio player */}
        <div className="mt-4">
          <audio
            controls
            src={track.audioSrc || undefined}
            className="w-full h-8"
            style={{
              accentColor: track.accent,
              colorScheme: "dark",
              borderRadius: "6px",
              opacity: track.audioSrc ? 1 : 0.35,
            }}
          >
            Your browser does not support the audio element.
          </audio>
          {!track.audioSrc && (
            <p className="text-[10px] font-mono mt-1" style={{ color: "#2d3f52" }}>
              Audio coming soon
            </p>
          )}
        </div>

        {/* Lyrics toggle */}
        <button
          onClick={() => setLyricsOpen((o) => !o)}
          className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-opacity hover:opacity-70 w-fit"
          style={{ color: track.accent }}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3 h-3 transition-transform duration-200"
            style={{ transform: lyricsOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <path d="M6 4l4 4-4 4" />
          </svg>
          {lyricsOpen ? "Hide lyrics" : "Read lyrics"}
        </button>

        {/* Lyrics block */}
        {lyricsOpen && (
          <div
            className="mt-3 rounded-lg p-4 border"
            style={{ background: "#080d13", borderColor: "#1e2939" }}
          >
            {track.lyrics.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed"
                style={{
                  color: "#94a3b8",
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  marginBottom: i < track.lyrics.length - 1 ? "0.5rem" : 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Streaming links */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {track.soundcloudUrl ? (
            <a
              href={track.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
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
          {track.spotifyUrl ? (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
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
      </div>
    </div>
  );
}

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
            <TrackCard key={track.n} track={track} />
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
