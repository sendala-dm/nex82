# NEX82 website

Production website: https://nex82.com/
Source: https://github.com/sendala-dm/nex82

React, TypeScript, Vite and Tailwind. The build pre-renders the seven existing routes with page-specific SEO metadata.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npx tsc --noEmit -p tsconfig.app.json
```

Upload the generated `dist/` directory to the static-site host. Do not serve the development server in production. `deploy/nginx.conf` handles extensionless routes, canonical redirects, caching and genuine 404 responses. Development previews send `noindex`; production HTML and `robots.txt` permit indexing.

## Hosting

The website runs on `nginx-1` in the `nex82` Docker Compose project, behind Nginx Proxy Manager. The static container publishes port **8085**. Port **8091** belongs to the separate client portal and is not the website deployment target.

Production Compose configuration: `/srv/nex82/docker-compose.yml`. The active release path is recorded in `/srv/nex82/CURRENT-RELEASE`. Compose mounts that release's `dist/` and `nginx.conf` read-only. Release directories include a source archive, the previous website build and `docker-compose.before.yml` for rollback. Keep host keys and runtime backups outside Git.

For future deployments, build locally, create a new release directory, stage and validate the files with `deploy/nginx.conf`, then update only the static-site mounts in the existing production Compose file and recreate that service. Validate all seven HTTPS routes, robots/sitemap, favicon delivery and mobile navigation. To roll back, restore the release's `docker-compose.before.yml` and recreate `static-site` using the `nex82` Compose project.

## SEO and branding

Canonical domain: `https://nex82.com`. The production server redirects `www` to this domain. Titles/descriptions remain specific to each page, and the sitemap lists the original seven URLs. Favicons are provided as a multi-size root ICO, PNG variants and an Apple touch icon. Nginx Proxy Manager has a separate asset cache: an existing favicon cache entry may need refreshing during icon updates. Search engines control when their displayed icons refresh.

The portal link is `https://client.nex82.com`. Photography is illustrative stock; asset-photo sources are recorded in `public/images/markets/sources.json`. See `DESIGN-REVIEW.md` for the approved presentation changes.
