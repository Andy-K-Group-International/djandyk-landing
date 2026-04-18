export const COMPANY = {
  name: "DJ Andy\u2019K",
  realName: "Andrej Kneisl",
  tagline: "Music is your passion.",
  subtitle:
    "Producer of progressive house, trance, deep melodic sounds, and EDM.",
  description:
    "DJ Andy\u2019K is a UK-based music producer creating progressive house, trance, and deep melodic soundscapes that blend emotion, energy, and storytelling.",
  descriptionExtra:
    "Every track is built as a journey \u2014 from the first chord to the final beat, designed to move both body and soul.",
  label: "ANDY\u2019K GROUP INTERNATIONAL LTD",
  basedIn: "United Kingdom",
  genre: "Progressive House \u00B7 Trance \u00B7 Deep Melodic \u00B7 EDM",
  email: "info@djandyk.com",
  website: "djandyk.com",
  labelWebsite: "https://www.andykgroupinternational.com",
  socials: {
    instagram: "https://www.instagram.com/djandykofficial",
    tiktok: "https://www.tiktok.com/@djandykofficial",
    spotify: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    youtube: "https://www.youtube.com/channel/UCrlcaZ24IreLG97tXQ4EMqA",
  },
  hyperfollow: "https://hyperfollow.com/djandyk",
  quote:
    "\u201CI don\u2019t know anymore if music lives for me, or if I live for it. But I accept both.\u201D",
  quoteSubtitle: "\u2014 DJ Andy\u2019K",
};

export const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    icon: "spotify",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/dj-andyk/1835064975",
    icon: "apple",
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/djandyk_2024",
    icon: "soundcloud",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCrlcaZ24IreLG97tXQ4EMqA",
    icon: "youtube",
  },
  {
    name: "TIDAL",
    href: "https://tidal.com/browse/artist/65848653",
    icon: "tidal",
  },
  {
    name: "Hyperfollow",
    href: "https://hyperfollow.com/djandyk",
    icon: "hyperfollow",
  },
];

// Sound philosophy pillars — maps to FaqSection ("Crafting the Sound")
export const SERVICES = [
  {
    title: "Progressive House",
    description:
      "Layered builds, melodic drops, and hypnotic progressions that carry listeners through evolving emotional landscapes.",
  },
  {
    title: "Trance",
    description:
      "Euphoric synth lines and driving rhythms that create states of pure immersion and transcendence.",
  },
  {
    title: "Deep Melodic",
    description:
      "Introspective textures and warm harmonics \u2014 music that speaks directly to the subconscious.",
  },
  {
    title: "Cinematic EDM",
    description:
      "Orchestral elements fused with electronic production \u2014 tracks built like film scores for the dancefloor.",
  },
  {
    title: "Emotional Storytelling",
    description:
      "Every release follows a narrative arc. From tension to release, the journey is always intentional.",
  },
  {
    title: "Studio Craft",
    description:
      "From composition to mastering, each detail is considered. Sound design, mix balance, and sonic identity refined to the last millisecond.",
  },
];

// Artist profile — maps to LovedBySection / TestimonialPair
export const FOUNDERS: {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email?: string;
  website?: string;
  websiteLabel?: string;
  bio: string;
  quote?: string;
  location?: string;
}[] = [
  {
    name: "DJ Andy\u2019K",
    role: "Music Producer \u00B7 DJ \u00B7 Artist",
    image: "/photos/artist-main.jpg",
    linkedin: "",
    email: "info@djandyk.com",
    website: "https://djandyk.com",
    websiteLabel: "djandyk.com",
    bio: "UK-based music producer Andrej Kneisl crafts progressive house, trance, and deep melodic soundscapes under the name DJ Andy\u2019K. With releases spanning albums, EPs, and a dedicated Piano Series, his music bridges the emotional and the euphoric.",
    quote:
      "\u201CI don\u2019t know anymore if music lives for me, or if I live for it. But I accept both.\u201D",
    location: "United Kingdom",
  },
];

export const STATS = [
  { value: "4", label: "Albums in 2026" },
  { value: "10+", label: "Singles & EPs released" },
  { value: "6", label: "Streaming platforms" },
];

