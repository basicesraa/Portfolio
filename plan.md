# Esraa Portfolio — Implementation Plan

## Product direction

A concise, responsive personal portfolio for Esraa, an AI Engineering student at Tanta University (graduating 2027), aimed at freelance clients and recruiters. The site will foreground concrete project work and learning direction without presenting her as a senior engineer. All absent personal links and undocumented project specifics remain clearly marked placeholders.

## Approved design system

- **Design movement:** Editorial developer field-notes — the structure of a well-composed research notebook, not a SaaS landing page.
- **Core principles:** Evidence before claims; quiet hierarchy; compact, readable writing; consistent small details that make each case study easy to scan.
- **Color philosophy:** Use #E5EAF5 as the calm, unified page canvas and #494D5F for high-contrast text and anchored panels. #A0D2EB signals the engineering / retrieval thread; #D0BDF4 adds a soft secondary note; #8458B3 is reserved for high-value links and focus states. Accents stay restrained; no heavy gradients.
- **Layout paradigm:** An editorial, asymmetric single-page composition with a compact top index, a strong introductory spread, and numbered case-study rows rather than a centered marketing template. Mobile collapses these rows into a clear reading sequence.
- **Signature elements:** A small custom geometric `e/` wordmark; fine notebook rules and section indices; a compact “retrieval → context → response” motif, clearly illustrative rather than a fabricated system diagram.
- **Interaction philosophy:** Straightforward anchor navigation, visible keyboard focus, descriptive external links, and no interaction that hides core content.
- **Animation:** No decorative or large-background animation. Use only short color/underline transitions on interactive controls; honor reduced-motion preferences.
- **Typography system:** System sans (Arial/system-ui) for readable body text, Georgia for a few expressive editorial headings, and a system monospace face for labels, indices, and metadata. Keep body copy short and comfortably sized.
- **Brand essence:** A growing AI engineering portfolio that lets clients and recruiters see the work and direction clearly; **curious, grounded, direct**.
- **Brand voice:** Short, first-person, plain-spoken lines. Examples: “I’m Esraa, an AI Engineering student in Tanta.” “I’m building my way into GenAI, one useful system at a time.”
- **Wordmark & logo:** A compact `e/` monogram drawn with simple geometric strokes beside Esraa’s name, not a stock icon.
- **Signature brand color:** #8458B3, used sparingly for actions and emphasis.

## Implementation approach

Use a static Vite + React + TypeScript site, suitable for Vercel’s standard Vite deployment and not dependent on a server or database. Store all project content, tools, repository URLs, and contact URL placeholders in `src/data/portfolio.ts`; render repeated projects and links from that source. Keep presentational components small and semantic, and use a single responsive stylesheet for the visual system. Do not fabricate project details, tools, results, contact links, or credentials.

## Project structure

- `src/data/portfolio.ts` — editable profile, project titles/descriptions/tools/repository states, and contact destinations.
- `src/components/` — reusable header/navigation, project case-study, and contact-link UI.
- `src/App.tsx` — page composition and semantic section order.
- `src/styles.css` — palette tokens, typography, layout, accessible states, and mobile breakpoints.
- `public/manus-routes.json` — route manifest for the single `/` page.
- Root Vite/TypeScript/package configuration — development and static production build, with Vercel-compatible output.

## Content rules

MedSeek and Egypt Law RAG descriptions will use only the facts supplied: the former is an infant-health assistant using RAG; the latter is an Arabic legal assistant. Because no implementation specifics or tool lists were supplied, those fields will openly state that details/tools need to be added. Budgetly and AG News Intelligence Pipeline will retain their supplied titles but use editable content placeholders until their summaries and tool lists are provided. MedSeek receives the featured visual treatment. Its repository and the Egypt Law RAG repository use the supplied links; unknown GitHub and personal contact URLs remain blank/placeholder entries, never fabricated destinations.
