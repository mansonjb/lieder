# Brief de build — Site d'affiliation Île de Ré (Stay22)

> Document de cadrage. Source de vérité de l'architecture : toute nouvelle page doit s'y rattacher à un silo et respecter un template.
> Objectif : scaffolder puis remplir un site de contenu spécialisé sur l'Île de Ré, monétisé via les cartes **Stay22**, conçu pour monter en puissance (crescendo) jusqu'à 300+ pages de longue traîne.

---

## 1. Contexte & objectif

- **Sujet** : site éditorial 100 % spécialisé Île de Ré (Charente-Maritime, au large de La Rochelle).
- **Modèle de revenus** : affiliation hôtelière via **cartes Stay22 intégrées**. Chaque page "où dormir", chaque page lieu et chaque page activité doit pouvoir embarquer une carte Stay22 contextualisée (centrée sur le bon village / la bonne plage).
- **Promesse éditoriale** : le contenu le plus complet et le plus à jour du web francophone sur où dormir, où manger, quelles plages, quelles activités, et quand venir sur l'Île de Ré.
- **Cible SEO** : domination de la longue traîne (intentions précises, faible concurrence, fort taux de conversion vers la réservation).
- **Ton** : expert local, concret, honnête (vrais noms de plages, vrais villages), utile avant d'être promotionnel.

### Faits d'ancrage à respecter (ne pas inventer)

- L'île compte **10 communes** : Rivedoux-Plage, Sainte-Marie-de-Ré, La Flotte, Saint-Martin-de-Ré (capitale, fortifications Vauban classées UNESCO), Le Bois-Plage-en-Ré, La Couarde-sur-Mer, Loix, Ars-en-Ré (clocher noir et blanc), Saint-Clément-des-Baleines (Phare des Baleines), Les Portes-en-Ré.
- ~85 km², reliée au continent par le **pont de l'île de Ré** (~3 km, péage), ~100-140 km de pistes cyclables.
- Incontournables : Phare des Baleines (257 marches), marais salants & fleur de sel, réserve naturelle de Lilleau des Niges (LPO), Écomusée du Marais Salant (Loix), Abbaye des Châteliers, Fort de La Prée, marchés (Le Bois-Plage, Ars, La Flotte, Saint-Martin), huîtres/cabanes ostréicoles, pommes de terre AOP de Ré, vins/Pineau.
- Plages repères : Sablanceaux & Nord (Rivedoux), Les Grenettes (Sainte-Marie, surf), La Cible (Saint-Martin), l'Arnérault (La Flotte), Les Gollandières & Le Gros Jonc (Le Bois-Plage), Le Peu Ragot / Les Prises / La Pergola (La Couarde, surf), Le Grouin (Loix), La Conche des Baleines (Saint-Clément), Trousse-Chemise (Les Portes).

---

## 2. Stack technique (retenue)

> Décision : **Next.js 16** (App Router, SSG) + React 19 + **Tailwind v4** + **MDX** (`@next/mdx`), i18n **FR + EN** dès le départ. (Le brief initial suggérait Astro ; on a retenu Next.js pour rester cohérent avec les autres sites du porteur de projet.)

- **Contenu** : prose **MDX** dans `/content/{locale}/...` (un fichier par page et par langue). Les métadonnées (§6) vivent dans le **registre généré** (`lib/registry.generated.ts`), pas en front-matter dupliqué.
- **Styling** : Tailwind v4 (`@theme` dans `app/globals.css`). Design sobre, typographie lisible, mobile-first.
- **Composants clés** : `<Stay22Map />`, `<HotelCard />`, `<ComparisonTable />`, `<ProsCons />`, `<FaqBlock />` (schema FAQ), `<PriceRange />`, `<BestTimeWidget />`, `<Breadcrumb />`, `<RelatedPages />`, `<TableOfContents />`.
- **SEO** : sitemap.xml auto, robots.txt, canonical, Open Graph, JSON-LD, hreflang + x-default.

> ⚠️ **Stay22** : ID d'affiliation jamais en dur. Stocké via env (`STAY22_AID`), injecté côté serveur par `<Stay22Map />`. Chaque carte centrée sur les coordonnées (`geo`) du lieu de la page.

---

## 3. Intégration Stay22 (cœur de la monétisation)

Règle d'or : **une page = une intention de réservation = une carte Stay22 contextualisée.**

| Type de page | Centrage carte | Pré-filtre conseillé |
|---|---|---|
| Où dormir [village] | coordonnées du village | hôtels + locations |
| Hôtels piscine / spa / bord de mer | île entière | filtre type |
| Page plage | coordonnées de la plage | hébergements à proximité |
| Page activité / lieu | coordonnées du site | hébergements à proximité |
| Mariage / lune de miel | village concerné | hôtels gamme sup. |
| Comparatif durée / itinéraire | étape centrale | — |

- Carte placée après l'intro et un premier bloc de valeur (pages monétisées : plus haut), rappel CTA plus bas.
- Toujours doublée d'un **tableau comparatif éditorial** (`<ComparisonTable />`).
- Nature affiliée mentionnée clairement (transparence = confiance + conformité).

---

## 4. Architecture en silos (URL & hiérarchie)

FR à la racine `/`, EN préfixé `/en`. Slugs localisés.

