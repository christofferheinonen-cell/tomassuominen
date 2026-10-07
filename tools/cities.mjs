// City landing pages. Add a city here, then run: node tools/build-cities.mjs
//
// Keep each city's text genuinely about that city. Search engines treat pages
// that differ only by the city name as "doorway pages" and rank them down.
// `references` should list real gigs in the city; the section stays hidden
// until it has at least one entry. Never add a gig that didn't happen.

export const SITE = 'https://www.tomassuominen.fi';

export const cities = [
  {
    slug: 'helsinki',
    name: 'Helsinki',
    inessive: 'Helsingissä',      // "in Helsinki"
    illative: 'Helsinkiin',       // "to Helsinki"
    region: 'pääkaupunkiseutu',
    area: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen'],

    title: 'Juontaja Helsinki – Tomas Suominen | Juonnot, puhujakeikat ja VIP-isännöinti',
    description:
      'Tapahtumajuontaja ja keynote-puhuja Helsinkiin ja koko pääkaupunkiseudulle. Tomas Suominen juontaa yritystapahtumat, gaalat ja seminaarit sekä isännöi VIP-tilaisuudet.',
    lede:
      'Juonnot, puhujakeikat ja VIP-tilaisuuksien isännöinti Helsingissä ja koko pääkaupunkiseudulla – kick-offeista gaaloihin.',

    // Answer-first summary: the sentence AI search engines and snippets are most likely to quote.
    summary:
      'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa yritystapahtumia, gaaloja ja seminaareja Helsingissä ja muualla pääkaupunkiseudulla. Häneltä voi varata myös inspiroivan puheenvuoron, VIP-tilaisuuden isännöinnin tai äänityön.',
    intro:
      'Pääkaupunkiseudulla tapahtumia on paljon, ja yleisö on nähnyt monta juontajaa. Siksi juonnon pitää tuntua juuri teidän tilaisuudeltanne: Tomas valmistelee jokaisen keikan tapahtuman tavoitteen ja yleisön mukaan ja pitää illan kulun hallussa alusta loppuun.',

    eventTypes: [
      { title: 'Kick-offit ja henkilöstöjuhlat', text: 'Kauden avaukset, strategiapäivät ja pikkujoulut, joissa koko porukka halutaan samaan energiaan.' },
      { title: 'Seminaarit ja kongressit', text: 'Ohjelma pysyy aikataulussa, puhujat esitellään sujuvasti ja yleisö jaksaa mukana koko päivän.' },
      { title: 'Gaalat ja palkintojuhlat', text: 'Juhlava ilta, jossa juontaja kantaa ohjelmaa ja nostaa palkitut ansaitsemaansa valoon.' },
      { title: 'Asiakas- ja VIP-tilaisuudet', text: 'Tyylikäs isännöinti, jossa jokainen vieras tuntee olonsa tervetulleeksi ilman päällekäyvää show’ta.' },
    ],

    // Real gigs in this city: { event: 'Yritys X:n kick-off', venue: 'Paikka', year: 2025 }
    references: [],

    faq: [
      {
        q: 'Juontaako Tomas tapahtumia myös Espoossa ja Vantaalla?',
        a: 'Kyllä. Tomas juontaa ja pitää puheenvuoroja koko pääkaupunkiseudulla: Helsingissä, Espoossa, Vantaalla ja Kauniaisissa.',
      },
      {
        q: 'Paljonko juontaja maksaa Helsingissä?',
        a: 'Hinta riippuu tapahtuman kestosta, roolista – juonto, puheenvuoro vai VIP-isännöinti – sekä valmistelun määrästä. Kerro tapahtumastasi tiedustelulomakkeella, niin saat tarjouksen juuri siihen.',
      },
      {
        q: 'Kuinka hyvissä ajoin juontaja kannattaa varata?',
        a: 'Mitä aiemmin, sitä varmemmin toivottu päivä on vapaana. Syksyn ja joulukauden yritystapahtumat sekä kevään gaalat kannattaa varata erityisen hyvissä ajoin.',
      },
      {
        q: 'Millaisiin tapahtumiin Helsingissä Tomas sopii?',
        a: 'Yritysten kick-offeihin ja henkilöstöjuhliin, seminaareihin ja kongresseihin, gaaloihin sekä asiakas- ja VIP-tilaisuuksiin. Puheenvuoroja hän pitää myös oppilaitoksille.',
      },
    ],
  },
];
