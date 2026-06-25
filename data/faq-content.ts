import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";

export type FaqItem = { q: string; a: string };

const VILLAGE_DISPLAY: Record<string, { fr: string; en: string }> = {
  "rivedoux-plage":             { fr: "Rivedoux-Plage",             en: "Rivedoux-Plage"             },
  "sainte-marie-de-re":        { fr: "Sainte-Marie-de-Ré",         en: "Sainte-Marie-de-Ré"         },
  "la-flotte":                 { fr: "La Flotte",                  en: "La Flotte"                  },
  "saint-martin-de-re":        { fr: "Saint-Martin-de-Ré",         en: "Saint-Martin-de-Ré"         },
  "le-bois-plage-en-re":       { fr: "Le Bois-Plage",              en: "Le Bois-Plage"              },
  "la-couarde-sur-mer":        { fr: "La Couarde-sur-Mer",         en: "La Couarde-sur-Mer"         },
  "loix":                      { fr: "Loix",                       en: "Loix"                       },
  "ars-en-re":                 { fr: "Ars-en-Ré",                  en: "Ars-en-Ré"                  },
  "les-portes-en-re":          { fr: "Les Portes-en-Ré",           en: "Les Portes-en-Ré"           },
  "saint-clement-des-baleines":{ fr: "Saint-Clément-des-Baleines", en: "Saint-Clément-des-Baleines" },
};

export function getVillageFaqs(slug: string, locale: Locale): FaqItem[] {
  const meta = VILLAGE_META[slug];
  const names = VILLAGE_DISPLAY[slug];
  if (!meta || !names) return [];

  const vn = locale === "fr" ? names.fr : names.en;
  const faqs: FaqItem[] = [];

  if (meta.distancePontKm) {
    faqs.push(
      locale === "fr"
        ? {
            q: `Combien de temps pour rejoindre ${vn} depuis le pont ?`,
            a: `${vn} se trouve à ${meta.distancePontKm} km du pont de l'Île de Ré — environ ${Math.round(meta.distancePontKm * 1.8)} à ${Math.round(meta.distancePontKm * 2.2)} minutes à vélo sur les pistes cyclables, ou 15 à 25 minutes en voiture hors période estivale.`,
          }
        : {
            q: `How long does it take to reach ${vn} from the bridge?`,
            a: `${vn} is ${meta.distancePontKm} km from the bridge — around ${Math.round(meta.distancePontKm * 1.8)}–${Math.round(meta.distancePontKm * 2.2)} minutes by bike on the cycle paths, or 15–25 minutes by car outside summer.`,
          }
    );
  }

  if (meta.marketDay) {
    faqs.push(
      locale === "fr"
        ? {
            q: `Y a-t-il un marché à ${vn} ?`,
            a: `Oui, ${vn} tient son marché ${meta.marketDay.fr}. C'est le meilleur endroit pour trouver huîtres de l'île, sel de Ré, pommes de terre primeurs et produits artisanaux locaux.`,
          }
        : {
            q: `Is there a market in ${vn}?`,
            a: `Yes, ${vn} holds its market ${meta.marketDay.en}. The best place to find island oysters, Ré salt, early potatoes and local artisan goods.`,
          }
    );
  }

  if (meta.beachCount) {
    faqs.push(
      locale === "fr"
        ? {
            q: `Quelles plages peut-on rejoindre depuis ${vn} à vélo ?`,
            a: `${vn} donne accès à ${meta.beachCount} plage${meta.beachCount > 1 ? "s" : ""} en quelques minutes à vélo. L'île de Ré compte 100 km de pistes cyclables plates — toutes les plages sont accessibles sans voiture, même depuis les villages du centre.`,
          }
        : {
            q: `Which beaches are reachable from ${vn} by bike?`,
            a: `${vn} gives access to ${meta.beachCount} beach${meta.beachCount > 1 ? "es" : ""} in just a few minutes by bike. Île de Ré has 100 km of flat cycle paths — all beaches are reachable without a car, even from central villages.`,
          }
    );
  }

  if (meta.pbeauVillage) {
    faqs.push(
      locale === "fr"
        ? {
            q: `${vn} est-il vraiment un "Plus Beau Village de France" ?`,
            a: `Oui, ${vn} porte officiellement ce label, accordé à moins de 200 communes en France entière. Il reconnaît la qualité architecturale, patrimoniale et paysagère du village. Sur l'Île de Ré, seuls ${vn} et l'autre village labellisé partagent cette distinction.`,
          }
        : {
            q: `Is ${vn} really one of France's "Most Beautiful Villages"?`,
            a: `Yes, ${vn} officially holds the Plus Beau Village de France label, awarded to fewer than 200 communes across all of France. It recognises outstanding architecture, heritage and landscape. On Île de Ré, only two villages share this distinction.`,
          }
    );
  }

  if (meta.accommodationPicks?.length) {
    faqs.push(
      locale === "fr"
        ? {
            q: `Où dormir à ${vn} ?`,
            a: `${vn} propose plusieurs types d'hébergements : ${meta.accommodationPicks.map((a) => `${a.name} (${a.type.fr}, ${a.price})`).join(", ")}. La carte interactive ci-dessous recense toutes les disponibilités en temps réel.`,
          }
        : {
            q: `Where to stay in ${vn}?`,
            a: `${vn} offers several accommodation types: ${meta.accommodationPicks.map((a) => `${a.name} (${a.type.en}, ${a.price})`).join(", ")}. The interactive map below shows all real-time availability.`,
          }
    );
  }

  return faqs;
}