```
/                                      (home)
├── /villages/                         (pilier) + /{commune} ×10 + /{commune}/{que-faire,ou-dormir,restaurants,plages}
├── /plages/                           (pilier) + /{nom-plage} ×28 + /{thematique}
├── /ou-dormir/                        (pilier — monétisation #1) + /{village}, /{type}, /comparatifs/{…}
├── /ou-dormir-mariage/                (pilier — occasions) + lune-de-miel, evjf, seminaire, …
├── /que-faire/                        (pilier) + /{categorie}, /{public-ou-contexte}, /velo/itineraires/{…}
├── /restaurants/                      (pilier) + /{village}, /{type} ; /gastronomie/{…}
├── /quand-venir/                      (pilier) + /{mois} ×12, /{saison} ×4, /{annee}
├── /sejour/                           (pilier) + /{duree}
├── /preparer/                         (pilier — pratique)
└── /comparatifs/                      (Ré vs Oléron, quel village choisir…)
```

**Conventions** : URLs en minuscules, sans accents, mots séparés par `-`, pas de date dans l'URL (sauf pages annualisées), 1 H1 par page, slug stable.

---

## 5. Modèles de pages (8 templates)

1. **`pillar`** — intro, sommaire visuel des sous-pages, liens vers toutes les filles, FAQ.
2. **`village`** — présentation, à voir/à faire, plages, où dormir (carte Stay22 + tableau), où manger, accès/parking, FAQ.
3. **`plage`** — situation, type, baignade & sécurité, pour qui, accès & parking, marées, hébergements proches (Stay22), plages voisines.
4. **`ou-dormir`** (le plus monétisé) — réponse rapide, carte Stay22, tableau comparatif, par budget, par quartier, conseils, FAQ.
5. **`activite`** — description, prix/durée, réservation, niveau, saison, avec enfants ?, à proximité, hébergements proches (Stay22).
6. **`restaurant`** — sélection par catégorie/village, gammes de prix, spécialités, réservation.
7. **`quand-venir`** — météo/températures, affluence, prix, événements, verdict, carte Stay22.
8. **`comparatif` / `sejour`** — itinéraire jour par jour ou tableau A vs B, étapes + hébergement (Stay22).

Chaque template : `<Breadcrumb>`, `<TableOfContents>` si > 1200 mots, `<FaqBlock>`, `<RelatedPages>`, bloc transparence affiliation en pied.

---

## 6. Métadonnées normalisées (par page, dans le registre)

```
title, h1, slug {fr,en}, template, silo, intent (informationnel|comparatif|transactionnel|saisonnier),
target_keyword, stay22 (bool), geo {lat,lng,zoom}, mapLabel, related[], parent, last_updated, year_page
```

Édité dans `scripts/inventory.ts`, compilé par `npm run gen` vers `lib/registry.generated.ts`.

---

## 7. Inventaire des pages

Voir `scripts/inventory.ts` (source de vérité exécutable). Volume actuel : **284 pages × 2 langues = 568 fichiers**, répartis sur 10 silos (villages 51, plages 40, que-faire 37, ou-dormir 35, quand-venir 28, restaurants 20, occasions 19, préparer 18, séjour 14, comparatifs 11, + gastronomie/événements/legal/home). Réserve de croissance : +100 pages (déclinaisons village × intention).

---

## 8. Maillage interne (`<RelatedPages />` + registre)

- **Vertical** : chaque fille lie son pilier ; chaque pilier liste ses filles.
- **Latéral** : village ↔ ses plages / son "où dormir" / ses restaurants ; plage ↔ village + "où dormir proche plage".
- **Transversal monétisation** : toute page info à fort trafic pousse vers le "où dormir" correspondant.
- Ancres descriptives, 3 à 6 liens internes utiles par page. `related` complété automatiquement (silo + proximité).

---

## 9. SEO technique & E-E-A-T

- **JSON-LD** : `BreadcrumbList` partout ; `FAQPage` avec `<FaqBlock>` ; `Article`/`TouristAttraction`/`Beach`/`TouristDestination` selon template ; `Place`/`geo` sur villages/plages.
- **Titles** < 60 car. ; meta description unique 150-160 car.
- **Contenu** : 800-1500 mots (filles), 1500-2500 (piliers). Originalité réelle, pas de remplissage.
- **E-E-A-T** : page "À propos", `last_updated` visible, transparence affiliation.
- **Performance** : images WebP/AVIF, lazy-load, carte Stay22 chargée au clic (gate consentement) pour protéger le LCP.
- **Pages annualisées** : canonical auto-référent + lien "édition la plus récente".

---

## 10. Roadmap "crescendo" (lots de publication)

- **Lot 0 — Fondations** *(fait)* : archi, templates, composant Stay22, config, home, 10 piliers, scaffold complet des 568 pages, À propos + affiliation/legal.
- **Lot 1 — Cœur monétisation** : `/ou-dormir` complet + les 10 villages (`/villages/{c}` + `/villages/{c}/ou-dormir`).
- **Lot 2 — Trafic info** : Plages + Activités.
- **Lot 3 — Saisonnier & décision** : Quand venir + annualisées + Durées/itinéraires + Comparatifs.
- **Lot 4 — Profondeur** : Restaurants/Gastro + Occasions/Mariage + Préparer.
- **Lot 5 — Expansion continue** : réserve +100 pages, rafraîchissement annuel YYYY, événements datés.

À chaque lot : recompiler le sitemap, vérifier le maillage, mettre à jour les piliers.

---

## 11. Points à clarifier avant le Lot 1

- Nom de domaine et nom du site : **`exploreiledere.com`** / « Explore Île de Ré » (retenu, libre au RDAP le 2026-06-22).
- `STAY22_AID` réel + format d'intégration (carte embed retenue).
- Monétiser aussi activités/restaurants (autres affiliations) ou Stay22 hébergement uniquement ?
- (i18n FR + EN : décidé, en place.)

---

*Ce document est la source de vérité de l'architecture ; `scripts/inventory.ts` en est la version exécutable.*
