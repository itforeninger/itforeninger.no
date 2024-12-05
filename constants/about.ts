interface Member {
  name: string;
  link: string;
  location: string;
  institution: string;
  memberCount?: number;
}

export const MEMBERS: Member[] = [
  {
    name: 'Online',
    link: 'https://online.ntnu.no',
    location: 'Trondheim',
    institution: 'NTNU',
    memberCount: 600,
  },
  {
    name: 'Abakus',
    link: 'https://abakus.no',
    location: 'Trondheim',
    institution: 'NTNU',
    memberCount: 1600,
  },
  {
    name: 'TIHLDE',
    link: 'https://tihlde.org',
    location: 'Trondheim',
    institution: 'NTNU',
    memberCount: 573,
  },
  {
    name: 'Cybernetisk Selskab',
    link: 'https://cyb.no',
    location: 'Oslo',
    institution: 'UiO',
    memberCount: 2500,
  },
  {
    name: 'Navet',
    link: 'https://ifinavet.no',
    location: 'Oslo',
    institution: 'UiO',
  },
  {
    name: 'Beta',
    link: 'https://betauia.net',
    location: 'Grimstad',
    institution: 'UiA',
    memberCount: 450,
  },
  {
    name: 'Syntax',
    link: 'https://www.facebook.com/SyntaxAalesund',
    location: 'Ålesund',
    institution: 'NTNU',
    memberCount: 340,
  },
  {
    name: 'echo',
    link: 'https://echo.uib.no',
    location: 'Bergen',
    institution: 'UiB',
    memberCount: 700,
  },
  {
    name: 'Tromsøstudentenes Dataforening',
    link: 'https://td.org.uit.no',
    location: 'Tromsø',
    institution: 'UiT',
    memberCount: 400,
  },
  {
    name: 'Login',
    link: 'https://www.logntnu.no',
    location: 'Gjøvik',
    institution: 'NTNU',
    memberCount: 950,
  },
  {
    name: 'Enigma',
    link: 'https://www.facebook.com/pg/HIOF.Enigma/',
    location: 'Remmen, Halden',
    institution: 'HIOF',
    memberCount: 700,
  },
  {
    name: 'dagen@ifi',
    link: 'https://dagenatifi.no/',
    location: 'Oslo',
    institution: 'UiO',
  },
  {
    name: 'ISI',
    link: 'http://www.isi-uis.no/',
    location: 'Stavanger',
    institution: 'UiS',
    memberCount: 130,
  },
  {
    name: 'DataSci',
    link: 'https://www.datascinmbu.no/',
    location: 'Ås',
    institution: 'NMBU',
  },
];

export const CONTACT_EMAIL = 'kontakt@itforeninger.no';

export const COORDINATOR_EMAIL = 'koordinator@itforeninger.no';

export const COORDINATORS = ['Åsne Midtbø Øyulvstad', 'Hanne A. Hugem'];

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
