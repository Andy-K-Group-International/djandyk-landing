"use client";

const CARDS = [
  {
    title: "Mastering Tool",
    desc: "EQ, stereo widening, platform loudness targets. Normalize to Spotify −14 LUFS with a single click.",
  },
  {
    title: "BPM + Key Detector",
    desc: "Camelot wheel mapping, danceability score, energy analysis. Instant results, 100% in-browser.",
  },
  {
    title: "DJ Set Planner",
    desc: "Harmonic mixing via Camelot algorithm, energy flow visualiser, Rekordbox XML export.",
  },
];

export default function LabPromoSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        padding: "80px 32px 88px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#a3a3a3",
            margin: "0 0 18px",
          }}
        >
          Andy&apos;K Music Lab
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#111111",
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}
        >
          Professional tools for{" "}
          <span
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            producers
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: 15,
            color: "#737373",
            lineHeight: 1.7,
            margin: "0 0 48px",
            maxWidth: 520,
          }}
        >
          BPM detection, mastering, DJ set planning and more — built for serious music creators.
        </p>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            border: "1px solid #e5e5e5",
            marginBottom: 40,
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                padding: "28px 28px 32px",
                background: "#ffffff",
                borderRight: "1px solid #e5e5e5",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#a3a3a3",
                  margin: "0 0 10px",
                }}
              >
                Tool
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-sans, sans-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans, sans-serif)",
                  fontSize: 13,
                  color: "#737373",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing row + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                marginBottom: 6,
                flexWrap: "wrap",
              }}
            >
              {["£49 one-time", "£29/month", "£199/year"].map((p, i) => (
                <span
                  key={p}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111111",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p}
                  {i < 2 && (
                    <span style={{ color: "#d4d4d4", marginLeft: 16 }}>·</span>
                  )}
                </span>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a3a3a3",
                margin: 0,
              }}
            >
              Early access — waitlist open now
            </p>
          </div>

          <a
            href="https://lab.djandykofficial.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#111111",
              color: "#ffffff",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "none",
              flexShrink: 0,
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Join Waitlist →
          </a>
        </div>

      </div>
    </section>
  );
}
