# Andy'K Landing Page — Kanban Board (AI Task Tracker)

**How to use:** Pick the next `TODO` task in order. Move to `IN PROGRESS` while working. Move to `DONE` when acceptance criteria are met. Skip `BLOCKED` tasks until blocker resolves.

**Before starting any task:** Read `CLAUDE.md` for project rules and `docs/DESIGN_PLAN.md` for design compliance.

---

## TODO

### T1. Create Contact Form Component [HIGH]
**Spec:** MVP_PRD.md → F1
**Files to create/modify:**
- Create `src/components/ContactForm.tsx`
- Modify `src/components/CtaSection.tsx` — embed form
- Modify `src/lib/data.ts` — add `CONTACT_FORM` data
- Create `src/app/api/contact/route.ts` — form handler (or server action)

**Acceptance Criteria:**
- [ ] Form renders with fields: Name, Email, Company, Service Interest (dropdown), Message
- [ ] Form validates: required fields, email format
- [ ] Form submits without page reload
- [ ] Success message shown after submission
- [ ] Error message shown on failure
- [ ] Works on 375px mobile (full-width inputs, 44px height)
- [ ] Uses design tokens from `globals.css`
- [ ] Honeypot field for spam prevention
- [ ] Data added to `src/lib/data.ts` (not hardcoded)

**Depends on:** Nothing
**Estimated scope:** 1 component + 1 API route + data.ts update

---

### T2. Create `/onboarding` Route [HIGH]
**Spec:** MVP_PRD.md → F2
**Files to create/modify:**
- Create `src/app/onboarding/page.tsx`
- Optionally reuse `Navbar` and `Footer` from layout

**Acceptance Criteria:**
- [ ] Route accessible at `/onboarding`
- [ ] Page has heading "Tell Us About Your Business"
- [ ] Shows 3 service type cards (B2B / B2G / Tech) with descriptions
- [ ] Each card has a CTA (mailto or future questionnaire link)
- [ ] Bottom section: "Not sure? Contact us" → links to contact form
- [ ] Uses Navbar + Footer from homepage
- [ ] Mobile-responsive (375px)
- [ ] Follows section pattern from DESIGN_PLAN.md

**Depends on:** T1 (contact form, for the "Not sure?" fallback)
**Estimated scope:** 1 page component

---

### T3. SEO & Meta Enhancement [MEDIUM]
**Spec:** MVP_PRD.md → F3
**Files to create/modify:**
- Modify `src/app/layout.tsx` — enhanced metadata
- Create `src/app/sitemap.ts`
- Create `src/app/robots.ts`
- Create `public/og-image.png` (1200x630)

