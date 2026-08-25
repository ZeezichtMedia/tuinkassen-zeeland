// Aanbod van Tuinkassen Zeeland.
// Eigen kassen: maten van hun bestaande site (tuinkassenzeeland.nl/PRODUCTEN).
// Euroserre: modellen en maten van euroserre.com, geleverd en geplaatst door Markusse.

export type EigenKas = {
  slug: string;
  naam: string;
  type: string;
  breedte: string;
  lengte: string;
  omschrijving: string;
  voor: string;
};

export const eigenKassen: EigenKas[] = [
  {
    slug: 'venlo',
    naam: 'Venlo kas',
    type: 'Vrijstaand, gegalvaniseerd staal',
    breedte: '3,40 m',
    lengte: '3,75 tot 10 m',
    omschrijving:
      'De klassieke Venlo, hetzelfde profiel dat in de professionele kassenbouw staat. Rechte gevels, veel licht, en ruimte om rechtop te werken tot in de hoeken.',
    voor: 'Wie serieus wil telen en een kas wil die decennia meegaat.',
  },
  {
    slug: 'belgische',
    naam: 'Belgische kas',
    type: 'Vrijstaand, gegalvaniseerd staal',
    breedte: '3,80 m',
    lengte: '4,50 tot 10 m',
    omschrijving:
      'Te herkennen aan de schuine regels in de gevel. Breder en met een steilere kap dan de Venlo, waardoor regen en vuil sneller aflopen en je extra hoogte houdt boven het middenpad.',
    voor: 'Grote moestuinen en wie hoog wil kunnen opbinden.',
  },
  {
    slug: 'compact-230',
    naam: 'Compact 2,30',
    type: 'Vrijstaand, gegalvaniseerd staal',
    breedte: '2,30 m',
    lengte: '3,00 m of 3,70 m',
    omschrijving:
      'Onze kleinste maat, met precies hetzelfde staal en glas als de grote kassen. Past in vrijwel elke achtertuin zonder dat je inlevert op stevigheid.',
    voor: 'Stadstuinen en kleinere percelen.',
  },
  {
    slug: 'compact-280',
    naam: 'Compact 2,80',
    type: 'Vrijstaand, gegalvaniseerd staal',
    breedte: '2,80 m',
    lengte: '3,75 m',
    omschrijving:
      'Een halve meter breder dan de 2,30, en dat scheelt: je houdt aan beide kanten een volwaardig bed over met een pad ertussen.',
    voor: 'De meest gekozen maat voor een gewone tuin.',
  },
  {
    slug: 'maatwerk',
    naam: 'Maatwerk',
    type: 'Vrijstaand, gegalvaniseerd staal',
    breedte: 'In overleg',
    lengte: 'In overleg',
    omschrijving:
      'Rechthoekig, vierkant of rond: we bouwen je kas in bijna elk formaat dat je wilt. Het glas maken we zelf op maat, dus een afwijkende hoek of lengte is geen probleem.',
    voor: 'Een lastige hoek, een bestaande muur of gewoon een eigen plan.',
  },
];

export type Serre = {
  slug: string;
  naam: string;
  categorie: 'Vrijstaand' | 'Tegen een muur';
  breedte: string;
  minLengte: string;
  omschrijving: string;
  /* De vier modellen die Euroserre zelf als bestseller voert
     (euroserre.com/serres/bestsellers). Wim wil die lijst voorop, en hem elk
     jaar in februari kunnen verversen. */
  bestseller?: boolean;
};

