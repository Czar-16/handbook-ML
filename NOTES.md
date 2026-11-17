# Source reading and evidence notes

Source: `/home/anoop/CODE/mailloop`; commit `a4f1651b5293213f92211ddf8e6d37ef457e09f2`.

Inventory started before teaching content. Actual .env and credential stores are excluded. Reading coverage, hashes, dependency versions and unresolved questions are recorded below as inspection progresses.

## Inventory and reading coverage

657 inventoried files; 507 complete text scans. Full source and test text is available in the sanitized snapshot. Scanning is not a claim of semantic review; chapter-specific semantic evidence is tracked in content references.

Generated Prisma client, node_modules, .next, coverage, .git and ignored local environment files are excluded. Binary assets are classified by extension and purpose, not republished. Lockfile is parsed as dependency metadata, not teaching source.

## History

```
a4f1651 Fix billing test mode copy for live checkout
2261cb7 Polish workspace themes and stabilize browser checks
5753de5 Polish timer ring rendering and Premium pricing effects
5af53f9 Align browser checks with current public and workspace UI
b8e0d62 Fix footer creator link to X profile
bcbc7a0 fix: compact public pricing cards on mobile
dfad7df Fix missing emnapi dependencies in lockfile
7893049 Match landing Google icon to monochrome reference
5fe4ac9 Polish mobile landing layout and automate premium button shine
af3c034 Refine landing pricing card sizing and stat hover states
9252c85 Align pricing cards with Nightbloom reference
c038850 fix canonical domain for SEO URLs
```

## Dependencies (declared / installed)

- @next/third-parties: 16.4.3 / 16.4.3
- @prisma/adapter-pg: 7.10.0 / 7.10.0
- @prisma/client: 7.10.0 / 7.10.0
- @radix-ui/react-dialog: 1.3.1 / 1.3.1
- @radix-ui/react-slot: 1.4.0 / 1.4.0
- @vercel/analytics: ^2.0.1 / 2.0.1
- @vercel/blob: 2.8.1 / 2.8.1
- @vercel/speed-insights: ^2.1.0 / 2.1.0
- class-variance-authority: 0.7.1 / 0.7.1
- clsx: 2.1.1 / 2.1.1
- dodopayments: 2.55.0 / 2.55.0
- dotenv: 18.0.6 / 18.0.6
- gmail-mime: npm:nodemailer@10.0.16 / 10.0.16
- googleapis: ^183.0.0 / 183.0.0
- inngest: 4.22.0 / 4.22.0
- lucide-react: 1.52.0 / 1.52.0
- next: 16.4.3 / 16.4.3
- next-auth: ^5.0.0-beta.32 / 5.0.0-beta.32
- papaparse: 5.7.0 / 5.7.0
- pg: 8.23.1 / 8.23.1
- react: 19.3.0 / 19.3.0
- react-dom: 19.3.0 / 19.3.0
- server-only: 0.0.1 / 0.0.1
- standardwebhooks: 1.1.1 / 1.1.1
- tailwind-merge: 3.7.0 / 3.7.0
- zod: 4.6.5 / 4.6.5
- @axe-core/playwright: 4.13.0 / 4.13.0
- @playwright/test: 1.63.0 / 1.63.0
- @tailwindcss/postcss: ^4.3.3 / 4.3.3
- @types/node: 22.20.5 / 22.20.5
- @types/nodemailer: 8.0.2 / 8.0.2
- @types/papaparse: 5.5.2 / 5.5.2
- @types/pg: 8.23.1 / 8.23.1
- @types/react: ^19 / 19.3.0
- @types/react-dom: ^19 / 19.3.0
- eslint: ^9 / 9.39.5
- eslint-config-next: 16.4.3 / 16.4.3
- prettier: 3.9.9 / 3.9.9
- prisma: 7.10.0 / 7.10.0
- tailwindcss: ^4 / 4.3.3
- tsx: 4.23.15 / 4.23.15
- typescript: ^5 / 5.9.3
- vitest: 5.0.3 / 5.0.3

## Contradictions and uncertainties

- AGENTS.md test-only billing guidance is stale relative to docs/dodo-live-rollout.md and billing/config.ts.
- Deployed flags, Dodo bindings, Google verification status, real user outcomes and measured performance cannot be established from the checkout.
- No original detailed brief is present beyond the supplied plan; the six walkthroughs are sign-in, current-limit campaign, single delivery, attachment, upgrade, and account deletion.
- Snapshot removes email literals and secret-like assignments; redactions are visible and line positions preserved. Review sanitization when refreshing; no automatic filter can prove absence of all private data.

## File ledger