**Acceptance Criteria:**
- [ ] Open Graph tags render correctly (test with og-image validator)
- [ ] Twitter Card tags present
- [ ] JSON-LD structured data for Organization
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt` with sitemap reference
- [ ] Each route has unique title via template

**Depends on:** T2 (need all routes to exist for sitemap)
**Estimated scope:** Metadata config + 2 small files

---

### T4. Founders Section Redesign [MEDIUM]
**Spec:** MVP_PRD.md → F8
**Files to modify:**
- Modify `src/components/TestimonialPair.tsx`

**Acceptance Criteria:**
- [ ] New side-by-side card layout
- [ ] Photos with grayscale → color hover transition
- [ ] LinkedIn + email icon links visible
- [ ] Quote displayed in italics
- [ ] Location badge shown
- [ ] Mobile: stacked cards, full-width
- [ ] Desktop: 2 equal columns
- [ ] Data still sourced from `FOUNDERS` in `data.ts`
- [ ] Matches overall design system (fonts, colors, spacing)

**Depends on:** Nothing
**Estimated scope:** Rework 1 component

---

### T5. Roadmap Section Enhancement [MEDIUM]
**Spec:** MVP_PRD.md → F9
**Files to modify:**
- Modify `src/components/RoadmapSection.tsx`

**Acceptance Criteria:**
- [ ] 6 steps rendered with visual connections (arrows or lines)
- [ ] Each step: numbered circle + title + description
- [ ] Clear left-to-right (desktop) or top-to-bottom (mobile) progression
- [ ] Uses `ADAM_ROADMAP` data from `data.ts`
- [ ] Responsive: horizontal on lg+, vertical on mobile
- [ ] Follows section pattern (label + heading + content)

**Depends on:** Nothing
**Estimated scope:** Rework 1 component

---

### T6. Image Optimization [MEDIUM]
**Spec:** MVP_PRD.md → F4
**Files to modify:**
- All components using `<img>` tags → `next/image`
- Optimize `public/co-founder.jpg` (103KB → WebP)

**Acceptance Criteria:**
- [ ] All images use `next/image` component
- [ ] All images have explicit `width`, `height`, `alt`
- [ ] `co-founder.jpg` converted to WebP or auto-optimized by Next.js
- [ ] No image-related Lighthouse warnings

**Depends on:** Nothing
**Estimated scope:** Small refactors across ~3 components

---

### T7. Dead Code Cleanup [LOW]
**Spec:** MVP_PRD.md → F5
**Files to delete:**
- `src/components/MockAgentPanel.tsx`
- `src/components/MockContextStudio.tsx`
- `src/components/MockDashboard.tsx`
- `src/components/MockNotebook.tsx`
- `src/components/MockSlack.tsx`

**Acceptance Criteria:**
- [ ] Grep confirms no imports of these components anywhere
- [ ] Files deleted
- [ ] Build passes (`npm run build`)
- [ ] No runtime errors

**Depends on:** Nothing
**Estimated scope:** Delete 5 files

---

### T8. Playwright E2E Tests [LOW]
**Spec:** MVP_PRD.md → F7
**Files to create:**
- `tests/homepage.spec.ts`
- `tests/onboarding.spec.ts`
- `tests/mobile.spec.ts`

**Acceptance Criteria:**
- [ ] Homepage test: all sections visible (hero, roadmap, pricing, FAQ, CTA, footer)
- [ ] Navigation: click nav links → scroll to correct section
- [ ] Pricing: tab switching renders correct cards
- [ ] FAQ: click question → answer expands
- [ ] Mobile: 375px viewport → layout is usable
- [ ] Onboarding: route loads without 404
- [ ] All tests pass in CI (GitHub Actions)

**Depends on:** T2 (onboarding route must exist for test)
**Estimated scope:** 3 test files

---

### T9. Analytics Setup [LOW]
**Spec:** MVP_PRD.md → F6
**Files to create/modify:**
- Modify `src/app/layout.tsx` — add analytics script
- Create analytics config (Umami or Plausible)

**Acceptance Criteria:**
- [ ] Analytics script loaded after page interactive
- [ ] Page views tracked
- [ ] CTA clicks tracked as events
- [ ] No cookies set (GDPR-compliant)
- [ ] Dashboard accessible to admin

**Depends on:** Analytics service provisioned (Umami server or Plausible account)
**Estimated scope:** 1 script tag + optional event tracking

---

### T10. Pricing Data Verification [HIGH — BLOCKING BEFORE DEPLOY]
**Spec:** MVP_PRD.md → F10
**Files to modify:**
- `src/lib/data.ts` — update pricing if needed

**Known discrepancies (instructions.md vs data.ts):**
| Plan | instructions.md | data.ts | Delta |
|------|----------------|---------|-------|
| Tech Architecture | from €2,500 | €2,000 | +€500 |
| Tech Platforms | from €4,000 | €3,000 | +€1,000 |
| Tech Automation | from €2,000 | €1,500 | +€500 |
| Tech Audit | from €2,800 | €1,800 | +€1,000 |
| Tech CTO-as-a-Service | from €100/hr | €2,500/mo | Different unit |

**Action required:** Get confirmation from CEO (Andrej) on correct prices.

**Acceptance Criteria:**
- [ ] All pricing in `data.ts` matches authoritative source
- [ ] CTO-as-a-Service pricing format clarified (hourly vs monthly)
- [ ] No pricing discrepancies between landing page and corporate materials

**Depends on:** CEO approval
**Estimated scope:** Data updates only

---

## IN PROGRESS

(none)

---

## DONE

(none)

---

## BLOCKED

### T10 — Pricing Data Verification
**Blocker:** Needs CEO (Andrej) confirmation on Tech division pricing discrepancies

---

## Execution Order (Recommended)

```
Priority Path:
  T1 (Contact Form) ──→ T2 (Onboarding Route) ──→ T3 (SEO)
                                                       │
Independent (parallel):                                ▼
  T4 (Founders Redesign)                          T8 (Tests)
  T5 (Roadmap Enhancement)
  T6 (Image Optimization)
  T7 (Dead Code Cleanup)
  T9 (Analytics) ← needs external setup
  T10 (Pricing) ← needs CEO input

Deploy Gate: T1 + T2 + T3 + T10 complete → ready to deploy
```

---

## Task Completion Protocol

When completing a task:
1. Verify ALL acceptance criteria are checked
2. Run `npm run build` — must pass
3. Run `npm run lint` — must pass
4. Test on mobile viewport (375px) in dev tools
5. Mark task as DONE in this file
6. Pick next TODO task

---

*This kanban is the execution authority. Update it as you work.*
