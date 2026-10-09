# Esraa Ebeid — AI Engineering Portfolio

A responsive Vite + React portfolio. Main copy and project details live in `src/data/portfolio.ts`; page headings and fixed labels live in `src/App.tsx`.

## Edit the text

Open **`src/data/portfolio.ts`**.

- Full hero name: `portfolio.profile.name`; the navbar uses `portfolio.profile.shortName`.
- Hero story: `portfolio.profile.introduction`.
- About section: `portfolio.profile.about.intro`, `.question`, and `.direction`; graduation year is `portfolio.profile.graduation`.
- “Currently exploring” topics: the `portfolio.focus` array.
- “What I’m interested in” cards: the `portfolio.interests` array; each card has `title` and `description`.
- Project case studies: edit the matching object in `portfolio.projects`. The fields are `title`, `category`, `problem`, `built`, `howItWorks`, `tools`, and `repoUrl`.
- Contact destinations: `portfolio.contact.linkedinUrl`, `whatsappNumber`, and `githubProfileUrl`. For WhatsApp, enter the country code and phone number as digits only, without `+`, spaces, or the domestic leading zero.

The GitHub profile field is set to `https://github.com/basicesraa`. The number is configured for a direct `https://wa.me/` link. The URL submitted under “LinkedIn” was also a `github.com` URL, so it was not assigned to LinkedIn; add the actual LinkedIn profile URL to `linkedinUrl` when ready.

To change visible page headings or section order, edit **`src/App.tsx`**. Project-card field labels are in **`src/components/ProjectCard.tsx`**. Keep missing repository/contact URLs as placeholders rather than making up destinations.

## Colors and fonts

The deep page background is `#213843`. The latest accents are Grassy Green `#9BC400`, Purple Mountains Majesty `#8076A3`, Misty Mountain Pink `#F9C5BD`, and Factory Stone Purple `#7C677F`. Their CSS variables are near the top of **`src/styles.css`**; green/pink are used for high-contrast details, while the purple shades are used for rules and subtle surfaces.

The two site fonts are **DM Sans** and **Lora**. Their Google Fonts stylesheet is linked from the `<head>` of **`index.html`**. DM Sans is used for body, navigation and labels; Lora is used for display headings and case-study titles.

## Replace the profile photo

The square hero photo is **`public/images/esraa-portrait.webp`**. Replace that file with your own image and keep the same filename, or put a new image in **`public/images/`** and change `photoSrc` in `src/data/portfolio.ts`. The `.portrait-frame` and `.portrait-image` rules in **`src/styles.css`** keep the displayed photo square.

## Add an image to a project

Put a screenshot or other project image in **`public/images/projects/`**. In the matching project object in **`src/data/portfolio.ts`**, add an image path and accurate alt text:

```ts
imageSrc: `${import.meta.env.BASE_URL}images/projects/medseek-preview.webp`,
imageAlt: "Screenshot of the MedSeek project interface",
```

Project images are optional; leave `imageSrc` out or set it to `null` when no image is available.

## Preview and build

```sh
pnpm install
pnpm dev
```

`pnpm run build` creates the Vercel-ready `dist/` output. `pnpm run pages:build` creates the GitHub Pages-ready `docs/` output. The project has no required environment variables. The GitHub repository remains private; Pages could not be enabled on the current account plan, so do not change repository visibility without a separate decision.
