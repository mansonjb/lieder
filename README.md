# lieder — Guide Île de Ré

Site éditorial 100% spécialisé Île de Ré, monétisé via les cartes d'affiliation **Stay22**.
SEO programmatique (longue traîne), ~303 pages × 2 langues (**FR** défaut + **EN**).

## Stack

- **Next.js 16** (App Router, SSG) + **React 19**
- **Tailwind v4** (CSS-only, `@theme` dans `app/globals.css`)
- **MDX** (`@next/mdx`) — la prose vit dans `/content/{locale}/...`
- i18n maison : **FR à la racine `/`**, **EN sur `/en`**, slugs localisés, hreflang + x-default

## Architecture

- **Registre de routes central** : `lib/registry.generated.ts` (source de vérité unique :
  slugs FR/EN, template, silo, intention, géo, maillage). Généré par `scripts/generate.ts`.
- **Catch-all unique** : `app/[locale]/[[...slug]]/page.tsx` lit le registre, choisit le
  template (`components/templates/*`), charge le corps MDX et le rend.
- **Loaders MDX** : `content/loaders.generated.ts` (map `locale/clé → import()`).
- **Stay22** : `lib/affiliates/stay22.ts` + `components/Stay22Map.tsx`. L'ID d'affiliation
  (`STAY22_AID`) est lu côté serveur depuis l'environnement, jamais en dur.

## Démarrage

```bash
cp .env.example .env.local   # renseigner STAY22_AID + NEXT_PUBLIC_SITE_URL
npm install
npm run gen                  # génère registre + loaders + stubs MDX (303 pages × 2 langues)
npm run dev                  # http://localhost:3016
```

## Régénérer le scaffold

Le contenu des silos est décrit dans `scripts/inventory.ts`. Après modification :

```bash
npm run gen
```

Le générateur ne réécrit pas les `.mdx` déjà remplis (il ne crée que les manquants),
mais régénère toujours le registre et les loaders.

## Lots de publication

Voir le brief (`/PROJECT_BRIEF.md`) §10. Lot 0 = fondations (ce scaffold).
