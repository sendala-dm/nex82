# NEX82 production visual refresh

Deployed 21 October 2026 to https://nex82.com using the existing Docker static-site service on nginx-1, port 8085. Production release: `/srv/nex82/releases/20261021T002025Z`.

The approved design keeps the original seven pages and section order. It uses locally hosted DM Sans, a server-room hero photograph, the actual NEX82 header logo, refined desktop/mobile navigation, a pale two-by-two asset panel with four selected photographs, and consistent left-aligned About/Careers/Software pages. The two homepage scroll indicators share one component and sit on the page centre line.

User-requested content changes: removed the duplicate hero logo, hero asset list and FX/NRG/CMD/DFA panel abbreviations. Added Portal Login linking to https://client.nex82.com. Removed no-clients/no-conflicts claims from visible copy and llms.txt; the hero states “We trade our own capital.” No copy-trading service description was added.

SEO changes include pre-rendered HTML on all existing routes, page-specific titles/descriptions, consistent nex82.com canonicals and sitemap, crawlable root favicon.ico and PNG variants with a solid light background, manifest and Apple icon, and factual Organization structured data. The unsupported FinancialService price-range markup was removed. Production nginx redirects www and slash/index aliases to canonical URLs and returns 404 for unknown pages. Preview indexing restrictions are not applied to production.

Validation: production build, TypeScript and diff checks; browser checks on all seven live HTTPS routes at phone and desktop widths; image loading, mobile navigation and portal link; SEO audit of canonicals, headings, metadata, structured data, linked resources, robots/sitemap, favicon MIME types and access with Bingbot/Yahoo Slurp user agents. Public favicon bytes match the release after targeted NEX82 proxy-cache refresh. Search-result icon display and recrawl timing remain controlled by the search engines.

The previous build and Compose file are backed up in the production release directory. The approved earlier layout without asset photos remains available locally at http://100.100.1.110:8183/ from `/tmp/nex82-before-asset-photos`. It is not part of the production visitor flow.

Photography is illustrative stock, not NEX82-owned equipment. Hero: https://images.unsplash.com/photo-1558494949-ef010cbdcc31. Asset-photo credits and source pages: `public/images/markets/sources.json`.
