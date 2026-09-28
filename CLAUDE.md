# memoyad.com

Static marketing site for the Memoyad app, served by GitHub Pages (`CNAME` → memoyad.com).
Everything is in `index.html` (inline CSS and JS) plus `assets/` and the favicon files.

## Brand

**Read `BRAND.md` before changing any color, the logo, the favicon or a button style.** It is the
palette shared with the Android app and its rules (solid colors in the UI, the Indigo → Sky
gradient only for brand moments, never text on Sky, WCAG AA contrast). Use the CSS variables in
`:root` (`--primary-color`, `--primary-dark`, `--primary-container`, …) rather than raw hex
values; a new hex value in the CSS usually means a rule is being broken.

## Copy

American English. Say "media", not "photos", unless a sentence is specifically about images.
