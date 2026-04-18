import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TronDivider from "@/components/TronDivider";
import FaqSection from "@/components/FaqSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialPair from "@/components/TestimonialPair";
import PricingSection from "@/components/PricingSection";
import FeaturedAlbums from "@/components/FeaturedAlbums";
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
      genre: ["Progressive House", "Trance", "Melodic EDM", "Deep Melodic"],
      foundingLocation: {
        "@type": "Place",
        name: "United Kingdom",
      },
      email: "info@djandyk.com",
      member: {
        "@type": "Person",
        name: "Andrej Kneisl",
        alternateName: "DJ Andy'K",
      },
      recordLabel: {
        "@type": "Organization",
        name: "ANDY'K GROUP INTERNATIONAL LTD",
        url: "https://www.andykgroupinternational.com",
      },
      sameAs: [
        "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
        "https://music.apple.com/gb/artist/dj-andyk/1835064975",
        "https://soundcloud.com/djandyk_2024",
        "https://www.youtube.com/channel/UCrlcaZ24IreLG97tXQ4EMqA",
        "https://tidal.com/browse/artist/65848653",
        "https://www.instagram.com/djandykofficial",
        "https://www.tiktok.com/@djandykofficial",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://djandyk.com/#website",
      url: "https://djandyk.com",
      name: "DJ Andy'K",
      publisher: { "@id": "https://djandyk.com/#artist" },
    },
    {
      "@type": "WebPage",
      "@id": "https://djandyk.com/#webpage",
      url: "https://djandyk.com",
      name: "DJ Andy'K — Official Website | Progressive House, Trance & Melodic EDM",
      isPartOf: { "@id": "https://djandyk.com/#website" },
      about: { "@id": "https://djandyk.com/#artist" },
      description:
        "Official website of DJ Andy'K. Producer of progressive house, trance, and deep melodic sounds. Based in the UK, sharing music worldwide.",
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
      <FeaturedAlbums />

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
