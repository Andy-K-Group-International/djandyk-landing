import { LATEST_RELEASE } from "@/lib/data";

export default function LatestReleaseBanner() {
  const release = LATEST_RELEASE;

  return (
    <div className="w-full bg-highlight px-4 py-2.5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Cover thumbnail */}
          <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-4 h-4">
              <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono block leading-tight">
              New {release.type} · Out Now
            </span>
            <span className="text-sm font-semibold text-white truncate block leading-tight">
              {release.title}
            </span>
          </div>
        </div>

        <a
          href={release.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors px-3 py-1.5 rounded"
        >
          Listen Now
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
