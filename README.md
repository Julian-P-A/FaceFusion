# FaceFusion — Website

Marketing site for FaceFusion, a desktop real-time face-changing app. Built with TanStack Start, React 19, Vite 7, Tailwind CSS v4 and Framer Motion. Bilingual (EN/ES), no backend.

## Getting started

```bash
bun install
cp .env.example .env   # optional — defaults work out of the box
bun run dev
```

The site runs at `http://localhost:3000` (or the next free port).

## Scripts

| Command          | Description                        |
| ---------------- | ----------------------------------- |
| `bun run dev`     | Start the dev server                |
| `bun run build`   | Type-check-free production build    |
| `bun run preview` | Preview the production build        |
| `bun run start`   | Run the built server (`.output/`)   |

## Deployment

The Vite config includes the [Nitro](https://v3.nitro.build/) plugin (`nitro/vite`), which builds a
deploy-anywhere server bundle to `.output/`. On Vercel, connect the GitHub repo — Vercel detects
TanStack Start + Nitro automatically and deploys with no extra configuration. See the
[Vercel TanStack Start docs](https://vercel.com/docs/frameworks/full-stack/tanstack-start).

## Environment variables

See [`.env.example`](.env.example). All variables are optional — the app falls back to sensible defaults when unset:

- `VITE_SITE_URL` — canonical URL used in metadata / Open Graph tags. Once this is set to a real
  domain, also update the hardcoded URLs in `public/robots.txt` and `public/sitemap.xml` — those
  are static files and can't read env vars at request time.
- `VITE_DOWNLOAD_URL` — destination for every "Download FaceFusion" button.

## Project structure

```
src/
  components/     UI sections and shared primitives (components/ui, components/animations)
  data/           Centralized copy (translations.ts), face palette, legal content
  lib/            Language context, small hooks
  routes/         File-based routes (/, /login, /signup, /terms, /privacy)
```

Copy for both languages lives in `src/data/translations.ts` (plus `authContent.ts` and `legalContent.ts` for the auth and legal pages) — there is no per-locale duplication of components.
