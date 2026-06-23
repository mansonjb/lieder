/**
 * Generateur de scaffold.
 *   npm run gen          -> ecrit registre + loaders + stubs MDX manquants
 *   npm run gen:check    -> valide seulement (pas d'ecriture), affiche les compteurs
 *
 * Sorties :
 *   lib/registry.generated.ts        (source de verite des routes)
 *   content/loaders.generated.ts     (map "locale/key" -> import MDX)
 *   content/{fr,en}/<key>.mdx        (stubs, jamais ecrases si presents)
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { RAW_PAGES, type Raw } from "./inventory";
import type { PageEntry } from "@/lib/types";

const ROOT = process.cwd();
const LOCALES = ["fr", "en"] as const;
type Loc = (typeof LOCALES)[number];
const LAST_UPDATED = "2026-06-22";
const CHECK = process.argv.includes("--check");

const PILLAR_KEYS = [
  "villages",
  "plages",
  "ou-dormir",
  "que-faire",
  "restaurants",
  "quand-venir",
  "sejour",
  "preparer",
  "comparatifs",
  "ou-dormir-mariage",
];

function fileKeyOf(key: string): string {
  return key === "" ? "index" : key;
}

function defaultPriority(p: Raw): number {
  if (p.priority != null) return p.priority;
  const byTpl: Record<string, number> = {
    home: 1,
    pillar: 0.9,
    "ou-dormir": 0.8,
    village: 0.8,
    comparatif: 0.7,
    plage: 0.7,
    "quand-venir": 0.7,
    sejour: 0.7,
    restaurant: 0.6,
    activite: 0.6,
    guide: 0.5,
    legal: 0.3,
  };
  return byTpl[p.template] ?? 0.6;
}

function descFor(p: Raw): { fr: string; en: string } {
  const L = p.fr;
  const E = p.en;
  switch (p.template) {
    case "home":
      return {
        fr: "Le guide complet de l'Île de Ré : où dormir, que faire, quelles plages, où manger et quand venir. Conseils locaux, cartes et comparatifs pour réussir votre séjour.",
        en: "The complete guide to Île de Ré: where to stay, what to do, which beaches, where to eat and when to go. Local tips, maps and comparison tables.",
      };
    case "pillar":
      return {
        fr: `${L} : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.`,
        en: `${E}: the guide, the key pages and our tips to plan this part of your Île de Ré trip.`,
      };
    case "village":
      return {
        fr: `${L} : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.`,
        en: `${E}: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide.`,
      };
    case "plage":
      return {
        fr: `${L} : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.`,
        en: `${E}: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby.`,
      };
    case "ou-dormir":
      return {
        fr: `${L} : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.`,
        en: `${E}: our top picks by area and budget, with a map and comparison table to book in the right place.`,
      };
    case "activite":
      return {
        fr: `${L} : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.`,
        en: `${E}: practical info, prices, duration, best season, with or without kids, and where to stay nearby.`,
      };
    case "restaurant":
      return {
        fr: `${L} : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.`,
        en: `${E}: our editorial picks, price ranges, specialities and booking tips.`,
      };
    case "quand-venir":
      return {
        fr: `${L} : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.`,
        en: `${E}: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book.`,
      };
    case "comparatif":
      return {
        fr: `${L} : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.`,
        en: `${E}: an honest, criteria-by-criteria comparison to help you decide quickly.`,
      };
    case "sejour":
      return {
        fr: `${L} : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.`,
        en: `${E}: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing.`,
      };
    case "guide":
      return {
        fr: `${L} : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.`,
        en: `${E}: the essentials and our practical, up-to-date tips for Île de Ré.`,
      };
    case "legal":
      return { fr: `${L}.`, en: `${E}.` };
    default:
      return { fr: `${L}.`, en: `${E}.` };
  }
}

function crossLinks(p: Raw & { key: string }): string[] {
  const out: string[] = [];
  switch (p.template) {
    case "home":
      out.push(...PILLAR_KEYS);
      break;
    case "plage":
      if (p.key !== "plages") out.push("plages", "ou-dormir/proche-plage");
      break;
    case "village":
      out.push("que-faire", "plages");
      break;
    case "activite":
      out.push("ou-dormir", "que-faire");
      break;
    case "quand-venir":
      out.push("ou-dormir", "que-faire");
      break;
    case "restaurant":
      out.push("restaurants");
      break;
    case "sejour":
      out.push("ou-dormir", "sejour");
      break;
    case "comparatif":
      out.push("ou-dormir");
      break;
  }
  return out;
}

// ---- Premiere passe : entrees de base ---------------------------------
type WithKey = Raw & { key: string };
const raws: WithKey[] = RAW_PAGES.map((p) => ({ ...p, key: p.slugFr }));

// Validation des cles + slugs
const keySeen = new Set<string>();
const slugSeen: Record<Loc, Set<string>> = { fr: new Set(), en: new Set() };
const problems: string[] = [];
for (const p of raws) {
  if (keySeen.has(p.key)) problems.push(`Cle dupliquee: "${p.key}"`);
  keySeen.add(p.key);
  for (const l of LOCALES) {
    const s = (l === "fr" ? p.slugFr : p.slugEn).replace(/^\/+|\/+$/g, "");
    if (slugSeen[l].has(s)) problems.push(`Slug ${l} duplique: "${s}" (cle ${p.key})`);
    slugSeen[l].add(s);
  }
}
for (const p of raws) {
  if (p.parent && !keySeen.has(p.parent))
    problems.push(`Parent introuvable: "${p.parent}" (cle ${p.key})`);
}

// ---- Maillage : siblings + cross-links --------------------------------
const childrenByParent = new Map<string, string[]>();
for (const p of raws) {
  if (!p.parent) continue;
  const arr = childrenByParent.get(p.parent) ?? [];
  arr.push(p.key);
  childrenByParent.set(p.parent, arr);
}

function relatedFor(p: WithKey): string[] {
  const rel: string[] = [];
  const push = (k?: string) => {
    if (k && k !== p.key && keySeen.has(k) && !rel.includes(k)) rel.push(k);
  };
  (p.related ?? []).forEach(push);
  push(p.parent);
  crossLinks(p).forEach(push);
  const siblings = (p.parent ? (childrenByParent.get(p.parent) ?? []) : []).filter(
    (k) => k !== p.key,
  );
  siblings.slice(0, 4).forEach(push);
  return rel.slice(0, 8);
}

// ---- Assemblage du registre -------------------------------------------
const entries: PageEntry[] = raws.map((p) => {
  const desc = descFor(p);
  const entry: PageEntry = {
    key: p.key,
    silo: p.silo,
    template: p.template,
    intent: p.intent,
    stay22: Boolean(p.stay22),
    slug: { fr: p.slugFr, en: p.slugEn },
    title: { fr: p.titleFr ?? p.fr, en: p.titleEn ?? p.en },
    h1: { fr: p.fr, en: p.en },
    description: { fr: desc.fr, en: desc.en },
    targetKeyword: { fr: p.fr.toLowerCase(), en: p.en.toLowerCase() },
    related: relatedFor(p),
    lastUpdated: LAST_UPDATED,
    priority: defaultPriority(p),
  };
  if (p.geo) entry.geo = p.geo;
  if (p.stay22)
    entry.mapLabel = p.mapLabel ?? { fr: "l'Île de Ré", en: "Île de Ré" };
  if (p.parent) entry.parent = p.parent;
  if (p.year) entry.yearPage = true;
  return entry;
});

// ---- Rapport ----------------------------------------------------------
const bySilo = new Map<string, number>();
for (const e of entries) bySilo.set(e.silo, (bySilo.get(e.silo) ?? 0) + 1);
console.log(`\n  Inventaire Île de Ré`);
console.log(`  ${entries.length} pages × ${LOCALES.length} langues = ${entries.length * LOCALES.length} fichiers MDX\n`);
for (const [s, n] of [...bySilo.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${String(n).padStart(3)}  ${s}`);
}
const withStay22 = entries.filter((e) => e.stay22).length;
console.log(`\n    ${withStay22} pages avec carte Stay22\n`);

if (problems.length) {
  console.error(`  PROBLEMES (${problems.length}) :`);
  for (const p of problems) console.error(`    - ${p}`);
  process.exit(1);
}

if (CHECK) {
  console.log("  gen:check OK (aucune ecriture).\n");
  process.exit(0);
}

// ---- Ecriture : registre ----------------------------------------------
function write(rel: string, content: string) {
  const abs = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, "utf8");
}

const registryTs =
  `// GENERE PAR scripts/generate.ts. NE PAS EDITER A LA MAIN.\n` +
  `// Editez scripts/inventory.ts puis lancez \`npm run gen\`.\n` +
  `import type { PageEntry } from "@/lib/types";\n\n` +
  `export const REGISTRY: PageEntry[] = ${JSON.stringify(entries, null, 2)};\n`;
write("lib/registry.generated.ts", registryTs);

// ---- Ecriture : loaders -----------------------------------------------
const loaderLines: string[] = [];
for (const e of entries) {
  for (const l of LOCALES) {
    const fk = fileKeyOf(e.key);
    loaderLines.push(`  "${l}/${fk}": () => import("@/content/${l}/${fk}.mdx"),`);
  }
}
const loadersTs =
  `// GENERE PAR scripts/generate.ts. NE PAS EDITER A LA MAIN.\n` +
  `import type { ComponentType } from "react";\n\n` +
  `type Loader = () => Promise<{ default: ComponentType }>;\n\n` +
  `export const LOADERS: Record<string, Loader> = {\n${loaderLines.join("\n")}\n};\n`;
write("content/loaders.generated.ts", loadersTs);

// ---- Ecriture : stubs MDX (sans ecraser) ------------------------------
function stub(locale: Loc, e: PageEntry): string {
  const todo =
    locale === "fr"
      ? `TODO (${e.silo}/${e.template}) : rédiger le contenu. Titre, carte Stay22, comparatif, FAQ et maillage viennent du template.`
      : `TODO (${e.silo}/${e.template}): write the content. Title, Stay22 map, comparison, FAQ and links come from the template.`;
  const body =
    locale === "fr"
      ? "Contenu en cours de rédaction. Cette page structure le guide de l'Île de Ré et sera enrichie prochainement."
      : "Content in progress. This page is part of the Île de Ré guide and will be filled in soon.";
  return `{/* ${todo} */}\n\n${body}\n`;
}

let created = 0;
for (const e of entries) {
  for (const l of LOCALES) {
    const fk = fileKeyOf(e.key);
    const rel = `content/${l}/${fk}.mdx`;
    const abs = path.join(ROOT, rel);
    if (fs.existsSync(abs)) continue;
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, stub(l, e), "utf8");
    created++;
  }
}

console.log(`  Ecrit : lib/registry.generated.ts, content/loaders.generated.ts`);
console.log(`  Stubs MDX crees : ${created} (existants preserves)\n`);
