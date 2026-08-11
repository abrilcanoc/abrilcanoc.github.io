# By My Hand

Static catalog website for By My Hand.

## Recommended folder structure

```text
abrilcanoc.github.io/
├─ index.html
├─ script.js
├─ Logo.png
├─ README.md
└─ .github/
	└─ workflows/
		└─ deploy-pages.yml
```

The site is intentionally kept at the repository root so GitHub Pages can publish `index.html` directly.

## Stack
- HTML
- TailwindCSS via CDN
- JavaScript

## Local run
Open `index.html` in a browser, or use any local static server if you want to test links and layout together.

## Publish to GitHub Pages
1. Push the repository to GitHub.
2. Go to the repository settings and open Pages.
3. Set the source to GitHub Actions.
4. Commit and push the workflow file in `.github/workflows/deploy-pages.yml`.
5. Wait for the workflow to finish, then open the Pages URL shown by GitHub.

## Workflow files
- `.github/workflows/deploy-pages.yml` should publish the repository root as a static site.

## Update content
- Replace the WhatsApp number in `script.js` with the final business number if it changes.
- Replace the catalog placeholder items in `script.js` with your real products, prices, and photos.
- Keep image paths relative so GitHub Pages can resolve them correctly.

## Notes for GitHub Pages
- Keep `index.html` at the repository root.
- Keep `script.js` at the repository root or update the `<script>` path if you move it.
- Use relative paths for local files such as `Logo.png`.
