import manifest from "@/data/images.generated.json";

const M = manifest as Record<string, string>;

const OU_DORMIR_HERO: Record<string, string> = {
  "ou-dormir":               "villages/saint-martin-de-re",
  "ou-dormir/hotels":        "villages/saint-martin-de-re",
  "ou-dormir/hotels-luxe":   "villages/saint-martin-de-re",
  "ou-dormir/hotels-de-charme": "villages/la-flotte",
  "ou-dormir/hotels-bord-de-mer": "villages/la-flotte",
  "ou-dormir/hotels-spa":    "villages/saint-martin-de-re",
  "ou-dormir/hotels-romantiques": "villages/la-flotte",
  "ou-dormir/hotels-pas-cher": "villages/sainte-marie-de-re",
  "ou-dormir/hotels-avec-piscine": "villages/le-bois-plage-en-re",
  "ou-dormir/campings":      "villages/le-bois-plage-en-re",
  "ou-dormir/glamping":      "villages/les-portes-en-re",
  "ou-dormir/locations-vacances": "villages/ars-en-re",
  "ou-dormir/maisons-dhotes": "villages/la-flotte",
  "ou-dormir/animaux-acceptes": "plages/le-gros-jonc",
  "ou-dormir/proche-plage":  "plages/les-grenettes",
  "ou-dormir/proche-port":   "villages/saint-martin-de-re",
  "ou-dormir/en-famille":    "villages/sainte-marie-de-re",
  "ou-dormir/grand-groupe":  "villages/la-couarde-sur-mer",
  "ou-dormir/week-end-amoureux": "villages/la-flotte",
  "ou-dormir/lune-de-miel":  "villages/saint-martin-de-re",
  "ou-dormir/anniversaire":  "villages/ars-en-re",
  "ou-dormir/seminaire-entreprise": "villages/saint-martin-de-re",
  "ou-dormir/sans-voiture":  "plages/le-gros-jonc",
  "ou-dormir/reunion-famille": "villages/la-couarde-sur-mer",
  "ou-dormir/evg":           "villages/saint-martin-de-re",
  "ou-dormir/evjf":          "villages/saint-martin-de-re",
  "ou-dormir/avec-piscine-interieure": "villages/saint-martin-de-re",
  "ou-dormir/ete-2026":      "plages/le-gros-jonc",
  "ou-dormir/ete-2027":      "plages/le-gros-jonc",
};

const OU_DORMIR_GALLERY_KEYS = [
  "villages/saint-martin-de-re",
  "villages/la-flotte",
  "villages/le-bois-plage-en-re",
  "villages/ars-en-re",
];

// Plage la plus proche par village — utilisée pour les sous-pages "plages" du village
const VILLAGE_BEACH: Record<string, string> = {
  "rivedoux-plage":             "plages/sablanceaux",
  "sainte-marie-de-re":         "plages/les-grenettes",
  "la-flotte":                  "plages/la-cible",
  "saint-martin-de-re":         "plages/les-gollandieres",
  "le-bois-plage-en-re":        "plages/le-gros-jonc",
  "la-couarde-sur-mer":         "plages/le-peu-ragot",
  "loix":                       "plages/le-boutillon",
  "ars-en-re":                  "plages/la-loge",
  "saint-clement-des-baleines": "plages/la-conche-des-baleines",
  "les-portes-en-re":           "plages/gros-jonc-les-portes",
};

// Index de galerie (-2/-3/-4) par sous-silo pour les pages de village
const VILLAGE_SILO_OFFSET: Record<string, number> = {
  "que-faire":  2,
  "ou-dormir":  3,
  "restaurants": 4,
};

