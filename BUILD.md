# How this site is built

Every `.html` file at the repo root is **generated**. Do not hand-edit them —
the next build overwrites your changes.

    python3 build_anava.py

That regenerates all six pages from:

- `build_anava.py` — page structure and copy
- `work.json` — the 83 work cards (category, video path, poster, brand, name)

`assets/css/anava.css` and `assets/js/anava.js` are edited directly; they are
not generated.

## Layout

    index.html work.html what-we-do.html process.html about.html contact.html
    assets/css/anava.css      one stylesheet, no framework
    assets/js/anava.js        one script, no dependencies
    assets/media/             video by category (tvc, vertical-films,
                              event-films, behind-the-scenes, testimonials)
    assets/images/thumbnails/ designed key art for work cards
    assets/images/posters/    frame grabs used where there is no key art
    assets/Companies logo/    client marks, keyed for a black background

`build_anava.py` writes into a checkout at the path in its `ROOT` constant —
set that to this repo's directory before running it.

## Rules that are easy to break

- **Internal links are extensionless** (`href="work"`, not `work.html`).
  Cloudflare Workers static assets and the live site's `.htaccess` both serve
  them. `clean_urls()` in the generator enforces this; don't undo it.
- **Cloudflare Workers rejects any file over 25 MiB.** Two clips were
  re-encoded to fit. Check with `find assets -type f -size +25M` before pushing.
- **Logo marks are pre-processed.** Their neutral-dark ink was lightened so
  they read on the black strip; coloured marks were left untouched. Don't
  replace them with originals from elsewhere.
- Headings marked `.oneline`, `.oneline-long`, `.display-1line` and
  `.display-2line` are `white-space: nowrap` and sized off the viewport so
  they hold their line count. On phones (max-width 760px) the section
  headings are allowed to wrap, because at that width nowrap shrank them
  below body size.

## Deploying

`main` is the old production one-pager and is untouched.
Pushing `redesign-2026` triggers a Cloudflare Workers build; the preview URL
is under Workers & Pages → anavafilms-brand-design → Deployments.

The live site anavafilms.com is separate — it runs on Hostinger from the
`rewadiasuraj-cell/Anava-Films` repo, and nothing here affects it.
