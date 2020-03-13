interface Member {
  name: string;
  link: string;
  location: string;
  instituation: string;
}

export const MEMBERS: Member[] = [
  {
    name: 'Online',
    link: 'https://online.ntnu.no',
    location: 'Trondheim',
    instituation: 'NTNU',
  },
  {
    name: 'Abakus',
    link: 'https://abakus.no',
    location: 'Trondheim',
    instituation: 'NTNU',
  },
  {
    name: 'TIHLDE',
    link: 'https://tihlde.org',
    location: 'Trondheim',
    instituation: 'NTNU',
  },
  {
    name: 'Cybernetisk Selskab',
    link: 'https://cyb.no',
    location: 'Oslo',
    instituation: 'UiO',
  },
  {
    name: 'Navet',
    link: 'https://ifinavet.no',
    location: 'Oslo',
    instituation: 'UiO',
  },
  {
    name: 'Beta',
    link: 'https://betauia.net',
    location: 'Grimstad',
    instituation: 'UiA',
  },
  {
    name: 'Epsilon',
    link: 'https://www.facebook.com/EpsilonAalesund/',
    location: 'Ålesund',
    instituation: 'NTNU',
  },
  {
    name: 'Echo',
    link: 'https://echo.uib.no',
    location: 'Bergen',
    instituation: 'UiB',
  },
  {
    name: 'Tromsøstudentenes Dataforening',
    link: 'https://td.org.uit.no',
    location: 'Tromsø',
    instituation: 'UiT',
  },
  {
    name: 'Login',
    link: 'https://www.logntnu.no',
    location: 'Gjøvik',
    instituation: 'NTNU',
  },
  {
    name: 'Enigma',
    link: 'https://www.facebook.com/pg/HIOF.Enigma/',
    location: 'Remmen, Halden',
    instituation: 'HIOF',
  },
  {
    name: 'dagen@ifi',
    link: 'https://dagenatifi.no/',
    location: 'Oslo',
    instituation: 'UiO',
  },
  {
    name: 'ISI',
    link: 'http://www.isi-uis.no/nb/',
    location: 'Stavanger',
    instituation: 'UiS',
  },
];

export const CONTACT_EMAIL = 'kontakt@itforeninger.no';
