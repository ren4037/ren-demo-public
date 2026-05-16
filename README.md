# Ren Demo Public

Public-facing Next.js App Router demo for image-agent GitHub repository learning tests.

## Purpose

This repository is intentionally small but realistic. It gives the learning flow a public GitHub repository with pages, reusable components, mock data, a dynamic route, a client form, and a simple API route.

## Routes

- `/` - marketing overview and metrics
- `/features` - feature cards and workflow sections
- `/cases` - customer case index
- `/cases/[slug]` - dynamic case detail pages
- `/contact` - client-side contact form posting to `/api/leads`
- `/api/leads` - mock lead capture endpoint

## GitHub Pages

This app can be statically exported for GitHub Pages. The Pages workflow sets
`GITHUB_PAGES=true` and publishes the generated `out/` directory.

```bash
GITHUB_PAGES=true NEXT_PUBLIC_STATIC_EXPORT=true npm run build
```

In static export mode, the contact form simulates the mock lead capture in
client state because GitHub Pages cannot run the `/api/leads` route.

## Learning checkpoints

- App Router pages live under `src/app`.
- Shared UI components live under `src/components`.
- Route and card content is sourced from `src/lib/demoData.ts`.
- The contact page includes a client component and a POST-only API handler.

## Commands

```bash
npm install
npm run build
npm run dev
```
