/**
 * Multi-language translations for Andy'K Group landing page
 *
 * Supported languages:
 * - en: English (default)
 * - es: Spanish (formal - usted)
 * - sk: Slovak
 * - nl: Dutch
 * - pt: Portuguese
 * - de: German (formal - Sie)
 *
 * Brand names remain unchanged: Andy'K Group International LTD, A.D.A.M., E.V.A.
 */

export type Locale = "en" | "es" | "sk" | "nl" | "pt" | "de";

// English translations (source of truth)
const en = {
  // Company information
  company: {
    name: "Andy'K Group International LTD",
    tagline: "End-to-End Business Development & Growth Architecture",
    subtitle: "Integrated B2B, B2G & IT Services",
    subtitleLine2: "Powered by A.D.A.M. — Guided by E.V.A.",
    description: "Andy'K Group International LTD is a UK-based innovation company, combining business intelligence, automation, and strategic outreach.",
    descriptionExtra: "With clients across Europe and Latin America, we build structured growth environments where strategy, operations, and technology move in one direction.",
    descriptionSystems: "Strategic services combining business development, operational architecture, and technology — helping startups, SMEs, and public institutions scale with structure.",
    quote: "One structure. One flow. One system.",
    quoteSubtitle: "Built for growth.",
    location: "London, UK",
    ukCompany: "UK Limited Company",
  },

  // Hero section
  hero: {
    ctaPrimary: "Tell Us About You",
    ctaSecondary: "Learn How We Work",
    emailPlaceholder: "Your email address",
    getInContact: "Get in Contact",
  },

  // Top banner
  banner: {
    b2bLead: "B2B Lead Generation:",
    b2bText: "targeted outreach & pipeline management",
    adamSystem: "A.D.A.M. System:",
    adamText: "automated documents, proposals & client lifecycle",
    b2gTender: "B2G Tender Strategy:",
    b2gText: "public procurement & bid preparation",
    trusted: "Trusted across:",
    trustedText: "LATAM, Benelux, DACH & US",
  },

  // Services section (Our Services grid)
  services: {
    heading: "Our",
    headingItalic: "services",
    subtitle: "Strategic services combining business development, operational architecture, and technology.",
    items: [
      {
        title: "End-to-End",
        description: "Strategic business development & growth architecture",
      },
      {
        title: "B2B",
        description: "Lead generation, outreach campaigns & pipeline management",
      },
      {
        title: "B2G",
        description: "Public sector strategy, tender advisory & procurement",
      },
      {
        title: "IT Services",
        description: "System architecture, platform development & automation",
      },
    ],
  },

  // End-to-End section
  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Business Development",
    description: "We design, restructure, and architect businesses from foundation to scalable growth. Powered using A.D.A.M. Structural transformation — aligning strategy, revenue, operations, positioning, and execution into one system.",
    bullets: [
      { title: "Structural clarity", description: "Defining organizational hierarchy, roles, and accountability across every business layer." },
      { title: "Revenue architecture", description: "Designing pricing, monetization, and revenue flow systems built for sustainable growth." },
      { title: "Market positioning", description: "Refining your brand, value proposition, and competitive advantage in your target market." },
      { title: "Operational redesign", description: "Restructuring internal workflows, processes, and team coordination for maximum efficiency." },
      { title: "System integration", description: "Connecting tools, platforms, and data flows into one unified operational ecosystem." },
      { title: "Expansion & growth control", description: "Building scalable expansion strategy with long-term positioning and controlled execution." },
    ],
  },

  // Loved By / About section
  lovedBy: {
    headingBold: "Built on",
    headingItalic: "trust.",
    headingLine2: "Driven by results.",
    paragraph1: "Andy'K Group International LTD is a UK-based innovation company delivering End-to-End Business Development & Growth Architecture across B2B, B2G, and technology-driven environments.",
    paragraph2: "We align positioning, revenue design, operations, and execution into one structured growth system.",
    paragraph3: "Powered by A.D.A.M. and guided by E.V.A., we build scalable ecosystems designed for long-term performance.",
    quote: "One structure. One flow. One system.",
    tagline: "BUILT FOR GROWTH.",
  },

  // Case Studies section
  caseStudies: {
    heading: "Case",
    headingItalic: "studies",
    cards: [
      {
        shortTitle: "Hospitality Operating System",
        title: "How we solved fragmented hotel operations using our services",
        description: "Built a full digital operating system for a hospitality group — from strategy to execution.",
        link: "Learn More",
      },
      {
        shortTitle: "Healthcare Digitalization",
        title: "How we solved clinical workflow chaos using our services",
        description: "Designed a structured operations system for a physiotherapy clinic, integrating A.D.A.M. Healthcare.",
        link: "Learn More",
      },
      {
        shortTitle: "Consulting Professionalization",
        title: "How we solved inconsistent consulting delivery using our services",
        description: "Transformed an emotional consulting practice into a structured, scalable professional service.",
        link: "Learn More",
      },
    ],
  },

  // Roadmap section (A.D.A.M.)
  roadmap: {
    heading: "How A.D.A.M.",
    headingItalic: "Works",
    subtitle: "From first contact to project launch in six structured steps.",
    steps: [
      {
        title: "Questionnaire",
        description: "Complete our structured intake form. We learn about your business, goals, and requirements.",
      },
      {
        title: "Proposal",
        description: "We craft a tailored proposal based on your needs. Review it in your personal dashboard.",
      },
      {
        title: "Contract",
        description: "Review, comment, and digitally sign your contract. Full transparency, no surprises.",
      },
      {
        title: "Strategy",
        description: "Together we define the strategy and timeline. Every detail aligned before we start.",
      },
      {
        title: "Invoice",
        description: "Automated invoicing with clear payment terms. Everything tracked in one place.",
      },
      {
        title: "Onboarding",
        description: "Project launches. Real-time updates, document sharing, and ongoing support through A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. is live and processing clients",
    stepLabel: "Step",
  },

  // Pricing section
  pricing: {
    heading: "Plans for",
    headingItalic: "every stage",
    subtitle: "Structured advisory and business development — combining strategy, public sector expertise, and technology infrastructure to help you scale.",
    eyebrow: "Transparent pricing",
    tabB2B: "B2B Business Development",
    tabB2G: "B2G Public Sector",
    tabTech: "Technology / CTO",
    commitment: "Starting from 3 months",
    popular: "Popular",
    from: "from",
    perMonth: "/ month",
    perHour: "/ hour",
    getStarted: "Get Started",
    customQuote: "Need something custom? We tailor packages to your exact requirements.",
    requestCustomQuote: "Request a Custom Quote",
    billingBasis: "Billed monthly",
    billingMinimum: "Initial commitment of 3\u201312 months",
    billingRenewal: "Transitions to rolling monthly subscription after delivery",
    billingCancellation: "15-day cancellation notice",

    // B2B Plans
    b2bCore: {
      name: "CORE",
      features: [
        "40 qualified leads per month",
        "1 market / 1 target persona",
        "Email outreach + cold calling",
        "Monthly reporting",
        "Onboarding strategy session",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 qualified leads per month",
        "2 markets coverage",
        "Multi-touch outreach campaigns",
        "Performance optimization",
        "Monthly strategy review",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 qualified leads per month",
        "Multi-market campaigns",
        "CRM pipeline setup",
        "Lead scoring system",
        "Strategic outreach architecture",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ qualified leads",
        "Branded outreach campaigns",
        "Custom call & email scripts",
        "Strategic business development consulting",
        "Executive-level reporting",
      ],
    },

    // B2G Plans
    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 verified public tenders per month",
        "Eligibility review",
        "Basic bid advisory",
        "Monthly consultation",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 verified tenders",
        "Pre-bid checklist",
        "Strategy consultation",
        "Tender pipeline building",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 full proposal draft per month",
        "Tender roadmap development",
        "Consortium matchmaking",
        "Priority advisory support",
      ],
    },

    // Tech Plans
    techArchitecture: {
      name: "System Architecture Consulting",
      features: [
        "Business system architecture design",
        "Infrastructure planning",
        "Automation architecture strategy",
      ],
    },
    techPlatforms: {
      name: "Business Platforms Development",
      features: [
        "Internal portals",
        "Operational dashboards",
        "Custom company systems",
      ],
    },
    techAutomation: {
      name: "Automation & Integrations",
      features: [
        "CRM / ERP integrations",
        "API automation",
        "Workflow automation systems",
      ],
    },
    techAudit: {
      name: "Technical System Audit",
      features: [
        "Infrastructure audit",
        "Scalability assessment",
        "Security baseline review",
      ],
    },
    techCTO: {
      name: "CTO-as-a-Service",
      features: [
        "Technical involvement",
        "Architecture supervision",
        "Vendor and infrastructure selection",
        "Scaling strategy consulting",
        "Minimum 1-month contract — limited spots",
      ],
    },
  },

  // CTA Section
  cta: {
    eyebrow: "Get in touch",
    heading: "Let's build something",
    headingItalic: "together.",
    subtitle: "Whether you need consulting, technology solutions, or a strategic partner for international expansion — we're ready to talk.",
    ctaPrimary: "Tell Us About You",
    ctaSecondary: "Request a Custom Quote",
    followLinkedIn: "Follow us on LinkedIn",
  },

  // Contact form
  contact: {
    heading: "Send Us a Message",
    subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelCompany: "Company Name",
    labelMessage: "Message",
    required: "*",
    placeholderName: "Your full name",
    placeholderEmail: "your@email.com",
    placeholderCompany: "Your company name",
    placeholderMessage: "Tell us about your business goals and how we can help...",
    buttonSend: "Send Message",
    privacyText: "By submitting this form, you agree to our terms of service and privacy policy.",
    successHeading: "Message prepared",
    successText: "Your email client should have opened. If not, email us directly at info@andykgroupinternational.com",
  },

  // Footer
  footer: {
    copyright: "© 2026",
    linkHome: "Home",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Pricing",
    linkContact: "Contact",
    linkPrivacy: "Privacy Policy",
    linkCookies: "Cookies Policy",
    linkTerms: "Terms of Use",
    linkDisclaimer: "Website Disclaimer",
    linkLegalNotice: "Legal Notice",
    linkClientPortal: "Client Portal",
    selectLanguage: "Language",
    selectCurrency: "Currency",
  },

  // Navigation
  nav: {
    about: "About",
    caseStudies: "Case Studies",
    pricing: "Pricing",
    contact: "Contact",
    services: "Services",
    groupSystems: "Systems",
    groupBusiness: "Business Services",
    groupIT: "IT Services",
    adamDesc: "Automated Document & Account Manager",
    endToEnd: "End-to-End",
    endToEndDesc: "Strategic business development & growth architecture",
    b2bDev: "B2B Development",
    b2bDevDesc: "Lead generation & outreach campaigns",
    b2gPublic: "B2G Public Sector",
    b2gPublicDesc: "Government tenders & procurement",
    sysArch: "System Architecture",
    sysArchDesc: "Business system design & planning",
    platformDev: "Platform Development",
    platformDevDesc: "Portals, dashboards & custom systems",
    automation: "Automation & Integrations",
    automationDesc: "CRM, ERP & workflow automation",
    cto: "CTO-as-a-Service",
    ctoDesc: "Technical leadership on demand",
  },

  // Founders section
  founders: {
    eyebrow: "The people behind it",
    heading: "Meet the",
    headingItalic: "founders",
    connect: "Connect",
    roles: [
      "Founder & Strategic Business Developer",
      "Co-Founder & CTO",
    ],
    bios: [
      "Fifteen+ years of leadership in sales, hospitality, business development, and operational strategy. Andrej specializes in scalable growth systems for B2B, B2G, and international client relations.",
      "The technical architect behind A.D.A.M., Kobe leverages his extensive expertise to transform any idea into reality.",
    ],
    quotes: [
      "My focus is building business systems that are not only profitable — but sustainable, secure, and designed to scale.",
      "",
    ],
    locations: [
      "Born in Austria",
      "Born in Belgium",
    ],
  },

  // Case study pages
  caseStudyPages: {
    nextCaseStudy: "Next case study",
    problem: "Problem",
    solution: "Solution",
    outcome: "Outcome",
    hospitality: {
      title: "Hospitality Operating System",
      problem: "A growing hospitality group with multiple properties was running on disconnected tools, manual processes, and inconsistent guest experiences. Revenue management, staff coordination, and guest communication were fragmented across spreadsheets and ad-hoc solutions.",
      solution: "We designed and implemented a full digital operating system — integrating reservation management, staff scheduling, guest communication, and financial oversight into one structured platform. The strategy covered operational redesign, technology selection, and team onboarding.",
      outcome: "Unified operations across all properties. Staff efficiency improved, guest satisfaction scores increased, and the group gained clear visibility into performance metrics — all running through one system.",
    },
    healthcare: {
      title: "Healthcare Digitalization",
      problem: "A physiotherapy clinic was struggling with clinical workflow chaos — patient scheduling, treatment records, billing, and communication all handled through separate, disconnected systems. Staff spent more time on admin than patient care.",
      solution: "We designed a structured operations system for the clinic, integrating patient management, appointment scheduling, treatment documentation, and billing into a cohesive digital workflow — with A.D.A.M. Healthcare handling the document and account management layer.",
      outcome: "Admin time reduced significantly. Patient throughput improved. The clinic now operates with a clear, structured digital workflow that keeps clinical staff focused on care, not paperwork.",
    },
    consulting: {
      title: "Consulting Professionalization",
      problem: "A consulting practice was delivering value but inconsistently — proposals were ad-hoc, project management was reactive, and client communication depended entirely on the founder's personal relationships. The business couldn't scale without structural change.",
      solution: "We transformed the consulting practice from an emotionally-driven operation into a structured, professional service. This included standardized proposal templates, project management workflows, client onboarding processes, and a clear service delivery framework.",
      outcome: "The practice now delivers consistent, professional service regardless of which team member is leading. Client retention improved, referral rates increased, and the business is positioned for scalable growth.",
    },
  },

  // Common/Shared
  common: {
    getStarted: "Get Started",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    readMore: "Read More",
  },

  // Language names
  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Spanish translations (formal - usted)