// Photo spécifique par page que-faire (évite que toutes les activités aient la même photo)
const QUE_FAIRE_PHOTO: Record<string, string> = {
  "que-faire/incontournables":          "villages/saint-martin-de-re-3",
  "que-faire/velo":                     "villages/ars-en-re-2",
  "que-faire/location-velo":            "villages/le-bois-plage-en-re",
  "que-faire/phare-des-baleines":       "plages/plage-du-phare",
  "que-faire/marais-salants":           "villages/loix",
  "que-faire/ecomusee-marais-salant":   "villages/loix-2",
  "que-faire/reserve-lilleau-des-niges": "plages/gros-jonc-les-portes",
  "que-faire/fortifications-vauban":    "villages/saint-martin-de-re-2",
  "que-faire/abbaye-des-chateliers":    "villages/la-flotte-2",
  "que-faire/fort-de-la-pree":          "villages/rivedoux-plage",
  "que-faire/musee-ernest-cognacq":     "villages/saint-martin-de-re-4",
  "que-faire/degustation-huitres":      "villages/la-flotte-3",
  "que-faire/degustation-vin":          "villages/ars-en-re-3",
  "que-faire/marches":                  "villages/saint-martin-de-re",
  "que-faire/surf":                     "plages/la-conche-des-baleines",
  "que-faire/kitesurf":                 "plages/la-cible-2",
  "que-faire/paddle":                   "plages/le-peu-ragot",
  "que-faire/voile-catamaran":          "plages/sablanceaux",
  "que-faire/kayak":                    "plages/le-marchais",
  "que-faire/peche":                    "plages/le-marchais-2",
  "que-faire/baignade":                 "plages/les-grenettes",
  "que-faire/randonnee":                "plages/trousse-chemise",
  "que-faire/observation-oiseaux":      "plages/gros-jonc-les-portes-2",
  "que-faire/golf":                     "villages/le-bois-plage-en-re-2",
  "que-faire/tennis":                   "villages/rivedoux-plage-2",
  "que-faire/aquarium":                 "villages/la-rochelle",
  "que-faire/camping":                  "villages/les-portes-en-re",
  "que-faire/balades-en-mer":           "plages/la-benaie",
  "que-faire/plongee":                  "plages/le-grouin",
  "que-faire/chars-a-voile":            "plages/la-conche-des-baleines-2",
};

// Rotation pour les pages que-faire sans photo dédiée
const QUE_FAIRE_ROTATION = [
  "villages/ars-en-re",
  "plages/la-conche-des-baleines-3",
  "villages/la-flotte-4",
  "plages/trousse-chemise-2",
  "villages/les-portes-en-re-2",
  "plages/les-grenettes-2",
  "villages/le-bois-plage-en-re-3",
  "plages/gros-jonc-les-portes-3",
  "villages/saint-clement-des-baleines-2",
  "plages/la-benaie-2",
  "villages/loix-3",
  "plages/le-goisil",
];

// Image de repli pour les silos racines et éditoriaux
const SILO_FALLBACK: Record<string, string> = {
  "villages":    "villages/saint-martin-de-re",
  "plages":      "plages/la-conche-des-baleines",
  "que-faire":   "plages/le-gros-jonc",
  "restaurants": "villages/la-flotte",
  "gastronomie": "villages/la-flotte",
  "quand-venir": "plages/la-conche-des-baleines",
  "sejour":      "villages/saint-martin-de-re",
  "preparer":    "villages/ars-en-re",
  "comparatifs": "villages/les-portes-en-re",
};

