<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Forumlify repository guide

## Project scope

- This repository is the Forumlify NEXT edition: Next.js 16 App Router, React 19, PostgreSQL, and JavaScript.
- Normal development happens on the `next` branch and is pushed to `origin/next`. The `main` branch is the separate Lite/Express implementation; do not copy behavior from it blindly.
- Before changing code, run `git status --short --branch`. Preserve unrelated user changes and untracked files.
- Do not commit generated or local artifacts such as `.next/`, `.playwright-cli/`, uploaded files, logs, database data, or secrets.

## Commands and runtime

- Requires Node.js 20.9 or newer.
- Install dependencies with `npm install`.
- Start local development with `npm run dev`; it listens on `0.0.0.0` and normally uses port 3000.
- Create a production build with `npm run build`.
- Start a built server with `npm start`.
- Run tests with `npm test`. The test suite expects a running Forumlify instance and PostgreSQL; see `test/README.md`. Override the service URL with `BASE_URL` when needed.
- Always provide `DATABASE_URL` explicitly when the active PostgreSQL instance is not the default `localhost:5432/forumlify`. Inspect existing Docker containers before creating another database or changing ports.
- Never delete or recreate a database, volume, or upload directory merely to make a test pass.

## Architecture

- `app/page.js` and `app/HomeClient.js` render the application shell. Most navigation is SPA-style state managed by `components/AppProvider.js` and synchronized to `?post=`, `?user=`, and `?page=` query parameters.
- `app/api/**/route.js` contains the Next.js Route Handlers. Keep authentication and authorization checks on the server even when the UI already hides an action.
- `components/` contains client UI. Reuse `AppProvider`, `Toast`, `Icons`, and existing component patterns instead of introducing parallel state or notification systems.
- `app/globals.css` owns the theme, responsive layout, glass/card styling, page transitions, and View Transition pseudo-elements. Check nearby selectors before adding another override.
- `locales/zh.json` and `locales/en.json` are the translation sources. User-facing text added or changed in an i18n-enabled area must be updated in both files.
- `lib/api.js` is the browser API wrapper, `lib/db.js` owns the PostgreSQL pool, and `lib/http-cache.js` provides ETag/304 helpers for cacheable JSON responses.
- `schema.sql` is shared with the Lite branch. Keep schema changes backward-compatible unless a migration and compatibility plan is explicitly requested.

## UI and interaction conventions

- Support both light and dark themes. Verify page backgrounds, cards, modals, settings/admin pages, borders, and text contrast in both modes.
- Do not use browser `alert`, `confirm`, or `prompt`. Use `useToast()` for timed success/warning/error notices and `confirmAction()` for decisions requiring user input.
- Use SVG icons through `components/Icons.js`; do not add emoji as interface icons. The existing empty-message greeting ending in `👋` is an intentional exception and must remain.
- Avoid hard-coded Chinese or English in newly touched UI when a translation key is appropriate. Date formatting must follow the selected language.
- Keep settings and administration layouts responsive: content should use the available right-side width, wrap long text, and must not become wider solely because English is selected.
- Preserve the current navigation bar during page transitions unless a task explicitly requires otherwise.

## View Transition rules

- `components/AppProvider.js` is the single coordination point for cross-page View Transitions. Do not start competing transitions from individual page components.
- Shared elements must exist in both the old and new DOM snapshots and must have exactly one matching `view-transition-name` per snapshot. Apply names only to the clicked card or target element to avoid duplicates.
- When the destination data is asynchronous, pass a preview object so the destination avatar, title, author, content, or other shared element renders in the first transition frame. Replace it with fetched data without remounting the shared element.
- Elements that exist only on the destination should reveal after shared geometry settles. Elements that exist only on the source should disappear before the destination content is revealed.
- Opening and returning animations should be visible inverses. On return, prefer the original `data-post-id` or stored source identity; if the target is unavailable, fall back to a simple fade instead of animating to the wrong element.
- Disable the default `.page-slide` animation on pages using a custom shared transition, otherwise the page will slide a second time after the transition completes.
- Respect `prefers-reduced-motion` and provide an immediate navigation fallback when `document.startViewTransition` is unavailable.
- For animation bugs, inspect intermediate frames and the trajectories of the outer card, lower edge, text, timestamps, badges, and background separately. Do not judge only the first and final screenshots.

## API, caching, and security

- Preserve conditional GET behavior for cacheable endpoints. Use `jsonWithEtag()` from `lib/http-cache.js` where appropriate so matching `If-None-Match` requests return 304 without a response body.
- Do not cache personalized, authenticated, rapidly changing, or mutation responses as public data.
- Never commit real JWT secrets, database credentials, cloud credentials, tokens, private keys, or local `.env` files. Example values belong only in example configuration.
- Validate and sanitize all user-controlled Markdown, uploads, identifiers, and custom content using the existing helpers and route patterns.

## Validation and Git

- For ordinary code changes, run `git diff --check` and `npm run build` at minimum.
- For API changes, run the focused `node:test` coverage and then `npm test` when the required database/service is available.
- For visual or animation changes, use Playwright against the local development server and check both themes and relevant viewport sizes. Keep Playwright artifacts untracked.
- Stage only files belonging to the task. Use concise commit messages that describe the outcome.
- When asked to push, fetch first if the remote has moved, rebase the scoped commit onto the latest `origin/next`, resolve conflicts without discarding remote work, and never force-push unless the user explicitly authorizes it.
