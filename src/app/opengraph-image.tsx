import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Andy'K Group International — Business Automation & Outreach";
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
          background: "linear-gradient(135deg, #0f0d15 0%, #1a1625 50%, #0f0d15 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo */}
        <img
          src="https://andykgroupinternational.com/full-logo.png"
          alt="Andy'K Group International"
          height={80}
          style={{ marginBottom: 40 }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#f5f0eb",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          B2B & B2G Business Automation
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#9d8ba7",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          Powering A.D.A.M. & E.V.A. — operational automation systems for
          modern growth
        </div>

        {/* Accent line */}
        <div
          style={{
            marginTop: 40,
            width: 120,
            height: 3,
            borderRadius: 2,
            background: "linear-gradient(90deg, #c084fc, #e879a0)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
