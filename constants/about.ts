interface Member {
  name: string;
  link: string;
  location: string;
  instituation: string;
  memberCount?: number;
}

export const MEMBERS: Member[] = [
  {
    name: 'Online',
    link: 'https://online.ntnu.no',
    location: 'Trondheim',
    instituation: 'NTNU',
    memberCount: 600,
  },
  {
    name: 'Abakus',
    link: 'https://abakus.no',
    location: 'Trondheim',
    instituation: 'NTNU',
    memberCount: 1600,
  },
  {
    name: 'TIHLDE',
    link: 'https://tihlde.org',
    location: 'Trondheim',
    instituation: 'NTNU',
    memberCount: 573,
  },
  {
    name: 'Cybernetisk Selskab',
    link: 'https://cyb.no',
    location: 'Oslo',
    instituation: 'UiO',
    memberCount: 2500,
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
    memberCount: 450,
  },
  {
    name: 'Syntax',
    link: 'https://www.facebook.com/SyntaxAalesund',
    location: 'Ålesund',
    instituation: 'NTNU',
    memberCount: 340,
  },
  {
    name: 'echo',
    link: 'https://echo.uib.no',
    location: 'Bergen',
    instituation: 'UiB',
    memberCount: 700,
  },
  {
    name: 'Tromsøstudentenes Dataforening',
    link: 'https://td.org.uit.no',
    location: 'Tromsø',
    instituation: 'UiT',
    memberCount: 400,
  },
  {
    name: 'Login',
    link: 'https://www.logntnu.no',
    location: 'Gjøvik',
    instituation: 'NTNU',
    memberCount: 950,
  },
  {
    name: 'Enigma',
    link: 'https://www.facebook.com/pg/HIOF.Enigma/',
    location: 'Remmen, Halden',
    instituation: 'HIOF',
    memberCount: 700,
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
    memberCount: 130,
  },
  {
    name: 'DataSci',
    link: 'https://www.datascinmbu.no/',
    location: 'Ås',
    instituation: 'NMBU',
  },
];

export const CONTACT_EMAIL = 'kontakt@itforeninger.no';

export const COORDINATOR_EMAIL = 'koordinator@itforeninger.no';

export const COORDINATORS = ['Finn Olav Sagen','Andreas Ulvig'];

export const GITHUB_URL = 'https://github.com/itforeninger';

export const CANONICAL_URL = 'https://itforeninger.no';

export const CANONICAL_LOGO = `${CANONICAL_URL}/LogoGrønnFyllHvitBakgrunn.png`;

export const PAGE_DESCRIPTION = `
Forente IT-foreninger
`;

export const PAGE_KEYWORDS = [
  'FIF',
  'Forente IT-foreninger',
  'itforeninger',
  'student',
  'it-student',
  'studentforening',
];

export const DEFAULT_AUTHOR = 'Forente IT-foreninger';
