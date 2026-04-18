"use client";

import { useLanguage } from "@/context/LanguageContext";

const FEATURED_RELEASES = [
  {
    kicker: "Album · 2026",
    title: "When Later Becomes Never",
    genre: "Progressive House / Cinematic",
    description: "A journey through emotion, memory, and release. Ten tracks, one story.",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    cover: "/albums/when-later-becomes-never.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Human Stories",
    genre: "Emotional Piano / Melodic House",
    description: "Music built around the moments we rarely speak about.",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    cover: "/albums/human-stories.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Deep Connections",
    genre: "Deep House / Melodic",
    description: "Connection is the core. Every track a bridge between two worlds.",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    cover: "/albums/deep-connections.jpg",
  },
  {
    kicker: "Album · 2026",
    title: "Music Is Your Passion",
    genre: "Progressive House / EDM",
    description: "Where it all began. The sound that defines everything that followed.",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    cover: "/albums/music-is-your-passion.jpg",
  },
  {
    kicker: "EP · 2026",
    title: "Four Elements",
    genre: "Deep Melodic / Progressive",
    description: "Four tracks. Four feelings. One direction.",
    href: "https://hyperfollow.com/djandyk",
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
      <span className="text-3xl font-bold text-deep-teal/30 font-serif tracking-widest">
        {initials}
      </span>
    </div>
  );
}

function AlbumCard({ release }: { release: typeof FEATURED_RELEASES[0] }) {
  return (
    <a
      href={release.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      <div className="glass-card rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,179,154,0.12)] hover:border-highlight/30">
        {/* Cover art */}
        <div className="mb-5 rounded-xl overflow-hidden">
          <CoverPlaceholder title={release.title} />
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

        {/* CTA */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="text-sm font-medium text-highlight transition-colors">
            Listen Now
          </span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3.5 h-3.5 text-highlight transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M6 4l4 4-4 4" />
          </svg>
        </div>
      </div>
    </a>
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
