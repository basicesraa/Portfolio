# Esraa Portfolio — Implementation Plan

## Product direction

A concise, responsive personal portfolio for Esraa, an AI Engineering student at Tanta University (graduating 2027). It foregrounds project work and learning direction without presenting her as a senior engineer. Absent contact links and undocumented project specifics remain clearly marked placeholders. Do not display a location.

## Current approved design system

- **Design movement:** Dark editorial developer field-notes: research-notebook hierarchy on a deep slate canvas, not a SaaS landing page.
- **Core principles:** Evidence before claims; short, readable writing; quiet visual hierarchy; practical controls that are easy to use on touch screens.
- **Color philosophy:** Set the page and hero background exactly to #494D5F. Use #A0D2EB more visibly for section marks, links, borders, and image accents; use #E5EAF5 for readable text. Keep #D0BDF4 and #8458B3 secondary. Avoid alternate slate panels, large light backgrounds, and gradients.
- **Layout paradigm:** Asymmetric single-page editorial composition with a compact text-only header, portrait-led hero, horizontal left-to-right scrolling project rail, and a short background/contact sequence beneath it. The project rail supports touch/trackpad scrolling and left/right keyboard scrolling.
- **Signature elements:** Fine notebook rules and section indices; a square portrait frame; horizontally snap-aligned case-study cards with optional project-image slots. Do not add a logo, monogram, or custom favicon.
- **Interaction philosophy:** Straightforward anchor navigation, visible keyboard focus, descriptive external links, and visible horizontal-scroll affordance. Images are optional and no core project information is hidden behind interaction.
- **Animation:** No decorative or large-background animation. Use only short color/underline and card-hover transitions; honor reduced-motion preferences.
- **Typography system:** DM Sans for body and interface text, Georgia for a few editorial headings, and DM Mono for labels, indices, and metadata. Keep body copy short and comfortably sized.
- **Brand essence:** A growing AI Engineering portfolio that lets readers see the work and learning direction clearly; **curious, grounded, direct**.
- **Brand voice:** Short, first-person, plain-spoken lines. Examples: “I’m building my way into GenAI.” “Still learning, still making things.”
- **Wordmark & logo:** No logo or custom wordmark. Use Esraa's name as plain text in navigation only.
- **Signature brand color:** #494D5F, the dark slate canvas.

## Implementation approach

Use the existing static Vite + React + TypeScript site, suitable for Vercel or static hosting and not dependent on a server or database. Keep editable profile, project, image, tool, repository, and contact data in `src/data/portfolio.ts`; render repeated cards and links from that source. Make project images optional by adding `imageSrc` and `imageAlt` only when an image exists. Use one responsive stylesheet for dark colors, square portrait crop, horizontal project scrolling, keyboard access, and mobile breakpoints. Remove visible logo and favicon treatments. Preserve the supplied photo at `public/images/esraa-portrait.webp`; document how the user can replace it. Do not fabricate project details, tools, results, contact links, or credentials.

## Project structure

- `src/data/portfolio.ts` — editable profile, project descriptions/image paths/repository states, focus topics, and contact destinations.
- `src/components/` — reusable project case-study and contact-link UI.
- `src/App.tsx` — single-page composition, section headings, navigation, and keyboard-enabled project rail.
- `src/styles.css` — dark palette tokens, square image frame, horizontal card rail, accessibility states, and responsive breakpoints.
- `public/images/` — replaceable profile photo; optional project images go in `public/images/projects/`.
- `public/manus-routes.json` — route manifest for the single `/` page.
- Root Vite/TypeScript/package configuration — development and static production builds.
- `README.md` — exact file paths and step-by-step text/image editing instructions.

## Content rules

MedSeek and Egypt Law RAG use only the facts supplied: the former is an infant-health assistant using RAG; the latter is an Arabic legal assistant. Since implementation details and tools were not supplied, those fields stay explicit placeholders. Budgetly and AG News Intelligence Pipeline keep their titles and editable placeholders. Use the supplied repository links, preserve unknown GitHub and personal contact URLs as placeholders, and do not add a location.

## Portrait and project images

The user-supplied portrait stays in the hero, displayed in a 1:1 square frame. Keep the existing image at `public/images/esraa-portrait.webp`; the README explains how to replace it or change `photoSrc`. Project cards show optional images only when a user adds a file under `public/images/projects/` and its path/alt text to the matching object in `src/data/portfolio.ts`.

## Hosting status

The repository is private. GitHub's current Pages settings say to upgrade or make the repository public; do not change visibility without a separate decision. Vercel's project config remains available for a personal, non-commercial deployment using `pnpm run build` and `dist/`.
