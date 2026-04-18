export const COMPANY = {
  name: "Andy'K Group International LTD",
  tagline: "End-to-end business development & growth architecture.",
  subtitle: "We design, restructure, and architect businesses from foundation to scalable growth — powered by strategy, operations, and technology.",
  description:
    "Andy'K Group International LTD is a UK-based innovation company, combining business intelligence, automation, and strategic outreach.",
  descriptionExtra:
    "With clients across Europe and Latin America, we build structured growth environments where strategy, operations, and technology move in one direction.",
  descriptionSystems:
    "Strategic services combining business development, operational architecture, and technology — helping startups, SMEs, and public institutions scale with structure.",
  companyNumber: "16453500",
  address: "86–90 Paul Street, London, EC2A 4NE, United Kingdom",
  phone: "+44 330 027 1319",
  email: "info@andykgroupinternational.com",
  socials: {
    linkedin: "https://www.linkedin.com/company/80971657/",
    email: "info@andykgroupinternational.com",
  },
  logoUrl:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/305703b2e_Andykgroup-LOGO.png",
  logoFooterUrl:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b4799702d_Andykgroup-LOGO.png",
  adamLogoUrl:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bad775fd5_ADAM-LOGO.PNG",
  adamUrl: "https://adameva.app",
  trustCountries: "\u{1F1EC}\u{1F1E7} \u{1F1E9}\u{1F1EA} \u{1F1E7}\u{1F1F7} \u{1F1E6}\u{1F1F9} \u{1F1F8}\u{1F1F0}",
  quote: "\u201COne structure. One flow. One system.\u201D",
  quoteSubtitle: "Built for growth.",
};

export const SERVICES = [
  {
    title: "Strategic Business Consulting",
    description:
      "Expert guidance to refine your business strategies and optimize operations for growth.",
  },
  {
    title: "Automation & AI Solutions",
    description:
      "Implement cutting-edge automation and AI to streamline workflows and boost efficiency.",
  },
  {
    title: "Market Entry & Outreach",
    description:
      "Expand your reach with strategic market entry plans and effective outreach campaigns.",
  },
  {
    title: "Public Sector & Government Contracts",
    description:
      "Navigate the complexities of public sector procurement and secure valuable contracts.",
  },
  {
    title: "Intellectual Property & Licensing",
    description:
      "Protect and leverage your intellectual assets through smart licensing and IP strategies.",
  },
  {
    title: "Brand Development & Digital Presence",
    description:
      "Build a strong brand identity and amplify your presence across digital platforms.",
  },
];

export const ADAM_FEATURES = [
  "Proposal, Strategy, Contract & Invoice automation",
  "Follow-ups, Scheduling, Human engagement",
  "Works for B2B, B2G, and Licensing",
  "Keeps your clients active and loyal",
];

export const EVA_FEATURES = [
  "Smart follow-ups, scheduling & human-style messages",
  "Built for public sector & growth teams",
  "Keeps communication active & personal",
  "Connects directly with A.D.A.M. system",
];

export const ADAM_SHOWCASE = [
  {
    title: "Questionnaire",
    description:
      "Complete our structured intake form. We learn about your business, goals, and requirements.",
  },
  {
    title: "Proposal",
    description:
      "We craft a tailored proposal based on your needs. Review it in your personal dashboard.",
  },
  {
    title: "Contract",
    description:
      "Review, comment, and digitally sign your contract. Full transparency, no surprises.",
  },
  {
    title: "Strategy",
    description:
      "Together we define the strategy and timeline. Every detail aligned before we start.",
  },
  {
    title: "Invoice",
    description:
      "Automated invoicing with clear payment terms. Everything tracked in one place.",
  },
  {
    title: "Onboarding",
    description:
      "Project launches. Real-time updates, document sharing, and ongoing support through A.D.A.M.",
  },
];

export const STATS = [
  { value: "\u20AC2.5M", label: "In client contract value supported" },
  { value: "4", label: "Languages supported" },
  { value: "98%", label: "Client satisfaction rate" },
];

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
    name: "Andrej Kneisl",
    role: "Founder & Strategic Business Developer",
    image: "/ceo.jpeg",
    linkedin: "https://www.linkedin.com/in/disandrejkneisl/",
    email: "ceo@andykgroupinternational.com",
    bio: "15+ years of leadership in sales, hospitality, business development, and operational strategy. Andrej specializes in scalable growth systems for B2B, B2G, and international client relations.",
    quote:
      "My focus is building business systems that are not only profitable — but sustainable, secure, and designed to scale.",
    location: "Born in Austria",
  },
];

export const ADAM_ROADMAP = [
  {
    step: 1,
    title: "Questionnaire",
    description: "Complete our structured intake form. We learn about your business, goals, and requirements.",
  },
  {
    step: 2,
    title: "Proposal",
    description: "We craft a tailored proposal based on your needs. Review it in your personal dashboard.",
  },
  {
    step: 3,
    title: "Contract",
    description: "Review, comment, and digitally sign your contract. Full transparency, no surprises.",
  },
  {
    step: 4,
    title: "Strategy",
    description: "Together we define the strategy and timeline. Every detail aligned before we start.",
  },
  {
    step: 5,
    title: "Invoice",
    description: "Automated invoicing with clear payment terms. Everything tracked in one place.",
  },
  {
    step: 6,
    title: "Onboarding",
    description: "Project launches. Real-time updates, document sharing, and ongoing support through A.D.A.M.",
  },
];

