"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from "react";

const EMBED_URL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  "https://soundcloud.com/djandyk_2024/this-is-dj-andyk-music-is-your-passion-official-album-intro-2025"
)}&color=%2363B39A&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`;

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M5.25 3.75a.75.75 0 00-1.25.56v7.38a.75.75 0 001.25.56l5.5-3.69a.75.75 0 000-1.12L5.25 3.75z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M4 3a1 1 0 00-1 1v8a1 1 0 002 0V4a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v8a1 1 0 002 0V4a1 1 0 00-1-1z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
      <path d="M8 3L4.5 6H2v4h2.5L8 13V3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 5.5a3 3 0 010 5" strokeLinecap="round" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
      <path d="M8 3L4.5 6H2v4h2.5L8 13V3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 6l3 3m0-3l-3 3" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
      <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
    </svg>
  );
}

export default function FloatingPlayer() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function sc(method: string, value?: unknown) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method, value }),
      "*"
    );
  }

  function togglePlay() {
    if (playing) {
      sc("pause");
      setPlaying(false);
    } else {
      sc("play");
      sc("setVolume", muted ? 0 : 80);
      setPlaying(true);
    }
  }

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    if (playing) sc("setVolume", next ? 0 : 80);
  }

  function dismiss() {
    sc("pause");
    setPlaying(false);
    setVisible(false);
    setDismissed(true);
  }

  if (dismissed) return null;

  return (
    <>
      {/* SoundCloud iframe — always mounted, hidden */}
      <iframe
        ref={iframeRef}
        src={EMBED_URL}
        allow="autoplay"
        title="SoundCloud Player"
        style={{ display: "none", position: "absolute", width: 0, height: 0 }}
      />

      {/* Player UI */}
      <div
        aria-label="Floating music player"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[320px] glass-card rounded-2xl p-3.5 flex items-center gap-3 shadow-[0_8px_40px_rgba(99,179,154,0.2)] transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Cover art */}
        <img
          src="/albums/music-is-your-passion.jpg"
          alt="Music Is Your Passion"
          className="w-12 h-12 rounded-xl object-cover shrink-0"
        />

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground truncate leading-tight">
            Music Is Your Passion
          </p>
          <p className="text-xs text-muted-2 truncate">DJ Andy&apos;K</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-highlight" />
            <span className="text-[10px] font-mono text-highlight uppercase tracking-wide">
              {playing ? (muted ? "Playing · Muted" : "Playing") : "Intro · 2025"}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-soft-green transition-colors text-muted-2 hover:text-highlight"
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? <MutedIcon /> : <VolumeIcon />}
          </button>

          <button
            onClick={togglePlay}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-highlight hover:bg-deep-teal transition-colors text-white"
            title={playing ? "Pause" : "Play"}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <button
            onClick={dismiss}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-soft-green transition-colors text-muted-2 hover:text-foreground ml-0.5"
            title="Close player"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
}
