# BuildWise – Corporate Landing Page for a Construction Company

This document is an executable specification (ExecPlan) – a detailed design document that a coding agent can follow to build a working website. Follow this specification step by step, updating the `Progress` section as you go.

## Purpose / Big Picture

After completion, the user will have a fully responsive corporate website for the construction company BuildWise. The site will consist of seven key screens, including a Hero section, project carousels, a testimonial carousel, a feedback form, and an accordion FAQ section. The main values are pixel‑perfect adherence to the mockup and correct behaviour on all devices thanks to fluid layout(mockup_1920.png - max, mockup_425.png - min).


## Current State (as of refinement start)
- Assume base HTML/CSS/JS exists at `Portfolio3/`.
- Missing or incomplete components: (to be filled by first audit)
- Use `codex "audit index.html, style.css, script.js against PLANS.md milestones"` to generate checklist.

## Progress

- [ ] (Date) Project initialisation: folder structure created, fonts linked, CSS variables and base styles written.
- [ ] (Date) UI kit implemented: buttons (Primary, Secondary, Round, with/without icons), input fields (Input, Error), accordion component.
- [ ] (Date) Cards implemented: with images (Grid, object‑fit), without images (Flex).
- [ ] (Date) Header and Footer assembled: semantic markup, navigation, `tel:` link, social icons.
- [ ] (Date) Screen 1 (Hero): absolute positioning of background image on top of content.
- [ ] (Date) Screen 2 (About Us): two‑column layout (Flex/Grid), text and x2 image.
- [ ] (Date) Screen 3 (Project Carousel): custom JavaScript carousel without libraries.
- [ ] (Date) Screen 4 (Services Grid): four cards using CSS Grid.
- [ ] (Date) Screen 5 (Testimonials): second carousel, full‑width.
- [ ] (Date) Screen 6 (FAQ): accordion (dropdown) lists.
- [ ] (Date) Screen 7 (Form): phone number validation.
- [ ] (Date) Responsiveness: media queries for 425px, 780px, 1024px, 1920px.
- [ ] (Date) Final check: pixel‑perfect, no horizontal scroll.

## Surprises & Discoveries

- *Expectation:* `font-size: 16px` is sufficient.
- *Reality:* For pixel‑perfect accuracy on large screens, precise `rem` values relative to the root font size may be needed.
- *Conclusion:* Set `html { font-size: 62.5%; }` to easily convert pixels to rem.

## Decision Log

- *Decision:* Use the “UI‑kit first” approach (implement components before assembling pages).
- *Rationale:* Speeds up page assembly and ensures style consistency.

## Outcomes & Retrospective

*(To be filled after completion)*

## Context and Orientation

- **Project structure:**
    - `index.html` – main page.
    - `style.css` – all styles.
    - `script.js` – interactivity (carousels, accordion, validation).
    - `img/` – images (imported at 2x size), icons (`.svg`), fonts.
- **Font:** Outfit, loaded via Google Fonts.
- **Reset:** `* { margin: 0; padding: 0; box-sizing: border-box; }`.
- **CSS variables:** Define inside `:root` for all mockup colours (e.g. `--color-primary: #...`, `--gray-400: #...`).

## Plan of Work

- Use the progress list updated following the audit.