export const OU_DORMIR_FAQS: Record<Locale, FaqItem[]> = {
  fr: [
    {
      q: "Faut-il réserver longtemps à l'avance pour l'Île de Ré ?",
      a: "Pour juillet-août, oui — locations et campings se réservent dès janvier-février. En haute saison il ne reste pratiquement rien à partir de mai. Hors saison (mai-juin ou septembre) les disponibilités sont bien meilleures et les tarifs plus doux.",
    },
    {
      q: "Quel village est le mieux placé pour visiter toute l'île ?",
      a: "Saint-Martin-de-Ré est le plus central et le mieux desservi. Le Bois-Plage-en-Ré est idéal pour les amateurs de plages atlantiques. Ars-en-Ré et Les Portes conviennent à ceux qui cherchent le calme du nord de l'île.",
    },
    {
      q: "Camping ou location : que choisir pour l'Île de Ré ?",
      a: "Le camping est populaire et moins cher, avec des 5 étoiles comme Les Ilates (Les Portes) ou La Tour des Prises (Le Bois-Plage). Les locations en gîte ou maison sont plus confortables mais souvent louées à la semaine. Les deux coexistent bien sur l'île.",
    },
    {
      q: "Y a-t-il des hébergements de luxe sur l'Île de Ré ?",
      a: "Oui, principalement à Saint-Martin-de-Ré : l'Hôtel de Toiras (Relais & Châteaux, 5★) est la référence. La Flotte propose l'Hôtel Le Richelieu (4★, face à la mer). Ces établissements se réservent 6 à 12 mois à l'avance pour l'été.",
    },
    {
      q: "Peut-on venir à l'Île de Ré sans voiture ?",
      a: "Oui, et c'est recommandé en été. Le vélo est le meilleur moyen de se déplacer grâce aux 100 km de pistes cyclables. Des locations de vélos sont disponibles dès l'arrivée. Des navettes estivales relient également les villages entre eux.",
    },
  ],
  en: [
    {
      q: "How far in advance should I book for Île de Ré?",
      a: "For July–August, very early — rentals and campsites fill from January–February. By May there is almost nothing left in high season. Off-season (May–June or September) availability is much better and prices more affordable.",
    },
    {
      q: "Which village is best placed to explore the whole island?",
      a: "Saint-Martin-de-Ré is the most central and best-connected village. Le Bois-Plage is ideal for Atlantic beach lovers. Ars-en-Ré and Les Portes suit those seeking the tranquillity of the island's north.",
    },
    {
      q: "Camping or holiday rental: which is better for Île de Ré?",
      a: "Camping is popular and cheaper, with 5-star sites such as Les Ilates (Les Portes) or La Tour des Prises (Le Bois-Plage). Gîte or house rentals are more comfortable but are usually let by the week. Both work well on the island.",
    },
    {
      q: "Are there luxury accommodations on Île de Ré?",
      a: "Yes, mainly in Saint-Martin-de-Ré: Hôtel de Toiras (Relais & Châteaux, 5★) is the benchmark. La Flotte has Hôtel Le Richelieu (4★, seafront). Both must be booked 6–12 months in advance for summer.",
    },
    {
      q: "Can I visit Île de Ré without a car?",
      a: "Yes, and it's actually recommended in summer. Cycling is the best way around thanks to 100 km of flat cycle paths. Bike hire is available on arrival. Seasonal shuttles also connect the villages.",
    },
  ],
};
