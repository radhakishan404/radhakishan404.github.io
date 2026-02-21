# radhakishan404.github.io

Portfolio website for Radhakishan Jangid.

## Stack

- React 18
- Vite 6
- Vitest + Testing Library
- GitHub Pages (`gh-pages`)

## Scripts

- `npm run dev`: start local development server
- `npm run build`: create production bundle in `dist/`
- `npm run preview`: preview production build locally
- `npm test`: run test suite
- `npm run deploy`: build + publish to `gh-pages` branch

## Security

This repo was migrated from legacy CRA tooling to modern Vite tooling to remove outdated transitive dependencies.

Current status (as of latest update):
- `npm audit`: `0 vulnerabilities`

## Deployment

GitHub Pages source should be set to:
- Branch: `gh-pages`
- Path: `/`

Then run:

```bash
npm run deploy
```
