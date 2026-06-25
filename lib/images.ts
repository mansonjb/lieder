import manifest from "@/data/images.generated.json";

// Manifeste genere par `npm run photos` : { "villages/<slug>": "/images/...webp" }.
const M = manifest as Record<string, string>;

/** Image hero d'une page : match direct, sinon repli sur l'image de la commune. */
export function heroImage(key: string): string | undefined {
  if (M[key]) return M[key];
  // sous-pages de village (villages/<c>/...) -> image de la commune
  const village = key.match(/^villages\/([^/]+)/);
  if (village && M[`villages/${village[1]}`]) return M[`villages/${village[1]}`];
  // ou-dormir/<commune> ou restaurants/<commune> -> image de la commune
  const reuse = key.match(/^(?:ou-dormir|restaurants)\/([^/]+)$/);
  if (reuse && M[`villages/${reuse[1]}`]) return M[`villages/${reuse[1]}`];
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
