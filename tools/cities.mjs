// City landing pages. Add a city here, then run: node tools/build-cities.mjs
//
// Keep each city's text genuinely about that city. Search engines treat pages
// that differ only by the city name as "doorway pages" and rank them down.
// Local context below names well-known venues and industries as facts about
// the city only; it never claims Tomas performed there. `references` is for
// real gigs; its section stays hidden until it has an entry. Never add a gig
// that didn't happen.
//
// Fields
//   slug         URL folder, e.g. juontaja-tampere → /juontaja-tampere/
//   name/in/to   Tampere / Tampereella ("in") / Tampereelle ("to")
//   region       shown as "Tampere ja Pirkanmaa"
//   area         nearby places; any that have their own page become links
//   description  meta description, max ~155 characters (the build warns)

export const SITE = 'https://www.tomassuominen.fi';

export const cities = [
  {
    slug: 'juontaja-helsinki',
    name: 'Helsinki', in: 'Helsingissä', to: 'Helsinkiin', region: 'pääkaupunkiseutu',
    area: ['Helsinki', 'Espoo', 'Vantaa', 'Kauniainen'],
    description: 'Tapahtumajuontaja ja keynote-puhuja Helsinkiin. Tomas Suominen juontaa yritystapahtumat, gaalat ja seminaarit sekä isännöi VIP-tilaisuudet.',
    lede: 'Juonnot, puhujakeikat ja VIP-tilaisuuksien isännöinti Helsingissä ja koko pääkaupunkiseudulla – kick-offeista gaaloihin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa yritystapahtumia, gaaloja ja seminaareja Helsingissä. Häneltä voi varata myös inspiroivan puheenvuoron, VIP-tilaisuuden isännöinnin tai äänityön.',
    context: [
      'Helsingissä tapahtumia on paljon, ja yleisö on nähnyt monta juontajaa. Siksi juonnon pitää tuntua juuri teidän tilaisuudeltanne: Tomas valmistelee jokaisen keikan tapahtuman tavoitteen ja yleisön mukaan.',
      'Kaupungin suurimmat tapahtumat järjestetään esimerkiksi Messukeskuksessa, Finlandia-talossa ja Wanhassa Satamassa, pienemmät hotelleissa, ravintoloissa ja yritysten omissa tiloissa. Juonto rakennetaan aina tilan ja yleisön koon mukaan.',
    ],
    eventTypes: [
      { title: 'Kick-offit ja henkilöstöjuhlat', text: 'Kauden avaukset, strategiapäivät ja pikkujoulut, joissa koko porukka halutaan samaan energiaan.' },
      { title: 'Seminaarit ja kongressit', text: 'Ohjelma pysyy aikataulussa, puhujat esitellään sujuvasti ja yleisö jaksaa mukana koko päivän.' },
      { title: 'Gaalat ja palkintojuhlat', text: 'Juhlava ilta, jossa juontaja kantaa ohjelmaa ja nostaa palkitut ansaitsemaansa valoon.' },
      { title: 'Asiakas- ja VIP-tilaisuudet', text: 'Tyylikäs isännöinti, jossa jokainen vieras tuntee olonsa tervetulleeksi ilman päällekäyvää show’ta.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös muualla pääkaupunkiseudulla?', a: 'Kyllä. Tomas juontaa ja pitää puheenvuoroja koko pääkaupunkiseudulla: Helsingissä, Espoossa, Vantaalla ja Kauniaisissa.' },
      { q: 'Paljonko juontaja maksaa Helsingissä?', a: 'Hinta riippuu tapahtuman kestosta, roolista – juonto, puheenvuoro vai VIP-isännöinti – sekä valmistelun määrästä. Kerro tapahtumastasi tiedustelulomakkeella, niin saat tarjouksen juuri siihen.' },
      { q: 'Kuinka hyvissä ajoin juontaja kannattaa varata Helsinkiin?', a: 'Mitä aiemmin, sitä varmemmin toivottu päivä on vapaana. Syksyn ja joulukauden yritystapahtumat sekä kevään gaalat kannattaa varata erityisen hyvissä ajoin.' },
      { q: 'Millaisiin tapahtumiin Helsingissä Tomas sopii?', a: 'Yritysten kick-offeihin ja henkilöstöjuhliin, seminaareihin ja kongresseihin, gaaloihin sekä asiakas- ja VIP-tilaisuuksiin. Puheenvuoroja hän pitää myös oppilaitoksille.' },
    ],
  },

  {
    slug: 'juontaja-espoo',
    name: 'Espoo', in: 'Espoossa', to: 'Espooseen', region: 'pääkaupunkiseutu',
    area: ['Espoo', 'Helsinki', 'Vantaa', 'Kauniainen', 'Kirkkonummi'],
    description: 'Juontaja ja keynote-puhuja Espooseen. Tomas Suominen juontaa yritystapahtumat, seminaarit ja juhlat Espoossa ja koko pääkaupunkiseudulla.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Espoossa – Keilaniemen pääkonttoreista Otaniemen kampukselle.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa yritystapahtumia, seminaareja ja juhlia Espoossa. Teknologiayritysten tilaisuuksiin hänet voi varata sekä juontajaksi että puhujaksi.',
    context: [
      'Espoossa toimii monen suuren yrityksen pääkonttori, kuten Nokia, KONE ja Fortum, ja Otaniemessä Aalto-yliopisto sekä satoja teknologiayrityksiä. Tapahtumat ovat usein asiantuntijayleisölle suunnattuja, ja juontajalta odotetaan selkeyttä, tahtia ja kykyä tehdä teknisestäkin ohjelmasta helposti seurattava.',
      'Tilaisuuksia järjestetään esimerkiksi Dipolissa, Hanasaaren kulttuurikeskuksessa sekä yritysten omissa auditorioissa. Tomas sovittaa juonnon tilaan ja yleisöön, oli kyse sadan hengen asiakasaamupäivästä tai koko henkilöstön juhlasta.',
    ],
    eventTypes: [
      { title: 'Teknologia- ja asiantuntijatapahtumat', text: 'Tuotejulkistukset, asiakasseminaarit ja webinaarit, joissa sisältö on vaativaa ja juonnon pitää olla kirkas.' },
      { title: 'Henkilöstötilaisuudet', text: 'Kick-offit, info-tilaisuudet ja vuosijuhlat, joissa koko organisaatio halutaan mukaan.' },
      { title: 'Kampus- ja innovaatiotapahtumat', text: 'Pitchaustilaisuudet, kilpailut ja opiskelijatapahtumat, joissa vauhti ja tunnelma ratkaisevat.' },
      { title: 'Asiakas- ja kumppanitilaisuudet', text: 'Illat, joissa isäntä huolehtii, että jokainen vieras kohdataan ja ohjelma etenee luontevasti.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Kauniaisissa ja Kirkkonummella?', a: 'Kyllä. Tomas juontaa koko pääkaupunkiseudulla ja sen lähikunnissa, myös Kauniaisissa ja Kirkkonummella.' },
      { q: 'Sopiiko Tomas teknologiayrityksen tapahtumaan?', a: 'Sopii. Tomas valmistautuu sisältöön etukäteen, esittelee puhujat ja aiheet ymmärrettävästi ja pitää aikataulun – myös silloin, kun ohjelma on tiivis ja yleisö asiantuntijoita.' },
      { q: 'Paljonko juontaja maksaa Espoossa?', a: 'Hinta määräytyy tapahtuman keston, roolin ja valmistelun mukaan. Tiedustelulomakkeella saat tarjouksen juuri teidän tilaisuuteenne.' },
      { q: 'Voiko Tomaksen varata sekä juontajaksi että puhujaksi samaan tapahtumaan?', a: 'Voi. Moni tilaaja yhdistää juonnon ja oman puheenvuoron esimerkiksi kick-offiin, jolloin sama ihminen kantaa koko päivän.' },
    ],
  },

  {
    slug: 'juontaja-vantaa',
    name: 'Vantaa', in: 'Vantaalla', to: 'Vantaalle', region: 'pääkaupunkiseutu',
    area: ['Vantaa', 'Helsinki', 'Espoo', 'Kerava', 'Tuusula'],
    description: 'Juontaja ja puhuja Vantaalle. Tomas Suominen juontaa seminaarit, messut ja henkilöstöjuhlat Vantaalla lentoaseman alueelta Tikkurilaan.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Vantaalla – Aviapoliksen seminaareista Tikkurilan juhliin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa seminaareja, messuja ja henkilöstöjuhlia Vantaalla. Lentokentän tuntumassa järjestettäviin tilaisuuksiin hän tuo täsmällisen aikataulun ja rennon tunnelman.',
    context: [
      'Helsinki-Vantaan lentoaseman ja Aviapoliksen alueen ansiosta Vantaa on luonteva paikka tapahtumille, joihin osallistujat tulevat eri puolilta Suomea tai ulkomailta. Kokoushotellit ovat kävelymatkan päässä terminaaleista, ja päivä voidaan aikatauluttaa lentojen mukaan.',
      'Kaupungissa toimii paljon logistiikan, kaupan ja teollisuuden yrityksiä, ja tapahtumia järjestetään myös esimerkiksi Tikkurilassa ja tiedekeskus Heurekassa. Tomas pitää ohjelman tiukassakin aikataulussa, kun osa yleisöstä lähtee iltapäivän koneella.',
    ],
    eventTypes: [
      { title: 'Seminaarit lentokentän tuntumassa', text: 'Päivän tilaisuudet, joihin tullaan lentäen ja joiden aikataulun on pidettävä minuutilleen.' },
      { title: 'Logistiikan ja kaupan tapahtumat', text: 'Asiakaspäivät, kumppanitilaisuudet ja palkitsemiset alan yrityksille.' },
      { title: 'Messut ja lavaohjelmat', text: 'Lavaohjelman juonto, haastattelut ja yleisön houkuttelu osastolle tai lavan eteen.' },
      { title: 'Henkilöstöjuhlat', text: 'Pikkujoulut, vuosijuhlat ja kesäpäivät, joissa koko porukka viihtyy.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Keravalla ja Tuusulassa?', a: 'Kyllä. Tomas juontaa Vantaan lisäksi koko pääkaupunkiseudulla ja lähikunnissa, kuten Keravalla ja Tuusulassa.' },
      { q: 'Onnistuuko tiukka aikataulu, kun osa vieraista lentää?', a: 'Onnistuu. Ajojärjestys sovitaan etukäteen, ja Tomas pitää ohjelman aikataulussa niin, että vieraat ehtivät koneisiinsa.' },
      { q: 'Paljonko juontaja maksaa Vantaalla?', a: 'Hinta riippuu tapahtuman kestosta, roolista ja valmistelusta. Kerro tapahtumasta lomakkeella, niin saat tarjouksen.' },
      { q: 'Voiko Tomas juontaa messujen lavaohjelman?', a: 'Voi. Messuilla juontaja pitää lavaohjelman käynnissä, haastattelee esiintyjiä ja kerää ohikulkijat mukaan.' },
    ],
  },

  {
    slug: 'juontaja-tampere',
    name: 'Tampere', in: 'Tampereella', to: 'Tampereelle', region: 'Pirkanmaa',
    area: ['Tampere', 'Nokia', 'Ylöjärvi', 'Kangasala', 'Pirkkala', 'Lempäälä'],
    description: 'Juontaja ja keynote-puhuja Tampereelle. Tomas Suominen juontaa kongressit, gaalat ja yritystapahtumat Tampereella ja koko Pirkanmaalla.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Tampereella ja Pirkanmaalla – kongresseista areenagaaloihin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa kongresseja, gaaloja ja yritystapahtumia Tampereella. Isoissa tuotannoissa hän toimii tiiviisti tuotannon ja tekniikan kanssa.',
    context: [
      'Tampere on yksi Suomen suosituimmista kongressikaupungeista. Suuria tilaisuuksia järjestetään esimerkiksi Tampere-talossa ja Nokia Arenalla, ja keskustan hotellit ja ravintolat tarjoavat tiloja pienemmille juhlille.',
      'Tamperelainen yleisö arvostaa suoraa puhetta ja huumoria, joka ei yritä liikaa. Tomaksen juonto on samaa maata: selkeä, lämmin ja tilanteen mukaan joustava.',
    ],
    eventTypes: [
      { title: 'Kongressit ja seminaarit', text: 'Monipäiväiset ohjelmat, joissa juontaja sitoo puhujat yhteen ja pitää yleisön virkeänä.' },
      { title: 'Areenatapahtumat ja gaalat', text: 'Isot illat, joissa lavaa, tekniikkaa ja aikataulua johdetaan yhdessä tuotannon kanssa.' },
      { title: 'Teollisuuden asiakastilaisuudet', text: 'Tuotelanseeraukset ja asiakaspäivät, joissa sisältö on asiaa ja tunnelma silti hyvä.' },
      { title: 'Henkilöstöjuhlat', text: 'Vuosijuhlat ja pikkujoulut, joissa juontaja tuo illalle rytmin ja nauruja.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös muualla Pirkanmaalla?', a: 'Kyllä. Tomas juontaa koko Pirkanmaalla, esimerkiksi Nokialla, Ylöjärvellä, Kangasalla, Pirkkalassa ja Lempäälässä.' },
      { q: 'Sopiiko Tomas isoon areenatapahtumaan?', a: 'Sopii. Isoissa tuotannoissa juontaja toimii tiiviisti tuotannon ja tekniikan kanssa; ajojärjestys ja lavan hetket sovitaan etukäteen.' },
      { q: 'Paljonko juontaja maksaa Tampereella?', a: 'Hintaan vaikuttavat kesto, rooli ja valmistelun määrä – kongressipäivän juonto on eri kokonaisuus kuin parin tunnin gaala. Matka Tampereelle sovitaan samassa tarjouksessa, jonka saat lomakkeella.' },
      { q: 'Kuinka aikaisin juontaja kannattaa varata Tampereelle?', a: 'Kongressien ja syyskauden juhlien päivät täyttyvät nopeasti. Mitä aiemmin olet yhteydessä, sitä varmemmin toivottu päivä on vapaana.' },
    ],
  },

  {
    slug: 'juontaja-oulu',
    name: 'Oulu', in: 'Oulussa', to: 'Ouluun', region: 'Pohjois-Pohjanmaa',
    area: ['Oulu', 'Kempele', 'Liminka', 'Muhos', 'Ii'],
    description: 'Juontaja ja keynote-puhuja Ouluun. Tomas Suominen juontaa teknologiatapahtumat, seminaarit ja juhlat Oulussa ja Pohjois-Pohjanmaalla.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Oulussa – teknologiaseminaareista juhlagaaloihin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa teknologiatapahtumia, seminaareja ja juhlia Oulussa. Oppilaitoksille hän pitää myös inspiroivia puheenvuoroja.',
    context: [
      'Oulu on Pohjois-Suomen suurin kaupunki ja tunnettu teknologiakaupunki: täällä kehitetään langattomia verkkoja, ja Oulun yliopisto tekee kansainvälistä 6G-tutkimusta. Monessa tapahtumassa yleisönä on insinöörejä ja tutkijoita, joille juontajan pitää osata esitellä asiat napakasti.',
      'Juhlia ja konsertteja järjestetään esimerkiksi Oulun Musiikkikeskuksessa, ja kokouksia hotelleissa ja yliopiston tiloissa. Tomas tuo pohjoisen tilaisuuksiin saman energian kuin etelään.',
    ],
    eventTypes: [
      { title: 'Teknologia- ja tutkimustapahtumat', text: 'Seminaarit ja konferenssit, joissa asiantuntijasisältö tehdään helposti seurattavaksi.' },
      { title: 'Yritysten juhlat', text: 'Vuosijuhlat, pikkujoulut ja palkitsemiset, joissa ilta rakentuu hyvän rytmin varaan.' },
      { title: 'Oppilaitosten tapahtumat', text: 'Inspiroivat puheenvuorot ja juonnot yliopistolle, ammattikorkeakoululle ja toisen asteen oppilaitoksille.' },
      { title: 'Asiakas- ja kumppanitilaisuudet', text: 'Isännöinti, jossa vieraat tuntevat itsensä tervetulleiksi ja verkostoituminen sujuu.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Kempeleessä ja Limingassa?', a: 'Kyllä. Tomas juontaa Oulun lisäksi lähikunnissa, kuten Kempeleessä, Limingassa, Muhoksella ja Iissä.' },
      { q: 'Paljonko juontaja maksaa Oulussa?', a: 'Oulun keikan hintaan vaikuttavat tilaisuuden kesto, rooli ja valmistelu sekä matka pohjoiseen. Kaikki sovitaan yhdessä tarjouksessa – kerro tapahtumasta lomakkeella.' },
      { q: 'Sopiiko Tomas teknologiaseminaarin juontajaksi?', a: 'Sopii. Tomas valmistautuu ohjelmaan ja puhujiin etukäteen ja pitää asiapitoisenkin päivän sujuvana ja aikataulussa.' },
      { q: 'Pitääkö Tomas puheenvuoroja oppilaitoksille Oulussa?', a: 'Pitää. Puheenvuorot sopivat yliopistoille, ammattikorkeakouluille ja toisen asteen oppilaitoksille, joissa halutaan herättää ajattelua ja saada opiskelijat liikkeelle.' },
    ],
  },

  {
    slug: 'juontaja-turku',
    name: 'Turku', in: 'Turussa', to: 'Turkuun', region: 'Varsinais-Suomi',
    area: ['Turku', 'Kaarina', 'Raisio', 'Naantali', 'Lieto'],
    description: 'Juontaja ja keynote-puhuja Turkuun. Tomas Suominen juontaa messut, seminaarit ja juhlat Turussa ja koko Varsinais-Suomessa.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Turussa ja Varsinais-Suomessa – Logomosta messukeskukseen.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa messuja, seminaareja ja juhlia Turussa. Messuilla hän juontaa lavaohjelmat ja seminaarit, juhlissa koko illan.',
    context: [
      'Turku on Suomen vanhin kaupunki ja vilkas tapahtumakaupunki. Tilaisuuksia järjestetään esimerkiksi Logomossa, Turun Messu- ja Kongressikeskuksessa sekä jokirannan ravintoloissa ja hotelleissa.',
      'Alueen elinkeinoelämää värittävät meriteollisuus, lääke- ja bioala sekä kaksi yliopistoa. Tomas sovittaa juonnon yleisöön, oli edessä telakan henkilöstö, tutkijat tai asiakkaat.',
    ],
    eventTypes: [
      { title: 'Messut ja kongressit', text: 'Lavaohjelmat ja seminaaripäivät, joissa juontaja pitää langat käsissään.' },
      { title: 'Teollisuuden tilaisuudet', text: 'Asiakaspäivät, julkistukset ja henkilöstötilaisuudet meri- ja teknologiateollisuudelle.' },
      { title: 'Gaalat ja juhlat', text: 'Juhlavat illat, joissa ohjelma etenee tyylikkäästi ja palkitut saavat hetkensä.' },
      { title: 'Oppilaitosten tapahtumat', text: 'Puheenvuorot ja juonnot yliopistoille, ammattikorkeakouluille ja lukioille.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Kaarinassa, Raisiossa ja Naantalissa?', a: 'Kyllä. Tomas juontaa koko Varsinais-Suomessa, Turun lisäksi esimerkiksi Kaarinassa, Raisiossa, Naantalissa ja Liedossa.' },
      { q: 'Paljonko juontaja maksaa Turussa?', a: 'Hinta muodostuu tilaisuuden pituudesta ja siitä, juontaako Tomas, puhuuko vai isännöikö. Matka Turkuun sisältyy samaan tarjoukseen, jonka saat lomakkeella.' },
      { q: 'Voiko Tomas juontaa messujen lavaohjelman Turussa?', a: 'Voi. Tomas juontaa lavaohjelmia, haastattelee esiintyjiä ja pitää yleisön mukana koko messupäivän.' },
      { q: 'Millaisiin tapahtumiin Turussa Tomas sopii?', a: 'Messuille ja kongresseihin, yritysten asiakas- ja henkilöstötilaisuuksiin, gaaloihin sekä oppilaitosten tapahtumiin.' },
    ],
  },

  {
    slug: 'juontaja-lahti',
    name: 'Lahti', in: 'Lahdessa', to: 'Lahteen', region: 'Päijät-Häme',
    area: ['Lahti', 'Hollola', 'Orimattila', 'Heinola'],
    description: 'Juontaja ja keynote-puhuja Lahteen. Tomas Suominen juontaa yritystapahtumat, seminaarit ja juhlat Lahdessa ja koko Päijät-Hämeessä.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Lahdessa ja Päijät-Hämeessä – Sibeliustalosta urheilutapahtumiin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa yritystapahtumia, seminaareja ja juhlia Lahdessa. Urheilutapahtumien yhteydessä hän isännöi myös yhteistyökumppanien VIP-tilaisuuksia.',
    context: [
      'Lahti tunnetaan talviurheilusta ja Salpausselän kisoista, ja kaupunki oli Euroopan ympäristöpääkaupunki vuonna 2021. Tilaisuuksia järjestetään esimerkiksi Sibeliustalossa, urheilukeskuksessa ja keskustan hotelleissa.',
      'Lahteen on Helsingistä noin tunnin junamatka, joten sinne kokoonnutaan usein eri puolilta Etelä-Suomea. Tomas pitää huolen, että päivä alkaa ja päättyy aikataulussa.',
    ],
    eventTypes: [
      { title: 'Talviurheilun kumppani-illat', text: 'VIP-tilaisuudet ja yhteistyökumppanien illat hiihto- ja mäkikisojen yhteydessä.' },
      { title: 'Seminaarit ja kokoukset', text: 'Päivän ohjelmat, joissa juontaja esittelee puhujat ja pitää keskustelun liikkeessä.' },
      { title: 'Kestävyysaiheiset tilaisuudet', text: 'Ympäristö- ja vastuullisuusseminaarit, joissa vaikea aihe tehdään innostavaksi.' },
      { title: 'Henkilöstö- ja juhlatilaisuudet', text: 'Vuosijuhlat, pikkujoulut ja palkitsemiset, joissa koko porukka viihtyy.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Hollolassa ja Heinolassa?', a: 'Kyllä. Tomas juontaa koko Päijät-Hämeessä, esimerkiksi Hollolassa, Orimattilassa ja Heinolassa.' },
      { q: 'Voiko Tomas isännöidä VIP-tilaisuuden urheilutapahtuman yhteydessä?', a: 'Voi. VIP-isännöinnissä Tomas vastaanottaa vieraat, esittelee ohjelman ja pitää tunnelman yllä koko tilaisuuden ajan.' },
      { q: 'Paljonko juontaja maksaa Lahdessa?', a: 'Hinta määräytyy keston, roolin ja valmistelun mukaan: kumppani-illan isännöinti ja koko päivän seminaari ovat eri kokonaisuuksia. Saat tarjouksen lomakkeen kautta.' },
      { q: 'Millaisiin tapahtumiin Lahdessa Tomas sopii?', a: 'Yritysten seminaareihin ja juhliin, urheilutapahtumien kumppani-iltoihin, gaaloihin sekä oppilaitosten tapahtumiin.' },
    ],
  },

  {
    slug: 'juontaja-jyvaskyla',
    name: 'Jyväskylä', in: 'Jyväskylässä', to: 'Jyväskylään', region: 'Keski-Suomi',
    area: ['Jyväskylä', 'Muurame', 'Laukaa', 'Äänekoski'],
    description: 'Juontaja ja keynote-puhuja Jyväskylään. Tomas Suominen juontaa messut, kongressit ja juhlat Jyväskylässä ja koko Keski-Suomessa.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Jyväskylässä ja Keski-Suomessa – Paviljongista kampukselle.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa messuja, kongresseja ja juhlia Jyväskylässä. Opiskelijoille ja nuorille hän pitää inspiroivia puheenvuoroja.',
    context: [
      'Jyväskylä on koulutuksen ja urheilun kaupunki: täällä toimivat Jyväskylän yliopisto ja ammattikorkeakoulu, ja kesäisin kaupunki tunnetaan Rally Finlandista. Messut ja kongressit järjestetään usein Paviljongissa.',
      'Opiskelijoiden ja nuorten tapahtumissa juontajalta odotetaan aitoutta ja energiaa, yritysten tilaisuuksissa sujuvuutta. Tomas osaa molemmat.',
    ],
    eventTypes: [
      { title: 'Messut ja kongressit', text: 'Lavaohjelmat ja seminaarit, joissa juontaja pitää aikataulun ja tunnelman kohdallaan.' },
      { title: 'Oppilaitosten tapahtumat', text: 'Inspiroivat puheenvuorot opiskelijoille ja juonnot yliopiston ja ammattikorkeakoulun tilaisuuksiin.' },
      { title: 'Rallin ja urheilun kumppani-illat', text: 'Yhteistyökumppanien illat ja VIP-tilaisuudet, kun kaupungissa ajetaan rallia tai kisataan muuten.' },
      { title: 'Yritysten juhlat', text: 'Kick-offit, vuosijuhlat ja pikkujoulut, joissa koko porukka on mukana.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Muuramessa ja Laukaassa?', a: 'Kyllä. Tomas juontaa koko Keski-Suomessa, esimerkiksi Muuramessa, Laukaassa ja Äänekoskella.' },
      { q: 'Pitääkö Tomas puheenvuoroja opiskelijoille?', a: 'Pitää. Tomaksen puheenvuorot ovat inspiroivia ja käytännönläheisiä, ja ne sopivat hyvin opiskelijoille ja nuorille.' },
      { q: 'Paljonko juontaja maksaa Jyväskylässä?', a: 'Oppilaitoksen puheenvuoro ja messupäivän juonto ovat erikokoisia kokonaisuuksia, joten hinta riippuu kestosta ja roolista. Matka Jyväskylään sovitaan samalla – pyydä tarjous lomakkeella.' },
      { q: 'Voiko Tomas juontaa messut Paviljongissa?', a: 'Voi. Tomas juontaa messujen lavaohjelmia ja seminaareja ja pitää yleisön mukana koko päivän.' },
    ],
  },

  {
    slug: 'juontaja-seinajoki',
    name: 'Seinäjoki', in: 'Seinäjoella', to: 'Seinäjoelle', region: 'Etelä-Pohjanmaa',
    area: ['Seinäjoki', 'Lapua', 'Ilmajoki', 'Kurikka', 'Kauhava'],
    description: 'Juontaja ja keynote-puhuja Seinäjoelle. Tomas Suominen juontaa yrittäjätapahtumat, seminaarit ja juhlat Seinäjoella ja Etelä-Pohjanmaalla.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Seinäjoella ja Etelä-Pohjanmaalla – yrittäjäilloista kesän juhliin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa yrittäjätapahtumia, seminaareja ja juhlia Seinäjoella. Yrittäjäjuhlissa ja palkitsemisissa hän pitää illan rentona ja rytmikkäänä.',
    context: [
      'Etelä-Pohjanmaa tunnetaan yrittäjyydestään, ja Seinäjoella järjestetään paljon yrittäjä- ja elinkeinoelämän tilaisuuksia. Kesällä kaupunki täyttyy Tangomarkkinoiden ja Provinssin aikaan.',
      'Eteläpohjalainen yleisö arvostaa suoraa puhetta ja tekemisen meininkiä. Tomaksen juonto on samaa henkeä: asiat sanotaan suoraan, ja ilta etenee.',
    ],
    eventTypes: [
      { title: 'Yrittäjätapahtumat', text: 'Yrittäjäjuhlat, palkitsemiset ja verkostoitumisillat, joissa tunnelma on tärkein.' },
      { title: 'Seminaarit ja maakuntatilaisuudet', text: 'Päivän ohjelmat, joissa juontaja sitoo puhujat yhteen ja pitää aikataulun.' },
      { title: 'Kesän tapahtumat', text: 'Kesäkauden kumppani-illat ja juhlat, kun kaupungissa on muutenkin vilskettä.' },
      { title: 'Gaalat ja juhlat', text: 'Vuosijuhlat ja gaalat, joissa ohjelma kulkee ja palkitut saavat hetkensä.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Lapualla ja Ilmajoella?', a: 'Kyllä. Tomas juontaa koko Etelä-Pohjanmaalla, esimerkiksi Lapualla, Ilmajoella, Kurikassa ja Kauhavalla.' },
      { q: 'Kannattaako juontaja varata ajoissa kesän tapahtumiin?', a: 'Kannattaa. Kesä on Seinäjoella vilkasta aikaa, joten kesäkauden tilaisuuksiin kannattaa varata juontaja hyvissä ajoin.' },
      { q: 'Paljonko juontaja maksaa Seinäjoella?', a: 'Hinta riippuu siitä, kuinka pitkä ilta on ja mitä Tomakselta toivotaan – juontoa, puhetta vai molempia. Matka Seinäjoelle sovitaan tarjouksessa, jonka saat lomakkeella.' },
      { q: 'Sopiiko Tomas yrittäjäjuhlan juontajaksi?', a: 'Sopii. Tomas juontaa palkitsemiset ja juhlat niin, että ilta etenee rennosti ja juhlittavat saavat ansaitsemansa huomion.' },
    ],
  },

  {
    slug: 'juontaja-rovaniemi',
    name: 'Rovaniemi', in: 'Rovaniemellä', to: 'Rovaniemelle', region: 'Lappi',
    area: ['Rovaniemi', 'Levi', 'Ylläs', 'Saariselkä', 'Kemi'],
    description: 'Juontaja ja keynote-puhuja Rovaniemelle ja Lappiin. Tomas Suominen juontaa incentive-illat, seminaarit ja gaalat Rovaniemellä ja Lapissa.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Rovaniemellä ja Lapissa – incentive-illoista seminaareihin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa incentive-iltoja, seminaareja ja gaaloja Rovaniemellä ja Lapissa. Incentive-matkoilla hän juontaa gaalaillallisen ja palkitsemiset.',
    context: [
      'Rovaniemi on Lapin maakuntakeskus ja kansainvälinen matkailukohde. Yritykset tuovat tänne ryhmiä incentive-matkoille ja kokouksiin, ja tilaisuuksia järjestetään esimerkiksi Lappia-talossa, Arktikumissa ja Joulupukin Pajakylän alueella.',
      'Monet tapahtumat jatkuvat Lapin hiihtokeskuksissa, kuten Levillä, Ylläksellä ja Saariselällä. Tomas juontaa illan niin, että matkan kohokohta jää mieleen.',
    ],
    eventTypes: [
      { title: 'Incentive-matkojen illat', text: 'Gaalaillalliset ja palkitsemiset, jotka kruunaavat yrityksen matkan Lappiin.' },
      { title: 'Seminaarit ja kokoukset', text: 'Kokouspäivät, joissa ohjelma etenee ja vieraat jaksavat matkan jälkeenkin.' },
      { title: 'Matkailualan tilaisuudet', text: 'Alan seminaarit, julkistukset ja kumppani-illat.' },
      { title: 'Juhlat hiihtokeskuksissa', text: 'Henkilöstöjuhlat ja asiakasillat Levillä, Ylläksellä tai Saariselällä.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Levillä ja Ylläksellä?', a: 'Kyllä. Tomas juontaa Rovaniemen lisäksi Lapin hiihtokeskuksissa, kuten Levillä, Ylläksellä ja Saariselällä.' },
      { q: 'Voiko Tomaksen varata incentive-matkan gaalailtaan?', a: 'Voi. Tomas juontaa illan ohjelman ja palkitsemiset niin, että matkan kohokohta jää vieraiden mieleen.' },
      { q: 'Paljonko juontaja maksaa Rovaniemellä?', a: 'Hinta riippuu tapahtuman kestosta ja roolista. Lapin keikoilla matkajärjestelyt sovitaan tarjouksessa. Kerro tapahtumasta lomakkeella.' },
      { q: 'Kuinka aikaisin juontaja kannattaa varata Lappiin?', a: 'Hyvissä ajoin, erityisesti joulusesonkiin ja talven sesonkiin, jolloin myös majoitus ja lennot varataan aikaisin.' },
    ],
  },

  {
    slug: 'juontaja-pori',
    name: 'Pori', in: 'Porissa', to: 'Poriin', region: 'Satakunta',
    area: ['Pori', 'Ulvila', 'Rauma', 'Harjavalta'],
    description: 'Juontaja ja keynote-puhuja Poriin. Tomas Suominen juontaa keskustelutilaisuudet, seminaarit ja juhlat Porissa ja koko Satakunnassa.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Porissa ja Satakunnassa – kesän keskusteluista teollisuuden juhliin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa keskustelutilaisuuksia, seminaareja ja juhlia Porissa. Paneeleissa hän pitää puheenvuorot tasapainossa ja keskustelun aikataulussa.',
    context: [
      'Pori tunnetaan kesän tapahtumistaan: Pori Jazz ja yhteiskunnallinen keskustelutapahtuma SuomiAreena tuovat kaupunkiin kymmeniätuhansia kävijöitä. Ympäri vuoden tilaisuuksia järjestetään esimerkiksi Promenadikeskuksessa ja keskustan hotelleissa.',
      'Satakunta on vahvaa teollisuusaluetta, ja alueen yrityksillä on paljon asiakas- ja henkilöstötilaisuuksia. Tomas juontaa ne suoraan ja lämpimästi.',
    ],
    eventTypes: [
      { title: 'Keskustelu- ja paneelitilaisuudet', text: 'Paneelit, haastattelut ja yleisökeskustelut, joissa juontaja pitää puheenvuorot tasapainossa.' },
      { title: 'Kesän tapahtumat', text: 'Kumppani-illat ja asiakastilaisuudet kesän suurtapahtumien aikaan.' },
      { title: 'Teollisuuden tilaisuudet', text: 'Asiakaspäivät, henkilöstöjuhlat ja palkitsemiset alueen yrityksille.' },
      { title: 'Gaalat ja juhlat', text: 'Vuosijuhlat ja gaalat, joissa ilta etenee tyylikkäästi.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Raumalla ja Ulvilassa?', a: 'Kyllä. Tomas juontaa koko Satakunnassa, esimerkiksi Raumalla, Ulvilassa ja Harjavallassa.' },
      { q: 'Voiko Tomas juontaa paneelikeskustelun?', a: 'Voi. Tomas valmistelee kysymykset etukäteen, pitää puheenvuorot tasapainossa ja huolehtii, että keskustelu pysyy aikataulussa.' },
      { q: 'Paljonko juontaja maksaa Porissa?', a: 'Hinta riippuu tilaisuuden kestosta ja roolista; paneelin juonto valmistellaan eri tavalla kuin juhlaillan isännöinti. Matkat sovitaan tarjouksessa – pyydä se lomakkeella.' },
      { q: 'Kannattaako juontaja varata ajoissa kesäksi?', a: 'Kannattaa. Kesän suurtapahtumien aikaan Porissa on vilkasta, joten varaa juontaja ja majoitus hyvissä ajoin.' },
    ],
  },

  {
    slug: 'juontaja-vaasa',
    name: 'Vaasa', in: 'Vaasassa', to: 'Vaasaan', region: 'Pohjanmaa',
    area: ['Vaasa', 'Mustasaari', 'Laihia', 'Vöyri'],
    description: 'Juontaja ja keynote-puhuja Vaasaan. Tomas Suominen juontaa energia-alan seminaarit, yritystapahtumat ja juhlat Vaasassa ja Pohjanmaalla.',
    lede: 'Juonnot, puhujakeikat ja VIP-isännöinti Vaasassa ja Pohjanmaalla – energia-alan seminaareista juhliin.',
    summary: 'Tomas Suominen on tapahtumajuontaja ja keynote-puhuja, joka juontaa seminaareja, yritystapahtumia ja juhlia Vaasassa. Asiantuntijayleisölle hän tekee vaativastakin ohjelmasta helposti seurattavan.',
    context: [
      'Vaasan seudulla toimii Pohjoismaiden suurin energiateknologian keskittymä, ja alueella on muun muassa Wärtsilän, ABB:n ja Danfossin toimintoja. Seminaareissa ja asiakastilaisuuksissa yleisö on usein insinöörejä ja asiantuntijoita.',
      'Vaasa on kaksikielinen yliopistokaupunki. Tomas juontaa suomeksi; jos tilaisuutenne tarvitsee myös muita kieliä, kerro siitä tiedustelussa.',
    ],
    eventTypes: [
      { title: 'Energia-alan seminaarit', text: 'Asiantuntijapäivät ja julkistukset, joissa vaativa sisältö tehdään helposti seurattavaksi.' },
      { title: 'Yritysten asiakastilaisuudet', text: 'Asiakaspäivät ja kumppani-illat, joissa isäntä pitää huolen vieraista.' },
      { title: 'Oppilaitosten tapahtumat', text: 'Puheenvuorot ja juonnot yliopistoille ja ammattikorkeakouluille.' },
      { title: 'Henkilöstöjuhlat', text: 'Vuosijuhlat ja pikkujoulut, joissa ilta etenee ja kaikki viihtyvät.' },
    ],
    references: [],
    faq: [
      { q: 'Juontaako Tomas tapahtumia myös Mustasaaressa ja Laihialla?', a: 'Kyllä. Tomas juontaa koko Pohjanmaalla, esimerkiksi Mustasaaressa, Laihialla ja Vöyrillä.' },
      { q: 'Sopiiko Tomas energia-alan seminaarin juontajaksi?', a: 'Sopii. Tomas valmistautuu ohjelmaan ja puhujiin etukäteen ja pitää asiantuntijapäivän sujuvana ja aikataulussa.' },
      { q: 'Millä kielellä Tomas juontaa?', a: 'Tomas juontaa suomeksi. Jos tilaisuus on kaksi- tai monikielinen, kerro siitä tiedustelussa, niin katsotaan sopiva ratkaisu.' },
      { q: 'Paljonko juontaja maksaa Vaasassa?', a: 'Vaasan tilaisuuksissa hintaan vaikuttavat kesto, rooli ja valmistelu, ja matka Pohjanmaalle sisältyy samaan tarjoukseen. Kerro tapahtumasta lomakkeella.' },
    ],
  },
];
