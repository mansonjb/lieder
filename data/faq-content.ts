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

// Parking advice varies by proximity to bridge and summer traffic volume
const PARKING_ADVICE: Record<string, { fr: string; en: string }> = {
  "rivedoux-plage":             { fr: "Rivedoux-Plage est la première commune après le pont — les parkings gratuits se trouvent à 500 m du centre. En juillet-août, préférez arriver avant 9h ou après 18h pour éviter les bouchons au pont.", en: "Rivedoux-Plage is the first village past the bridge — free car parks are 500 m from the centre. In July–August, arrive before 9am or after 6pm to avoid bridge queues." },
  "sainte-marie-de-re":        { fr: "Parkings gratuits en périphérie du village. En été, il est fortement recommandé de laisser la voiture et de terminer en vélo : la commune est saturée en juillet-août.", en: "Free car parks on the edge of the village. In summer, leaving the car and switching to bike is strongly recommended — the village is jammed in July–August." },
  "la-flotte":                 { fr: "Parking gratuit près du port (quelques minutes à pied du centre). En saison, le vieux port peut être congestionné — arrivée tôt le matin conseillée pour trouver une place face aux halles.", en: "Free parking near the harbour (a few minutes' walk from the centre). In season the old port gets busy — arriving early morning is the best strategy for a spot near the covered market." },
  "saint-martin-de-re":        { fr: "Le centre historique est quasi inaccessible en voiture en haute saison. Utilisez les parkings en couronne (gratuits à 10 min à pied) et terminez en vélo ou à pied dans les ruelles pavées.", en: "The historic centre is effectively car-free in high season. Use the ring car parks (free, 10 min walk) and cover the last stretch by bike or on foot through the cobbled streets." },
  "le-bois-plage-en-re":       { fr: "Plusieurs parkings gratuits en bordure du village. Les plages atlantiques disposent aussi de parkings proches, mais ils se remplissent dès 10h en été. Le vélo reste la meilleure option depuis le camping.", en: "Several free car parks on the village outskirts. Atlantic beach car parks fill up by 10am in summer. Cycling from the campsite is the most reliable option." },
  "la-couarde-sur-mer":        { fr: "La Couarde est bien desservie par les pistes cyclables — peu de stress de stationnement comparé à Saint-Martin ou Ars. Parkings gratuits disponibles en village et à proximité des plages.", en: "La Couarde is well connected by cycle paths — less parking pressure than Saint-Martin or Ars. Free parking available in the village and near the beaches." },
  "loix":                      { fr: "Loix est accessible par une seule route étroite traversant les marais — en été, la circulation est ralentie. Un parking est disponible à l'entrée du village ; les 10 min à vélo depuis la voie verte sont vivement recommandées.", en: "Loix is reached by a single narrow road through the marshes — traffic slows in summer. A car park sits at the village entrance; the 10-min cycle from the greenway is strongly recommended." },
  "ars-en-re":                 { fr: "Parking gratuit à l'entrée du village côté marais. Le cœur historique d'Ars est en zone piétonne en été — accès uniquement à pied ou à vélo depuis 10h. L'arrivée en vélo depuis La Couarde ou Loix est idéale.", en: "Free parking at the village entrance on the marsh side. Ars's historic core is pedestrianised in summer — access only on foot or by bike from 10am. Arriving by bike from La Couarde or Loix is ideal." },
  "les-portes-en-re":          { fr: "Les Portes est le village le plus éloigné du pont (30 km). Parkings gratuits disponibles mais limités en pleine saison. Depuis Le Bois-Plage ou La Couarde, prévoir 1h30 à vélo sur des pistes plates.", en: "Les Portes is the furthest village from the bridge (30 km). Free parking is available but limited in peak season. From Le Bois-Plage or La Couarde, allow 1.5h by bike on flat cycle paths." },
  "saint-clement-des-baleines":{ fr: "Parking gratuit à proximité du phare (150 m). En haute saison le parking du phare sature vite — arrivez tôt ou venez à vélo depuis Les Portes (10 min). L'accès en voiture depuis Ars prend 20 min hors embouteillages.", en: "Free parking near the lighthouse (150 m). In peak season the lighthouse car park fills fast — arrive early or cycle from Les Portes (10 min). Driving from Ars takes 20 min outside traffic." },
};

