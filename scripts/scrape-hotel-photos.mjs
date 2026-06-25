#!/usr/bin/env node
// Scrape real hotel photos from Google Maps via Apify
// Usage: node scripts/scrape-hotel-photos.mjs
// Requires: APIFY_TOKEN in env (reads .env.local automatically)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Load APIFY_TOKEN from .env.local
const envPath = path.join(ROOT, ".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const m = line.match(/^([^=]+)=(.+)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

const TOKEN = process.env.APIFY_TOKEN;
if (!TOKEN) throw new Error("APIFY_TOKEN not found in .env.local");

const OUT_DIR = path.join(ROOT, "public", "images", "hotels");
const MANIFEST_PATH = path.join(ROOT, "data", "hotel-images.generated.json");

fs.mkdirSync(OUT_DIR, { recursive: true });

// All hotels to search — one query per accommodation pick, in order
const HOTELS = [
  { key: "rivedoux-plage-0",            query: "Camping La Pergola Rivedoux-Plage Île de Ré France" },
  { key: "rivedoux-plage-1",            query: "Gîtes du Pertuis Rivedoux-Plage Île de Ré France" },
  { key: "rivedoux-plage-2",            query: "Villa Sablanceaux Rivedoux-Plage Île de Ré France" },
  { key: "sainte-marie-de-re-0",        query: "Camping Les Grenettes Sainte-Marie-de-Ré Île de Ré France" },
  { key: "sainte-marie-de-re-1",        query: "Résidence location vacances Sainte-Marie-de-Ré Île de Ré France" },
  { key: "sainte-marie-de-re-2",        query: "Chambre hôtes Sainte-Marie-de-Ré Île de Ré France" },
  { key: "la-flotte-0",                 query: "Hôtel Le Richelieu La Flotte Île de Ré France" },
  { key: "la-flotte-1",                 query: "Chambre hôtes La Flotte Île de Ré France" },
  { key: "la-flotte-2",                 query: "Camping La Grillotière La Flotte Île de Ré France" },
  { key: "saint-martin-de-re-0",        query: "Hôtel de Toiras Saint-Martin-de-Ré Île de Ré France" },
  { key: "saint-martin-de-re-1",        query: "Les Ateliers de l'Image Saint-Martin-de-Ré Île de Ré France" },
  { key: "saint-martin-de-re-2",        query: "Location gîte Saint-Martin-de-Ré intra-muros Île de Ré France" },
  { key: "le-bois-plage-en-re-0",       query: "Camping Yelloh Village La Tour des Prises Le Bois-Plage-en-Ré Île de Ré France" },
  { key: "le-bois-plage-en-re-1",       query: "Camping Interlude Le Bois-Plage-en-Ré Île de Ré France" },
  { key: "le-bois-plage-en-re-2",       query: "Hôtel L'Océan Le Bois-Plage-en-Ré Île de Ré France" },
  { key: "la-couarde-sur-mer-0",        query: "Camping La Grainetière La Couarde-sur-Mer Île de Ré France" },
  { key: "la-couarde-sur-mer-1",        query: "Camping de la Côte La Couarde-sur-Mer Île de Ré France" },
  { key: "la-couarde-sur-mer-2",        query: "Gîte location vacances La Couarde-sur-Mer Île de Ré France" },
  { key: "loix-0",                      query: "Gîte location vacances Loix Île de Ré France" },
  { key: "loix-1",                      query: "Chambre hôtes Loix Île de Ré France" },
  { key: "ars-en-re-0",                 query: "Hôtel du Martray Ars-en-Ré Île de Ré France" },
  { key: "ars-en-re-1",                 query: "Camping de la Monnerie Ars-en-Ré Île de Ré France" },
  { key: "ars-en-re-2",                 query: "Chambre hôtes Ars-en-Ré Île de Ré France" },
  { key: "saint-clement-des-baleines-0", query: "Camping Les Baleines Saint-Clément-des-Baleines Île de Ré France" },
  { key: "saint-clement-des-baleines-1", query: "Maison du Phare Saint-Clément-des-Baleines Île de Ré France" },
  { key: "saint-clement-des-baleines-2", query: "Gîte location Saint-Clément-des-Baleines Île de Ré France" },
  { key: "les-portes-en-re-0",          query: "Camping Yelloh Village Les Ilates Les Portes-en-Ré Île de Ré France" },
  { key: "les-portes-en-re-1",          query: "Camping Les Portes-en-Ré Île de Ré France" },
  { key: "les-portes-en-re-2",          query: "Gîte maison charme Les Portes-en-Ré Île de Ré France" },
];

async function downloadPhoto(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status} for ${url}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

async function apifyFetch(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status}: ${txt.slice(0, 200)}`);
  }
  return res.json();
}

async function runActorAndWait(input) {
  console.log(`\n🚀 Lancement Apify Google Places Crawler (${HOTELS.length} recherches)...`);

  // Start run (no waitForFinish to avoid HTTP timeout)
  const run = await apifyFetch("https://api.apify.com/v2/acts/nwua9Gu5YrADL7ZDj/runs", {
    method: "POST",
    body: JSON.stringify(input),
  });

  const runId = run.data.id;
  console.log(`Run ID: ${runId} — initial status: ${run.data.status}`);

  // Poll until done
  let status = run.data.status;
  while (status === "RUNNING" || status === "READY") {
    await new Promise((r) => setTimeout(r, 10000));
    const poll = await apifyFetch(`https://api.apify.com/v2/actor-runs/${runId}`);
    status = poll.data.status;
    const done = poll.data.stats?.finishedItemCount || 0;
    console.log(`  ⏳ ${status} — ${done} lieux traités`);
  }

  if (status !== "SUCCEEDED") throw new Error(`Run terminé avec status: ${status}`);

  console.log("✅ Run terminé, récupération des résultats...");
  const data = await apifyFetch(
    `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?limit=200`
  );
  return data;
}

