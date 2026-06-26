import type { Locale } from "@/lib/i18n";

export type Silo =
  | "home"
  | "villages"
  | "plages"
  | "ou-dormir"
  | "ou-dormir-mariage"
  | "que-faire"
  | "restaurants"
  | "gastronomie"
  | "quand-venir"
  | "evenements"
  | "sejour"
  | "preparer"
  | "comparatifs"
  | "legal";

export type Template =
  | "home"
  | "pillar"
  | "village"
  | "plage"
  | "ou-dormir"
  | "activite"
  | "restaurant"
  | "quand-venir"
  | "comparatif"
  | "sejour"
  | "guide"
  | "legal"
  | "evjf";

export type Intent =
  | "informationnel"
  | "comparatif"
  | "transactionnel"
  | "saisonnier"
  | "navigation";

export type Geo = { lat: number; lng: number; zoom?: number };

export type LocalizedText = Record<Locale, string>;
export type LocalizedSlug = Record<Locale, string>;

export type PageEntry = {
  /** Identifiant stable de la page (= chemin de slug FR). Cle des loaders MDX. */
  key: string;
  silo: Silo;
  template: Template;
  intent: Intent;
  /** Une carte Stay22 contextualisee est attendue sur cette page. */
  stay22: boolean;
  /** Coordonnees pour centrer la carte Stay22 / le JSON-LD Place. */
  geo?: Geo;
  /** Chemin localise par langue (sans prefixe de locale). */
  slug: LocalizedSlug;
  title: LocalizedText;
  h1: LocalizedText;
  description: LocalizedText;
  targetKeyword?: LocalizedText;
  /** Libelle de lieu pour la carte Stay22 (ex "Saint-Martin-de-Ré"). */
  mapLabel?: LocalizedText;
  /** Cles d'autres pages (maillage). */
  related: string[];
  /** Cle de la page pilier du silo. */
  parent?: string;
  lastUpdated: string;
  /** Priorite sitemap (0-1). */
  priority: number;
  /** Page annualisee (canonical auto-referent + lien edition recente). */
  yearPage?: boolean;
};
