import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY,
  ALBUMS_2026,
  EPS_SINGLES_2026,
  PIANO_SERIES_2026,
  STREAMING_PLATFORMS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Press & Media | DJ Andy'K",
  description:
    "Electronic Press Kit for DJ Andy'K — artist bio, discography, technical info, streaming links, and media contact.",
  alternates: { canonical: "/press" },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-12 ${className}`}>{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-[0.3em] text-highlight font-mono mb-5">
      {children}
    </h2>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0 py-3 border-b border-grid-300">
      <span className="text-xs uppercase tracking-widest text-muted-2 font-mono sm:w-40 shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}

function DownloadCard({
  label,
  note,
  href,
}: {
  label: string;
  note: string;
  href?: string;
}) {
  return (
    <div className="border border-grid-300 rounded-xl p-5 flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold text-foreground mb-0.5">{label}</p>
        <p className="text-xs text-muted-2">{note}</p>
      </div>
      {href ? (
        <a
          href={href}
          download
          className="inline-flex items-center gap-1.5 text-xs font-medium text-highlight hover:text-deep-teal transition-colors"
        >
          Download
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
            <path d="M8 3v8M5 8l3 3 3-3M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ) : (
        <span className="text-xs text-muted-2 italic">Coming soon</span>
      )}
    </div>
  );
}

export default function PressPage() {
  const allReleases = [
    ...ALBUMS_2026.map((a) => ({ ...a, category: "Album" })),
    ...EPS_SINGLES_2026.map((e) => ({ ...e, category: e.type ?? "Single" })),
    ...PIANO_SERIES_2026.map((p) => ({ ...p, category: "Piano Series" })),
  ];

  return (
    <main className="min-h-screen bg-background pt-[60px]">
      <div className="max-w-[860px] mx-auto px-6 py-16 md:py-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to djandyk.com
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="text-[10px] uppercase tracking-[0.35em] text-highlight font-mono block mb-3">
            EPK · Electronic Press Kit
          </span>
          <h1 className="text-[clamp(2rem,1.6rem+1.5vw,3rem)] font-bold tracking-tight text-foreground mb-4">
            Press &{" "}
            <span className="font-serif font-light italic text-[1.1em]">Media</span>
          </h1>
          <p className="text-base text-muted font-light max-w-[560px]">
            All materials, info, and contacts for press, radio, and media use. For booking enquiries, use the contact below.
          </p>
        </div>

        {/* Artist Bio */}
        <Section>
          <SectionTitle>Artist Bio</SectionTitle>
          <div className="border border-grid-300 rounded-xl p-6 bg-white">
            <p className="text-sm text-muted leading-relaxed mb-4">
              DJ Andy&apos;K is a UK-based producer of Trance, Progressive House, and EDM. Every track is built as a structured emotional journey — combining energy, melodic depth, and storytelling through sound. Released under ANDY&apos;K GROUP INTERNATIONAL LTD.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              With a discography spanning four albums, multiple EPs and singles in 2026, DJ Andy&apos;K has developed a distinctive sound that bridges the emotional and the euphoric — music for late nights, long drives, and moments that need a soundtrack.
            </p>
          </div>
        </Section>

        {/* Technical Info */}
        <Section>
          <SectionTitle>Technical Info</SectionTitle>
          <div className="border border-grid-300 rounded-xl overflow-hidden bg-white">
            <InfoRow label="Artist" value="DJ Andy'K" />
            <InfoRow label="Real Name" value={COMPANY.realName} />
            <InfoRow label="Genres" value={COMPANY.genre} />
            <InfoRow label="BPM Range" value="120–124 BPM (main productions)" />
            <InfoRow label="Based In" value={COMPANY.basedIn} />
            <InfoRow label="Active Since" value="2024" />
            <InfoRow label="Label" value={COMPANY.label} />
            <InfoRow
              label="Contact"
              value={
                <a href={`mailto:${COMPANY.email}`} className="text-highlight hover:text-deep-teal transition-colors">
                  {COMPANY.email}
                </a>
              }
            />
            <InfoRow
              label="Website"
              value={
                <a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-deep-teal transition-colors">
                  {COMPANY.website}
                </a>
              }
            />
          </div>
        </Section>

        {/* Discography */}
        <Section>
          <SectionTitle>Discography 2026</SectionTitle>
          <div className="border border-grid-300 rounded-xl overflow-hidden bg-white divide-y divide-grid-300">
            {allReleases.map((item) => (
              <div key={item.title} className="flex items-center justify-between px-5 py-3.5 gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                  {(item as { genre?: string }).genre && (
                    <p className="text-xs text-muted-2">{(item as { genre?: string }).genre}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-muted-2 hidden sm:block">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-2">{item.year}</span>
                  <a
                    href={item.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-highlight hover:text-deep-teal transition-colors"
                  >
                    Spotify ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Downloads */}
        <Section>
          <SectionTitle>Downloads</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <DownloadCard
              label="Artist Photo"
              note="High-res press photo"
              href="/photos/artist-main.jpg"
            />
            <DownloadCard
              label="Logo Pack"
              note="PNG, dark version"
              href="/logo.png"
            />
            <DownloadCard
              label="Bio (Text)"
              note="Short bio, EN"
              href="/bio.txt"
            />
          </div>
          <p className="text-xs text-muted-2 mt-3">
            For immediate requests, email{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-highlight">
              {COMPANY.email}
            </a>
          </p>
        </Section>

        {/* Streaming */}
        <Section>
          <SectionTitle>Streaming & Platforms</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STREAMING_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-grid-300 rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground hover:border-highlight/40 transition-all"
              >
                <span className="text-highlight">→</span>
                {platform.name}
              </a>
            ))}
          </div>
        </Section>

        {/* Media Contact */}
        <Section>
          <SectionTitle>Media Contact</SectionTitle>
          <div className="border border-grid-300 rounded-xl p-6 bg-white">
            <p className="text-sm text-muted mb-4">
              For press, interviews, playlist placements, sync licensing, or booking enquiries:
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm font-medium text-highlight hover:text-deep-teal transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-2 hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @djandykofficial
              </a>
            </div>
          </div>
        </Section>

        {/* Footer note */}
        <div className="border-t border-grid-300 pt-8 text-xs text-muted-2 font-mono">
          <p>{COMPANY.label}</p>
          <p className="mt-1">℗ & © 2026 ANDY'K GROUP INTERNATIONAL LTD · All rights reserved</p>
        </div>

      </div>
    </main>
  );
}
