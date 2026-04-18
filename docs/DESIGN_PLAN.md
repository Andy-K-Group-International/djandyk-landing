# Andy'K Landing Page — Design System & Plan

## Brand Identity

**Personality:** Professional, technical, premium. Not playful or casual. Think "enterprise SaaS meets British consultancy."

**Tone:** Confident, structured, authoritative. Short sentences. Data-driven claims.

**Tagline:** "A.D.A.M. decides. E.V.A. executes. You grow."

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-foreground` | `#01011b` | Primary text, headings, dark backgrounds |
| `--color-eggplant` | `#31263b` | Secondary dark, gradient partner, dot grids |
| `--color-highlight` | `#5CB198` | Accent (CTAs, checkmarks, badges, success) |
| `--color-rose` | `#F5C0C0` | Warm accent (gradients, card tints) |
| `--color-rose-dark` | `#cda0a5` | Darker rose for borders, gradient stops |
| `--color-muted` | `#525a70` | Body text |
| `--color-muted-2` | `#8b93a8` | Secondary text, placeholders, labels |
| `--color-grid-300` | `#f5f5f7` | Light backgrounds |
| `--color-grid-500` | `#e2e4ea` | Borders, dividers |
| `--color-grid-700` | `#c4c8d4` | Stronger borders |
| `--color-bg-light` | `#faf9fb` | Section backgrounds |
| `--color-background` | `#ffffff` | Page background |

### Color Rules
- **Headings:** `text-foreground` (never muted)
- **Body text:** `text-muted` (primary), `text-muted-2` (secondary)
- **Accent interactions:** `text-highlight` or `bg-highlight`
- **Dark sections:** `bg-foreground` with `text-white` (see CTA section, highlighted pricing cards)
- **Gradient text:** `.gradient-text` class (eggplant → foreground)

---

## Typography

| Element | Font | Weight | Size Pattern |
|---------|------|--------|-------------|
| H1 (Hero) | IBM Plex Sans | 700 | `clamp(2.375rem, 1.6rem + 2.75vw, 3.75rem)` |
| H1 accent | Serif italic | 300 | 1.3em of parent |
| H2 (Sections) | IBM Plex Sans | 700 | `clamp(1.875rem, 1.52rem + 1.25vw, 2.5rem)` |
| H2 accent | Serif italic | 300 | 1.2em of parent |
| Labels | IBM Plex Mono | 400 | 10px, uppercase, tracking `0.25em` |
| Body | IBM Plex Sans | 300-400 | `text-base` to `text-xl` |
| Navigation | IBM Plex Sans | 400-500 | `text-sm` |

### Typography Pattern

Every section header follows this exact structure:
```tsx
<span className="text-[10px] uppercase tracking-[0.25em] text-muted-2 font-mono block mb-3">
  Label text
</span>
<h2 className="text-[clamp(1.875rem,1.52rem+1.25vw,2.5rem)] font-bold tracking-tight leading-[1.2] text-foreground mb-4">
  Main heading{" "}
  <span className="font-serif font-light italic text-[1.2em]">
    accent word
  </span>
</h2>
<p className="text-lg leading-relaxed text-muted font-light">
  Subheading text
</p>
```

---

## Visual Effects & Textures

### Background Layers (Hero)
1. `.hero-gradient` — Radial gradient (white → pink-tinted)
2. `.cartesian-grid` — 16x16px dot grid (eggplant, 12% opacity)
3. `.cartesian-grid-glow` — Radial highlight glow (50% opacity)
4. `.noise-texture` — Animated Perlin noise SVG filter (6% opacity, 8s loop)
5. `.hero-noise-wrapper` — Masked noise fading to top

### Glassmorphism Cards
```css
.glass-card {
  background: linear-gradient(...rgba(245,192,192,0.02)...), rgba(253,253,253,0.4);
  box-shadow: inset 0 0 11px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06), ...;
  backdrop-filter: blur(7.5px);
}
```

### Dividers
`.tron-line` — Full-width 1px line, gradient: `grid-700 → grid-500 → grid-700`
Used between every major section via `<TronDivider />`.

### Grid Backgrounds
- `.section-bg-grid` — Subtle 16x16 dot grid behind sections
- `.line-grid` — 40x40px line grid (for feature sections)

---

## Component Inventory

### Active Components (used in page.tsx)

