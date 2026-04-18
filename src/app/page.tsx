import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TronDivider from "@/components/TronDivider";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import CaseStudyCards from "@/components/CaseStudyCards";
import LovedBySection from "@/components/LovedBySection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FlagshipSystems from "@/components/FlagshipSystems";
import { HeroBackground } from "@/components/BackgroundGrid";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://djandyk.com/#artist",
      name: "DJ Andy'K",
      url: "https://djandyk.com",
      description:
        "UK-based music producer creating progressive house, trance, and deep melodic soundscapes that blend emotion, energy, and storytelling.",
      genre: ["Progressive House", "Trance", "Deep Melodic", "EDM"],
      email: "info@djandyk.com",
      sameAs: [
        "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
        "https://music.apple.com/gb/artist/dj-andyk/1835064975",
        "https://soundcloud.com/djandyk_2024",
        "https://www.youtube.com/channel/UCrlcaZ24IreLG97tXQ4EMqA",
        "https://www.instagram.com/djandykofficial",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://djandyk.com/#website",
      url: "https://djandyk.com",
      name: "DJ Andy'K",
      publisher: {
        "@id": "https://djandyk.com/#artist",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://djandyk.com/#webpage",
      url: "https://djandyk.com",
      name: "DJ Andy'K | Progressive House · Trance · Deep Melodic · EDM",
      isPartOf: { "@id": "https://djandyk.com/#website" },
      about: { "@id": "https://djandyk.com/#artist" },
      description:
        "Music by DJ Andy'K — progressive house, trance, and deep melodic EDM. Stream across Spotify, Apple Music, SoundCloud, YouTube, TIDAL and more.",
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[60px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBanner />
      <Navbar />

      <div className="relative overflow-clip">
        <HeroBackground />
        <Hero />
      </div>

      <TronDivider />

      {/* Sound Philosophy */}
      <FaqSection />

      {/* Featured Releases */}
      <CaseStudyCards />

      <TronDivider />

      {/* About */}
      <LovedBySection />

      <TronDivider />

      {/* Artist Spotlight */}
      <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
        <TestimonialPair />
      </section>

      <TronDivider />

      {/* Streaming Platforms */}
      <IntegrationsSection />

      <TronDivider />

      {/* Discography */}
      <PricingSection />

      <TronDivider />

      {/* Flagship Albums */}
      <FlagshipSystems />

      <TronDivider />

      {/* Album Journey */}
      <RoadmapSection />

      <TronDivider />

      <ContactForm />
      <CtaSection />
      <Footer />
    </main>
  );
}
