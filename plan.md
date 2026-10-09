# Esraa Ebeid Portfolio — Implementation Plan

## Product direction

A concise, responsive personal portfolio for Esraa Ebeid, an AI Engineering student at Tanta University graduating in 2027. Its hierarchy introduces her by name, places the existing photo beside her short story, shows what she has built, explains her interests, and invites project and freelance conversations. Keep the supplied facts and text; do not add location, medical sources, metrics, or unsupported project claims.

## Current approved design system

- **Design movement:** Dark editorial developer field-notes: a calm deep blue-green canvas with personal typography and lively natural accents.
- **Core principles:** Lead with the person, follow with engineering context and story; show projects as evidence; keep copy personal and factual; make the page comfortable on touch screens.
- **Color philosophy:** Keep the page background #213843 and light text #E5EAF5. Apply Grassy Green #9BC400 to links, status marks and small highlights; Misty Mountain Pink #F9C5BD to expressive editorial emphasis; use Purple Mountains Majesty #8076A3 for focus outlines and fine rules, and Factory Stone Purple #7C677F as subtle surface tints. The purple tones are decorative, not small body text, to preserve contrast.
- **Layout paradigm:** Editorial single-page layout, name-first hero with photo beside the copy, horizontal left-to-right project rail, short About section, three personal interest cards, and contact links. Keep “Esraa” in the top navigation.
- **Signature elements:** First-screen full-name identity, square photo frame, scrollable project case studies, and three interest cards. No logo or custom favicon.
- **Interaction philosophy:** Simple anchor navigation, working external links, visible keyboard focus, and horizontally scrollable project cards.
- **Animation:** No decorative background animation. Use only brief interaction transitions and honor reduced-motion preferences.
- **Typography system:** Use DM Sans and Lora from Google Fonts. DM Sans carries body, UI and small labels; Lora carries editorial headings, project titles and emphasized phrases.
- **Brand essence:** A student engineer showing her path into useful GenAI systems; **curious, grounded, direct**.
- **Brand voice:** Specific, first-person and human. Keep “Building my way into GenAI.” and the supplied personal questions and project descriptions.
- **Wordmark & logo:** No new logo. The navbar keeps “Esraa”; the hero carries “ESRAA EBEID.”
- **Signature brand color:** #213843, the deep blue-green canvas.

## Implementation approach

Continue the existing static Vite + React + TypeScript site. Keep profile, About copy, focus topics, interest-card copy, project case studies, project links and contact destinations in `src/data/portfolio.ts`. Keep `src/App.tsx` responsible for semantic page order and navigation; repeated project/contact cards continue using their existing components. Keep the requested dark canvas while assigning each supplied accent a deliberate, legible role. The provided GitHub profile is `https://github.com/basicesraa`. The URL given for LinkedIn also uses `github.com`, so keep LinkedIn as a placeholder until a real LinkedIn URL is supplied. Normalize `+20 01069804106` to digits-only `201069804106` for the `https://wa.me/` destination, omitting the domestic trunk zero after the country code. Do not publish the website as part of this change.

## Project structure

- `src/data/portfolio.ts` — full/short name, hero/About text, four project stories/tools, focus topics, interest cards, repositories and contacts.
- `src/components/` — reusable project case-study and contact-link components.
- `src/App.tsx` — navbar, name-first hero, work, about, interests, contact and footer.
- `src/styles.css` — DM Sans/Lora system, palette tokens, responsive layout and accessibility details.
- `index.html` — page metadata and Google Fonts preconnect/stylesheet links.
- `public/manus-routes.json` — title for the single `/` page.
- `public/images/` — existing user-supplied square photo and optional project images.
- `README.md` — exact editing paths for text, fonts, palette, contacts and images.

## Approved copy and content boundaries

Use the user's supplied structure and wording for the hero, About story, interests, contact copy, and all four project case studies and tool lists. For MedSeek, do not list particular medical sources. Preserve the supplied project repository destinations; keep unknown repository destinations as placeholders.

## Hosting status

Keep the current private GitHub source and static/Vercel-ready project. This is a preview/checkpoint update only; do not enable GitHub Pages or publish the website.
