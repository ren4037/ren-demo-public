# SEO Baseline Lab

Public-facing Next.js App Router frontend for SEO test design.

## Purpose

This repository is intentionally small but realistic. It provides a first-pass
baseline site with multiple page shapes, reusable components, mock data, dynamic
detail routes, and a client form so SEO audits can compare behavior before and
after optimization work.

Version 1 is deliberately not SEO optimized. It avoids the common optimization
layer so future tests can measure the difference introduced by later changes.

The first version does not include:

- App Router `metadata` exports for titles or descriptions
- canonical links
- Open Graph or Twitter metadata
- JSON-LD or schema.org structured data
- generated sitemap routes
- customized robots directives

## Routes

- `/` - baseline overview and visible SEO omission status
- `/features` - test matrix cards and crawl checkpoints
- `/cases` - page sample index
- `/cases/[slug]` - dynamic sample detail pages
- `/contact` - client-side test hypothesis form posting to `/api/leads`
- `/api/leads` - mock test note endpoint

## GitHub Pages

This app can be statically exported for GitHub Pages. The Pages workflow sets
`GITHUB_PAGES=true` and publishes the generated `out/` directory.

```bash
GITHUB_PAGES=true NEXT_PUBLIC_STATIC_EXPORT=true npm run build
```

In static export mode, the contact form simulates the mock lead capture in
client state because GitHub Pages cannot run the `/api/leads` route.

## Project checkpoints

- App Router pages live under `src/app`.
- Shared UI components live under `src/components`.
- Route and card content is sourced from `src/lib/demoData.ts`.
- The contact page includes a client component and a POST-only mock API handler.
- SEO optimization should remain out of version 1 unless a later task explicitly
  asks for the optimized version.

## Commands

```bash
npm install
npm run typecheck
npm run build
npm run dev
```
