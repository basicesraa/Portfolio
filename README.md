
## GitHub Pages

This portfolio is prepared to publish a **public website** from the `main` branch's `/docs` folder at `https://basicesraa.github.io/Portfolio/`. The repository itself remains private; GitHub must allow Pages publishing from this private repository under the account's plan. If it does not, do not change repository visibility without a separate decision.

The site is built before publishing and uses relative asset paths for the `/Portfolio/` project URL. To rebuild the static Pages files after content changes, run `pnpm run pages:build`, then commit the updated `docs/` output together with the source changes and push `main`. The GitHub Pages branch source is `main` + `/docs` (no repository-wide public visibility change is needed when eligible).

GitHub documents that Pages sites are publicly available even when their source repository is private, if the account or organization plan allows it. Private-only Pages access requires GitHub Enterprise Cloud. References: [Pages visibility](https://docs.github.com/en/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site), [branch publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Pages REST API](https://docs.github.com/rest/pages/pages), and [Vite static deployment](https://vite.dev/guide/static-deploy).
