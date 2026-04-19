"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRACKLISTS } from "@/lib/data";

const FEATURED_RELEASES = [
  {
    kicker: "Album · 2026",
    title: "When Later Becomes Never",
    genre: "Progressive House / House",
    description: "A journey through emotion, memory, and release. Eleven tracks, one story.",
    href: "https://open.spotify.com/album/1ezdr7EOZWuLBiw7Rpqis6",
    cover: "/albums/when-later-becomes-never.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Human Stories",
    genre: "House / Progressive House",
    description: "A house album with emotional depth — four tracks also released in piano versions.",
    note: "5 tracks available now \u00B7 Full album coming soon",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    cover: "/albums/human-stories.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Deep Connections",
    genre: "House / Progressive House",
    description: "Connection is the core. Every track a bridge between two worlds.",
    note: "Recorded 2025 \u00B7 Released as album 2026",
    href: "https://open.spotify.com/album/39Zb0euYMqdqg658wqKVGU",
    cover: "/albums/deep-connections.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Music Is Your Passion",
    genre: "Trance",
    description: "Where it all began. The sound that defines everything that followed.",
    note: "Recorded 2025 \u00B7 Released as album 2026",
    href: "https://open.spotify.com/album/2en5D8nLMSTpRE6fhS1BJY",
    cover: "/albums/music-is-your-passion.jpg",
  },
  {
    kicker: "EP · 2026",
    title: "Four Elements",
    genre: "Deep Melodic / Progressive",
    description: "Four tracks. Four feelings. One direction.",
    href: "https://open.spotify.com/album/18OaI45bkpYwJtzL59BoUw",
    cover: "/albums/four-elements.jpg",
  },
];

function CoverPlaceholder({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="w-full aspect-square rounded-xl flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(220,239,230,0.6) 0%, rgba(168,213,194,0.3) 100%)",
      }}
    >
      <span className="text-3xl font-bold font-serif tracking-widest" style={{ color: "rgba(47,107,88,0.3)" }}>
        {initials}
      </span>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M5.25 3.75a.75.75 0 00-1.25.56v7.38a.75.75 0 001.25.56l5.5-3.69a.75.75 0 000-1.12L5.25 3.75z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
      <path d="M2.5 4h11M2.5 8h11M2.5 12h7" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlbumCard({ release }: { release: typeof FEATURED_RELEASES[0] }) {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [tracklistOpen, setTracklistOpen] = useState(false);
  const tracks = TRACKLISTS[release.title] ?? null;

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,179,154,0.12)] hover:border-highlight/30">
      {/* Cover art */}
      <div className="mb-5 rounded-xl overflow-hidden">
        {release.cover ? (
          <img
            src={release.cover}
            alt={release.title}
            className="w-full aspect-square object-cover"
          />
        ) : (
          <CoverPlaceholder title={release.title} />
        )}
      </div>

      {/* Kicker */}
      <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono mb-2 block">
        {release.kicker}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-1 leading-snug">
        {release.title}
      </h3>

      {/* Genre */}
      <p className="text-sm font-light italic text-muted-2 mb-3">{release.genre}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">{release.description}</p>

      {/* Note */}
      {"note" in release && release.note && (
        <p className="text-[11px] font-mono text-muted-2 mt-2 italic">{release.note as string}</p>
      )}

      {/* Action row */}
      <div className="mt-5 flex items-center gap-2 flex-wrap">
        <a
          href={release.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-highlight hover:text-deep-teal transition-colors"
        >
          Listen Now
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>

        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={() => { setPlayerOpen(!playerOpen); setTracklistOpen(false); }}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors ${
              playerOpen
                ? "bg-highlight text-white border-highlight"
                : "text-muted-2 border-grid-500 hover:border-highlight hover:text-highlight"
            }`}
            title="Toggle player"
          >
            <PlayIcon />
            Player
          </button>
          <button
            onClick={() => { setTracklistOpen(!tracklistOpen); setPlayerOpen(false); }}
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors ${
              tracklistOpen
                ? "bg-highlight text-white border-highlight"
                : "text-muted-2 border-grid-500 hover:border-highlight hover:text-highlight"
            }`}
            title="Toggle tracklist"
          >
            <ListIcon />
            Tracks
            <ChevronIcon open={tracklistOpen} />
          </button>
        </div>
      </div>

      {/* Spotify embed — lazy: only mounts when playerOpen */}
      {playerOpen && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <iframe
            src={release.href.replace("https://open.spotify.com/", "https://open.spotify.com/embed/") + "?utm_source=generator"}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </div>
      )}

      {/* Tracklist accordion */}
      {tracklistOpen && (
        <div className="mt-4 border-t border-grid-300 pt-4">
          {tracks ? (
            <ol className="space-y-1.5">
              {tracks.map((track) => (
                <li key={track.num} className="flex items-baseline gap-3 group/track">
                  <span className="text-[10px] font-mono text-muted-2 w-7 shrink-0 text-right">
                    {track.num}
                  </span>
                  <span className={`text-sm text-muted leading-snug ${
                    track.num.includes(".") ? "italic text-muted-2 text-xs" : ""
                  }`}>
                    {track.title}
                  </span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-xs italic text-muted-2">Tracklist coming soon</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FeaturedAlbums() {
  const { t } = useLanguage();

  return (
    <section id="featured" className="relative pt-10 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.featured.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.featured.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.featured.headingItalic}
            </span>
          </h2>
          <p className="text-base text-muted font-light">{t.featured.description}</p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {FEATURED_RELEASES.slice(0, 3).map((release) => (
            <AlbumCard key={release.title} release={release} />
          ))}
        </div>

        {/* Row 2: 2 cards centred */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
          {FEATURED_RELEASES.slice(3).map((release) => (
            <AlbumCard key={release.title} release={release} />
          ))}
        </div>
      </div>
    </section>
  );
}
