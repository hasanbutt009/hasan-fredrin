# AGENTS.md — Project Context

Single-page "About Me" dossier for Hasan Iqbal Butt (Forward-Deployed Engineer applicant), deployed on Vercel.

## Stack
Next.js 15 (App Router), React 19, strict TypeScript, Tailwind CSS 3, ESLint (`next/core-web-vitals`). No env vars, API keys or secrets at build or runtime.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (must pass with 0 errors/warnings)
- `npm run lint` — ESLint
- `npx tsc --noEmit` — typecheck

## File layout
- `src/app/page.tsx` — the page; sections: hero (header), What I've Shipped, Why Fredrin, Reach Me (footer)
- `src/app/layout.tsx` — fonts, `<title>`, OpenGraph metadata
- `src/app/globals.css` — Tailwind layers, focus ring
- `src/data/profile.ts` — all copy and facts; page components render from it
- `tailwind.config.ts` — palette and font tokens

## Typography
`Space Grotesk` for headings and body; `JetBrains Mono` for metrics, timestamps, CLI/git tags. Both via `next/font/google`. Never Inter or Arial.

## Color
Background `#0B0F17`, panels `#111827`, text `#F1F5F9`, secondary `#94A3B8`, accents amber `#F59E0B` and emerald `#10B981`. Never pure `#000000`; keep WCAG AA contrast; no nested cards; use hairline dividers.

## Factual accuracy
- Every claim, number, date and URL lives in `src/data/profile.ts` and must come from the owner's verified brief.
- Never invent, round, or "improve" metrics, employers, dates or links. If a fact is missing, ask rather than guess.
- Semantic landmarks (`header`, `main`, `section`, `footer`) and visible keyboard focus must be preserved.
