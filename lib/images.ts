import manifest from "@/data/images.generated.json";

// Manifeste genere par `npm run photos` : { "villages/<slug>": "/images/...webp" }.
const M = manifest as Record<string, string>;

// Pour les pages ou-dormir, on choisit l'image de la commune la plus représentative du type
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

// Pour le guide ou-dormir racine, une galerie de 4 villages représentatifs
const OU_DORMIR_GALLERY_KEYS = [
  "villages/saint-martin-de-re",
  "villages/la-flotte",
  "villages/le-bois-plage-en-re",
  "villages/ars-en-re",
];

// Image de repli pour les silos éditoriaux (quand-venir, séjour, etc.)
const SILO_FALLBACK: Record<string, string> = {
  "quand-venir":  "plages/la-conche-des-baleines",
  "sejour":       "villages/saint-martin-de-re",
  "preparer":     "villages/ars-en-re",
  "comparatifs":  "villages/les-portes-en-re",
  "que-faire":    "plages/le-gros-jonc",
  "restaurants":  "villages/la-flotte",
  "gastronomie":  "villages/la-flotte",
};

/** Image hero d'une page : match direct, sinon repli sur l'image de la commune. */
export function heroImage(key: string): string | undefined {
  if (M[key]) return M[key];
  // sous-pages de village (villages/<c>/...) -> image de la commune
  const village = key.match(/^villages\/([^/]+)/);
  if (village && M[`villages/${village[1]}`]) return M[`villages/${village[1]}`];
  // ou-dormir/* -> image thématique ou commune
  if (key.startsWith("ou-dormir")) {
    const mapped = OU_DORMIR_HERO[key];
    if (mapped && M[mapped]) return M[mapped];
    // ou-dormir/<commune> -> image de la commune
    const slug = key.replace("ou-dormir/", "");
    if (M[`villages/${slug}`]) return M[`villages/${slug}`];
    return M["villages/saint-martin-de-re"];
  }
  // restaurants/<commune> -> image de la commune
  const reuse = key.match(/^restaurants\/([^/]+)$/);
  if (reuse && M[`villages/${reuse[1]}`]) return M[`villages/${reuse[1]}`];
  // plages sans photo propre -> repli sur une belle plage generique
  if (key.startsWith("plages/")) {
    return M["plages/le-gros-jonc"] || M["plages/la-conche-des-baleines"] || undefined;
  }
  // repli silo éditorial (quand-venir, sejour, etc.)
  const fallback = SILO_FALLBACK[key];
  if (fallback && M[fallback]) return M[fallback];
  // sous-pages de silo éditorial (quand-venir/saison-estivale, etc.)
  const siloRoot = key.split("/")[0];
  const rootFallback = SILO_FALLBACK[siloRoot];
  if (rootFallback && M[rootFallback]) return M[rootFallback];
  return undefined;
}

/** Toutes les images disponibles pour une page (hero + gallery). */
export function galleryImages(key: string): string[] {
  const result: string[] = [];
  if (M[key]) result.push(M[key]);
  for (let i = 2; i <= 4; i++) {
    const k = `${key}-${i}`;
    if (M[k]) result.push(M[k]);
  }
  // Page ou-dormir racine -> galerie de villages pour rendre la page visuelle
  if (!result.length && key === "ou-dormir") {
    return OU_DORMIR_GALLERY_KEYS.map((k) => M[k]).filter(Boolean) as string[];
  }
  return result;
}

/** Image d'accueil (repli sur une image emblematique disponible). */
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
