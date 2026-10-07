# Rocklin Lab website (rocklinlab.org)

Plain static HTML: no build step, no framework. Every page is a complete HTML file you edit directly.
It was migrated from Weebly in October 2026; the original crawl and converter live in `_weebly-backup/` (git-ignored).

## Layout

- `index.html`: the main one-page site. Sections, in order: hero, intro (`#research`), Projects, building photo, The Team (`#team`), Lab Alumni, We're hiring (`#join`), photo band, Papers (`#papers`), Contact (`#contact`).
- `resources.html`: reading list and lab resources.
- `news.html`: news index (newest first: title, date, thumbnail, excerpt) plus sidebar.
- `news/<slug>.html`: one file per news post.
- `new.html`: hidden page that shares `ra.zip`. It is not linked from the nav; keep it, because external links may point to it.
- `404.html`: not-found page. It uses root-absolute paths (`/assets/...`) because it can be served at any depth.
- `assets/css/style.css`, `assets/js/site.js`: all styling and the header/menu script.
- `assets/img/`: images. `assets/files/`: PDFs and other downloads.

All other pages use **relative** paths: `assets/...` at the top level and `../assets/...` inside `news/`.

## Shared header and footer

The `<header class="site-header">` nav, the `<footer>`, and the `<head>` block are duplicated in every HTML file (including `news/*.html` and `404.html`).
When changing nav items, fonts, or the analytics snippet, update **all** HTML files consistently (e.g. with a script), keeping `../` prefixes in `news/`.

## Common edits

**Add a lab member.** Copy an existing person block in the Team section of `index.html`:
`<div class="cols">` → photo column (`flex:22.5`) + text column (`flex:77.5`). Put the photo in `assets/img/` (resize to ~600px wide first).
**Move someone to alumni.** Delete their block and add a one-line entry to the Lab Alumni list in the same format as the existing lines.

**Add a paper.** The Papers section is two columns (`<div class="col">`), each a stack of: `<figure class="img center">` image, `<div class="text">` with bold 18px title, linked citation, description, then `<hr>`. Newest papers go at the top; keep the two columns roughly balanced.

**Add a news post.**
1. Copy an existing `news/<slug>.html` to `news/<new-slug>.html`; change `<title>`, `.post-title`, `.post-date` (format `M/D/YYYY`), and the `.post-body` content. Remove any archived `<section class="comments">`.
2. Add an entry at the top of `news.html` (same `<article class="news-item">` format).
3. Add a link at the top of the "All posts" sidebar list. That sidebar is duplicated in `news.html` and **every** `news/*.html` file.

**Announcement banner.** The red text at the top of the intro section (`color:#c23b3b`) is the place for headline news.

## Styling conventions

- Fonts: Montserrat 700 (headings, nav) and Nunito Sans (body), both from Google Fonts. Nunito Sans stands in for Weebly's licensed "Birdseye" font.
- Weebly's `<font size>` tags were converted to inline `font-size` spans (sizes 10/13/16/18/24/32/48px). Reuse those sizes for consistency.
- Accent red: `#c23b3b`. Gray band background: `#f1f1f1`.
- Check mobile (≤992px) after layout changes: `.cols` stack vertically there.

## Preview locally

```
python3 -m http.server 8000
```
Then open http://localhost:8000. (`.claude/launch.json` defines this as the "site" preview.)

## Placeholders

- `<!-- ANALYTICS: ... -->` in every `<head>`: paste the analytics snippet (Cloudflare Web Analytics or GoatCounter) here.
- `<!-- COMMENTS-WIDGET: ... -->` in every news post: where a Giscus or Cusdis comment embed would go.
