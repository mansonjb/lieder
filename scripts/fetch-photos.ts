/**
 * Scrape une photo "hero" par lieu (commune + plage) via l'actor Apify
 * Google Places (compass~crawler-google-places), comme les sites soeurs.
 *
 *   npm run photos                      # toutes les images manquantes
 *   npm run photos -- --slug=loix       # un seul lieu
 *   npm run photos -- --kind=villages   # villages ou plages
 *   npm run photos -- --force           # re-telecharge
 *
 * ~$0.0015 / lieu. Sortie : public/images/{villages,plages}/<slug>.webp
 * + manifeste data/images.generated.json.
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { COMMUNES, BEACHES } from "./inventory";

const ROOT = process.cwd();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const arg = (k: string) =>
  (process.argv.find((a) => a.startsWith(`--${k}=`)) || "").split("=")[1];
const onlySlug = arg("slug");
const onlyKind = arg("kind");
const FORCE = process.argv.includes("--force");

type Kind = "villages" | "plages";
type Place = { slug: string; name: string; kind: Kind; query: string };

const ARTICLES = new Set(["le", "la", "les", "l", "de", "des", "du", "d", "sur", "en", "the"]);
const norm = (s: string) =>
  (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const keyTokens = (name: string) =>
  norm(name)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2 && !ARTICLES.has(t));

async function loadToken(): Promise<string> {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN;
  const env = await readFile(path.join(ROOT, ".env.local"), "utf8");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (!m) throw new Error("Pas d'APIFY_TOKEN dans l'env ni dans .env.local");
  return m[1].trim();
}

async function runActor(token: string, queries: string[]): Promise<any[]> {
  const input = {
    searchStringsArray: queries,
    maxCrawledPlacesPerSearch: 1,
    language: "fr",
    maxImages: 4,
    skipClosedPlaces: false,
  };
  const res = await fetch(
    `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    },
  );
  if (!res.ok)
    throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

async function downloadPhoto(url: string, outPath: string) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`img ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await sharp(buf)
    .resize(1600, 900, { fit: "cover", position: "centre" })
    .webp({ quality: 80 })
    .toFile(outPath);
}

const places: Place[] = [
  ...COMMUNES.map((c) => ({
    slug: c.slug,
    name: c.name,
    kind: "villages" as const,
    query: `${c.name}, Île de Ré`,
  })),
  ...BEACHES.map((b) => ({
    slug: b.slug,
    name: b.name.replace(/\s*\([^)]*\)\s*/g, " ").trim(),
    kind: "plages" as const,
    query: `Plage ${b.name.replace(/\s*\([^)]*\)\s*/g, " ").trim()}, Île de Ré`,
  })),
];

let todo = places.filter((p) => {
  if (onlySlug && p.slug !== onlySlug) return false;
  if (onlyKind && p.kind !== onlyKind) return false;
  if (FORCE) return true;
  return !existsSync(path.join(ROOT, "public/images", p.kind, `${p.slug}.webp`));
});

if (!todo.length) {
  console.log("Aucune image manquante. Rien a faire.");
  process.exit(0);
}

async function main() {
await mkdir(path.join(ROOT, "public/images/villages"), { recursive: true });
await mkdir(path.join(ROOT, "public/images/plages"), { recursive: true });

const token = await loadToken();
console.log(`Scrape ${todo.length} lieux via Apify Google Places...\n`);
let filled = 0;
let scraped = 0;
const manifest: Record<string, string> = {};

for (let i = 0; i < todo.length; i += 10) {
  const batch = todo.slice(i, i + 10);
  let raw: any[];
  try {
    raw = await runActor(
      token,
      batch.map((p) => p.query),
    );
  } catch (e: any) {
    console.log(`  batch ${i / 10 + 1}: erreur actor ${e.message}`);
    continue;
  }
  scraped += raw.length;
  const used = new Set<number>();

  for (const r of raw) {
    const img: string | undefined = (r.imageUrls || [])[0] || r.imageUrl;
    if (!img) continue;
    const title = norm(`${r.title || ""} ${r.city || ""} ${r.address || ""}`);
    let best = -1;
    let bestScore = 0;
    batch.forEach((p, k) => {
      if (used.has(k)) return;
      const toks = keyTokens(p.name);
      const score = toks.reduce((s, t) => (title.includes(t) ? s + t.length : s), 0);
      if (score > bestScore) {
        bestScore = score;
        best = k;
      }
    });
    if (best < 0) continue;
    const p = batch[best];
    const allImgs: string[] = ((r.imageUrls as string[] | undefined) || [img]).filter(Boolean).slice(0, 4);
    try {
      for (let idx = 0; idx < allImgs.length; idx++) {
        const suffix = idx === 0 ? "" : `-${idx + 1}`;
        const rel = `images/${p.kind}/${p.slug}${suffix}.webp`;
        const outPath = path.join(ROOT, "public", rel);
        if (!FORCE && existsSync(outPath)) continue;
        await downloadPhoto(allImgs[idx], outPath);
        manifest[`${p.kind}/${p.slug}${suffix}`] = `/${rel}`;
        await sleep(60);
      }
      used.add(best);
      filled++;
    } catch {
      console.log(`  ${p.slug}: erreur telechargement`);
    }
  }
  batch.forEach((p, k) => {
    if (!used.has(k)) console.log(`  ${p.slug}: pas de correspondance`);
  });
  console.log(`  batch ${i / 10 + 1}: ${used.size}/${batch.length} (${raw.length} scrapes)`);
}

const manPath = path.join(ROOT, "data/images.generated.json");
let prev: Record<string, string> = {};
try {
  prev = JSON.parse(await readFile(manPath, "utf8"));
} catch {
  /* premier run */
}
await mkdir(path.join(ROOT, "data"), { recursive: true });
await writeFile(manPath, `${JSON.stringify({ ...prev, ...manifest }, null, 2)}\n`);

console.log(`\n${"-".repeat(48)}`);
console.log(`OK ${filled}/${todo.length} images recuperees`);
console.log(`~$${(scraped * 0.0015).toFixed(3)} Apify (${scraped} lieux scrapes)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
