# Mailloop Handbook

Independent, local-first Next.js App Router handbook for the Mailloop source snapshot at commit `a4f1651b5293213f92211ddf8e6d37ef457e09f2`. The source project at `/home/anoop/CODE/mailloop` is read-only input. This project has its own dependencies and lockfile.

## Run locally

Requires Node.js 20.9+ and npm; the snapshot utility also needs Python 3 and Git. No application database, OAuth, Gmail, Blob, Dodo or Inngest credentials are needed.

```sh
cd /home/anoop/CODE/mailloopExplained/mailloop-handbook
npm install && npm run dev
```

Open `http://localhost:3000`. Use the printed alternate port if 3000 is occupied. All runtime requests are for this site's own static assets: search index, function inventory, file index and source JSON. There are no provider calls, external fonts, analytics, application backend or database.

## Static export

```sh
npm run build
python3 -m http.server 4319 --bind 127.0.0.1 --directory out
```

Open `http://localhost:4319`. `output: "export"` and `trailingSlash: true` emit directory index files, so `/handbook/sending/` supports direct loading and refresh. Serve over HTTP; opening `out/index.html` with `file://` cannot load the JSON resources correctly. Host at the domain root; a path prefix needs corresponding asset/link changes.

Build preparation extracts inventories and highlights displayed code using Shiki. Content validation rejects missing files, bad inclusive line ranges, changed excerpt hashes, snapshot drift, stale function/route inventories, missing model/migration coverage, incomplete required chapters/questions/walkthroughs and invalid search targets. After export, the link check verifies internal assets, pages and static anchors. Source-browser line anchors are checked through their snapshot reference ranges rather than server-rendered line IDs.

The build uses the checked-in snapshot and works without the Mailloop checkout. It never automatically refreshes the snapshot or updates expected citation hashes.

## What is included

- Sixteen chapters in the requested order, with six child walkthroughs.
- Current plan limits, flag-off legacy behavior, all eight Inngest registrations, billing test/live boundaries and known stale guidance.
- 62 interview questions with short/deeper answers and revision links, 49 glossary terms, flashcards and six reveal-answer quizzes.
- 507 sanitized first-party text files, original line positions, original/sanitized hashes and commit metadata.
- Compiler inventory of 4,327 functions/callbacks, 36 page/API entries, 19 schema models and 27 migrations.
- 30 reviewed core function contracts and 15 reviewed API contracts. Other function entries provide extracted parameter/return/call syntax and conservative caller candidates; they are **not all manually explained or type-resolved**.
- Responsive sidebar/mobile dialog, contents links, local search, light/dark appearance, copyable build-highlighted excerpts and strict-mode Mermaid with readable text fallbacks.

## Evidence and editing

`content/chapters.json` is the committed teaching content. `lib/content.ts` defines its TypeScript contract. Each section has one or more references `{ path, start, end, hash }`; line ranges are inclusive. `content/questions.json`, `glossary.json`, `quizzes.json`, `contracts.json` and `route-contracts.json` hold the corresponding study/reference material.

Edit the content JSON directly for normal changes. Do not change an expected hash to silence drift: inspect the new source and reconsider the associated behavioral claim first. The Python authoring scripts are development helpers, not build prerequisites. Running `author.py` recreates the initial chapter draft; `refine.py` supplies the later reviewed corrections. Prefer committed JSON for further edits. `study.py` recreates the authored question/glossary/quiz data; `contracts.py` recreates reviewed core contracts.

Generated `functions.json`, `routes.json`, `schema.json`, `files.json`, `highlighted.json` and `public/` indexes are recreated by `npm run prepare`. Source-browser code is escaped plain text so large files remain usable; chapter/question excerpts use Shiki at build time. Caller matching is structural and can have false positives/omissions through aliases, JSX, dynamic properties and framework invocation.

First-use linked terms reveal glossary definitions on focus/hover. Mermaid is bundled locally and initialized with `securityLevel: "strict"`. It supplies a loading message, error fallback, caption and readable diagram source.

## Refresh the source snapshot deliberately

1. Review the checkout and its untracked first-party files. Never add actual environment files, credential stores, user exports or runtime data to the public snapshot.
2. Run `npm run source:verify` to compare the current checkout with the existing baseline before deciding to refresh.
3. Run `npm run snapshot:refresh` only when a new dated baseline is intended. `scripts/snapshot.py` reads the configured source path, inventories files, records hashes/status/history, reads text completely, classifies binaries and creates a line-preserving sanitized snapshot. Credential paths are excluded without reading. Dependency lockfile text, ignored/vendor/generated/build files and binary bytes are not published.
4. Review the sanitized snapshot for private data; automated email/secret-assignment filtering is conservative but cannot prove absence of all private data. Redaction markers preserve original line positions, including blank lines.
5. Review affected claims and **intentionally** update only their expected excerpt hashes after checking their ranges. Run preparation and validation. They should fail if a pinned excerpt changed.
6. Update NOTES, reviewed contracts, contradictions and the content-coverage ledger. Delete obsolete public snapshot artifacts when removing source files; preparation normally reproduces the same pinned set.

