import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "qtrypzzcjebvfcihiynt.supabase.co",
      },
    ],
  },
};

export default nextConfig;
