import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DJ Andy'K — Progressive House, Trance & Melodic EDM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #F5F5F5 0%, #EBEBEB 50%, #F0F0F0 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Green accent top-left glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Artist name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1a1a2e",
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 16,
            position: "relative",
          }}
        >
          DJ Andy&apos;K
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #111111, #333333)",
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 300,
            color: "#333333",
            textAlign: "center",
            letterSpacing: "0.04em",
            marginBottom: 32,
            position: "relative",
          }}
        >
          Music is your passion.
        </div>

        {/* Genre pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {["Progressive House", "Trance", "Deep Melodic", "EDM"].map((g) => (
            <div
              key={g}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "rgba(0,0,0,0.05)",
                fontSize: 16,
                color: "#111111",
                letterSpacing: "0.06em",
                fontWeight: 500,
              }}
            >
              {g}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 16,
            color: "#111111",
            letterSpacing: "0.08em",
          }}
        >
          djandyofficial.com
        </div>
      </div>
    ),
    { ...size }
  );
}