// Village character description using tags
const CHARACTER: Record<string, { q: { fr: string; en: string }; a: { fr: string; en: string } }> = {
  "rivedoux-plage": {
    q: { fr: "Quelle est l'ambiance de Rivedoux-Plage ?", en: "What is the atmosphere like in Rivedoux-Plage?" },
    a: { fr: "Rivedoux-Plage est la porte d'entrée de l'île — village de bord de mer sans prétention, avec un vrai port de pêche et des plages exposées au pertuis. L'ambiance y est plus locale et authentique que dans les villages touristiques de l'ouest. Idéal pour un séjour calme à deux pas du pont.", en: "Rivedoux-Plage is the island's gateway — an unfussy seaside village with a real fishing harbour and sheltered beaches. It has a more local, authentic feel than the tourist-heavy western villages. Perfect for a relaxed stay within easy reach of the bridge." },
  },
  "sainte-marie-de-re": {
    q: { fr: "Sainte-Marie-de-Ré est-elle animée en été ?", en: "Is Sainte-Marie-de-Ré lively in summer?" },
    a: { fr: "Sainte-Marie est l'une des communes les plus animées de l'île en haute saison : marchés quotidiens, animations en bord de mer, restaurants bondés. L'eau du pertuis y est particulièrement calme et peu profonde — paradis pour les familles avec enfants en bas âge. Hors juillet-août, le village retrouve une atmosphère bien plus paisible.", en: "Sainte-Marie is one of the liveliest communes in peak season: daily markets, beachfront events, packed restaurants. The sheltered Pertuis water is especially calm and shallow — a paradise for families with young children. Outside July–August, the village reverts to a much quieter pace." },
  },
  "la-flotte": {
    q: { fr: "Qu'est-ce qui fait le charme particulier de La Flotte ?", en: "What makes La Flotte so charming?" },
    a: { fr: "La Flotte combine trois atouts rares : un port de pêche encore actif (poisson frais du matin même), des halles médiévales du XIVe siècle pour le marché, et une architecture de village blanc labellisée « Plus Beau Village de France ». Les restaurants y servent parmi les meilleures huîtres et poissons de l'île — dont une table étoilée Michelin.", en: "La Flotte combines three rare assets: an active fishing harbour (that morning's fresh catch), a 14th-century covered market hall, and white village architecture earning the 'Most Beautiful Village in France' label. Restaurants here serve some of the island's finest oysters and fish — including a Michelin-starred table." },
  },
  "saint-martin-de-re": {
    q: { fr: "Pourquoi Saint-Martin-de-Ré est-il incontournable sur l'île ?", en: "Why is Saint-Martin-de-Ré unmissable on the island?" },
    a: { fr: "Saint-Martin est la capitale de l'île et son joyau architectural. Ses fortifications Vauban sont classées au Patrimoine mondial de l'UNESCO depuis 2008 — rares en France. Le port de plaisance animé, les ruelles pavées, le marché couvert des Halles et les boutiques en font le point de passage obligé de tout séjour. Prévoir au moins une demi-journée.", en: "Saint-Martin is the island's capital and architectural jewel. Its Vauban fortifications have been UNESCO World Heritage since 2008 — rare in France. The lively marina, cobbled lanes, Les Halles covered market and boutiques make it unmissable. Allow at least half a day." },
  },
  "le-bois-plage-en-re": {
    q: { fr: "Le Bois-Plage est-il le bon choix pour les amateurs de plages ?", en: "Is Le Bois-Plage the right choice for beach lovers?" },
    a: { fr: "Sans aucun doute : Le Bois-Plage possède le plus grand linéaire de plages atlantiques de l'île, avec 5 plages accessibles à vélo en moins de 10 minutes. Les vents d'ouest dominants attirent kite-surfeurs et véliplanchistes. Autour du village, les vignes AOC Pineau-des-Charentes offrent un dépaysement inattendu — plusieurs domaines ouvrent leurs portes à la visite.", en: "Without a doubt: Le Bois-Plage has the island's longest stretch of Atlantic beaches — 5 beaches within a 10-minute bike ride. The dominant westerly winds attract kitesurfers and windsurfers. The surrounding AOC Pineau-des-Charentes vineyards add an unexpected contrast — several estates open for visits." },
  },
  "la-couarde-sur-mer": {
    q: { fr: "Pourquoi choisir La Couarde-sur-Mer comme base de séjour ?", en: "Why choose La Couarde-sur-Mer as a base?" },
    a: { fr: "La Couarde est le village le mieux situé pour explorer toute l'île à vélo. Au carrefour géographique, elle donne accès en moins de 20 minutes à la côte atlantique, aux plages du pertuis, aux marais de Loix et au cœur historique de Saint-Martin. Le réseau de pistes cyclables principal la traverse directement. Idéal pour un séjour tout en vélo.", en: "La Couarde is the best-placed village for exploring the whole island by bike. At the geographical crossroads, it puts the Atlantic coast, sheltered beaches, Loix marshes and Saint-Martin's historic centre all within 20 minutes. The island's main cycle path runs straight through it. Ideal for a bike-centred stay." },
  },
  "loix": {
    q: { fr: "Loix mérite-t-il le détour ?", en: "Is Loix worth the detour?" },
    a: { fr: "Absolument. Loix est une presqu'île dans la presqu'île — accessible par une seule route traversant les marais salants. Village atypique, hors des flux touristiques majeurs, avec des cabanes ostréicoles authentiques, des paysages de marais à perte de vue et un calme rare même en plein août. L'Écomusée du marais salant, à 5 min à vélo, est l'un des sites les plus instructifs de l'île.", en: "Absolutely. Loix is a peninsula within the peninsula — reached by a single road through the salt marshes. An atypical village, off the main tourist flows, with authentic oyster shacks, endless marsh views and remarkable quiet even in August. The salt marsh ecomuseum, 5 min by bike, is one of the most interesting sites on the island." },
  },
  "ars-en-re": {
    q: { fr: "Qu'est-ce qui rend Ars-en-Ré si particulier ?", en: "What makes Ars-en-Ré so special?" },
    a: { fr: "Ars-en-Ré est l'autre « Plus Beau Village de France » de l'île, avec son clocher bicolore (blanc et noir) visible depuis la mer comme un repère pour les marins. Le village est entouré de marais salants et d'ostréiculture — des cabanes de dégustation d'huîtres fraîches longent les canaux. En été, le cœur piéton se vit à pied ou à vélo uniquement.", en: "Ars-en-Ré is the island's other 'Most Beautiful Village in France', with its distinctive bicolour steeple (white and black) visible from the sea as a sailor's landmark. The village is surrounded by salt marshes and oyster farms — fresh oyster tasting shacks line the canals. In summer the pedestrian centre is foot and bike only." },
  },
  "les-portes-en-re": {
    q: { fr: "Les Portes-en-Ré est-il vraiment différent des autres villages ?", en: "Is Les Portes-en-Ré really different from the other villages?" },
    a: { fr: "Les Portes est le village le plus préservé et le plus sauvage de l'île — à l'extrémité nord, loin du pont, avec des plages encore peu fréquentées et une forêt domaniale unique. L'ambiance y est résolument nature : pas de grande animation commerciale, juste des plages, des dunes, des pins et une lumière atlantique incomparable en fin de journée.", en: "Les Portes is the island's most unspoilt and wild village — at the northern tip, far from the bridge, with still-uncrowded beaches and a unique state forest. The atmosphere is resolutely natural: no major commercial scene, just beaches, dunes, pine trees and an unbeatable Atlantic light at day's end." },
  },
  "saint-clement-des-baleines": {
    q: { fr: "Que vaut vraiment Saint-Clément-des-Baleines ?", en: "What is Saint-Clément-des-Baleines really worth visiting for?" },
    a: { fr: "Saint-Clément abrite le Phare des Baleines — le plus haut phare de Charente-Maritime (57 m, 257 marches) — avec un panorama à 360° sur l'île et l'Atlantique depuis le sommet. À deux pas, le Parc animalier de l'Arche et la plage des Baleines complètent la visite. C'est le village le plus « bout du monde » de l'île, avant la frontière sauvage des Portes.", en: "Saint-Clément is home to the Phare des Baleines — the tallest lighthouse in Charente-Maritime (57 m, 257 steps) — with a 360° panorama over the island and the Atlantic from the top. Nearby, the Parc de l'Arche wildlife park and Plage des Baleines round out the visit. It's the island's most 'end of the world' village, before the wild frontier of Les Portes." },
  },
};

