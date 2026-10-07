# tomassuominen.fi

Static site: `index.html`, `styles.css`, `script.js`, `assets/`. No build step for the home page.

## City landing pages

City pages (e.g. `helsinki/index.html`) are generated. Don't edit them by hand.

1. Add or edit a city in `tools/cities.mjs`.
2. Run `node tools/build-cities.mjs`.
3. Commit the generated folder, `index.html` (its footer city links) and `sitemap.xml`.

Shared parts (nav, logo strip, intro, services, process, footer, booking dialog) are copied from
`index.html`, from the blocks marked `<!-- @shared:name -->`. After changing one of those on the home
page, re-run the script so the city pages match.

Each city needs text that is really about that city. Pages that differ only by the city name read as
doorway pages to search engines. Add real gigs to `references` as they happen.

## Booking form

Set `data-endpoint` on the form in `index.html` to a Formspree URL, then re-run the city build so the
city pages pick it up.
