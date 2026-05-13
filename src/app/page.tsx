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
import MusicLabBanner from "@/components/MusicLabBanner";
import ScrollReveal from "@/components/ScrollReveal";

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
    {
      "@type": "MusicAlbum",
      name: "When Later Becomes Never",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["Progressive House", "Trance"],
      url: "https://open.spotify.com/album/1ezdr7EOZWuLBiw7Rpqis6",
    },
    {
      "@type": "MusicAlbum",
      name: "Human Stories",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["House", "Progressive House"],
      url: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    },
    {
      "@type": "MusicAlbum",
      name: "Deep Connections",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["House", "Progressive House"],
      url: "https://open.spotify.com/album/39Zb0euYMqdqg658wqKVGU",
    },
    {
      "@type": "MusicAlbum",
      name: "Music Is Your Passion",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["Trance"],
      url: "https://open.spotify.com/album/2en5D8nLMSTpRE6fhS1BJY",
    },
    {
      "@type": "MusicAlbum",
      name: "Four Elements",
      byArtist: { "@type": "MusicGroup", name: "DJ Andy'K" },
      datePublished: "2026",
      genre: ["EDM"],
      url: "https://open.spotify.com/album/18OaI45bkpYwJtzL59BoUw",
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

      <ScrollReveal>
        <div className="relative overflow-clip">
          <HeroBackground />
          <Hero />
        </div>
      </ScrollReveal>

      <TronDivider />

      {/* Sound Philosophy */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* Featured Releases */}
      <ScrollReveal>
        <FeaturedAlbums />
      </ScrollReveal>

      <TronDivider />

      {/* About */}
      <ScrollReveal>
        <LovedBySection />
      </ScrollReveal>

      <TronDivider />

      {/* Artist Spotlight */}
      <ScrollReveal>
        <section className="relative pt-12 pb-14 px-8 max-w-[1200px] mx-auto">
          <TestimonialPair />
        </section>
      </ScrollReveal>

      <TronDivider />

      {/* Streaming Platforms */}
      <ScrollReveal>
        <IntegrationsSection />
      </ScrollReveal>

      <TronDivider />

      {/* Discography */}
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>

      <TronDivider />

      {/* Flagship Albums */}
      <ScrollReveal>
        <FlagshipSystems />
      </ScrollReveal>

      <TronDivider />

      {/* Album Journey */}
      <ScrollReveal>
        <RoadmapSection />
      </ScrollReveal>

      <TronDivider />

      <TronDivider />

      {/* DJ Sets */}
      <ScrollReveal>
        <DJSetsSection />
      </ScrollReveal>

      <TronDivider />

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection />
      </ScrollReveal>

      <TronDivider />

      {/* Andy'K Music Lab */}
      <ScrollReveal>
        <MusicLabSection />
      </ScrollReveal>

      <TronDivider />

      {/* Music Lab Live Banner */}
      <ScrollReveal>
        <MusicLabBanner />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