// Cycling distances between key village pairs (approximate, on island paths)
const CYCLING_INFO: Record<string, { fr: string; en: string }> = {
  "rivedoux-plage":             { fr: "Rivedoux-Plage est le point de départ naturel des itinéraires à vélo : 9 km jusqu'à La Flotte, 11 km jusqu'à Saint-Martin, et 36 km jusqu'aux Portes-en-Ré en bout d'île. Les pistes sont intégralement plates et balisées.", en: "Rivedoux-Plage is the natural starting point for bike routes: 9 km to La Flotte, 11 km to Saint-Martin, and 36 km to Les Portes-en-Ré at the far end. All paths are flat and well-signed." },
  "sainte-marie-de-re":        { fr: "Depuis Sainte-Marie, 7 km à vélo séparent La Flotte, 12 km Saint-Martin, et 5 km les plages des Grenettes et de la Cible. Toutes les pistes sont balisées et plates, sans difficulté.", en: "From Sainte-Marie, La Flotte is 7 km by bike, Saint-Martin 12 km, and the Grenettes and Cible beaches just 5 km. All paths are flat and well-marked." },
  "la-flotte":                 { fr: "La Flotte est à 3 km de Sainte-Marie, 6 km de Saint-Martin, et 22 km du Bois-Plage par la côte. Point idéal pour rayonner vers le port de Saint-Martin ou les vignes du Bois-Plage.", en: "La Flotte is 3 km from Sainte-Marie, 6 km from Saint-Martin, and 22 km from Le Bois-Plage along the coast. An ideal base for day rides to Saint-Martin's harbour or Le Bois-Plage's vineyards." },
  "saint-martin-de-re":        { fr: "Depuis Saint-Martin, comptez 6 km vers La Flotte, 5 km vers Le Bois-Plage, 9 km vers La Couarde et 21 km vers Ars. Toutes les grandes attractions de l'île sont accessibles en moins de 1h30 de vélo.", en: "From Saint-Martin: 6 km to La Flotte, 5 km to Le Bois-Plage, 9 km to La Couarde, 21 km to Ars. All the island's main sights are within 1h30 by bike." },
  "le-bois-plage-en-re":       { fr: "Le Bois-Plage est à 5 km de Saint-Martin, 6 km de La Couarde et 14 km d'Ars. Les 5 plages atlantiques du village sont toutes accessibles en 5 à 10 minutes à vélo depuis le centre.", en: "Le Bois-Plage is 5 km from Saint-Martin, 6 km from La Couarde, and 14 km from Ars. The village's 5 Atlantic beaches are all 5–10 minutes by bike from the centre." },
  "la-couarde-sur-mer":        { fr: "La Couarde est à 6 km du Bois-Plage, 9 km de Saint-Martin, 8 km de Loix et 9 km d'Ars — le village le mieux placé de l'île pour rayonner. En 1h30 de vélo, on peut faire le tour de la moitié de l'île.", en: "La Couarde is 6 km from Le Bois-Plage, 9 km from Saint-Martin, 8 km from Loix, and 9 km from Ars — the island's best-placed village for day trips. In 1h30 by bike you can cover half the island." },
  "loix":                      { fr: "Loix est à 8 km de La Couarde et 12 km d'Ars via la voie verte. La piste qui longe les marais salants depuis La Couarde est l'un des plus beaux itinéraires de l'île.", en: "Loix is 8 km from La Couarde and 12 km from Ars via the greenway. The path along the salt marshes from La Couarde is one of the island's most beautiful bike rides." },
  "ars-en-re":                 { fr: "Ars est à 9 km de La Couarde, 5 km de Loix, et 12 km de Saint-Clément. La boucle Ars–Loix–Couarde (25 km environ) est l'un des circuits les plus prisés, entre marais et pertuis.", en: "Ars is 9 km from La Couarde, 5 km from Loix, and 12 km from Saint-Clément. The Ars–Loix–Couarde loop (around 25 km) is one of the most popular rides, between marshes and the pertuis." },
  "les-portes-en-re":          { fr: "Les Portes est à 8 km de Saint-Clément et à 30 km du pont — l'extrémité de l'île. La boucle Les Portes–Saint-Clément–Ars (25 km) est un classique. La forêt domaniale des Portes se parcourt aussi à vélo sur des chemins balisés.", en: "Les Portes is 8 km from Saint-Clément and 30 km from the bridge — the island's far end. The Les Portes–Saint-Clément–Ars loop (25 km) is a classic. The state forest can also be explored on marked bike trails." },
  "saint-clement-des-baleines":{ fr: "Saint-Clément est à 8 km des Portes, 12 km d'Ars et 28 km du pont. La montée au phare (257 marches) peut s'intégrer dans une boucle vers Les Portes à vélo — compter 20 km pour la boucle aller-retour phare + plage des Baleines.", en: "Saint-Clément is 8 km from Les Portes, 12 km from Ars, and 28 km from the bridge. The lighthouse climb (257 steps) fits naturally into a bike loop towards Les Portes — allow 20 km for the round-trip lighthouse + Baleines beach loop." },
};