export const euroSerres: Serre[] = [
  {
    slug: 'euro-micro',
    naam: 'Euro-Micro',
    categorie: 'Vrijstaand',
    breedte: '1,61 m',
    minLengte: '2,36 m',
    omschrijving:
      'De kleinste van de reeks. Smal genoeg voor een strook langs de schutting, en nog steeds een volwaardige serre.',
  },
  {
    slug: 'euro-maxi',
    bestseller: true,
    naam: 'Euro-Maxi',
    categorie: 'Vrijstaand',
    breedte: '2,36 m of 3,09 m',
    minLengte: '2,36 m',
    omschrijving:
      'Het best verkochte model van Euroserre. Rechte lijnen, veel glas en in twee breedtes te krijgen.',
  },
  {
    slug: 'euro-rustiq',
    bestseller: true,
    naam: 'Euro-Rustiq',
    categorie: 'Vrijstaand',
    breedte: '2,36 m of 3,09 m',
    minLengte: '2,36 m',
    omschrijving:
      'Zelfde maatvoering als de Maxi, maar met een landelijker profiel. Staat mooi bij een oudere woning of een boerderij.',
  },
  {
    slug: 'euro-cottage',
    naam: 'Euro-Cottage',
    categorie: 'Vrijstaand',
    breedte: '2,36 m of 3,09 m',
    minLengte: '2,36 m',
    omschrijving:
      'Een serre met een cottage-uitstraling: sierlijke details, bedoeld om ook gewoon mooi te zijn in je tuin.',
  },
  {
    slug: 'euro-starr',
    naam: 'Euro-Starr',
    categorie: 'Vrijstaand',
    breedte: '3,09 m of 3,80 m',
    minLengte: '3,09 m',
    omschrijving:
      'Ruim bemeten en strak vormgegeven. Genoeg breedte voor twee bedden en een werkbank.',
  },
  {
    slug: 'euro-plus',
    bestseller: true,
    naam: 'Euro-Plus',
    categorie: 'Vrijstaand',
    breedte: '3,80 m tot 6,04 m',
    minLengte: '3,09 m',
    omschrijving:
      'Vier breedtes tot ruim zes meter. Hier kan je echt in rondlopen en werken, ook met kruiwagen.',
  },
  {
    slug: 'euro-super',
    naam: 'Euro-Super',
    categorie: 'Vrijstaand',
    breedte: '4,78 m tot 12,58 m',
    minLengte: '3,09 m',
    omschrijving:
      'De grootste uit de reeks, tot ruim twaalf meter breed. Voor kwekerijen, scholen en verenigingen.',
  },
  {
    slug: 'euro-victorian',
    naam: 'Euro-Victorian',
    categorie: 'Vrijstaand',
    breedte: '3,09 m',
    minLengte: '4,57 m',
    omschrijving:
      'Klassiek Engels model met een uitgesproken nok. Een serre die je neerzet omdat je hem mooi vindt.',
  },
  {
    slug: 'euro-modern',
    naam: 'Euro-Modern',
    categorie: 'Vrijstaand',
    breedte: '3,09 m',
    minLengte: '3,09 m',
    omschrijving:
      'Strak, hoekig en zonder krullen. Past bij een nieuwbouwtuin of een moderne aanbouw.',
  },
  {
    slug: 'euro-exotic',
    naam: 'Euro-Exotic',
    categorie: 'Vrijstaand',
    breedte: '3,00 m',
    minLengte: '4,50 m',
    omschrijving:
      'Extra hoog gebouwd, bedoeld voor planten die de ruimte nodig hebben. Denk aan citrus en palmen.',
  },
  {
    slug: 'euro-pyra',
    naam: 'Euro-Pyra',
    categorie: 'Vrijstaand',
    breedte: '3,09 m of 3,80 m',
    minLengte: '3,09 m',
    omschrijving:
      'Piramidevormige kap die van alle kanten licht binnenlaat en als blikvanger in de tuin staat.',
  },
  {
    slug: 'euro-royal',
    naam: 'Euro-Royal',
    categorie: 'Vrijstaand',
    breedte: '4,57 m',
    minLengte: '6,04 m',
    omschrijving:
      'Groot, symmetrisch en representatief. Meer tuinkamer dan werkserre.',
  },
  {
    slug: 'euro-muurserre',
    bestseller: true,
    naam: 'Euro-Muurserre',
    categorie: 'Tegen een muur',
    breedte: '2,33 m of 3,08 m',
    minLengte: '3,08 m',
    omschrijving:
      'Leunt tegen je gevel aan. Dat scheelt in isolatie, en water, stroom en verwarming zijn zo aangesloten.',
  },
  {
    slug: 'euro-midi',
    naam: 'Euro-Midi',
    categorie: 'Tegen een muur',
    breedte: '1,18 m of 1,56 m',
    minLengte: '2,36 m',
    omschrijving:
      'Ondiepe muurserre. Past op een terras of een smalle strook langs het huis.',
  },
  {
    slug: 'euro-veranda',
    naam: 'Euro-Veranda',
    categorie: 'Tegen een muur',
    breedte: '2,33 m of 3,08 m',
    minLengte: '3,09 m',
    omschrijving:
      'Meer tuinkamer dan kas: een plek om in te zitten die het seizoen aan beide kanten verlengt.',
  },
  {
    slug: 'euro-gothic',
    naam: 'Euro-Gothic',
    categorie: 'Tegen een muur',
    breedte: '2,36 m of 3,09 m',
    minLengte: '2,36 m',
    omschrijving:
      'Spitse gotische kap tegen een bestaande muur. Klassiek silhouet, moderne constructie.',
  },
];

