# Tasteology Web

## Running locally

Install dependencies

```bash
npm install
```

Once done, you can run the app locally

```bash
npm run dev
```

Or you can visit the public [site](https://dwrellin.github.io/tasteology-web/) through GitHub Pages.

## Things to know about the app

- I didn't include an `h1` tag as I was under the impression that this is just a portion of a larger app. For that reason, I assumed that in the main app, there's an `h1`. I also left a comment in the code regarding this.
- The content shown here is from a `.js` file, assuming that the data is already formatted and came from an API, to be CMS-ready.
- Also added minimal SEO and WCAG features to support it.
- For the "Cards Block", there's an option there to uncomment `e.preventDefault()` to open websites in another tab. This is to highlight that it's logging the correct item and link.

## Changelogs:

As of Oct 10, 2025:

- Restructured HTML layout to improve SEO performance.
- Implemented a `<noscript>` banner to inform users when JavaScript is disabled.

As of Oct 11, 2025:

- Added `<main>` and `<section>` landmarks.
- Corrected the `aria-labelledby` reference.
