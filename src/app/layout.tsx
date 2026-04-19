import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import CookieBanner from "@/components/CookieBanner";
import FloatingPlayer from "@/components/FloatingPlayer";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://djandyk.com";
const SITE_TITLE = "DJ Andy'K — Official Website | Trance, Progressive House & EDM";
const SITE_DESCRIPTION =
  "Official website of DJ Andy'K. Producer of Trance, Progressive House, and EDM. Based in the UK, sharing music worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | DJ Andy'K",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "DJ Andy'K",
    "trance",
    "progressive house",
    "EDM",
    "UK artist",
    "music producer",
    "electronic music",
  ],
  authors: [{ name: "DJ Andy'K" }],
  creator: "DJ Andy'K",
  publisher: "ANDY'K GROUP INTERNATIONAL LTD",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "music.album",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "DJ Andy'K",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "DJ Andy'K",
  alternateName: "Andrej Kneisl",
  url: SITE_URL,
  genre: ["Trance", "Progressive House", "EDM"],
  foundingLocation: { "@type": "Place", name: "United Kingdom" },
  sameAs: [
    "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    "https://soundcloud.com/djandyk_2024",
    "https://www.instagram.com/djandyk_official",
    "https://www.tiktok.com/@djandyk_official",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <FloatingPlayer />
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