`NOTES.md` distinguishes complete automated byte/text scanning from targeted semantic review. The implementation does **not** claim that all 507 files or all 4,327 functions received exhaustive manual semantic analysis. The visible source ledger and reviewed contract set make that limit explicit.

## Local progress

Theme uses `mailloop-handbook:theme`. Understood/revise-later controls use `mailloop-handbook:progress:v1`. They stay in this browser; there is no account or synchronization. Reset learning progress on Overview or Interview Prep. Resetting progress leaves the selected theme intact. Quizzes and the current flashcard reset on reload. If storage is blocked/corrupt, controls continue in memory and display a storage notice.

## Optional checks

```sh
npm run typecheck
npm run validate
npm test
npm run source:verify
npx playwright install chromium
npm run test:browser
```

The browser suite serves `out/` with Python and covers search categories, persistence/reset, storage failure, flashcards/quizzes, diagrams, source deep links, function filtering, keyboard/mobile navigation and direct page refresh. It requires a matching Playwright Chromium installation.

For this delivery, type checking, content checks, a static build, nine evidence/compiler tests and 2,043 exported link checks passed before the user asked to skip further testing. Browser tests initially failed to launch because the matching Chromium executable was absent; **functional browser verification was not completed**. The final export was regenerated after the content/hand-off refinements. No claim is made that the browser suite passed.

## Deploy when desired

Nothing is published by this project or this delivery.

### Vercel

Import this handbook directory as an independent project; set the project root to `mailloop-handbook`, install with `npm install` (or `npm ci`), build with `npm run build`, and serve `out`. This is a static export with no provider environment variables or server functions. Review the deployment preview before making it public, because it intentionally includes sanitized first-party source.

### Netlify

Set the base directory to `mailloop-handbook`, build command to `npm run build`, and publish directory to `out` relative to that base. Use a supported Node version. No SPA catch-all redirect is required: each handbook route has its own index file. `netlify.toml` is included for a repository whose root is this handbook directory; adjust base if importing its parent directory.

The static export approach follows [Next.js static-export guidance](https://nextjs.org/docs/app/guides/static-exports); build-time highlighting follows [Shiki usage](https://shiki.style/guide/install), and strict client diagrams follow [Mermaid usage](https://mermaid.js.org/config/usage.html).

## Remaining uncertainties and inferred tradeoffs

Production flags, database grants/bindings, hosted quotes, Google verification, provider approval, monitoring/backup readiness, customer results and performance are unknown. The original detailed brief was not supplied beyond the plan; the six walkthroughs cover identity, campaign, delivery, PDF, upgrade and deletion.

Confirmed code caveats include non-atomic Gmail/database acceptance, disabled mailbox reconciliation, removed automatic operator alerts, stale schedule/admin/test-only documentation, and the portal URL check accepting only a test hostname. The live impact of the portal check depends on actual provider responses and remains unverified.

Pages containing explicitly **INFERRED** tradeoffs: Architecture, Database, Inngest, Frontend, Tradeoffs and Scaling. Dependency use establishes the mechanism, not author motivation. Personal experience, production incidents and measured improvements are never invented.

The Cheat Sheet lists the ten interview concepts: product, current limits, legacy flag, identity, credentials, admission, delivery, uncertainty, billing and recovery. This is a dated code reading and a revision tool, not a guarantee of mastery.

## Visual refresh

The reading interface now uses self-hosted Plus Jakarta Sans (body/UI), Space Grotesk (headings) and JetBrains Mono (code). Font licenses are retained in `app/fonts/`.

Dark mode uses pure `#000000` page, card, navigation, input, code and diagram surfaces, white body text and `#FFD84D` yellow accents. Light mode uses warm white surfaces with ink text and deep gold accents. A shared theme provider updates diagrams when appearance changes; build-highlighted snippets use matching light/AMOLED palettes. Theme selection is applied before the first body paint using the existing preference key.

Spacing, reading sizes, navigation targets and mobile card layouts have been increased throughout. Entrances, hover feedback, disclosures, drawer transitions and answer/copy feedback use brief local animations; reduced-motion preferences disable them. No animation dependency or external font request was added. Automated tests and browser checks were skipped for this refresh at the user's request; only the static deliverable was regenerated.
