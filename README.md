# MailLoop handbook

Use the floating **Pen** control to draw temporary notes over the handbook and
source. Choose a color, thickness and opacity; undo or clear strokes as needed.
Press Escape to stop drawing. Ink stays aligned while scrolling and is discarded
when leaving or refreshing the page; it is never saved with learning progress.

## Cloudflare Workers deployment

This Next.js project uses `output: 'export'`. `npm run build` generates the
complete static site in `out/`, including a custom 404 page. Deploy those files
directly with Workers Static Assets; no OpenNext adapter is needed.

In **handbook-ml → Settings → Build**, use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | Repository root |

Remove any OpenNext build or deploy command configured in the dashboard, such as
`npx opennextjs-cloudflare build`. The checked-in `wrangler.toml` selects the
existing `handbook-ml` Worker and uploads `out/`, preserves trailing slashes,
and serves the exported 404 page for unknown URLs.

After pushing this configuration, retry the deployment. For a manual deployment
from an authenticated machine:

```sh
npm ci
npm run build
npx wrangler deploy
```

For Cloudflare Pages instead, use `npm run build` as the build command and `out`
as the output directory, without a Worker deploy command.
