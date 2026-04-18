"use client";

import { useLanguage } from "@/context/LanguageContext";

const E2E_ICONS = [
  // Target - Structural clarity
  <svg key="structure" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12h.008" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
  </svg>,
  // Chart - Revenue architecture
  <svg key="revenue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Globe - Market positioning
  <svg key="market" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Cog - Operational redesign
  <svg key="ops" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Puzzle - System integration
  <svg key="system" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c-1.08-.143-1.88-1.058-1.88-2.14v0c0-1.082.8-1.997 1.88-2.14a48.45 48.45 0 018.32 0C16.2 2.003 17 2.918 17 4v0c0 1.082-.8 1.997-1.88 2.14a48.448 48.448 0 01-4.163.3v0a.64.64 0 01-.657-.643v0zM9.75 17.913c0 .355-.186.676-.401.959a1.678 1.678 0 00-.349 1.003c0 1.035 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959v0c0-.372.314-.67.657-.643a48.39 48.39 0 014.163.3c1.08.143 1.88 1.058 1.88 2.14v0c0 1.082-.8 1.997-1.88 2.14a48.45 48.45 0 01-8.32 0C7.8 21.997 7 21.082 7 20v0c0-1.082.8-1.997 1.88-2.14a48.45 48.45 0 014.163-.3v0c.343-.027.657.271.657.643v0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Arrow trending up - Expansion & growth control
  <svg key="growth" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="end-to-end" className="relative py-20 px-8 overflow-hidden">
      {/* Scattered dots background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="scattered-dots-sm" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="18" r="1" fill="rgba(49,38,59,0.07)" />
              <circle cx="52" cy="44" r="1.2" fill="rgba(49,38,59,0.06)" />
              <circle cx="68" cy="12" r="0.8" fill="rgba(49,38,59,0.08)" />
              <circle cx="32" cy="64" r="1" fill="rgba(49,38,59,0.05)" />
            </pattern>
            <pattern id="scattered-dots-md" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="25" r="1.8" fill="rgba(201,112,125,0.06)" />
              <circle cx="90" cy="70" r="2" fill="rgba(201,112,125,0.05)" />
              <circle cx="15" cy="95" r="1.5" fill="rgba(201,112,125,0.07)" />
              <circle cx="75" cy="15" r="2.2" fill="rgba(201,112,125,0.04)" />
              <circle cx="105" cy="105" r="1.3" fill="rgba(201,112,125,0.06)" />
            </pattern>
            <pattern id="scattered-dots-lg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="50" r="3" fill="rgba(245,192,192,0.08)" />
              <circle cx="150" cy="30" r="2.5" fill="rgba(245,192,192,0.06)" />
              <circle cx="90" cy="160" r="3.5" fill="rgba(245,192,192,0.05)" />
              <circle cx="170" cy="140" r="2" fill="rgba(245,192,192,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scattered-dots-sm)" />
          <rect width="100%" height="100%" fill="url(#scattered-dots-md)" />
          <rect width="100%" height="100%" fill="url(#scattered-dots-lg)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
            <span className="font-serif font-light italic text-[1.2em]">
              {t.endToEnd.heading}
            </span>{" "}
            {t.endToEnd.headingItalic}
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed">
            {t.endToEnd.description}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.endToEnd.bullets.map((bullet, i) => (
            <div key={bullet.title} className="glass-card rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,192,192,0.2), rgba(205,160,165,0.15))",
                    color: "#cda0a5",
                  }}
                >
                  {E2E_ICONS[i]}
                </div>
                <h4 className="text-base font-bold text-foreground tracking-tight">
                  {bullet.title}
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {bullet.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
