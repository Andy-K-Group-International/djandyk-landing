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
import DJSetsSection from "@/components/DJSetsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FlagshipSystems from "@/components/FlagshipSystems";
import { HeroBackground } from "@/components/BackgroundGrid";
import LatestReleaseBanner from "@/components/LatestReleaseBanner";
import MusicLabSection from "@/components/MusicLabSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://djandyofficial.com/#artist",
      name: "DJ Andy'K",
      url: "https://djandyofficial.com",
      description:
        "UK-based music producer creating Trance, Progressive House, and EDM that blend emotion, energy, and storytelling.",
      genre: ["Trance", "Progressive House", "EDM"],
      foundingLocation: {
        "@type": "Place",
        name: "United Kingdom",
      },
      email: "info@djandyofficial.com",
      member: {
        "@type": "Person",
        name: "Andrej Kneisl",
        alternateName: "DJ Andy'K",
      },
      recordLabel: {
        "@type": "Organization",
        name: "ANDY'K GROUP INTERNATIONAL LTD",
        url: "https://djandyofficial.com",
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
      "@id": "https://djandyofficial.com/#website",
      url: "https://djandyofficial.com",
      name: "DJ Andy'K",
      publisher: { "@id": "https://djandyofficial.com/#artist" },
    },
    {
      "@type": "WebPage",
      "@id": "https://djandyofficial.com/#webpage",
      url: "https://djandyofficial.com",
      name: "DJ Andy'K — Official Website | Trance, Progressive House & EDM",
      isPartOf: { "@id": "https://djandyofficial.com/#website" },
      about: { "@id": "https://djandyofficial.com/#artist" },
      description:
        "Official website of DJ Andy'K. Producer of Trance, Progressive House, and EDM. Based in the UK, sharing music worldwide.",
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
      <LatestReleaseBanner />

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

      <TronDivider />

      {/* DJ Sets */}
      <DJSetsSection />

      <TronDivider />

      <ContactForm />
      <CtaSection />

      <TronDivider />

      {/* Andy'K Music Lab */}
      <MusicLabSection />

      <Footer />
    </main>
  );
}
