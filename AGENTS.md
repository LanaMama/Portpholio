# AGENTS.md – Instructions for Codex

## ExecPlan
When implementing complex features or significant refactoring, use an ExecPlan (as described in `.agent/PLANS.md`) from design to deployment.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries)
- Google Fonts (Outfit typeface)
- JavaScript
- SVG icons
- https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js

## Layout Rules
1. Use semantic tags: `<header>`, `<nav>`, `<footer>`, `<form>`.
2. Follow pixel‑perfect principles by comparing against the mockup.
3. Use relative units (%, vw, rem) for structural blocks.
4. Extract colors into CSS variables.
5. Import all icons as `.svg`.
6. For images, use `<picture>` or `srcset` for retina screens (x2).

## Dora (refinement rules) mode
- Don't rewrite everything from scratch.
- Always inspect existing code before changing.
- Use `codex "describe file <path>"` to get a summary.
- Prefer editing specific lines: `codex "in <file> at lines <start>-<end> replace ..."`
- Never generate full files – only diffs or targeted modifications.
- Use MCP Playwright only for visual verification (e.g. `mcp_playwright_snapshot http://127.0.0.1:5500/Portfolio3/index.html`).