// Renders the 1200×630 social preview images (og:image) for the home page and
// every city page into assets/og/. Needs Playwright with Chromium:
//
//   npm i -D playwright && npx playwright install chromium
//   node tools/og-images.mjs
//
// Re-run after adding a city.

import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { cities } from './cities.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'assets/og');
mkdirSync(outDir, { recursive: true });

const card = (eyebrow, line1, line2, chars) => `<!doctype html>
<html lang="fi"><head><meta charset="utf-8">
<link rel="stylesheet" href="styles.css">
<style>
  body { margin: 0; background: var(--velvet); }
  .stage { min-height: 630px; height: 630px; padding: 48px; }
  .stage__light, .stage__floor { opacity: 1; transition: none; }
  .marquee { font-size: ${Math.min(190, Math.floor(1050 / (chars * 0.5)))}px; }
  .marquee__base { color: var(--limelight); text-shadow: 0 0 40px rgba(255, 225, 160, .25); }
  .og__site { position: absolute; left: 48px; bottom: 40px; font: 500 18px/1 var(--f-mono); letter-spacing: .12em; text-transform: uppercase; color: var(--rose); }
</style></head>
<body>
  <section class="stage is-lit" style="--x: 50%; --y: 46%">
    <div class="stage__light"></div><div class="stage__floor"></div>
    <div class="stage__inner">
      <p class="eyebrow eyebrow--stage" style="font-size: 18px">${eyebrow}</p>
      <div class="marquee"><p class="marquee__base">${line1}<br>${line2}</p></div>
    </div>
    <p class="og__site">tomassuominen.fi</p>
  </section>
</body></html>`;

const jobs = [
  { file: 'home', html: card('Juontaja · Keynote-puhuja · VIP-isäntä', 'Tomas', 'Suominen', 8) },
  ...cities.map((c) => ({
    file: c.slug,
    html: card(`Tomas Suominen · ${c.name}`, 'Juontaja', c.to, Math.max(8, c.to.length)),
  })),
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const job of jobs) {
  // Rendered from a file in the site root so styles.css and its self-hosted fonts load.
  const tmp = join(root, '.og-render.html');
  writeFileSync(tmp, job.html);
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
  rmSync(tmp);
  await page.screenshot({ path: join(outDir, `${job.file}.jpg`), type: 'jpeg', quality: 86 });
  console.log(`wrote assets/og/${job.file}.jpg`);
}
await browser.close();
