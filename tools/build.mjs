// Builds the city landing pages (tools/cities.mjs, e.g. juontaja-helsinki/index.html),
// the privacy policy and terms (tools/legal.mjs), the footer company details
// (tools/site.mjs) on every page, and sitemap.xml.
//
//   node tools/build.mjs
//
// index.html is the source of truth for everything the pages share. Blocks
// wrapped in <!-- @shared:name --> … <!-- @/shared:name --> are copied from it,
// so edit them there and re-run this script. The script also writes the city
// links into the footer of every page, and regenerates sitemap.xml.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, cities } from './cities.mjs';
import { COMPANY } from './site.mjs';
import { legalPages, legalUpdated } from './legal.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => readFileSync(join(root, f), 'utf8');
const write = (f, text) => {
  mkdirSync(dirname(join(root, f)), { recursive: true });
  writeFileSync(join(root, f), text);
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const today = new Date().toISOString().slice(0, 10);
const bySlug = new Map(cities.map((c) => [c.name, c]));
const titleOf = (c) => `Juontaja ja puhuja ${c.name} | Tomas Suominen`;

// Last-modified dates only move when a page's content changes, so sitemap
// lastmod and dateModified stay truthful (search engines ignore dates that churn).
const datesFile = 'tools/page-dates.json';
const dates = existsSync(join(root, datesFile)) ? JSON.parse(read(datesFile)) : {};
const DATE = '__MODIFIED__';
const stamp = (key, html) => {
  const hash = createHash('sha256').update(html).digest('hex').slice(0, 16);
  if (!dates[key] || dates[key].hash !== hash) dates[key] = { hash, date: today };
  return html.replaceAll(DATE, dates[key].date);
};

// Warn about titles and descriptions that search results would cut off.
const lint = (c) => {
  const t = titleOf(c).length, d = c.description.length;
  if (t > 60) console.warn(`  ! ${c.slug}: title is ${t} characters (keep it under 60)`);
  if (d > 155 || d < 70) console.warn(`  ! ${c.slug}: description is ${d} characters (aim for 70–155)`);
};

/* ---------- footer city links, written into every page ---------- */

const cityLinks = (prefix, currentSlug) => `<!-- @cities -->
      <nav class="footer__cities" aria-label="Kaupungit">
        <p class="footer__cities-label">Juontaja ja puhuja</p>
        <ul>${cities.map((c) => `<li><a href="${prefix}${c.slug}/"${c.slug === currentSlug ? ' aria-current="page"' : ''}>${esc(c.name)}</a></li>`).join('')}</ul>
      </nav>
      <!-- @/cities -->`;

const replaceCities = (html, prefix, currentSlug) =>
  html.replace(/<!-- @cities -->[\s\S]*?<!-- @\/cities -->/, cityLinks(prefix, currentSlug));

/* ---------- footer company details and legal links ---------- */

for (const [key, label] of [['businessId', 'Y-tunnus'], ['address', 'osoite'], ['domicile', 'kotipaikka'], ['email', 'sähköposti']]) {
  if (!COMPANY[key]) console.warn(`  ! tools/site.mjs: company ${label} (${key}) is empty; the footer and legal pages need it`);
}

const companyBlock = (prefix) => `<!-- @company -->
      <div class="footer__legal">
        <p class="footer__meta">© <span data-year>${today.slice(0, 4)}</span> ${esc(COMPANY.name)} · Y-tunnus ${esc(COMPANY.businessId)}${COMPANY.address ? ` · ${esc(COMPANY.address)}` : ''}</p>
        <ul class="footer__legal-links">
          <li><a href="${prefix}tietosuoja/">Tietosuojaseloste</a></li>
          <li><a href="${prefix}kayttoehdot/">Käyttöehdot</a></li>
          <li data-consent-link hidden><button type="button" data-consent-open>Evästeasetukset</button></li>
        </ul>
        <p class="footer__credit">Design: Christoffer Heinonen</p>
      </div>
      <!-- @/company -->`;

const replaceCompany = (html, prefix) =>
  html.replace(/<!-- @company -->[\s\S]*?<!-- @\/company -->/, companyBlock(prefix));

// Refresh the footer on the home page first, so the copied footer is current.
let home = replaceCompany(replaceCities(read('index.html'), '', null), '');
write('index.html', home);

/* ---------- shared blocks from index.html ---------- */

const shared = (name) => {
  const m = home.match(new RegExp(`<!-- @shared:${name} -->\\n([\\s\\S]*?)\\n<!-- @/shared:${name} -->`));
  if (!m) throw new Error(`index.html has no shared block "${name}"`);
  // City pages live one folder down.
  // Pages built here live one folder down, so relative links gain "../".
  return m[1]
    .replace(/(src|href)="(?!#|https?:|mailto:|tel:|\.\.\/|\/)([^"]+)"/g, '$1="../$2"')
    .replace('class="nav__brand" href="#top"', 'class="nav__brand" href="../"');
};

