// GENERE PAR scripts/generate.ts. NE PAS EDITER A LA MAIN.
// Editez scripts/inventory.ts puis lancez `npm run gen`.
import type { PageEntry } from "@/lib/types";

export const REGISTRY: PageEntry[] = [
  {
    "key": "",
    "silo": "home",
    "template": "home",
    "intent": "navigation",
    "stay22": false,
    "slug": {
      "fr": "",
      "en": ""
    },
    "title": {
      "fr": "Guide de l'Île de Ré",
      "en": "Île de Ré travel guide"
    },
    "h1": {
      "fr": "Guide de l'Île de Ré",
      "en": "Île de Ré travel guide"
    },
    "description": {
      "fr": "Le guide complet de l'Île de Ré : où dormir, que faire, quelles plages, où manger et quand venir. Conseils locaux, cartes et comparatifs pour réussir votre séjour.",
      "en": "The complete guide to Île de Ré: where to stay, what to do, which beaches, where to eat and when to go. Local tips, maps and comparison tables."
    },
    "targetKeyword": {
      "fr": "guide de l'île de ré",
      "en": "île de ré travel guide"
    },
    "related": [
      "villages",
      "plages",
      "ou-dormir",
      "que-faire",
      "restaurants",
      "quand-venir",
      "sejour",
      "preparer"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 1,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "villages",
    "silo": "villages",
    "template": "pillar",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages",
      "en": "villages"
    },
    "title": {
      "fr": "Les 10 villages de l'Île de Ré",
      "en": "The 10 villages of Île de Ré"
    },
    "h1": {
      "fr": "Les 10 villages de l'Île de Ré",
      "en": "The 10 villages of Île de Ré"
    },
    "description": {
      "fr": "Les 10 villages de l'Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "The 10 villages of Île de Ré: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "les 10 villages de l'île de ré",
      "en": "the 10 villages of île de ré"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.9,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "plages",
    "silo": "plages",
    "template": "pillar",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages",
      "en": "beaches"
    },
    "title": {
      "fr": "Les plus belles plages de l'Île de Ré",
      "en": "The best beaches of Île de Ré"
    },
    "h1": {
      "fr": "Les plus belles plages de l'Île de Ré",
      "en": "The best beaches of Île de Ré"
    },
    "description": {
      "fr": "Les plus belles plages de l'Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "The best beaches of Île de Ré: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "les plus belles plages de l'île de ré",
      "en": "the best beaches of île de ré"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.9,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    }
  },
  {
    "key": "ou-dormir",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir",
      "en": "where-to-stay"
    },
    "title": {
      "fr": "Où dormir sur l'Île de Ré : le guide complet",
      "en": "Where to stay on Île de Ré: the complete guide"
    },
    "h1": {
      "fr": "Où dormir sur l'Île de Ré : le guide complet",
      "en": "Where to stay on Île de Ré: the complete guide"
    },
    "description": {
      "fr": "Où dormir sur l'Île de Ré : le guide complet : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay on Île de Ré: the complete guide: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir sur l'île de ré : le guide complet",
      "en": "where to stay on île de ré: the complete guide"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.95,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    }
  },
  {
    "key": "ou-dormir-mariage",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage",
      "en": "weddings"
    },
    "title": {
      "fr": "Se marier et loger ses invités sur l'Île de Ré",
      "en": "Weddings on Île de Ré: venues and where to stay"
    },
    "h1": {
      "fr": "Se marier et loger ses invités sur l'Île de Ré",
      "en": "Weddings on Île de Ré: venues and where to stay"
    },
    "description": {
      "fr": "Se marier et loger ses invités sur l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Weddings on Île de Ré: venues and where to stay: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier et loger ses invités sur l'île de ré",
      "en": "weddings on île de ré: venues and where to stay"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    }
  },
  {
    "key": "que-faire",
    "silo": "que-faire",
    "template": "pillar",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire",
      "en": "things-to-do"
    },
    "title": {
      "fr": "Que faire sur l'Île de Ré",
      "en": "Things to do on Île de Ré"
    },
    "h1": {
      "fr": "Que faire sur l'Île de Ré",
      "en": "Things to do on Île de Ré"
    },
    "description": {
      "fr": "Que faire sur l'Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "Things to do on Île de Ré: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "que faire sur l'île de ré",
      "en": "things to do on île de ré"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.9,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "restaurants",
    "silo": "restaurants",
    "template": "pillar",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants",
      "en": "restaurants"
    },
    "title": {
      "fr": "Où manger sur l'Île de Ré",
      "en": "Where to eat on Île de Ré"
    },
    "h1": {
      "fr": "Où manger sur l'Île de Ré",
      "en": "Where to eat on Île de Ré"
    },
    "description": {
      "fr": "Où manger sur l'Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "Where to eat on Île de Ré: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "où manger sur l'île de ré",
      "en": "where to eat on île de ré"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.85,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "quand-venir",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir",
      "en": "when-to-go"
    },
    "title": {
      "fr": "Quand partir sur l'Île de Ré",
      "en": "When to visit Île de Ré"
    },
    "h1": {
      "fr": "Quand partir sur l'Île de Ré",
      "en": "When to visit Île de Ré"
    },
    "description": {
      "fr": "Quand partir sur l'Île de Ré : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "When to visit Île de Ré: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "quand partir sur l'île de ré",
      "en": "when to visit île de ré"
    },
    "related": [
      "ou-dormir",
      "que-faire"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.85,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    }
  },
  {
    "key": "sejour",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour",
      "en": "itineraries"
    },
    "title": {
      "fr": "Combien de temps rester sur l'Île de Ré",
      "en": "How long to stay on Île de Ré"
    },
    "h1": {
      "fr": "Combien de temps rester sur l'Île de Ré",
      "en": "How long to stay on Île de Ré"
    },
    "description": {
      "fr": "Combien de temps rester sur l'Île de Ré : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "How long to stay on Île de Ré: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "combien de temps rester sur l'île de ré",
      "en": "how long to stay on île de ré"
    },
    "related": [
      "ou-dormir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    }
  },
  {
    "key": "preparer",
    "silo": "preparer",
    "template": "pillar",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer",
      "en": "plan-your-trip"
    },
    "title": {
      "fr": "Préparer son séjour sur l'Île de Ré",
      "en": "Plan your trip to Île de Ré"
    },
    "h1": {
      "fr": "Préparer son séjour sur l'Île de Ré",
      "en": "Plan your trip to Île de Ré"
    },
    "description": {
      "fr": "Préparer son séjour sur l'Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "Plan your trip to Île de Ré: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "préparer son séjour sur l'île de ré",
      "en": "plan your trip to île de ré"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "comparatifs",
    "silo": "comparatifs",
    "template": "pillar",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "comparatifs",
      "en": "comparisons"
    },
    "title": {
      "fr": "Bien choisir : nos comparatifs Île de Ré",
      "en": "Make the right call: our Île de Ré comparisons"
    },
    "h1": {
      "fr": "Bien choisir : nos comparatifs Île de Ré",
      "en": "Make the right call: our Île de Ré comparisons"
    },
    "description": {
      "fr": "Bien choisir : nos comparatifs Île de Ré : le guide, les pages clés et nos conseils pour bien préparer cette partie de votre séjour rétais.",
      "en": "Make the right call: our Île de Ré comparisons: the guide, the key pages and our tips to plan this part of your Île de Ré trip."
    },
    "targetKeyword": {
      "fr": "bien choisir : nos comparatifs île de ré",
      "en": "make the right call: our île de ré comparisons"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    }
  },
  {
    "key": "villages/rivedoux-plage",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/rivedoux-plage",
      "en": "villages/rivedoux-plage"
    },
    "title": {
      "fr": "Visiter Rivedoux-Plage",
      "en": "Visiting Rivedoux-Plage"
    },
    "h1": {
      "fr": "Visiter Rivedoux-Plage",
      "en": "Visiting Rivedoux-Plage"
    },
    "description": {
      "fr": "Visiter Rivedoux-Plage : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Rivedoux-Plage: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter rivedoux-plage",
      "en": "visiting rivedoux-plage"
    },
    "related": [
      "ou-dormir/rivedoux-plage",
      "villages/rivedoux-plage/plages",
      "villages/rivedoux-plage/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/sainte-marie-de-re",
      "villages/la-flotte"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Rivedoux-Plage",
      "en": "Rivedoux-Plage"
    },
    "parent": "villages"
  },
  {
    "key": "villages/rivedoux-plage/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/rivedoux-plage/que-faire",
      "en": "villages/rivedoux-plage/things-to-do"
    },
    "title": {
      "fr": "Que faire à Rivedoux-Plage",
      "en": "Things to do in Rivedoux-Plage"
    },
    "h1": {
      "fr": "Que faire à Rivedoux-Plage",
      "en": "Things to do in Rivedoux-Plage"
    },
    "description": {
      "fr": "Que faire à Rivedoux-Plage : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Rivedoux-Plage: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à rivedoux-plage",
      "en": "things to do in rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "ou-dormir",
      "que-faire",
      "villages/rivedoux-plage/ou-dormir",
      "villages/rivedoux-plage/restaurants",
      "villages/rivedoux-plage/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "parent": "villages/rivedoux-plage"
  },
  {
    "key": "villages/rivedoux-plage/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/rivedoux-plage/ou-dormir",
      "en": "villages/rivedoux-plage/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Rivedoux-Plage",
      "en": "Where to stay in Rivedoux-Plage"
    },
    "h1": {
      "fr": "Où dormir à Rivedoux-Plage",
      "en": "Where to stay in Rivedoux-Plage"
    },
    "description": {
      "fr": "Où dormir à Rivedoux-Plage : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Rivedoux-Plage: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à rivedoux-plage",
      "en": "where to stay in rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "villages/rivedoux-plage/que-faire",
      "villages/rivedoux-plage/restaurants",
      "villages/rivedoux-plage/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Rivedoux-Plage",
      "en": "Rivedoux-Plage"
    },
    "parent": "villages/rivedoux-plage"
  },
  {
    "key": "villages/rivedoux-plage/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/rivedoux-plage/restaurants",
      "en": "villages/rivedoux-plage/restaurants"
    },
    "title": {
      "fr": "Où manger à Rivedoux-Plage",
      "en": "Restaurants in Rivedoux-Plage"
    },
    "h1": {
      "fr": "Où manger à Rivedoux-Plage",
      "en": "Restaurants in Rivedoux-Plage"
    },
    "description": {
      "fr": "Où manger à Rivedoux-Plage : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Rivedoux-Plage: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à rivedoux-plage",
      "en": "restaurants in rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "restaurants",
      "villages/rivedoux-plage/que-faire",
      "villages/rivedoux-plage/ou-dormir",
      "villages/rivedoux-plage/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "parent": "villages/rivedoux-plage"
  },
  {
    "key": "villages/rivedoux-plage/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/rivedoux-plage/plages",
      "en": "villages/rivedoux-plage/beaches"
    },
    "title": {
      "fr": "Les plages de Rivedoux-Plage",
      "en": "The beaches of Rivedoux-Plage"
    },
    "h1": {
      "fr": "Les plages de Rivedoux-Plage",
      "en": "The beaches of Rivedoux-Plage"
    },
    "description": {
      "fr": "Les plages de Rivedoux-Plage : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Rivedoux-Plage: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de rivedoux-plage",
      "en": "the beaches of rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "plages",
      "ou-dormir/proche-plage",
      "villages/rivedoux-plage/que-faire",
      "villages/rivedoux-plage/ou-dormir",
      "villages/rivedoux-plage/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Rivedoux-Plage",
      "en": "Rivedoux-Plage"
    },
    "parent": "villages/rivedoux-plage"
  },
  {
    "key": "villages/sainte-marie-de-re",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/sainte-marie-de-re",
      "en": "villages/sainte-marie-de-re"
    },
    "title": {
      "fr": "Visiter Sainte-Marie-de-Ré",
      "en": "Visiting Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Visiter Sainte-Marie-de-Ré",
      "en": "Visiting Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Visiter Sainte-Marie-de-Ré : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Sainte-Marie-de-Ré: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter sainte-marie-de-ré",
      "en": "visiting sainte-marie-de-ré"
    },
    "related": [
      "ou-dormir/sainte-marie-de-re",
      "villages/sainte-marie-de-re/plages",
      "villages/sainte-marie-de-re/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/la-flotte"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Sainte-Marie-de-Ré",
      "en": "Sainte-Marie-de-Ré"
    },
    "parent": "villages"
  },
  {
    "key": "villages/sainte-marie-de-re/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/sainte-marie-de-re/que-faire",
      "en": "villages/sainte-marie-de-re/things-to-do"
    },
    "title": {
      "fr": "Que faire à Sainte-Marie-de-Ré",
      "en": "Things to do in Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Que faire à Sainte-Marie-de-Ré",
      "en": "Things to do in Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Que faire à Sainte-Marie-de-Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Sainte-Marie-de-Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à sainte-marie-de-ré",
      "en": "things to do in sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "ou-dormir",
      "que-faire",
      "villages/sainte-marie-de-re/ou-dormir",
      "villages/sainte-marie-de-re/restaurants",
      "villages/sainte-marie-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "parent": "villages/sainte-marie-de-re"
  },
  {
    "key": "villages/sainte-marie-de-re/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/sainte-marie-de-re/ou-dormir",
      "en": "villages/sainte-marie-de-re/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Sainte-Marie-de-Ré",
      "en": "Where to stay in Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Où dormir à Sainte-Marie-de-Ré",
      "en": "Where to stay in Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Où dormir à Sainte-Marie-de-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Sainte-Marie-de-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à sainte-marie-de-ré",
      "en": "where to stay in sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "villages/sainte-marie-de-re/que-faire",
      "villages/sainte-marie-de-re/restaurants",
      "villages/sainte-marie-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Sainte-Marie-de-Ré",
      "en": "Sainte-Marie-de-Ré"
    },
    "parent": "villages/sainte-marie-de-re"
  },
  {
    "key": "villages/sainte-marie-de-re/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/sainte-marie-de-re/restaurants",
      "en": "villages/sainte-marie-de-re/restaurants"
    },
    "title": {
      "fr": "Où manger à Sainte-Marie-de-Ré",
      "en": "Restaurants in Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Où manger à Sainte-Marie-de-Ré",
      "en": "Restaurants in Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Où manger à Sainte-Marie-de-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Sainte-Marie-de-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à sainte-marie-de-ré",
      "en": "restaurants in sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "restaurants",
      "villages/sainte-marie-de-re/que-faire",
      "villages/sainte-marie-de-re/ou-dormir",
      "villages/sainte-marie-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "parent": "villages/sainte-marie-de-re"
  },
  {
    "key": "villages/sainte-marie-de-re/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/sainte-marie-de-re/plages",
      "en": "villages/sainte-marie-de-re/beaches"
    },
    "title": {
      "fr": "Les plages de Sainte-Marie-de-Ré",
      "en": "The beaches of Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Les plages de Sainte-Marie-de-Ré",
      "en": "The beaches of Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Les plages de Sainte-Marie-de-Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Sainte-Marie-de-Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de sainte-marie-de-ré",
      "en": "the beaches of sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "plages",
      "ou-dormir/proche-plage",
      "villages/sainte-marie-de-re/que-faire",
      "villages/sainte-marie-de-re/ou-dormir",
      "villages/sainte-marie-de-re/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Sainte-Marie-de-Ré",
      "en": "Sainte-Marie-de-Ré"
    },
    "parent": "villages/sainte-marie-de-re"
  },
  {
    "key": "villages/la-flotte",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-flotte",
      "en": "villages/la-flotte"
    },
    "title": {
      "fr": "Visiter La Flotte",
      "en": "Visiting La Flotte"
    },
    "h1": {
      "fr": "Visiter La Flotte",
      "en": "Visiting La Flotte"
    },
    "description": {
      "fr": "Visiter La Flotte : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting La Flotte: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter la flotte",
      "en": "visiting la flotte"
    },
    "related": [
      "ou-dormir/la-flotte",
      "villages/la-flotte/plages",
      "villages/la-flotte/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Flotte",
      "en": "La Flotte"
    },
    "parent": "villages"
  },
  {
    "key": "villages/la-flotte/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/la-flotte/que-faire",
      "en": "villages/la-flotte/things-to-do"
    },
    "title": {
      "fr": "Que faire à La Flotte",
      "en": "Things to do in La Flotte"
    },
    "h1": {
      "fr": "Que faire à La Flotte",
      "en": "Things to do in La Flotte"
    },
    "description": {
      "fr": "Que faire à La Flotte : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in La Flotte: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à la flotte",
      "en": "things to do in la flotte"
    },
    "related": [
      "villages/la-flotte",
      "ou-dormir",
      "que-faire",
      "villages/la-flotte/ou-dormir",
      "villages/la-flotte/restaurants",
      "villages/la-flotte/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "parent": "villages/la-flotte"
  },
  {
    "key": "villages/la-flotte/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-flotte/ou-dormir",
      "en": "villages/la-flotte/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à La Flotte",
      "en": "Where to stay in La Flotte"
    },
    "h1": {
      "fr": "Où dormir à La Flotte",
      "en": "Where to stay in La Flotte"
    },
    "description": {
      "fr": "Où dormir à La Flotte : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in La Flotte: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à la flotte",
      "en": "where to stay in la flotte"
    },
    "related": [
      "villages/la-flotte",
      "villages/la-flotte/que-faire",
      "villages/la-flotte/restaurants",
      "villages/la-flotte/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Flotte",
      "en": "La Flotte"
    },
    "parent": "villages/la-flotte"
  },
  {
    "key": "villages/la-flotte/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/la-flotte/restaurants",
      "en": "villages/la-flotte/restaurants"
    },
    "title": {
      "fr": "Où manger à La Flotte",
      "en": "Restaurants in La Flotte"
    },
    "h1": {
      "fr": "Où manger à La Flotte",
      "en": "Restaurants in La Flotte"
    },
    "description": {
      "fr": "Où manger à La Flotte : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in La Flotte: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à la flotte",
      "en": "restaurants in la flotte"
    },
    "related": [
      "villages/la-flotte",
      "restaurants",
      "villages/la-flotte/que-faire",
      "villages/la-flotte/ou-dormir",
      "villages/la-flotte/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "parent": "villages/la-flotte"
  },
  {
    "key": "villages/la-flotte/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-flotte/plages",
      "en": "villages/la-flotte/beaches"
    },
    "title": {
      "fr": "Les plages de La Flotte",
      "en": "The beaches of La Flotte"
    },
    "h1": {
      "fr": "Les plages de La Flotte",
      "en": "The beaches of La Flotte"
    },
    "description": {
      "fr": "Les plages de La Flotte : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of La Flotte: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de la flotte",
      "en": "the beaches of la flotte"
    },
    "related": [
      "villages/la-flotte",
      "plages",
      "ou-dormir/proche-plage",
      "villages/la-flotte/que-faire",
      "villages/la-flotte/ou-dormir",
      "villages/la-flotte/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Flotte",
      "en": "La Flotte"
    },
    "parent": "villages/la-flotte"
  },
  {
    "key": "villages/saint-martin-de-re",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-martin-de-re",
      "en": "villages/saint-martin-de-re"
    },
    "title": {
      "fr": "Visiter Saint-Martin-de-Ré",
      "en": "Visiting Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Visiter Saint-Martin-de-Ré",
      "en": "Visiting Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Visiter Saint-Martin-de-Ré : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Saint-Martin-de-Ré: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter saint-martin-de-ré",
      "en": "visiting saint-martin-de-ré"
    },
    "related": [
      "ou-dormir/saint-martin-de-re",
      "villages/saint-martin-de-re/plages",
      "villages/saint-martin-de-re/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Martin-de-Ré",
      "en": "Saint-Martin-de-Ré"
    },
    "parent": "villages"
  },
  {
    "key": "villages/saint-martin-de-re/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/saint-martin-de-re/que-faire",
      "en": "villages/saint-martin-de-re/things-to-do"
    },
    "title": {
      "fr": "Que faire à Saint-Martin-de-Ré",
      "en": "Things to do in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Que faire à Saint-Martin-de-Ré",
      "en": "Things to do in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Que faire à Saint-Martin-de-Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Saint-Martin-de-Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à saint-martin-de-ré",
      "en": "things to do in saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "ou-dormir",
      "que-faire",
      "villages/saint-martin-de-re/ou-dormir",
      "villages/saint-martin-de-re/restaurants",
      "villages/saint-martin-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "parent": "villages/saint-martin-de-re"
  },
  {
    "key": "villages/saint-martin-de-re/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-martin-de-re/ou-dormir",
      "en": "villages/saint-martin-de-re/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Saint-Martin-de-Ré",
      "en": "Where to stay in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Où dormir à Saint-Martin-de-Ré",
      "en": "Where to stay in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Où dormir à Saint-Martin-de-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Saint-Martin-de-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à saint-martin-de-ré",
      "en": "where to stay in saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "villages/saint-martin-de-re/que-faire",
      "villages/saint-martin-de-re/restaurants",
      "villages/saint-martin-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Martin-de-Ré",
      "en": "Saint-Martin-de-Ré"
    },
    "parent": "villages/saint-martin-de-re"
  },
  {
    "key": "villages/saint-martin-de-re/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/saint-martin-de-re/restaurants",
      "en": "villages/saint-martin-de-re/restaurants"
    },
    "title": {
      "fr": "Où manger à Saint-Martin-de-Ré",
      "en": "Restaurants in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Où manger à Saint-Martin-de-Ré",
      "en": "Restaurants in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Où manger à Saint-Martin-de-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Saint-Martin-de-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à saint-martin-de-ré",
      "en": "restaurants in saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "restaurants",
      "villages/saint-martin-de-re/que-faire",
      "villages/saint-martin-de-re/ou-dormir",
      "villages/saint-martin-de-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "parent": "villages/saint-martin-de-re"
  },
  {
    "key": "villages/saint-martin-de-re/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-martin-de-re/plages",
      "en": "villages/saint-martin-de-re/beaches"
    },
    "title": {
      "fr": "Les plages de Saint-Martin-de-Ré",
      "en": "The beaches of Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Les plages de Saint-Martin-de-Ré",
      "en": "The beaches of Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Les plages de Saint-Martin-de-Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Saint-Martin-de-Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de saint-martin-de-ré",
      "en": "the beaches of saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "plages",
      "ou-dormir/proche-plage",
      "villages/saint-martin-de-re/que-faire",
      "villages/saint-martin-de-re/ou-dormir",
      "villages/saint-martin-de-re/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Martin-de-Ré",
      "en": "Saint-Martin-de-Ré"
    },
    "parent": "villages/saint-martin-de-re"
  },
  {
    "key": "villages/le-bois-plage-en-re",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/le-bois-plage-en-re",
      "en": "villages/le-bois-plage-en-re"
    },
    "title": {
      "fr": "Visiter Le Bois-Plage-en-Ré",
      "en": "Visiting Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Visiter Le Bois-Plage-en-Ré",
      "en": "Visiting Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Visiter Le Bois-Plage-en-Ré : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Le Bois-Plage-en-Ré: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter le bois-plage-en-ré",
      "en": "visiting le bois-plage-en-ré"
    },
    "related": [
      "ou-dormir/le-bois-plage-en-re",
      "villages/le-bois-plage-en-re/plages",
      "villages/le-bois-plage-en-re/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Le Bois-Plage-en-Ré",
      "en": "Le Bois-Plage-en-Ré"
    },
    "parent": "villages"
  },
  {
    "key": "villages/le-bois-plage-en-re/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/le-bois-plage-en-re/que-faire",
      "en": "villages/le-bois-plage-en-re/things-to-do"
    },
    "title": {
      "fr": "Que faire à Le Bois-Plage-en-Ré",
      "en": "Things to do in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Que faire à Le Bois-Plage-en-Ré",
      "en": "Things to do in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Que faire à Le Bois-Plage-en-Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Le Bois-Plage-en-Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à le bois-plage-en-ré",
      "en": "things to do in le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "ou-dormir",
      "que-faire",
      "villages/le-bois-plage-en-re/ou-dormir",
      "villages/le-bois-plage-en-re/restaurants",
      "villages/le-bois-plage-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "parent": "villages/le-bois-plage-en-re"
  },
  {
    "key": "villages/le-bois-plage-en-re/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/le-bois-plage-en-re/ou-dormir",
      "en": "villages/le-bois-plage-en-re/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré",
      "en": "Where to stay in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré",
      "en": "Where to stay in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Le Bois-Plage-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à le bois-plage-en-ré",
      "en": "where to stay in le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "villages/le-bois-plage-en-re/que-faire",
      "villages/le-bois-plage-en-re/restaurants",
      "villages/le-bois-plage-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Le Bois-Plage-en-Ré",
      "en": "Le Bois-Plage-en-Ré"
    },
    "parent": "villages/le-bois-plage-en-re"
  },
  {
    "key": "villages/le-bois-plage-en-re/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/le-bois-plage-en-re/restaurants",
      "en": "villages/le-bois-plage-en-re/restaurants"
    },
    "title": {
      "fr": "Où manger à Le Bois-Plage-en-Ré",
      "en": "Restaurants in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Le Bois-Plage-en-Ré",
      "en": "Restaurants in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Où manger à Le Bois-Plage-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Le Bois-Plage-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à le bois-plage-en-ré",
      "en": "restaurants in le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "restaurants",
      "villages/le-bois-plage-en-re/que-faire",
      "villages/le-bois-plage-en-re/ou-dormir",
      "villages/le-bois-plage-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "parent": "villages/le-bois-plage-en-re"
  },
  {
    "key": "villages/le-bois-plage-en-re/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/le-bois-plage-en-re/plages",
      "en": "villages/le-bois-plage-en-re/beaches"
    },
    "title": {
      "fr": "Les plages de Le Bois-Plage-en-Ré",
      "en": "The beaches of Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Les plages de Le Bois-Plage-en-Ré",
      "en": "The beaches of Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Les plages de Le Bois-Plage-en-Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Le Bois-Plage-en-Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de le bois-plage-en-ré",
      "en": "the beaches of le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "plages",
      "ou-dormir/proche-plage",
      "villages/le-bois-plage-en-re/que-faire",
      "villages/le-bois-plage-en-re/ou-dormir",
      "villages/le-bois-plage-en-re/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Le Bois-Plage-en-Ré",
      "en": "Le Bois-Plage-en-Ré"
    },
    "parent": "villages/le-bois-plage-en-re"
  },
  {
    "key": "villages/la-couarde-sur-mer",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-couarde-sur-mer",
      "en": "villages/la-couarde-sur-mer"
    },
    "title": {
      "fr": "Visiter La Couarde-sur-Mer",
      "en": "Visiting La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Visiter La Couarde-sur-Mer",
      "en": "Visiting La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Visiter La Couarde-sur-Mer : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting La Couarde-sur-Mer: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter la couarde-sur-mer",
      "en": "visiting la couarde-sur-mer"
    },
    "related": [
      "ou-dormir/la-couarde-sur-mer",
      "villages/la-couarde-sur-mer/plages",
      "villages/la-couarde-sur-mer/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Couarde-sur-Mer",
      "en": "La Couarde-sur-Mer"
    },
    "parent": "villages"
  },
  {
    "key": "villages/la-couarde-sur-mer/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/la-couarde-sur-mer/que-faire",
      "en": "villages/la-couarde-sur-mer/things-to-do"
    },
    "title": {
      "fr": "Que faire à La Couarde-sur-Mer",
      "en": "Things to do in La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Que faire à La Couarde-sur-Mer",
      "en": "Things to do in La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Que faire à La Couarde-sur-Mer : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in La Couarde-sur-Mer: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à la couarde-sur-mer",
      "en": "things to do in la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "ou-dormir",
      "que-faire",
      "villages/la-couarde-sur-mer/ou-dormir",
      "villages/la-couarde-sur-mer/restaurants",
      "villages/la-couarde-sur-mer/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "parent": "villages/la-couarde-sur-mer"
  },
  {
    "key": "villages/la-couarde-sur-mer/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-couarde-sur-mer/ou-dormir",
      "en": "villages/la-couarde-sur-mer/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à La Couarde-sur-Mer",
      "en": "Where to stay in La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Où dormir à La Couarde-sur-Mer",
      "en": "Where to stay in La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Où dormir à La Couarde-sur-Mer : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in La Couarde-sur-Mer: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à la couarde-sur-mer",
      "en": "where to stay in la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "villages/la-couarde-sur-mer/que-faire",
      "villages/la-couarde-sur-mer/restaurants",
      "villages/la-couarde-sur-mer/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Couarde-sur-Mer",
      "en": "La Couarde-sur-Mer"
    },
    "parent": "villages/la-couarde-sur-mer"
  },
  {
    "key": "villages/la-couarde-sur-mer/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/la-couarde-sur-mer/restaurants",
      "en": "villages/la-couarde-sur-mer/restaurants"
    },
    "title": {
      "fr": "Où manger à La Couarde-sur-Mer",
      "en": "Restaurants in La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Où manger à La Couarde-sur-Mer",
      "en": "Restaurants in La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Où manger à La Couarde-sur-Mer : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in La Couarde-sur-Mer: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à la couarde-sur-mer",
      "en": "restaurants in la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "restaurants",
      "villages/la-couarde-sur-mer/que-faire",
      "villages/la-couarde-sur-mer/ou-dormir",
      "villages/la-couarde-sur-mer/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "parent": "villages/la-couarde-sur-mer"
  },
  {
    "key": "villages/la-couarde-sur-mer/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/la-couarde-sur-mer/plages",
      "en": "villages/la-couarde-sur-mer/beaches"
    },
    "title": {
      "fr": "Les plages de La Couarde-sur-Mer",
      "en": "The beaches of La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Les plages de La Couarde-sur-Mer",
      "en": "The beaches of La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Les plages de La Couarde-sur-Mer : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of La Couarde-sur-Mer: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de la couarde-sur-mer",
      "en": "the beaches of la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "plages",
      "ou-dormir/proche-plage",
      "villages/la-couarde-sur-mer/que-faire",
      "villages/la-couarde-sur-mer/ou-dormir",
      "villages/la-couarde-sur-mer/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Couarde-sur-Mer",
      "en": "La Couarde-sur-Mer"
    },
    "parent": "villages/la-couarde-sur-mer"
  },
  {
    "key": "villages/loix",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/loix",
      "en": "villages/loix"
    },
    "title": {
      "fr": "Visiter Loix",
      "en": "Visiting Loix"
    },
    "h1": {
      "fr": "Visiter Loix",
      "en": "Visiting Loix"
    },
    "description": {
      "fr": "Visiter Loix : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Loix: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter loix",
      "en": "visiting loix"
    },
    "related": [
      "ou-dormir/loix",
      "villages/loix/plages",
      "villages/loix/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Loix",
      "en": "Loix"
    },
    "parent": "villages"
  },
  {
    "key": "villages/loix/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/loix/que-faire",
      "en": "villages/loix/things-to-do"
    },
    "title": {
      "fr": "Que faire à Loix",
      "en": "Things to do in Loix"
    },
    "h1": {
      "fr": "Que faire à Loix",
      "en": "Things to do in Loix"
    },
    "description": {
      "fr": "Que faire à Loix : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Loix: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à loix",
      "en": "things to do in loix"
    },
    "related": [
      "villages/loix",
      "ou-dormir",
      "que-faire",
      "villages/loix/ou-dormir",
      "villages/loix/restaurants",
      "villages/loix/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "parent": "villages/loix"
  },
  {
    "key": "villages/loix/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/loix/ou-dormir",
      "en": "villages/loix/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Loix",
      "en": "Where to stay in Loix"
    },
    "h1": {
      "fr": "Où dormir à Loix",
      "en": "Where to stay in Loix"
    },
    "description": {
      "fr": "Où dormir à Loix : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Loix: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à loix",
      "en": "where to stay in loix"
    },
    "related": [
      "villages/loix",
      "villages/loix/que-faire",
      "villages/loix/restaurants",
      "villages/loix/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Loix",
      "en": "Loix"
    },
    "parent": "villages/loix"
  },
  {
    "key": "villages/loix/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/loix/restaurants",
      "en": "villages/loix/restaurants"
    },
    "title": {
      "fr": "Où manger à Loix",
      "en": "Restaurants in Loix"
    },
    "h1": {
      "fr": "Où manger à Loix",
      "en": "Restaurants in Loix"
    },
    "description": {
      "fr": "Où manger à Loix : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Loix: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à loix",
      "en": "restaurants in loix"
    },
    "related": [
      "villages/loix",
      "restaurants",
      "villages/loix/que-faire",
      "villages/loix/ou-dormir",
      "villages/loix/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "parent": "villages/loix"
  },
  {
    "key": "villages/loix/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/loix/plages",
      "en": "villages/loix/beaches"
    },
    "title": {
      "fr": "Les plages de Loix",
      "en": "The beaches of Loix"
    },
    "h1": {
      "fr": "Les plages de Loix",
      "en": "The beaches of Loix"
    },
    "description": {
      "fr": "Les plages de Loix : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Loix: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de loix",
      "en": "the beaches of loix"
    },
    "related": [
      "villages/loix",
      "plages",
      "ou-dormir/proche-plage",
      "villages/loix/que-faire",
      "villages/loix/ou-dormir",
      "villages/loix/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Loix",
      "en": "Loix"
    },
    "parent": "villages/loix"
  },
  {
    "key": "villages/ars-en-re",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/ars-en-re",
      "en": "villages/ars-en-re"
    },
    "title": {
      "fr": "Visiter Ars-en-Ré",
      "en": "Visiting Ars-en-Ré"
    },
    "h1": {
      "fr": "Visiter Ars-en-Ré",
      "en": "Visiting Ars-en-Ré"
    },
    "description": {
      "fr": "Visiter Ars-en-Ré : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Ars-en-Ré: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter ars-en-ré",
      "en": "visiting ars-en-ré"
    },
    "related": [
      "ou-dormir/ars-en-re",
      "villages/ars-en-re/plages",
      "villages/ars-en-re/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Ars-en-Ré",
      "en": "Ars-en-Ré"
    },
    "parent": "villages"
  },
  {
    "key": "villages/ars-en-re/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/ars-en-re/que-faire",
      "en": "villages/ars-en-re/things-to-do"
    },
    "title": {
      "fr": "Que faire à Ars-en-Ré",
      "en": "Things to do in Ars-en-Ré"
    },
    "h1": {
      "fr": "Que faire à Ars-en-Ré",
      "en": "Things to do in Ars-en-Ré"
    },
    "description": {
      "fr": "Que faire à Ars-en-Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Ars-en-Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à ars-en-ré",
      "en": "things to do in ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "ou-dormir",
      "que-faire",
      "villages/ars-en-re/ou-dormir",
      "villages/ars-en-re/restaurants",
      "villages/ars-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "parent": "villages/ars-en-re"
  },
  {
    "key": "villages/ars-en-re/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/ars-en-re/ou-dormir",
      "en": "villages/ars-en-re/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Ars-en-Ré",
      "en": "Where to stay in Ars-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Ars-en-Ré",
      "en": "Where to stay in Ars-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Ars-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Ars-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à ars-en-ré",
      "en": "where to stay in ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "villages/ars-en-re/que-faire",
      "villages/ars-en-re/restaurants",
      "villages/ars-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Ars-en-Ré",
      "en": "Ars-en-Ré"
    },
    "parent": "villages/ars-en-re"
  },
  {
    "key": "villages/ars-en-re/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/ars-en-re/restaurants",
      "en": "villages/ars-en-re/restaurants"
    },
    "title": {
      "fr": "Où manger à Ars-en-Ré",
      "en": "Restaurants in Ars-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Ars-en-Ré",
      "en": "Restaurants in Ars-en-Ré"
    },
    "description": {
      "fr": "Où manger à Ars-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Ars-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à ars-en-ré",
      "en": "restaurants in ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "restaurants",
      "villages/ars-en-re/que-faire",
      "villages/ars-en-re/ou-dormir",
      "villages/ars-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "parent": "villages/ars-en-re"
  },
  {
    "key": "villages/ars-en-re/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/ars-en-re/plages",
      "en": "villages/ars-en-re/beaches"
    },
    "title": {
      "fr": "Les plages de Ars-en-Ré",
      "en": "The beaches of Ars-en-Ré"
    },
    "h1": {
      "fr": "Les plages de Ars-en-Ré",
      "en": "The beaches of Ars-en-Ré"
    },
    "description": {
      "fr": "Les plages de Ars-en-Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Ars-en-Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de ars-en-ré",
      "en": "the beaches of ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "plages",
      "ou-dormir/proche-plage",
      "villages/ars-en-re/que-faire",
      "villages/ars-en-re/ou-dormir",
      "villages/ars-en-re/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Ars-en-Ré",
      "en": "Ars-en-Ré"
    },
    "parent": "villages/ars-en-re"
  },
  {
    "key": "villages/saint-clement-des-baleines",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-clement-des-baleines",
      "en": "villages/saint-clement-des-baleines"
    },
    "title": {
      "fr": "Visiter Saint-Clément-des-Baleines",
      "en": "Visiting Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Visiter Saint-Clément-des-Baleines",
      "en": "Visiting Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Visiter Saint-Clément-des-Baleines : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Saint-Clément-des-Baleines: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter saint-clément-des-baleines",
      "en": "visiting saint-clément-des-baleines"
    },
    "related": [
      "ou-dormir/saint-clement-des-baleines",
      "villages/saint-clement-des-baleines/plages",
      "villages/saint-clement-des-baleines/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Clément-des-Baleines",
      "en": "Saint-Clément-des-Baleines"
    },
    "parent": "villages"
  },
  {
    "key": "villages/saint-clement-des-baleines/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/saint-clement-des-baleines/que-faire",
      "en": "villages/saint-clement-des-baleines/things-to-do"
    },
    "title": {
      "fr": "Que faire à Saint-Clément-des-Baleines",
      "en": "Things to do in Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Que faire à Saint-Clément-des-Baleines",
      "en": "Things to do in Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Que faire à Saint-Clément-des-Baleines : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Saint-Clément-des-Baleines: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à saint-clément-des-baleines",
      "en": "things to do in saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "ou-dormir",
      "que-faire",
      "villages/saint-clement-des-baleines/ou-dormir",
      "villages/saint-clement-des-baleines/restaurants",
      "villages/saint-clement-des-baleines/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "parent": "villages/saint-clement-des-baleines"
  },
  {
    "key": "villages/saint-clement-des-baleines/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-clement-des-baleines/ou-dormir",
      "en": "villages/saint-clement-des-baleines/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Saint-Clément-des-Baleines",
      "en": "Where to stay in Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Où dormir à Saint-Clément-des-Baleines",
      "en": "Where to stay in Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Où dormir à Saint-Clément-des-Baleines : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Saint-Clément-des-Baleines: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à saint-clément-des-baleines",
      "en": "where to stay in saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "villages/saint-clement-des-baleines/que-faire",
      "villages/saint-clement-des-baleines/restaurants",
      "villages/saint-clement-des-baleines/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Clément-des-Baleines",
      "en": "Saint-Clément-des-Baleines"
    },
    "parent": "villages/saint-clement-des-baleines"
  },
  {
    "key": "villages/saint-clement-des-baleines/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/saint-clement-des-baleines/restaurants",
      "en": "villages/saint-clement-des-baleines/restaurants"
    },
    "title": {
      "fr": "Où manger à Saint-Clément-des-Baleines",
      "en": "Restaurants in Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Où manger à Saint-Clément-des-Baleines",
      "en": "Restaurants in Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Où manger à Saint-Clément-des-Baleines : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Saint-Clément-des-Baleines: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à saint-clément-des-baleines",
      "en": "restaurants in saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "restaurants",
      "villages/saint-clement-des-baleines/que-faire",
      "villages/saint-clement-des-baleines/ou-dormir",
      "villages/saint-clement-des-baleines/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "parent": "villages/saint-clement-des-baleines"
  },
  {
    "key": "villages/saint-clement-des-baleines/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/saint-clement-des-baleines/plages",
      "en": "villages/saint-clement-des-baleines/beaches"
    },
    "title": {
      "fr": "Les plages de Saint-Clément-des-Baleines",
      "en": "The beaches of Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Les plages de Saint-Clément-des-Baleines",
      "en": "The beaches of Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Les plages de Saint-Clément-des-Baleines : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Saint-Clément-des-Baleines: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de saint-clément-des-baleines",
      "en": "the beaches of saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "plages",
      "ou-dormir/proche-plage",
      "villages/saint-clement-des-baleines/que-faire",
      "villages/saint-clement-des-baleines/ou-dormir",
      "villages/saint-clement-des-baleines/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Clément-des-Baleines",
      "en": "Saint-Clément-des-Baleines"
    },
    "parent": "villages/saint-clement-des-baleines"
  },
  {
    "key": "villages/les-portes-en-re",
    "silo": "villages",
    "template": "village",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/les-portes-en-re",
      "en": "villages/les-portes-en-re"
    },
    "title": {
      "fr": "Visiter Les Portes-en-Ré",
      "en": "Visiting Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Visiter Les Portes-en-Ré",
      "en": "Visiting Les Portes-en-Ré"
    },
    "description": {
      "fr": "Visiter Les Portes-en-Ré : que voir, que faire, où dormir et où manger. Plages, accès, parking et bons plans, le guide complet du village.",
      "en": "Visiting Les Portes-en-Ré: what to see and do, where to stay and eat. Beaches, access, parking and tips, the complete village guide."
    },
    "targetKeyword": {
      "fr": "visiter les portes-en-ré",
      "en": "visiting les portes-en-ré"
    },
    "related": [
      "ou-dormir/les-portes-en-re",
      "villages/les-portes-en-re/plages",
      "villages/les-portes-en-re/restaurants",
      "villages",
      "que-faire",
      "plages",
      "villages/rivedoux-plage",
      "villages/sainte-marie-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Les Portes-en-Ré",
      "en": "Les Portes-en-Ré"
    },
    "parent": "villages"
  },
  {
    "key": "villages/les-portes-en-re/que-faire",
    "silo": "villages",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/les-portes-en-re/que-faire",
      "en": "villages/les-portes-en-re/things-to-do"
    },
    "title": {
      "fr": "Que faire à Les Portes-en-Ré",
      "en": "Things to do in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Que faire à Les Portes-en-Ré",
      "en": "Things to do in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Que faire à Les Portes-en-Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do in Les Portes-en-Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire à les portes-en-ré",
      "en": "things to do in les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "ou-dormir",
      "que-faire",
      "villages/les-portes-en-re/ou-dormir",
      "villages/les-portes-en-re/restaurants",
      "villages/les-portes-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "parent": "villages/les-portes-en-re"
  },
  {
    "key": "villages/les-portes-en-re/ou-dormir",
    "silo": "villages",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "villages/les-portes-en-re/ou-dormir",
      "en": "villages/les-portes-en-re/where-to-stay"
    },
    "title": {
      "fr": "Où dormir à Les Portes-en-Ré",
      "en": "Where to stay in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Les Portes-en-Ré",
      "en": "Where to stay in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Les Portes-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Les Portes-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à les portes-en-ré",
      "en": "where to stay in les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "villages/les-portes-en-re/que-faire",
      "villages/les-portes-en-re/restaurants",
      "villages/les-portes-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Les Portes-en-Ré",
      "en": "Les Portes-en-Ré"
    },
    "parent": "villages/les-portes-en-re"
  },
  {
    "key": "villages/les-portes-en-re/restaurants",
    "silo": "villages",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "villages/les-portes-en-re/restaurants",
      "en": "villages/les-portes-en-re/restaurants"
    },
    "title": {
      "fr": "Où manger à Les Portes-en-Ré",
      "en": "Restaurants in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Les Portes-en-Ré",
      "en": "Restaurants in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Où manger à Les Portes-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Les Portes-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à les portes-en-ré",
      "en": "restaurants in les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "restaurants",
      "villages/les-portes-en-re/que-faire",
      "villages/les-portes-en-re/ou-dormir",
      "villages/les-portes-en-re/plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "parent": "villages/les-portes-en-re"
  },
  {
    "key": "villages/les-portes-en-re/plages",
    "silo": "villages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "villages/les-portes-en-re/plages",
      "en": "villages/les-portes-en-re/beaches"
    },
    "title": {
      "fr": "Les plages de Les Portes-en-Ré",
      "en": "The beaches of Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Les plages de Les Portes-en-Ré",
      "en": "The beaches of Les Portes-en-Ré"
    },
    "description": {
      "fr": "Les plages de Les Portes-en-Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "The beaches of Les Portes-en-Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les plages de les portes-en-ré",
      "en": "the beaches of les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "plages",
      "ou-dormir/proche-plage",
      "villages/les-portes-en-re/que-faire",
      "villages/les-portes-en-re/ou-dormir",
      "villages/les-portes-en-re/restaurants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Les Portes-en-Ré",
      "en": "Les Portes-en-Ré"
    },
    "parent": "villages/les-portes-en-re"
  },
  {
    "key": "plages/familiales",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "plages/familiales",
      "en": "beaches/family"
    },
    "title": {
      "fr": "Plages familiales de l'Île de Ré",
      "en": "Family beaches on Île de Ré"
    },
    "h1": {
      "fr": "Plages familiales de l'Île de Ré",
      "en": "Family beaches on Île de Ré"
    },
    "description": {
      "fr": "Plages familiales de l'Île de Ré : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Family beaches on Île de Ré: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages familiales de l'île de ré",
      "en": "family beaches on île de ré"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf",
      "plages/kitesurf-windsurf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "plages"
  },
  {
    "key": "plages/surveillees",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/surveillees",
      "en": "beaches/lifeguarded"
    },
    "title": {
      "fr": "Plages surveillées (juillet-août)",
      "en": "Lifeguarded beaches (July-August)"
    },
    "h1": {
      "fr": "Plages surveillées (juillet-août)",
      "en": "Lifeguarded beaches (July-August)"
    },
    "description": {
      "fr": "Plages surveillées (juillet-août) : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Lifeguarded beaches (July-August): location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages surveillées (juillet-août)",
      "en": "lifeguarded beaches (july-august)"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/sauvages",
      "plages/surf",
      "plages/kitesurf-windsurf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/sauvages",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/sauvages",
      "en": "beaches/wild"
    },
    "title": {
      "fr": "Plages sauvages et nature",
      "en": "Wild and natural beaches"
    },
    "h1": {
      "fr": "Plages sauvages et nature",
      "en": "Wild and natural beaches"
    },
    "description": {
      "fr": "Plages sauvages et nature : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Wild and natural beaches: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages sauvages et nature",
      "en": "wild and natural beaches"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/surf",
      "plages/kitesurf-windsurf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/surf",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/surf",
      "en": "beaches/surfing"
    },
    "title": {
      "fr": "Spots de surf",
      "en": "Surf spots"
    },
    "h1": {
      "fr": "Spots de surf",
      "en": "Surf spots"
    },
    "description": {
      "fr": "Spots de surf : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Surf spots: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "spots de surf",
      "en": "surf spots"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/kitesurf-windsurf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/kitesurf-windsurf",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/kitesurf-windsurf",
      "en": "beaches/kitesurf-windsurf"
    },
    "title": {
      "fr": "Spots de kite et windsurf",
      "en": "Kite and windsurf spots"
    },
    "h1": {
      "fr": "Spots de kite et windsurf",
      "en": "Kite and windsurf spots"
    },
    "description": {
      "fr": "Spots de kite et windsurf : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Kite and windsurf spots: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "spots de kite et windsurf",
      "en": "kite and windsurf spots"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/peche-a-pied",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/peche-a-pied",
      "en": "beaches/shellfish-foraging"
    },
    "title": {
      "fr": "Meilleures plages pour la pêche à pied",
      "en": "Best beaches for shellfish foraging"
    },
    "h1": {
      "fr": "Meilleures plages pour la pêche à pied",
      "en": "Best beaches for shellfish foraging"
    },
    "description": {
      "fr": "Meilleures plages pour la pêche à pied : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Best beaches for shellfish foraging: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "meilleures plages pour la pêche à pied",
      "en": "best beaches for shellfish foraging"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/chien-autorise",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/chien-autorise",
      "en": "beaches/dog-friendly"
    },
    "title": {
      "fr": "Plages où les chiens sont admis",
      "en": "Dog-friendly beaches"
    },
    "h1": {
      "fr": "Plages où les chiens sont admis",
      "en": "Dog-friendly beaches"
    },
    "description": {
      "fr": "Plages où les chiens sont admis : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Dog-friendly beaches: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages où les chiens sont admis",
      "en": "dog-friendly beaches"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/nudistes",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/nudistes",
      "en": "beaches/naturist"
    },
    "title": {
      "fr": "Plages naturistes",
      "en": "Naturist beaches"
    },
    "h1": {
      "fr": "Plages naturistes",
      "en": "Naturist beaches"
    },
    "description": {
      "fr": "Plages naturistes : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Naturist beaches: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages naturistes",
      "en": "naturist beaches"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/coucher-de-soleil",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/coucher-de-soleil",
      "en": "beaches/sunset"
    },
    "title": {
      "fr": "Meilleures plages au coucher du soleil",
      "en": "Best beaches for sunset"
    },
    "h1": {
      "fr": "Meilleures plages au coucher du soleil",
      "en": "Best beaches for sunset"
    },
    "description": {
      "fr": "Meilleures plages au coucher du soleil : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Best beaches for sunset: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "meilleures plages au coucher du soleil",
      "en": "best beaches for sunset"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/marees-horaires",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/marees-horaires",
      "en": "beaches/tides"
    },
    "title": {
      "fr": "Marées et estran : comprendre avant d'y aller",
      "en": "Tides and foreshore: what to know"
    },
    "h1": {
      "fr": "Marées et estran : comprendre avant d'y aller",
      "en": "Tides and foreshore: what to know"
    },
    "description": {
      "fr": "Marées et estran : comprendre avant d'y aller : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Tides and foreshore: what to know: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "marées et estran : comprendre avant d'y aller",
      "en": "tides and foreshore: what to know"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/accessibles-pmr",
    "silo": "plages",
    "template": "plage",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "plages/accessibles-pmr",
      "en": "beaches/accessible"
    },
    "title": {
      "fr": "Plages accessibles (tiralos / PMR)",
      "en": "Accessible beaches (beach wheelchairs)"
    },
    "h1": {
      "fr": "Plages accessibles (tiralos / PMR)",
      "en": "Accessible beaches (beach wheelchairs)"
    },
    "description": {
      "fr": "Plages accessibles (tiralos / PMR) : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Accessible beaches (beach wheelchairs): location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plages accessibles (tiralos / pmr)",
      "en": "accessible beaches (beach wheelchairs)"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "plages"
  },
  {
    "key": "plages/sablanceaux",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/sablanceaux",
      "en": "beaches/sablanceaux"
    },
    "title": {
      "fr": "Sablanceaux, Île de Ré : accès, baignade, parking",
      "en": "Sablanceaux beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Sablanceaux",
      "en": "Sablanceaux beach"
    },
    "description": {
      "fr": "Plage Sablanceaux : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Sablanceaux beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage sablanceaux",
      "en": "sablanceaux beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.152,
      "lng": -1.262,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Sablanceaux",
      "en": "Sablanceaux"
    },
    "parent": "plages"
  },
  {
    "key": "plages/rivedoux-nord",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/rivedoux-nord",
      "en": "beaches/rivedoux-nord"
    },
    "title": {
      "fr": "Rivedoux Nord, Île de Ré : accès, baignade, parking",
      "en": "Rivedoux Nord beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Rivedoux Nord",
      "en": "Rivedoux Nord beach"
    },
    "description": {
      "fr": "Plage Rivedoux Nord : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Rivedoux Nord beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage rivedoux nord",
      "en": "rivedoux nord beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.163,
      "lng": -1.282,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Rivedoux Nord",
      "en": "Rivedoux Nord"
    },
    "parent": "plages"
  },
  {
    "key": "plages/rivedoux-sud",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/rivedoux-sud",
      "en": "beaches/rivedoux-sud"
    },
    "title": {
      "fr": "Rivedoux Sud, Île de Ré : accès, baignade, parking",
      "en": "Rivedoux Sud beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Rivedoux Sud",
      "en": "Rivedoux Sud beach"
    },
    "description": {
      "fr": "Plage Rivedoux Sud : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Rivedoux Sud beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage rivedoux sud",
      "en": "rivedoux sud beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.154,
      "lng": -1.272,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Rivedoux Sud",
      "en": "Rivedoux Sud"
    },
    "parent": "plages"
  },
  {
    "key": "plages/les-grenettes",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/les-grenettes",
      "en": "beaches/les-grenettes"
    },
    "title": {
      "fr": "Les Grenettes, Île de Ré : accès, baignade, parking",
      "en": "Les Grenettes beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Les Grenettes",
      "en": "Les Grenettes beach"
    },
    "description": {
      "fr": "Plage Les Grenettes : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Les Grenettes beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage les grenettes",
      "en": "les grenettes beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.146,
      "lng": -1.345,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Les Grenettes",
      "en": "Les Grenettes"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-cible",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-cible",
      "en": "beaches/la-cible"
    },
    "title": {
      "fr": "La Cible, Île de Ré : accès, baignade, parking",
      "en": "La Cible beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Cible",
      "en": "La Cible beach"
    },
    "description": {
      "fr": "Plage La Cible : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Cible beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la cible",
      "en": "la cible beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.358,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Cible",
      "en": "La Cible"
    },
    "parent": "plages"
  },
  {
    "key": "plages/arnerault",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/arnerault",
      "en": "beaches/arnerault"
    },
    "title": {
      "fr": "L'Arnérault, Île de Ré : accès, baignade, parking",
      "en": "L'Arnérault beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage L'Arnérault",
      "en": "L'Arnérault beach"
    },
    "description": {
      "fr": "Plage L'Arnérault : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "L'Arnérault beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage l'arnérault",
      "en": "l'arnérault beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.186,
      "lng": -1.323,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "L'Arnérault",
      "en": "L'Arnérault"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-clouse",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-clouse",
      "en": "beaches/la-clouse"
    },
    "title": {
      "fr": "La Clouse, Île de Ré : accès, baignade, parking",
      "en": "La Clouse beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Clouse",
      "en": "La Clouse beach"
    },
    "description": {
      "fr": "Plage La Clouse : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Clouse beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la clouse",
      "en": "la clouse beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.149,
      "lng": -1.33,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Clouse",
      "en": "La Clouse"
    },
    "parent": "plages"
  },
  {
    "key": "plages/les-gollandieres",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/les-gollandieres",
      "en": "beaches/les-gollandieres"
    },
    "title": {
      "fr": "Les Gollandières, Île de Ré : accès, baignade, parking",
      "en": "Les Gollandières beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Les Gollandières",
      "en": "Les Gollandières beach"
    },
    "description": {
      "fr": "Plage Les Gollandières : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Les Gollandières beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage les gollandières",
      "en": "les gollandières beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.172,
      "lng": -1.395,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Les Gollandières",
      "en": "Les Gollandières"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-gros-jonc",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-gros-jonc",
      "en": "beaches/le-gros-jonc"
    },
    "title": {
      "fr": "Le Gros Jonc, Île de Ré : accès, baignade, parking",
      "en": "Le Gros Jonc beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Gros Jonc",
      "en": "Le Gros Jonc beach"
    },
    "description": {
      "fr": "Plage Le Gros Jonc : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Gros Jonc beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le gros jonc",
      "en": "le gros jonc beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.164,
      "lng": -1.39,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Gros Jonc",
      "en": "Le Gros Jonc"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-petit-sergent",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-petit-sergent",
      "en": "beaches/le-petit-sergent"
    },
    "title": {
      "fr": "Le Petit Sergent, Île de Ré : accès, baignade, parking",
      "en": "Le Petit Sergent beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Petit Sergent",
      "en": "Le Petit Sergent beach"
    },
    "description": {
      "fr": "Plage Le Petit Sergent : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Petit Sergent beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le petit sergent",
      "en": "le petit sergent beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.168,
      "lng": -1.38,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Petit Sergent",
      "en": "Le Petit Sergent"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-peu-ragot",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-peu-ragot",
      "en": "beaches/le-peu-ragot"
    },
    "title": {
      "fr": "Le Peu Ragot, Île de Ré : accès, baignade, parking",
      "en": "Le Peu Ragot beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Peu Ragot",
      "en": "Le Peu Ragot beach"
    },
    "description": {
      "fr": "Plage Le Peu Ragot : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Peu Ragot beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le peu ragot",
      "en": "le peu ragot beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.189,
      "lng": -1.446,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Peu Ragot",
      "en": "Le Peu Ragot"
    },
    "parent": "plages"
  },
  {
    "key": "plages/les-prises",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/les-prises",
      "en": "beaches/les-prises"
    },
    "title": {
      "fr": "Les Prises, Île de Ré : accès, baignade, parking",
      "en": "Les Prises beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Les Prises",
      "en": "Les Prises beach"
    },
    "description": {
      "fr": "Plage Les Prises : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Les Prises beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage les prises",
      "en": "les prises beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.185,
      "lng": -1.44,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Les Prises",
      "en": "Les Prises"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-pergola",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-pergola",
      "en": "beaches/la-pergola"
    },
    "title": {
      "fr": "La Pergola, Île de Ré : accès, baignade, parking",
      "en": "La Pergola beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Pergola",
      "en": "La Pergola beach"
    },
    "description": {
      "fr": "Plage La Pergola : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Pergola beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la pergola",
      "en": "la pergola beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.188,
      "lng": -1.45,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Pergola",
      "en": "La Pergola"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-benaie",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-benaie",
      "en": "beaches/la-benaie"
    },
    "title": {
      "fr": "La Bénaie, Île de Ré : accès, baignade, parking",
      "en": "La Bénaie beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Bénaie",
      "en": "La Bénaie beach"
    },
    "description": {
      "fr": "Plage La Bénaie : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Bénaie beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la bénaie",
      "en": "la bénaie beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.205,
      "lng": -1.46,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Bénaie",
      "en": "La Bénaie"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-goisil",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-goisil",
      "en": "beaches/le-goisil"
    },
    "title": {
      "fr": "Le Goisil, Île de Ré : accès, baignade, parking",
      "en": "Le Goisil beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Goisil",
      "en": "Le Goisil beach"
    },
    "description": {
      "fr": "Plage Le Goisil : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Goisil beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le goisil",
      "en": "le goisil beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.195,
      "lng": -1.42,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Goisil",
      "en": "Le Goisil"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-grouin",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-grouin",
      "en": "beaches/le-grouin"
    },
    "title": {
      "fr": "Le Grouin (Loix), Île de Ré : accès, baignade, parking",
      "en": "Le Grouin (Loix) beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Grouin (Loix)",
      "en": "Le Grouin (Loix) beach"
    },
    "description": {
      "fr": "Plage Le Grouin (Loix) : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Grouin (Loix) beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le grouin (loix)",
      "en": "le grouin (loix) beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.225,
      "lng": -1.43,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Grouin (Loix)",
      "en": "Le Grouin (Loix)"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-conche-des-baleines",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-conche-des-baleines",
      "en": "beaches/la-conche-des-baleines"
    },
    "title": {
      "fr": "La Conche des Baleines, Île de Ré : accès, baignade, parking",
      "en": "La Conche des Baleines beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Conche des Baleines",
      "en": "La Conche des Baleines beach"
    },
    "description": {
      "fr": "Plage La Conche des Baleines : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Conche des Baleines beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la conche des baleines",
      "en": "la conche des baleines beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.24,
      "lng": -1.56,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Conche des Baleines",
      "en": "La Conche des Baleines"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-lizay",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-lizay",
      "en": "beaches/le-lizay"
    },
    "title": {
      "fr": "Le Lizay, Île de Ré : accès, baignade, parking",
      "en": "Le Lizay beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Lizay",
      "en": "Le Lizay beach"
    },
    "description": {
      "fr": "Plage Le Lizay : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Lizay beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le lizay",
      "en": "le lizay beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.245,
      "lng": -1.57,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Lizay",
      "en": "Le Lizay"
    },
    "parent": "plages"
  },
  {
    "key": "plages/trousse-chemise",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/trousse-chemise",
      "en": "beaches/trousse-chemise"
    },
    "title": {
      "fr": "Trousse-Chemise, Île de Ré : accès, baignade, parking",
      "en": "Trousse-Chemise beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Trousse-Chemise",
      "en": "Trousse-Chemise beach"
    },
    "description": {
      "fr": "Plage Trousse-Chemise : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Trousse-Chemise beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage trousse-chemise",
      "en": "trousse-chemise beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.255,
      "lng": -1.6,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Trousse-Chemise",
      "en": "Trousse-Chemise"
    },
    "parent": "plages"
  },
  {
    "key": "plages/gros-jonc-les-portes",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/gros-jonc-les-portes",
      "en": "beaches/gros-jonc-les-portes"
    },
    "title": {
      "fr": "Gros Jonc (Les Portes), Île de Ré : accès, baignade, parking",
      "en": "Gros Jonc (Les Portes) beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Gros Jonc (Les Portes)",
      "en": "Gros Jonc (Les Portes) beach"
    },
    "description": {
      "fr": "Plage Gros Jonc (Les Portes) : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Gros Jonc (Les Portes) beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage gros jonc (les portes)",
      "en": "gros jonc (les portes) beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.25,
      "lng": -1.59,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Gros Jonc (Les Portes)",
      "en": "Gros Jonc (Les Portes)"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-patache",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-patache",
      "en": "beaches/la-patache"
    },
    "title": {
      "fr": "La Patache, Île de Ré : accès, baignade, parking",
      "en": "La Patache beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Patache",
      "en": "La Patache beach"
    },
    "description": {
      "fr": "Plage La Patache : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Patache beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la patache",
      "en": "la patache beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.25,
      "lng": -1.58,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Patache",
      "en": "La Patache"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-petit-bec",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-petit-bec",
      "en": "beaches/le-petit-bec"
    },
    "title": {
      "fr": "Le Petit Bec, Île de Ré : accès, baignade, parking",
      "en": "Le Petit Bec beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Petit Bec",
      "en": "Le Petit Bec beach"
    },
    "description": {
      "fr": "Plage Le Petit Bec : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Petit Bec beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le petit bec",
      "en": "le petit bec beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.248,
      "lng": -1.575,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Petit Bec",
      "en": "Le Petit Bec"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-marchais",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-marchais",
      "en": "beaches/le-marchais"
    },
    "title": {
      "fr": "Le Marchais, Île de Ré : accès, baignade, parking",
      "en": "Le Marchais beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Marchais",
      "en": "Le Marchais beach"
    },
    "description": {
      "fr": "Plage Le Marchais : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Marchais beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le marchais",
      "en": "le marchais beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.23,
      "lng": -1.54,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Marchais",
      "en": "Le Marchais"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-redoute",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-redoute",
      "en": "beaches/la-redoute"
    },
    "title": {
      "fr": "La Redoute, Île de Ré : accès, baignade, parking",
      "en": "La Redoute beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Redoute",
      "en": "La Redoute beach"
    },
    "description": {
      "fr": "Plage La Redoute : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Redoute beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la redoute",
      "en": "la redoute beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.215,
      "lng": -1.51,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Redoute",
      "en": "La Redoute"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-salee",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-salee",
      "en": "beaches/la-salee"
    },
    "title": {
      "fr": "La Salée, Île de Ré : accès, baignade, parking",
      "en": "La Salée beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Salée",
      "en": "La Salée beach"
    },
    "description": {
      "fr": "Plage La Salée : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Salée beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la salée",
      "en": "la salée beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.21,
      "lng": -1.49,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Salée",
      "en": "La Salée"
    },
    "parent": "plages"
  },
  {
    "key": "plages/la-loge",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/la-loge",
      "en": "beaches/la-loge"
    },
    "title": {
      "fr": "La Loge, Île de Ré : accès, baignade, parking",
      "en": "La Loge beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Loge",
      "en": "La Loge beach"
    },
    "description": {
      "fr": "Plage La Loge : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Loge beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la loge",
      "en": "la loge beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.2,
      "lng": -1.47,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Loge",
      "en": "La Loge"
    },
    "parent": "plages"
  },
  {
    "key": "plages/le-boutillon",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/le-boutillon",
      "en": "beaches/le-boutillon"
    },
    "title": {
      "fr": "Le Boutillon, Île de Ré : accès, baignade, parking",
      "en": "Le Boutillon beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage Le Boutillon",
      "en": "Le Boutillon beach"
    },
    "description": {
      "fr": "Plage Le Boutillon : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "Le Boutillon beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage le boutillon",
      "en": "le boutillon beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.205,
      "lng": -1.455,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "Le Boutillon",
      "en": "Le Boutillon"
    },
    "parent": "plages"
  },
  {
    "key": "plages/plage-du-phare",
    "silo": "plages",
    "template": "plage",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "plages/plage-du-phare",
      "en": "beaches/plage-du-phare"
    },
    "title": {
      "fr": "La Plage du Phare, Île de Ré : accès, baignade, parking",
      "en": "La Plage du Phare beach, Île de Ré: access, swimming, parking"
    },
    "h1": {
      "fr": "Plage La Plage du Phare",
      "en": "La Plage du Phare beach"
    },
    "description": {
      "fr": "Plage La Plage du Phare : situation, type de sable, baignade et sécurité, accès et parking, marées, et où dormir à proximité.",
      "en": "La Plage du Phare beach: location, sand type, swimming and safety, access and parking, tides, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "plage la plage du phare",
      "en": "la plage du phare beach"
    },
    "related": [
      "plages",
      "ou-dormir/proche-plage",
      "plages/familiales",
      "plages/surveillees",
      "plages/sauvages",
      "plages/surf"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.245,
      "lng": -1.565,
      "zoom": 15
    },
    "mapLabel": {
      "fr": "La Plage du Phare",
      "en": "La Plage du Phare"
    },
    "parent": "plages"
  },
  {
    "key": "ou-dormir/rivedoux-plage",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/rivedoux-plage",
      "en": "where-to-stay/rivedoux-plage"
    },
    "title": {
      "fr": "Où dormir à Rivedoux-Plage",
      "en": "Where to stay in Rivedoux-Plage"
    },
    "h1": {
      "fr": "Où dormir à Rivedoux-Plage",
      "en": "Where to stay in Rivedoux-Plage"
    },
    "description": {
      "fr": "Où dormir à Rivedoux-Plage : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Rivedoux-Plage: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à rivedoux-plage",
      "en": "where to stay in rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "ou-dormir",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re",
      "ou-dormir/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Rivedoux-Plage",
      "en": "Rivedoux-Plage"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/sainte-marie-de-re",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/sainte-marie-de-re",
      "en": "where-to-stay/sainte-marie-de-re"
    },
    "title": {
      "fr": "Où dormir à Sainte-Marie-de-Ré",
      "en": "Where to stay in Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Où dormir à Sainte-Marie-de-Ré",
      "en": "Where to stay in Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Où dormir à Sainte-Marie-de-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Sainte-Marie-de-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à sainte-marie-de-ré",
      "en": "where to stay in sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re",
      "ou-dormir/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Sainte-Marie-de-Ré",
      "en": "Sainte-Marie-de-Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/la-flotte",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/la-flotte",
      "en": "where-to-stay/la-flotte"
    },
    "title": {
      "fr": "Où dormir à La Flotte",
      "en": "Where to stay in La Flotte"
    },
    "h1": {
      "fr": "Où dormir à La Flotte",
      "en": "Where to stay in La Flotte"
    },
    "description": {
      "fr": "Où dormir à La Flotte : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in La Flotte: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à la flotte",
      "en": "where to stay in la flotte"
    },
    "related": [
      "villages/la-flotte",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/saint-martin-de-re",
      "ou-dormir/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Flotte",
      "en": "La Flotte"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/saint-martin-de-re",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/saint-martin-de-re",
      "en": "where-to-stay/saint-martin-de-re"
    },
    "title": {
      "fr": "Où dormir à Saint-Martin-de-Ré",
      "en": "Where to stay in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Où dormir à Saint-Martin-de-Ré",
      "en": "Where to stay in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Où dormir à Saint-Martin-de-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Saint-Martin-de-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à saint-martin-de-ré",
      "en": "where to stay in saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Martin-de-Ré",
      "en": "Saint-Martin-de-Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/le-bois-plage-en-re",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/le-bois-plage-en-re",
      "en": "where-to-stay/le-bois-plage-en-re"
    },
    "title": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré",
      "en": "Where to stay in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré",
      "en": "Where to stay in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Le Bois-Plage-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Le Bois-Plage-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à le bois-plage-en-ré",
      "en": "where to stay in le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Le Bois-Plage-en-Ré",
      "en": "Le Bois-Plage-en-Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/la-couarde-sur-mer",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/la-couarde-sur-mer",
      "en": "where-to-stay/la-couarde-sur-mer"
    },
    "title": {
      "fr": "Où dormir à La Couarde-sur-Mer",
      "en": "Where to stay in La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Où dormir à La Couarde-sur-Mer",
      "en": "Where to stay in La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Où dormir à La Couarde-sur-Mer : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in La Couarde-sur-Mer: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à la couarde-sur-mer",
      "en": "where to stay in la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Couarde-sur-Mer",
      "en": "La Couarde-sur-Mer"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/loix",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/loix",
      "en": "where-to-stay/loix"
    },
    "title": {
      "fr": "Où dormir à Loix",
      "en": "Where to stay in Loix"
    },
    "h1": {
      "fr": "Où dormir à Loix",
      "en": "Where to stay in Loix"
    },
    "description": {
      "fr": "Où dormir à Loix : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Loix: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à loix",
      "en": "where to stay in loix"
    },
    "related": [
      "villages/loix",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Loix",
      "en": "Loix"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/ars-en-re",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/ars-en-re",
      "en": "where-to-stay/ars-en-re"
    },
    "title": {
      "fr": "Où dormir à Ars-en-Ré",
      "en": "Where to stay in Ars-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Ars-en-Ré",
      "en": "Where to stay in Ars-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Ars-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Ars-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à ars-en-ré",
      "en": "where to stay in ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Ars-en-Ré",
      "en": "Ars-en-Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/saint-clement-des-baleines",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/saint-clement-des-baleines",
      "en": "where-to-stay/saint-clement-des-baleines"
    },
    "title": {
      "fr": "Où dormir à Saint-Clément-des-Baleines",
      "en": "Where to stay in Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Où dormir à Saint-Clément-des-Baleines",
      "en": "Where to stay in Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Où dormir à Saint-Clément-des-Baleines : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Saint-Clément-des-Baleines: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à saint-clément-des-baleines",
      "en": "where to stay in saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Clément-des-Baleines",
      "en": "Saint-Clément-des-Baleines"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/les-portes-en-re",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/les-portes-en-re",
      "en": "where-to-stay/les-portes-en-re"
    },
    "title": {
      "fr": "Où dormir à Les Portes-en-Ré",
      "en": "Where to stay in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Où dormir à Les Portes-en-Ré",
      "en": "Where to stay in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Où dormir à Les Portes-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in Les Portes-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir à les portes-en-ré",
      "en": "where to stay in les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Les Portes-en-Ré",
      "en": "Les Portes-en-Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels",
      "en": "where-to-stay/hotels"
    },
    "title": {
      "fr": "Meilleurs hôtels de l'île",
      "en": "The best hotels on the island"
    },
    "h1": {
      "fr": "Meilleurs hôtels de l'île",
      "en": "The best hotels on the island"
    },
    "description": {
      "fr": "Meilleurs hôtels de l'île : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "The best hotels on the island: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "meilleurs hôtels de l'île",
      "en": "the best hotels on the island"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-bord-de-mer",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-bord-de-mer",
      "en": "where-to-stay/seafront-hotels"
    },
    "title": {
      "fr": "Hôtels les pieds dans l'eau",
      "en": "Seafront hotels"
    },
    "h1": {
      "fr": "Hôtels les pieds dans l'eau",
      "en": "Seafront hotels"
    },
    "description": {
      "fr": "Hôtels les pieds dans l'eau : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Seafront hotels: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels les pieds dans l'eau",
      "en": "seafront hotels"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-avec-piscine",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-avec-piscine",
      "en": "where-to-stay/hotels-with-pool"
    },
    "title": {
      "fr": "Hôtels avec piscine",
      "en": "Hotels with a pool"
    },
    "h1": {
      "fr": "Hôtels avec piscine",
      "en": "Hotels with a pool"
    },
    "description": {
      "fr": "Hôtels avec piscine : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Hotels with a pool: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels avec piscine",
      "en": "hotels with a pool"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-spa",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-spa",
      "en": "where-to-stay/spa-hotels"
    },
    "title": {
      "fr": "Hôtels avec spa",
      "en": "Spa hotels"
    },
    "h1": {
      "fr": "Hôtels avec spa",
      "en": "Spa hotels"
    },
    "description": {
      "fr": "Hôtels avec spa : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Spa hotels: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels avec spa",
      "en": "spa hotels"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-de-charme",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-de-charme",
      "en": "where-to-stay/boutique-hotels"
    },
    "title": {
      "fr": "Hôtels de charme",
      "en": "Boutique hotels"
    },
    "h1": {
      "fr": "Hôtels de charme",
      "en": "Boutique hotels"
    },
    "description": {
      "fr": "Hôtels de charme : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Boutique hotels: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels de charme",
      "en": "boutique hotels"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-luxe",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-luxe",
      "en": "where-to-stay/luxury-hotels"
    },
    "title": {
      "fr": "Hôtels haut de gamme et 5 étoiles",
      "en": "Luxury and 5-star hotels"
    },
    "h1": {
      "fr": "Hôtels haut de gamme et 5 étoiles",
      "en": "Luxury and 5-star hotels"
    },
    "description": {
      "fr": "Hôtels haut de gamme et 5 étoiles : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Luxury and 5-star hotels: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels haut de gamme et 5 étoiles",
      "en": "luxury and 5-star hotels"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-pas-cher",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-pas-cher",
      "en": "where-to-stay/cheap-hotels"
    },
    "title": {
      "fr": "Dormir pas cher sur l'Île de Ré",
      "en": "Cheap places to stay"
    },
    "h1": {
      "fr": "Dormir pas cher sur l'Île de Ré",
      "en": "Cheap places to stay"
    },
    "description": {
      "fr": "Dormir pas cher sur l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Cheap places to stay: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "dormir pas cher sur l'île de ré",
      "en": "cheap places to stay"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/hotels-romantiques",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/hotels-romantiques",
      "en": "where-to-stay/romantic-hotels"
    },
    "title": {
      "fr": "Hôtels romantiques",
      "en": "Romantic hotels"
    },
    "h1": {
      "fr": "Hôtels romantiques",
      "en": "Romantic hotels"
    },
    "description": {
      "fr": "Hôtels romantiques : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Romantic hotels: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hôtels romantiques",
      "en": "romantic hotels"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/maisons-dhotes",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/maisons-dhotes",
      "en": "where-to-stay/guesthouses"
    },
    "title": {
      "fr": "Chambres et maisons d'hôtes",
      "en": "Bed & breakfasts and guesthouses"
    },
    "h1": {
      "fr": "Chambres et maisons d'hôtes",
      "en": "Bed & breakfasts and guesthouses"
    },
    "description": {
      "fr": "Chambres et maisons d'hôtes : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Bed & breakfasts and guesthouses: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "chambres et maisons d'hôtes",
      "en": "bed & breakfasts and guesthouses"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/locations-vacances",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/locations-vacances",
      "en": "where-to-stay/holiday-rentals"
    },
    "title": {
      "fr": "Locations et villas",
      "en": "Holiday rentals and villas"
    },
    "h1": {
      "fr": "Locations et villas",
      "en": "Holiday rentals and villas"
    },
    "description": {
      "fr": "Locations et villas : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Holiday rentals and villas: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "locations et villas",
      "en": "holiday rentals and villas"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/campings",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/campings",
      "en": "where-to-stay/campsites"
    },
    "title": {
      "fr": "Campings de l'Île de Ré",
      "en": "Campsites on Île de Ré"
    },
    "h1": {
      "fr": "Campings de l'Île de Ré",
      "en": "Campsites on Île de Ré"
    },
    "description": {
      "fr": "Campings de l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Campsites on Île de Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "campings de l'île de ré",
      "en": "campsites on île de ré"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/glamping",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/glamping",
      "en": "where-to-stay/glamping"
    },
    "title": {
      "fr": "Glamping et hébergements insolites",
      "en": "Glamping and unusual stays"
    },
    "h1": {
      "fr": "Glamping et hébergements insolites",
      "en": "Glamping and unusual stays"
    },
    "description": {
      "fr": "Glamping et hébergements insolites : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Glamping and unusual stays: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "glamping et hébergements insolites",
      "en": "glamping and unusual stays"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/avec-piscine-interieure",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/avec-piscine-interieure",
      "en": "where-to-stay/indoor-pool"
    },
    "title": {
      "fr": "Hébergements avec piscine chauffée ou couverte",
      "en": "Stays with a heated or indoor pool"
    },
    "h1": {
      "fr": "Hébergements avec piscine chauffée ou couverte",
      "en": "Stays with a heated or indoor pool"
    },
    "description": {
      "fr": "Hébergements avec piscine chauffée ou couverte : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Stays with a heated or indoor pool: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hébergements avec piscine chauffée ou couverte",
      "en": "stays with a heated or indoor pool"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/en-famille",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/en-famille",
      "en": "where-to-stay/family-stays"
    },
    "title": {
      "fr": "Hébergements en famille",
      "en": "Family-friendly stays"
    },
    "h1": {
      "fr": "Hébergements en famille",
      "en": "Family-friendly stays"
    },
    "description": {
      "fr": "Hébergements en famille : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Family-friendly stays: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hébergements en famille",
      "en": "family-friendly stays"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/animaux-acceptes",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/animaux-acceptes",
      "en": "where-to-stay/pet-friendly"
    },
    "title": {
      "fr": "Hébergements qui acceptent les chiens",
      "en": "Pet-friendly stays"
    },
    "h1": {
      "fr": "Hébergements qui acceptent les chiens",
      "en": "Pet-friendly stays"
    },
    "description": {
      "fr": "Hébergements qui acceptent les chiens : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Pet-friendly stays: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hébergements qui acceptent les chiens",
      "en": "pet-friendly stays"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/proche-plage",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/proche-plage",
      "en": "where-to-stay/near-the-beach"
    },
    "title": {
      "fr": "Dormir au plus près de la plage",
      "en": "Stay closest to the beach"
    },
    "h1": {
      "fr": "Dormir au plus près de la plage",
      "en": "Stay closest to the beach"
    },
    "description": {
      "fr": "Dormir au plus près de la plage : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Stay closest to the beach: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "dormir au plus près de la plage",
      "en": "stay closest to the beach"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/proche-port",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/proche-port",
      "en": "where-to-stay/near-the-harbour"
    },
    "title": {
      "fr": "Dormir près d'un port",
      "en": "Stay near a harbour"
    },
    "h1": {
      "fr": "Dormir près d'un port",
      "en": "Stay near a harbour"
    },
    "description": {
      "fr": "Dormir près d'un port : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Stay near a harbour: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "dormir près d'un port",
      "en": "stay near a harbour"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/sans-voiture",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/sans-voiture",
      "en": "where-to-stay/car-free"
    },
    "title": {
      "fr": "Dormir sans voiture (vélo et bus)",
      "en": "Car-free stays (bike & bus)"
    },
    "h1": {
      "fr": "Dormir sans voiture (vélo et bus)",
      "en": "Car-free stays (bike & bus)"
    },
    "description": {
      "fr": "Dormir sans voiture (vélo et bus) : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Car-free stays (bike & bus): our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "dormir sans voiture (vélo et bus)",
      "en": "car-free stays (bike & bus)"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/comparatifs/quel-village-pour-dormir",
    "silo": "ou-dormir",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/comparatifs/quel-village-pour-dormir",
      "en": "where-to-stay/comparisons/which-village-to-stay-in"
    },
    "title": {
      "fr": "Quel village choisir pour dormir",
      "en": "Which village to stay in"
    },
    "h1": {
      "fr": "Quel village choisir pour dormir",
      "en": "Which village to stay in"
    },
    "description": {
      "fr": "Quel village choisir pour dormir : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Which village to stay in: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "quel village choisir pour dormir",
      "en": "which village to stay in"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/comparatifs/premiere-fois",
    "silo": "ou-dormir",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/comparatifs/premiere-fois",
      "en": "where-to-stay/comparisons/first-visit"
    },
    "title": {
      "fr": "Où loger pour une première visite",
      "en": "Where to stay on a first visit"
    },
    "h1": {
      "fr": "Où loger pour une première visite",
      "en": "Where to stay on a first visit"
    },
    "description": {
      "fr": "Où loger pour une première visite : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Where to stay on a first visit: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "où loger pour une première visite",
      "en": "where to stay on a first visit"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/comparatifs/saint-martin-ou-la-flotte",
    "silo": "ou-dormir",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/comparatifs/saint-martin-ou-la-flotte",
      "en": "where-to-stay/comparisons/saint-martin-or-la-flotte"
    },
    "title": {
      "fr": "Saint-Martin ou La Flotte ?",
      "en": "Saint-Martin or La Flotte?"
    },
    "h1": {
      "fr": "Saint-Martin ou La Flotte ?",
      "en": "Saint-Martin or La Flotte?"
    },
    "description": {
      "fr": "Saint-Martin ou La Flotte ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Saint-Martin or La Flotte?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "saint-martin ou la flotte ?",
      "en": "saint-martin or la flotte?"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir/comparatifs/nord-ou-sud",
    "silo": "ou-dormir",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/comparatifs/nord-ou-sud",
      "en": "where-to-stay/comparisons/north-or-south"
    },
    "title": {
      "fr": "Nord ou sud de l'île ?",
      "en": "North or south of the island?"
    },
    "h1": {
      "fr": "Nord ou sud de l'île ?",
      "en": "North or south of the island?"
    },
    "description": {
      "fr": "Nord ou sud de l'île ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "North or south of the island?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "nord ou sud de l'île ?",
      "en": "north or south of the island?"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir"
  },
  {
    "key": "ou-dormir-mariage/salles-reception",
    "silo": "ou-dormir-mariage",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/salles-reception",
      "en": "weddings/reception-venues"
    },
    "title": {
      "fr": "Salles et domaines de réception",
      "en": "Reception venues and estates"
    },
    "h1": {
      "fr": "Salles et domaines de réception",
      "en": "Reception venues and estates"
    },
    "description": {
      "fr": "Salles et domaines de réception : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Reception venues and estates: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "salles et domaines de réception",
      "en": "reception venues and estates"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime",
      "ou-dormir-mariage/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/hotels-pour-invites",
    "silo": "ou-dormir-mariage",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/hotels-pour-invites",
      "en": "weddings/hotels-for-guests"
    },
    "title": {
      "fr": "Hôtels pour héberger ses invités",
      "en": "Hotels to house your guests"
    },
    "h1": {
      "fr": "Hôtels pour héberger ses invités",
      "en": "Hotels to house your guests"
    },
    "description": {
      "fr": "Hôtels pour héberger ses invités : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Hotels to house your guests: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "hôtels pour héberger ses invités",
      "en": "hotels to house your guests"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime",
      "ou-dormir-mariage/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/lieux-avec-hebergement",
    "silo": "ou-dormir-mariage",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/lieux-avec-hebergement",
      "en": "weddings/venues-with-accommodation"
    },
    "title": {
      "fr": "Lieux de mariage avec hébergement sur place",
      "en": "Wedding venues with on-site accommodation"
    },
    "h1": {
      "fr": "Lieux de mariage avec hébergement sur place",
      "en": "Wedding venues with on-site accommodation"
    },
    "description": {
      "fr": "Lieux de mariage avec hébergement sur place : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Wedding venues with on-site accommodation: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "lieux de mariage avec hébergement sur place",
      "en": "wedding venues with on-site accommodation"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/petit-mariage-intime",
      "ou-dormir-mariage/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/petit-mariage-intime",
    "silo": "ou-dormir-mariage",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/petit-mariage-intime",
      "en": "weddings/intimate-weddings"
    },
    "title": {
      "fr": "Se marier en petit comité",
      "en": "Small intimate weddings"
    },
    "h1": {
      "fr": "Se marier en petit comité",
      "en": "Small intimate weddings"
    },
    "description": {
      "fr": "Se marier en petit comité : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Small intimate weddings: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "se marier en petit comité",
      "en": "small intimate weddings"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/saint-martin-de-re",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/saint-martin-de-re",
      "en": "weddings/saint-martin-de-re"
    },
    "title": {
      "fr": "Se marier à Saint-Martin-de-Ré",
      "en": "Getting married in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Se marier à Saint-Martin-de-Ré",
      "en": "Getting married in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Se marier à Saint-Martin-de-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in Saint-Martin-de-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à saint-martin-de-ré",
      "en": "getting married in saint-martin-de-ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Saint-Martin-de-Ré",
      "en": "Saint-Martin-de-Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/la-flotte",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/la-flotte",
      "en": "weddings/la-flotte"
    },
    "title": {
      "fr": "Se marier à La Flotte",
      "en": "Getting married in La Flotte"
    },
    "h1": {
      "fr": "Se marier à La Flotte",
      "en": "Getting married in La Flotte"
    },
    "description": {
      "fr": "Se marier à La Flotte : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in La Flotte: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à la flotte",
      "en": "getting married in la flotte"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "La Flotte",
      "en": "La Flotte"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/ars-en-re",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/ars-en-re",
      "en": "weddings/ars-en-re"
    },
    "title": {
      "fr": "Se marier à Ars-en-Ré",
      "en": "Getting married in Ars-en-Ré"
    },
    "h1": {
      "fr": "Se marier à Ars-en-Ré",
      "en": "Getting married in Ars-en-Ré"
    },
    "description": {
      "fr": "Se marier à Ars-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in Ars-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à ars-en-ré",
      "en": "getting married in ars-en-ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Ars-en-Ré",
      "en": "Ars-en-Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/le-bois-plage-en-re",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/le-bois-plage-en-re",
      "en": "weddings/le-bois-plage-en-re"
    },
    "title": {
      "fr": "Se marier à Le Bois-Plage-en-Ré",
      "en": "Getting married in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Se marier à Le Bois-Plage-en-Ré",
      "en": "Getting married in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Se marier à Le Bois-Plage-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in Le Bois-Plage-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à le bois-plage-en-ré",
      "en": "getting married in le bois-plage-en-ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Le Bois-Plage-en-Ré",
      "en": "Le Bois-Plage-en-Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/loix",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/loix",
      "en": "weddings/loix"
    },
    "title": {
      "fr": "Se marier à Loix",
      "en": "Getting married in Loix"
    },
    "h1": {
      "fr": "Se marier à Loix",
      "en": "Getting married in Loix"
    },
    "description": {
      "fr": "Se marier à Loix : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in Loix: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à loix",
      "en": "getting married in loix"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Loix",
      "en": "Loix"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir-mariage/les-portes-en-re",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir-mariage/les-portes-en-re",
      "en": "weddings/les-portes-en-re"
    },
    "title": {
      "fr": "Se marier à Les Portes-en-Ré",
      "en": "Getting married in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Se marier à Les Portes-en-Ré",
      "en": "Getting married in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Se marier à Les Portes-en-Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Getting married in Les Portes-en-Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "se marier à les portes-en-ré",
      "en": "getting married in les portes-en-ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "Les Portes-en-Ré",
      "en": "Les Portes-en-Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/lune-de-miel",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/lune-de-miel",
      "en": "where-to-stay/honeymoon"
    },
    "title": {
      "fr": "Lune de miel sur l'Île de Ré",
      "en": "Honeymoon on Île de Ré"
    },
    "h1": {
      "fr": "Lune de miel sur l'Île de Ré",
      "en": "Honeymoon on Île de Ré"
    },
    "description": {
      "fr": "Lune de miel sur l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Honeymoon on Île de Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "lune de miel sur l'île de ré",
      "en": "honeymoon on île de ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/week-end-amoureux",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/week-end-amoureux",
      "en": "where-to-stay/romantic-weekend"
    },
    "title": {
      "fr": "Week-end en amoureux",
      "en": "Romantic weekend"
    },
    "h1": {
      "fr": "Week-end en amoureux",
      "en": "Romantic weekend"
    },
    "description": {
      "fr": "Week-end en amoureux : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Romantic weekend: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "week-end en amoureux",
      "en": "romantic weekend"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/evjf",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/evjf",
      "en": "where-to-stay/hen-party"
    },
    "title": {
      "fr": "EVJF sur l'Île de Ré",
      "en": "Hen party on Île de Ré"
    },
    "h1": {
      "fr": "EVJF sur l'Île de Ré",
      "en": "Hen party on Île de Ré"
    },
    "description": {
      "fr": "EVJF sur l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Hen party on Île de Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "evjf sur l'île de ré",
      "en": "hen party on île de ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/evg",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/evg",
      "en": "where-to-stay/stag-party"
    },
    "title": {
      "fr": "EVG sur l'Île de Ré",
      "en": "Stag party on Île de Ré"
    },
    "h1": {
      "fr": "EVG sur l'Île de Ré",
      "en": "Stag party on Île de Ré"
    },
    "description": {
      "fr": "EVG sur l'Île de Ré : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Stag party on Île de Ré: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "evg sur l'île de ré",
      "en": "stag party on île de ré"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/anniversaire",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/anniversaire",
      "en": "where-to-stay/birthday"
    },
    "title": {
      "fr": "Fêter un anniversaire",
      "en": "Celebrate a birthday"
    },
    "h1": {
      "fr": "Fêter un anniversaire",
      "en": "Celebrate a birthday"
    },
    "description": {
      "fr": "Fêter un anniversaire : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Celebrate a birthday: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "fêter un anniversaire",
      "en": "celebrate a birthday"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/seminaire-entreprise",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/seminaire-entreprise",
      "en": "where-to-stay/corporate-retreat"
    },
    "title": {
      "fr": "Séminaire et team building",
      "en": "Corporate retreats & team building"
    },
    "h1": {
      "fr": "Séminaire et team building",
      "en": "Corporate retreats & team building"
    },
    "description": {
      "fr": "Séminaire et team building : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Corporate retreats & team building: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "séminaire et team building",
      "en": "corporate retreats & team building"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/grand-groupe",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/grand-groupe",
      "en": "where-to-stay/large-group"
    },
    "title": {
      "fr": "Hébergement pour grand groupe",
      "en": "Stays for a large group"
    },
    "h1": {
      "fr": "Hébergement pour grand groupe",
      "en": "Stays for a large group"
    },
    "description": {
      "fr": "Hébergement pour grand groupe : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Stays for a large group: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "hébergement pour grand groupe",
      "en": "stays for a large group"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "ou-dormir/reunion-famille",
    "silo": "ou-dormir-mariage",
    "template": "ou-dormir",
    "intent": "transactionnel",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/reunion-famille",
      "en": "where-to-stay/family-reunion"
    },
    "title": {
      "fr": "Réunion de famille et grande tablée",
      "en": "Family reunions"
    },
    "h1": {
      "fr": "Réunion de famille et grande tablée",
      "en": "Family reunions"
    },
    "description": {
      "fr": "Réunion de famille et grande tablée : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Family reunions: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "réunion de famille et grande tablée",
      "en": "family reunions"
    },
    "related": [
      "ou-dormir-mariage",
      "ou-dormir-mariage/salles-reception",
      "ou-dormir-mariage/hotels-pour-invites",
      "ou-dormir-mariage/lieux-avec-hebergement",
      "ou-dormir-mariage/petit-mariage-intime"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir-mariage"
  },
  {
    "key": "que-faire/incontournables",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/incontournables",
      "en": "things-to-do/highlights"
    },
    "title": {
      "fr": "Les incontournables de l'Île de Ré",
      "en": "Île de Ré highlights"
    },
    "h1": {
      "fr": "Les incontournables de l'Île de Ré",
      "en": "Île de Ré highlights"
    },
    "description": {
      "fr": "Les incontournables de l'Île de Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Île de Ré highlights: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les incontournables de l'île de ré",
      "en": "île de ré highlights"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines",
      "que-faire/marais-salants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/velo",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/velo",
      "en": "things-to-do/cycling"
    },
    "title": {
      "fr": "Faire du vélo sur l'Île de Ré",
      "en": "Cycling on Île de Ré"
    },
    "h1": {
      "fr": "Faire du vélo sur l'Île de Ré",
      "en": "Cycling on Île de Ré"
    },
    "description": {
      "fr": "Faire du vélo sur l'Île de Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Cycling on Île de Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "faire du vélo sur l'île de ré",
      "en": "cycling on île de ré"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines",
      "que-faire/marais-salants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/location-velo",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/location-velo",
      "en": "things-to-do/bike-rental"
    },
    "title": {
      "fr": "Où louer un vélo",
      "en": "Where to rent a bike"
    },
    "h1": {
      "fr": "Où louer un vélo",
      "en": "Where to rent a bike"
    },
    "description": {
      "fr": "Où louer un vélo : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Where to rent a bike: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "où louer un vélo",
      "en": "where to rent a bike"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/phare-des-baleines",
      "que-faire/marais-salants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/phare-des-baleines",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/phare-des-baleines",
      "en": "things-to-do/baleines-lighthouse"
    },
    "title": {
      "fr": "Visiter le Phare des Baleines",
      "en": "Visiting the Phare des Baleines"
    },
    "h1": {
      "fr": "Visiter le Phare des Baleines",
      "en": "Visiting the Phare des Baleines"
    },
    "description": {
      "fr": "Visiter le Phare des Baleines : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Visiting the Phare des Baleines: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "visiter le phare des baleines",
      "en": "visiting the phare des baleines"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/marais-salants"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.245,
      "lng": -1.567,
      "zoom": 14
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/marais-salants",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/marais-salants",
      "en": "things-to-do/salt-marshes"
    },
    "title": {
      "fr": "Découvrir les marais salants",
      "en": "Discover the salt marshes"
    },
    "h1": {
      "fr": "Découvrir les marais salants",
      "en": "Discover the salt marshes"
    },
    "description": {
      "fr": "Découvrir les marais salants : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Discover the salt marshes: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "découvrir les marais salants",
      "en": "discover the salt marshes"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.22,
      "lng": -1.46,
      "zoom": 13
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/ecomusee-marais-salant",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/ecomusee-marais-salant",
      "en": "things-to-do/salt-marsh-ecomuseum"
    },
    "title": {
      "fr": "Écomusée du Marais Salant (Loix)",
      "en": "Salt Marsh Ecomuseum (Loix)"
    },
    "h1": {
      "fr": "Écomusée du Marais Salant (Loix)",
      "en": "Salt Marsh Ecomuseum (Loix)"
    },
    "description": {
      "fr": "Écomusée du Marais Salant (Loix) : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Salt Marsh Ecomuseum (Loix): practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "écomusée du marais salant (loix)",
      "en": "salt marsh ecomuseum (loix)"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/reserve-lilleau-des-niges",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/reserve-lilleau-des-niges",
      "en": "things-to-do/lilleau-des-niges-reserve"
    },
    "title": {
      "fr": "Réserve naturelle de Lilleau des Niges",
      "en": "Lilleau des Niges nature reserve"
    },
    "h1": {
      "fr": "Réserve naturelle de Lilleau des Niges",
      "en": "Lilleau des Niges nature reserve"
    },
    "description": {
      "fr": "Réserve naturelle de Lilleau des Niges : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Lilleau des Niges nature reserve: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "réserve naturelle de lilleau des niges",
      "en": "lilleau des niges nature reserve"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.248,
      "lng": -1.578,
      "zoom": 14
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/fortifications-vauban",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/fortifications-vauban",
      "en": "things-to-do/vauban-fortifications"
    },
    "title": {
      "fr": "Les fortifications de Vauban (Saint-Martin)",
      "en": "Vauban's fortifications (Saint-Martin)"
    },
    "h1": {
      "fr": "Les fortifications de Vauban (Saint-Martin)",
      "en": "Vauban's fortifications (Saint-Martin)"
    },
    "description": {
      "fr": "Les fortifications de Vauban (Saint-Martin) : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Vauban's fortifications (Saint-Martin): practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les fortifications de vauban (saint-martin)",
      "en": "vauban's fortifications (saint-martin)"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/abbaye-des-chateliers",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/abbaye-des-chateliers",
      "en": "things-to-do/chateliers-abbey"
    },
    "title": {
      "fr": "L'abbaye des Châteliers",
      "en": "The Châteliers Abbey"
    },
    "h1": {
      "fr": "L'abbaye des Châteliers",
      "en": "The Châteliers Abbey"
    },
    "description": {
      "fr": "L'abbaye des Châteliers : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "The Châteliers Abbey: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "l'abbaye des châteliers",
      "en": "the châteliers abbey"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.182,
      "lng": -1.32,
      "zoom": 14
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/fort-de-la-pree",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/fort-de-la-pree",
      "en": "things-to-do/fort-de-la-pree"
    },
    "title": {
      "fr": "Le Fort de La Prée",
      "en": "Fort de La Prée"
    },
    "h1": {
      "fr": "Le Fort de La Prée",
      "en": "Fort de La Prée"
    },
    "description": {
      "fr": "Le Fort de La Prée : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Fort de La Prée: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "le fort de la prée",
      "en": "fort de la prée"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.177,
      "lng": -1.315,
      "zoom": 14
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/musee-ernest-cognacq",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/musee-ernest-cognacq",
      "en": "things-to-do/ernest-cognacq-museum"
    },
    "title": {
      "fr": "Le musée Ernest Cognacq",
      "en": "The Ernest Cognacq Museum"
    },
    "h1": {
      "fr": "Le musée Ernest Cognacq",
      "en": "The Ernest Cognacq Museum"
    },
    "description": {
      "fr": "Le musée Ernest Cognacq : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "The Ernest Cognacq Museum: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "le musée ernest cognacq",
      "en": "the ernest cognacq museum"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.202,
      "lng": -1.366,
      "zoom": 15
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/degustation-huitres",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/degustation-huitres",
      "en": "things-to-do/oyster-tasting"
    },
    "title": {
      "fr": "Déguster des huîtres (cabanes)",
      "en": "Oyster tasting at the shacks"
    },
    "h1": {
      "fr": "Déguster des huîtres (cabanes)",
      "en": "Oyster tasting at the shacks"
    },
    "description": {
      "fr": "Déguster des huîtres (cabanes) : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Oyster tasting at the shacks: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "déguster des huîtres (cabanes)",
      "en": "oyster tasting at the shacks"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 13
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/degustation-vin",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/degustation-vin",
      "en": "things-to-do/wine-tasting"
    },
    "title": {
      "fr": "Vins et Pineau de l'île",
      "en": "Island wines and Pineau"
    },
    "h1": {
      "fr": "Vins et Pineau de l'île",
      "en": "Island wines and Pineau"
    },
    "description": {
      "fr": "Vins et Pineau de l'île : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Island wines and Pineau: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "vins et pineau de l'île",
      "en": "island wines and pineau"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/marches",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/marches",
      "en": "things-to-do/markets"
    },
    "title": {
      "fr": "Les marchés de l'Île de Ré",
      "en": "The markets of Île de Ré"
    },
    "h1": {
      "fr": "Les marchés de l'Île de Ré",
      "en": "The markets of Île de Ré"
    },
    "description": {
      "fr": "Les marchés de l'Île de Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "The markets of Île de Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "les marchés de l'île de ré",
      "en": "the markets of île de ré"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/surf",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/surf",
      "en": "things-to-do/surfing"
    },
    "title": {
      "fr": "Surf : spots et écoles",
      "en": "Surfing: spots and schools"
    },
    "h1": {
      "fr": "Surf : spots et écoles",
      "en": "Surfing: spots and schools"
    },
    "description": {
      "fr": "Surf : spots et écoles : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Surfing: spots and schools: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "surf : spots et écoles",
      "en": "surfing: spots and schools"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.146,
      "lng": -1.345,
      "zoom": 13
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/kitesurf",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/kitesurf",
      "en": "things-to-do/kitesurfing"
    },
    "title": {
      "fr": "Kitesurf sur l'Île de Ré",
      "en": "Kitesurfing on Île de Ré"
    },
    "h1": {
      "fr": "Kitesurf sur l'Île de Ré",
      "en": "Kitesurfing on Île de Ré"
    },
    "description": {
      "fr": "Kitesurf sur l'Île de Ré : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Kitesurfing on Île de Ré: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "kitesurf sur l'île de ré",
      "en": "kitesurfing on île de ré"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/paddle",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/paddle",
      "en": "things-to-do/paddleboarding"
    },
    "title": {
      "fr": "Stand up paddle",
      "en": "Stand-up paddleboarding"
    },
    "h1": {
      "fr": "Stand up paddle",
      "en": "Stand-up paddleboarding"
    },
    "description": {
      "fr": "Stand up paddle : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Stand-up paddleboarding: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "stand up paddle",
      "en": "stand-up paddleboarding"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/voile-catamaran",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/voile-catamaran",
      "en": "things-to-do/sailing"
    },
    "title": {
      "fr": "Voile et catamaran",
      "en": "Sailing and catamaran"
    },
    "h1": {
      "fr": "Voile et catamaran",
      "en": "Sailing and catamaran"
    },
    "description": {
      "fr": "Voile et catamaran : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Sailing and catamaran: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "voile et catamaran",
      "en": "sailing and catamaran"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/kayak",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/kayak",
      "en": "things-to-do/kayaking"
    },
    "title": {
      "fr": "Kayak de mer",
      "en": "Sea kayaking"
    },
    "h1": {
      "fr": "Kayak de mer",
      "en": "Sea kayaking"
    },
    "description": {
      "fr": "Kayak de mer : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Sea kayaking: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "kayak de mer",
      "en": "sea kayaking"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/peche-a-pied",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/peche-a-pied",
      "en": "things-to-do/shellfish-foraging"
    },
    "title": {
      "fr": "Pêche à pied (règles et spots)",
      "en": "Shellfish foraging (rules & spots)"
    },
    "h1": {
      "fr": "Pêche à pied (règles et spots)",
      "en": "Shellfish foraging (rules & spots)"
    },
    "description": {
      "fr": "Pêche à pied (règles et spots) : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Shellfish foraging (rules & spots): practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "pêche à pied (règles et spots)",
      "en": "shellfish foraging (rules & spots)"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/randonnee",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/randonnee",
      "en": "things-to-do/hiking"
    },
    "title": {
      "fr": "Randonnées et sentiers",
      "en": "Hikes and trails"
    },
    "h1": {
      "fr": "Randonnées et sentiers",
      "en": "Hikes and trails"
    },
    "description": {
      "fr": "Randonnées et sentiers : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Hikes and trails: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "randonnées et sentiers",
      "en": "hikes and trails"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/observation-oiseaux",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/observation-oiseaux",
      "en": "things-to-do/birdwatching"
    },
    "title": {
      "fr": "Observation des oiseaux",
      "en": "Birdwatching"
    },
    "h1": {
      "fr": "Observation des oiseaux",
      "en": "Birdwatching"
    },
    "description": {
      "fr": "Observation des oiseaux : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Birdwatching: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "observation des oiseaux",
      "en": "birdwatching"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/fort-boyard-croisiere",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/fort-boyard-croisiere",
      "en": "things-to-do/fort-boyard-cruise"
    },
    "title": {
      "fr": "Croisière vers Fort Boyard",
      "en": "Cruise to Fort Boyard"
    },
    "h1": {
      "fr": "Croisière vers Fort Boyard",
      "en": "Cruise to Fort Boyard"
    },
    "description": {
      "fr": "Croisière vers Fort Boyard : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Cruise to Fort Boyard: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "croisière vers fort boyard",
      "en": "cruise to fort boyard"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/excursion-ile-daix",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/excursion-ile-daix",
      "en": "things-to-do/ile-daix-day-trip"
    },
    "title": {
      "fr": "Excursion à l'Île d'Aix",
      "en": "Day trip to Île d'Aix"
    },
    "h1": {
      "fr": "Excursion à l'Île d'Aix",
      "en": "Day trip to Île d'Aix"
    },
    "description": {
      "fr": "Excursion à l'Île d'Aix : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Day trip to Île d'Aix: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "excursion à l'île d'aix",
      "en": "day trip to île d'aix"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/en-famille",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/en-famille",
      "en": "things-to-do/with-kids"
    },
    "title": {
      "fr": "Que faire en famille",
      "en": "Things to do with kids"
    },
    "h1": {
      "fr": "Que faire en famille",
      "en": "Things to do with kids"
    },
    "description": {
      "fr": "Que faire en famille : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do with kids: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire en famille",
      "en": "things to do with kids"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/avec-enfants-en-bas-age",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/avec-enfants-en-bas-age",
      "en": "things-to-do/with-toddlers"
    },
    "title": {
      "fr": "Avec des tout-petits",
      "en": "With toddlers"
    },
    "h1": {
      "fr": "Avec des tout-petits",
      "en": "With toddlers"
    },
    "description": {
      "fr": "Avec des tout-petits : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "With toddlers: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "avec des tout-petits",
      "en": "with toddlers"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/en-couple",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/en-couple",
      "en": "things-to-do/for-couples"
    },
    "title": {
      "fr": "Que faire en couple",
      "en": "Things to do as a couple"
    },
    "h1": {
      "fr": "Que faire en couple",
      "en": "Things to do as a couple"
    },
    "description": {
      "fr": "Que faire en couple : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Things to do as a couple: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire en couple",
      "en": "things to do as a couple"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/par-temps-de-pluie",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/par-temps-de-pluie",
      "en": "things-to-do/rainy-day"
    },
    "title": {
      "fr": "Que faire quand il pleut",
      "en": "What to do when it rains"
    },
    "h1": {
      "fr": "Que faire quand il pleut",
      "en": "What to do when it rains"
    },
    "description": {
      "fr": "Que faire quand il pleut : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "What to do when it rains: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "que faire quand il pleut",
      "en": "what to do when it rains"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/gratuit",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/gratuit",
      "en": "things-to-do/free"
    },
    "title": {
      "fr": "Activités gratuites",
      "en": "Free things to do"
    },
    "h1": {
      "fr": "Activités gratuites",
      "en": "Free things to do"
    },
    "description": {
      "fr": "Activités gratuites : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Free things to do: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "activités gratuites",
      "en": "free things to do"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/un-jour",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/un-jour",
      "en": "things-to-do/in-one-day"
    },
    "title": {
      "fr": "L'Île de Ré en une journée",
      "en": "Île de Ré in one day"
    },
    "h1": {
      "fr": "L'Île de Ré en une journée",
      "en": "Île de Ré in one day"
    },
    "description": {
      "fr": "L'Île de Ré en une journée : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Île de Ré in one day: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "l'île de ré en une journée",
      "en": "île de ré in one day"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/insolite",
    "silo": "que-faire",
    "template": "activite",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "que-faire/insolite",
      "en": "things-to-do/offbeat"
    },
    "title": {
      "fr": "Activités insolites",
      "en": "Offbeat activities"
    },
    "h1": {
      "fr": "Activités insolites",
      "en": "Offbeat activities"
    },
    "description": {
      "fr": "Activités insolites : infos pratiques, tarifs, durée, saison idéale, avec ou sans enfants, et où loger à proximité.",
      "en": "Offbeat activities: practical info, prices, duration, best season, with or without kids, and where to stay nearby."
    },
    "targetKeyword": {
      "fr": "activités insolites",
      "en": "offbeat activities"
    },
    "related": [
      "que-faire",
      "ou-dormir",
      "que-faire/incontournables",
      "que-faire/velo",
      "que-faire/location-velo",
      "que-faire/phare-des-baleines"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "que-faire"
  },
  {
    "key": "que-faire/velo/itineraires/pont-loix",
    "silo": "que-faire",
    "template": "sejour",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/velo/itineraires/pont-loix",
      "en": "things-to-do/cycling/routes/bridge-to-loix"
    },
    "title": {
      "fr": "Du pont à Loix par les marais",
      "en": "From the bridge to Loix via the marshes"
    },
    "h1": {
      "fr": "Du pont à Loix par les marais",
      "en": "From the bridge to Loix via the marshes"
    },
    "description": {
      "fr": "Du pont à Loix par les marais : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "From the bridge to Loix via the marshes: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "du pont à loix par les marais",
      "en": "from the bridge to loix via the marshes"
    },
    "related": [
      "que-faire/velo",
      "ou-dormir",
      "sejour",
      "que-faire/velo/itineraires/marais-salants",
      "que-faire/velo/itineraires/tour-de-l-ile",
      "que-faire/velo/itineraires/sud-plages",
      "que-faire/velo/itineraires/nord-phare"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire/velo"
  },
  {
    "key": "que-faire/velo/itineraires/marais-salants",
    "silo": "que-faire",
    "template": "sejour",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/velo/itineraires/marais-salants",
      "en": "things-to-do/cycling/routes/salt-marshes-loop"
    },
    "title": {
      "fr": "La boucle des marais salants",
      "en": "The salt marshes loop"
    },
    "h1": {
      "fr": "La boucle des marais salants",
      "en": "The salt marshes loop"
    },
    "description": {
      "fr": "La boucle des marais salants : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "The salt marshes loop: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "la boucle des marais salants",
      "en": "the salt marshes loop"
    },
    "related": [
      "que-faire/velo",
      "ou-dormir",
      "sejour",
      "que-faire/velo/itineraires/pont-loix",
      "que-faire/velo/itineraires/tour-de-l-ile",
      "que-faire/velo/itineraires/sud-plages",
      "que-faire/velo/itineraires/nord-phare"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire/velo"
  },
  {
    "key": "que-faire/velo/itineraires/tour-de-l-ile",
    "silo": "que-faire",
    "template": "sejour",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/velo/itineraires/tour-de-l-ile",
      "en": "things-to-do/cycling/routes/island-loop"
    },
    "title": {
      "fr": "Le tour de l'île à vélo",
      "en": "The full island loop by bike"
    },
    "h1": {
      "fr": "Le tour de l'île à vélo",
      "en": "The full island loop by bike"
    },
    "description": {
      "fr": "Le tour de l'île à vélo : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "The full island loop by bike: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "le tour de l'île à vélo",
      "en": "the full island loop by bike"
    },
    "related": [
      "que-faire/velo",
      "ou-dormir",
      "sejour",
      "que-faire/velo/itineraires/pont-loix",
      "que-faire/velo/itineraires/marais-salants",
      "que-faire/velo/itineraires/sud-plages",
      "que-faire/velo/itineraires/nord-phare"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire/velo"
  },
  {
    "key": "que-faire/velo/itineraires/sud-plages",
    "silo": "que-faire",
    "template": "sejour",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/velo/itineraires/sud-plages",
      "en": "things-to-do/cycling/routes/southern-beaches"
    },
    "title": {
      "fr": "Les plages du sud à vélo",
      "en": "The southern beaches by bike"
    },
    "h1": {
      "fr": "Les plages du sud à vélo",
      "en": "The southern beaches by bike"
    },
    "description": {
      "fr": "Les plages du sud à vélo : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "The southern beaches by bike: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "les plages du sud à vélo",
      "en": "the southern beaches by bike"
    },
    "related": [
      "que-faire/velo",
      "ou-dormir",
      "sejour",
      "que-faire/velo/itineraires/pont-loix",
      "que-faire/velo/itineraires/marais-salants",
      "que-faire/velo/itineraires/tour-de-l-ile",
      "que-faire/velo/itineraires/nord-phare"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire/velo"
  },
  {
    "key": "que-faire/velo/itineraires/nord-phare",
    "silo": "que-faire",
    "template": "sejour",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "que-faire/velo/itineraires/nord-phare",
      "en": "things-to-do/cycling/routes/north-to-the-lighthouse"
    },
    "title": {
      "fr": "Du nord au Phare des Baleines",
      "en": "North to the Phare des Baleines"
    },
    "h1": {
      "fr": "Du nord au Phare des Baleines",
      "en": "North to the Phare des Baleines"
    },
    "description": {
      "fr": "Du nord au Phare des Baleines : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "North to the Phare des Baleines: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "du nord au phare des baleines",
      "en": "north to the phare des baleines"
    },
    "related": [
      "que-faire/velo",
      "ou-dormir",
      "sejour",
      "que-faire/velo/itineraires/pont-loix",
      "que-faire/velo/itineraires/marais-salants",
      "que-faire/velo/itineraires/tour-de-l-ile",
      "que-faire/velo/itineraires/sud-plages"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "que-faire/velo"
  },
  {
    "key": "restaurants/rivedoux-plage",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/rivedoux-plage",
      "en": "restaurants/rivedoux-plage"
    },
    "title": {
      "fr": "Où manger à Rivedoux-Plage",
      "en": "Restaurants in Rivedoux-Plage"
    },
    "h1": {
      "fr": "Où manger à Rivedoux-Plage",
      "en": "Restaurants in Rivedoux-Plage"
    },
    "description": {
      "fr": "Où manger à Rivedoux-Plage : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Rivedoux-Plage: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à rivedoux-plage",
      "en": "restaurants in rivedoux-plage"
    },
    "related": [
      "villages/rivedoux-plage",
      "restaurants",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re",
      "restaurants/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.158,
      "lng": -1.278,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/sainte-marie-de-re",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/sainte-marie-de-re",
      "en": "restaurants/sainte-marie-de-re"
    },
    "title": {
      "fr": "Où manger à Sainte-Marie-de-Ré",
      "en": "Restaurants in Sainte-Marie-de-Ré"
    },
    "h1": {
      "fr": "Où manger à Sainte-Marie-de-Ré",
      "en": "Restaurants in Sainte-Marie-de-Ré"
    },
    "description": {
      "fr": "Où manger à Sainte-Marie-de-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Sainte-Marie-de-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à sainte-marie-de-ré",
      "en": "restaurants in sainte-marie-de-ré"
    },
    "related": [
      "villages/sainte-marie-de-re",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re",
      "restaurants/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.151,
      "lng": -1.312,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/la-flotte",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/la-flotte",
      "en": "restaurants/la-flotte"
    },
    "title": {
      "fr": "Où manger à La Flotte",
      "en": "Restaurants in La Flotte"
    },
    "h1": {
      "fr": "Où manger à La Flotte",
      "en": "Restaurants in La Flotte"
    },
    "description": {
      "fr": "Où manger à La Flotte : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in La Flotte: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à la flotte",
      "en": "restaurants in la flotte"
    },
    "related": [
      "villages/la-flotte",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/saint-martin-de-re",
      "restaurants/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.19,
      "lng": -1.327,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/saint-martin-de-re",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/saint-martin-de-re",
      "en": "restaurants/saint-martin-de-re"
    },
    "title": {
      "fr": "Où manger à Saint-Martin-de-Ré",
      "en": "Restaurants in Saint-Martin-de-Ré"
    },
    "h1": {
      "fr": "Où manger à Saint-Martin-de-Ré",
      "en": "Restaurants in Saint-Martin-de-Ré"
    },
    "description": {
      "fr": "Où manger à Saint-Martin-de-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Saint-Martin-de-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à saint-martin-de-ré",
      "en": "restaurants in saint-martin-de-ré"
    },
    "related": [
      "villages/saint-martin-de-re",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/le-bois-plage-en-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.203,
      "lng": -1.366,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/le-bois-plage-en-re",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/le-bois-plage-en-re",
      "en": "restaurants/le-bois-plage-en-re"
    },
    "title": {
      "fr": "Où manger à Le Bois-Plage-en-Ré",
      "en": "Restaurants in Le Bois-Plage-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Le Bois-Plage-en-Ré",
      "en": "Restaurants in Le Bois-Plage-en-Ré"
    },
    "description": {
      "fr": "Où manger à Le Bois-Plage-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Le Bois-Plage-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à le bois-plage-en-ré",
      "en": "restaurants in le bois-plage-en-ré"
    },
    "related": [
      "villages/le-bois-plage-en-re",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.178,
      "lng": -1.385,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/la-couarde-sur-mer",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/la-couarde-sur-mer",
      "en": "restaurants/la-couarde-sur-mer"
    },
    "title": {
      "fr": "Où manger à La Couarde-sur-Mer",
      "en": "Restaurants in La Couarde-sur-Mer"
    },
    "h1": {
      "fr": "Où manger à La Couarde-sur-Mer",
      "en": "Restaurants in La Couarde-sur-Mer"
    },
    "description": {
      "fr": "Où manger à La Couarde-sur-Mer : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in La Couarde-sur-Mer: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à la couarde-sur-mer",
      "en": "restaurants in la couarde-sur-mer"
    },
    "related": [
      "villages/la-couarde-sur-mer",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.196,
      "lng": -1.434,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/loix",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/loix",
      "en": "restaurants/loix"
    },
    "title": {
      "fr": "Où manger à Loix",
      "en": "Restaurants in Loix"
    },
    "h1": {
      "fr": "Où manger à Loix",
      "en": "Restaurants in Loix"
    },
    "description": {
      "fr": "Où manger à Loix : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Loix: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à loix",
      "en": "restaurants in loix"
    },
    "related": [
      "villages/loix",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.224,
      "lng": -1.443,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/ars-en-re",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/ars-en-re",
      "en": "restaurants/ars-en-re"
    },
    "title": {
      "fr": "Où manger à Ars-en-Ré",
      "en": "Restaurants in Ars-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Ars-en-Ré",
      "en": "Restaurants in Ars-en-Ré"
    },
    "description": {
      "fr": "Où manger à Ars-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Ars-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à ars-en-ré",
      "en": "restaurants in ars-en-ré"
    },
    "related": [
      "villages/ars-en-re",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.205,
      "lng": -1.518,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/saint-clement-des-baleines",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/saint-clement-des-baleines",
      "en": "restaurants/saint-clement-des-baleines"
    },
    "title": {
      "fr": "Où manger à Saint-Clément-des-Baleines",
      "en": "Restaurants in Saint-Clément-des-Baleines"
    },
    "h1": {
      "fr": "Où manger à Saint-Clément-des-Baleines",
      "en": "Restaurants in Saint-Clément-des-Baleines"
    },
    "description": {
      "fr": "Où manger à Saint-Clément-des-Baleines : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Saint-Clément-des-Baleines: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à saint-clément-des-baleines",
      "en": "restaurants in saint-clément-des-baleines"
    },
    "related": [
      "villages/saint-clement-des-baleines",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.236,
      "lng": -1.553,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/les-portes-en-re",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/les-portes-en-re",
      "en": "restaurants/les-portes-en-re"
    },
    "title": {
      "fr": "Où manger à Les Portes-en-Ré",
      "en": "Restaurants in Les Portes-en-Ré"
    },
    "h1": {
      "fr": "Où manger à Les Portes-en-Ré",
      "en": "Restaurants in Les Portes-en-Ré"
    },
    "description": {
      "fr": "Où manger à Les Portes-en-Ré : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants in Les Portes-en-Ré: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "où manger à les portes-en-ré",
      "en": "restaurants in les portes-en-ré"
    },
    "related": [
      "villages/les-portes-en-re",
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.251,
      "lng": -1.586,
      "zoom": 14
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/fruits-de-mer",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/fruits-de-mer",
      "en": "restaurants/seafood"
    },
    "title": {
      "fr": "Fruits de mer et plateaux",
      "en": "Seafood and platters"
    },
    "h1": {
      "fr": "Fruits de mer et plateaux",
      "en": "Seafood and platters"
    },
    "description": {
      "fr": "Fruits de mer et plateaux : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Seafood and platters: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "fruits de mer et plateaux",
      "en": "seafood and platters"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/cabanes-a-huitres",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/cabanes-a-huitres",
      "en": "restaurants/oyster-shacks"
    },
    "title": {
      "fr": "Cabanes à huîtres",
      "en": "Oyster shacks"
    },
    "h1": {
      "fr": "Cabanes à huîtres",
      "en": "Oyster shacks"
    },
    "description": {
      "fr": "Cabanes à huîtres : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Oyster shacks: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "cabanes à huîtres",
      "en": "oyster shacks"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/pieds-dans-le-sable",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "restaurants/pieds-dans-le-sable",
      "en": "restaurants/on-the-beach"
    },
    "title": {
      "fr": "Restaurants les pieds dans le sable",
      "en": "Restaurants on the beach"
    },
    "h1": {
      "fr": "Restaurants les pieds dans le sable",
      "en": "Restaurants on the beach"
    },
    "description": {
      "fr": "Restaurants les pieds dans le sable : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants on the beach: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "restaurants les pieds dans le sable",
      "en": "restaurants on the beach"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/gastronomiques",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/gastronomiques",
      "en": "restaurants/fine-dining"
    },
    "title": {
      "fr": "Tables gastronomiques",
      "en": "Fine-dining tables"
    },
    "h1": {
      "fr": "Tables gastronomiques",
      "en": "Fine-dining tables"
    },
    "description": {
      "fr": "Tables gastronomiques : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Fine-dining tables: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "tables gastronomiques",
      "en": "fine-dining tables"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/avec-vue-mer",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/avec-vue-mer",
      "en": "restaurants/sea-view"
    },
    "title": {
      "fr": "Restaurants avec vue mer",
      "en": "Restaurants with a sea view"
    },
    "h1": {
      "fr": "Restaurants avec vue mer",
      "en": "Restaurants with a sea view"
    },
    "description": {
      "fr": "Restaurants avec vue mer : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Restaurants with a sea view: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "restaurants avec vue mer",
      "en": "restaurants with a sea view"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/creperies",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/creperies",
      "en": "restaurants/creperies"
    },
    "title": {
      "fr": "Crêperies de l'île",
      "en": "Creperies on the island"
    },
    "h1": {
      "fr": "Crêperies de l'île",
      "en": "Creperies on the island"
    },
    "description": {
      "fr": "Crêperies de l'île : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Creperies on the island: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "crêperies de l'île",
      "en": "creperies on the island"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/glaciers",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/glaciers",
      "en": "restaurants/ice-cream"
    },
    "title": {
      "fr": "Glaciers (glace à la fleur de sel)",
      "en": "Ice-cream parlours (fleur de sel)"
    },
    "h1": {
      "fr": "Glaciers (glace à la fleur de sel)",
      "en": "Ice-cream parlours (fleur de sel)"
    },
    "description": {
      "fr": "Glaciers (glace à la fleur de sel) : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Ice-cream parlours (fleur de sel): our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "glaciers (glace à la fleur de sel)",
      "en": "ice-cream parlours (fleur de sel)"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/bons-plans",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/bons-plans",
      "en": "restaurants/budget-eats"
    },
    "title": {
      "fr": "Bien manger pas cher",
      "en": "Eat well on a budget"
    },
    "h1": {
      "fr": "Bien manger pas cher",
      "en": "Eat well on a budget"
    },
    "description": {
      "fr": "Bien manger pas cher : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Eat well on a budget: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "bien manger pas cher",
      "en": "eat well on a budget"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "restaurants/romantiques",
    "silo": "restaurants",
    "template": "restaurant",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "restaurants/romantiques",
      "en": "restaurants/romantic"
    },
    "title": {
      "fr": "Restaurants romantiques",
      "en": "Romantic restaurants"
    },
    "h1": {
      "fr": "Restaurants romantiques",
      "en": "Romantic restaurants"
    },
    "description": {
      "fr": "Restaurants romantiques : notre sélection éditoriale, gammes de prix, spécialités et conseils de réservation.",
      "en": "Romantic restaurants: our editorial picks, price ranges, specialities and booking tips."
    },
    "targetKeyword": {
      "fr": "restaurants romantiques",
      "en": "romantic restaurants"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.6,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "restaurants"
  },
  {
    "key": "gastronomie/specialites",
    "silo": "gastronomie",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "gastronomie/specialites",
      "en": "food/specialities"
    },
    "title": {
      "fr": "Les spécialités de l'île à goûter",
      "en": "Island specialities to taste"
    },
    "h1": {
      "fr": "Les spécialités de l'île à goûter",
      "en": "Island specialities to taste"
    },
    "description": {
      "fr": "Les spécialités de l'île à goûter : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Island specialities to taste: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "les spécialités de l'île à goûter",
      "en": "island specialities to taste"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "restaurants"
  },
  {
    "key": "gastronomie/huitres",
    "silo": "gastronomie",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "gastronomie/huitres",
      "en": "food/oysters"
    },
    "title": {
      "fr": "Tout sur les huîtres de Ré",
      "en": "Everything about Ré oysters"
    },
    "h1": {
      "fr": "Tout sur les huîtres de Ré",
      "en": "Everything about Ré oysters"
    },
    "description": {
      "fr": "Tout sur les huîtres de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Everything about Ré oysters: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "tout sur les huîtres de ré",
      "en": "everything about ré oysters"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "restaurants"
  },
  {
    "key": "gastronomie/fleur-de-sel",
    "silo": "gastronomie",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "gastronomie/fleur-de-sel",
      "en": "food/fleur-de-sel"
    },
    "title": {
      "fr": "La fleur de sel de Ré",
      "en": "The fleur de sel of Ré"
    },
    "h1": {
      "fr": "La fleur de sel de Ré",
      "en": "The fleur de sel of Ré"
    },
    "description": {
      "fr": "La fleur de sel de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "The fleur de sel of Ré: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "la fleur de sel de ré",
      "en": "the fleur de sel of ré"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "restaurants"
  },
  {
    "key": "gastronomie/pommes-de-terre-aop",
    "silo": "gastronomie",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "gastronomie/pommes-de-terre-aop",
      "en": "food/ile-de-re-potatoes"
    },
    "title": {
      "fr": "La pomme de terre AOP de Ré",
      "en": "The AOP potato of Ré"
    },
    "h1": {
      "fr": "La pomme de terre AOP de Ré",
      "en": "The AOP potato of Ré"
    },
    "description": {
      "fr": "La pomme de terre AOP de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "The AOP potato of Ré: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "la pomme de terre aop de ré",
      "en": "the aop potato of ré"
    },
    "related": [
      "restaurants",
      "restaurants/rivedoux-plage",
      "restaurants/sainte-marie-de-re",
      "restaurants/la-flotte",
      "restaurants/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "restaurants"
  },
  {
    "key": "quand-venir/janvier",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/janvier",
      "en": "when-to-go/january"
    },
    "title": {
      "fr": "L'Île de Ré en janvier",
      "en": "Île de Ré in January"
    },
    "h1": {
      "fr": "L'Île de Ré en janvier",
      "en": "Île de Ré in January"
    },
    "description": {
      "fr": "L'Île de Ré en janvier : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in January: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en janvier",
      "en": "île de ré in january"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril",
      "quand-venir/mai"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/fevrier",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/fevrier",
      "en": "when-to-go/february"
    },
    "title": {
      "fr": "L'Île de Ré en février",
      "en": "Île de Ré in February"
    },
    "h1": {
      "fr": "L'Île de Ré en février",
      "en": "Île de Ré in February"
    },
    "description": {
      "fr": "L'Île de Ré en février : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in February: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en février",
      "en": "île de ré in february"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/mars",
      "quand-venir/avril",
      "quand-venir/mai"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/mars",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/mars",
      "en": "when-to-go/march"
    },
    "title": {
      "fr": "L'Île de Ré en mars",
      "en": "Île de Ré in March"
    },
    "h1": {
      "fr": "L'Île de Ré en mars",
      "en": "Île de Ré in March"
    },
    "description": {
      "fr": "L'Île de Ré en mars : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in March: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en mars",
      "en": "île de ré in march"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/avril",
      "quand-venir/mai"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/avril",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/avril",
      "en": "when-to-go/april"
    },
    "title": {
      "fr": "L'Île de Ré en avril",
      "en": "Île de Ré in April"
    },
    "h1": {
      "fr": "L'Île de Ré en avril",
      "en": "Île de Ré in April"
    },
    "description": {
      "fr": "L'Île de Ré en avril : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in April: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en avril",
      "en": "île de ré in april"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/mai"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/mai",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/mai",
      "en": "when-to-go/may"
    },
    "title": {
      "fr": "L'Île de Ré en mai",
      "en": "Île de Ré in May"
    },
    "h1": {
      "fr": "L'Île de Ré en mai",
      "en": "Île de Ré in May"
    },
    "description": {
      "fr": "L'Île de Ré en mai : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in May: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en mai",
      "en": "île de ré in may"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/juin",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/juin",
      "en": "when-to-go/june"
    },
    "title": {
      "fr": "L'Île de Ré en juin",
      "en": "Île de Ré in June"
    },
    "h1": {
      "fr": "L'Île de Ré en juin",
      "en": "Île de Ré in June"
    },
    "description": {
      "fr": "L'Île de Ré en juin : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in June: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en juin",
      "en": "île de ré in june"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/juillet",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/juillet",
      "en": "when-to-go/july"
    },
    "title": {
      "fr": "L'Île de Ré en juillet",
      "en": "Île de Ré in July"
    },
    "h1": {
      "fr": "L'Île de Ré en juillet",
      "en": "Île de Ré in July"
    },
    "description": {
      "fr": "L'Île de Ré en juillet : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in July: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en juillet",
      "en": "île de ré in july"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/aout",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/aout",
      "en": "when-to-go/august"
    },
    "title": {
      "fr": "L'Île de Ré en août",
      "en": "Île de Ré in August"
    },
    "h1": {
      "fr": "L'Île de Ré en août",
      "en": "Île de Ré in August"
    },
    "description": {
      "fr": "L'Île de Ré en août : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in August: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en août",
      "en": "île de ré in august"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/septembre",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/septembre",
      "en": "when-to-go/september"
    },
    "title": {
      "fr": "L'Île de Ré en septembre",
      "en": "Île de Ré in September"
    },
    "h1": {
      "fr": "L'Île de Ré en septembre",
      "en": "Île de Ré in September"
    },
    "description": {
      "fr": "L'Île de Ré en septembre : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in September: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en septembre",
      "en": "île de ré in september"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/octobre",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/octobre",
      "en": "when-to-go/october"
    },
    "title": {
      "fr": "L'Île de Ré en octobre",
      "en": "Île de Ré in October"
    },
    "h1": {
      "fr": "L'Île de Ré en octobre",
      "en": "Île de Ré in October"
    },
    "description": {
      "fr": "L'Île de Ré en octobre : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in October: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en octobre",
      "en": "île de ré in october"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/novembre",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/novembre",
      "en": "when-to-go/november"
    },
    "title": {
      "fr": "L'Île de Ré en novembre",
      "en": "Île de Ré in November"
    },
    "h1": {
      "fr": "L'Île de Ré en novembre",
      "en": "Île de Ré in November"
    },
    "description": {
      "fr": "L'Île de Ré en novembre : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in November: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en novembre",
      "en": "île de ré in november"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/decembre",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/decembre",
      "en": "when-to-go/december"
    },
    "title": {
      "fr": "L'Île de Ré en décembre",
      "en": "Île de Ré in December"
    },
    "h1": {
      "fr": "L'Île de Ré en décembre",
      "en": "Île de Ré in December"
    },
    "description": {
      "fr": "L'Île de Ré en décembre : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in December: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en décembre",
      "en": "île de ré in december"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/printemps",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/printemps",
      "en": "when-to-go/spring"
    },
    "title": {
      "fr": "L'Île de Ré au printemps",
      "en": "Île de Ré in spring"
    },
    "h1": {
      "fr": "L'Île de Ré au printemps",
      "en": "Île de Ré in spring"
    },
    "description": {
      "fr": "L'Île de Ré au printemps : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in spring: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré au printemps",
      "en": "île de ré in spring"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/ete",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/ete",
      "en": "when-to-go/summer"
    },
    "title": {
      "fr": "L'Île de Ré en été",
      "en": "Île de Ré in summer"
    },
    "h1": {
      "fr": "L'Île de Ré en été",
      "en": "Île de Ré in summer"
    },
    "description": {
      "fr": "L'Île de Ré en été : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in summer: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en été",
      "en": "île de ré in summer"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/automne",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/automne",
      "en": "when-to-go/autumn"
    },
    "title": {
      "fr": "L'Île de Ré en automne",
      "en": "Île de Ré in autumn"
    },
    "h1": {
      "fr": "L'Île de Ré en automne",
      "en": "Île de Ré in autumn"
    },
    "description": {
      "fr": "L'Île de Ré en automne : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in autumn: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en automne",
      "en": "île de ré in autumn"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/hiver",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "quand-venir/hiver",
      "en": "when-to-go/winter"
    },
    "title": {
      "fr": "L'Île de Ré en hiver",
      "en": "Île de Ré in winter"
    },
    "h1": {
      "fr": "L'Île de Ré en hiver",
      "en": "Île de Ré in winter"
    },
    "description": {
      "fr": "L'Île de Ré en hiver : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré in winter: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré en hiver",
      "en": "île de ré in winter"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/temperature-eau",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "quand-venir/temperature-eau",
      "en": "when-to-go/sea-temperature"
    },
    "title": {
      "fr": "Température de l'eau mois par mois",
      "en": "Sea temperature month by month"
    },
    "h1": {
      "fr": "Température de l'eau mois par mois",
      "en": "Sea temperature month by month"
    },
    "description": {
      "fr": "Température de l'eau mois par mois : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Sea temperature month by month: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "température de l'eau mois par mois",
      "en": "sea temperature month by month"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/meteo",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "quand-venir/meteo",
      "en": "when-to-go/weather"
    },
    "title": {
      "fr": "Climat et météo de l'Île de Ré",
      "en": "Île de Ré climate and weather"
    },
    "h1": {
      "fr": "Climat et météo de l'Île de Ré",
      "en": "Île de Ré climate and weather"
    },
    "description": {
      "fr": "Climat et météo de l'Île de Ré : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré climate and weather: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "climat et météo de l'île de ré",
      "en": "île de ré climate and weather"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/hors-saison",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/hors-saison",
      "en": "when-to-go/off-season"
    },
    "title": {
      "fr": "Visiter l'Île de Ré hors saison",
      "en": "Visiting Île de Ré off-season"
    },
    "h1": {
      "fr": "Visiter l'Île de Ré hors saison",
      "en": "Visiting Île de Ré off-season"
    },
    "description": {
      "fr": "Visiter l'Île de Ré hors saison : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Visiting Île de Ré off-season: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "visiter l'île de ré hors saison",
      "en": "visiting île de ré off-season"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/eviter-la-foule",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "quand-venir/eviter-la-foule",
      "en": "when-to-go/avoid-the-crowds"
    },
    "title": {
      "fr": "Éviter l'affluence",
      "en": "Avoiding the crowds"
    },
    "h1": {
      "fr": "Éviter l'affluence",
      "en": "Avoiding the crowds"
    },
    "description": {
      "fr": "Éviter l'affluence : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Avoiding the crowds: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "éviter l'affluence",
      "en": "avoiding the crowds"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/se-baigner",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "quand-venir/se-baigner",
      "en": "when-to-go/swimming-season"
    },
    "title": {
      "fr": "Quand peut-on se baigner",
      "en": "When can you swim"
    },
    "h1": {
      "fr": "Quand peut-on se baigner",
      "en": "When can you swim"
    },
    "description": {
      "fr": "Quand peut-on se baigner : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "When can you swim: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "quand peut-on se baigner",
      "en": "when can you swim"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/ponts-week-ends",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/ponts-week-ends",
      "en": "when-to-go/long-weekends"
    },
    "title": {
      "fr": "Meilleurs ponts et longs week-ends",
      "en": "Best long weekends"
    },
    "h1": {
      "fr": "Meilleurs ponts et longs week-ends",
      "en": "Best long weekends"
    },
    "description": {
      "fr": "Meilleurs ponts et longs week-ends : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Best long weekends: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "meilleurs ponts et longs week-ends",
      "en": "best long weekends"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/vacances-scolaires",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/vacances-scolaires",
      "en": "when-to-go/school-holidays"
    },
    "title": {
      "fr": "L'Île de Ré pendant les vacances scolaires",
      "en": "Île de Ré during school holidays"
    },
    "h1": {
      "fr": "L'Île de Ré pendant les vacances scolaires",
      "en": "Île de Ré during school holidays"
    },
    "description": {
      "fr": "L'Île de Ré pendant les vacances scolaires : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Île de Ré during school holidays: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "l'île de ré pendant les vacances scolaires",
      "en": "île de ré during school holidays"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir"
  },
  {
    "key": "quand-venir/2026",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/2026",
      "en": "when-to-go/2026"
    },
    "title": {
      "fr": "Que faire sur l'Île de Ré en 2026",
      "en": "Things to do on Île de Ré in 2026"
    },
    "h1": {
      "fr": "Que faire sur l'Île de Ré en 2026",
      "en": "Things to do on Île de Ré in 2026"
    },
    "description": {
      "fr": "Que faire sur l'Île de Ré en 2026 : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Things to do on Île de Ré in 2026: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "que faire sur l'île de ré en 2026",
      "en": "things to do on île de ré in 2026"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "quand-venir/2027",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/2027",
      "en": "when-to-go/2027"
    },
    "title": {
      "fr": "Que faire sur l'Île de Ré en 2027",
      "en": "Things to do on Île de Ré in 2027"
    },
    "h1": {
      "fr": "Que faire sur l'Île de Ré en 2027",
      "en": "Things to do on Île de Ré in 2027"
    },
    "description": {
      "fr": "Que faire sur l'Île de Ré en 2027 : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Things to do on Île de Ré in 2027: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "que faire sur l'île de ré en 2027",
      "en": "things to do on île de ré in 2027"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "quand-venir/ete-2026",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/ete-2026",
      "en": "when-to-go/summer-2026"
    },
    "title": {
      "fr": "Été 2026 sur l'Île de Ré : météo, prix, réserver",
      "en": "Summer 2026 on Île de Ré"
    },
    "h1": {
      "fr": "Été 2026 sur l'Île de Ré : météo, prix, réserver",
      "en": "Summer 2026 on Île de Ré"
    },
    "description": {
      "fr": "Été 2026 sur l'Île de Ré : météo, prix, réserver : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Summer 2026 on Île de Ré: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "été 2026 sur l'île de ré : météo, prix, réserver",
      "en": "summer 2026 on île de ré"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "quand-venir/ete-2027",
    "silo": "quand-venir",
    "template": "quand-venir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "quand-venir/ete-2027",
      "en": "when-to-go/summer-2027"
    },
    "title": {
      "fr": "Été 2027 sur l'Île de Ré",
      "en": "Summer 2027 on Île de Ré"
    },
    "h1": {
      "fr": "Été 2027 sur l'Île de Ré",
      "en": "Summer 2027 on Île de Ré"
    },
    "description": {
      "fr": "Été 2027 sur l'Île de Ré : météo, température de l'eau, affluence, prix des hébergements et notre verdict pour réserver au bon moment.",
      "en": "Summer 2027 on Île de Ré: weather, sea temperature, crowds, lodging prices and our verdict on the right time to book."
    },
    "targetKeyword": {
      "fr": "été 2027 sur l'île de ré",
      "en": "summer 2027 on île de ré"
    },
    "related": [
      "quand-venir",
      "ou-dormir",
      "que-faire",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "evenements/2026",
    "silo": "evenements",
    "template": "guide",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "evenements/2026",
      "en": "events/2026"
    },
    "title": {
      "fr": "Agenda et événements 2026",
      "en": "Events and what's on in 2026"
    },
    "h1": {
      "fr": "Agenda et événements 2026",
      "en": "Events and what's on in 2026"
    },
    "description": {
      "fr": "Agenda et événements 2026 : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Events and what's on in 2026: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "agenda et événements 2026",
      "en": "events and what's on in 2026"
    },
    "related": [
      "quand-venir",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "evenements/2027",
    "silo": "evenements",
    "template": "guide",
    "intent": "saisonnier",
    "stay22": false,
    "slug": {
      "fr": "evenements/2027",
      "en": "events/2027"
    },
    "title": {
      "fr": "Agenda et événements 2027",
      "en": "Events and what's on in 2027"
    },
    "h1": {
      "fr": "Agenda et événements 2027",
      "en": "Events and what's on in 2027"
    },
    "description": {
      "fr": "Agenda et événements 2027 : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Events and what's on in 2027: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "agenda et événements 2027",
      "en": "events and what's on in 2027"
    },
    "related": [
      "quand-venir",
      "quand-venir/janvier",
      "quand-venir/fevrier",
      "quand-venir/mars",
      "quand-venir/avril"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "quand-venir",
    "yearPage": true
  },
  {
    "key": "ou-dormir/ete-2026",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/ete-2026",
      "en": "where-to-stay/summer-2026"
    },
    "title": {
      "fr": "Où dormir l'été 2026 (réserver tôt)",
      "en": "Where to stay in summer 2026"
    },
    "h1": {
      "fr": "Où dormir l'été 2026 (réserver tôt)",
      "en": "Where to stay in summer 2026"
    },
    "description": {
      "fr": "Où dormir l'été 2026 (réserver tôt) : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in summer 2026: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir l'été 2026 (réserver tôt)",
      "en": "where to stay in summer 2026"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir",
    "yearPage": true
  },
  {
    "key": "ou-dormir/ete-2027",
    "silo": "ou-dormir",
    "template": "ou-dormir",
    "intent": "saisonnier",
    "stay22": true,
    "slug": {
      "fr": "ou-dormir/ete-2027",
      "en": "where-to-stay/summer-2027"
    },
    "title": {
      "fr": "Où dormir l'été 2027",
      "en": "Where to stay in summer 2027"
    },
    "h1": {
      "fr": "Où dormir l'été 2027",
      "en": "Where to stay in summer 2027"
    },
    "description": {
      "fr": "Où dormir l'été 2027 : nos meilleures adresses par quartier et par budget, avec carte et comparatif pour réserver au bon endroit.",
      "en": "Where to stay in summer 2027: our top picks by area and budget, with a map and comparison table to book in the right place."
    },
    "targetKeyword": {
      "fr": "où dormir l'été 2027",
      "en": "where to stay in summer 2027"
    },
    "related": [
      "ou-dormir",
      "ou-dormir/rivedoux-plage",
      "ou-dormir/sainte-marie-de-re",
      "ou-dormir/la-flotte",
      "ou-dormir/saint-martin-de-re"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.8,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "ou-dormir",
    "yearPage": true
  },
  {
    "key": "sejour/week-end",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/week-end",
      "en": "itineraries/weekend"
    },
    "title": {
      "fr": "Un week-end sur l'Île de Ré",
      "en": "A weekend on Île de Ré"
    },
    "h1": {
      "fr": "Un week-end sur l'Île de Ré",
      "en": "A weekend on Île de Ré"
    },
    "description": {
      "fr": "Un week-end sur l'Île de Ré : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "A weekend on Île de Ré: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "un week-end sur l'île de ré",
      "en": "a weekend on île de ré"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours",
      "sejour/5-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/2-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/2-jours",
      "en": "itineraries/2-days"
    },
    "title": {
      "fr": "Île de Ré en 2 jours",
      "en": "Île de Ré in 2 days"
    },
    "h1": {
      "fr": "Île de Ré en 2 jours",
      "en": "Île de Ré in 2 days"
    },
    "description": {
      "fr": "Île de Ré en 2 jours : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "Île de Ré in 2 days: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "île de ré en 2 jours",
      "en": "île de ré in 2 days"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/3-jours",
      "sejour/4-jours",
      "sejour/5-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/3-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/3-jours",
      "en": "itineraries/3-days"
    },
    "title": {
      "fr": "Île de Ré en 3 jours",
      "en": "Île de Ré in 3 days"
    },
    "h1": {
      "fr": "Île de Ré en 3 jours",
      "en": "Île de Ré in 3 days"
    },
    "description": {
      "fr": "Île de Ré en 3 jours : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "Île de Ré in 3 days: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "île de ré en 3 jours",
      "en": "île de ré in 3 days"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/4-jours",
      "sejour/5-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/4-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/4-jours",
      "en": "itineraries/4-days"
    },
    "title": {
      "fr": "Île de Ré en 4 jours",
      "en": "Île de Ré in 4 days"
    },
    "h1": {
      "fr": "Île de Ré en 4 jours",
      "en": "Île de Ré in 4 days"
    },
    "description": {
      "fr": "Île de Ré en 4 jours : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "Île de Ré in 4 days: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "île de ré en 4 jours",
      "en": "île de ré in 4 days"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/5-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/5-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/5-jours",
      "en": "itineraries/5-days"
    },
    "title": {
      "fr": "Île de Ré en 5 jours",
      "en": "Île de Ré in 5 days"
    },
    "h1": {
      "fr": "Île de Ré en 5 jours",
      "en": "Île de Ré in 5 days"
    },
    "description": {
      "fr": "Île de Ré en 5 jours : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "Île de Ré in 5 days: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "île de ré en 5 jours",
      "en": "île de ré in 5 days"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/une-semaine",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/une-semaine",
      "en": "itineraries/one-week"
    },
    "title": {
      "fr": "Une semaine sur l'Île de Ré",
      "en": "One week on Île de Ré"
    },
    "h1": {
      "fr": "Une semaine sur l'Île de Ré",
      "en": "One week on Île de Ré"
    },
    "description": {
      "fr": "Une semaine sur l'Île de Ré : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "One week on Île de Ré: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "une semaine sur l'île de ré",
      "en": "one week on île de ré"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/10-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/10-jours",
      "en": "itineraries/10-days"
    },
    "title": {
      "fr": "10 jours sur l'Île de Ré",
      "en": "10 days on Île de Ré"
    },
    "h1": {
      "fr": "10 jours sur l'Île de Ré",
      "en": "10 days on Île de Ré"
    },
    "description": {
      "fr": "10 jours sur l'Île de Ré : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "10 days on Île de Ré: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "10 jours sur l'île de ré",
      "en": "10 days on île de ré"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/une-journee",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "sejour/une-journee",
      "en": "itineraries/day-trip"
    },
    "title": {
      "fr": "Une journée depuis La Rochelle",
      "en": "A day trip from La Rochelle"
    },
    "h1": {
      "fr": "Une journée depuis La Rochelle",
      "en": "A day trip from La Rochelle"
    },
    "description": {
      "fr": "Une journée depuis La Rochelle : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "A day trip from La Rochelle: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "une journée depuis la rochelle",
      "en": "a day trip from la rochelle"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/itineraire-velo-2-jours",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/itineraire-velo-2-jours",
      "en": "itineraries/2-day-cycling-route"
    },
    "title": {
      "fr": "Itinéraire vélo de 2 jours",
      "en": "A 2-day cycling itinerary"
    },
    "h1": {
      "fr": "Itinéraire vélo de 2 jours",
      "en": "A 2-day cycling itinerary"
    },
    "description": {
      "fr": "Itinéraire vélo de 2 jours : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "A 2-day cycling itinerary: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "itinéraire vélo de 2 jours",
      "en": "a 2-day cycling itinerary"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/itineraire-famille",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/itineraire-famille",
      "en": "itineraries/family-itinerary"
    },
    "title": {
      "fr": "Itinéraire famille d'une semaine",
      "en": "A one-week family itinerary"
    },
    "h1": {
      "fr": "Itinéraire famille d'une semaine",
      "en": "A one-week family itinerary"
    },
    "description": {
      "fr": "Itinéraire famille d'une semaine : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "A one-week family itinerary: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "itinéraire famille d'une semaine",
      "en": "a one-week family itinerary"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/premiere-visite",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/premiere-visite",
      "en": "itineraries/first-visit"
    },
    "title": {
      "fr": "Premier séjour : que voir en priorité",
      "en": "First visit: what to see first"
    },
    "h1": {
      "fr": "Premier séjour : que voir en priorité",
      "en": "First visit: what to see first"
    },
    "description": {
      "fr": "Premier séjour : que voir en priorité : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "First visit: what to see first: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "premier séjour : que voir en priorité",
      "en": "first visit: what to see first"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/budget",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "sejour/budget",
      "en": "itineraries/budget"
    },
    "title": {
      "fr": "Budget pour un séjour sur l'Île de Ré",
      "en": "Budget for a trip to Île de Ré"
    },
    "h1": {
      "fr": "Budget pour un séjour sur l'Île de Ré",
      "en": "Budget for a trip to Île de Ré"
    },
    "description": {
      "fr": "Budget pour un séjour sur l'Île de Ré : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "Budget for a trip to Île de Ré: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "budget pour un séjour sur l'île de ré",
      "en": "budget for a trip to île de ré"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "sejour"
  },
  {
    "key": "sejour/hors-saison-week-end",
    "silo": "sejour",
    "template": "sejour",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "sejour/hors-saison-week-end",
      "en": "itineraries/off-season-weekend"
    },
    "title": {
      "fr": "Week-end hors saison",
      "en": "An off-season weekend"
    },
    "h1": {
      "fr": "Week-end hors saison",
      "en": "An off-season weekend"
    },
    "description": {
      "fr": "Week-end hors saison : itinéraire jour par jour, étapes, plages et où dormir pour profiter sans courir.",
      "en": "An off-season weekend: a day-by-day itinerary, stops, beaches and where to stay so you enjoy without rushing."
    },
    "targetKeyword": {
      "fr": "week-end hors saison",
      "en": "an off-season weekend"
    },
    "related": [
      "sejour",
      "ou-dormir",
      "sejour/week-end",
      "sejour/2-jours",
      "sejour/3-jours",
      "sejour/4-jours"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "sejour"
  },
  {
    "key": "preparer/acces-pont",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/acces-pont",
      "en": "plan-your-trip/bridge-access"
    },
    "title": {
      "fr": "Accès et pont (péage, tarifs)",
      "en": "Access and the bridge (toll, prices)"
    },
    "h1": {
      "fr": "Accès et pont (péage, tarifs)",
      "en": "Access and the bridge (toll, prices)"
    },
    "description": {
      "fr": "Accès et pont (péage, tarifs) : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Access and the bridge (toll, prices): the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "accès et pont (péage, tarifs)",
      "en": "access and the bridge (toll, prices)"
    },
    "related": [
      "preparer",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train",
      "preparer/sans-voiture"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/depuis-la-rochelle",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/depuis-la-rochelle",
      "en": "plan-your-trip/from-la-rochelle"
    },
    "title": {
      "fr": "Aller à l'Île de Ré depuis La Rochelle",
      "en": "Getting to Île de Ré from La Rochelle"
    },
    "h1": {
      "fr": "Aller à l'Île de Ré depuis La Rochelle",
      "en": "Getting to Île de Ré from La Rochelle"
    },
    "description": {
      "fr": "Aller à l'Île de Ré depuis La Rochelle : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Getting to Île de Ré from La Rochelle: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "aller à l'île de ré depuis la rochelle",
      "en": "getting to île de ré from la rochelle"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-paris",
      "preparer/en-train",
      "preparer/sans-voiture"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/depuis-paris",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/depuis-paris",
      "en": "plan-your-trip/from-paris"
    },
    "title": {
      "fr": "Y aller depuis Paris",
      "en": "Getting there from Paris"
    },
    "h1": {
      "fr": "Y aller depuis Paris",
      "en": "Getting there from Paris"
    },
    "description": {
      "fr": "Y aller depuis Paris : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Getting there from Paris: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "y aller depuis paris",
      "en": "getting there from paris"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/en-train",
      "preparer/sans-voiture"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/en-train",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/en-train",
      "en": "plan-your-trip/by-train"
    },
    "title": {
      "fr": "Venir en train (gare de La Rochelle)",
      "en": "Coming by train (La Rochelle station)"
    },
    "h1": {
      "fr": "Venir en train (gare de La Rochelle)",
      "en": "Coming by train (La Rochelle station)"
    },
    "description": {
      "fr": "Venir en train (gare de La Rochelle) : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Coming by train (La Rochelle station): the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "venir en train (gare de la rochelle)",
      "en": "coming by train (la rochelle station)"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/sans-voiture"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/sans-voiture",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/sans-voiture",
      "en": "plan-your-trip/car-free"
    },
    "title": {
      "fr": "Visiter l'Île de Ré sans voiture",
      "en": "Visiting Île de Ré without a car"
    },
    "h1": {
      "fr": "Visiter l'Île de Ré sans voiture",
      "en": "Visiting Île de Ré without a car"
    },
    "description": {
      "fr": "Visiter l'Île de Ré sans voiture : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Visiting Île de Ré without a car: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "visiter l'île de ré sans voiture",
      "en": "visiting île de ré without a car"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/se-deplacer",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/se-deplacer",
      "en": "plan-your-trip/getting-around"
    },
    "title": {
      "fr": "Se déplacer sur l'île",
      "en": "Getting around the island"
    },
    "h1": {
      "fr": "Se déplacer sur l'île",
      "en": "Getting around the island"
    },
    "description": {
      "fr": "Se déplacer sur l'île : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Getting around the island: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "se déplacer sur l'île",
      "en": "getting around the island"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/bus-navettes",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/bus-navettes",
      "en": "plan-your-trip/buses"
    },
    "title": {
      "fr": "Bus et navettes",
      "en": "Buses and shuttles"
    },
    "h1": {
      "fr": "Bus et navettes",
      "en": "Buses and shuttles"
    },
    "description": {
      "fr": "Bus et navettes : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Buses and shuttles: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "bus et navettes",
      "en": "buses and shuttles"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/parking",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/parking",
      "en": "plan-your-trip/parking"
    },
    "title": {
      "fr": "Où se garer sur l'Île de Ré",
      "en": "Where to park on Île de Ré"
    },
    "h1": {
      "fr": "Où se garer sur l'Île de Ré",
      "en": "Where to park on Île de Ré"
    },
    "description": {
      "fr": "Où se garer sur l'Île de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Where to park on Île de Ré: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "où se garer sur l'île de ré",
      "en": "where to park on île de ré"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/avec-chien",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "preparer/avec-chien",
      "en": "plan-your-trip/with-a-dog"
    },
    "title": {
      "fr": "Partir sur l'Île de Ré avec son chien",
      "en": "Île de Ré with your dog"
    },
    "h1": {
      "fr": "Partir sur l'Île de Ré avec son chien",
      "en": "Île de Ré with your dog"
    },
    "description": {
      "fr": "Partir sur l'Île de Ré avec son chien : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Île de Ré with your dog: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "partir sur l'île de ré avec son chien",
      "en": "île de ré with your dog"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "preparer"
  },
  {
    "key": "preparer/avec-bebe",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/avec-bebe",
      "en": "plan-your-trip/with-a-baby"
    },
    "title": {
      "fr": "Partir avec un bébé",
      "en": "Travelling with a baby"
    },
    "h1": {
      "fr": "Partir avec un bébé",
      "en": "Travelling with a baby"
    },
    "description": {
      "fr": "Partir avec un bébé : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Travelling with a baby: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "partir avec un bébé",
      "en": "travelling with a baby"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/pmr-accessibilite",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/pmr-accessibilite",
      "en": "plan-your-trip/accessibility"
    },
    "title": {
      "fr": "Accessibilité PMR",
      "en": "Accessibility (reduced mobility)"
    },
    "h1": {
      "fr": "Accessibilité PMR",
      "en": "Accessibility (reduced mobility)"
    },
    "description": {
      "fr": "Accessibilité PMR : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Accessibility (reduced mobility): the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "accessibilité pmr",
      "en": "accessibility (reduced mobility)"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/budget-vacances",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/budget-vacances",
      "en": "plan-your-trip/trip-budget"
    },
    "title": {
      "fr": "Budget vacances sur l'Île de Ré",
      "en": "Holiday budget for Île de Ré"
    },
    "h1": {
      "fr": "Budget vacances sur l'Île de Ré",
      "en": "Holiday budget for Île de Ré"
    },
    "description": {
      "fr": "Budget vacances sur l'Île de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Holiday budget for Île de Ré: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "budget vacances sur l'île de ré",
      "en": "holiday budget for île de ré"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/que-mettre-dans-la-valise",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/que-mettre-dans-la-valise",
      "en": "plan-your-trip/what-to-pack"
    },
    "title": {
      "fr": "Quoi emporter dans sa valise",
      "en": "What to pack"
    },
    "h1": {
      "fr": "Quoi emporter dans sa valise",
      "en": "What to pack"
    },
    "description": {
      "fr": "Quoi emporter dans sa valise : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "What to pack: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "quoi emporter dans sa valise",
      "en": "what to pack"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/meteo-marees-app",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/meteo-marees-app",
      "en": "plan-your-trip/weather-and-tides-apps"
    },
    "title": {
      "fr": "Apps utiles (marées, météo)",
      "en": "Useful apps (tides, weather)"
    },
    "h1": {
      "fr": "Apps utiles (marées, météo)",
      "en": "Useful apps (tides, weather)"
    },
    "description": {
      "fr": "Apps utiles (marées, météo) : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Useful apps (tides, weather): the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "apps utiles (marées, météo)",
      "en": "useful apps (tides, weather)"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/faq",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/faq",
      "en": "plan-your-trip/faq"
    },
    "title": {
      "fr": "Questions fréquentes sur l'Île de Ré",
      "en": "Île de Ré FAQ"
    },
    "h1": {
      "fr": "Questions fréquentes sur l'Île de Ré",
      "en": "Île de Ré FAQ"
    },
    "description": {
      "fr": "Questions fréquentes sur l'Île de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Île de Ré FAQ: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "questions fréquentes sur l'île de ré",
      "en": "île de ré faq"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "preparer/carte-de-lile",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": true,
    "slug": {
      "fr": "preparer/carte-de-lile",
      "en": "plan-your-trip/island-map"
    },
    "title": {
      "fr": "Carte interactive de l'Île de Ré",
      "en": "Interactive map of Île de Ré"
    },
    "h1": {
      "fr": "Carte interactive de l'Île de Ré",
      "en": "Interactive map of Île de Ré"
    },
    "description": {
      "fr": "Carte interactive de l'Île de Ré : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "Interactive map of Île de Ré: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "carte interactive de l'île de ré",
      "en": "interactive map of île de ré"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "preparer"
  },
  {
    "key": "preparer/glossaire-retais",
    "silo": "preparer",
    "template": "guide",
    "intent": "informationnel",
    "stay22": false,
    "slug": {
      "fr": "preparer/glossaire-retais",
      "en": "plan-your-trip/glossary"
    },
    "title": {
      "fr": "Petit lexique rétais",
      "en": "A little Ré glossary"
    },
    "h1": {
      "fr": "Petit lexique rétais",
      "en": "A little Ré glossary"
    },
    "description": {
      "fr": "Petit lexique rétais : l'essentiel à savoir et nos conseils pratiques, à jour, pour l'Île de Ré.",
      "en": "A little Ré glossary: the essentials and our practical, up-to-date tips for Île de Ré."
    },
    "targetKeyword": {
      "fr": "petit lexique rétais",
      "en": "a little ré glossary"
    },
    "related": [
      "preparer",
      "preparer/acces-pont",
      "preparer/depuis-la-rochelle",
      "preparer/depuis-paris",
      "preparer/en-train"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.5,
    "parent": "preparer"
  },
  {
    "key": "comparatifs/re-vs-oleron",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/re-vs-oleron",
      "en": "comparisons/re-vs-oleron"
    },
    "title": {
      "fr": "Île de Ré ou Oléron ?",
      "en": "Île de Ré or Oléron?"
    },
    "h1": {
      "fr": "Île de Ré ou Oléron ?",
      "en": "Île de Ré or Oléron?"
    },
    "description": {
      "fr": "Île de Ré ou Oléron ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Île de Ré or Oléron?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "île de ré ou oléron ?",
      "en": "île de ré or oléron?"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir",
      "comparatifs/nord-ou-sud-ile"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/re-vs-noirmoutier",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/re-vs-noirmoutier",
      "en": "comparisons/re-vs-noirmoutier"
    },
    "title": {
      "fr": "Ré ou Noirmoutier ?",
      "en": "Ré or Noirmoutier?"
    },
    "h1": {
      "fr": "Ré ou Noirmoutier ?",
      "en": "Ré or Noirmoutier?"
    },
    "description": {
      "fr": "Ré ou Noirmoutier ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Ré or Noirmoutier?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "ré ou noirmoutier ?",
      "en": "ré or noirmoutier?"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir",
      "comparatifs/nord-ou-sud-ile"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/re-vs-yeu",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "comparatifs/re-vs-yeu",
      "en": "comparisons/re-vs-yeu"
    },
    "title": {
      "fr": "Ré ou l'Île d'Yeu ?",
      "en": "Ré or Île d'Yeu?"
    },
    "h1": {
      "fr": "Ré ou l'Île d'Yeu ?",
      "en": "Ré or Île d'Yeu?"
    },
    "description": {
      "fr": "Ré ou l'Île d'Yeu ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Ré or Île d'Yeu?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "ré ou l'île d'yeu ?",
      "en": "ré or île d'yeu?"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/quel-village-choisir",
      "comparatifs/nord-ou-sud-ile"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/quel-village-choisir",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/quel-village-choisir",
      "en": "comparisons/which-village-to-choose"
    },
    "title": {
      "fr": "Quel village choisir selon son profil",
      "en": "Which village suits you"
    },
    "h1": {
      "fr": "Quel village choisir selon son profil",
      "en": "Which village suits you"
    },
    "description": {
      "fr": "Quel village choisir selon son profil : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Which village suits you: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "quel village choisir selon son profil",
      "en": "which village suits you"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/nord-ou-sud-ile"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/nord-ou-sud-ile",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/nord-ou-sud-ile",
      "en": "comparisons/north-or-south"
    },
    "title": {
      "fr": "Nord ou sud de l'île ?",
      "en": "North or south of the island?"
    },
    "h1": {
      "fr": "Nord ou sud de l'île ?",
      "en": "North or south of the island?"
    },
    "description": {
      "fr": "Nord ou sud de l'île ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "North or south of the island?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "nord ou sud de l'île ?",
      "en": "north or south of the island?"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/famille-vs-couple",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/famille-vs-couple",
      "en": "comparisons/family-vs-couple"
    },
    "title": {
      "fr": "Où séjourner selon son profil",
      "en": "Where to stay by traveller type"
    },
    "h1": {
      "fr": "Où séjourner selon son profil",
      "en": "Where to stay by traveller type"
    },
    "description": {
      "fr": "Où séjourner selon son profil : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Where to stay by traveller type: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "où séjourner selon son profil",
      "en": "where to stay by traveller type"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/le-plus-beau-village",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "comparatifs/le-plus-beau-village",
      "en": "comparisons/prettiest-village"
    },
    "title": {
      "fr": "Le plus beau village de Ré",
      "en": "The prettiest village on Ré"
    },
    "h1": {
      "fr": "Le plus beau village de Ré",
      "en": "The prettiest village on Ré"
    },
    "description": {
      "fr": "Le plus beau village de Ré : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "The prettiest village on Ré: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "le plus beau village de ré",
      "en": "the prettiest village on ré"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/ile-de-re-en-vaut-la-peine",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": false,
    "slug": {
      "fr": "comparatifs/ile-de-re-en-vaut-la-peine",
      "en": "comparisons/is-it-worth-it"
    },
    "title": {
      "fr": "L'Île de Ré vaut-elle le coup ?",
      "en": "Is Île de Ré worth it?"
    },
    "h1": {
      "fr": "L'Île de Ré vaut-elle le coup ?",
      "en": "Is Île de Ré worth it?"
    },
    "description": {
      "fr": "L'Île de Ré vaut-elle le coup ? : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "Is Île de Ré worth it?: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "l'île de ré vaut-elle le coup ?",
      "en": "is île de ré worth it?"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/le-plus-calme",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/le-plus-calme",
      "en": "comparisons/quietest-spot"
    },
    "title": {
      "fr": "Le coin le plus calme de l'île",
      "en": "The quietest spot on the island"
    },
    "h1": {
      "fr": "Le coin le plus calme de l'île",
      "en": "The quietest spot on the island"
    },
    "description": {
      "fr": "Le coin le plus calme de l'île : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "The quietest spot on the island: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "le coin le plus calme de l'île",
      "en": "the quietest spot on the island"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "comparatifs/le-plus-anime",
    "silo": "comparatifs",
    "template": "comparatif",
    "intent": "comparatif",
    "stay22": true,
    "slug": {
      "fr": "comparatifs/le-plus-anime",
      "en": "comparisons/liveliest-spot"
    },
    "title": {
      "fr": "Le coin le plus animé de l'île",
      "en": "The liveliest spot on the island"
    },
    "h1": {
      "fr": "Le coin le plus animé de l'île",
      "en": "The liveliest spot on the island"
    },
    "description": {
      "fr": "Le coin le plus animé de l'île : on compare honnêtement, critère par critère, pour vous aider à décider vite et bien.",
      "en": "The liveliest spot on the island: an honest, criteria-by-criteria comparison to help you decide quickly."
    },
    "targetKeyword": {
      "fr": "le coin le plus animé de l'île",
      "en": "the liveliest spot on the island"
    },
    "related": [
      "comparatifs",
      "ou-dormir",
      "comparatifs/re-vs-oleron",
      "comparatifs/re-vs-noirmoutier",
      "comparatifs/re-vs-yeu",
      "comparatifs/quel-village-choisir"
    ],
    "lastUpdated": "2026-06-22",
    "priority": 0.7,
    "geo": {
      "lat": 46.198,
      "lng": -1.42,
      "zoom": 11
    },
    "mapLabel": {
      "fr": "l'Île de Ré",
      "en": "Île de Ré"
    },
    "parent": "comparatifs"
  },
  {
    "key": "a-propos",
    "silo": "legal",
    "template": "legal",
    "intent": "navigation",
    "stay22": false,
    "slug": {
      "fr": "a-propos",
      "en": "about"
    },
    "title": {
      "fr": "À propos",
      "en": "About"
    },
    "h1": {
      "fr": "À propos",
      "en": "About"
    },
    "description": {
      "fr": "À propos.",
      "en": "About."
    },
    "targetKeyword": {
      "fr": "à propos",
      "en": "about"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.2
  },
  {
    "key": "affiliation",
    "silo": "legal",
    "template": "legal",
    "intent": "navigation",
    "stay22": false,
    "slug": {
      "fr": "affiliation",
      "en": "affiliate-disclosure"
    },
    "title": {
      "fr": "Affiliation et transparence",
      "en": "Affiliate disclosure"
    },
    "h1": {
      "fr": "Affiliation et transparence",
      "en": "Affiliate disclosure"
    },
    "description": {
      "fr": "Affiliation et transparence.",
      "en": "Affiliate disclosure."
    },
    "targetKeyword": {
      "fr": "affiliation et transparence",
      "en": "affiliate disclosure"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.2
  },
  {
    "key": "confidentialite",
    "silo": "legal",
    "template": "legal",
    "intent": "navigation",
    "stay22": false,
    "slug": {
      "fr": "confidentialite",
      "en": "privacy"
    },
    "title": {
      "fr": "Politique de confidentialité",
      "en": "Privacy policy"
    },
    "h1": {
      "fr": "Politique de confidentialité",
      "en": "Privacy policy"
    },
    "description": {
      "fr": "Politique de confidentialité.",
      "en": "Privacy policy."
    },
    "targetKeyword": {
      "fr": "politique de confidentialité",
      "en": "privacy policy"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.2
  },
  {
    "key": "mentions-legales",
    "silo": "legal",
    "template": "legal",
    "intent": "navigation",
    "stay22": false,
    "slug": {
      "fr": "mentions-legales",
      "en": "legal-notice"
    },
    "title": {
      "fr": "Mentions légales",
      "en": "Legal notice"
    },
    "h1": {
      "fr": "Mentions légales",
      "en": "Legal notice"
    },
    "description": {
      "fr": "Mentions légales.",
      "en": "Legal notice."
    },
    "targetKeyword": {
      "fr": "mentions légales",
      "en": "legal notice"
    },
    "related": [],
    "lastUpdated": "2026-06-22",
    "priority": 0.2
  }
];
