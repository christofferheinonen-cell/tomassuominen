// Privacy policy (tietosuojaseloste) and terms of use (käyttöehdot).
// Rendered by tools/build.mjs into /tietosuoja/ and /kayttoehdot/.
//
// The privacy policy describes what the site actually does. If you add
// analytics, ad pixels, a newsletter or another form service, update the
// sections on processors, transfers and cookies before it goes live.

import { COMPANY as C, LEGAL_UPDATED } from './site.mjs';

const controller = [
  `<strong>${C.name}</strong>`,
  `Y-tunnus ${C.businessId}`,
  C.address,
  `Sähköposti: <a href="mailto:${C.email}">${C.email}</a>`,
].filter(Boolean).join('<br>');

export const legalPages = [
  {
    slug: 'tietosuoja',
    title: 'Tietosuojaseloste | Tomas Suominen',
    description: `Miten ${C.name} käsittelee henkilötietoja tomassuominen.fi-sivustolla ja keikkatiedustelujen yhteydessä.`,
    heading: 'Tietosuojaseloste',
    body: `
      <p class="legal__lede">Tässä selosteessa kerrotaan, mitä henkilötietoja ${C.name} käsittelee, miksi ja kuinka kauan, sekä mitä oikeuksia sinulla on. Seloste perustuu EU:n yleiseen tietosuoja-asetukseen (GDPR) ja Suomen tietosuojalakiin.</p>

      <h2>1. Rekisterinpitäjä</h2>
      <p>${controller}</p>
      <p>Tietosuojaa koskevissa asioissa voit olla yhteydessä: ${C.contactPerson}, <a href="mailto:${C.email}">${C.email}</a>.</p>

      <h2>2. Mitä tietoja käsittelemme</h2>
      <ul>
        <li><strong>Tiedustelulomake:</strong> nimi, sähköpostiosoite, puhelinnumero (vapaaehtoinen), yritys tai organisaatio, tapahtuman tiedot (palvelu, tapahtuman tyyppi, päivämäärä, paikkakunta, yleisön koko, kieli ja budjetti, jos ilmoitat sen), lisätiedot sekä sivu, jolta tiedustelu lähetettiin.</li>
        <li><strong>Sähköposti ja muu yhteydenpito:</strong> viestien sisältö ja yhteystiedot.</li>
        <li><strong>Asiakkuus:</strong> yhteyshenkilön ja asiakasyrityksen tiedot, tarjoukset, sopimukset ja laskutustiedot.</li>
        <li><strong>Tekniset tiedot:</strong> sivuston palvelin voi tallentaa tavanomaisiin lokitietoihin IP-osoitteen, ajankohdan, pyydetyn sivun ja selaimen tiedot.</li>
      </ul>
      <p>Saamme tiedot sinulta itseltäsi. Emme pyydä emmekä tarvitse arkaluonteisia tietoja.</p>

      <h2>3. Käyttötarkoitukset ja oikeusperusteet</h2>
      <div class="legal__table" role="region" aria-label="Käyttötarkoitukset ja oikeusperusteet" tabindex="0">
        <table>
          <thead><tr><th scope="col">Tarkoitus</th><th scope="col">Oikeusperuste</th></tr></thead>
          <tbody>
            <tr><td>Tiedusteluun vastaaminen ja tarjouksen laatiminen</td><td>Sopimusta edeltävät toimenpiteet (GDPR 6.1 b). Kun toimit yrityksen tai yhteisön puolesta: oikeutettu etu vastata organisaation tiedusteluun (6.1 f).</td></tr>
            <tr><td>Keikan sopiminen, valmistelu ja toteutus</td><td>Sopimuksen täytäntöönpano (6.1 b) tai oikeutettu etu hoitaa asiakasyrityksen kanssa tehtyä sopimusta (6.1 f).</td></tr>
            <tr><td>Laskutus ja kirjanpito</td><td>Lakisääteinen velvoite (6.1 c), kirjanpitolaki.</td></tr>
            <tr><td>Sivuston toiminta ja tietoturva</td><td>Oikeutettu etu (6.1 f).</td></tr>
          </tbody>
        </table>
      </div>
      <p>Emme käytä tietoja suoramarkkinointiin ilman suostumustasi emmekä tee automaattisia päätöksiä tai profilointia.</p>

      <h2>4. Säilytysajat</h2>
      <ul>
        <li>Tiedustelut, jotka eivät johda sopimukseen, poistetaan viimeistään 12 kuukauden kuluttua viimeisestä yhteydenpidosta.</li>
        <li>Asiakkuuden tietoja säilytetään asiakassuhteen ajan ja sen jälkeen enintään kolme vuotta mahdollisten vaatimusten selvittämiseksi.</li>
        <li>Kirjanpitoaineisto säilytetään kirjanpitolain mukaisesti: tositteet kuusi vuotta ja kirjanpitokirjat kymmenen vuotta tilikauden päättymisestä.</li>
      </ul>

      <h2>5. Tietojen vastaanottajat ja käsittelijät</h2>
      <p>Emme myy tai luovuta tietoja markkinointiin. Tietoja käsittelevät puolestamme seuraavat palveluntarjoajat:</p>
      <ul>
        <li><strong>FormSubmit</strong> (formsubmit.co) välittää tiedustelulomakkeen tiedot sähköpostiimme.</li>
        <li><strong>Microsoft</strong> (Outlook.com) tarjoaa sähköpostipalvelun, jossa tiedustelut ja viestit säilytetään.</li>
        <li><strong>Sivuston palvelinpalvelun tarjoaja</strong> ylläpitää sivustoa ja sen lokitietoja.</li>
        <li>Mahdollinen <strong>kirjanpito- tai laskutuspalvelu</strong> käsittelee laskutukseen tarvittavia tietoja.</li>
      </ul>
      <p>Viranomaisille tietoja luovutetaan vain lain velvoittamana.</p>

      <h2>6. Tietojen siirrot EU:n ja ETA:n ulkopuolelle</h2>
      <p>FormSubmit ja Microsoft voivat käsitellä tietoja myös EU:n ja ETA:n ulkopuolella, esimerkiksi Yhdysvalloissa. Microsoft on sitoutunut EU:n ja Yhdysvaltojen väliseen tietosuojakehykseen (EU–US Data Privacy Framework), johon siirrot voivat perustua. Muissa tapauksissa siirrot perustuvat Euroopan komission hyväksymiin vakiosopimuslausekkeisiin tai muuhun tietosuoja-asetuksen mukaiseen siirtoperusteeseen.</p>

      <h2>7. Evästeet ja seuranta</h2>
      <p>Sivusto ei käytä evästeitä, kävijäseurantaa eikä mainosseurantaa, eikä se tallenna selaimeesi tietoja. Fontit ladataan omalta palvelimeltamme, joten sivujen avaaminen ei välitä IP-osoitettasi kolmansille osapuolille. Tiedustelulomake lähettää tiedot FormSubmit-palveluun vasta, kun painat lähetä-painiketta.</p>
      <p>Jos otamme myöhemmin käyttöön evästeitä tai seurantaa, joka ei ole sivuston toiminnan kannalta välttämätöntä, pyydämme siihen ensin suostumuksesi ja päivitämme tämän selosteen.</p>

      <h2>8. Tietoturva</h2>
      <p>Tiedustelulomakkeen tiedot välitetään salattua yhteyttä käyttäen. Sähköposti ja muut järjestelmät on suojattu käyttäjätunnuksin ja salasanoin, ja tietoihin pääsevät vain ne, jotka tarvitsevat niitä työssään.</p>

      <h2>9. Sinun oikeutesi</h2>
      <p>Sinulla on oikeus:</p>
      <ul>
        <li>saada tietää, mitä tietoja sinusta käsitellään, ja saada niistä kopio</li>
        <li>vaatia virheellisten tietojen oikaisemista</li>
        <li>vaatia tietojesi poistamista tai käsittelyn rajoittamista</li>
        <li>vastustaa oikeutettuun etuun perustuvaa käsittelyä</li>
        <li>siirtää itse antamasi tiedot järjestelmästä toiseen</li>
        <li>peruuttaa antamasi suostumus milloin tahansa, jos käsittely perustuu suostumukseen.</li>
      </ul>
      <p>Lähetä pyyntö osoitteeseen <a href="mailto:${C.email}">${C.email}</a>. Vastaamme kuukauden kuluessa. Voimme pyytää sinua todentamaan henkilöllisyytesi ennen tietojen luovuttamista.</p>
      <p>Jos katsot, että tietojesi käsittely rikkoo tietosuojalainsäädäntöä, voit tehdä valituksen tietosuojavaltuutetun toimistoon (<a href="https://tietosuoja.fi" rel="noopener">tietosuoja.fi</a>).</p>

      <h2>10. Muutokset</h2>
      <p>Päivitämme selostetta, kun käsittely muuttuu. Voimassa oleva versio on aina tällä sivulla.</p>`,
  },
  {
    slug: 'kayttoehdot',
    title: 'Käyttöehdot | Tomas Suominen',
    description: `tomassuominen.fi-sivuston käyttöehdot sekä tiedustelujen ja varausten yleiset periaatteet. Palvelun tarjoaa ${C.name}.`,
    heading: 'Käyttöehdot',
    body: `
      <p class="legal__lede">Näitä ehtoja sovelletaan tomassuominen.fi-sivuston käyttöön ja sen kautta lähetettyihin tiedusteluihin. Käyttämällä sivustoa hyväksyt ehdot.</p>

      <h2>1. Palveluntarjoaja</h2>
      <p>${controller}</p>

      <h2>2. Sivuston sisältö</h2>
      <p>Sivuston tiedot palveluista ovat yleisluontoisia. Pyrimme pitämään ne ajan tasalla, mutta pidätämme oikeuden muuttaa sisältöä ja palveluita ilman ennakkoilmoitusta.</p>

      <h2>3. Tiedustelut ja varaukset</h2>
      <ul>
        <li>Tiedustelulomakkeen lähettäminen ei ole sitova varaus kummallekaan osapuolelle.</li>
        <li>Lähetämme tiedusteluun vastauksena tarjouksen. Sopimus syntyy, kun molemmat osapuolet ovat vahvistaneet tarjouksen kirjallisesti, myös sähköposti käy.</li>
        <li>Hinta, aikataulu, matkajärjestelyt, peruutusehdot ja muut yksityiskohdat sovitaan tarjouksessa tai erillisessä sopimuksessa. Tarjous on voimassa siinä mainitun ajan.</li>
        <li>Jos tarjouksen tai sopimuksen ehdot poikkeavat näistä ehdoista, noudatetaan tarjousta tai sopimusta.</li>
      </ul>

      <h2>4. Immateriaalioikeudet</h2>
      <p>Sivuston tekstit, kuvat, ulkoasu ja muu sisältö kuuluvat ${C.name}:lle tai sen lisenssinantajille. Asiakkaiden logot ja tavaramerkit kuuluvat omistajilleen. Sisältöä ei saa kopioida tai käyttää kaupallisesti ilman lupaa; lyhyet lainaukset lähde mainiten ovat sallittuja.</p>

      <h2>5. Ulkoiset linkit</h2>
      <p>Sivustolla voi olla linkkejä muiden ylläpitämille sivustoille. Emme vastaa niiden sisällöstä tai tietosuojakäytännöistä.</p>

      <h2>6. Vastuunrajoitus</h2>
      <p>Sivusto tarjotaan sellaisenaan. Emme takaa, että sivusto on käytettävissä keskeytyksettä tai virheettä, emmekä vastaa sivuston käytöstä aiheutuvista välillisistä vahingoista. Rajoitus ei koske vastuuta, jota ei voida pakottavan lainsäädännön nojalla rajoittaa.</p>

      <h2>7. Henkilötiedot</h2>
      <p>Henkilötietojen käsittelystä kerrotaan <a href="../tietosuoja/">tietosuojaselosteessa</a>.</p>

      <h2>8. Sovellettava laki ja riidat</h2>
      <p>Ehtoihin sovelletaan Suomen lakia. Erimielisyydet pyritään ratkaisemaan ensin neuvottelemalla. Jos sopuun ei päästä, riidat ratkaistaan ${C.name}:n kotipaikan käräjäoikeudessa.</p>
      <p>Kuluttaja-asiakas voi saattaa riidan myös kuluttajariitalautakunnan käsiteltäväksi (<a href="https://www.kuluttajariita.fi" rel="noopener">kuluttajariita.fi</a>) tai nostaa kanteen oman kotikuntansa käräjäoikeudessa.</p>

      <h2>9. Muutokset</h2>
      <p>Voimme päivittää näitä ehtoja. Voimassa oleva versio on aina tällä sivulla.</p>`,
  },
];

export const legalUpdated = LEGAL_UPDATED;
