# Esraa Ebeid Portfolio — Implementation Plan

## Product direction

A concise, responsive personal portfolio for Esraa Ebeid, an AI Engineering student at Tanta University graduating in 2027. Its hierarchy introduces her by name, places the existing photo beside her short story, shows what she has built, explains her interests, and invites project and freelance conversations. Keep the supplied facts and text; do not add location, medical sources, metrics, or unsupported project claims.

## Current approved design system

- **Design movement:** Dark editorial developer field-notes: a calm deep blue-green canvas with a personal, type-led hero.
- **Core principles:** Lead with the person, follow with the engineering context and story; show projects as evidence; keep copy personal and factual; make the page comfortable on touch screens.
- **Color philosophy:** Keep the page background #213843 and the hero panel #468D8B. Use the existing #FEAF76 title accent, #A0D2EB section and interface accents, #E5EAF5 text, with #D0BDF4 and #8458B3 as restrained supporting colors.
- **Layout paradigm:** Preserve the editorial single-page layout, name-first hero with photo beside the copy, horizontal left-to-right project rail, short About section, three personal interest cards, and contact links. Keep the existing top navigation with the short name “Esraa.”
- **Signature elements:** The first-screen full-name identity, square photo frame, scrollable project case studies, and three explanatory interest cards. No logo or custom favicon.
- **Interaction philosophy:** Keep simple anchor navigation, working external links, visible keyboard focus and horizontally scrollable project cards.
- **Animation:** No decorative background animation. Keep only brief interaction transitions and respect reduced-motion preferences.
- **Typography system:** Use only DM Sans and Lora from Google Fonts. DM Sans carries body, UI and small labels; Lora carries editorial section headings, project titles and the GenAI phrase. Preserve readable size and contrast.
- **Brand essence:** A student engineer showing her path into useful GenAI systems; **curious, grounded, direct**.
- **Brand voice:** Specific, first-person and human. Keep “Building my way into GenAI.” and the supplied personal questions and project descriptions.
- **Wordmark & logo:** No new logo. The navbar keeps “Esraa”; the hero carries the full name “ESRAA EBEID.”
- **Signature brand color:** #213843, the deep blue-green canvas.

## Implementation approach

Continue the existing static Vite + React + TypeScript site. Put profile, About copy, focus topics, interest-card copy, project case studies, project links and contact destinations in `src/data/portfolio.ts`. Keep `src/App.tsx` responsible for semantic page order and navigation; repeated project/contact cards continue using their existing components. Load DM Sans and Lora through Google Fonts, apply them across all page text, and preserve the existing responsive hero/photo and horizontal project rail. Update the document title, description and single-route manifest to the full name. No server, database, or other new dependency is required.

## Project structure

- `src/data/portfolio.ts` — full/short name, hero/about text, four project stories and tools, focus terms, personal-interest cards, repositories and contacts.
- `src/components/` — existing reusable project case-study and contact-link components.
- `src/App.tsx` — navbar, name-first hero, work, about, interests, contact and footer.
- `src/styles.css` — two-font system, existing dark palette, responsive layout and accessibility details.
- `index.html` — page metadata and Google Fonts preconnect/stylesheet links.
- `public/manus-routes.json` — title for the single `/` page.
- `public/images/` — existing user-supplied square photo and optional project images.
- `README.md` — exact editing paths for text, fonts and images.

## Approved copy and content boundaries

Use the supplied attachment wording for the name-first hero, About story, interests, contact copy, and all four project case studies and tool lists. MedSeek explicitly must not list any particular medical source. Keep current GitHub destinations unchanged, and do not fabricate contact URLs or missing project repository URLs.

## Hosting status

Keep the current private GitHub source and static/Vercel-ready project. This update is a content/design checkpoint only; it does not enable GitHub Pages or publish the website.