export const PRICING_B2B = [
  {
    name: "CORE",
    basePrice: 1025,
    baseCurrency: "GBP" as const,
    period: "/ month",
    features: [
      "40 qualified leads per month",
      "1 market / 1 target persona",
      "Email outreach + cold calling",
      "Monthly reporting",
      "Onboarding strategy session",
    ],
  },
  {
    name: "ADVANCE",
    basePrice: 1445,
    baseCurrency: "GBP" as const,
    period: "/ month",
    highlighted: true,
    features: [
      "60 qualified leads per month",
      "2 markets coverage",
      "Multi-touch outreach campaigns",
      "Performance optimization",
      "Monthly strategy review",
    ],
  },
  {
    name: "VANGUARD",
    basePrice: 1850,
    baseCurrency: "GBP" as const,
    period: "/ month",
    features: [
      "80 qualified leads per month",
      "Multi-market campaigns",
      "CRM pipeline setup",
      "Lead scoring system",
      "Strategic outreach architecture",
    ],
  },
  {
    name: "PRESTIGE",
    basePrice: 2450,
    baseCurrency: "GBP" as const,
    period: "/ month",
    prefix: "from",
    features: [
      "120+ qualified leads",
      "Branded outreach campaigns",
      "Custom call & email scripts",
      "Strategic business development consulting",
      "Executive-level reporting",
    ],
  },
];

export const PRICING_B2G = [
  {
    name: "GovStarter",
    basePrice: 800,
    baseCurrency: "GBP" as const,
    period: "/ month",
    features: [
      "5 verified public tenders per month",
      "Eligibility review",
      "Basic bid advisory",
      "Monthly consultation",
    ],
  },
  {
    name: "GovExpand",
    basePrice: 1300,
    baseCurrency: "GBP" as const,
    period: "/ month",
    highlighted: true,
    features: [
      "10 verified tenders",
      "Pre-bid checklist",
      "Strategy consultation",
      "Tender pipeline building",
    ],
  },
  {
    name: "GovElite",
    basePrice: 2175,
    baseCurrency: "GBP" as const,
    period: "/ month",
    features: [
      "1 full proposal draft per month",
      "Tender roadmap development",
      "Consortium matchmaking",
      "Priority advisory support",
    ],
  },
];

export const PRICING_TECH = [
  {
    name: "System Architecture Consulting",
    basePrice: 2500,
    baseCurrency: "EUR" as const,
    prefix: "from",
    features: [
      "Business system architecture design",
      "Infrastructure planning",
      "Automation architecture strategy",
    ],
  },
  {
    name: "Business Platforms Development",
    basePrice: 3500,
    baseCurrency: "EUR" as const,
    prefix: "from",
    features: [
      "Internal portals",
      "Operational dashboards",
      "Custom company systems",
    ],
  },
  {
    name: "Automation & Integrations",
    basePrice: 2000,
    baseCurrency: "EUR" as const,
    prefix: "from",
    highlighted: true,
    features: [
      "CRM / ERP integrations",
      "API automation",
      "Workflow automation systems",
    ],
  },
  {
    name: "Technical System Audit",
    basePrice: 1800,
    baseCurrency: "EUR" as const,
    prefix: "from",
    features: [
      "Infrastructure audit",
      "Scalability assessment",
      "Security baseline review",
    ],
  },
  {
    name: "CTO-as-a-Service",
    basePrice: 200,
    baseCurrency: "EUR" as const,
    period: "/ hour",
    prefix: "from",
    features: [
      "Technical involvement",
      "Architecture supervision",
      "Vendor and infrastructure selection",
      "Scaling strategy consulting",
      "Minimum 1-month contract — limited spots",
    ],
  },
];

export const COMMITMENT_OPTIONS = [
  { months: 3, discount: 0, label: "3 months", note: "Standard rate" },
  { months: 6, discount: 5, label: "6 months", note: "Save 5%" },
  { months: 9, discount: 7, label: "9 months", note: "Save 7%" },
  { months: 12, discount: 10, label: "12 months", note: "Save 10%" },
] as const;

export const BILLING_TERMS = {
  basis: "Billed monthly (calendar month basis)",
  minimum: "Commitment period determined in A.D.A.M.'s proposal",
  renewal: "Auto-renews month-by-month after initial commitment",
  cancellation: "Cancel with 15 days notice before end of commitment period",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const NAV_SERVICES = [
  {
    group: "Systems",
    items: [
      { label: "A.D.A.M.", description: "Automated Document & Account Manager", href: "https://adameva.app" },
    ],
  },
  {
    group: "Business Services",
    items: [
      { label: "End-to-End", description: "Strategic business development & growth architecture", href: "#end-to-end" },
      { label: "B2B Development", description: "Lead generation & outreach campaigns", href: "#pricing-b2b" },
      { label: "B2G Public Sector", description: "Government tenders & procurement", href: "#pricing-b2g" },
    ],
  },
  {
    group: "IT Services",
    items: [
      { label: "System Architecture", description: "Business system design & planning", href: "#pricing-tech" },
      { label: "Platform Development", description: "Portals, dashboards & custom systems", href: "#pricing-tech" },
      { label: "Automation & Integrations", description: "CRM, ERP & workflow automation", href: "#pricing-tech" },
      { label: "CTO-as-a-Service", description: "Technical leadership on demand", href: "#pricing-tech" },
    ],
  },
];

export const CASE_STUDIES = [
  {
    slug: "hospitality",
    titleKey: "hospitality",
    link: "/case-studies/hospitality",
  },
  {
    slug: "healthcare",
    titleKey: "healthcare",
    link: "/case-studies/healthcare",
  },
  {
    slug: "consulting",
    titleKey: "consulting",
    link: "/case-studies/consulting",
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "A.D.A.M. & E.V.A.", href: "#systems" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Company Information", href: "/company-information" },
];
