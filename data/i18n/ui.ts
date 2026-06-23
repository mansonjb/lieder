// Forme du dictionnaire UI (libelles d'interface, hors contenu editorial).
// Le contenu des pages vit dans /content + le registre ; ici seulement le chrome.

export type Dict = {
  nav: {
    villages: string;
    plages: string;
    ouDormir: string;
    queFaire: string;
    restaurants: string;
    quandVenir: string;
    sejour: string;
    preparer: string;
    comparatifs: string;
  };
  breadcrumb: { home: string };
  stay22: {
    eyebrow: string;
    hotelsNear: string; // gabarit avec {name}
    sponsored: string;
    browse: string; // gabarit avec {name}
    note: string;
  };
  affiliate: { disclosure: string; short: string };
  faq: { heading: string };
  related: { heading: string };
  toc: { heading: string };
  prosCons: { pros: string; cons: string };
  bestTime: { heading: string; note: string };
  comparison: { heading: string };
  meta: { updated: string; readMin: string; min: string };
  labels: Record<string, string>;
  wip: string;
  consent: { loadEmbed: string; note: string };
  langSwitch: { label: string; fr: string; en: string };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    explore: string;
    silosHeading: string;
  };
  footer: {
    tagline: string;
    sections: string;
    about: string;
    affiliate: string;
    privacy: string;
    legal: string;
    rights: string;
    disclosureLine: string;
  };
  notFound: { title: string; sub: string; back: string };
};