async function main() {
  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"))
    : {};

  const results = await runActorAndWait({
    searchStringsArray: HOTELS.map((h) => h.query),
    maxCrawledPlacesPerSearch: 1,
    language: "fr",
    maxImages: 5,
    exportPlaceUrls: false,
  });

  console.log(`\n📦 ${results.length} résultats reçus\n`);

  // Match results to hotel keys by index
  // Google Maps scraper returns items in query order (1 per query)
  for (let i = 0; i < HOTELS.length; i++) {
    const hotel = HOTELS[i];
    const result = results[i];

    if (!result) {
      console.log(`⚠️  Pas de résultat pour ${hotel.key}`);
      continue;
    }

    const imageUrls = result.imageUrls || result.images || [];
    // Resize Google Maps photos to 800×500 for hotel card use
    const photoUrl = imageUrls[0]
      ? imageUrls[0].replace(/=w\d+-h\d+-k-no$/, "=w800-h500-k-no")
      : null;

    if (!photoUrl) {
      console.log(`⚠️  Pas de photo pour ${hotel.key} (${result.title || "inconnu"})`);
      continue;
    }

    const ext = photoUrl.includes(".jpg") ? "jpg" : "jpg";
    const filename = `${hotel.key}.${ext}`;
    const destPath = path.join(OUT_DIR, filename);
    const publicPath = `/images/hotels/${filename}`;

    console.log(`📸 ${hotel.key} → ${result.title} (${imageUrls.length} photos)`);

    try {
      await downloadPhoto(photoUrl, destPath);
      manifest[hotel.key] = publicPath;
      console.log(`   ✓ ${filename}`);
    } catch (err) {
      console.log(`   ✗ Échec téléchargement: ${err.message}`);
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\n✅ Manifest sauvegardé: ${MANIFEST_PATH}`);
  console.log(`   ${Object.keys(manifest).length}/${HOTELS.length} photos`);
}

main().catch((err) => {
  console.error("❌ Erreur:", err.message);
  process.exit(1);
});
