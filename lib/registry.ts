import { LOCALES, localeHref, type Locale } from "@/lib/i18n";
import type { PageEntry, Silo } from "@/lib/types";
import { REGISTRY } from "@/lib/registry.generated";

const BY_KEY = new Map<string, PageEntry>(REGISTRY.map((e) => [e.key, e]));

const BY_SLUG: Record<Locale, Map<string, PageEntry>> = {
  fr: new Map(),
  en: new Map(),
};
for (const e of REGISTRY) {
  for (const l of LOCALES) {
    BY_SLUG[l].set(norm(e.slug[l]), e);
  }
}

function norm(p: string): string {
  return p.replace(/^\/+|\/+$/g, "");
}

export function allPages(): PageEntry[] {
  return REGISTRY;
}

export function getByKey(key: string): PageEntry | undefined {
  return BY_KEY.get(key);
}

/** Resout une page depuis les segments d'URL d'une locale (catch-all). */
export function getBySlug(
  locale: Locale,
  segments: string[] | undefined,
): PageEntry | undefined {
  const path = norm((segments ?? []).join("/"));
  return BY_SLUG[locale].get(path);
}

/** Href interne d'une page dans une locale donnee. */
export function pageHref(entry: PageEntry, locale: Locale): string {
  return localeHref(locale, entry.slug[locale]);
}

/** Map locale -> slug (pour buildMetadata / hreflang). */
export function slugByLocale(entry: PageEntry): Record<Locale, string> {
  return entry.slug;
}

/** Pages liees (maillage), dans l'ordre declare, dedupliquees. */
export function relatedOf(entry: PageEntry): PageEntry[] {
  const seen = new Set<string>();
  const out: PageEntry[] = [];
  for (const k of entry.related) {
    if (seen.has(k) || k === entry.key) continue;
    const e = BY_KEY.get(k);
    if (e) {
      out.push(e);
      seen.add(k);
    }
  }
  return out;
}

/** Pages filles d'un pilier. */
export function childrenOf(key: string): PageEntry[] {
  return REGISTRY.filter((e) => e.parent === key);
}

/** Toutes les pages d'un silo. */
export function pagesInSilo(silo: Silo): PageEntry[] {
  return REGISTRY.filter((e) => e.silo === silo);
}

/** Les piliers (une page par silo, template pillar/home). */
export function pillars(): PageEntry[] {
  return REGISTRY.filter(
    (e) => e.template === "pillar" || e.template === "home",
  );
}

/** Cle de chargement du corps MDX (doit matcher scripts/generate.ts). */
export function loaderKey(locale: Locale, entry: PageEntry): string {
  return `${locale}/${entry.key === "" ? "index" : entry.key}`;
}

/** Chaine d'ancetres (du pilier racine jusqu'au parent direct), pour le fil d'Ariane. */
export function ancestors(entry: PageEntry): PageEntry[] {
  const chain: PageEntry[] = [];
  let cur = entry.parent ? BY_KEY.get(entry.parent) : undefined;
  let guard = 0;
  while (cur && guard++ < 12) {
    chain.unshift(cur);
    cur = cur.parent ? BY_KEY.get(cur.parent) : undefined;
  }
  return chain;
}
