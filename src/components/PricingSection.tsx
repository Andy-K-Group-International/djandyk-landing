"use client";

import { useState } from "react";
import { ALBUMS_2026, EPS_SINGLES_2026, PIANO_SERIES_2026 } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import TabSwitcher from "@/components/TabSwitcher";

type DiscographyItem = {
  title: string;
  year: number;
  spotifyUrl: string;
  highlighted?: boolean;
  note?: string;
  genre?: string;
  bpm?: string;
  type?: string;
};

function MusicNoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("albums");

  const tabs = [
    { id: "albums", label: t.albums.tabs.albums },
    { id: "singles", label: t.albums.tabs.singles },
    { id: "piano", label: t.albums.tabs.piano },
  ];

  const data =
    activeTab === "albums"
      ? ALBUMS_2026
      : activeTab === "singles"
      ? EPS_SINGLES_2026
      : PIANO_SERIES_2026;

  return (
    <section id="discography" className="relative py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            {t.albums.label}
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            {t.albums.heading}{" "}
            <span className="font-serif font-light italic text-[1.2em]">
              {t.albums.headingItalic}
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted font-light">
            {t.albums.description}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(data as DiscographyItem[]).map((item) => (
            <a
              key={item.title}
              href={item.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-xl p-5 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,179,154,0.1)] hover:border-highlight/30"
            >
              <div
                className="w-full aspect-square rounded-lg mb-4 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(220,239,230,0.3), rgba(168,213,194,0.15))",
                  color: "#2F6B58",
                }}
              >
                <div className="opacity-30">
                  <MusicNoteIcon />
                </div>
              </div>

              <div className="flex-1">
                {"highlighted" in item && item.highlighted && (
                  <span className="inline-block text-[10px] uppercase tracking-widest font-mono bg-highlight/10 text-highlight px-2 py-0.5 rounded mb-2">
                    {t.albums.latestRelease}
                  </span>
                )}
                <h3 className="text-sm font-bold text-foreground tracking-tight mb-1 leading-snug">
                  {item.title}
                </h3>
                {"genre" in item && item.genre && (
                  <p className="text-xs text-muted-2 mb-0.5">{item.genre}</p>
                )}
                {"bpm" in item && item.bpm && (
                  <p className="text-xs text-muted-2">{item.bpm}</p>
                )}
                {"type" in item && item.type && (
                  <p className="text-xs text-muted-2">{item.type} · {item.year}</p>
                )}
                {!("genre" in item) && !("type" in item) && (
                  <p className="text-xs text-muted-2">{item.year}</p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-end gap-1">
                <span className="text-xs font-medium text-highlight">{t.albums.listenOn}</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-highlight transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
