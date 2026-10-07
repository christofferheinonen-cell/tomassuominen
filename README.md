# tomassuominen.fi

Static site: `index.html`, `styles.css`, `script.js`, `assets/`. No build step for the home page.

## City landing pages

City pages (e.g. `juontaja-helsinki/index.html`) are generated. Don't edit them by hand.

1. Add or edit a city in `tools/cities.mjs`.
2. Run `node tools/build.mjs`.
3. Run `node tools/og-images.mjs` to render the page's social preview image (needs Playwright).
4. Commit the generated folder, `index.html` (its footer city links), `sitemap.xml`,
   `tools/page-dates.json` and `assets/og/`.

The build warns when a title or meta description is long enough to be cut off in search results.

Shared parts (nav, logo strip, intro, services, process, footer, booking dialog) are copied from
`index.html`, from the blocks marked `<!-- @shared:name -->`. After changing one of those on the home
page, re-run the script so the city pages match.

Each city needs text that is really about that city. Pages that differ only by the city name read as
doorway pages to search engines. Add real gigs to `references` as they happen.

## Booking form

Enquiries are sent with FormSubmit (formsubmit.co) to the address in the form's `data-endpoint` in
`index.html` (currently tomas.suominen@hotmail.com). After changing it, re-run `node tools/build.mjs` so the
other pages pick it up.

- The first enquiry triggers an activation email to that address. Nothing is delivered until the link
  in it is clicked, so send a test enquiry yourself right after going live.
- After activation FormSubmit offers a random alias for the address. Use it in `data-endpoint` so the
  address isn't readable in the page source.

## Company details, privacy policy and terms

- Company name, Y-tunnus, address and contact email live in `tools/site.mjs`. The build writes them
  into every footer and both legal pages, and warns while the address or domicile is missing.
- The privacy policy (`/tietosuoja/`) and terms (`/kayttoehdot/`) are written in `tools/legal.mjs`.
  They describe what the site actually does today. Update them, and `LEGAL_UPDATED` in
  `tools/site.mjs`, whenever that changes (a new form service, analytics, a newsletter).

## Cookies and consent

The site sets no cookies, stores nothing in the browser and loads nothing from third parties (fonts
are self-hosted in `assets/fonts/`), so no cookie banner is shown. To add analytics or an ad pixel,
list it in `OPTIONAL_SERVICES` in `script.js`: the consent banner and the footer's "Evästeasetukset"
link then appear, and the service loads only after the visitor accepts it. Update the cookie section
of the privacy policy at the same time.
