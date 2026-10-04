# Esraa — AI Engineering Portfolio

A static, mobile-friendly React + TypeScript portfolio. The site does not need a server or database.

## Edit the content

Project titles, summaries, tools, GitHub repository URLs, profile details, and contact destinations live in **`src/data/portfolio.ts`**. Update that one file to maintain the content. Leave a repository URL as `null` while it is unknown; add a WhatsApp phone number as country code and digits only (no `+`, spaces, or punctuation). Contact actions become active automatically after a valid destination is supplied.

The descriptions currently identify only the project information provided so far. Replace each “Add …” note with confirmed details and tools when available—do not leave claims that you cannot verify.

## Run locally

Requires Node.js 22 or later and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

Create the production site with:

```sh
pnpm run build
```

Vite writes the deployable static files to `dist/`.

## Deploy to Vercel

Import this repository into Vercel and keep the root directory at the project root. `vercel.json` selects Vite, `pnpm run build`, and `dist` as the output directory. No environment variables are required.

## Replace the profile photo

The current portrait is `public/images/esraa-portrait.webp`. To change it, replace that asset and update `photoSrc` and `photoAlt` under `profile` in `src/data/portfolio.ts`.