/** Image hero d'une page : match direct, variété par silo pour les sous-pages de village. */
export function heroImage(key: string): string | undefined {
  if (M[key]) return M[key];

  // Sous-pages de village (villages/<commune>/<silo>) → image variée par type
  const villageSub = key.match(/^villages\/([^/]+)\/(.+)$/);
  if (villageSub) {
    const commune = villageSub[1];
    const subSilo = villageSub[2];
    if (subSilo === "plages") {
      const beach = VILLAGE_BEACH[commune];
      return (beach && M[beach]) || M[`villages/${commune}`];
    }
    const offset = VILLAGE_SILO_OFFSET[subSilo];
    if (offset) return M[`villages/${commune}-${offset}`] || M[`villages/${commune}`];
    return M[`villages/${commune}`];
  }

  // Page de village (villages/<commune>)
  const village = key.match(/^villages\/([^/]+)/);
  if (village && M[`villages/${village[1]}`]) return M[`villages/${village[1]}`];

  // ou-dormir/* → image thématique ou commune
  if (key.startsWith("ou-dormir")) {
    const mapped = OU_DORMIR_HERO[key];
    if (mapped && M[mapped]) return M[mapped];
    const slug = key.replace("ou-dormir/", "");
    if (M[`villages/${slug}`]) return M[`villages/${slug}`];
    return M["villages/saint-martin-de-re"];
  }

  // restaurants/<commune> → image de la commune
  const reuse = key.match(/^restaurants\/([^/]+)$/);
  if (reuse && M[`villages/${reuse[1]}`]) return M[`villages/${reuse[1]}`];

  // plages/* avec photo propre → déjà capté par M[key] au début
  // Pages éditoriales de plages (catégories) → photo thématique variée
  const PLAGE_CATEGORY: Record<string, string> = {
    "plages/familiales":        "plages/les-grenettes",
    "plages/surveillees":       "plages/sablanceaux",
    "plages/sauvages":          "plages/trousse-chemise",
    "plages/surf":              "plages/la-conche-des-baleines",
    "plages/kitesurf-windsurf": "plages/le-gros-jonc",
    "plages/peche-a-pied":      "plages/le-marchais",
    "plages/chien-autorise":    "plages/la-benaie",
    "plages/nudistes":          "plages/le-lizay",
    "plages/coucher-de-soleil": "plages/le-grouin",
    "plages/marees-horaires":   "plages/gros-jonc-les-portes",
    "plages/accessibles-pmr":   "plages/les-prises",
  };
  if (key.startsWith("plages/")) {
    const cat = PLAGE_CATEGORY[key];
    if (cat && M[cat]) return M[cat];
    return M["plages/le-gros-jonc"] || M["plages/la-conche-des-baleines"] || undefined;
  }

  // que-faire/* → photo spécifique par activité, puis rotation pour éviter les doublons
  if (key.startsWith("que-faire/")) {
    const specific = QUE_FAIRE_PHOTO[key];
    if (specific && M[specific]) return M[specific];
    const rotIdx = key.length % QUE_FAIRE_ROTATION.length;
    return M[QUE_FAIRE_ROTATION[rotIdx]] || M["plages/le-gros-jonc"];
  }

  // Silo racine ou éditorial
  const fallback = SILO_FALLBACK[key];
  if (fallback && M[fallback]) return M[fallback];

  // Sous-pages de silos éditoriaux (quand-venir/saison-estivale, etc.)
  const siloRoot = key.split("/")[0];
  const rootFallback = SILO_FALLBACK[siloRoot];
  if (rootFallback && M[rootFallback]) return M[rootFallback];

  return undefined;
}

/** Toutes les images disponibles pour une page (hero + galerie). */
export function galleryImages(key: string): string[] {
  const result: string[] = [];
  if (M[key]) result.push(M[key]);
  for (let i = 2; i <= 4; i++) {
    const k = `${key}-${i}`;
    if (M[k]) result.push(M[k]);
  }
  if (!result.length && key === "ou-dormir") {
    return OU_DORMIR_GALLERY_KEYS.map((k) => M[k]).filter(Boolean) as string[];
  }
  return result;
}

/** Image d'accueil (repli sur une image emblématique disponible). */
export function homeHero(): string | undefined {
  return (
    M["villages/saint-martin-de-re"] ||
    M["plages/la-conche-des-baleines"] ||
    Object.values(M)[0]
  );
}

/** 3-4 images pour le bento grid de la home, dans l'ordre prioritaire. */
export function bentoImages(): { key: string; src: string }[] {
  const preferred = [
    "villages/saint-martin-de-re",
    "plages/la-conche-des-baleines",
    "villages/ars-en-re",
    "villages/la-flotte",
    "villages/les-portes-en-re",
    "plages/le-gros-jonc",
  ];
  return preferred
    .map((key) => ({ key, src: M[key] }))
    .filter((x): x is { key: string; src: string } => Boolean(x.src));
}