export function getVillageFaqs(slug: string, locale: Locale): FaqItem[] {
  const meta = VILLAGE_META[slug];
  const names = VILLAGE_DISPLAY[slug];
  if (!meta || !names) return [];

  const vn = locale === "fr" ? names.fr : names.en;
  const faqs: FaqItem[] = [];

  // 1. Distance / temps depuis le pont
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

  // 2. Ambiance / caractère du village
  const char = CHARACTER[slug];
  if (char) {
    faqs.push({
      q: locale === "fr" ? char.q.fr : char.q.en,
      a: locale === "fr" ? char.a.fr : char.a.en,
    });
  }

  // 3. Marché
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

  // 4. Plages accessibles
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

  // 5. Stationnement
  const parking = PARKING_ADVICE[slug];
  if (parking) {
    faqs.push({
      q: locale === "fr" ? `Peut-on se garer facilement à ${vn} en été ?` : `Is parking easy in ${vn} in summer?`,
      a: locale === "fr" ? parking.fr : parking.en,
    });
  }

  // 6. Itinéraires vélo depuis le village
  const cycling = CYCLING_INFO[slug];
  if (cycling) {
    faqs.push({
      q: locale === "fr"
        ? `Quels itinéraires à vélo partir depuis ${vn} ?`
        : `What cycling routes are there from ${vn}?`,
      a: locale === "fr" ? cycling.fr : cycling.en,
    });
  }

  // 7. Plus Beau Village label
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

  // 8. Restaurants
  if (meta.restaurantPicks?.length) {
    const picks = meta.restaurantPicks.slice(0, 3);
    faqs.push(
      locale === "fr"
        ? {
            q: `Où manger à ${vn} ?`,
            a: `Parmi les meilleures adresses de ${vn} : ${picks.map((r) => `${r.name} (${r.tag.fr}, ${r.price})`).join(", ")}. Le marché local reste aussi un excellent moyen de composer un repas avec les produits du terroir — huîtres, pommes de terre de Ré et fleur de sel en tête.`,
          }
        : {
            q: `Where to eat in ${vn}?`,
            a: `Some of the best spots in ${vn}: ${picks.map((r) => `${r.name} (${r.tag.en}, ${r.price})`).join(", ")}. The local market is also an excellent way to put together a meal with island produce — oysters, Ré potatoes and fleur de sel leading the way.`,
          }
    );
  }

  // 9. Hébergements
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
      q: "Peut-on venir sur l'Île de Ré sans voiture ?",
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
