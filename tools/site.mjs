// Company details used in the footer, the privacy policy, the terms and the
// structured data. Edit here, then run: node tools/build.mjs
//
// Finnish law (laki sähköisen viestinnän palveluista, 26 §) requires a business
// website to show the company name, business ID, geographic address and email.
// The build warns while any of them is missing.

export const COMPANY = {
  name: 'TS Ventures Oy',
  businessId: '3391624-2',
  address: '',                 // registered street address, e.g. 'Esimerkkikatu 1, 00100 Helsinki'
  domicile: '',                // kotipaikka from the trade register, e.g. 'Helsinki'
  email: 'tomas.suominen@hotmail.com',
  contactPerson: 'Tomas Suominen',
};

// Date shown as "Päivitetty" on the legal pages. Change it whenever their content changes.
export const LEGAL_UPDATED = '7.10.2026';
