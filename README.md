# RIMBA — Costume Designer Portfolio

A premium, cinematic portfolio website for Rimba, a costume designer working across film, television, theatre and period productions.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for cinematic motion design
- **next/image** for optimized imagery

## Design

- Warm ivory, deep charcoal, muted burgundy, subtle taupe
- Cormorant Garamond (expressive serif) + Inter (clean sans)
- Asymmetric editorial layouts, generous whitespace
- Staggered text reveals, image mask reveals, scroll parallax
- Custom cursor-following labels (desktop), reduced-motion support

## Pages

- `/` — Cinematic hero, selected work, about preview, contact CTA
- `/work` — Full portfolio with category filtering
- `/work/[slug]` — 8 case-study pages with galleries, credits, prev/next nav
- `/about` — Editorial biography (placeholder copy)
- `/contact` — Enquiry form with validation (mailto fallback, no backend yet)

## Images

All 12 images are AI-generated placeholders stored in `public/images/` and referenced via `next/image`. Replace with Rimba's real portfolio photography before publishing.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push to GitHub and import the repository in Vercel. No environment variables required.
