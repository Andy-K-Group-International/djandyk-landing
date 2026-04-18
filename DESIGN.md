# Andy'K Group International — Design Document

> **Product:** Corporate landing page for Andy'K Group International LTD
> **Stack:** Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4
> **Design authority:** This document. All visual changes must conform to it.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Layout & Grid](#layout--grid)
5. [Background Textures & Visual Effects](#background-textures--visual-effects)
6. [Component Library](#component-library)
7. [Button System](#button-system)
8. [Card Patterns](#card-patterns)
9. [Dividers & Separators](#dividers--separators)
10. [Animation & Motion](#animation--motion)
11. [Responsive Strategy](#responsive-strategy)
12. [Iconography](#iconography)
13. [Image Handling](#image-handling)
14. [Content Architecture](#content-architecture)
15. [Page Composition](#page-composition)
16. [Accessibility](#accessibility)
17. [Performance Constraints](#performance-constraints)

---

## Brand Identity

**Personality:** Professional, technical, premium. Not playful, not casual. The visual language sits at the intersection of enterprise SaaS and British consultancy — structured, data-driven, confident.

**Tone of voice:** Short sentences. Authoritative. Data-backed claims. No exclamation marks. No informal slang.

**Tagline:** "A.D.A.M. decides. E.V.A. executes. You grow."

**Company quote:** "One structure. One flow. One system." — Built for growth.

---

## Color System

All colors are defined as CSS custom properties in `src/app/globals.css` via Tailwind v4's `@theme inline` block. No raw hex values in components — always use the token.

### Palette

| Token | Hex | Role |
|---|---|---|
| `--color-foreground` | `#01011b` | Primary text, headings, dark section backgrounds |
| `--color-eggplant` | `#31263b` | Secondary dark, gradient partner, dot-grid tint |
| `--color-highlight` | `#5CB198` | Primary accent — CTAs, checkmarks, badges, success states, status indicators |
| `--color-rose` | `#F5C0C0` | Warm accent — gradients, card tints, hero background, section dividers |
| `--color-rose-dark` | `#cda0a5` | Darker rose — borders, gradient stops, button borders |
| `--color-muted` | `#525a70` | Primary body text |
| `--color-muted-2` | `#8b93a8` | Secondary text, placeholders, labels, captions |
| `--color-grid-300` | `#f5f5f7` | Light backgrounds, hover fills |
| `--color-grid-500` | `#e2e4ea` | Borders, dividers, secondary outlines |
| `--color-grid-700` | `#c4c8d4` | Strong borders, prominent dividers |
| `--color-bg-light` | `#faf9fb` | Section backgrounds (social proof, dropdown hover) |
| `--color-background` | `#ffffff` | Page background |

### Usage Rules

- **Headings** are always `text-foreground`. Never muted.
- **Body text** uses `text-muted` (primary) or `text-muted-2` (secondary/labels).
- **Interactive accents** use `text-highlight` or `bg-highlight`.
- **Dark sections** (CTA, highlighted pricing cards) use `bg-foreground` with `text-white`, with opacity variants (`text-white/80`, `text-white/60`) for hierarchy.
- **Gradient text** uses the `.gradient-text` class: `linear-gradient(90deg, eggplant, foreground)` with background-clip.
- **Borders** follow the grid scale: `border-grid-300` (subtle) → `border-grid-500` (standard) → `border-grid-700` (strong).

### What NOT to do

- Do not introduce new colors. Every color must map to an existing token.
- Do not use `text-black` — use `text-foreground`.
- Do not mix rose and highlight in the same interactive element.

---

## Typography

### Font Stack

| Role | Family | CSS Variable | Weights Loaded |
|---|---|---|---|
| Body & headings | IBM Plex Sans | `--font-sans` | 300, 400, 500, 600, 700 |
| Labels & code | IBM Plex Mono | `--font-mono` | 400, 500, 700 |

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` and applied as CSS variables. No other fonts are permitted.

### Type Scale

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| H1 (Hero) | IBM Plex Sans | 700 | `clamp(2.375rem, 1.6rem + 2.75vw, 3.75rem)` | 1.2 |
| H1 accent | System serif | 300 italic | 1.3em of parent | — |
| H2 (Section) | IBM Plex Sans | 700 | `clamp(1.875rem, 1.52rem + 1.25vw, 2.5rem)` | 1.2 |
| H2 accent | System serif | 300 italic | 1.2em of parent | — |
| H3 (Cards) | IBM Plex Sans | 700 | `text-base` (1rem) | tight |
| Body large | IBM Plex Sans | 300 | `text-xl` (1.25rem) | relaxed |
| Body | IBM Plex Sans | 300–400 | `text-base` (1rem) | relaxed |
| Small | IBM Plex Sans | 400 | `text-sm` (0.875rem) | normal |
| Label | IBM Plex Mono | 400 | `10px` | — |
| Caption | IBM Plex Sans | 400 | `text-xs` (0.75rem) | normal |

All heading sizes use `clamp()` for fluid scaling — no breakpoint jumps.

### Section Header Pattern

Every section follows this exact hierarchy:

```
LABEL (mono, 10px, uppercase, tracking 0.25em, muted-2)
H2 (bold, clamp, foreground) + serif italic accent word
Subtitle (lg, light, muted)
```

This is implemented as the `SectionHeader` component and repeated inline in sections that need custom markup.

### Tracking & Spacing

- **Labels:** `tracking-[0.25em]` (very wide)
- **Headings:** `tracking-tight` (tighter than default)
- **Navigation:** `text-sm`, weight 400–500
- **Font smoothing:** `-webkit-font-smoothing: antialiased` on body

---

## Layout & Grid

### Container

```
max-width: 1200px
margin: 0 auto
padding-x: 2rem (px-8)
```

All sections use the same container pattern:

```tsx
<section className="relative py-20 px-8">
  <div className="max-w-[1200px] mx-auto">
    {/* content */}
  </div>
</section>
```

### Spacing Scale

| Context | Value | Usage |
|---|---|---|
| Section vertical padding | `py-20` (5rem) | Standard section spacing |
| Section horizontal padding | `px-8` (2rem) | Consistent gutter |
| Header margin-bottom | `mb-16` (4rem) | After SectionHeader |
| Between elements | `gap-3` to `gap-8` | Component-specific |
| Between major sections | TronDivider component | Full-width gradient line |

### Grid Patterns

- **Pricing cards:** Responsive grid — `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` → `xl:grid-cols-5` (adapts to card count)
- **Roadmap:** 2x3 grid on desktop (`lg:`), vertical stack on mobile
- **Founders:** Side-by-side on desktop, stacked on mobile
- **Stats/LogoBar:** 2-column on mobile, 4-column on desktop with dividers
- **Services dropdown:** 2-column grid inside dropdown panel

---

## Background Textures & Visual Effects

The site uses layered background effects to create depth without heavy imagery.

### Hero Background (5 layers)

Stacked bottom-to-top inside a `relative overflow-clip` wrapper:

1. **Hero gradient** (`.hero-gradient`): Radial gradient from `#FFFCFC` (white) to `#ffecec` (pink-tinted). Positioned at top-left origin.
2. **Noise wrapper** (`.hero-noise-wrapper`): Animated fractal noise SVG at 4% opacity, 800px tall, fades to top via CSS mask.
3. **Cartesian grid** (`.cartesian-grid`): 16x16px dot grid using `radial-gradient`, eggplant-colored at 55% opacity.
4. **Grid glow** (`.cartesian-grid-glow`): Radial highlight glow (teal, 50% opacity) centered behind the grid.

### Section Backgrounds

- **Line grid** (`.line-grid`): 40x40px stroke grid (horizontal + vertical lines), grid-500 color at 50% opacity. Used behind RoadmapSection with `.line-grid-fade` mask.
- **Section radial** (`.section-radial-bg`): Radial gradient from white to light purple `#f8f6fa`, with inset shadow.
- **Section dot grid** (`.section-bg-grid::before`): Pseudo-element 16x16px dot grid at 8% opacity.

### Glassmorphism (`.glass-card`)

Used on RoadmapSection cards:

```css
background: linear-gradient(105deg, rgba(245,192,192,0) 10.56%, rgba(245,192,192,0.02) 108.41%),
            rgba(253,253,253,0.4);
box-shadow: inset 0 0 11px rgba(0,0,0,0.05),
            0 0 0 1px rgba(0,0,0,0.06),
            0 16px 24px -8px rgba(0,0,0,0.05),
            0 8px 12px -4px rgba(0,0,0,0.05),
            0 4px 6px -2px rgba(0,0,0,0.05);
backdrop-filter: blur(7.5px);
```

### Noise Textures

Two SVG-based fractal noise overlays:

- **Default** (`.noise-texture`): 256x256px tile, `baseFrequency=0.65`, 3 octaves, 6% opacity, 8s animation loop.
- **Eggplant** (`.noise-eggplant`): 128x128px tile, `baseFrequency=0.9`, 4 octaves, desaturated, 3% opacity.

---

## Component Library

All components live in `src/components/` as flat files (no nesting).

### Active Components

| Component | File | Purpose | Client? |
|---|---|---|---|
| `TopBanner` | TopBanner.tsx | Scrolling announcement banner | No |
| `Navbar` | Navbar.tsx | Sticky nav with logo, links, services dropdown, mobile menu | Yes |
| `Hero` | Hero.tsx | Main hero with H1, tagline, two CTAs | No |
| `BackgroundGrid` | BackgroundGrid.tsx | Exports: `HeroBackground`, `CartesianGrid`, `DotGrid`, `NoiseTexture`, `SectionBackground` | No |
| `LogoBar` | LogoBar.tsx | Trust badges — stats strip with country flags | No |
| `TronDivider` | TronDivider.tsx | Gradient line divider (9 stacked lines with opacity fade) | No |
| `SectionHeader` | SectionHeader.tsx | Reusable centered H2 + subtitle | No |
| `RoadmapSection` | RoadmapSection.tsx | 6-step A.D.A.M. pipeline with glassmorphic cards + arrows | No |
| `TestimonialPair` | TestimonialPair.tsx | Founders section — photos, bios, quotes, social links | No |
| `PricingSection` | PricingSection.tsx | 3-tab pricing (B2B/B2G/Tech) with commitment selector + discount logic | Yes |
| `TabSwitcher` | TabSwitcher.tsx | Animated tab bar with sliding indicator | Yes |
| `LovedBySection` | LovedBySection.tsx | Social proof quote and satisfaction divider | No |
| `FaqSection` | FaqSection.tsx | Services showcase in 3-column card grid | No |
| `IntegrationsSection` | IntegrationsSection.tsx | A.D.A.M. & E.V.A. system cards with feature lists | No |
| `FeatureBlock` | FeatureBlock.tsx | Feature card with text + testimonial + mockup area | No |
| `ContactForm` | ContactForm.tsx | Email form — name, email, company, message fields | Yes |
| `CtaSection` | CtaSection.tsx | Dark background CTA with company contact info | No |
| `Footer` | Footer.tsx | Links, company info, legal, copyright | No |
| `LogoIcon` | LogoIcon.tsx | SVG cube/hexagonal logo (stroked, rotated 90deg) | No |
| `HexLogo` | HexLogo.tsx | Logo wrapper with size variants (sm/md) | No |

### Unused / Legacy

`MockAgentPanel`, `MockContextStudio`, `MockDashboard`, `MockNotebook`, `MockSlack` — earlier design iteration mockups, safe to remove.

---

## Button System

### Primary CTA (`.btn-primary-gradient`)

```tsx
<a className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient">
  <span className="relative z-10">Button Text</span>
</a>
```

- Height: 48px (`h-12`)
- Background: double-layer gradient — white padding-box over rose-dark→eggplant border gradient
- Pseudo-element `::after`: inner overlay with rose tint + inset shadow
- Hover: overlay fades to 30% opacity (0.25s ease)
- Text sits on `z-10` above the overlay

### Secondary CTA (`.btn-secondary`)

```tsx
<a className="inline-flex items-center justify-center h-12 px-5 text-sm text-muted border border-grid-500 hover:bg-grid-300 hover:border-grid-700 transition-all">
  Button Text
</a>
```

- Transparent background, grid-500 border
- Hover: subtle fill (`grid-300`) + stronger border (`grid-700`)

### Dark Section CTA

```tsx
<a className="bg-white text-foreground hover:bg-white/90 py-3 px-4 rounded-lg text-sm font-medium">
  Button Text
</a>
```

Used inside `bg-foreground` sections. Also inverted variant: `bg-foreground text-white` for primary actions on light backgrounds (pricing cards).

### Rules

- All buttons: minimum 44px touch target height
- Text: `text-sm font-medium`
- Always `inline-flex items-center justify-center`
- Transitions: `transition-all duration-200`

---

## Card Patterns

### Standard Card

```
background: white
border: 1px solid grid-300
border-radius: xl (0.75rem)
padding: 1.5rem (p-6)
hover: shadow 0 4px 24px rgba(0,0,0,0.06)
transition: all 300ms
```

### Highlighted Card (Pricing)

```
background: foreground (#01011b)
text: white
shadow: 0 8px 40px rgba(1,1,27,0.2)
```

Features a "Popular" badge:
```
position: absolute, -top-3, centered
background: highlight
text: white
font: mono, 10px, uppercase, wide tracking
border-radius: full (pill)
padding: px-3 py-1
```

Internal divider: `bg-white/15` (1px).

### Glassmorphic Card (Roadmap)

Uses `.glass-card` class. See [Background Textures](#background-textures--visual-effects) section. Additional:
- `rounded-xl p-6`
- `hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]`
- Icon container: 40x40px rounded-lg with gradient backgrounds (rose tones for steps 1–3, highlight tones for steps 4–6)

---

## Dividers & Separators

### TronDivider

The primary section separator. Renders 9 stacked `<div>` elements, each with class `.tron-line`:

```css
.tron-line {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, grid-700, grid-500 50%, grid-700);
}
```

Lines stack with decreasing opacity: `1.0, 0.9, 0.8, ... 0.2` and 2px gaps between them. Creates a subtle "fading scan line" effect.

### In-Card Dividers

- Light cards: `bg-grid-300` (1px)
- Dark cards: `bg-white/15` (1px)
- LogoBar stat columns: `border-r border-grid-500` (hidden on mobile)

---

## Animation & Motion

### Principles

- Pure CSS only. No Framer Motion, no GSAP, no external animation libraries.
- Motion is subtle and functional — never decorative.
- Standard timing: `200ms` for micro-interactions, `300ms` for content transitions.

### Catalog

| Element | Property | Duration | Easing | Details |
|---|---|---|---|---|
| Top banner | `translateX` | 30s | linear | Infinite horizontal scroll loop |
| Noise texture | `background-position` | 8s | linear | Infinite position loop (-1024px to 0) |
| Tab content slide | `translateX` + `opacity` | 300ms | ease-out | 24px slide + fade on tab change |
| Tab indicator | `left` + `width` | — | CSS transition | Smooth position/size morph |
| FAQ chevron | `rotate` | 200ms | CSS transition | 0 to 180deg on open |
| FAQ answer | `max-height` | 300ms | ease | 0 to 500px |
| Button hover | `opacity` | 250ms | ease | Overlay fade |
| Card hover | `box-shadow` | 300ms | — | Shadow increase |
| Link hover | `color` | 200ms | — | Color transition |
| Status badge | `scale` (pulse) | — | — | `animate-pulse` on green dot |
| Services dropdown | `transform` | 200ms | — | Chevron rotation |

### Hover delay

Services dropdown in Navbar uses a 150ms timeout on mouse leave to prevent accidental closure.

---

## Responsive Strategy

### Approach

Mobile-first. All base styles target 375px (iPhone SE). Larger layouts are added progressively with Tailwind breakpoints.

### Breakpoints

| Prefix | Width | Target |
|---|---|---|
| (base) | 375px+ | iPhone SE, small phones |
| `sm:` | 640px+ | Large phones |
| `md:` | 768px+ | Tablets, small laptops |
| `lg:` | 1024px+ | Desktop |
| `xl:` | 1280px+ | Wide desktop |

### Key Adaptations

| Component | Mobile | Desktop |
|---|---|---|
| **Navbar** | Hamburger menu, full-screen overlay | Inline links + dropdown |
| **Hero** | Stacked, fluid text | Same (clamp handles sizing) |
| **LogoBar** | 2-column grid | 4-column with dividers |
| **Roadmap** | Vertical stack with down-arrows | 2x3 grid with right-arrows |
| **Founders** | Stacked, single column | Side-by-side |
| **Pricing** | Single column cards | 2–5 columns (adapts to tab) |
| **Services dropdown** | Accordion inside mobile menu | 2-column floating panel |
| **CTAs** | Full-width buttons | Inline/auto-width |

### Test Targets

- **375px** — iPhone SE (base)
- **768px** — iPad / tablet
- **1200px** — Standard desktop

---

## Iconography

- All icons are inline SVG — no icon library dependencies.
- Standard size: `w-6 h-6` (24px) for content icons, `w-4 h-4` (16px) for UI icons (chevrons, arrows, checkmarks).
- Stroke-based: `fill="none" stroke="currentColor" strokeWidth={1.5}`, with `strokeLinecap="round" strokeLinejoin="round"`.
- Color inherits from parent text color. Accent icons use `text-highlight`.
- Roadmap step icons: Clipboard, Lightbulb, Document, Currency, Chat, Chart.

---

## Image Handling

### Sources

- **Local** (`/public/`): Founder photos (`ceo.jpeg`, `co-founder.jpg`), favicon (`apple-icon.png`), system logos (`adam-logo.png`, `eva-logo.jpg`).
- **CDN** (Supabase): Company logos. URLs defined in `src/lib/data.ts`.
- **CDN** (Contentful): Configured in `next.config.ts` for `images.ctfassets.net`.

### Rules

- Always use `next/image` with explicit `width`, `height`, and `alt` attributes.
- Founder photos: grayscale by default via `.grayscale` class, `object-cover` for cropping.
- All external image hostnames must be allowlisted in `next.config.ts` `remotePatterns`.
- No decorative images without alt text.

---

## Content Architecture

**All text content is centralized in `src/lib/data.ts`.** No strings are hardcoded in components.

### Data Exports

| Export | Type | Content |
|---|---|---|
| `COMPANY` | Object | Name, tagline, descriptions, company number, address, phone, email, socials, logo URLs, quote |
| `SERVICES` | Array[6] | Service offerings with title + description |
| `ADAM_FEATURES` | Array[4] | A.D.A.M. system feature list |
| `EVA_FEATURES` | Array[4] | E.V.A. system feature list |
| `ADAM_SHOWCASE` | Array[6] | Showcase items with title + description |
| `STATS` | Array[4] | Trust metrics (100% reviews, value, languages, satisfaction) |
| `FOUNDERS` | Array[2] | Bio, quote, image, social links for each founder |
| `ADAM_ROADMAP` | Array[6] | Pipeline steps with title + description |
| `PRICING_B2B` | Array[4] | B2B plans with pricing + features |
| `PRICING_B2G` | Array[3] | B2G plans with pricing + features |
| `PRICING_TECH` | Array[5] | Tech services with pricing + features |
| `COMMITMENT_OPTIONS` | Array[4] | 3/6/9/12 months with discount percentages |
| `BILLING_TERMS` | Object | Billing basis, minimum, renewal, cancellation |
| `NAV_LINKS` | Array[3] | Top-level navigation (About, Pricing, Contact) |
| `NAV_SERVICES` | Array[3] | Grouped service links (Systems, Business, IT) |
| `FOOTER_LINKS` | Array[6] | Footer navigation links |

### Adding New Content

1. Add the data export to `src/lib/data.ts`
2. Import and use in the component
3. Keep types consistent with existing patterns

---

## Page Composition

The homepage is a single-page layout composed in `src/app/page.tsx`. Sections flow vertically, separated by `TronDivider` components.

```
TopBanner                    (scrolling announcement)
Navbar                       (sticky, z-50)
  Hero + HeroBackground      (relative overflow-clip wrapper)
LogoBar                      (trust stats)
--- TronDivider ---
RoadmapSection               (A.D.A.M. pipeline)
--- TronDivider ---
TestimonialPair              (Founders)
--- TronDivider ---
PricingSection               (3-tab pricing)
--- TronDivider ---
LovedBySection               (social proof)
FaqSection                   (services showcase)
IntegrationsSection          (A.D.A.M. & E.V.A. cards)
ContactForm                  (email form)
CtaSection                   (dark CTA)
Footer                       (links + legal)
```

The outer `<main>` has `overflow-x-hidden` to prevent horizontal scroll from background layers.

---

## Accessibility

### Requirements

- **Tap targets:** 44px minimum height on all interactive elements (buttons, links, form inputs).
- **Semantic HTML:** Proper heading hierarchy (H1 → H2 → H4), `<section>` with `id` for anchor navigation, `<nav>` for navigation.
- **ARIA:** `aria-label` on hamburger toggle, descriptive alt text on all images.
- **Keyboard:** Focus states inherited from browser defaults + Tailwind's focus utilities.
- **Scroll lock:** Body scroll is prevented when mobile menu is open.
- **Color contrast:** `foreground` on white exceeds WCAG AAA. `muted` on white meets WCAG AA. `highlight` on foreground meets AA.

### Form Accessibility

- ContactForm inputs use `placeholder` text with icon-prefixed labels.
- Form submission opens mailto (graceful degradation — no JS-dependent backend required).

---

## Performance Constraints

- **Lighthouse target:** > 95 on all metrics.
- **Server components by default.** Only use `"use client"` when state or event handlers are required.
- **Client components:** `Navbar` (mobile menu, dropdown), `PricingSection` (tabs, commitment selector), `TabSwitcher` (click handler), `ContactForm` (form state).
- **No external JS libraries** for animation (no Framer Motion, no GSAP).
- **Images:** Always `next/image` with dimensions. Lazy load below-fold content.
- **Fonts:** Loaded via `next/font/google` with font-display swap.
- **CSS:** All custom styles in `globals.css`. No per-component CSS files. Tailwind handles the rest.
- **Tailwind v4:** Using CSS-first configuration (`@theme inline` in globals.css). No `tailwind.config.ts` file.
