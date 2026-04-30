"use client";

import { useRef, useState } from "react";
import { COMPANY } from "@/lib/data";

const DJ_SETS = [
  {
    year: "2026",
    title: "New Year House Signals (2026 Mix)",
    url: "https://soundcloud.com/djandyk_2024/new-year-house-signals-2026-mix",
  },
  {
    year: "2025",
    title: "MAMBA – House Session 2025",
    url: "https://soundcloud.com/djandyk_2024/house-session-2025",
  },
  {
    year: "2024",
    title: "New Era 2024",
    url: "https://soundcloud.com/djandyk_2024/sets/new-era-2024-by-dj-andyk",
  },
  {
    year: "2024",
    title: "House 2024",
    url: "https://soundcloud.com/djandykofficial/dj-andyk-house-2024",
  },
  {
    year: "2024",
    title: "Trance 2024",
    url: "https://soundcloud.com/djandykofficial/dj-andyk-trance-2024",
  },
  {
    year: "2023",
    title: "Sky 2023",
    url: "https://soundcloud.com/djandyk_2024/sets/sky-2023",
  },
];

const BAR_HEIGHTS = [12, 20, 24, 16, 10];
const BAR_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s"];

function Waveform({ fast }: { fast: boolean }) {
  return (
    <div className="flex items-end gap-[3px] h-6 mt-2">
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="waveform-bar inline-block rounded-sm"
          style={{
            width: "3px",
            height: `${h}px`,
            backgroundColor: "#63B39A",
            animationDelay: BAR_DELAYS[i],
            transformOrigin: "bottom",
            animationDuration: fast ? "0.6s" : "1.2s",
          }}
        />
      ))}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DJSetsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);

  function scrollCarousel(dir: "left" | "right") {
    carouselRef.current?.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      scrollCarousel(delta > 0 ? "right" : "left");
    }
  }

  return (
    <section id="sets" className="relative pt-10 pb-20 px-8">
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .waveform-bar {
          animation: waveform 1.2s ease-in-out infinite;
        }
        .dj-carousel {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 20px 4px;
        }
        .dj-carousel::-webkit-scrollbar {
          display: none;
        }
        .dj-carousel-card {
          flex-shrink: 0;
          min-width: calc(83vw - 64px);
          scroll-snap-align: center;
        }
        @media (min-width: 640px) {
          .dj-carousel-card {
            min-width: calc(50% - 12px);
          }
        }
        @media (min-width: 1024px) {
          .dj-carousel-card {
            min-width: calc(33.333% - 14px);
          }
        }
        .dj-set-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
        }
        /* React state controls transform — disable CSS hover transform to avoid conflict */
        .dj-set-card.glass-card:hover {
          transform: none;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Live Sets
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            <span className="font-serif italic font-light">The</span>{" "}sets
          </h2>
          <p className="text-base text-muted font-light">
            Progressive house, trance, and EDM — live from the booth.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-grid-500 rounded-full shadow-md hover:bg-soft-green hover:border-highlight transition-all -translate-x-5"
          >
            <ChevronLeft />
          </button>

          <div
            ref={carouselRef}
            className="dj-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {DJ_SETS.map((set, i) => {
              const isHovered = hoveredIndex === i;
              const anyHovered = hoveredIndex !== null;
              const embedSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(set.url)}&color=%2363B39A&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=true`;

              return (
                <div
                  key={set.title}
                  className="dj-carousel-card"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="dj-set-card glass-card rounded-xl p-5 flex flex-col gap-4"
                    style={{
                      transform: isHovered
                        ? "scale(1.05) translateY(-8px)"
                        : anyHovered
                          ? "scale(0.97)"
                          : undefined,
                      opacity: anyHovered && !isHovered ? 0.7 : 1,
                      boxShadow: isHovered
                        ? "0 0 25px rgba(99,179,154,0.5), 0 0 50px rgba(99,179,154,0.2), 0 16px 40px rgba(99,179,154,0.2)"
                        : undefined,
                    }}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
                        {set.year}
                      </span>
                      <h3 className="text-base font-bold text-foreground leading-snug">{set.title}</h3>
                      <Waveform fast={isHovered} />
                    </div>
                    <iframe
                      src={embedSrc}
                      width="100%"
                      height="200"
                      frameBorder="0"
                      allow="autoplay"
                      loading="lazy"
                      title={set.title}
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-grid-500 rounded-full shadow-md hover:bg-soft-green hover:border-highlight transition-all translate-x-5"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted font-light mb-4">
            Available for bookings — clubs, events, and private sessions.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=DJ%20Booking%20Inquiry`}
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-highlight hover:bg-deep-teal transition-colors rounded"
          >
            Book DJ Andy&apos;K
          </a>
        </div>
      </div>
    </section>
  );
}
