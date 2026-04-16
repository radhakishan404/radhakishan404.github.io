## Project agent rules (Codex / Cursor / Claude)

### Canonical domain

- **Canonical domain is `https://radhakishan404.is-a.dev`**
- Do **not** introduce absolute URLs pointing to `radhakishan404.github.io`.
- Prefer deriving canonical host from `public/CNAME` (fallback to `package.json#homepage`).

### SEO + sitemap checklist (required before deploy)

- **Search for hardcoded `radhakishan404.github.io`** in `src/` and `scripts/`.
- Run `npm run build` and verify:
  - `build/sitemap.xml` `<loc>` values use `https://radhakishan404.is-a.dev/...`
  - prerendered pages exist for sitemap routes (`build/<route>/index.html`)
  - prerendered HTML includes: title, meta description, canonical, OG/Twitter tags, and JSON‑LD
- Ensure `public/robots.txt` uses `Sitemap: /sitemap.xml` (or otherwise matches canonical domain).