| Component | Purpose | Interactive |
|-----------|---------|------------|
| `TopBanner` | Scrolling announcement banner (30s loop) | No |
| `Navbar` | Fixed navigation with logo + links + CTA | Yes (mobile menu) |
| `Hero` | Main hero with heading, tagline, 2 CTAs | No |
| `BackgroundGrid` | Hero background layers (grid + noise + gradient) | No |
| `LogoBar` | Trust badge strip with country flags + stats | No |
| `TronDivider` | Gradient line section divider | No |
| `RoadmapSection` | 6-step A.D.A.M. pipeline visualization | No |
| `TestimonialPair` | Founders section with photos + bios | No |
| `PricingSection` | 3-tab pricing (B2B/B2G/Tech) with cards | Yes (tabs) |
| `LovedBySection` | Social proof / client satisfaction | No |
| `FaqSection` | Accordion FAQ | Yes (expand/collapse) |
| `IntegrationsSection` | Integration partners display | No |
| `CtaSection` | Dark-bg call-to-action with email link | No |
| `Footer` | Links, company info, legal | No |
| `LogoIcon` / `HexLogo` | SVG logo variations | No |
| `SectionHeader` | Reusable section header pattern | No |
| `FeatureBlock` | Feature card with icon + text | No |

### Unused Components (legacy — safe to remove)

| Component | Notes |
|-----------|-------|
| `MockAgentPanel` | AI agent demo mockup |
| `MockContextStudio` | Context studio demo |
| `MockDashboard` | Dashboard preview |
| `MockNotebook` | Knowledge system mockup |
| `MockSlack` | Slack integration preview |

---

## Layout Patterns

### Page Structure
```
TopBanner
Navbar (sticky)
Hero + BackgroundGrid
LogoBar
TronDivider
RoadmapSection
TronDivider
Founders
TronDivider
PricingSection
TronDivider
LovedBySection
FaqSection
IntegrationsSection
CtaSection
Footer
```

### Section Pattern
Every section follows:
```tsx
<section id="section-id" className="relative py-20 px-8">
  <div className="max-w-[1200px] mx-auto">
    {/* Label + Heading + Subheading */}
    {/* Content */}
  </div>
</section>
```

- `py-20` vertical padding
- `px-8` horizontal padding
- `max-w-[1200px] mx-auto` container
- `relative` for background layers

### Responsive Breakpoints
- `375px` — iPhone SE (base)
- `sm: 640px` — Large phones
- `md: 768px` — Tablets
- `lg: 1024px` — Small desktop
- `xl: 1280px` — Full desktop

---

## Button Styles

### Primary CTA
```tsx
<a className="relative inline-flex items-center justify-center h-12 px-5 text-sm font-medium text-foreground btn-primary-gradient">
  <span className="relative z-10">Button Text</span>
</a>
```
- Rose-to-highlight gradient border
- White background with rose tint overlay
- 48px height (mobile-friendly)

### Secondary CTA
```tsx
<a className="inline-flex items-center justify-center h-12 px-5 text-sm text-muted border border-grid-500 hover:bg-grid-300 hover:border-grid-700 transition-all">
  Button Text
</a>
```
- Border-only, grid-colored
- Hover: subtle fill

### Dark Section CTA
```tsx
<a className="bg-white text-foreground hover:bg-white/90 py-3 px-4 rounded-lg text-sm font-medium">
  Button Text
</a>
```

---

## Pricing Card Pattern

### Regular Card
- White bg, `border-grid-300`, rounded-xl, p-6
- Hover: subtle shadow `0 4px 24px rgba(0,0,0,0.06)`

### Highlighted Card
- `bg-foreground text-white`
- "Popular" badge: `bg-highlight text-white` pill, positioned `-top-3`
- Shadow: `0 8px 40px rgba(1,1,27,0.2)`

---

## Image Handling

- Founder photos: local files in `/public/` (ceo.jpeg, co-founder.jpg)
- Logo: Supabase CDN URLs (defined in `data.ts`)
- All images must have explicit `width`, `height`, `alt` attributes
- Founder photos: grayscale with hover-to-color effect

---

## Animation

- Scroll banner: `30s linear infinite` translateX loop
- FAQ chevron: `rotate(180deg)` on open
- FAQ answer: `max-height 0 → 500px` with `0.3s ease`
- Transitions: `transition-all duration-200` or `duration-300`
- No spring animations, no framer-motion (keep lightweight)

---

## SEO & Meta

Current: Basic title + description in `layout.tsx`.
Missing: Open Graph images, Twitter cards, structured data, sitemap.

---

*This document is the design authority. Any AI agent modifying the landing page MUST reference this before making visual changes.*
