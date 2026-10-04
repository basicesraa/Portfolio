# Esraa — AI Engineering Portfolio

A responsive Vite + React portfolio. Main copy and project content live in one data file, and optional image paths are documented below.

## Edit the text

Open **`src/data/portfolio.ts`**.

- Intro paragraph: `portfolio.profile.introduction`
- About paragraph: `portfolio.profile.direction`
- Name and role: `portfolio.profile.name` and `portfolio.profile.role`
- University and graduation year: `portfolio.profile.university` and `portfolio.profile.graduation`
- Hero/About topic chips: the `portfolio.focus` array
- Project descriptions and links: edit the matching object inside `portfolio.projects`. The fields are `title`, `category`, `problem`, `built`, `howItWorks`, `tools`, and `repoUrl`.
- Contact destinations: `portfolio.contact.linkedinUrl`, `whatsappNumber`, and `githubProfileUrl`

For page headings, navigation names, and other fixed copy, edit **`src/App.tsx`**. Labels inside a project card are in **`src/components/ProjectCard.tsx`**. Do not add a city or location to the profile unless you want one shown.

## Replace the profile photo

The photo displayed in the square frame is **`public/images/esraa-portrait.webp`**. To use another image, replace that file with your own picture and keep the exact same filename. The page will display it as a square; it crops to fill the frame, so start with a square image if you want to avoid cropping.

If you want to use another filename or format, put the file in **`public/images/`**, then change `photoSrc` in **`src/data/portfolio.ts`** to match it. For example:

```ts
photoSrc: `${import.meta.env.BASE_URL}images/my-photo.jpg`,
```

The square crop is controlled by `.portrait-image` in **`src/styles.css`**.

## Add an image to a project

Put a screenshot or other project image in **`public/images/projects/`**. Then, inside the matching project object in **`src/data/portfolio.ts`**, add an image path and accurate alt text:

```ts
imageSrc: `${import.meta.env.BASE_URL}images/projects/medseek-preview.webp`,
imageAlt: "Screenshot of the MedSeek project interface",
```

The project image is optional: leave `imageSrc` out (or set it to `null`) when there is no image. The card displays an image only when `imageSrc` is set.

## Preview and build

```sh
pnpm install
pnpm dev
```

`pnpm run build` creates the Vercel-ready `dist/` output. `pnpm run pages:build` creates the GitHub Pages-ready `docs/` output. The project has no required environment variables. The GitHub repository remains private; Pages could not be enabled on the current account plan, so do not change repository visibility without a separate decision.