/* ---------- page ---------- */

function renderCity(c) {
  const url = `${SITE}/${c.slug}/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#tomas`,
        name: 'Tomas Suominen',
        jobTitle: 'Tapahtumajuontaja ja keynote-puhuja',
        url: `${SITE}/`,
        worksFor: { '@type': 'Organization', name: COMPANY.name, identifier: COMPANY.businessId },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: titleOf(c),
        description: c.description,
        inLanguage: 'fi',
        dateModified: DATE,
        about: { '@id': `${SITE}/#tomas` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Etusivu', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: c.name, item: url },
        ],
      },
      ...[
        ['Juonto', 'Tapahtumajuonto'],
        ['Puhujakeikat', 'Keynote-puheenvuoro'],
        ['VIP Hosting', 'VIP-tilaisuuden isännöinti'],
        ['Ääninäyttely', 'Ääninäyttely'],
      ].map(([name, type]) => ({
        '@type': 'Service',
        name: `${name} ${c.in}`,
        serviceType: type,
        provider: { '@id': `${SITE}/#tomas` },
        areaServed: c.area.map((a) => ({ '@type': 'Place', name: a })),
        url,
      })),
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  const refs = c.references.length
    ? `
        <div class="city__refs">
          <h3 class="city__subtitle">Keikkoja ${esc(c.in)}</h3>
          <ul class="refs">${c.references.map((r) => `
            <li><span class="refs__event">${esc(r.event)}</span><span class="refs__meta">${esc(r.venue)} · ${esc(r.year)}</span></li>`).join('')}
          </ul>
        </div>`
    : '';

  const services = shared('services').replace(
    /(<h2 id="palvelut-otsikko" class="section-title">)[^<]*(<\/h2>)/,
    `$1Palvelut ${esc(c.in)}$2`,
  );

  return `<!doctype html>
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Generated by tools/build.mjs from tools/cities.mjs and index.html. Edit those, not this file. -->
  <title>${esc(titleOf(c))}</title>
  <meta name="description" content="${esc(c.description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${esc(titleOf(c))}">
  <meta property="og:description" content="${esc(c.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="fi_FI">
  <meta property="og:image" content="${SITE}/assets/og/${c.slug}.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#2B0A15">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="icon" href="../favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <link rel="stylesheet" href="../styles.css">
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c')}
  </script>
</head>
<body data-city="${esc(c.name)}">
  <a class="skip" href="#sisalto">Siirry sisältöön</a>

${shared('nav')}

  <section class="stage" id="top" data-stage>
    <div class="stage__light" aria-hidden="true"></div>
    <div class="stage__floor" aria-hidden="true"></div>

    <div class="stage__inner">
      <nav class="crumbs" aria-label="Murupolku">
        <a href="../">Etusivu</a><span aria-hidden="true">/</span><span aria-current="page">${esc(c.name)}</span>
      </nav>
      <p class="eyebrow eyebrow--stage">Tomas Suominen · ${esc(c.name)} ja ${esc(c.region)}</p>

      <div class="marquee marquee--city" style="--chars: ${Math.max(8, c.to.length)}">
        <h1 class="marquee__base">Juontaja<br>${esc(c.to)}</h1>
        <span class="marquee__lit" aria-hidden="true">Juontaja<br>${esc(c.to)}</span>
      </div>

      <p class="stage__lede">${esc(c.lede)}</p>

      <div class="stage__actions">
        <a class="btn btn--light" href="#varaa" data-book>Varaa keikka</a>
        <a class="btn btn--ghost" href="#palvelut">Tutustu palveluihin</a>
      </div>
    </div>
  </section>

  <main id="sisalto">
${shared('logos')}

    <!-- City: the part of the page that is only about this city. -->
    <section class="city" aria-labelledby="city-otsikko">
      <div class="wrap">
        <header class="section-head">
          <p class="eyebrow">${esc(c.name)} ja ${esc(c.region)}</p>
          <h2 id="city-otsikko" class="section-title">Tapahtumajuontaja ${esc(c.in)}</h2>
        </header>
        <div class="city__grid">
          <div class="city__copy">
            <p class="city__summary">${esc(c.summary)}</p>${c.context.map((p) => `
            <p class="city__intro">${esc(p)}</p>`).join('')}
            <div class="city__area">
              <p class="svc__label">Alue</p>
              <ul class="chips">${c.area.map((a) => {
                const page = bySlug.get(a);
                return page && page.slug !== c.slug
                  ? `<li><a href="../${page.slug}/">${esc(a)}</a></li>`
                  : `<li>${esc(a)}</li>`;
              }).join('')}</ul>
            </div>
          </div>
          <ul class="usecases">${c.eventTypes.map((e) => `
            <li class="usecase"><h3 class="usecase__title">${esc(e.title)}</h3><p>${esc(e.text)}</p></li>`).join('')}
          </ul>
        </div>${refs}
      </div>
    </section>

${shared('intro')}

${services}

${shared('process')}

    <section class="faq" id="ukk" aria-labelledby="ukk-otsikko">
      <div class="wrap wrap--narrow">
        <header class="section-head">
          <p class="eyebrow">UKK</p>
          <h2 id="ukk-otsikko" class="section-title">Juontaja ${esc(c.in)}: usein kysyttyä</h2>
        </header>${c.faq.map((f) => `
        <details class="qa">
          <summary>${esc(f.q)}</summary>
          <p>${esc(f.a)}</p>
        </details>`).join('')}
      </div>
    </section>

    <section class="booking" id="varaa" aria-labelledby="varaa-otsikko">
      <div class="wrap booking__grid">
        <header class="booking__head">
          <p class="eyebrow eyebrow--stage">Varaa keikka</p>
          <h2 id="varaa-otsikko" class="booking__title">Varaa Tomas tapahtumaasi ${esc(c.in)}</h2>
        </header>
        <div class="booking__body">
          <p class="booking__lede">Kerro tapahtumastasi kolmella lyhyellä askeleella. Tiedustelu menee suoraan Tomakselle, ja hän vastaa sähköpostiisi.</p>
          <ol class="booking__steps">
            <li><span>1</span>Mitä tarvitset</li>
            <li><span>2</span>Tapahtuman tiedot</li>
            <li><span>3</span>Yhteystiedot</li>
          </ol>
          <a class="btn btn--light btn--lg" href="#varaa" data-book>Aloita tiedustelu</a>
          <p class="booking__hint">Vie noin kaksi minuuttia.</p>
        </div>
      </div>
    </section>
  </main>

${replaceCompany(replaceCities(shared('footer'), '../', c.slug), '../')}

${shared('dialog')}

  <script src="../script.js" defer></script>
</body>
</html>
`;
}

