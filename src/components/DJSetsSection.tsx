"use client";

import { COMPANY } from "@/lib/data";

const DJ_SETS = [
  {
    year: "2026",
    title: "New Year House Signals (2026 Mix)",
    url: "https://on.soundcloud.com/QHxv9Vcxj1pGQab9nS",
  },
  {
    year: "2025",
    title: "MAMBA – House Session 2025",
    url: "https://on.soundcloud.com/ZYbbfipGGthtdvoOk7",
  },
  {
    year: "2024",
    title: "New Era 2024",
    url: "https://on.soundcloud.com/gxA4WkJ52hWkyjokEA",
  },
  {
    year: "2024",
    title: "House 2024",
    url: "https://on.soundcloud.com/03PxaGTCR6KRClYQlH",
  },
  {
    year: "2023",
    title: "Sky 2023",
    url: "https://on.soundcloud.com/UPFl0RpYIjv0P74rry",
  },
];

function SetCard({ set }: { set: typeof DJ_SETS[0] }) {
  const embedSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(set.url)}&color=%2363B39A&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`;

  return (
    <div className="glass-card rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,179,154,0.12)] hover:border-highlight/30">
      <div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
          {set.year}
        </span>
        <h3 className="text-base font-bold text-foreground leading-snug">{set.title}</h3>
      </div>
      <iframe
        src={embedSrc}
        width="100%"
        height="166"
        frameBorder="0"
        allow="autoplay"
        loading="lazy"
        title={set.title}
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
}

export default function DJSetsSection() {
  return (
    <section id="sets" className="relative pt-10 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-highlight font-mono block mb-3">
            Live Sets
          </span>
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            The{" "}
            <span className="font-serif font-light italic text-[1.2em]">sets</span>
          </h2>
          <p className="text-base text-muted font-light">
            Progressive house, trance, and EDM — live from the booth.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {DJ_SETS.slice(0, 3).map((set) => (
            <SetCard key={set.title} set={set} />
          ))}
        </div>

        {/* Row 2: 2 cards centred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto mb-10">
          {DJ_SETS.slice(3).map((set) => (
            <SetCard key={set.title} set={set} />
          ))}
        </div>

        {/* Booking CTA */}
        <div className="text-center">
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
