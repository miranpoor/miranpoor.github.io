# memoyad.com

Marketing site for the Memoyad app. GitHub Pages builds it with **Jekyll** on every push
(`CNAME` → memoyad.com); there is no build step to run before committing.

## Structure

| Path | What it is |
|---|---|
| `_layouts/default.html` | The master page: `<head>` (title, description, favicons, social preview tags), header, footer, and the shared CSS/JS links. Every page uses it |
| `_includes/header.html`, `_includes/footer.html` | Site header (logo, nav, Get App) and footer (legal links) |
| `assets/css/site.css` | All styles for every page. The site is light-only by design |
| `assets/js/site.js` | All scripts (demo video loop, waitlist form, contact form, fade-in). Each block no-ops on pages without its elements |
| `index.html`, `privacy.html`, `terms.html`, `contact.html` | Page content only, each starting with a front-matter block |
| `_config.yml` | Jekyll settings. `exclude` keeps internal notes (this file, `BRAND.md`) off the public site |

**Adding a page:** create `name.html` with front matter and wrap the content like the other
subpages do:

```html
---
layout: default
title: "Page Title"
description: "One sentence for search results and link previews."
---
<section class="page">
<div class="container">
...content...
</div>
</section>
```

- **Quote front-matter values.** An unquoted value containing a colon breaks the YAML, and
  Jekyll then publishes the page without its layout.
- **Use root paths** for links and assets (`/assets/...`, `/privacy.html`).
- **In-page anchors** in the header use `#id` on the home page and `/#id` elsewhere (handled in
  `header.html`).
- **Keep these URLs:** the Android app links to `/privacy.html` and `/terms.html` (Settings > About),
  so those two paths must not change.

**Previewing locally** (the same Jekyll GitHub Pages uses, via Docker Desktop):

```
docker run --rm -v "<repo>:/srv/jekyll:ro" -v "<out>:/srv/out" jekyll/jekyll:pages jekyll build --source /srv/jekyll --destination /srv/out
python -m http.server 8765 --directory <out>
```

## Brand

**Read `BRAND.md` before changing any color, the logo, the favicon or a button style.** It is the
palette shared with the Android app and its rules (solid colors in the UI, the Indigo → Sky
gradient only inside images, never text on Sky, WCAG AA contrast). Pages must also survive
browser dark modes, dark-mode extensions and high-contrast mode: no gradient text, no CSS
gradients behind content, and no text baked into images (BRAND.md rule 4). Use the CSS variables in
`:root` of `site.css` (`--primary-color`, `--primary-dark`, `--primary-container`, …) rather than
raw hex values; a new hex value usually means a rule is being broken.

## Copy

- American English. Say "media", not "photos", unless a sentence is specifically about images.
- Only claim what the app does today. Features that are planned say so ("on the way").
- **Until the provisional patent is filed, describe what Memoyad does for the user, never how it
  works.** No mention of how media are analyzed, indexed, embedded, ranked or matched, on any page.
