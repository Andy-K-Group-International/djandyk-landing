"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TRACKS = [
  {
    n: 1,
    title: "I Arrived As Someone Else",
    from: "From me, to me.",
    line: "I did not come back. I arrived as someone else.",
    status: "out" as const,
    date: "17.6.2026",
    coverUrl: "/releases/i-arrived-as-someone-else.png",
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

const GREEN = "#63B39A";

function TrackCard({ track }: { track: Track }) {
  const [lyricsOpen, setLyricsOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderTop: `2px solid ${GREEN}`,
      }}
    >
      {/* Cover — full width square */}
      <div className="aspect-square w-full relative overflow-hidden">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full h-full object-cover"
          style={{
            filter: track.status === "soon" ? "brightness(0.65) saturate(0.75)" : "none",
          }}
        />
        <div
          className="absolute inset-0 flex items-end p-4"
          style={{ background: "linear-gradient(to top, rgba(13,17,23,0.85) 20%, transparent)" }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
            style={{
              color: track.status === "out" ? GREEN : "rgba(255,255,255,0.4)",
              borderColor: track.status === "out" ? `${GREEN}55` : "rgba(255,255,255,0.15)",
              background: "rgba(13,17,23,0.7)",
            }}
          >
            {track.status === "out" ? `Out Now · ${track.date}` : "Coming Soon"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Number + address line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold" style={{ color: GREEN }}>
            {String(track.n).padStart(2, "0")}
          </span>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            {track.from}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold tracking-tight mb-2 leading-snug font-sans"
          style={{ color: track.status === "out" ? "#f0f6fc" : "rgba(255,255,255,0.55)" }}
        >
          {track.title}
        </h3>

        {/* Core line */}
        <p
          className="text-sm leading-relaxed mb-5 font-serif italic"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          "{track.line}"
        </p>

        {/* Audio player */}
        <div className="mb-4">
          <audio
            controls
            src={track.audioSrc || undefined}
            className="w-full"
            style={{
              height: "36px",
              accentColor: GREEN,
              colorScheme: "dark",
              borderRadius: "8px",
              opacity: track.audioSrc ? 1 : 0.3,
            }}
          >
            Your browser does not support the audio element.
          </audio>
          {!track.audioSrc && (
            <p className="text-[10px] font-mono mt-1.5" style={{ color: "rgba(255,255,255,0.2)" }}>
              Audio coming soon
            </p>
          )}
        </div>

        {/* Lyrics toggle */}
        <button
          onClick={() => setLyricsOpen((o) => !o)}
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-4 transition-opacity hover:opacity-70 w-fit"
          style={{ color: GREEN }}
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
            className="rounded-xl p-5 mb-4"
            style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {track.lyrics.map((line, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed font-serif"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: i < track.lyrics.length - 1 ? "0.5rem" : 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Streaming links */}
        <div className="flex gap-2 flex-wrap">
          {track.soundcloudUrl ? (
            <a
              href={track.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#ff5500", borderColor: "rgba(255,85,0,0.35)" }}
            >
              SoundCloud
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              SoundCloud — soon
            </span>
          )}
          {track.spotifyUrl ? (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border transition-opacity hover:opacity-70"
              style={{ color: "#1db954", borderColor: "rgba(29,185,84,0.35)" }}
            >
              Spotify
            </a>
          ) : (
            <span
              className="text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded border"
              style={{ color: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Streaming — soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SixTranceBalladsClient() {
  return (
    <>
      <Navbar />

      <main className="pt-[60px] min-h-screen font-sans" style={{ background: "#0d1117" }}>
        {/* Hero */}
        <section className="px-6 pt-20 pb-14 max-w-[680px] mx-auto text-center">
          <span
            className="inline-block text-[10px] font-mono uppercase tracking-[0.35em] mb-6 px-3 py-1 rounded-full border"
            style={{ color: GREEN, borderColor: `${GREEN}33`, background: `${GREEN}0d` }}
          >
            Album · Trance Ballads · 2026
          </span>

          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-3 font-sans"
            style={{ color: "#f0f6fc" }}
          >
            I Arrived As{" "}
            <span className="font-serif italic font-light">Someone Else</span>
          </h1>

          <p
            className="text-lg font-light mb-5 font-mono uppercase tracking-[0.2em]"
            style={{ color: GREEN }}
          >
            Six Trance Ballads
          </p>

          <p
            className="text-base italic font-light mb-4 font-serif"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            "I did not come back. I arrived as someone else."
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
            Six emotional trance ballads written as personal letters. A cinematic trance project
            by DJ Andy'K.
          </p>
        </section>

        {/* SoundCloud early access */}
        <div className="px-6 pb-14 max-w-[680px] mx-auto">
          <div
            className="flex items-start gap-3 px-5 py-4 rounded-xl"
            style={{ background: "rgba(255,85,0,0.06)", border: "1px solid rgba(255,85,0,0.25)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="#ff5500">
              <path d="M11.56 8.87V17h8.76c.96 0 1.68-.8 1.68-1.84 0-.76-.4-1.44-1.04-1.76l-.08-.04-.04-.08a2.87 2.87 0 0 0-2.8-3.52c-.12 0-.24 0-.36.04a4.63 4.63 0 0 0-4.56-3.92c-.64 0-1.28.12-1.56.99zM0 15.24C0 16.2.84 17 1.88 17H9V9.72c-.4-.48-.96-.76-1.56-.76-.92 0-1.72.64-1.92 1.52a2.4 2.4 0 0 0-1.24-.32C2.8 10.16 1.6 11.2 1.6 12.48c0 .2 0 .36.04.52C.68 13.24 0 14.16 0 15.24z" />
            </svg>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "#ff5500" }}>
                SoundCloud Early Access
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Every release arrives on SoundCloud 5–7 days early. Because I still believe in it.
              </p>
            </div>
          </div>
        </div>

        {/* Track list — single column */}
        <section className="px-6 pb-24 max-w-[680px] mx-auto">
          <div className="flex flex-col gap-6">
            {TRACKS.map((track) => (
              <TrackCard key={track.n} track={track} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer in white wrapper so site CSS vars render correctly */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}
