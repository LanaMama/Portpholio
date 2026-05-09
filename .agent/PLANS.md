# BuildWise – Corporate Landing Page for a Construction Company

This document is an executable specification (ExecPlan) – a detailed design document that a coding agent can follow to build a working website. Follow this specification step by step, updating the `Progress` section as you go.

## Purpose / Big Picture

After completion, the user will have a fully responsive corporate website for the construction company BuildWise. The site will consist of seven key screens, including a Hero section, project carousels, a testimonial carousel, a feedback form, and an accordion FAQ section. The main values are pixel‑perfect adherence to the mockup and correct behaviour on all devices thanks to fluid layout(mockup_1920.png - max, mockup_425.png - min).


## Current State (as of refinement start)
- Base HTML/CSS/JS exists at `Portfolio3/`, but the implementation is mid-refinement rather than starting from scratch.
- Already present in the current build: hero, about, portfolio carousel, certifications grid, trusted partners carousel, FAQ accordion, feedback form, and footer structure.
- Still incomplete or risky: legacy/mobile-menu JS remains partially unused, testimonials are not implemented as a distinct section, and responsive/pixel-perfect tuning is not finished.
- Audit finding: the stylesheet had duplicated breakpoint logic, including a nested `@media (max-width: 1024px)` block inside the 768px section. This has been removed, but the remaining responsive rules still need consolidation.
- Audit finding: tablet behavior has now been consolidated into the top-level `@media (max-width: 1024px)` block. The nested tablet rules were removed from the mobile block to prevent conflicting overrides.
- Use the audited markup/styles/scripts as the source of truth for progress updates.

## Progress

- [x] 2026-05-09 18:54 Project initialisation: folder structure created, fonts linked, CSS variables and base styles written.
- [x] 2026-05-09 Audit update: current build reviewed against mockups and local render; progress corrected to match actual sections and remaining gaps.
- [x] 2026-05-09 Breakpoint consolidation: removed nested tablet rules and moved tablet-specific overrides into the top-level `@media (max-width: 1024px)` block.
- [ ] 2026-05-09 UI kit implemented: buttons (Primary, Secondary, Round, with/without icons), input fields (Input, Error), accordion component.
- [ ] 2026-05-09 Cards implemented: image cards are present across portfolio/certifications/partners, but card variants and shared system still need consolidation.
- [ ] 2026-05-09 Header and Footer assembled: semantic markup and `tel:` link are present; footer/social icon polish still needs verification.
- [x] 2026-05-09 Screen 1 (Hero): background image/gradient layered over content and rendered in the current page.
- [x] 2026-05-09 Screen 2 (About Us): two-column layout with text block and image is present.
- [x] 2026-05-09 Screen 3 (Project Carousel): carousel implemented and rendered in the current page.
- [x] 2026-05-09 Screen 4 (Certifications Grid): six certification cards rendered with image/icon treatment.
- [x] 2026-05-09 Screen 5 (Trusted Partners Carousel): second carousel rendered with pagination.
- [x] 2026-05-09 Screen 6 (FAQ): accordion lists render and expand/collapse via checkbox CSS.
- [x] 2026-05-09 Screen 7 (Form): feedback form is present; phone validation still needs code-level verification.
- [ ] 2026-05-09 Responsiveness: 425px-specific overrides added; still need verification against the 425/780/1024/1920 mockups and any remaining section-level polish.
- [ ] 2026-05-09 Responsiveness: 425px slider widths tightened for portfolio/certifications/partners; verification still pending.
- [ ] 2026-05-09 Responsiveness: Swiper wrapper/slide widths normalized for 425px portfolio and partners; verification pending.
- [ ] 2026-05-09 Responsiveness: desktop width constraint removed from portfolio list; mobile Swiper wrappers set to flex on 425px.
- [ ] 2026-05-09 JS update: Swiper breakpoints adjusted for portfolio and partners across mobile/tablet/desktop.
- [ ] 2026-05-09 Responsiveness: mobile portfolio/partners cards tightened via aspect-ratio adjustments.
- [x] 2026-05-09 Final responsive pass: verified 425px and 1024px behavior after Swiper/CSS adjustments; layout no longer overflows horizontally.
- [ ] 2026-05-09 Final check: pixel-perfect tuning, asset cleanup, and no horizontal scroll.

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
