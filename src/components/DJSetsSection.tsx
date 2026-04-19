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

function Waveform() {
  return (
    <div className="dj-waveform flex items-end gap-[3px] h-6 mt-2">
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
          }}
        />
      ))}
    </div>
  );
}

function SetCard({ set }: { set: typeof DJ_SETS[0] }) {
  const embedSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(set.url)}&color=%2363B39A&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=true`;

  return (
    <div className="dj-set-card glass-card rounded-xl p-5 flex flex-col gap-4 border-highlight/0">
      <div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-highlight font-mono block mb-2">
          {set.year}
        </span>
        <h3 className="text-base font-bold text-foreground leading-snug">{set.title}</h3>
        <Waveform />
      </div>
      <iframe
        src={embedSrc}
        width="100%"
        height="300"
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
      <style>{`
        @keyframes waveform {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .waveform-bar {
          animation: waveform 1.2s ease-in-out infinite;
        }
        .dj-set-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .dj-set-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(99,179,154,0.3), 0 0 40px rgba(99,179,154,0.1), 0 12px 40px rgba(99,179,154,0.15);
        }
        .dj-set-card:hover .waveform-bar {
          animation-duration: 0.6s;
        }
      `}</style>

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

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
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
