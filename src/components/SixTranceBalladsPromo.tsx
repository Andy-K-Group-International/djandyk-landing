import Link from "next/link";

export default function SixTranceBalladsPromo() {
  return (
    <div className="w-full px-4 py-3 border-b" style={{ background: "#0d1117", borderColor: "#1e2939" }}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span
            className="text-[9px] font-mono uppercase tracking-[0.3em] px-2 py-0.5 rounded border shrink-0"
            style={{ color: "#d97706", borderColor: "#d9770655", background: "#d977060d" }}
          >
            New Album
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight" style={{ color: "#f5deb3" }}>
              I Arrived As Someone Else{" "}
              <span className="font-light" style={{ color: "#92683a" }}>
                · Six Trance Ballads
              </span>
            </p>
            <p className="text-[10px] font-mono" style={{ color: "#64748b" }}>
              First listen on SoundCloud · First release: 17.6.2026
            </p>
          </div>
        </div>
        <Link
          href="/six-trance-ballads"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold border transition-colors px-3 py-1.5 rounded font-mono uppercase tracking-widest hover:bg-[#d977060d]"
          style={{ color: "#d97706", borderColor: "#d9770655" }}
        >
          View Album
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