/* ---------- legal pages ---------- */

function renderLegal(pg) {
  const url = `${SITE}/${pg.slug}/`;
  return `<!doctype html>
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Generated by tools/build.mjs from tools/legal.mjs and index.html. Edit those, not this file. -->
  <title>${esc(pg.title)}</title>
  <meta name="description" content="${esc(pg.description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${esc(pg.title)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="fi_FI">
  <meta name="theme-color" content="#2B0A15">
  <link rel="icon" href="../favicon.ico" sizes="any">
  <link rel="icon" href="../favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="manifest" href="../site.webmanifest">
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="page-legal">
  <a class="skip" href="#sisalto">Siirry sisältöön</a>

${shared('nav').replace(/href="#(palvelut|prosessi|ukk|varaa)"/g, 'href="../#$1"')}

  <main id="sisalto" class="legal">
    <div class="wrap wrap--narrow">
      <nav class="crumbs crumbs--light" aria-label="Murupolku">
        <a href="../">Etusivu</a><span aria-hidden="true">/</span><span aria-current="page">${esc(pg.heading)}</span>
      </nav>
      <h1 class="legal__title">${esc(pg.heading)}</h1>
      <p class="legal__updated">Päivitetty ${esc(legalUpdated)}</p>
      <div class="legal__body">${pg.body}
      </div>
    </div>
  </main>

${replaceCompany(replaceCities(shared('footer'), '../', null), '../')}

${shared('dialog')}

  <script src="../script.js" defer></script>
</body>
</html>
`;
}

for (const pg of legalPages) {
  write(`${pg.slug}/index.html`, stamp(pg.slug, renderLegal(pg)));
  console.log(`wrote ${pg.slug}/index.html`);
}

for (const c of cities) {
  lint(c);
  write(`${c.slug}/index.html`, stamp(c.slug, renderCity(c)));
  console.log(`wrote ${c.slug}/index.html`);
}
stamp('home', home);
write(datesFile, `${JSON.stringify(dates, null, 2)}\n`);

/* ---------- sitemap ---------- */

const urls = [
  [`${SITE}/`, dates.home.date],
  ...cities.map((c) => [`${SITE}/${c.slug}/`, dates[c.slug].date]),
  ...legalPages.map((pg) => [`${SITE}/${pg.slug}/`, dates[pg.slug].date]),
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, d]) => `  <url><loc>${u}</loc><lastmod>${d}</lastmod></url>`).join('\n')}
</urlset>
`);
console.log(`wrote sitemap.xml (${urls.length} urls)`);