// Featured releases — maps to CaseStudyCards
export const CASE_STUDIES = [
  {
    slug: "when-later-becomes-never",
    titleKey: "whenLater",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    slug: "human-stories",
    titleKey: "humanStories",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    slug: "four-elements",
    titleKey: "fourElements",
    link: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
];

// Discography — Albums 2026 (maps to DiscographySection tab 1)
export const ALBUMS_2026 = [
  {
    title: "When Later Becomes Never",
    genre: "Progressive House / Cinematic",
    bpm: "120\u2013124 BPM",
    year: 2026,
    coverUrl: "/albums/when-later-becomes-never.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
    highlighted: true,
  },
  {
    title: "Human Stories",
    genre: "Emotional Piano / Melodic",
    year: 2026,
    coverUrl: "/albums/human-stories.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Deep Connections",
    genre: "Progressive House",
    year: 2026,
    coverUrl: "/albums/deep-connections.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Music Is Your Passion",
    genre: "EDM / House",
    year: 2026,
    coverUrl: "/albums/music-is-your-passion.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
];

// Discography — EPs & Singles 2026 (maps to DiscographySection tab 2)
export const EPS_SINGLES_2026 = [
  {
    title: "Four Elements",
    type: "EP",
    year: 2026,
    coverUrl: "/albums/four-elements.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Paraller Stories",
    type: "Single",
    year: 2026,
    highlighted: true,
    note: "Latest release \u00B7 April 2026",
    coverUrl: "/albums/paraller-stories.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Feel My Spirit Wake",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/feel-my-spirit-wake.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Love Will Find Us Once Again",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/love-will-find-us-once-again.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Holding On Through All",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/holding-on-through-all.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Hiding From It All",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/hiding-from-it-all.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Pull Me Through",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/pull-me-through.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Almost",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/almost.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "After Midnight",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/after-midnight.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "The Last Signal",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/the-last-signal.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Between Us",
    type: "Single",
    year: 2026,
    coverUrl: "/albums/between-us.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
];

// Discography — Piano Series 2026 (maps to DiscographySection tab 3)
export const PIANO_SERIES_2026 = [
  {
    title: "Human Stories (Piano)",
    year: 2026,
    coverUrl: "/albums/human-stories-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Letters Never Sent (Piano)",
    year: 2026,
    coverUrl: "/albums/letters-never-sent-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Only Rivers Know (Piano)",
    year: 2026,
    coverUrl: "/albums/only-rivers-know-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
  {
    title: "Running From Yesterday (Piano)",
    year: 2026,
    coverUrl: "/albums/running-from-yesterday-piano.jpg",
    spotifyUrl: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
  },
];

// Album creation journey — maps to RoadmapSection (AlbumJourney)
export const ADAM_ROADMAP = [
  {
    step: 1,
    title: "Inspiration",
    description:
      "A feeling, a memory, or a moment captured \u2014 the seed of every track starts with something real.",
  },
  {
    step: 2,
    title: "Composition",
    description:
      "Melodies and harmonies take shape. Chord progressions laid down, the emotional arc defined.",
  },
  {
    step: 3,
    title: "Production",
    description:
      "Layers built in the studio \u2014 synths, drums, basslines, textures. The track comes alive.",
  },
  {
    step: 4,
    title: "Mastering",
    description:
      "Final polish and loudness optimised. The track prepared for every streaming platform.",
  },
  {
    step: 5,
    title: "Release",
    description:
      "Published across Spotify, Apple Music, TIDAL, SoundCloud, YouTube and more.",
  },
  {
    step: 6,
    title: "Connection",
    description:
      "The music reaches listeners. The journey completes \u2014 until the next one begins.",
  },
];

export const ADAM_SHOWCASE = ADAM_ROADMAP;

// Flagship album bullet points — maps to FlagshipSystems (When Later Becomes Never)
export const ADAM_FEATURES = [
  "Progressive house with cinematic scope",
  "120\u2013124 BPM \u2014 crafted for movement and emotion",
  "Full album: multi-track journey",
  "Available on all major streaming platforms",
];

// Piano Series bullet points — maps to FlagshipSystems (second card)
export const EVA_FEATURES = [
  "Intimate piano arrangements",
  "Stripped-back emotional versions of key tracks",
  "Perfect for late-night listening",
  "Available alongside the main releases",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Albums", href: "#discography" },
  { label: "Contact", href: "#contact" },
];

export const NAV_SERVICES = [
  {
    group: "Latest Release",
    items: [
      {
        label: "Paraller Stories",
        description: "Single \u00B7 April 2026",
        href: "https://hyperfollow.com/djandyk",
      },
      {
        label: "When Later Becomes Never",
        description: "Album \u00B7 Progressive House / Cinematic",
        href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
      },
    ],
  },
  {
    group: "Streaming",
    items: [
      {
        label: "Spotify",
        description: "Follow on Spotify",
        href: "https://open.spotify.com/artist/3JhFGt6jRQvnYgvhWMQHUU",
      },
      {
        label: "Apple Music",
        description: "Listen on Apple Music",
        href: "https://music.apple.com/gb/artist/dj-andyk/1835064975",
      },
      {
        label: "SoundCloud",
        description: "Follow on SoundCloud",
        href: "https://soundcloud.com/djandyk_2024",
      },
      {
        label: "YouTube",
        description: "Subscribe on YouTube",
        href: "https://www.youtube.com/channel/UCrlcaZ24IreLG97tXQ4EMqA",
      },
    ],
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Music", href: "#music" },
  { label: "Albums", href: "#discography" },
  { label: "Contact", href: "#contact" },
  { label: "Press / EPK", href: "/press" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];
