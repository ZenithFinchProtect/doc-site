---
name: testing-doc-editor
description: Test the doc editor flow end-to-end — verifying that edits in the admin editor immediately reflect on public doc pages, the homepage, and the docs index. Use when changes affect doc rendering, KV storage, or the admin editor.
---

# Testing the Doc Editor

## Overview
This doc site uses Cloudflare Pages with KV storage. The admin editor saves doc overrides to KV, and the public pages read from KV at runtime (edge runtime + force-dynamic). Testing verifies that saves in the editor propagate immediately to all public-facing pages.

## Prerequisites
- Access to the Cloudflare Pages preview deployment (from PR comments)
- Admin credentials: username `admin`, password `nordic2024` (hardcoded defaults in `lib/auth.ts`)

## How to Access the Editor
1. Navigate to `<preview-url>/admin`
2. Log in with admin/nordic2024
3. You'll be redirected to `/admin/editor` with a sidebar listing all docs by category

## Testing Flow
1. **Note the current state** of a doc on its public page (e.g., `/docs/nfa-account`)
2. **Edit via admin editor**: Select the doc in the sidebar, change the title/description/content, click Save
3. **Verify on doc page**: Navigate to `/docs/<slug>` — breadcrumb and sidebar should show updated title
4. **Verify on homepage**: Navigate to `/` — the product card should show updated title and description
5. **Verify on /docs index**: Navigate to `/docs` — the listing should show updated title and description
6. **Cleanup**: Click Reset in the editor to restore defaults, verify pages revert

## Key Pages to Check
- `/docs/[slug]` — individual doc page (breadcrumb, content, sidebar title)
- `/` — homepage product cards (title = doc title, description = doc description)
- `/docs` — docs index listing (title + description per doc)
- `/admin/editor` — the editor itself (sidebar reflects saves immediately)

## Architecture Notes
- Doc pages use `export const runtime = "edge"` and `export const dynamic = "force-dynamic"` to avoid static generation
- KV namespace is bound as `DOC_OVERRIDES` in `wrangler.toml`
- Homepage merges doc overrides into product cards via `lib/homepage.ts` → `getHomeConfig()`
- The editor saves via `POST /api/docs/[slug]` which writes to KV

## Common Issues
- If pages show stale content, check that `runtime = "edge"` and `dynamic = "force-dynamic"` are exported from the page files
- The `generateStaticParams` export is incompatible with edge runtime — if present, it will cause build errors
- Next.js client-side routing might cache pages; use hard navigation or new tabs to verify fresh server renders

## Devin Secrets Needed
None — admin credentials are hardcoded defaults in the source code (`lib/auth.ts`).
