# Memoyad brand: colors, logo and icon

One palette for everything Memoyad: this website, the Android app, the app icon and the Play
Store listing. Chosen 2026-09-28 (palette "Indigo").

**Source of truth.** This file and the Android app's `ui/theme/Color.kt` hold the same values.
Change them together, or not at all. The icon geometry comes from the app repo's
`android/tools/icon/gen.py`.

## Palette

| Token | Hex | Use |
|---|---|---|
| **Indigo** (primary) | `#3A3FC4` | Buttons, links, the logo wordmark, section bands (CTA), the app header |
| Indigo dark | `#2C318F` | Hover and pressed states |
| Indigo container | `#E0E1FF` | Tinted backgrounds, chips, callout boxes |
| Indigo wash | `#EEEEFF` | The home page hero background (website only) |
| On Indigo container | `#10156E` | Text on Indigo container |
| **Sky** (gradient end) | `#1CA7D4` | The second stop of the brand gradient. **Never behind text, never as text** |
| Background (light) | `#FAFAFF` | Page background, alternate sections |
| Ink | `#1B1B21` | Body text and headings |
| Ink muted | `#46464F` | Secondary text |
| Background (dark) | `#121320` | Dark surfaces, footer, the app's dark mode background |
| Surface (dark) | `#1B1C2A` | Cards and the header in the app's dark mode |
| Indigo light | `#BDC2FF` | Primary color in dark mode (with `#141A7A` text on it) |

Semantic colors (success, error, the comparison table's check and cross) are not brand colors.
Pick them for meaning and contrast, not to match the palette.

## Rules

1. **Solid colors for UI.** Buttons, links, headers and bands are solid Indigo (or white on an
   Indigo band). Hover darkens to Indigo dark.
2. **The gradient is for images only:** the app icon, the logo tile, the favicon, the Play Store
   feature graphic and the social preview image. It runs Indigo → Sky at 135° (top-left to
   bottom-right). On web pages, never as a CSS background behind content and never as text.
3. **Never put text on Sky or on the Sky end of the gradient.** White on Sky is 2.8:1, and Sky on
   white is 2.7:1; text needs 4.5:1 (3:1 for large headings).
4. **Everything must survive dark-mode tools.** Many visitors darken sites with browser settings
   (Chrome and Edge forced dark mode), extensions (Dark Reader and others) or Windows
   high-contrast mode. These tools recolor plain text and plain background colors reliably, and
   break anything cleverer. So:
   - **No gradient text.** Transparent text over a background is invisible once the background
     is darkened. Headlines are solid Indigo.
   - **No CSS gradients behind content.** Some tools leave them light, which shows as a light
     frame around darkened content. Use a solid tint (Indigo wash, Background light).
   - **No text baked into images** where the page can use real text. The header wordmark is HTML
     text next to the icon tile, so it recolors with the page.
5. **Contrast.** Every text/background pair must meet WCAG AA: 4.5:1 for body text, 3:1 for text
   of 24px and up, or 19px and up if bold. Check new pairs before shipping; the pairs in the
   table above already pass.
6. **Don't invent new brand hues.** Need another tint? Use Indigo container, Indigo dark, or the
   neutrals above. If the palette truly needs a new color, add it here and in the app's
   `Color.kt` first.

## Logo and icon assets

| File | What it is |
|---|---|
| `assets/logo-mark.svg` | The icon tile on its own, used in the site header next to the text wordmark (same drawing as `favicon.svg`) |
| `assets/logo.svg` | Standalone logo (tile plus "Memoyad" wordmark in Indigo, 180×40) for use outside the site: documents, press, partner pages. The site header does not use it (rule 4) |
| `favicon.svg` | Browser icon: the icon tile with rounded corners. Keep its zero-origin `viewBox` and explicit `width`/`height`; an offset viewBox without them rendered cut in half in browser tabs |
| `favicon.ico` | Fallback favicon, 16/32/48 px |
| `apple-touch-icon.png` | iOS home-screen icon, 180×180, square (iOS rounds it) |

The icon tile is the brand gradient with the white glyph: a magnifying glass, a picture (hills
and sun) seen through the lens, and two sparkles for the on-device AI. Don't redraw it by hand;
regenerate it from `android/tools/icon/gen.py` in the app repo and copy the paths across.

## Typography

The site uses the system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
sans-serif`), which matches the app (Roboto on Android). The wordmark is the same stack at
weight 800 with −0.5 letter-spacing.