export type Accessoire = {
  naam: string;
  omschrijving: string;
};

/* Wim wil het aanbod bewust smal houden: dit hoort standaard bij een kas.
   Sloten en dat soort losse artikelen doen we niet. */
export const standaard: Accessoire[] = [
  {
    naam: 'Goten en afvoer',
    omschrijving:
      'Elke kas krijgt goten met afvoer. Jij kiest of dat op het hemelwater gaat of op een regenton. Aansluiten doen we ook.',
  },
  {
    naam: 'Luchtramen',
    omschrijving:
      'Ramen in dak en gevel, zodat de warmte weg kan. Hoeveel er nodig zijn hangt af van je maat, dat rekenen wij voor je uit.',
  },
  {
    naam: 'Plaatsen',
    omschrijving:
      'Wij zetten je kas neer. Kan hij in één keer mee, dan komt hij compleet aanrijden, anders bouwen we hem bij jou op.',
  },
];

export const bijTeKiezen: Accessoire[] = [
  {
    naam: 'Werkbank',
    omschrijving:
      'Ingebouwd, van watervast gelamineerd multiplex op een ijzeren frame. Op de hoogte die jou uitkomt.',
  },
  {
    naam: 'Automatische raamopeners',
    omschrijving:
      'De ramen gaan vanzelf open en dicht bij een temperatuur die je zelf instelt. Handig als je overdag weg bent.',
  },
  {
    naam: 'Fundering',
    omschrijving:
      'Van een betonrand tot een volledige vloer. We kijken samen wat past bij je grond en bij hoe je de kas gebruikt.',
  },
];

/* Kleur is een verkoopargument geworden: ongeveer de helft van de kopers wil
   geen grijze kas meer. Basiskleuren volgens Euroserre, elke andere RAL kan
   tegen meerprijs. */
export type Kleur = {
  naam: string;
  ral: string;
  hex: string;
  rand?: boolean;
};

export const kleuren: Kleur[] = [
  { naam: 'Zwart', ral: 'RAL 9005', hex: '#0e0e0e' },
  { naam: 'Antraciet', ral: 'RAL 7016', hex: '#383e42' },
  { naam: 'Donkergroen', ral: 'RAL 6009', hex: '#27352a' },
  { naam: 'Wit', ral: 'RAL 9010', hex: '#f1f0ea', rand: true },
  { naam: 'Naturel aluminium', ral: 'Blank', hex: '#b9bdbb' },
];

export const bedrijf = {
  naam: 'Tuinkassen Zeeland',
  /* De teken-configurator van Euroserre. Werkt achter een login bij Euroserre
     zelf, dus we verwijzen door in plaats van hem na te bouwen. */
  euroserreConfigurator: 'https://euroserre.com/configurator/',
  moeder: 'Landbouwbedrijf Markusse',
  slogan: 'Solide en degelijk',
  straat: 'Welzingseweg 2A',
  postcode: '4389 VH',
  plaats: 'Ritthem',
  telefoon: '+31 6 51326385',
  telefoonNet: '+31651326385',
  telefoonToon: '06 51 32 63 85',
};
