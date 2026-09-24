// Aanbod van Tuinkassen Zeeland.
// Eigen kassen: modellen en maten zoals Wim ze opgaf (gesprek 4 september 2026 en zijn aantekeningen).
// Euroserre: modellen en maten van euroserre.com, geleverd en geplaatst door Markusse.

export type EigenKas = {
  slug: string;
  naam: string;
  type: string;
  breedte: string;
  lengte: string;
  omschrijving: string;
  /* Wat Wim bij dit model zelf als eerste noemt. Kort, want wie meer wil
     weten belt toch. */
  kenmerken: string[];
  voor: string;
  /* Vaste maten, als een model die heeft (de Compact). Wim noemt ze zo: eerst
     de breedte, dan de twee lengtes die daarbij horen. */
  maten?: { breedte: string; lengtes: string[] }[];
};

/* De volgorde is die van Wim: de Compact bovenaan, dan van klein naar groot.
   Maten zoals hij ze op 4 september 2026 opnoemde en in zijn aantekeningen
   bevestigde. Een prieel bouwt hij niet meer, dus die staat er niet bij. */
export const eigenKassen: EigenKas[] = [
  {
    slug: 'compact',
    naam: 'Compact',
    type: 'Makkelijk zelf te plaatsen',
    breedte: 'Vanaf 2,30 m',
    lengte: '3,00 of 3,70 m',
    omschrijving:
      'Onze kleinste kas, die we hier in de schuur maken. Hij is zo gebouwd dat je hem makkelijk zelf neerzet. Liever dat wij het doen? Dat kan natuurlijk ook.',
    kenmerken: [
      'De deur kan op bijna elke plek',
      'Een extra breed luchtraam in het dak',
      'In vier vaste maten',
    ],
    maten: [
      { breedte: '2,30 m breed', lengtes: ['3,00 m', '3,70 m'] },
      { breedte: '2,80 m breed', lengtes: ['3,00 m', '3,70 m'] },
    ],
    voor: 'Een gewone achtertuin, en wie de kas zelf wil neerzetten.',
  },
  {
    slug: 'venlo',
    naam: 'Venlo kas',
    type: 'Vaak op maat gemaakt',
    breedte: '3,40 m',
    lengte: 'Vanaf 4 m',
    omschrijving:
      'De Venlo kas is vaak echt maatwerk. Vanaf 4 meter maken we hem zo lang als je wilt: per vak van 73 cm komt er een stuk bij. Met een enkele of een dubbele deur, en hij kan ook op een gemetselde muur.',
    kenmerken: [
      'Twee extra brede luchtramen in het dak',
      'Vanaf 4 m, langer per vak van 73 cm',
      'Enkele of dubbele deur',
    ],
    voor: 'Wie meer ruimte wil, in precies de lengte die in de tuin past.',
  },
  {
    slug: 'belgische',
    naam: 'Belgische kas',
    type: 'Met schuine gevels',
    breedte: '3,80 m',
    lengte: 'Naar wens',
    omschrijving:
      'Een Belgische kas herken je aan de gevels die schuin naar buiten lopen. Daardoor vangt hij meer licht, en wordt het binnen ook sneller warm.',
    kenmerken: [
      'Schuine gevels: meer licht en meer warmte',
      'Een extra breed luchtraam in het dak',
      'Lengte naar wens',
    ],
    voor: 'Wie zoveel mogelijk licht en warmte in de kas wil.',
  },
  {
    slug: 'dubbelkap',
    naam: 'Dubbelkap',
    type: 'Twee kappen naast elkaar',
    breedte: '6,60 m',
    lengte: 'Naar wens',
    omschrijving:
      'Twee kappen naast elkaar, met één goot ertussen. Standaard 6,60 m breed, maar we maken hem ook smaller. Wil je vijf meter breed? Dan worden het twee kappen van 2,50 m.',
    kenmerken: [
      'Standaard 6,60 m breed, smaller kan ook',
      'Lengte naar wens',
      'Eén goot in het midden',
    ],
    voor: 'Grote tuinen, en wie echt veel wil kweken.',
  },
  {
    slug: 'maatwerk',
    naam: 'Maatwerk',
    type: 'Precies zoals jij hem wilt',
    breedte: 'In overleg',
    lengte: 'In overleg',
    omschrijving:
      'Rechthoekig, vierkant of tegen een bestaande muur: we bouwen je kas in bijna elk formaat. Deze kas hebben we bijvoorbeeld tegen een schuur aan gezet.',
    kenmerken: [
      'Ook tegen een muur of schuur',
      'Het glas maken we zelf op maat',
      'Samen kijken wat er kan',
    ],
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
  /* Onderstaande velden komen uit het bestsellerboekje van Euroserre en staan
     alleen bij de vier bestsellers. Prijzen laten we er bewust af: Wim wil dat
     gesprek zelf voeren. */
  typering?: string;
  lengtes?: string;
  glas?: string;
  nokhoogte?: string;
};

/* Het jaar van de bestsellerlijst die nu op de site staat. Euroserre geeft in
   februari een nieuw boekje uit; dan verzetten we deze vier en dit jaartal. */
export const bestsellerJaar = 2026;

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
    typering: 'Basismodel',
    breedte: '2,36 m of 3,09 m',
    lengtes: '3,09 tot 6,04 m',
    minLengte: '3,09 m',
    glas: '4 mm gehard glas',
    nokhoogte: '2,56 tot 2,70 m',
    omschrijving:
      'Het best verkochte model van Euroserre. Rechte lijnen, veel glas en in twee breedtes te krijgen.',
  },
  {
    slug: 'euro-rustiq',
    bestseller: true,
    naam: 'Euro-Rustiq',
    categorie: 'Vrijstaand',
    typering: 'Model met 45 graden dak',
    breedte: '2,36 m of 3,09 m',
    lengtes: '3,09 tot 6,04 m',
    minLengte: '3,09 m',
    glas: '4 mm gehard glas',
    nokhoogte: '2,80 tot 3,15 m',
    omschrijving:
      'Zelfde maten als de Maxi, maar met een dak van 45 graden. Dat geeft hoogte in de nok en staat mooi bij een oudere woning of een boerderij.',
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
    typering: 'Extra breed model',
    breedte: '3,80 m of 4,57 m',
    lengtes: '3,80 tot 6,04 m',
    minLengte: '3,80 m',
    glas: '4 mm gehard glas',
    nokhoogte: '2,92 tot 3,15 m',
    omschrijving:
      'De brede uit de reeks. Hier kan je echt in rondlopen en werken, ook met een kruiwagen. In de breedte van 4,57 m zit een brede schuifdeur.',
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
    typering: 'Aanbouwmodel',
    breedte: '2,33 m of 3,08 m',
    lengtes: '3,09 tot 6,04 m',
    minLengte: '3,09 m',
    glas: 'Dak polycarbonaat, zijkant 4 mm gehard glas',
    nokhoogte: '2,56 tot 2,64 m',
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
   Sloten en dat soort losse artikelen doen we niet, een werkbank ook niet. */
export const standaard: Accessoire[] = [
  {
    naam: 'Nieuwe kas, hergebruikt tuindersglas',
    omschrijving:
      'De kas is nieuw, het glas is gebruikt tuindersglas. Netjes afgewerkt met een zwarte strip, dus je ziet er niets van.',
  },
  {
    naam: 'Goot en afvoer',
    omschrijving:
      'De goot zit er standaard aan. Jij kiest of de afvoer aan de voorkant of aan de achterkant komt.',
  },
  {
    naam: 'Luchtramen',
    omschrijving:
      'Elke kas heeft een extra breed luchtraam in het dak. In de Venlo kas zitten er twee.',
  },
  {
    naam: 'Plaatsen',
    omschrijving:
      'Wij zetten je kas neer. Kan hij in één keer mee, dan komt hij compleet aanrijden, anders bouwen we hem bij jou op.',
  },
];

export const bijTeKiezen: Accessoire[] = [
  {
    naam: 'Kweekbladen',
    omschrijving:
      'Tafels van betonplex, een plaat die tegen water kan. Of een smal blad van 20 cm, op elke hoogte die je wilt.',
  },
  {
    naam: 'Automatische raamopeners',
    omschrijving:
      'De ramen gaan vanzelf open en dicht als het warm of koud wordt. Handig als je overdag weg bent.',
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
  /* Euroserre levert standaard onbehandeld aluminium, of gelakt in RAL 6009 of
     RAL 9005. Elke andere RAL-kleur kan, maar kost meer. */
  standaard?: boolean;
};

export const kleuren: Kleur[] = [
  { naam: 'Zwart', ral: 'RAL 9005', hex: '#0e0e0e', standaard: true },
  { naam: 'Donkergroen', ral: 'RAL 6009', hex: '#27352a', standaard: true },
  { naam: 'Onbehandeld aluminium', ral: 'Blank', hex: '#b9bdbb', standaard: true },
  { naam: 'Antraciet', ral: 'RAL 7016', hex: '#383e42' },
  { naam: 'Wit', ral: 'RAL 9010', hex: '#f1f0ea', rand: true },
];

export const bedrijf = {
  naam: 'Tuinkassen Zeeland',
  /* Het tekenprogramma van Euroserre. Inbouwen kan niet (Euroserre staat dat
     technisch niet toe) en een aanvraag daaruit gaat altijd naar Euroserre zelf.
     Daarom vragen we mensen Wim een foto van hun tekening te appen. */
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