const es: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Desarrollo Empresarial Integral y Arquitectura de Crecimiento",
    subtitle: "Servicios Integrados B2B, B2G y TI",
    subtitleLine2: "Impulsado por A.D.A.M. — Guiado por E.V.A.",
    description: "Andy'K Group International LTD es una empresa de innovación con sede en el Reino Unido que combina inteligencia empresarial, automatización y divulgación estratégica.",
    descriptionExtra: "Con clientes en toda Europa y América Latina, construimos entornos de crecimiento estructurados donde la estrategia, las operaciones y la tecnología avanzan en una sola dirección.",
    descriptionSystems: "Servicios estratégicos que combinan desarrollo empresarial, arquitectura operativa y tecnología — ayudando a startups, PYMEs e instituciones públicas a escalar con estructura.",
    quote: "Una estructura. Un flujo. Un sistema.",
    quoteSubtitle: "Construido para crecer.",
    location: "Londres, Reino Unido",
    ukCompany: "Empresa Limitada del Reino Unido",
  },

  hero: {
    ctaPrimary: "Cuéntenos sobre usted",
    ctaSecondary: "Descubra cómo trabajamos",
    emailPlaceholder: "Su dirección de correo electrónico",
    getInContact: "Contáctenos",
  },

  banner: {
    b2bLead: "Generación de leads B2B:",
    b2bText: "divulgación dirigida y gestión de pipeline",
    adamSystem: "Sistema A.D.A.M.:",
    adamText: "documentos automatizados, propuestas y ciclo de vida del cliente",
    b2gTender: "Estrategia de licitación B2G:",
    b2gText: "contratación pública y preparación de ofertas",
    trusted: "Confianza en:",
    trustedText: "LATAM, Benelux, DACH y EE.UU.",
  },

  services: {
    heading: "Nuestros",
    headingItalic: "servicios",
    subtitle: "Servicios estratégicos que combinan desarrollo empresarial, arquitectura operativa y tecnología.",
    items: [
      { title: "End-to-End", description: "Desarrollo empresarial estratégico y arquitectura de crecimiento" },
      { title: "B2B", description: "Generación de leads, campañas de divulgación y gestión de pipeline" },
      { title: "B2G", description: "Estrategia del sector público, asesoramiento en licitaciones y contratación" },
      { title: "IT Services", description: "Arquitectura de sistemas, desarrollo de plataformas y automatización" },
    ],
  },

  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Desarrollo Empresarial",
    description: "Diseñamos, reestructuramos y arquitectamos negocios desde los cimientos hasta el crecimiento escalable. Impulsado por A.D.A.M. Transformación estructural — alineando estrategia, ingresos, operaciones, posicionamiento y ejecución en un solo sistema.",
    bullets: [
      { title: "Claridad estructural", description: "Definición de jerarquía organizativa, roles y responsabilidad en cada capa del negocio." },
      { title: "Arquitectura de ingresos", description: "Diseño de sistemas de precios, monetización y flujo de ingresos para un crecimiento sostenible." },
      { title: "Posicionamiento de mercado", description: "Refinamiento de marca, propuesta de valor y ventaja competitiva en su mercado objetivo." },
      { title: "Rediseño operativo", description: "Reestructuración de flujos internos, procesos y coordinación de equipos para máxima eficiencia." },
      { title: "Integración de sistemas", description: "Conexión de herramientas, plataformas y flujos de datos en un ecosistema operativo unificado." },
      { title: "Expansión y control de crecimiento", description: "Estrategia de expansión escalable con posicionamiento a largo plazo y ejecución controlada." },
    ],
  },

  roadmap: {
    heading: "Cómo funciona",
    headingItalic: "A.D.A.M.",
    subtitle: "Del primer contacto al lanzamiento del proyecto en seis pasos estructurados.",
    steps: [
      {
        title: "Cuestionario",
        description: "Complete nuestro formulario de admisión estructurado. Conocemos su empresa, objetivos y requisitos.",
      },
      {
        title: "Propuesta",
        description: "Elaboramos una propuesta a medida basada en sus necesidades. Revísela en su panel personal.",
      },
      {
        title: "Contrato",
        description: "Revise, comente y firme digitalmente su contrato. Total transparencia, sin sorpresas.",
      },
      {
        title: "Estrategia",
        description: "Juntos definimos la estrategia y el cronograma. Cada detalle alineado antes de comenzar.",
      },
      {
        title: "Factura",
        description: "Facturación automatizada con condiciones de pago claras. Todo rastreado en un solo lugar.",
      },
      {
        title: "Incorporación",
        description: "El proyecto se lanza. Actualizaciones en tiempo real, intercambio de documentos y soporte continuo a través de A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. está activo y procesando clientes",
    stepLabel: "Paso",
  },

  pricing: {
    heading: "Planes para",
    headingItalic: "cada etapa",
    subtitle: "Asesoramiento estructurado y desarrollo empresarial — combinando estrategia, experiencia en el sector público e infraestructura tecnológica para ayudarle a escalar.",
    eyebrow: "Precios transparentes",
    tabB2B: "Desarrollo Empresarial B2B",
    tabB2G: "Sector Público B2G",
    tabTech: "Tecnología / CTO",
    commitment: "Desde 3 meses",
    popular: "Popular",
    from: "desde",
    perMonth: "/ mes",
    perHour: "/ hora",
    getStarted: "Comenzar",
    customQuote: "¿Necesita algo personalizado? Adaptamos paquetes a sus requisitos exactos.",
    requestCustomQuote: "Solicitar presupuesto personalizado",
    billingBasis: "Facturación mensual",
    billingMinimum: "Compromiso inicial de 3\u201312 meses",
    billingRenewal: "Transición a suscripción mensual continua tras la entrega",
    billingCancellation: "Aviso de cancelación de 15 días",

    b2bCore: {
      name: "CORE",
      features: [
        "40 leads cualificados por mes",
        "1 mercado / 1 persona objetivo",
        "Divulgación por correo electrónico + llamadas en frío",
        "Informes mensuales",
        "Sesión de estrategia de incorporación",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 leads cualificados por mes",
        "Cobertura de 2 mercados",
        "Campañas de divulgación multitáctil",
        "Optimización de rendimiento",
        "Revisión de estrategia mensual",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 leads cualificados por mes",
        "Campañas multimercado",
        "Configuración de pipeline CRM",
        "Sistema de puntuación de leads",
        "Arquitectura de divulgación estratégica",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ leads cualificados",
        "Campañas de divulgación de marca",
        "Scripts personalizados de llamadas y correos electrónicos",
        "Consultoría estratégica de desarrollo empresarial",
        "Informes a nivel ejecutivo",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 licitaciones públicas verificadas por mes",
        "Revisión de elegibilidad",
        "Asesoramiento básico de oferta",
        "Consulta mensual",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 licitaciones verificadas",
        "Lista de verificación previa a la oferta",
        "Consulta de estrategia",
        "Construcción de pipeline de licitaciones",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 borrador de propuesta completo por mes",
        "Desarrollo de hoja de ruta de licitaciones",
        "Emparejamiento de consorcios",
        "Soporte de asesoramiento prioritario",
      ],
    },

    techArchitecture: {
      name: "Consultoría de Arquitectura de Sistemas",
      features: [
        "Diseño de arquitectura de sistemas empresariales",
        "Planificación de infraestructura",
        "Estrategia de arquitectura de automatización",
      ],
    },
    techPlatforms: {
      name: "Desarrollo de Plataformas Empresariales",
      features: [
        "Portales internos",
        "Paneles operativos",
        "Sistemas empresariales personalizados",
      ],
    },
    techAutomation: {
      name: "Automatización e Integraciones",
      features: [
        "Integraciones CRM / ERP",
        "Automatización de API",
        "Sistemas de automatización de flujo de trabajo",
      ],
    },
    techAudit: {
      name: "Auditoría de Sistemas Técnicos",
      features: [
        "Auditoría de infraestructura",
        "Evaluación de escalabilidad",
        "Revisión de línea base de seguridad",
      ],
    },
    techCTO: {
      name: "CTO-como-Servicio",
      features: [
        "Participación técnica",
        "Supervisión de arquitectura",
        "Selección de proveedores e infraestructura",
        "Consultoría de estrategia de escalado",
        "Contrato mínimo de 1 mes — plazas limitadas",
      ],
    },
  },

  cta: {
    eyebrow: "Póngase en contacto",
    heading: "Construyamos algo",
    headingItalic: "juntos.",
    subtitle: "Ya sea que necesite consultoría, soluciones tecnológicas o un socio estratégico para expansión internacional — estamos listos para hablar.",
    ctaPrimary: "Cuéntenos sobre usted",
    ctaSecondary: "Solicitar presupuesto personalizado",
    followLinkedIn: "Síguenos en LinkedIn",
  },

  contact: {
    heading: "Envíenos un mensaje",
    subtitle: "Complete el formulario a continuación y nos pondremos en contacto lo antes posible.",
    labelName: "Nombre completo",
    labelEmail: "Dirección de correo electrónico",
    labelCompany: "Nombre de la empresa",
    labelMessage: "Mensaje",
    required: "*",
    placeholderName: "Su nombre completo",
    placeholderEmail: "su@email.com",
    placeholderCompany: "El nombre de su empresa",
    placeholderMessage: "Cuéntenos sobre sus objetivos comerciales y cómo podemos ayudarle...",
    buttonSend: "Enviar mensaje",
    privacyText: "Al enviar este formulario, acepta nuestros términos de servicio y política de privacidad.",
    successHeading: "Mensaje preparado",
    successText: "Su cliente de correo electrónico debería haberse abierto. Si no, envíenos un correo electrónico directamente a info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Inicio",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Precios",
    linkContact: "Contacto",
    linkPrivacy: "Política de privacidad",
    linkCookies: "Política de cookies",
    linkTerms: "Condiciones de uso",
    linkDisclaimer: "Aviso legal del sitio",
    linkLegalNotice: "Aviso legal",
    linkClientPortal: "Portal del cliente",
    selectLanguage: "Idioma",
    selectCurrency: "Moneda",
  },

  common: {
    getStarted: "Comenzar",
    learnMore: "Más información",
    contactUs: "Contáctenos",
    readMore: "Leer más",
  },

  lovedBy: {
    headingBold: "Construido sobre",
    headingItalic: "confianza.",
    headingLine2: "Impulsado por resultados.",
    paragraph1: "Andy'K Group International LTD es una empresa de innovación con sede en el Reino Unido que ofrece Desarrollo Empresarial End-to-End y Arquitectura de Crecimiento en entornos B2B, B2G y tecnológicos.",
    paragraph2: "Alineamos posicionamiento, diseño de ingresos, operaciones y ejecución en un sistema de crecimiento estructurado.",
    paragraph3: "Impulsado por A.D.A.M. y guiado por E.V.A., construimos ecosistemas escalables diseñados para el rendimiento a largo plazo.",
    quote: "Una estructura. Un flujo. Un sistema.",
    tagline: "CONSTRUIDO PARA CRECER.",
  },

  caseStudies: {
    heading: "Casos de",
    headingItalic: "estudio",
    cards: [
      { shortTitle: "Sistema Operativo Hotelero", title: "Cómo resolvimos la fragmentación operativa hotelera con nuestros servicios", description: "Construimos un sistema operativo digital completo para un grupo hotelero — de la estrategia a la ejecución.", link: "Más información" },
      { shortTitle: "Digitalización Sanitaria", title: "Cómo resolvimos el caos clínico con nuestros servicios", description: "Diseñamos un sistema de operaciones estructurado para una clínica de fisioterapia, integrando A.D.A.M. Healthcare.", link: "Más información" },
      { shortTitle: "Profesionalización de Consultoría", title: "Cómo resolvimos la inconsistencia en consultoría con nuestros servicios", description: "Transformamos una práctica de consultoría emocional en un servicio profesional estructurado y escalable.", link: "Más información" },
    ],
  },

  nav: {
    about: "Acerca de",
    caseStudies: "Casos de estudio",
    pricing: "Precios",
    contact: "Contacto",
    services: "Servicios",
    groupSystems: "Sistemas",
    groupBusiness: "Servicios empresariales",
    groupIT: "Servicios TI",
    adamDesc: "Gestor Automatizado de Documentos y Cuentas",
    endToEnd: "End-to-End",
    endToEndDesc: "Desarrollo empresarial estratégico y arquitectura de crecimiento",
    b2bDev: "Desarrollo B2B",
    b2bDevDesc: "Generación de leads y campañas de divulgación",
    b2gPublic: "Sector Público B2G",
    b2gPublicDesc: "Licitaciones gubernamentales y contratación pública",
    sysArch: "Arquitectura de sistemas",
    sysArchDesc: "Diseño y planificación de sistemas empresariales",
    platformDev: "Desarrollo de plataformas",
    platformDevDesc: "Portales, paneles y sistemas personalizados",
    automation: "Automatización e integraciones",
    automationDesc: "Automatización de CRM, ERP y flujos de trabajo",
    cto: "CTO-as-a-Service",
    ctoDesc: "Liderazgo técnico bajo demanda",
  },

  founders: {
    eyebrow: "Las personas detrás",
    heading: "Conozca a los",
    headingItalic: "fundadores",
    connect: "Conectar",
    roles: [
      "Fundador y Desarrollador Empresarial Estratégico",
      "Cofundador y CTO",
    ],
    bios: [
      "Más de quince años de liderazgo en ventas, hostelería, desarrollo empresarial y estrategia operativa. Andrej se especializa en sistemas de crecimiento escalable para B2B, B2G y relaciones internacionales con clientes.",
      "El arquitecto técnico detrás de A.D.A.M., Kobe aprovecha su amplia experiencia para transformar cualquier idea en realidad.",
    ],
    quotes: [
      "Mi enfoque es construir sistemas empresariales que no solo sean rentables, sino sostenibles, seguros y diseñados para escalar.",
      "",
    ],
    locations: [
      "Nacido en Austria",
      "Nacido en Bélgica",
    ],
  },

  caseStudyPages: {
    nextCaseStudy: "Siguiente caso de estudio",
    problem: "Problema",
    solution: "Solución",
    outcome: "Resultado",
    hospitality: {
      title: "Sistema operativo hotelero",
      problem: "Un grupo hotelero en crecimiento con múltiples propiedades funcionaba con herramientas desconectadas, procesos manuales y experiencias de huéspedes inconsistentes. La gestión de ingresos, la coordinación del personal y la comunicación con los huéspedes estaban fragmentadas entre hojas de cálculo y soluciones improvisadas.",
      solution: "Diseñamos e implementamos un sistema operativo digital completo — integrando la gestión de reservas, la programación del personal, la comunicación con los huéspedes y la supervisión financiera en una plataforma estructurada. La estrategia cubrió el rediseño operativo, la selección de tecnología y la incorporación del equipo.",
      outcome: "Operaciones unificadas en todas las propiedades. La eficiencia del personal mejoró, las puntuaciones de satisfacción de los huéspedes aumentaron y el grupo obtuvo una visibilidad clara de las métricas de rendimiento — todo funcionando a través de un solo sistema.",
    },
    healthcare: {
      title: "Digitalización sanitaria",
      problem: "Una clínica de fisioterapia luchaba contra el caos en los flujos de trabajo clínicos — la programación de pacientes, los registros de tratamiento, la facturación y la comunicación se manejaban a través de sistemas separados y desconectados. El personal dedicaba más tiempo a la administración que a la atención al paciente.",
      solution: "Diseñamos un sistema de operaciones estructurado para la clínica, integrando la gestión de pacientes, la programación de citas, la documentación de tratamientos y la facturación en un flujo de trabajo digital cohesivo — con A.D.A.M. Healthcare manejando la capa de gestión de documentos y cuentas.",
      outcome: "El tiempo administrativo se redujo significativamente. El rendimiento de pacientes mejoró. La clínica ahora opera con un flujo de trabajo digital claro y estructurado que mantiene al personal clínico enfocado en la atención, no en el papeleo.",
    },
    consulting: {
      title: "Profesionalización de consultoría",
      problem: "Una práctica de consultoría entregaba valor pero de manera inconsistente — las propuestas eran improvisadas, la gestión de proyectos era reactiva y la comunicación con los clientes dependía enteramente de las relaciones personales del fundador. El negocio no podía escalar sin un cambio estructural.",
      solution: "Transformamos la práctica de consultoría de una operación impulsada por emociones a un servicio profesional estructurado. Esto incluyó plantillas de propuestas estandarizadas, flujos de trabajo de gestión de proyectos, procesos de incorporación de clientes y un marco claro de entrega de servicios.",
      outcome: "La práctica ahora entrega un servicio profesional consistente independientemente de qué miembro del equipo lidere. La retención de clientes mejoró, las tasas de referencia aumentaron y el negocio está posicionado para un crecimiento escalable.",
    },
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Slovak translations
const sk: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Komplexný Rozvoj Podnikania a Architektúra Rastu",
    subtitle: "Integrované Služby B2B, B2G a IT",
    subtitleLine2: "Poháňané systémom A.D.A.M. — Vedené systémom E.V.A.",
    description: "Andy'K Group International LTD je inovačná spoločnosť so sídlom vo Veľkej Británii, ktorá kombinuje obchodnú inteligenciu, automatizáciu a strategické oslovovanie.",
    descriptionExtra: "S klientmi po celej Európe a Latinskej Amerike budujeme štruktúrované prostredia rastu, kde stratégia, prevádzka a technológia smerujú jedným smerom.",
    descriptionSystems: "Strategické služby kombinujúce obchodný rozvoj, prevádzkovú architektúru a technológiu — pomáhajúce startupom, malým a stredným podnikom a verejným inštitúciám škálovať so štruktúrou.",
    quote: "Jedna štruktúra. Jeden tok. Jeden systém.",
    quoteSubtitle: "Vytvorené pre rast.",
    location: "Londýn, Veľká Británia",
    ukCompany: "Spoločnosť s ručením obmedzeným Veľkej Británie",
  },

  hero: {
    ctaPrimary: "Povedzte nám o sebe",
    ctaSecondary: "Zistite, ako pracujeme",
    emailPlaceholder: "Vaša e-mailová adresa",
    getInContact: "Kontaktujte nás",
  },

  banner: {
    b2bLead: "Generovanie B2B leadov:",
    b2bText: "cielené oslovenie a správa pipeline",
    adamSystem: "Systém A.D.A.M.:",
    adamText: "automatizované dokumenty, návrhy a životný cyklus klienta",
    b2gTender: "Stratégia B2G tenderov:",
    b2gText: "verejné obstarávanie a príprava ponúk",
    trusted: "Dôveryhodné naprieč:",
    trustedText: "LATAM, Benelux, DACH a USA",
  },

  services: {
    heading: "Naše",
    headingItalic: "služby",
    subtitle: "Strategické služby kombinujúce obchodný rozvoj, prevádzkovú architektúru a technológiu.",
    items: [
      { title: "End-to-End", description: "Strategický obchodný rozvoj a architektúra rastu" },
      { title: "B2B", description: "Generovanie leadov, kampane oslovenia a správa pipeline" },
      { title: "B2G", description: "Stratégia verejného sektora, poradenstvo k tenderom a obstarávanie" },
      { title: "IT Services", description: "Architektúra systémov, vývoj platforiem a automatizácia" },
    ],
  },

  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Obchodný Rozvoj",
    description: "Navrhujeme, reštrukturalizujeme a budujeme podnikateľskú architektúru od základov po škálovateľný rast. Poháňané systémom A.D.A.M. Štrukturálna transformácia — zosúladenie stratégie, príjmov, prevádzky, pozicionovania a realizácie do jedného systému.",
    bullets: [
      { title: "Štrukturálna jasnosť", description: "Definovanie organizačnej hierarchie, rolí a zodpovednosti naprieč každou vrstvou podnikania." },
      { title: "Architektúra príjmov", description: "Navrhovanie cenových, monetizačných a príjmových systémov pre udržateľný rast." },
      { title: "Pozicionovanie na trhu", description: "Zdokonaľovanie značky, hodnotovej ponuky a konkurenčnej výhody na cieľovom trhu." },
      { title: "Prevádzkový redizajn", description: "Reštrukturalizácia interných procesov, pracovných postupov a koordinácie tímov pre maximálnu efektivitu." },
      { title: "Systémová integrácia", description: "Prepojenie nástrojov, platforiem a dátových tokov do jedného prevádzkovéo ekosystému." },
      { title: "Expanzia a kontrola rastu", description: "Budovanie škálovateľnej expanznej stratégie s dlhodobým pozicionovaním a kontrolovanou realizáciou." },
    ],
  },

  lovedBy: {
    headingBold: "Postavené na",
    headingItalic: "dôvere.",
    headingLine2: "Poháňané výsledkami.",
    paragraph1: "Andy'K Group International LTD je inovačná spoločnosť so sídlom vo Veľkej Británii, ktorá poskytuje End-to-End obchodný rozvoj a architektúru rastu v prostrediach B2B, B2G a technologicky orientovaných odvetviach.",
    paragraph2: "Zosúlaďujeme pozicionovanie, dizajn príjmov, prevádzku a realizáciu do jedného štruktúrovaného systému rastu.",
    paragraph3: "Poháňané systémom A.D.A.M. a vedené systémom E.V.A., budujeme škálovateľné ekosystémy navrhnuté pre dlhodobý výkon.",
    quote: "Jedna štruktúra. Jeden tok. Jeden systém.",
    tagline: "VYTVORENÉ PRE RAST.",
  },

  caseStudies: {
    heading: "Prípadové",
    headingItalic: "štúdie",
    cards: [
      { shortTitle: "Hotelový operačný systém", title: "Ako sme vyriešili fragmentované hotelové operácie pomocou našich služieb", description: "Vybudovali sme kompletný digitálny operačný systém pre hoteliersku skupinu — od stratégie po realizáciu.", link: "Dozvedieť sa viac" },
      { shortTitle: "Digitalizácia zdravotníctva", title: "Ako sme vyriešili chaos v klinických procesoch pomocou našich služieb", description: "Navrhli sme štruktúrovaný operačný systém pre fyzioterapeutickú kliniku s integráciou A.D.A.M. Healthcare.", link: "Dozvedieť sa viac" },
      { shortTitle: "Profesionalizácia poradenstva", title: "Ako sme vyriešili nekonzistentné poradenstvo pomocou našich služieb", description: "Transformovali sme emocionálnu poradenskú prax na štruktúrovanú, škálovateľnú profesionálnu službu.", link: "Dozvedieť sa viac" },
    ],
  },

  roadmap: {
    heading: "Ako funguje",
    headingItalic: "A.D.A.M.",
    subtitle: "Od prvého kontaktu po spustenie projektu v šiestich štruktúrovaných krokoch.",
    steps: [
      {
        title: "Dotazník",
        description: "Vyplňte náš štruktúrovaný formulár. Spoznáme vašu firmu, ciele a požiadavky.",
      },
      {
        title: "Návrh",
        description: "Vytvoríme návrh na mieru podľa vašich potrieb. Skontrolujte ho vo vašom osobnom paneli.",
      },
      {
        title: "Zmluva",
        description: "Skontrolujte, komentujte a digitálne podpíšte zmluvu. Úplná transparentnosť, žiadne prekvapenia.",
      },
      {
        title: "Stratégia",
        description: "Spoločne definujeme stratégiu a časový plán. Každý detail zladený pred začiatkom.",
      },
      {
        title: "Faktúra",
        description: "Automatizovaná fakturácia s jasnými platobnými podmienkami. Všetko sledované na jednom mieste.",
      },
      {
        title: "Onboarding",
        description: "Projekt sa spúšťa. Aktualizácie v reálnom čase, zdieľanie dokumentov a priebežná podpora cez A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. je aktívny a spracováva klientov",
    stepLabel: "Krok",
  },

  pricing: {
    heading: "Plány pre",
    headingItalic: "každú fázu",
    subtitle: "Štruktúrované poradenstvo a obchodný rozvoj — kombinujúce stratégiu, odbornosť vo verejnom sektore a technologickú infraštruktúru, aby ste mohli škálovať.",
    eyebrow: "Transparentné ceny",
    tabB2B: "B2B obchodný rozvoj",
    tabB2G: "B2G verejný sektor",
    tabTech: "Technológia / CTO",
    commitment: "Od 3 mesiacov",
    popular: "Populárne",
    from: "od",
    perMonth: "/ mesiac",
    perHour: "/ hodina",
    getStarted: "Začať",
    customQuote: "Potrebujete niečo na mieru? Prispôsobujeme balíčky presne vašim požiadavkám.",
    requestCustomQuote: "Požiadať o cenovú ponuku na mieru",
    billingBasis: "Mesačná fakturácia",
    billingMinimum: "Počiatočný záväzok 3\u201312 mesiacov",
    billingRenewal: "Po dodaní prechod na priebežné mesačné predplatné",
    billingCancellation: "15-dňová výpovedná lehota",

    b2bCore: {
      name: "CORE",
      features: [
        "40 kvalifikovaných leadov mesačne",
        "1 trh / 1 cieľová osoba",
        "E-mailové oslovenie + studené volanie",
        "Mesačné vykazovanie",
        "Začlenenie strategickej relácie",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 kvalifikovaných leadov mesačne",
        "Pokrytie 2 trhov",
        "Viacdotykové kampane oslovenia",
        "Optimalizácia výkonu",
        "Mesačná kontrola stratégie",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 kvalifikovaných leadov mesačne",
        "Viac trhové kampane",
        "Nastavenie CRM pipeline",
        "Systém hodnotenia leadov",
        "Strategická architektúra oslovenia",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ kvalifikovaných leadov",
        "Značkové kampane oslovenia",
        "Vlastné skripty hovorov a e-mailov",
        "Strategické obchodné rozvojové poradenstvo",
        "Vykazovanie na úrovni vedenia",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 overených verejných tenderov mesačne",
        "Kontrola oprávnenosti",
        "Základné poradenstvo k ponuke",
        "Mesačná konzultácia",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 overených tenderov",
        "Zoznam kontrol pred ponukou",
        "Strategická konzultácia",
        "Budovanie pipeline tenderov",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 kompletný návrh návrhu mesačne",
        "Vývoj cestovnej mapy tenderov",
        "Spárenie konzorcia",
        "Prioritná poradenská podpora",
      ],
    },

    techArchitecture: {
      name: "Poradenstvo architektúry systémov",
      features: [
        "Dizajn architektúry obchodných systémov",
        "Plánovanie infraštruktúry",
        "Stratégia architektúry automatizácie",
      ],
    },
    techPlatforms: {
      name: "Vývoj obchodných platforiem",
      features: [
        "Interné portály",
        "Prevádzkové dashboardy",
        "Vlastné firemné systémy",
      ],
    },
    techAutomation: {
      name: "Automatizácia a integrácie",
      features: [
        "CRM / ERP integrácie",
        "API automatizácia",
        "Systémy automatizácie pracovných postupov",
      ],
    },
    techAudit: {
      name: "Audit technických systémov",
      features: [
        "Audit infraštruktúry",
        "Posúdenie škálovateľnosti",
        "Kontrola základnej bezpečnosti",
      ],
    },
    techCTO: {
      name: "CTO-ako-služba",
      features: [
        "Technické zapojenie",
        "Dohľad nad architektúrou",
        "Výber dodávateľov a infraštruktúry",
        "Poradenstvo stratégie škálovania",
        "Minimálna zmluva na 1 mesiac — obmedzené miesta",
      ],
    },
  },

  cta: {
    eyebrow: "Kontaktujte nás",
    heading: "Postavme niečo",
    headingItalic: "spoločne.",
    subtitle: "Či už potrebujete poradenstvo, technologické riešenia alebo strategického partnera pre medzinárodnú expanziu — sme pripravení hovoriť.",
    ctaPrimary: "Povedzte nám o sebe",
    ctaSecondary: "Požiadať o cenovú ponuku na mieru",
    followLinkedIn: "Sledujte nás na LinkedIn",
  },

  contact: {
    heading: "Pošlite nám správu",
    subtitle: "Vyplňte formulár nižšie a ozveme sa vám čo najskôr.",
    labelName: "Celé meno",
    labelEmail: "E-mailová adresa",
    labelCompany: "Názov spoločnosti",
    labelMessage: "Správa",
    required: "*",
    placeholderName: "Vaše celé meno",
    placeholderEmail: "vas@email.com",
    placeholderCompany: "Názov vašej spoločnosti",
    placeholderMessage: "Povedzte nám o vašich obchodných cieľoch a ako vám môžeme pomôcť...",
    buttonSend: "Odoslať správu",
    privacyText: "Odoslaním tohto formulára súhlasíte s našimi podmienkami služby a zásadami ochrany osobných údajov.",
    successHeading: "Správa pripravená",
    successText: "Váš e-mailový klient by sa mal otvoriť. Ak nie, napíšte nám priamo na info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Domov",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Ceny",
    linkContact: "Kontakt",
    linkPrivacy: "Zásady ochrany osobných údajov",
    linkCookies: "Zásady používania cookies",
    linkTerms: "Podmienky používania",
    linkDisclaimer: "Vyhlásenie o odmietnutí zodpovednosti",
    linkLegalNotice: "Právne upozornenie",
    linkClientPortal: "Klientsky portál",
    selectLanguage: "Jazyk",
    selectCurrency: "Mena",
  },

  common: {
    getStarted: "Začať",
    learnMore: "Dozvedieť sa viac",
    contactUs: "Kontaktujte nás",
    readMore: "Čítať viac",
  },

  nav: {
    about: "O nás",
    caseStudies: "Prípadové štúdie",
    pricing: "Ceny",
    contact: "Kontakt",
    services: "Služby",
    groupSystems: "Systémy",
    groupBusiness: "Obchodné služby",
    groupIT: "IT služby",
    adamDesc: "Automatizovaný správca dokumentov a účtov",
    endToEnd: "End-to-End",
    endToEndDesc: "Strategický rozvoj podnikania a architektúra rastu",
    b2bDev: "B2B rozvoj",
    b2bDevDesc: "Generovanie leadov a kampane oslovovania",
    b2gPublic: "B2G Verejný sektor",
    b2gPublicDesc: "Verejné súťaže a obstarávanie",
    sysArch: "Architektúra systémov",
    sysArchDesc: "Návrh a plánovanie podnikových systémov",
    platformDev: "Vývoj platforiem",
    platformDevDesc: "Portály, dashboardy a vlastné systémy",
    automation: "Automatizácia a integrácie",
    automationDesc: "Automatizácia CRM, ERP a pracovných procesov",
    cto: "CTO-as-a-Service",
    ctoDesc: "Technické vedenie na požiadanie",
  },

  founders: {
    eyebrow: "Ľudia za tým",
    heading: "Spoznajte",
    headingItalic: "zakladateľov",
    connect: "Spojiť sa",
    roles: [
      "Zakladateľ a strategický obchodný developer",
      "Spoluzakladateľ a CTO",
    ],
    bios: [
      "Viac ako pätnásť rokov skúseností v predaji, pohostinstve, rozvoji podnikania a operačnej stratégii. Andrej sa špecializuje na škálovateľné rastové systémy pre B2B, B2G a medzinárodné vzťahy s klientmi.",
      "Technický architekt za A.D.A.M., Kobe využíva svoje rozsiahle odborné znalosti na premenu akejkoľvek myšlienky na realitu.",
    ],
    quotes: [
      "Môj cieľ je budovať obchodné systémy, ktoré sú nielen ziskové — ale udržateľné, bezpečné a navrhnuté na škálovanie.",
      "",
    ],
    locations: [
      "Narodený v Rakúsku",
      "Narodený v Belgicku",
    ],
  },

  caseStudyPages: {
    nextCaseStudy: "Ďalšia prípadová štúdia",
    problem: "Problém",
    solution: "Riešenie",
    outcome: "Výsledok",
    hospitality: {
      title: "Hotelový operačný systém",
      problem: "Rastúca hotelová skupina s viacerými nehnuteľnosťami fungovala na odpojených nástrojoch, manuálnych procesoch a nekonzistentných zážitkoch hostí. Riadenie príjmov, koordinácia personálu a komunikácia s hosťami boli fragmentované medzi tabuľkami a improvizovanými riešeniami.",
      solution: "Navrhli a implementovali sme kompletný digitálny operačný systém — integráciou správy rezervácií, plánovania personálu, komunikácie s hosťami a finančného dohľadu do jednej štruktúrovanej platformy. Stratégia pokrývala operačný redizajn, výber technológií a onboarding tímu.",
      outcome: "Zjednotené operácie naprieč všetkými nehnuteľnosťami. Efektivita personálu sa zlepšila, skóre spokojnosti hostí vzrástlo a skupina získala jasnú viditeľnosť do výkonnostných metrík — všetko bežiace cez jeden systém.",
    },
    healthcare: {
      title: "Digitalizácia zdravotníctva",
      problem: "Fyzioterapeutická klinika zápasila s chaosom v klinických pracovných procesoch — plánovanie pacientov, záznamy o liečbe, fakturácia a komunikácia boli riadené cez oddelené, neprepojené systémy. Personál trávil viac času administratívou než starostlivosťou o pacientov.",
      solution: "Navrhli sme štruktúrovaný operačný systém pre kliniku, integrujúci správu pacientov, plánovanie termínov, dokumentáciu liečby a fakturáciu do súdržného digitálneho pracovného procesu — s A.D.A.M. Healthcare riadiacim vrstvu správy dokumentov a účtov.",
      outcome: "Administratívny čas sa výrazne znížil. Priepustnosť pacientov sa zlepšila. Klinika teraz funguje s jasným, štruktúrovaným digitálnym pracovným procesom, ktorý udržuje klinický personál zameraný na starostlivosť, nie na papierovanie.",
    },
    consulting: {
      title: "Profesionalizácia poradenstva",
      problem: "Poradenská prax dodávala hodnotu, ale nekonzistentne — návrhy boli improvizované, riadenie projektov bolo reaktívne a komunikácia s klientmi závisela výlučne od osobných vzťahov zakladateľa. Firma nemohla rásť bez štrukturálnej zmeny.",
      solution: "Transformovali sme poradenskú prax z emocionálne riadenej prevádzky na štruktúrovanú profesionálnu službu. To zahŕňalo štandardizované šablóny návrhov, pracovné procesy riadenia projektov, procesy onboardingu klientov a jasný rámec poskytovania služieb.",
      outcome: "Prax teraz dodáva konzistentný profesionálny servis bez ohľadu na to, ktorý člen tímu vedie. Retencia klientov sa zlepšila, miera odporúčaní vzrástla a firma je pozicionovaná pre škálovateľný rast.",
    },
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Dutch translations
const nl: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "End-to-End Bedrijfsontwikkeling & Groeiarchitectuur",
    subtitle: "Geïntegreerde B2B, B2G & IT-Diensten",
    subtitleLine2: "Aangedreven door A.D.A.M. — Geleid door E.V.A.",
    description: "Andy'K Group International LTD is een in het VK gevestigd innovatiebedrijf dat business intelligence, automatisering en strategische outreach combineert.",
    descriptionExtra: "Met klanten in heel Europa en Latijns-Amerika bouwen we gestructureerde groeiomgevingen waar strategie, operaties en technologie in één richting bewegen.",
    descriptionSystems: "Strategische diensten die bedrijfsontwikkeling, operationele architectuur en technologie combineren — startups, MKB-bedrijven en publieke instellingen helpen schalen met structuur.",
    quote: "Eén structuur. Eén stroom. Eén systeem.",
    quoteSubtitle: "Gebouwd voor groei.",
    location: "Londen, VK",
    ukCompany: "VK Limited Company",
  },

  hero: {
    ctaPrimary: "Vertel ons over uzelf",
    ctaSecondary: "Ontdek hoe wij werken",
    emailPlaceholder: "Uw e-mailadres",
    getInContact: "Neem contact op",
  },

  banner: {
    b2bLead: "B2B leadgeneratie:",
    b2bText: "gerichte outreach en pipelinebeheer",
    adamSystem: "A.D.A.M. Systeem:",
    adamText: "geautomatiseerde documenten, voorstellen en klantlevenscyclus",
    b2gTender: "B2G aanbestedingsstrategie:",
    b2gText: "openbare aanbesteding en voorbereiding van offertes",
    trusted: "Vertrouwd in:",
    trustedText: "LATAM, Benelux, DACH en VS",
  },

  services: {
    heading: "Onze",
    headingItalic: "diensten",
    subtitle: "Strategische diensten die bedrijfsontwikkeling, operationele architectuur en technologie combineren.",
    items: [
      { title: "End-to-End", description: "Strategische bedrijfsontwikkeling en groeiarchitectuur" },
      { title: "B2B", description: "Leadgeneratie, outreach-campagnes en pipelinebeheer" },
      { title: "B2G", description: "Publieke sectorstrategie, aanbestedingsadvies en inkoop" },
      { title: "IT Services", description: "Systeemarchitectuur, platformontwikkeling en automatisering" },
    ],
  },

  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Bedrijfsontwikkeling",
    description: "Wij ontwerpen, herstructureren en bouwen bedrijfsarchitectuur van basis tot schaalbare groei. Aangedreven door A.D.A.M. Structurele transformatie — strategie, omzet, operaties, positionering en uitvoering in één systeem.",
    bullets: [
      { title: "Structurele helderheid", description: "Organisatiehiërarchie, rollen en verantwoordelijkheden definiëren binnen elke bedrijfslaag." },
      { title: "Omzetarchitectuur", description: "Prijsstelling, monetisatie en omzetstroomsystemen ontwerpen voor duurzame groei." },
      { title: "Marktpositionering", description: "Merk, waardepropositie en concurrentievoordeel verfijnen in uw doelmarkt." },
      { title: "Operationeel herontwerp", description: "Interne workflows, processen en teamcoördinatie herstructureren voor maximale efficiëntie." },
      { title: "Systeemintegratie", description: "Tools, platforms en datastromen verbinden tot één uniform operationeel ecosysteem." },
      { title: "Expansie en groeicontrole", description: "Schaalbare expansiestrategie bouwen met langetermijnpositionering en gecontroleerde uitvoering." },
    ],
  },

  lovedBy: {
    headingBold: "Gebouwd op",
    headingItalic: "vertrouwen.",
    headingLine2: "Gedreven door resultaten.",
    paragraph1: "Andy'K Group International LTD is een in het VK gevestigd innovatiebedrijf dat End-to-End bedrijfsontwikkeling en groeiarchitectuur levert in B2B, B2G en technologiegedreven omgevingen.",
    paragraph2: "Wij stemmen positionering, omzetontwerp, operaties en uitvoering af in één gestructureerd groeisysteem.",
    paragraph3: "Aangedreven door A.D.A.M. en geleid door E.V.A., bouwen we schaalbare ecosystemen ontworpen voor langetermijnprestaties.",
    quote: "Eén structuur. Eén stroom. Eén systeem.",
    tagline: "GEBOUWD VOOR GROEI.",
  },

  caseStudies: {
    heading: "Case",
    headingItalic: "studies",
    cards: [
      { shortTitle: "Hotel besturingssysteem", title: "Hoe wij gefragmenteerde hoteloperaties oplosten met onze diensten", description: "Een volledig digitaal besturingssysteem gebouwd voor een hotelgroep — van strategie tot uitvoering.", link: "Meer informatie" },
      { shortTitle: "Digitalisering gezondheidszorg", title: "Hoe wij klinische werkstroomchaos oplosten met onze diensten", description: "Een gestructureerd operatiesysteem ontworpen voor een fysiotherapiekliniek, met A.D.A.M. Healthcare-integratie.", link: "Meer informatie" },
      { shortTitle: "Professionalisering consultancy", title: "Hoe wij inconsistente adviesverlening oplosten met onze diensten", description: "Een emotionele adviespraktijk getransformeerd tot een gestructureerde, schaalbare professionele dienst.", link: "Meer informatie" },
    ],
  },

  roadmap: {
    heading: "Hoe A.D.A.M.",
    headingItalic: "werkt",
    subtitle: "Van eerste contact tot projectlancering in zes gestructureerde stappen.",
    steps: [
      {
        title: "Vragenlijst",
        description: "Vul ons gestructureerde intakeformulier in. We leren uw bedrijf, doelen en vereisten kennen.",
      },
      {
        title: "Voorstel",
        description: "We stellen een voorstel op maat op basis van uw behoeften. Bekijk het in uw persoonlijke dashboard.",
      },
      {
        title: "Contract",
        description: "Bekijk, becommentarieer en onderteken uw contract digitaal. Volledige transparantie, geen verrassingen.",
      },
      {
        title: "Strategie",
        description: "Samen definiëren we de strategie en tijdlijn. Elk detail afgestemd voordat we beginnen.",
      },
      {
        title: "Factuur",
        description: "Geautomatiseerde facturering met duidelijke betalingsvoorwaarden. Alles bijgehouden op één plek.",
      },
      {
        title: "Onboarding",
        description: "Het project start. Realtime updates, documentdeling en doorlopende ondersteuning via A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. is actief en verwerkt klanten",
    stepLabel: "Stap",
  },

  pricing: {
    heading: "Plannen voor",
    headingItalic: "elke fase",
    subtitle: "Gestructureerd advies en bedrijfsontwikkeling — een combinatie van strategie, expertise in de publieke sector en technologische infrastructuur om u te helpen schalen.",
    eyebrow: "Transparante prijzen",
    tabB2B: "B2B bedrijfsontwikkeling",
    tabB2G: "B2G publieke sector",
    tabTech: "Technologie / CTO",
    commitment: "Vanaf 3 maanden",
    popular: "Populair",
    from: "vanaf",
    perMonth: "/ maand",
    perHour: "/ uur",
    getStarted: "Begin",
    customQuote: "Heeft u iets op maat nodig? We passen pakketten aan uw exacte vereisten aan.",
    requestCustomQuote: "Vraag een offerte op maat aan",
    billingBasis: "Maandelijks gefactureerd",
    billingMinimum: "Initiële verbintenis van 3\u201312 maanden",
    billingRenewal: "Gaat over naar doorlopend maandabonnement na oplevering",
    billingCancellation: "15 dagen opzegtermijn",

    b2bCore: {
      name: "CORE",
      features: [
        "40 gekwalificeerde leads per maand",
        "1 markt / 1 doelpersona",
        "E-mail outreach + cold calling",
        "Maandelijkse rapportage",
        "Onboarding strategiesessie",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 gekwalificeerde leads per maand",
        "2 markten dekking",
        "Multi-touch outreach campagnes",
        "Prestatie-optimalisatie",
        "Maandelijkse strategiebeoordeling",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 gekwalificeerde leads per maand",
        "Multi-markt campagnes",
        "CRM pipeline opzet",
        "Lead scoring systeem",
        "Strategische outreach architectuur",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ gekwalificeerde leads",
        "Merk outreach campagnes",
        "Aangepaste bel- en e-mailscripts",
        "Strategisch bedrijfsontwikkelingsadvies",
        "Rapportage op directieniveau",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 geverifieerde openbare aanbestedingen per maand",
        "Geschiktheidsbeoordeling",
        "Basis biedadvies",
        "Maandelijkse consultatie",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 geverifieerde aanbestedingen",
        "Pre-bid checklist",
        "Strategie consultatie",
        "Aanbestedingspipeline opbouw",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 volledig voorstelconcept per maand",
        "Aanbestedingsroadmap ontwikkeling",
        "Consortium matchmaking",
        "Prioritaire adviesondersteuning",
      ],
    },

    techArchitecture: {
      name: "Systeemarchitectuur consultancy",
      features: [
        "Bedrijfssysteemarchitectuur ontwerp",
        "Infrastructuurplanning",
        "Automatiseringsarchitectuur strategie",
      ],
    },
    techPlatforms: {
      name: "Bedrijfsplatform ontwikkeling",
      features: [
        "Interne portalen",
        "Operationele dashboards",
        "Aangepaste bedrijfssystemen",
      ],
    },
    techAutomation: {
      name: "Automatisering & integraties",
      features: [
        "CRM / ERP integraties",
        "API automatisering",
        "Workflow automatiseringssystemen",
      ],
    },
    techAudit: {
      name: "Technische systeemaudit",
      features: [
        "Infrastructuur audit",
        "Schaalbaarheids beoordeling",
        "Beveiligingsbasislijn beoordeling",
      ],
    },
    techCTO: {
      name: "CTO-als-dienst",
      features: [
        "Technische betrokkenheid",
        "Architectuur supervisie",
        "Leveranciers- en infrastructuurselectie",
        "Schaalstrategie consultancy",
        "Minimaal 1-maands contract — beperkte plekken",
      ],
    },
  },

  cta: {
    eyebrow: "Neem contact op",
    heading: "Laten we iets",
    headingItalic: "samen bouwen.",
    subtitle: "Of u nu advies nodig heeft, technologische oplossingen of een strategische partner voor internationale expansie — we staan klaar om te praten.",
    ctaPrimary: "Vertel ons over uzelf",
    ctaSecondary: "Vraag een offerte op maat aan",
    followLinkedIn: "Volg ons op LinkedIn",
  },

  contact: {
    heading: "Stuur ons een bericht",
    subtitle: "Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.",
    labelName: "Volledige naam",
    labelEmail: "E-mailadres",
    labelCompany: "Bedrijfsnaam",
    labelMessage: "Bericht",
    required: "*",
    placeholderName: "Uw volledige naam",
    placeholderEmail: "uw@email.com",
    placeholderCompany: "Uw bedrijfsnaam",
    placeholderMessage: "Vertel ons over uw zakelijke doelen en hoe we kunnen helpen...",
    buttonSend: "Bericht verzenden",
    privacyText: "Door dit formulier in te dienen, gaat u akkoord met onze servicevoorwaarden en privacybeleid.",
    successHeading: "Bericht voorbereid",
    successText: "Uw e-mailclient zou moeten zijn geopend. Zo niet, stuur ons dan rechtstreeks een e-mail naar info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Home",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Prijzen",
    linkContact: "Contact",
    linkPrivacy: "Privacybeleid",
    linkCookies: "Cookiebeleid",
    linkTerms: "Gebruiksvoorwaarden",
    linkDisclaimer: "Website disclaimer",
    linkLegalNotice: "Juridische kennisgeving",
    linkClientPortal: "Klantportaal",
    selectLanguage: "Taal",
    selectCurrency: "Valuta",
  },

  common: {
    getStarted: "Begin",
    learnMore: "Meer informatie",
    contactUs: "Neem contact op",
    readMore: "Lees meer",
  },

  nav: {
    about: "Over ons",
    caseStudies: "Casestudies",
    pricing: "Tarieven",
    contact: "Contact",
    services: "Diensten",
    groupSystems: "Systemen",
    groupBusiness: "Zakelijke diensten",
    groupIT: "IT-diensten",
    adamDesc: "Geautomatiseerde Document- & Accountmanager",
    endToEnd: "End-to-End",
    endToEndDesc: "Strategische bedrijfsontwikkeling en groeiarchitectuur",
    b2bDev: "B2B-ontwikkeling",
    b2bDevDesc: "Leadgeneratie en outreachcampagnes",
    b2gPublic: "B2G Publieke sector",
    b2gPublicDesc: "Overheidsopdrachten en aanbestedingen",
    sysArch: "Systeemarchitectuur",
    sysArchDesc: "Ontwerp en planning van bedrijfssystemen",
    platformDev: "Platformontwikkeling",
    platformDevDesc: "Portalen, dashboards en maatwerkoplossingen",
    automation: "Automatisering & integraties",
    automationDesc: "CRM-, ERP- en workflowautomatisering",
    cto: "CTO-as-a-Service",
    ctoDesc: "Technisch leiderschap op aanvraag",
  },

  founders: {
    eyebrow: "De mensen erachter",
    heading: "Ontmoet de",
    headingItalic: "oprichters",
    connect: "Verbinden",
    roles: [
      "Oprichter & Strategisch Business Developer",
      "Medeoprichter & CTO",
    ],
    bios: [
      "Meer dan vijftien jaar ervaring in sales, horeca, bedrijfsontwikkeling en operationele strategie. Andrej is gespecialiseerd in schaalbare groeisystemen voor B2B, B2G en internationale klantrelaties.",
      "De technische architect achter A.D.A.M., Kobe zet zijn uitgebreide expertise in om elk idee werkelijkheid te maken.",
    ],
    quotes: [
      "Mijn focus is het bouwen van bedrijfssystemen die niet alleen winstgevend zijn — maar duurzaam, veilig en ontworpen om te schalen.",
      "",
    ],
    locations: [
      "Geboren in Oostenrijk",
      "Geboren in België",
    ],
  },

  caseStudyPages: {
    nextCaseStudy: "Volgende casestudie",
    problem: "Probleem",
    solution: "Oplossing",
    outcome: "Resultaat",
    hospitality: {
      title: "Horecabeheersysteem",
      problem: "Een groeiende horecagroep met meerdere vestigingen werkte met losgekoppelde tools, handmatige processen en inconsistente gastervaringen. Omzetbeheer, personeelscoördinatie en gastcommunicatie waren versnipperd over spreadsheets en ad-hocoplossingen.",
      solution: "We ontworpen en implementeerden een compleet digitaal operationeel systeem — waarbij reserveringsbeheer, personeelsplanning, gastcommunicatie en financieel toezicht werden geïntegreerd in één gestructureerd platform. De strategie omvatte operationeel herontwerp, technologieselectie en teamonboarding.",
      outcome: "Uniforme operaties over alle vestigingen. De personeelsefficiëntie verbeterde, gasttevredenheidsscores stegen en de groep kreeg duidelijk zicht op prestatie-indicatoren — alles draaiend via één systeem.",
    },
    healthcare: {
      title: "Digitalisering gezondheidszorg",
      problem: "Een fysiotherapiekliniek worstelde met chaos in klinische werkprocessen — patiëntenplanning, behandelregistraties, facturering en communicatie werden allemaal via aparte, losgekoppelde systemen afgehandeld. Medewerkers besteedden meer tijd aan administratie dan aan patiëntenzorg.",
      solution: "We ontwierpen een gestructureerd operationeel systeem voor de kliniek, waarbij patiëntenbeheer, afsprakenplanning, behandeldocumentatie en facturering werden geïntegreerd in een samenhangende digitale workflow — met A.D.A.M. Healthcare voor het document- en accountbeheer.",
      outcome: "Administratietijd aanzienlijk verminderd. Patiëntendoorvoer verbeterd. De kliniek werkt nu met een duidelijke, gestructureerde digitale workflow die klinisch personeel gefocust houdt op zorg, niet op papierwerk.",
    },
    consulting: {
      title: "Professionalisering consultancy",
      problem: "Een adviesbureau leverde waarde maar inconsistent — voorstellen waren ad-hoc, projectmanagement was reactief en klantcommunicatie hing volledig af van de persoonlijke relaties van de oprichter. Het bedrijf kon niet schalen zonder structurele verandering.",
      solution: "We transformeerden de adviesorganisatie van een emotiegedreven operatie naar een gestructureerde, professionele dienstverlening. Dit omvatte gestandaardiseerde voorstelsjablonen, projectmanagementworkflows, klantonboardingprocessen en een duidelijk dienstverleningskader.",
      outcome: "De praktijk levert nu consistente, professionele dienstverlening ongeacht welk teamlid de leiding heeft. Klantbehoud verbeterde, verwijzingspercentages stegen en het bedrijf is gepositioneerd voor schaalbare groei.",
    },
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Portuguese translations
const pt: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "Desenvolvimento Empresarial Completo e Arquitetura de Crescimento",
    subtitle: "Serviços Integrados B2B, B2G e TI",
    subtitleLine2: "Impulsionado pelo A.D.A.M. — Guiado pela E.V.A.",
    description: "Andy'K Group International LTD é uma empresa de inovação sediada no Reino Unido, combinando inteligência empresarial, automatização e divulgação estratégica.",
    descriptionExtra: "Com clientes em toda a Europa e América Latina, construímos ambientes de crescimento estruturados onde estratégia, operações e tecnologia avançam numa só direção.",
    descriptionSystems: "Serviços estratégicos que combinam desenvolvimento empresarial, arquitetura operacional e tecnologia — ajudando startups, PMEs e instituições públicas a escalar com estrutura.",
    quote: "Uma estrutura. Um fluxo. Um sistema.",
    quoteSubtitle: "Construído para crescimento.",
    location: "Londres, Reino Unido",
    ukCompany: "Empresa Limitada do Reino Unido",
  },

  hero: {
    ctaPrimary: "Conte-nos sobre você",
    ctaSecondary: "Saiba como trabalhamos",
    emailPlaceholder: "Seu endereço de e-mail",
    getInContact: "Entre em contato",
  },

  banner: {
    b2bLead: "Geração de leads B2B:",
    b2bText: "divulgação direcionada e gestão de pipeline",
    adamSystem: "Sistema A.D.A.M.:",
    adamText: "documentos automatizados, propostas e ciclo de vida do cliente",
    b2gTender: "Estratégia de licitação B2G:",
    b2gText: "aquisição pública e preparação de propostas",
    trusted: "Confiável em:",
    trustedText: "LATAM, Benelux, DACH e EUA",
  },

  services: {
    heading: "Nossos",
    headingItalic: "serviços",
    subtitle: "Serviços estratégicos que combinam desenvolvimento empresarial, arquitetura operacional e tecnologia.",
    items: [
      { title: "End-to-End", description: "Desenvolvimento empresarial estratégico e arquitetura de crescimento" },
      { title: "B2B", description: "Geração de leads, campanhas de divulgação e gestão de pipeline" },
      { title: "B2G", description: "Estratégia do setor público, consultoria de licitações e aquisições" },
      { title: "IT Services", description: "Arquitetura de sistemas, desenvolvimento de plataformas e automação" },
    ],
  },

  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Desenvolvimento Empresarial",
    description: "Projetamos, reestruturamos e arquitetamos negócios da base ao crescimento escalável. Impulsionado pelo A.D.A.M. Transformação estrutural — alinhando estratégia, receita, operações, posicionamento e execução num único sistema.",
    bullets: [
      { title: "Clareza estrutural", description: "Definição de hierarquia organizacional, funções e responsabilidades em cada camada do negócio." },
      { title: "Arquitetura de receita", description: "Desenho de sistemas de preços, monetização e fluxo de receita para crescimento sustentável." },
      { title: "Posicionamento de mercado", description: "Refinamento da marca, proposta de valor e vantagem competitiva no mercado-alvo." },
      { title: "Redesenho operacional", description: "Reestruturação de fluxos internos, processos e coordenação de equipas para máxima eficiência." },
      { title: "Integração de sistemas", description: "Conexão de ferramentas, plataformas e fluxos de dados num ecossistema operacional unificado." },
      { title: "Expansão e controlo de crescimento", description: "Construção de estratégia de expansão escalável com posicionamento de longo prazo e execução controlada." },
    ],
  },

  lovedBy: {
    headingBold: "Construído sobre",
    headingItalic: "confiança.",
    headingLine2: "Movido por resultados.",
    paragraph1: "Andy'K Group International LTD é uma empresa de inovação sediada no Reino Unido que oferece Desenvolvimento Empresarial End-to-End e Arquitetura de Crescimento em ambientes B2B, B2G e orientados por tecnologia.",
    paragraph2: "Alinhamos posicionamento, design de receita, operações e execução em um sistema de crescimento estruturado.",
    paragraph3: "Impulsionado pelo A.D.A.M. e guiado pela E.V.A., construímos ecossistemas escaláveis projetados para desempenho de longo prazo.",
    quote: "Uma estrutura. Um fluxo. Um sistema.",
    tagline: "CONSTRUÍDO PARA CRESCIMENTO.",
  },

  caseStudies: {
    heading: "Casos de",
    headingItalic: "estudo",
    cards: [
      { shortTitle: "Sistema operacional hoteleiro", title: "Como resolvemos operações hoteleiras fragmentadas com nossos serviços", description: "Construímos um sistema operacional digital completo para um grupo hoteleiro — da estratégia à execução.", link: "Saiba mais" },
      { shortTitle: "Digitalização da saúde", title: "Como resolvemos o caos clínico com nossos serviços", description: "Projetamos um sistema operacional estruturado para uma clínica de fisioterapia, integrando A.D.A.M. Healthcare.", link: "Saiba mais" },
      { shortTitle: "Profissionalização de consultoria", title: "Como resolvemos a inconsistência em consultoria com nossos serviços", description: "Transformamos uma prática de consultoria emocional num serviço profissional estruturado e escalável.", link: "Saiba mais" },
    ],
  },

  roadmap: {
    heading: "Como o A.D.A.M.",
    headingItalic: "funciona",
    subtitle: "Do primeiro contacto ao lançamento do projeto em seis passos estruturados.",
    steps: [
      {
        title: "Questionário",
        description: "Preencha nosso formulário de admissão estruturado. Conhecemos seu negócio, objetivos e requisitos.",
      },
      {
        title: "Proposta",
        description: "Elaboramos uma proposta personalizada com base nas suas necessidades. Revise-a no seu painel pessoal.",
      },
      {
        title: "Contrato",
        description: "Revise, comente e assine digitalmente seu contrato. Total transparência, sem surpresas.",
      },
      {
        title: "Estratégia",
        description: "Juntos definimos a estratégia e o cronograma. Cada detalhe alinhado antes de começar.",
      },
      {
        title: "Fatura",
        description: "Faturamento automatizado com condições de pagamento claras. Tudo rastreado em um só lugar.",
      },
      {
        title: "Integração",
        description: "O projeto é lançado. Atualizações em tempo real, compartilhamento de documentos e suporte contínuo pelo A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. está ativo e processando clientes",
    stepLabel: "Passo",
  },

  pricing: {
    heading: "Planos para",
    headingItalic: "cada estágio",
    subtitle: "Assessoria estruturada e desenvolvimento de negócios — combinando estratégia, expertise no setor público e infraestrutura tecnológica para ajudá-lo a escalar.",
    eyebrow: "Preços transparentes",
    tabB2B: "Desenvolvimento de Negócios B2B",
    tabB2G: "Setor Público B2G",
    tabTech: "Tecnologia / CTO",
    commitment: "A partir de 3 meses",
    popular: "Popular",
    from: "a partir de",
    perMonth: "/ mês",
    perHour: "/ hora",
    getStarted: "Começar",
    customQuote: "Precisa de algo personalizado? Adaptamos pacotes aos seus requisitos exatos.",
    requestCustomQuote: "Solicitar orçamento personalizado",
    billingBasis: "Faturamento mensal",
    billingMinimum: "Compromisso inicial de 3\u201312 meses",
    billingRenewal: "Transição para assinatura mensal contínua após entrega",
    billingCancellation: "Aviso de cancelamento de 15 dias",

    b2bCore: {
      name: "CORE",
      features: [
        "40 leads qualificados por mês",
        "1 mercado / 1 persona alvo",
        "Divulgação por e-mail + cold calling",
        "Relatórios mensais",
        "Sessão de estratégia de integração",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 leads qualificados por mês",
        "Cobertura de 2 mercados",
        "Campanhas de divulgação multi-toque",
        "Otimização de desempenho",
        "Revisão de estratégia mensal",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 leads qualificados por mês",
        "Campanhas multi-mercado",
        "Configuração de pipeline CRM",
        "Sistema de pontuação de leads",
        "Arquitetura de divulgação estratégica",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ leads qualificados",
        "Campanhas de divulgação de marca",
        "Scripts personalizados de chamada e e-mail",
        "Consultoria estratégica de desenvolvimento de negócios",
        "Relatórios de nível executivo",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 licitações públicas verificadas por mês",
        "Revisão de elegibilidade",
        "Assessoria básica de propostas",
        "Consulta mensal",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 licitações verificadas",
        "Checklist pré-proposta",
        "Consulta de estratégia",
        "Construção de pipeline de licitações",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 rascunho de proposta completo por mês",
        "Desenvolvimento de roadmap de licitações",
        "Matchmaking de consórcio",
        "Suporte de assessoria prioritário",
      ],
    },

    techArchitecture: {
      name: "Consultoria de Arquitetura de Sistemas",
      features: [
        "Design de arquitetura de sistemas de negócios",
        "Planejamento de infraestrutura",
        "Estratégia de arquitetura de automação",
      ],
    },
    techPlatforms: {
      name: "Desenvolvimento de Plataformas Empresariais",
      features: [
        "Portais internos",
        "Dashboards operacionais",
        "Sistemas empresariais personalizados",
      ],
    },
    techAutomation: {
      name: "Automação e Integrações",
      features: [
        "Integrações CRM / ERP",
        "Automação de API",
        "Sistemas de automação de fluxo de trabalho",
      ],
    },
    techAudit: {
      name: "Auditoria de Sistemas Técnicos",
      features: [
        "Auditoria de infraestrutura",
        "Avaliação de escalabilidade",
        "Revisão de linha de base de segurança",
      ],
    },
    techCTO: {
      name: "CTO-como-Serviço",
      features: [
        "Envolvimento técnico",
        "Supervisão de arquitetura",
        "Seleção de fornecedores e infraestrutura",
        "Consultoria de estratégia de escalabilidade",
        "Contrato mínimo de 1 mês — vagas limitadas",
      ],
    },
  },

  cta: {
    eyebrow: "Entre em contato",
    heading: "Vamos construir algo",
    headingItalic: "juntos.",
    subtitle: "Se você precisa de consultoria, soluções tecnológicas ou um parceiro estratégico para expansão internacional — estamos prontos para conversar.",
    ctaPrimary: "Conte-nos sobre você",
    ctaSecondary: "Solicitar orçamento personalizado",
    followLinkedIn: "Siga-nos no LinkedIn",
  },

  contact: {
    heading: "Envie-nos uma mensagem",
    subtitle: "Preencha o formulário abaixo e entraremos em contato o mais breve possível.",
    labelName: "Nome completo",
    labelEmail: "Endereço de e-mail",
    labelCompany: "Nome da empresa",
    labelMessage: "Mensagem",
    required: "*",
    placeholderName: "Seu nome completo",
    placeholderEmail: "seu@email.com",
    placeholderCompany: "Nome da sua empresa",
    placeholderMessage: "Conte-nos sobre seus objetivos de negócios e como podemos ajudar...",
    buttonSend: "Enviar mensagem",
    privacyText: "Ao enviar este formulário, você concorda com nossos termos de serviço e política de privacidade.",
    successHeading: "Mensagem preparada",
    successText: "Seu cliente de e-mail deve ter aberto. Caso contrário, envie-nos um e-mail diretamente para info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Início",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Preços",
    linkContact: "Contato",
    linkPrivacy: "Política de privacidade",
    linkCookies: "Política de cookies",
    linkTerms: "Termos de uso",
    linkDisclaimer: "Aviso legal do site",
    linkLegalNotice: "Aviso legal",
    linkClientPortal: "Portal do cliente",
    selectLanguage: "Idioma",
    selectCurrency: "Moeda",
  },

  common: {
    getStarted: "Começar",
    learnMore: "Saiba mais",
    contactUs: "Entre em contato",
    readMore: "Leia mais",
  },

  nav: {
    about: "Sobre",
    caseStudies: "Estudos de caso",
    pricing: "Preços",
    contact: "Contato",
    services: "Serviços",
    groupSystems: "Sistemas",
    groupBusiness: "Serviços empresariais",
    groupIT: "Serviços de TI",
    adamDesc: "Gestor Automatizado de Documentos e Contas",
    endToEnd: "End-to-End",
    endToEndDesc: "Desenvolvimento empresarial estratégico e arquitetura de crescimento",
    b2bDev: "Desenvolvimento B2B",
    b2bDevDesc: "Geração de leads e campanhas de divulgação",
    b2gPublic: "B2G Setor público",
    b2gPublicDesc: "Licitações governamentais e aquisições",
    sysArch: "Arquitetura de sistemas",
    sysArchDesc: "Projeto e planejamento de sistemas empresariais",
    platformDev: "Desenvolvimento de plataformas",
    platformDevDesc: "Portais, dashboards e sistemas personalizados",
    automation: "Automação e integrações",
    automationDesc: "Automação de CRM, ERP e fluxos de trabalho",
    cto: "CTO-as-a-Service",
    ctoDesc: "Liderança técnica sob demanda",
  },

  founders: {
    eyebrow: "As pessoas por trás",
    heading: "Conheça os",
    headingItalic: "fundadores",
    connect: "Conectar",
    roles: [
      "Fundador e Desenvolvedor Empresarial Estratégico",
      "Cofundador e CTO",
    ],
    bios: [
      "Mais de quinze anos de liderança em vendas, hospitalidade, desenvolvimento empresarial e estratégia operacional. Andrej é especialista em sistemas de crescimento escalável para B2B, B2G e relações internacionais com clientes.",
      "O arquiteto técnico por trás do A.D.A.M., Kobe utiliza sua vasta experiência para transformar qualquer ideia em realidade.",
    ],
    quotes: [
      "Meu foco é construir sistemas empresariais que não sejam apenas lucrativos — mas sustentáveis, seguros e projetados para escalar.",
      "",
    ],
    locations: [
      "Nascido na Áustria",
      "Nascido na Bélgica",
    ],
  },

  caseStudyPages: {
    nextCaseStudy: "Próximo estudo de caso",
    problem: "Problema",
    solution: "Solução",
    outcome: "Resultado",
    hospitality: {
      title: "Sistema operacional hoteleiro",
      problem: "Um grupo hoteleiro em crescimento com múltiplas propriedades funcionava com ferramentas desconectadas, processos manuais e experiências inconsistentes para os hóspedes. A gestão de receitas, a coordenação de pessoal e a comunicação com os hóspedes estavam fragmentadas entre planilhas e soluções improvisadas.",
      solution: "Projetamos e implementamos um sistema operacional digital completo — integrando gestão de reservas, programação de pessoal, comunicação com hóspedes e supervisão financeira em uma plataforma estruturada. A estratégia cobriu redesenho operacional, seleção de tecnologia e integração da equipe.",
      outcome: "Operações unificadas em todas as propriedades. A eficiência do pessoal melhorou, as pontuações de satisfação dos hóspedes aumentaram e o grupo ganhou visibilidade clara das métricas de desempenho — tudo funcionando através de um único sistema.",
    },
    healthcare: {
      title: "Digitalização da saúde",
      problem: "Uma clínica de fisioterapia enfrentava dificuldades com o caos nos fluxos de trabalho clínicos — agendamento de pacientes, registros de tratamento, faturamento e comunicação eram tratados por sistemas separados e desconectados. A equipe gastava mais tempo com administração do que com o atendimento ao paciente.",
      solution: "Projetamos um sistema operacional estruturado para a clínica, integrando gestão de pacientes, agendamento de consultas, documentação de tratamentos e faturamento em um fluxo de trabalho digital coeso — com A.D.A.M. Healthcare gerenciando a camada de gestão de documentos e contas.",
      outcome: "O tempo administrativo foi significativamente reduzido. A produtividade dos pacientes melhorou. A clínica agora opera com um fluxo de trabalho digital claro e estruturado que mantém a equipe clínica focada no atendimento, não na burocracia.",
    },
    consulting: {
      title: "Profissionalização de consultoria",
      problem: "Uma prática de consultoria entregava valor, mas de forma inconsistente — as propostas eram improvisadas, a gestão de projetos era reativa e a comunicação com os clientes dependia inteiramente das relações pessoais do fundador. O negócio não podia escalar sem mudança estrutural.",
      solution: "Transformamos a prática de consultoria de uma operação movida por emoções em um serviço profissional estruturado. Isso incluiu modelos de propostas padronizados, fluxos de trabalho de gestão de projetos, processos de integração de clientes e uma estrutura clara de entrega de serviços.",
      outcome: "A prática agora entrega um serviço profissional consistente, independentemente de qual membro da equipe está liderando. A retenção de clientes melhorou, as taxas de indicação aumentaram e o negócio está posicionado para crescimento escalável.",
    },
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// German translations (formal - Sie)
const de: typeof en = {
  company: {
    name: "Andy'K Group International LTD",
    tagline: "End-to-End-Geschäftsentwicklung & Wachstumsarchitektur",
    subtitle: "Integrierte B2B, B2G & IT-Dienstleistungen",
    subtitleLine2: "Angetrieben von A.D.A.M. — Geführt von E.V.A.",
    description: "Andy'K Group International LTD ist ein in Großbritannien ansässiges Innovationsunternehmen, das Business Intelligence, Automatisierung und strategisches Outreach kombiniert.",
    descriptionExtra: "Mit Kunden in ganz Europa und Lateinamerika bauen wir strukturierte Wachstumsumgebungen, in denen Strategie, Betrieb und Technologie in eine Richtung bewegen.",
    descriptionSystems: "Strategische Dienstleistungen, die Geschäftsentwicklung, operative Architektur und Technologie kombinieren — Startups, KMUs und öffentlichen Institutionen helfen, mit Struktur zu skalieren.",
    quote: "Eine Struktur. Ein Ablauf. Ein System.",
    quoteSubtitle: "Gebaut für Wachstum.",
    location: "London, Großbritannien",
    ukCompany: "UK Limited Company",
  },

  hero: {
    ctaPrimary: "Erzählen Sie uns von sich",
    ctaSecondary: "Erfahren Sie, wie wir arbeiten",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    getInContact: "Kontakt aufnehmen",
  },

  banner: {
    b2bLead: "B2B-Lead-Generierung:",
    b2bText: "gezieltes Outreach und Pipeline-Management",
    adamSystem: "A.D.A.M. System:",
    adamText: "automatisierte Dokumente, Angebote und Kundenlebenszyklus",
    b2gTender: "B2G-Ausschreibungsstrategie:",
    b2gText: "öffentliche Beschaffung und Angebotsvorbereitung",
    trusted: "Vertraut in:",
    trustedText: "LATAM, Benelux, DACH und USA",
  },

  services: {
    heading: "Unsere",
    headingItalic: "Dienstleistungen",
    subtitle: "Strategische Dienstleistungen, die Geschäftsentwicklung, operative Architektur und Technologie kombinieren.",
    items: [
      { title: "End-to-End", description: "Strategische Geschäftsentwicklung und Wachstumsarchitektur" },
      { title: "B2B", description: "Lead-Generierung, Outreach-Kampagnen und Pipeline-Management" },
      { title: "B2G", description: "Öffentlicher-Sektor-Strategie, Ausschreibungsberatung und Beschaffung" },
      { title: "IT Services", description: "Systemarchitektur, Plattformentwicklung und Automatisierung" },
    ],
  },

  endToEnd: {
    heading: "End-to-End",
    headingItalic: "Geschäftsentwicklung",
    description: "Wir entwerfen, restrukturieren und bauen Unternehmensarchitektur von der Basis bis zum skalierbaren Wachstum. Angetrieben von A.D.A.M. Strukturelle Transformation — Strategie, Umsatz, Betrieb, Positionierung und Ausführung in ein System integriert.",
    bullets: [
      { title: "Strukturelle Klarheit", description: "Definition von Organisationshierarchie, Rollen und Verantwortlichkeiten über alle Geschäftsebenen." },
      { title: "Umsatzarchitektur", description: "Gestaltung von Preis-, Monetarisierungs- und Umsatzflusssystemen für nachhaltiges Wachstum." },
      { title: "Marktpositionierung", description: "Verfeinerung von Marke, Wertversprechen und Wettbewerbsvorteil in Ihrem Zielmarkt." },
      { title: "Operatives Redesign", description: "Umstrukturierung interner Workflows, Prozesse und Teamkoordination für maximale Effizienz." },
      { title: "Systemintegration", description: "Verbindung von Tools, Plattformen und Datenflüssen zu einem einheitlichen operativen Ökosystem." },
      { title: "Expansion und Wachstumskontrolle", description: "Aufbau einer skalierbaren Expansionsstrategie mit langfristiger Positionierung und kontrollierter Umsetzung." },
    ],
  },

  lovedBy: {
    headingBold: "Gebaut auf",
    headingItalic: "Vertrauen.",
    headingLine2: "Angetrieben von Ergebnissen.",
    paragraph1: "Andy'K Group International LTD ist ein in Großbritannien ansässiges Innovationsunternehmen, das End-to-End Geschäftsentwicklung und Wachstumsarchitektur in B2B-, B2G- und technologiegetriebenen Umgebungen liefert.",
    paragraph2: "Wir stimmen Positionierung, Umsatzgestaltung, Betrieb und Umsetzung in ein strukturiertes Wachstumssystem ab.",
    paragraph3: "Angetrieben von A.D.A.M. und geführt von E.V.A., bauen wir skalierbare Ökosysteme, die für langfristige Leistung konzipiert sind.",
    quote: "Eine Struktur. Ein Ablauf. Ein System.",
    tagline: "GEBAUT FÜR WACHSTUM.",
  },

  caseStudies: {
    heading: "Fall-",
    headingItalic: "studien",
    cards: [
      { shortTitle: "Hotel-Betriebssystem", title: "Wie wir fragmentierte Hotelbetriebe mit unseren Dienstleistungen lösten", description: "Ein komplettes digitales Betriebssystem für eine Hotelgruppe aufgebaut — von der Strategie bis zur Umsetzung.", link: "Mehr erfahren" },
      { shortTitle: "Digitalisierung im Gesundheitswesen", title: "Wie wir klinisches Workflow-Chaos mit unseren Dienstleistungen lösten", description: "Ein strukturiertes Betriebssystem für eine Physiotherapie-Klinik entworfen, mit A.D.A.M. Healthcare-Integration.", link: "Mehr erfahren" },
      { shortTitle: "Professionalisierung der Beratung", title: "Wie wir inkonsistente Beratungsleistung mit unseren Dienstleistungen lösten", description: "Eine emotionale Beratungspraxis in einen strukturierten, skalierbaren professionellen Service transformiert.", link: "Mehr erfahren" },
    ],
  },

  roadmap: {
    heading: "Wie A.D.A.M.",
    headingItalic: "funktioniert",
    subtitle: "Vom Erstkontakt bis zum Projektstart in sechs strukturierten Schritten.",
    steps: [
      {
        title: "Fragebogen",
        description: "Füllen Sie unser strukturiertes Aufnahmeformular aus. Wir lernen Ihr Unternehmen, Ihre Ziele und Anforderungen kennen.",
      },
      {
        title: "Angebot",
        description: "Wir erstellen ein maßgeschneidertes Angebot basierend auf Ihren Bedürfnissen. Prüfen Sie es in Ihrem persönlichen Dashboard.",
      },
      {
        title: "Vertrag",
        description: "Prüfen, kommentieren und digital unterschreiben Sie Ihren Vertrag. Volle Transparenz, keine Überraschungen.",
      },
      {
        title: "Strategie",
        description: "Gemeinsam definieren wir die Strategie und den Zeitplan. Jedes Detail abgestimmt, bevor wir beginnen.",
      },
      {
        title: "Rechnung",
        description: "Automatisierte Rechnungsstellung mit klaren Zahlungsbedingungen. Alles an einem Ort verfolgt.",
      },
      {
        title: "Onboarding",
        description: "Das Projekt startet. Echtzeit-Updates, Dokumentenaustausch und fortlaufende Unterstützung durch A.D.A.M.",
      },
    ],
    statusBadge: "A.D.A.M. ist aktiv und verarbeitet Kunden",
    stepLabel: "Schritt",
  },

  pricing: {
    heading: "Pläne für",
    headingItalic: "jede Phase",
    subtitle: "Strukturierte Beratung und Geschäftsentwicklung — Kombination aus Strategie, Public-Sector-Expertise und technologischer Infrastruktur, um Sie beim Skalieren zu unterstützen.",
    eyebrow: "Transparente Preise",
    tabB2B: "B2B-Geschäftsentwicklung",
    tabB2G: "B2G-Öffentlicher Sektor",
    tabTech: "Technologie / CTO",
    commitment: "Ab 3 Monaten",
    popular: "Beliebt",
    from: "ab",
    perMonth: "/ Monat",
    perHour: "/ Stunde",
    getStarted: "Loslegen",
    customQuote: "Benötigen Sie etwas Individuelles? Wir passen Pakete an Ihre genauen Anforderungen an.",
    requestCustomQuote: "Individuelles Angebot anfordern",
    billingBasis: "Monatliche Abrechnung",
    billingMinimum: "Anfangsverpflichtung von 3\u201312 Monaten",
    billingRenewal: "\u00DCbergang zu laufendem Monatsabonnement nach Lieferung",
    billingCancellation: "15 Tage K\u00FCndigungsfrist",

    b2bCore: {
      name: "CORE",
      features: [
        "40 qualifizierte Leads pro Monat",
        "1 Markt / 1 Zielpersona",
        "E-Mail-Outreach + Kaltakquise",
        "Monatliches Reporting",
        "Onboarding-Strategiesitzung",
      ],
    },
    b2bAdvance: {
      name: "ADVANCE",
      features: [
        "60 qualifizierte Leads pro Monat",
        "2 Märkte Abdeckung",
        "Multi-Touch-Outreach-Kampagnen",
        "Performance-Optimierung",
        "Monatliche Strategieüberprüfung",
      ],
    },
    b2bVanguard: {
      name: "VANGUARD",
      features: [
        "80 qualifizierte Leads pro Monat",
        "Multi-Markt-Kampagnen",
        "CRM-Pipeline-Einrichtung",
        "Lead-Scoring-System",
        "Strategische Outreach-Architektur",
      ],
    },
    b2bPrestige: {
      name: "PRESTIGE",
      features: [
        "120+ qualifizierte Leads",
        "Marken-Outreach-Kampagnen",
        "Benutzerdefinierte Anruf- und E-Mail-Skripte",
        "Strategische Geschäftsentwicklungsberatung",
        "Reporting auf Führungsebene",
      ],
    },

    b2gStarter: {
      name: "GovStarter",
      features: [
        "5 verifizierte öffentliche Ausschreibungen pro Monat",
        "Berechtigungsprüfung",
        "Grundlegende Angebotsberatung",
        "Monatliche Konsultation",
      ],
    },
    b2gExpand: {
      name: "GovExpand",
      features: [
        "10 verifizierte Ausschreibungen",
        "Pre-Bid-Checkliste",
        "Strategiekonsultation",
        "Ausschreibungs-Pipeline-Aufbau",
      ],
    },
    b2gElite: {
      name: "GovElite",
      features: [
        "1 vollständiger Angebotsentwurf pro Monat",
        "Ausschreibungs-Roadmap-Entwicklung",
        "Konsortiums-Matchmaking",
        "Prioritäre Beratungsunterstützung",
      ],
    },

    techArchitecture: {
      name: "Systemarchitektur-Beratung",
      features: [
        "Geschäftssystemarchitektur-Design",
        "Infrastrukturplanung",
        "Automatisierungsarchitektur-Strategie",
      ],
    },
    techPlatforms: {
      name: "Geschäftsplattform-Entwicklung",
      features: [
        "Interne Portale",
        "Operative Dashboards",
        "Benutzerdefinierte Unternehmenssysteme",
      ],
    },
    techAutomation: {
      name: "Automatisierung & Integrationen",
      features: [
        "CRM / ERP Integrationen",
        "API-Automatisierung",
        "Workflow-Automatisierungssysteme",
      ],
    },
    techAudit: {
      name: "Technische Systemprüfung",
      features: [
        "Infrastrukturaudit",
        "Skalierbarkeitsbewertung",
        "Sicherheits-Baseline-Überprüfung",
      ],
    },
    techCTO: {
      name: "CTO-als-Dienstleistung",
      features: [
        "Technische Beteiligung",
        "Architekturüberwachung",
        "Anbieter- und Infrastrukturauswahl",
        "Skalierungsstrategieberatung",
        "Mindestens 1-Monats-Vertrag — begrenzte Plätze",
      ],
    },
  },

  cta: {
    eyebrow: "Kontaktieren Sie uns",
    heading: "Lassen Sie uns etwas",
    headingItalic: "gemeinsam aufbauen.",
    subtitle: "Ob Sie Beratung, technologische Lösungen oder einen strategischen Partner für internationale Expansion benötigen — wir sind bereit zu sprechen.",
    ctaPrimary: "Erzählen Sie uns von sich",
    ctaSecondary: "Individuelles Angebot anfordern",
    followLinkedIn: "Folgen Sie uns auf LinkedIn",
  },

  contact: {
    heading: "Senden Sie uns eine Nachricht",
    subtitle: "Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich bei Ihnen.",
    labelName: "Vollständiger Name",
    labelEmail: "E-Mail-Adresse",
    labelCompany: "Firmenname",
    labelMessage: "Nachricht",
    required: "*",
    placeholderName: "Ihr vollständiger Name",
    placeholderEmail: "ihre@email.com",
    placeholderCompany: "Ihr Firmenname",
    placeholderMessage: "Erzählen Sie uns von Ihren Geschäftszielen und wie wir helfen können...",
    buttonSend: "Nachricht senden",
    privacyText: "Durch das Absenden dieses Formulars stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu.",
    successHeading: "Nachricht vorbereitet",
    successText: "Ihr E-Mail-Client sollte sich geöffnet haben. Falls nicht, senden Sie uns direkt eine E-Mail an info@andykgroupinternational.com",
  },

  footer: {
    copyright: "© 2026",
    linkHome: "Startseite",
    linkSystems: "A.D.A.M. & E.V.A.",
    linkPricing: "Preise",
    linkContact: "Kontakt",
    linkPrivacy: "Datenschutzerklärung",
    linkCookies: "Cookie-Richtlinie",
    linkTerms: "Nutzungsbedingungen",
    linkDisclaimer: "Website-Haftungsausschluss",
    linkLegalNotice: "Impressum",
    linkClientPortal: "Kundenportal",
    selectLanguage: "Sprache",
    selectCurrency: "Währung",
  },

  common: {
    getStarted: "Loslegen",
    learnMore: "Mehr erfahren",
    contactUs: "Kontaktieren Sie uns",
    readMore: "Mehr lesen",
  },

  nav: {
    about: "Über uns",
    caseStudies: "Fallstudien",
    pricing: "Preise",
    contact: "Kontakt",
    services: "Dienstleistungen",
    groupSystems: "Systeme",
    groupBusiness: "Geschäftsdienstleistungen",
    groupIT: "IT-Dienstleistungen",
    adamDesc: "Automatisierter Dokument- & Kontomanager",
    endToEnd: "End-to-End",
    endToEndDesc: "Strategische Geschäftsentwicklung und Wachstumsarchitektur",
    b2bDev: "B2B-Entwicklung",
    b2bDevDesc: "Lead-Generierung und Outreach-Kampagnen",
    b2gPublic: "B2G Öffentlicher Sektor",
    b2gPublicDesc: "Ausschreibungen und öffentliches Beschaffungswesen",
    sysArch: "Systemarchitektur",
    sysArchDesc: "Geschäftssystemdesign und -planung",
    platformDev: "Plattformentwicklung",
    platformDevDesc: "Portale, Dashboards und maßgeschneiderte Systeme",
    automation: "Automatisierung & Integrationen",
    automationDesc: "CRM-, ERP- und Workflow-Automatisierung",
    cto: "CTO-as-a-Service",
    ctoDesc: "Technische Führung auf Abruf",
  },

  founders: {
    eyebrow: "Die Menschen dahinter",
    heading: "Lernen Sie die",
    headingItalic: "Gründer kennen",
    connect: "Verbinden",
    roles: [
      "Gründer & Strategischer Business Developer",
      "Mitgründer & CTO",
    ],
    bios: [
      "Über fünfzehn Jahre Führungserfahrung in Vertrieb, Gastgewerbe, Geschäftsentwicklung und operativer Strategie. Andrej spezialisiert sich auf skalierbare Wachstumssysteme für B2B, B2G und internationale Kundenbeziehungen.",
      "Der technische Architekt hinter A.D.A.M., Kobe nutzt seine umfassende Expertise, um jede Idee in die Realität umzusetzen.",
    ],
    quotes: [
      "Mein Fokus liegt darauf, Geschäftssysteme zu bauen, die nicht nur profitabel sind — sondern nachhaltig, sicher und für Skalierung konzipiert.",
      "",
    ],
    locations: [
      "Geboren in Österreich",
      "Geboren in Belgien",
    ],
  },

  caseStudyPages: {
    nextCaseStudy: "Nächste Fallstudie",
    problem: "Problem",
    solution: "Lösung",
    outcome: "Ergebnis",
    hospitality: {
      title: "Hotel-Betriebssystem",
      problem: "Eine wachsende Hotelgruppe mit mehreren Häusern arbeitete mit unverbundenen Tools, manuellen Prozessen und inkonsistenten Gästeerlebnissen. Umsatzmanagement, Personalkoordination und Gästekommunikation waren über Tabellen und Ad-hoc-Lösungen verstreut.",
      solution: "Wir haben ein vollständiges digitales Betriebssystem entworfen und implementiert — mit Integration von Reservierungsmanagement, Personalplanung, Gästekommunikation und Finanzaufsicht in einer strukturierten Plattform. Die Strategie umfasste operative Neugestaltung, Technologieauswahl und Teameinarbeitung.",
      outcome: "Einheitliche Abläufe über alle Standorte hinweg. Die Personaleffizienz verbesserte sich, die Gästezufriedenheitswerte stiegen und die Gruppe gewann klare Einsicht in Leistungskennzahlen — alles über ein System.",
    },
    healthcare: {
      title: "Digitalisierung Gesundheitswesen",
      problem: "Eine Physiotherapiepraxis kämpfte mit Chaos in klinischen Arbeitsabläufen — Patientenplanung, Behandlungsdokumentation, Abrechnung und Kommunikation liefen über separate, unverbundene Systeme. Das Personal verbrachte mehr Zeit mit Verwaltung als mit Patientenversorgung.",
      solution: "Wir entwarfen ein strukturiertes Betriebssystem für die Klinik, das Patientenmanagement, Terminplanung, Behandlungsdokumentation und Abrechnung in einem zusammenhängenden digitalen Workflow integriert — mit A.D.A.M. Healthcare für die Dokument- und Kontoverwaltung.",
      outcome: "Die Verwaltungszeit wurde erheblich reduziert. Der Patientendurchsatz verbesserte sich. Die Klinik arbeitet nun mit einem klaren, strukturierten digitalen Workflow, der das klinische Personal auf die Versorgung fokussiert, nicht auf Papierkram.",
    },
    consulting: {
      title: "Professionalisierung Beratung",
      problem: "Eine Beratungspraxis lieferte Mehrwert, aber inkonsistent — Angebote waren improvisiert, Projektmanagement war reaktiv und die Kundenkommunikation hing ausschließlich von den persönlichen Beziehungen des Gründers ab. Das Unternehmen konnte ohne strukturelle Änderung nicht skalieren.",
      solution: "Wir transformierten die Beratungspraxis von einem emotional gesteuerten Betrieb in einen strukturierten, professionellen Service. Dies umfasste standardisierte Angebotsvorlagen, Projektmanagement-Workflows, Kundenonboarding-Prozesse und ein klares Leistungserbringungsrahmenwerk.",
      outcome: "Die Praxis liefert nun konsistente, professionelle Dienstleistungen unabhängig davon, welches Teammitglied die Leitung hat. Die Kundenbindung verbesserte sich, Empfehlungsraten stiegen und das Unternehmen ist für skalierbares Wachstum positioniert.",
    },
  },

  languages: {
    en: "English",
    es: "Español",
    sk: "Slovenčina",
    nl: "Nederlands",
    pt: "Português",
    de: "Deutsch",
  },
};

// Export translations object
export const translations: Record<Locale, typeof en> = {
  en,
  es,
  sk,
  nl,
  pt,
  de,
};

// Export type for translation keys
export type TranslationKeys = typeof en;
