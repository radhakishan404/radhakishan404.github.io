# Design — Radhakishan Jangid Portfolio

A locked design system for the portfolio. Page work should extend this system
instead of regenerating a different visual language per route.

## Genre
Modern editorial portfolio with a product-engineering voice.

## Macrostructure Family
- Marketing pages: editorial hero with image-led proof, followed by selected work, working method, and recent writing.
- Content pages: long document typography with strong metadata, readable rhythm, and restrained media.
- Index pages: dense but calm grids with clear filtering, direct links, and concise project context.

## Theme
- `--color-paper`: deep graphite for dark mode, porcelain for light mode.
- `--color-paper-2`: slightly raised surface.
- `--color-ink`: high-contrast readable text.
- `--color-ink-2`: muted explanatory text.
- `--color-rule`: quiet separators.
- `--color-accent`: warm vermilion used sparingly for action and emphasis.
- `--color-focus`: electric blue focus state.

## Typography
- Display: Inter, 700-900.
- Body: Inter, 400-600.
- Mono: JetBrains Mono, 400-700, used only for metadata and code-flavored labels.
- Display tracking: 0.
- Display type: large, tight, and wrapped deliberately on mobile.

## Spacing
Use a 4-point scale through named CSS variables. Page sections breathe; repeated
items stay compact enough to scan.

## Motion
- Reveal pattern: short fade and rise.
- Hero image: slow layered rotation, disabled for reduced motion.
- Hover: small translate, border color, and image lift only.
- Reduced motion: opacity-only and near-instant transitions.

## CTA Voice
- Primary CTA: solid accent, short verb-led copy.
- Secondary CTA: quiet bordered action.
- Avoid bracketed terminal commands for primary navigation.

## What Pages Must Share
- Header wordmark and navigation rhythm.
- Accent placement below 5 percent of the viewport.
- Inter + JetBrains Mono pairing.
- Section headings with small mono eyebrow plus clear human heading.
- 8px or smaller radii for repeated cards and controls.

## What Pages May Differ On
- Hero composition.
- Grid density.
- Whether images lead or support the page.
- Content page typography rhythm.