| Path | Coverage / exclusion | Bytes |
|---|---|---|
| `.env.example` | complete byte/text scan | 2314 |
| `.github/workflows/ci.yml` | complete byte/text scan | 1453 |
| `.gitignore` | complete byte/text scan | 672 |
| `AGENTS.md` | complete byte/text scan | 4280 |
| `DESIGN.md` | complete byte/text scan | 11823 |
| `PLAN.md` | complete byte/text scan | 160203 |
| `README.md` | complete byte/text scan | 33553 |
| `components.json` | complete byte/text scan | 413 |
| `design/compose/README.md` | complete byte/text scan | 2907 |
| `design/compose/prompts.md` | complete byte/text scan | 2812 |
| `design/compose/reference-dark.png` | binary asset: .png | 1472618 |
| `design/compose/reference-light.png` | binary asset: .png | 1226427 |
| `design/compose/screenshots/compose-dark-desktop.png` | binary asset: .png | 216388 |
| `design/compose/screenshots/compose-dark-laptop.png` | binary asset: .png | 212714 |
| `design/compose/screenshots/compose-dark-mobile.png` | binary asset: .png | 206482 |
| `design/compose/screenshots/compose-light-desktop.png` | binary asset: .png | 215686 |
| `design/compose/screenshots/compose-light-laptop.png` | binary asset: .png | 212012 |
| `design/compose/screenshots/compose-light-mobile.png` | binary asset: .png | 204317 |
| `design/compose/screenshots/premium-dark.png` | binary asset: .png | 88708 |
| `design/compose/screenshots/premium-light.png` | binary asset: .png | 91785 |
| `design/pricing-refinement/README.md` | complete byte/text scan | 2560 |
| `design/pricing-refinement/screenshots/pricing-chalk-1440.png` | binary asset: .png | 368189 |
| `design/pricing-refinement/screenshots/pricing-chalk-360.png` | binary asset: .png | 268514 |
| `design/pricing-refinement/screenshots/pricing-chalk-390.png` | binary asset: .png | 270457 |
| `design/pricing-refinement/screenshots/pricing-chalk-820.png` | binary asset: .png | 358965 |
| `design/pricing-refinement/screenshots/pricing-lavender-1440.png` | binary asset: .png | 408414 |
| `design/pricing-refinement/screenshots/pricing-lavender-360.png` | binary asset: .png | 323798 |
| `design/pricing-refinement/screenshots/pricing-lavender-390.png` | binary asset: .png | 329111 |
| `design/pricing-refinement/screenshots/pricing-lavender-820.png` | binary asset: .png | 393618 |
| `design/pricing-refinement/screenshots/pricing-nightbloom-1440.png` | binary asset: .png | 408414 |
| `design/pricing-refinement/screenshots/pricing-nightbloom-360.png` | binary asset: .png | 333054 |
| `design/pricing-refinement/screenshots/pricing-nightbloom-390.png` | binary asset: .png | 336981 |
| `design/pricing-refinement/screenshots/pricing-nightbloom-820.png` | binary asset: .png | 401123 |
| `design/pricing-refinement/screenshots/pricing-obsidian-1440.png` | binary asset: .png | 373152 |
| `design/pricing-refinement/screenshots/pricing-obsidian-360.png` | binary asset: .png | 266623 |
| `design/pricing-refinement/screenshots/pricing-obsidian-390.png` | binary asset: .png | 268357 |
| `design/pricing-refinement/screenshots/pricing-obsidian-820.png` | binary asset: .png | 365196 |
| `design/usage/README.md` | complete byte/text scan | 7966 |
| `design/usage/screenshots/purple-dark-desktop-menu.png` | binary asset: .png | 189466 |
| `design/usage/screenshots/purple-dark-desktop.png` | binary asset: .png | 283544 |
| `design/usage/screenshots/purple-dark-mobile-menu.png` | binary asset: .png | 264412 |
| `design/usage/screenshots/purple-dark-mobile.png` | binary asset: .png | 1114845 |
| `design/usage/screenshots/purple-light-desktop-menu.png` | binary asset: .png | 179986 |
| `design/usage/screenshots/purple-light-desktop.png` | binary asset: .png | 273665 |
| `design/usage/screenshots/purple-light-mobile-menu.png` | binary asset: .png | 261392 |
| `design/usage/screenshots/purple-light-mobile.png` | binary asset: .png | 1066191 |
| `design/usage/screenshots/vercel-dark-desktop-menu.png` | binary asset: .png | 83558 |
| `design/usage/screenshots/vercel-dark-desktop-premium.png` | binary asset: .png | 219766 |
| `design/usage/screenshots/vercel-dark-desktop.png` | binary asset: .png | 174360 |
| `design/usage/screenshots/vercel-dark-mobile-menu.png` | binary asset: .png | 152050 |
| `design/usage/screenshots/vercel-dark-mobile-premium.png` | binary asset: .png | 844467 |
| `design/usage/screenshots/vercel-dark-mobile.png` | binary asset: .png | 643471 |
| `design/usage/screenshots/vercel-light-desktop-menu.png` | binary asset: .png | 83899 |
| `design/usage/screenshots/vercel-light-desktop-premium.png` | binary asset: .png | 218450 |
| `design/usage/screenshots/vercel-light-desktop.png` | binary asset: .png | 173731 |
| `design/usage/screenshots/vercel-light-mobile-menu.png` | binary asset: .png | 152757 |
| `design/usage/screenshots/vercel-light-mobile-premium.png` | binary asset: .png | 842947 |
| `design/usage/screenshots/vercel-light-mobile.png` | binary asset: .png | 642628 |
| `design/vercel-refinement/README.md` | complete byte/text scan | 8873 |
| `design/vercel-refinement/screenshots/help-vercel-dark-desktop.png` | binary asset: .png | 107174 |
| `design/vercel-refinement/screenshots/help-vercel-dark-mobile.png` | binary asset: .png | 147731 |
| `design/vercel-refinement/screenshots/help-vercel-light-desktop.png` | binary asset: .png | 113765 |
| `design/vercel-refinement/screenshots/help-vercel-light-mobile.png` | binary asset: .png | 152753 |
| `design/vercel-refinement/screenshots/history-vercel-dark-desktop.png` | binary asset: .png | 337618 |
| `design/vercel-refinement/screenshots/history-vercel-dark-mobile.png` | binary asset: .png | 1276790 |
| `design/vercel-refinement/screenshots/history-vercel-light-desktop.png` | binary asset: .png | 340720 |
| `design/vercel-refinement/screenshots/history-vercel-light-mobile.png` | binary asset: .png | 1285976 |
| `design/vercel-refinement/screenshots/pricing-vercel-dark-desktop.png` | binary asset: .png | 299576 |
| `design/vercel-refinement/screenshots/pricing-vercel-dark-mobile.png` | binary asset: .png | 1063902 |
| `design/vercel-refinement/screenshots/pricing-vercel-light-desktop.png` | binary asset: .png | 296891 |
| `design/vercel-refinement/screenshots/pricing-vercel-light-mobile.png` | binary asset: .png | 1060362 |
| `design/workspace-themes/README.md` | complete byte/text scan | 3772 |
| `design/workspace-themes/screenshots/appearance-chooser-mobile.png` | binary asset: .png | 283479 |
| `design/workspace-themes/screenshots/appearance-chooser.png` | binary asset: .png | 158700 |
| `design/workspace-themes/screenshots/compose-purple-dark.png` | binary asset: .png | 324703 |
| `design/workspace-themes/screenshots/compose-purple-light.png` | binary asset: .png | 312818 |
| `design/workspace-themes/screenshots/contacts-vercel-dark-mobile.png` | binary asset: .png | 533180 |
| `design/workspace-themes/screenshots/contacts-vercel-dark.png` | binary asset: .png | 159582 |
| `design/workspace-themes/screenshots/history-vercel-dark.png` | binary asset: .png | 218685 |
| `design/workspace-themes/screenshots/settings-vercel-dark.png` | binary asset: .png | 251004 |
| `design/workspace-themes/screenshots/templates-vercel-dark.png` | binary asset: .png | 57475 |
| `design/workspace-themes/screenshots/usage-vercel-light-mobile.png` | binary asset: .png | 642771 |
| `design/workspace-themes/screenshots/usage-vercel-light.png` | binary asset: .png | 171067 |
| `docker-compose.test.yml` | complete byte/text scan | 528 |
| `docker-compose.yml` | complete byte/text scan | 651 |
| `docs/admin-panel.md` | complete byte/text scan | 6689 |
| `docs/custom-role-change-review.md` | complete byte/text scan | 16485 |
| `docs/design/free-templates/README.md` | complete byte/text scan | 4696 |
| `docs/design/free-templates/active-desktop-dark.png` | binary asset: .png | 1448893 |
| `docs/design/free-templates/retained-mobile-light.png` | binary asset: .png | 1184477 |
| `docs/design/landing-footer-reference.md` | complete byte/text scan | 2978 |
| `docs/design/landing-footer-reference.png` | binary asset: .png | 1080784 |
| `docs/design/paid-templates/README.md` | complete byte/text scan | 4873 |
| `docs/design/paid-templates/library-desktop-dark.png` | binary asset: .png | 1358083 |
| `docs/design/paid-templates/library-mobile-light.png` | binary asset: .png | 1173893 |
| `docs/design/usage/README.md` | complete byte/text scan | 2975 |
| `docs/design/usage/allowances-desktop.png` | binary asset: .png | 1209510 |
| `docs/design/usage/sending-mobile-dark.png` | binary asset: .png | 1429712 |
| `docs/dodo-live-rollout.md` | complete byte/text scan | 3548 |
| `docs/dodo-test-billing.md` | complete byte/text scan | 23492 |
| `docs/entitlement-foundation.md` | complete byte/text scan | 14699 |
| `docs/minimum-hardening.md` | complete byte/text scan | 8758 |
| `docs/oauth-verification-v1.md` | complete byte/text scan | 10543 |
| `docs/storage-monitoring.md` | complete byte/text scan | 5387 |
| `docs/tailwind-migration-handoff.md` | complete byte/text scan | 32243 |
| `docs/tailwind-styling.md` | complete byte/text scan | 68250 |
| `docs/theme-audit/README.md` | complete byte/text scan | 3626 |
| `docs/theme-audit/indicator-contrast.json` | complete byte/text scan | 3998 |
| `docs/theme-audit/manual-findings.json` | complete byte/text scan | 1401 |
| `docs/theme-audit/results.md` | complete byte/text scan | 1198 |
| `docs/theme-audit/style-changes.json` | complete byte/text scan | 1140 |
| `docs/theme-audit/summary.json` | complete byte/text scan | 890 |
| `docs/theme-audit/token-changes.json` | complete byte/text scan | 14331 |
| `docs/upgrade-modal.md` | complete byte/text scan | 6848 |
| `docs/usage-ledger-rollout.md` | complete byte/text scan | 8454 |
| `eslint.config.mjs` | complete byte/text scan | 578 |
| `next.config.ts` | complete byte/text scan | 401 |
| `ops/storage-report.sql` | complete byte/text scan | 495 |
| `package-lock.json` | dependency resolution metadata (parsed separately) | 508075 |
| `package.json` | complete byte/text scan | 3144 |
| `playwright.config.ts` | complete byte/text scan | 2182 |
| `postcss.config.mjs` | complete byte/text scan | 94 |
| `prisma.config.ts` | complete byte/text scan | 374 |
| `prisma/migrations/20261007145521_init/migration.sql` | complete byte/text scan | 3555 |
| `prisma/migrations/20261007194758_mailloop_mvp/migration.sql` | complete byte/text scan | 2469 |
| `prisma/migrations/20261007202355_protect_resume_cleanup/migration.sql` | complete byte/text scan | 80 |
| `prisma/migrations/20261008000000_roles_and_resume/migration.sql` | complete byte/text scan | 593 |
| `prisma/migrations/20261008010000_generic_link/migration.sql` | complete byte/text scan | 344 |
| `prisma/migrations/20261008020000_inline_template_links/migration.sql` | complete byte/text scan | 657 |
| `prisma/migrations/20261010000000_contact_follow_up/migration.sql` | complete byte/text scan | 69 |
| `prisma/migrations/20261010010000_launch_controls/migration.sql` | complete byte/text scan | 326 |
| `prisma/migrations/20261010020000_shortlist_removal/migration.sql` | complete byte/text scan | 68 |
| `prisma/migrations/20261011000000_delete_history/migration.sql` | complete byte/text scan | 63 |
| `prisma/migrations/20261012000000_permanent_history/migration.sql` | complete byte/text scan | 1407 |
| `prisma/migrations/20261013000000_attachment_storage_cleanup/migration.sql` | complete byte/text scan | 368 |
| `prisma/migrations/20261016000000_send_only_v1/migration.sql` | complete byte/text scan | 755 |
| `prisma/migrations/20261016010000_subscription_foundation/migration.sql` | complete byte/text scan | 11575 |
| `prisma/migrations/20261016020000_remove_recipient_suppression/migration.sql` | complete byte/text scan | 151 |
| `prisma/migrations/20261016020000_usage_ledger/migration.sql` | complete byte/text scan | 7119 |
| `prisma/migrations/20261016030000_usage_runtime/migration.sql` | complete byte/text scan | 257 |
| `prisma/migrations/20261020000000_dodo_test_billing/migration.sql` | complete byte/text scan | 2262 |
| `prisma/migrations/20261020010000_hosted_checkout_country/migration.sql` | complete byte/text scan | 229 |
| `prisma/migrations/20261020020000_dodo_billing_completion/migration.sql` | complete byte/text scan | 1073 |
| `prisma/migrations/20261020030000_subscription_lifecycle/migration.sql` | complete byte/text scan | 3422 |
| `prisma/migrations/20261020040000_admin_panel/migration.sql` | complete byte/text scan | 6366 |
| `prisma/migrations/20261020050000_minimum_hardening/migration.sql` | complete byte/text scan | 2900 |
| `prisma/migrations/20261021000000_remove_operator_alerts/migration.sql` | complete byte/text scan | 332 |
| `prisma/migrations/20261102000000_testing_usage_reset/migration.sql` | complete byte/text scan | 66 |
| `prisma/migrations/20261111000000_dodo_live_billing/migration.sql` | complete byte/text scan | 524 |
| `prisma/migrations/20261111010000_dodo_binding_null_guard/migration.sql` | complete byte/text scan | 490 |
| `prisma/migrations/migration_lock.toml` | complete byte/text scan | 128 |
| `prisma/schema.prisma` | complete byte/text scan | 17171 |
| `public/fonts/inter/InterVariable.woff2` | binary asset: .woff2 | 352240 |
| `public/fonts/inter/OFL.txt` | complete byte/text scan | 4380 |
| `public/google.svg` | complete byte/text scan | 2326 |
| `public/sample-contacts.csv` | complete byte/text scan | 95 |
| `public/social-logo.png` | binary asset: .png | 62493 |
| `scripts/backfill-subscription-usage.ts` | complete byte/text scan | 3899 |
| `scripts/bootstrap-admin.ts` | complete byte/text scan | 2720 |
| `scripts/check-colors.ts` | complete byte/text scan | 4302 |
| `scripts/color-exceptions.json` | complete byte/text scan | 936 |
| `scripts/lib/reset-local-data.ts` | complete byte/text scan | 3208 |
| `scripts/provision-admin-db.ts` | complete byte/text scan | 5948 |
| `scripts/report-theme-audit.ts` | complete byte/text scan | 6376 |
| `scripts/reset-local-data.ts` | complete byte/text scan | 1137 |
| `scripts/rotate-token-encryption.ts` | complete byte/text scan | 897 |
| `scripts/subscription-maintenance.ts` | complete byte/text scan | 1490 |
| `scripts/test-usage-db.ts` | complete byte/text scan | 6770 |
| `src/app/(admin)/admin/audit/page.tsx` | complete byte/text scan | 2011 |
| `src/app/(admin)/admin/controls/page.tsx` | complete byte/text scan | 844 |
| `src/app/(admin)/admin/layout.tsx` | complete byte/text scan | 1677 |
| `src/app/(admin)/admin/page.tsx` | complete byte/text scan | 821 |
| `src/app/(admin)/admin/users/[userId]/page.tsx` | complete byte/text scan | 3217 |
| `src/app/(admin)/admin/users/page.tsx` | complete byte/text scan | 2785 |
| `src/app/(app)/billing/page.tsx` | complete byte/text scan | 197 |
| `src/app/(app)/billing/return/page.tsx` | complete byte/text scan | 196 |
| `src/app/(app)/compose/loading.tsx` | complete byte/text scan | 155 |
| `src/app/(app)/compose/page.tsx` | complete byte/text scan | 4234 |
| `src/app/(app)/contacts/loading.tsx` | complete byte/text scan | 156 |
| `src/app/(app)/contacts/page.tsx` | complete byte/text scan | 3987 |
| `src/app/(app)/error.tsx` | complete byte/text scan | 449 |
| `src/app/(app)/history/history-sent-time.tsx` | complete byte/text scan | 904 |
| `src/app/(app)/history/loading.tsx` | complete byte/text scan | 307 |
| `src/app/(app)/history/page.tsx` | complete byte/text scan | 9859 |
| `src/app/(app)/layout.tsx` | complete byte/text scan | 4213 |
| `src/app/(app)/loading.tsx` | complete byte/text scan | 137 |
| `src/app/(app)/settings/billing/return/page.tsx` | complete byte/text scan | 197 |
| `src/app/(app)/settings/loading.tsx` | complete byte/text scan | 156 |
| `src/app/(app)/settings/page.tsx` | complete byte/text scan | 4253 |
| `src/app/(app)/templates/loading.tsx` | complete byte/text scan | 137 |
| `src/app/(app)/templates/page.tsx` | complete byte/text scan | 9053 |
| `src/app/(app)/templates/template-editor.css` | complete byte/text scan | 2882 |
| `src/app/(app)/usage/loading.tsx` | complete byte/text scan | 587 |
| `src/app/(app)/usage/page.tsx` | complete byte/text scan | 627 |
| `src/app/(checkout)/usage/return/page.tsx` | complete byte/text scan | 1257 |
| `src/app/api/account/activity/route.ts` | complete byte/text scan | 591 |
| `src/app/api/account/export/route.ts` | complete byte/text scan | 894 |
| `src/app/api/account/notices/route.ts` | complete byte/text scan | 744 |
| `src/app/api/auth/[...nextauth]/route.ts` | complete byte/text scan | 74 |
| `src/app/api/billing/cancel/route.ts` | complete byte/text scan | 1025 |
| `src/app/api/billing/checkout/route.ts` | complete byte/text scan | 1017 |
| `src/app/api/billing/portal/route.ts` | complete byte/text scan | 604 |
| `src/app/api/billing/status/route.ts` | complete byte/text scan | 522 |
| `src/app/api/inngest/route.ts` | complete byte/text scan | 640 |
| `src/app/api/quota/route.ts` | complete byte/text scan | 837 |
| `src/app/api/resume/blob/route.ts` | complete byte/text scan | 3949 |
| `src/app/api/resume/download/route.ts` | complete byte/text scan | 1267 |
| `src/app/api/resume/upload/route.ts` | complete byte/text scan | 2172 |
| `src/app/api/templates/[id]/export/route.ts` | complete byte/text scan | 1407 |
| `src/app/api/webhooks/dodo/route.ts` | complete byte/text scan | 2734 |
| `src/app/appearance-control.css` | complete byte/text scan | 2630 |
| `src/app/compose-theme.css` | complete byte/text scan | 2207 |
| `src/app/contact/page.tsx` | complete byte/text scan | 1867 |
| `src/app/favicon.ico` | binary asset: .ico | 1937 |
| `src/app/fonts/InstrumentSerif-Italic.ttf` | binary asset: .ttf | 71592 |
| `src/app/fonts/InstrumentSerif-OFL.txt` | complete byte/text scan | 4405 |
| `src/app/fonts/InstrumentSerif-Regular.ttf` | binary asset: .ttf | 70012 |
| `src/app/fonts/JetBrainsMono-OFL.txt` | complete byte/text scan | 4399 |
| `src/app/fonts/JetBrainsMono-Variable.ttf` | binary asset: .ttf | 187208 |
| `src/app/fonts/PlusJakartaSans-OFL.txt` | complete byte/text scan | 4402 |
| `src/app/fonts/PlusJakartaSans-Variable.ttf` | binary asset: .ttf | 176288 |
| `src/app/fonts/README.md` | complete byte/text scan | 913 |
| `src/app/fonts/SpaceGrotesk-OFL.txt` | complete byte/text scan | 4495 |
| `src/app/fonts/SpaceGrotesk-Variable.ttf` | binary asset: .ttf | 136676 |
| `src/app/globals.css` | complete byte/text scan | 54117 |
| `src/app/help/page.tsx` | complete byte/text scan | 4351 |
| `src/app/icon.svg` | complete byte/text scan | 652 |
| `src/app/layout.tsx` | complete byte/text scan | 3690 |
| `src/app/logo.png` | binary asset: .png | 62493 |
| `src/app/page.tsx` | complete byte/text scan | 9310 |
| `src/app/preview-highlight.css` | complete byte/text scan | 5484 |
| `src/app/pricing/page.tsx` | complete byte/text scan | 4230 |
| `src/app/privacy/page.tsx` | complete byte/text scan | 17501 |
| `src/app/robots.ts` | complete byte/text scan | 435 |
| `src/app/sitemap.ts` | complete byte/text scan | 268 |
| `src/app/terms/page.tsx` | complete byte/text scan | 9101 |
| `src/app/theme-tokens.css` | complete byte/text scan | 54880 |
| `src/app/workspace-theme.css` | complete byte/text scan | 32539 |
| `src/auth.ts` | complete byte/text scan | 5877 |
| `src/components/PricingPage.module.css` | complete byte/text scan | 1478 |
| `src/components/PricingPage.tsx` | complete byte/text scan | 12462 |
| `src/components/account-menu.tsx` | complete byte/text scan | 6453 |
| `src/components/activity-marker.tsx` | complete byte/text scan | 609 |
| `src/components/admin/audit-table.tsx` | complete byte/text scan | 1886 |
| `src/components/admin/common.tsx` | complete byte/text scan | 892 |
| `src/components/admin/mutation-form.tsx` | complete byte/text scan | 2454 |
| `src/components/admin/sending-controls.tsx` | complete byte/text scan | 1190 |
| `src/components/admin/user-controls.tsx` | complete byte/text scan | 3718 |
| `src/components/admin/users-table.tsx` | complete byte/text scan | 2547 |
| `src/components/appearance-control.tsx` | complete byte/text scan | 13101 |
| `src/components/billing-controls.tsx` | complete byte/text scan | 29548 |
| `src/components/campaign-progress.tsx` | complete byte/text scan | 21640 |
| `src/components/common.tsx` | complete byte/text scan | 3684 |
| `src/components/compose.module.css` | complete byte/text scan | 652 |
| `src/components/compose.tsx` | complete byte/text scan | 42305 |
| `src/components/contacts/ContactList.tsx` | complete byte/text scan | 2345 |
| `src/components/contacts/ContactRow.tsx` | complete byte/text scan | 4335 |
| `src/components/contacts/ContactShortlistAction.tsx` | complete byte/text scan | 6148 |
| `src/components/contacts/ContactsEmptyState.tsx` | complete byte/text scan | 1215 |
| `src/components/contacts/ContactsSearch.tsx` | complete byte/text scan | 2657 |
| `src/components/contacts/ImportContacts.tsx` | complete byte/text scan | 21100 |
| `src/components/contacts/NewContactForm.tsx` | complete byte/text scan | 12308 |
| `src/components/contacts/RoleChips.tsx` | complete byte/text scan | 1785 |
| `src/components/contacts/contacts.module.css` | complete byte/text scan | 5449 |
| `src/components/date-time.tsx` | complete byte/text scan | 727 |
| `src/components/expandable-contacts-table.tsx` | complete byte/text scan | 5851 |
| `src/components/feature-lock.tsx` | complete byte/text scan | 1270 |
| `src/components/footer-wordmark.tsx` | complete byte/text scan | 15988 |
| `src/components/forms.tsx` | complete byte/text scan | 35250 |
| `src/components/gmail-status.tsx` | complete byte/text scan | 1534 |
| `src/components/help-tutorial.tsx` | complete byte/text scan | 12719 |
| `src/components/history-controls.tsx` | complete byte/text scan | 565 |
| `src/components/history/AllowancePill.tsx` | complete byte/text scan | 258 |
| `src/components/history/AllowancePillView.tsx` | complete byte/text scan | 7847 |
| `src/components/history/HistoryInfoRow.tsx` | complete byte/text scan | 2699 |
| `src/components/history/HistoryRow.tsx` | complete byte/text scan | 3099 |
| `src/components/history/HistoryStats.tsx` | complete byte/text scan | 3738 |
| `src/components/history/HistoryTable.tsx` | complete byte/text scan | 2851 |
| `src/components/history/HistoryToolbar.tsx` | complete byte/text scan | 3697 |
| `src/components/history/RowActions.tsx` | complete byte/text scan | 9146 |
| `src/components/history/StatCard.tsx` | complete byte/text scan | 1381 |
| `src/components/history/StatusBadge.tsx` | complete byte/text scan | 2109 |
| `src/components/history/StatusLegend.tsx` | complete byte/text scan | 755 |
| `src/components/history/history.module.css` | complete byte/text scan | 4448 |
| `src/components/landing/PricingSection.tsx` | complete byte/text scan | 3528 |
| `src/components/landing/batch-progress-card.tsx` | complete byte/text scan | 13720 |
| `src/components/landing/features.tsx` | complete byte/text scan | 9242 |
| `src/components/landing/footer.css` | complete byte/text scan | 1177 |
| `src/components/landing/footer.tsx` | complete byte/text scan | 8573 |
| `src/components/landing/how-it-works.tsx` | complete byte/text scan | 7506 |
| `src/components/landing/landing.css` | complete byte/text scan | 32953 |
| `src/components/landing/lower-sections.css` | complete byte/text scan | 3418 |
| `src/components/landing/navbar.tsx` | complete byte/text scan | 7346 |
| `src/components/landing/pricing-section.css` | complete byte/text scan | 952 |
| `src/components/limit-banner.module.css` | complete byte/text scan | 777 |
| `src/components/limit-banner.tsx` | complete byte/text scan | 8290 |
| `src/components/navigation.tsx` | complete byte/text scan | 4642 |
| `src/components/notifications.tsx` | complete byte/text scan | 4076 |
| `src/components/page-transition.tsx` | complete byte/text scan | 283 |
| `src/components/pagination.tsx` | complete byte/text scan | 1141 |
| `src/components/policy-page.tsx` | complete byte/text scan | 1550 |
| `src/components/preferences.tsx` | complete byte/text scan | 5667 |
| `src/components/premium-lock.tsx` | complete byte/text scan | 7687 |
| `src/components/premium-upgrade-dialog.tsx` | complete byte/text scan | 8581 |
| `src/components/premium-upgrade-provider.tsx` | complete byte/text scan | 2082 |
| `src/components/preview-highlight.tsx` | complete byte/text scan | 8839 |
| `src/components/pricing-table.tsx` | complete byte/text scan | 1206 |
| `src/components/pricing/card-spotlight.tsx` | complete byte/text scan | 742 |
| `src/components/pricing/checkout-button.tsx` | complete byte/text scan | 1942 |
| `src/components/pricing/plan-card.tsx` | complete byte/text scan | 7451 |
| `src/components/pricing/pricing-cards.tsx` | complete byte/text scan | 2954 |
| `src/components/pricing/pricing.css` | complete byte/text scan | 2016 |
| `src/components/progress-ring.tsx` | complete byte/text scan | 8386 |
| `src/components/ring-completion.tsx` | complete byte/text scan | 3741 |
| `src/components/role-allowance.tsx` | complete byte/text scan | 775 |
| `src/components/search-button.tsx` | complete byte/text scan | 573 |
| `src/components/send-checklist.tsx` | complete byte/text scan | 6115 |
| `src/components/sending-status.tsx` | complete byte/text scan | 2062 |
| `src/components/settings/DangerZone.tsx` | complete byte/text scan | 16810 |
| `src/components/settings/FollowUpReminders.tsx` | complete byte/text scan | 4750 |
| `src/components/settings/GmailConnection.tsx` | complete byte/text scan | 3301 |
| `src/components/settings/OutreachPreferences.tsx` | complete byte/text scan | 7808 |
| `src/components/settings/PlanSummary.tsx` | complete byte/text scan | 6712 |
| `src/components/settings/PremiumNotice.tsx` | complete byte/text scan | 948 |
| `src/components/settings/ResumeUpload.tsx` | complete byte/text scan | 10398 |
| `src/components/settings/RoleChip.tsx` | complete byte/text scan | 975 |
| `src/components/settings/SavedStatus.tsx` | complete byte/text scan | 690 |
| `src/components/settings/SettingsNav.tsx` | complete byte/text scan | 10708 |
| `src/components/settings/SettingsPanel.tsx` | complete byte/text scan | 2043 |
| `src/components/settings/SubscriptionMenu.tsx` | complete byte/text scan | 7361 |
| `src/components/settings/YourData.tsx` | complete byte/text scan | 1592 |
| `src/components/settings/settings.module.css` | complete byte/text scan | 3968 |
| `src/components/template-controls.tsx` | complete byte/text scan | 2045 |
| `src/components/template-preview.tsx` | complete byte/text scan | 8369 |
| `src/components/templates-loading.tsx` | complete byte/text scan | 1919 |
| `src/components/templates/FreePlanSidebar.tsx` | complete byte/text scan | 2673 |
| `src/components/templates/HighlightedText.tsx` | complete byte/text scan | 540 |
| `src/components/templates/TemplateListItem.tsx` | complete byte/text scan | 3887 |
| `src/components/templates/TemplatesFreeView.tsx` | complete byte/text scan | 6762 |
| `src/components/templates/TemplatesPremiumView.tsx` | complete byte/text scan | 7026 |
| `src/components/templates/templates.module.css` | complete byte/text scan | 3574 |
| `src/components/theme-access.tsx` | complete byte/text scan | 809 |
| `src/components/theme.tsx` | complete byte/text scan | 12234 |
| `src/components/tutorial-content.ts` | complete byte/text scan | 16139 |
| `src/components/tutorial-hint.tsx` | complete byte/text scan | 19036 |
| `src/components/ui/InfoTooltip.tsx` | complete byte/text scan | 851 |
| `src/components/ui/Tooltip.module.css` | complete byte/text scan | 2121 |
| `src/components/ui/Tooltip.tsx` | complete byte/text scan | 8371 |
| `src/components/ui/button.tsx` | complete byte/text scan | 1453 |
| `src/components/ui/dialog.tsx` | complete byte/text scan | 1004 |
| `src/components/ui/input.tsx` | complete byte/text scan | 501 |
| `src/components/ui/textarea.tsx` | complete byte/text scan | 419 |
| `src/components/upgrade-prompt.tsx` | complete byte/text scan | 925 |
| `src/components/usage/AllowanceCard.tsx` | complete byte/text scan | 8487 |
| `src/components/usage/AllowanceGauge.tsx` | complete byte/text scan | 2194 |
| `src/components/usage/HowSendingWorks.tsx` | complete byte/text scan | 3808 |
| `src/components/usage/PlanCard.tsx` | complete byte/text scan | 22846 |
| `src/components/usage/UsageContent.tsx` | complete byte/text scan | 6150 |
| `src/components/usage/usage.module.css` | complete byte/text scan | 10317 |
| `src/components/use-role-preferences.ts` | complete byte/text scan | 4260 |
| `src/components/workspace-banners.tsx` | complete byte/text scan | 8650 |
| `src/components/workspace-footer.tsx` | complete byte/text scan | 310 |
| `src/components/workspace-loading.tsx` | complete byte/text scan | 1823 |
| `src/components/workspace-quota.tsx` | complete byte/text scan | 6725 |
| `src/components/workspace-skeleton.tsx` | complete byte/text scan | 11340 |
| `src/lib/account-notices.ts` | complete byte/text scan | 853 |
| `src/lib/account.ts` | complete byte/text scan | 4938 |
| `src/lib/actions.ts` | complete byte/text scan | 12496 |
| `src/lib/activity.ts` | complete byte/text scan | 401 |
| `src/lib/admin/actions.ts` | complete byte/text scan | 927 |
| `src/lib/admin/audit.ts` | complete byte/text scan | 840 |
| `src/lib/admin/auth-freshness.ts` | complete byte/text scan | 206 |
| `src/lib/admin/auth.ts` | complete byte/text scan | 2621 |
| `src/lib/admin/contracts.ts` | complete byte/text scan | 2528 |
| `src/lib/admin/db.ts` | complete byte/text scan | 797 |
| `src/lib/admin/mutations.ts` | complete byte/text scan | 10623 |
| `src/lib/admin/page-auth.ts` | complete byte/text scan | 226 |
| `src/lib/admin/projections.ts` | complete byte/text scan | 1070 |
| `src/lib/admin/queries.ts` | complete byte/text scan | 6700 |
| `src/lib/admin/reauth.ts` | complete byte/text scan | 2572 |
| `src/lib/admin/usage.ts` | complete byte/text scan | 5791 |
| `src/lib/appearance.ts` | complete byte/text scan | 424 |
| `src/lib/billing/cancel.ts` | complete byte/text scan | 3681 |
| `src/lib/billing/checkout.ts` | complete byte/text scan | 14348 |
| `src/lib/billing/config.ts` | complete byte/text scan | 2025 |
| `src/lib/billing/deletion.ts` | complete byte/text scan | 5805 |
| `src/lib/billing/dodo.ts` | complete byte/text scan | 869 |
| `src/lib/billing/events.ts` | complete byte/text scan | 5074 |
| `src/lib/billing/http.ts` | complete byte/text scan | 2196 |
| `src/lib/billing/jobs.ts` | complete byte/text scan | 7979 |
| `src/lib/billing/lifecycle.ts` | complete byte/text scan | 22284 |
| `src/lib/billing/schedules.ts` | complete byte/text scan | 1531 |
| `src/lib/billing/status.ts` | complete byte/text scan | 3452 |
| `src/lib/billing/store.ts` | complete byte/text scan | 3097 |
| `src/lib/billing/webhooks.ts` | complete byte/text scan | 2842 |
| `src/lib/campaign-policy.ts` | complete byte/text scan | 6477 |
| `src/lib/campaign-progress-actions.ts` | complete byte/text scan | 358 |
| `src/lib/campaign-progress.ts` | complete byte/text scan | 5345 |
| `src/lib/campaigns.ts` | complete byte/text scan | 7988 |
| `src/lib/cancellation.ts` | complete byte/text scan | 3613 |
| `src/lib/capabilities.ts` | complete byte/text scan | 847 |
| `src/lib/contacts/suggestNameFromEmail.ts` | complete byte/text scan | 362 |
| `src/lib/crypto.ts` | complete byte/text scan | 3543 |
| `src/lib/db.ts` | complete byte/text scan | 934 |
| `src/lib/deletion-identity.ts` | complete byte/text scan | 834 |
| `src/lib/deletion-jobs.ts` | complete byte/text scan | 15105 |
| `src/lib/delivery-usage.ts` | complete byte/text scan | 2261 |
| `src/lib/email-html.ts` | complete byte/text scan | 2131 |
| `src/lib/email-limits.ts` | complete byte/text scan | 634 |
| `src/lib/entitlements.ts` | complete byte/text scan | 11551 |
| `src/lib/errors.ts` | complete byte/text scan | 935 |
| `src/lib/follow-ups.ts` | complete byte/text scan | 2317 |
| `src/lib/gmail-errors.ts` | complete byte/text scan | 5430 |
| `src/lib/gmail-pause.ts` | complete byte/text scan | 1788 |
| `src/lib/gmail.ts` | complete byte/text scan | 2647 |
| `src/lib/history-actions.ts` | complete byte/text scan | 869 |
| `src/lib/history.ts` | complete byte/text scan | 3832 |
| `src/lib/imports.ts` | complete byte/text scan | 3446 |
| `src/lib/inngest-client.ts` | complete byte/text scan | 933 |
| `src/lib/inngest.ts` | complete byte/text scan | 23448 |
| `src/lib/launch-actions.ts` | complete byte/text scan | 2688 |
| `src/lib/lifecycle-jobs.ts` | complete byte/text scan | 2299 |
| `src/lib/localized-price.ts` | complete byte/text scan | 752 |
| `src/lib/message-format.ts` | complete byte/text scan | 1872 |
| `src/lib/observability.ts` | complete byte/text scan | 2773 |
| `src/lib/params.ts` | complete byte/text scan | 139 |
| `src/lib/plan-features.ts` | complete byte/text scan | 2402 |
| `src/lib/plans.ts` | complete byte/text scan | 1762 |
| `src/lib/pricing.ts` | complete byte/text scan | 1018 |
| `src/lib/progress.ts` | complete byte/text scan | 1157 |
| `src/lib/public-plan-copy.ts` | complete byte/text scan | 939 |
| `src/lib/quota-snapshot.ts` | complete byte/text scan | 947 |
| `src/lib/quota-usage.ts` | complete byte/text scan | 6408 |
| `src/lib/rate-limit-jobs.ts` | complete byte/text scan | 837 |
| `src/lib/rate-limit.ts` | complete byte/text scan | 4704 |
| `src/lib/recipient-actions.ts` | complete byte/text scan | 3043 |
| `src/lib/resume-actions.ts` | complete byte/text scan | 1425 |
| `src/lib/role-store.ts` | complete byte/text scan | 1607 |
| `src/lib/roles.ts` | complete byte/text scan | 2414 |
| `src/lib/sending-pause.ts` | complete byte/text scan | 2298 |
| `src/lib/sending-status-actions.ts` | complete byte/text scan | 438 |
| `src/lib/sending-status.ts` | complete byte/text scan | 344 |
| `src/lib/session.ts` | complete byte/text scan | 798 |
| `src/lib/shortlist.ts` | complete byte/text scan | 4178 |
| `src/lib/storage.ts` | complete byte/text scan | 9738 |
| `src/lib/subscription-lifecycle.ts` | complete byte/text scan | 1443 |
| `src/lib/subscription-maintenance.ts` | complete byte/text scan | 1516 |
| `src/lib/template-policy.ts` | complete byte/text scan | 2033 |
| `src/lib/theme.ts` | complete byte/text scan | 1212 |
| `src/lib/token-rotation.ts` | complete byte/text scan | 3127 |
| `src/lib/usage-backfill.ts` | complete byte/text scan | 10252 |
| `src/lib/usage-ledger.ts` | complete byte/text scan | 28776 |
| `src/lib/usage-periods.ts` | complete byte/text scan | 3808 |
| `src/lib/usage-reconciliation.ts` | complete byte/text scan | 9176 |
| `src/lib/usage/getAllowanceState.ts` | complete byte/text scan | 454 |
| `src/lib/utils.ts` | complete byte/text scan | 168 |
| `src/lib/validation.ts` | complete byte/text scan | 2883 |
| `src/types/gmail-mime.d.ts` | complete byte/text scan | 140 |
| `src/types/next-auth.d.ts` | complete byte/text scan | 414 |
| `tests/account-auth.test.ts` | complete byte/text scan | 9597 |
| `tests/account-cleanup.test.ts` | complete byte/text scan | 2908 |
| `tests/account-deletion.db.test.ts` | complete byte/text scan | 9488 |
| `tests/account-export.test.ts` | complete byte/text scan | 1266 |
| `tests/account-notices.test.ts` | complete byte/text scan | 1491 |
| `tests/actions.db.test.ts` | complete byte/text scan | 33487 |
| `tests/activity.test.ts` | complete byte/text scan | 1886 |
| `tests/admin-auth.test.ts` | complete byte/text scan | 3423 |
| `tests/admin-migration.db.test.ts` | complete byte/text scan | 4749 |
| `tests/admin-privacy.db.test.ts` | complete byte/text scan | 6262 |
| `tests/admin-queries.test.ts` | complete byte/text scan | 2740 |
| `tests/admin-reauth.test.ts` | complete byte/text scan | 3732 |
| `tests/admin-upload.db.test.ts` | complete byte/text scan | 4707 |
| `tests/admin.db.test.ts` | complete byte/text scan | 19851 |
| `tests/appearance.test.ts` | complete byte/text scan | 3856 |
| `tests/attachment-cleanup.test.ts` | complete byte/text scan | 4524 |
| `tests/billing-status.test.ts` | complete byte/text scan | 4742 |
| `tests/blob-account.test.ts` | complete byte/text scan | 9411 |
| `tests/browser/admin.spec.ts` | complete byte/text scan | 10714 |
| `tests/browser/app.spec.ts` | complete byte/text scan | 265997 |
| `tests/browser/appearance.spec.ts` | complete byte/text scan | 21399 |
| `tests/browser/button-hover.spec.ts` | complete byte/text scan | 17537 |
| `tests/browser/compact-previews.spec.ts` | complete byte/text scan | 5320 |
| `tests/browser/dodo-billing.spec.ts` | complete byte/text scan | 38819 |
| `tests/browser/feature-gates.spec.ts` | complete byte/text scan | 103524 |
| `tests/browser/footer.spec.ts` | complete byte/text scan | 34513 |
| `tests/browser/gmail-pause.spec.ts` | complete byte/text scan | 3195 |
| `tests/browser/history-allowance.spec.ts` | complete byte/text scan | 6481 |
| `tests/browser/history.spec.ts` | complete byte/text scan | 14115 |
| `tests/browser/interaction-polish.spec.ts` | complete byte/text scan | 3511 |
| `tests/browser/landing-ring.spec.ts` | complete byte/text scan | 6599 |
| `tests/browser/landing.spec.ts` | complete byte/text scan | 25815 |
| `tests/browser/limit-banner.spec.ts` | complete byte/text scan | 7157 |
| `tests/browser/mobile-landing.spec.ts` | complete byte/text scan | 2698 |
| `tests/browser/navigation-motion.spec.ts` | complete byte/text scan | 2437 |
| `tests/browser/policies.spec.ts` | complete byte/text scan | 2924 |
| `tests/browser/premium-upgrade.spec.ts` | complete byte/text scan | 15368 |
| `tests/browser/preview-highlight.spec.ts` | complete byte/text scan | 16862 |
| `tests/browser/pricing-account.spec.ts` | complete byte/text scan | 3448 |
| `tests/browser/pricing-ribbon.spec.ts` | complete byte/text scan | 8489 |
| `tests/browser/pricing.spec.ts` | complete byte/text scan | 14162 |
| `tests/browser/primary-actions.spec.ts` | complete byte/text scan | 6732 |
| `tests/browser/progress-card-hover.spec.ts` | complete byte/text scan | 5638 |
| `tests/browser/public-visual.spec.ts` | complete byte/text scan | 2249 |
| `tests/browser/public-visual.spec.ts-snapshots/landing-purple-dark-desktop-linux.png` | binary asset: .png | 1156735 |
| `tests/browser/public-visual.spec.ts-snapshots/landing-purple-dark-mobile-linux.png` | binary asset: .png | 592655 |
| `tests/browser/public-visual.spec.ts-snapshots/landing-purple-light-desktop-linux.png` | binary asset: .png | 830353 |
| `tests/browser/public-visual.spec.ts-snapshots/landing-purple-light-mobile-linux.png` | binary asset: .png | 542176 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-purple-dark-desktop-linux.png` | binary asset: .png | 458712 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-purple-dark-mobile-linux.png` | binary asset: .png | 338180 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-purple-light-desktop-linux.png` | binary asset: .png | 450144 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-purple-light-mobile-linux.png` | binary asset: .png | 332228 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-vercel-dark-desktop-linux.png` | binary asset: .png | 420653 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-vercel-dark-mobile-linux.png` | binary asset: .png | 290534 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-vercel-light-desktop-linux.png` | binary asset: .png | 414331 |
| `tests/browser/public-visual.spec.ts-snapshots/pricing-vercel-light-mobile-linux.png` | binary asset: .png | 291821 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-purple-dark-desktop-linux.png` | binary asset: .png | 928814 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-purple-dark-mobile-linux.png` | binary asset: .png | 892508 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-purple-light-desktop-linux.png` | binary asset: .png | 916286 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-purple-light-mobile-linux.png` | binary asset: .png | 882555 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-vercel-dark-desktop-linux.png` | binary asset: .png | 851178 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-vercel-dark-mobile-linux.png` | binary asset: .png | 936176 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-vercel-light-desktop-linux.png` | binary asset: .png | 824251 |
| `tests/browser/public-visual.spec.ts-snapshots/privacy-vercel-light-mobile-linux.png` | binary asset: .png | 904011 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-purple-dark-desktop-linux.png` | binary asset: .png | 604069 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-purple-dark-mobile-linux.png` | binary asset: .png | 537196 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-purple-light-desktop-linux.png` | binary asset: .png | 596684 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-purple-light-mobile-linux.png` | binary asset: .png | 544689 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-vercel-dark-desktop-linux.png` | binary asset: .png | 564254 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-vercel-dark-mobile-linux.png` | binary asset: .png | 493090 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-vercel-light-desktop-linux.png` | binary asset: .png | 548215 |
| `tests/browser/public-visual.spec.ts-snapshots/terms-vercel-light-mobile-linux.png` | binary asset: .png | 486052 |
| `tests/browser/ring-completion.spec.ts` | complete byte/text scan | 2469 |
| `tests/browser/separators.spec.ts` | complete byte/text scan | 4544 |
| `tests/browser/settings-nav.spec.ts` | complete byte/text scan | 12391 |
| `tests/browser/support-pages.spec.ts` | complete byte/text scan | 3230 |
| `tests/browser/template-editor.spec.ts` | complete byte/text scan | 13382 |
| `tests/browser/theme-audit.spec.ts` | complete byte/text scan | 46847 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-compose-desktop-linux.png` | binary asset: .png | 271232 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-contacts-desktop-linux.png` | binary asset: .png | 273744 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-history-desktop-linux.png` | binary asset: .png | 186854 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-settings-desktop-linux.png` | binary asset: .png | 362810 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-templates-desktop-linux.png` | binary asset: .png | 252652 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-dark-usage-desktop-linux.png` | binary asset: .png | 463880 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-compose-desktop-linux.png` | binary asset: .png | 258156 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-contacts-desktop-linux.png` | binary asset: .png | 264383 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-history-desktop-linux.png` | binary asset: .png | 167919 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-settings-desktop-linux.png` | binary asset: .png | 350648 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-templates-desktop-linux.png` | binary asset: .png | 215165 |
| `tests/browser/theme-audit.spec.ts-snapshots/empty-free-purple-light-usage-desktop-linux.png` | binary asset: .png | 407296 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-compose-desktop-linux.png` | binary asset: .png | 287659 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-contacts-desktop-linux.png` | binary asset: .png | 210601 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-history-desktop-linux.png` | binary asset: .png | 270320 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-settings-desktop-linux.png` | binary asset: .png | 355512 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-templates-desktop-linux.png` | binary asset: .png | 148880 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-dark-usage-desktop-linux.png` | binary asset: .png | 287979 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-compose-desktop-linux.png` | binary asset: .png | 274711 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-contacts-desktop-linux.png` | binary asset: .png | 192725 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-history-desktop-linux.png` | binary asset: .png | 253405 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-settings-desktop-linux.png` | binary asset: .png | 343015 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-templates-desktop-linux.png` | binary asset: .png | 130722 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-purple-light-usage-desktop-linux.png` | binary asset: .png | 277980 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-compose-desktop-linux.png` | binary asset: .png | 179579 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-contacts-desktop-linux.png` | binary asset: .png | 105727 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-history-desktop-linux.png` | binary asset: .png | 176563 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-settings-desktop-linux.png` | binary asset: .png | 278092 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-templates-desktop-linux.png` | binary asset: .png | 59956 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-dark-usage-desktop-linux.png` | binary asset: .png | 225008 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-compose-desktop-linux.png` | binary asset: .png | 178899 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-contacts-desktop-linux.png` | binary asset: .png | 105468 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-history-desktop-linux.png` | binary asset: .png | 177245 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-settings-desktop-linux.png` | binary asset: .png | 275331 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-templates-desktop-linux.png` | binary asset: .png | 59722 |
| `tests/browser/theme-audit.spec.ts-snapshots/populated-premium-vercel-light-usage-desktop-linux.png` | binary asset: .png | 223345 |
| `tests/browser/tutorial-plan-updates.spec.ts` | complete byte/text scan | 4530 |
| `tests/browser/usage-plan-card.spec.ts` | complete byte/text scan | 20374 |
| `tests/campaign-progress.test.ts` | complete byte/text scan | 15299 |
| `tests/core.test.ts` | complete byte/text scan | 8947 |
| `tests/db-client.test.ts` | complete byte/text scan | 1680 |
| `tests/deletion-schedule.test.ts` | complete byte/text scan | 2303 |
| `tests/deletion-storage.test.ts` | complete byte/text scan | 2363 |
| `tests/dodo-billing.db.test.ts` | complete byte/text scan | 57240 |
| `tests/dodo-config.test.ts` | complete byte/text scan | 6712 |
| `tests/dodo-jobs.test.ts` | complete byte/text scan | 5014 |
| `tests/dodo-migration.db.test.ts` | complete byte/text scan | 7712 |
| `tests/dodo-routes.test.ts` | complete byte/text scan | 7939 |
| `tests/dodo-webhook.test.ts` | complete byte/text scan | 8150 |
| `tests/email-mime.test.ts` | complete byte/text scan | 4599 |
| `tests/entitlement-foundation.db.test.ts` | complete byte/text scan | 10512 |
| `tests/entitlements.test.ts` | complete byte/text scan | 15649 |
| `tests/feature-gates.db.test.ts` | complete byte/text scan | 28229 |
| `tests/feature-gates.test.ts` | complete byte/text scan | 4235 |
| `tests/fixtures/render-ring.ts` | complete byte/text scan | 881 |
| `tests/fixtures/usage-worker.ts` | complete byte/text scan | 3363 |
| `tests/gmail-boundary.test.ts` | complete byte/text scan | 2124 |
| `tests/gmail-errors.test.ts` | complete byte/text scan | 3640 |
| `tests/hardening-routes.test.ts` | complete byte/text scan | 3337 |
| `tests/helpers/browser-reporter.ts` | complete byte/text scan | 868 |
| `tests/helpers/dodo-fixtures.ts` | complete byte/text scan | 1411 |
| `tests/helpers/foundation-db.ts` | complete byte/text scan | 2554 |
| `tests/helpers/premium-shine.ts` | complete byte/text scan | 2303 |
| `tests/helpers/screenshot.css` | complete byte/text scan | 176 |
| `tests/helpers/system-control-browser.ts` | complete byte/text scan | 1684 |
| `tests/helpers/theme-browser.ts` | complete byte/text scan | 2503 |
| `tests/helpers/theme-preferences.ts` | complete byte/text scan | 1652 |
| `tests/history-actions.test.ts` | complete byte/text scan | 1797 |
| `tests/history-allowance-pill.test.ts` | complete byte/text scan | 4706 |
| `tests/history-migration.db.test.ts` | complete byte/text scan | 4394 |
| `tests/history-sent-time.test.ts` | complete byte/text scan | 889 |
| `tests/integration.db.test.ts` | complete byte/text scan | 34514 |
| `tests/launch.db.test.ts` | complete byte/text scan | 28510 |
| `tests/limit-banner.test.ts` | complete byte/text scan | 2395 |
| `tests/link-migration.db.test.ts` | complete byte/text scan | 5556 |
| `tests/local-data-reset.db.test.ts` | complete byte/text scan | 3309 |
| `tests/localized-price.test.ts` | complete byte/text scan | 2448 |
| `tests/maintenance.db.test.ts` | complete byte/text scan | 5449 |
| `tests/observability.test.ts` | complete byte/text scan | 2726 |
| `tests/plan-features.test.ts` | complete byte/text scan | 2750 |
| `tests/plans.test.ts` | complete byte/text scan | 1586 |
| `tests/progress.test.ts` | complete byte/text scan | 1114 |
| `tests/quota.test.ts` | complete byte/text scan | 1491 |
| `tests/rate-limit-cleanup.db.test.ts` | complete byte/text scan | 2109 |
| `tests/rate-limit.db.test.ts` | complete byte/text scan | 4288 |
| `tests/rate-limit.test.ts` | complete byte/text scan | 1931 |
| `tests/recipient-actions.db.test.ts` | complete byte/text scan | 13049 |
| `tests/redesign.test.ts` | complete byte/text scan | 2273 |
| `tests/reply-schedule.test.ts` | complete byte/text scan | 8703 |
| `tests/ring-completion.test.ts` | complete byte/text scan | 3353 |
| `tests/roles.test.ts` | complete byte/text scan | 1980 |
| `tests/send-only-migration.db.test.ts` | complete byte/text scan | 3446 |
| `tests/send-only.test.ts` | complete byte/text scan | 2006 |
| `tests/send-timing.test.ts` | complete byte/text scan | 2177 |
| `tests/sending-status.test.ts` | complete byte/text scan | 1821 |
| `tests/server-only.ts` | complete byte/text scan | 11 |
| `tests/subscription-foundation-migration.db.test.ts` | complete byte/text scan | 18447 |
| `tests/subscription-lifecycle-migration.db.test.ts` | complete byte/text scan | 2882 |
| `tests/subscription-lifecycle.db.test.ts` | complete byte/text scan | 9218 |
| `tests/subscription-lifecycle.test.ts` | complete byte/text scan | 3316 |
| `tests/subscription-maintenance.test.ts` | complete byte/text scan | 1681 |
| `tests/suggest-name-from-email.test.ts` | complete byte/text scan | 987 |
| `tests/theme-colors.test.ts` | complete byte/text scan | 1491 |
| `tests/token-encryption.test.ts` | complete byte/text scan | 2980 |
| `tests/token-rotation.db.test.ts` | complete byte/text scan | 5932 |
| `tests/tutorial-content.test.ts` | complete byte/text scan | 7005 |
| `tests/upload.test.ts` | complete byte/text scan | 1574 |
| `tests/usage-allowance-state.test.ts` | complete byte/text scan | 797 |
| `tests/usage-backfill.db.test.ts` | complete byte/text scan | 5015 |
| `tests/usage-campaigns.db.test.ts` | complete byte/text scan | 8041 |
| `tests/usage-contact-save.db.test.ts` | complete byte/text scan | 7848 |
| `tests/usage-history.db.test.ts` | complete byte/text scan | 3378 |
| `tests/usage-ledger-migration.db.test.ts` | complete byte/text scan | 8744 |
| `tests/usage-ledger.db.test.ts` | complete byte/text scan | 31461 |
| `tests/usage-reconciliation.db.test.ts` | complete byte/text scan | 6737 |
| `tests/usage-reporting.db.test.ts` | complete byte/text scan | 2688 |
| `tests/usage-rollout.db.test.ts` | complete byte/text scan | 6402 |
| `tests/usage-worker.db.test.ts` | complete byte/text scan | 21026 |
| `tsconfig.json` | complete byte/text scan | 796 |
| `vitest.config.mts` | complete byte/text scan | 284 |

## Targeted semantic review and content coverage

Every inventoried first-party text file was read by the snapshot scanner. This is automated reading, not a claim of exhaustive human-style analysis. Targeted semantic review covered auth, sessions, crypto/rotation, campaign admission, Gmail/MIME, worker delivery/registration, usage ledger/periods/policy, storage/Blob activation, account export/deletion jobs, all 15 API handlers, billing configuration/binding/checkout/status/schedules, admin auth/mutations and the supporting rollout documents. The chapter references identify exact excerpt evidence; `content/contracts.json` identifies 30 manually reviewed contracts. All other function records remain structural navigation aids, not manually established behavior.

The supplied plan's exhaustive manual review/explanation of every function is not represented as completed. Full text is safely navigable, model/migration inventories are complete, and the reviewed critical path is documented. Personal author experiences and original six-walkthrough wording are unavailable.

Additional contradictions found during implementation:

- `subscription-maintenance.ts` says each-minute scheduling; the actual registered billing schedule calls it every four hours.
- `docs/admin-panel.md` describes the old successful-mutation limiter; current mutations admit general rolling budgets before parsing/business work and admissions survive rollback.
- `createBillingPortal` accepts only `test.customer.dodopayments.com`, even though configuration/checkout accept live mode. Live response impact requires provider verification.
- Deletion content/storage purge proceeds independently of billing after the drain; it must not be described as waiting indefinitely for billing completion.

## Verification and user steering

Initial type checking, content validation, static export, nine evidence/compiler tests and 2,043 exported internal link checks passed. Browser tests failed to launch because matching Chromium was not installed. The user then requested no further testing; functional browser checks were stopped and are not claimed as passed. The final build regenerates the deliverable after reviewed content/UI handoff changes. Source hashes/Git status are compared separately to establish repository preservation.

## Visual refresh handoff

Updated the handbook interface to an AMOLED black/white/yellow dark appearance and a warm white/gold light appearance. Reused local font assets with their licenses; the Mailloop checkout is read-only input. Added shared theme state, pre-paint appearance selection, theme-aware strict Mermaid, dual-theme build highlighting, larger typography/spacing and reduced-motion-aware interaction animation. Teaching content, source snapshots, citations, routes and progress keys were retained. At the user's request no automated tests or browser checks were run for this visual refresh. The static export is regenerated as packaging.
