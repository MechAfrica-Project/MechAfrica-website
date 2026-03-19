# MechAfrica Public Website

Premium, SEO-friendly public marketing website for **MechAfrica** — a digital agricultural services platform in Ghana connecting **farmers**, **service providers**, and **field agents** through **mobile apps**, **offline-first workflows**, and **USSD** access.

## Tech

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (tasteful, accessibility-aware motion)

## Routes

- `/` — Home
- `/about` — About
- `/how-it-works` — How It Works
- `/solutions/farmers` — For Farmers
- `/solutions/service-providers` — For Service Providers
- `/solutions/agents` — For Agents (coming soon framing)
- `/impact` — Impact
- `/download` — Download / Access
- `/faq` — FAQ
- `/contact` — Contact
- `/legal/terms` — Terms (coming soon)
- `/legal/privacy` — Privacy (coming soon)

Legacy routes like `/about-us` and `/contact-us` redirect to the new paths.

## Quickstart

This repo uses **pnpm**.

```bash
corepack pnpm install
corepack pnpm dev
```

Build:

```bash
corepack pnpm build
corepack pnpm start
```

## Editing content (single source of truth)

Update these values in:

- `src/content/site-config.ts`
  - App store links (farmers/provider)
  - USSD code + `tel:` link
  - Contact details
  - Partner text
  - Metrics placeholders
  - Testimonials placeholders
  - FAQ items
  - Farmer service categories

## Images and screenshots

- Image prompts checklist: `docs/image-prompts.md`
- Copy audit summary: `COPY_AUDIT_SUMMARY.md`
- Optional marketing photos (drop into `public/images/marketing/`):
  - `home-hero.png` (Home hero background, optional)
  - `farmers.png`, `providers.png`, `agents.png`, `impact.png` (page hero photos)
- App screenshots carousel (Download page):
  - Add PNGs to `public/images/screenshots/`
  - Update labels/copy in `src/content/site-config.ts` (`downloadScreenshots`)

## Components structure

- `src/components/site/*` — global layout components (Navbar/Footer, store + USSD buttons)
- `src/components/marketing/*` — reusable marketing blocks (section headers, accordion, carousel, diagrams)
- `src/components/marketing/sections/home/*` — Home page sections

## Contact form (placeholder endpoint)

- UI: `src/components/marketing/ContactForm.tsx`
- API handler: `src/app/api/contact/route.ts`

The API currently validates and returns a success response (no email/CRM integration yet). Replace it with your production integration when ready.

## SEO

- Global metadata: `src/app/layout.tsx`
- Per-page metadata: each page under `src/app/(client)/**/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- OG/Twitter images: `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`

