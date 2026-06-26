export type BeachTag =
  | "familiale"
  | "surf"
  | "sauvage"
  | "surveillee"
  | "kitesurf"
  | "naturiste"
  | "chiens"
  | "parking"
  | "pmr"
  | "foret"
  | "phare"
  | "dunes";

export type BeachMeta = {
  commune: string; // slug de la commune la plus proche
  exposition: "atlantique" | "pertuis";
  longueur: string; // "500 m", "1,5 km", etc.
  baignade: "surveillee" | "libre";
  tags: BeachTag[];
  goodToKnow: { fr: string; en: string }[];
  lat: number;
  lng: number;
};

// Labels display pour les tags
export const TAG_LABELS: Record<BeachTag, { fr: string; en: string; icon: string }> = {
  familiale:   { fr: "Familiale",          en: "Family-friendly",     icon: "👨‍👩‍👧" },
  surf:        { fr: "Surf",               en: "Surfing",             icon: "🏄" },
  sauvage:     { fr: "Plage sauvage",      en: "Wild beach",          icon: "🌿" },
  surveillee:  { fr: "Surveillée (été)",   en: "Lifeguard (summer)",  icon: "🦺" },
  kitesurf:    { fr: "Kitesurf / Wind",    en: "Kitesurfing / Wind",  icon: "🪁" },
  naturiste:   { fr: "Zone naturiste",     en: "Naturist section",    icon: "🌞" },
  chiens:      { fr: "Chiens bienvenus",   en: "Dogs welcome",        icon: "🐕" },
  parking:     { fr: "Parking proche",     en: "Parking nearby",      icon: "🅿️" },
  pmr:         { fr: "Accès PMR",          en: "Accessible",          icon: "♿" },
  foret:       { fr: "Arrière-forêt",      en: "Forest backdrop",     icon: "🌲" },
  phare:       { fr: "Vue phare",          en: "Lighthouse view",     icon: "🔭" },
  dunes:       { fr: "Dunes",              en: "Sand dunes",          icon: "🏜" },
};

export const BEACH_META: Record<string, BeachMeta> = {
  "sablanceaux": {
    commune: "rivedoux-plage",
    lat: 46.1534, lng: -1.2778,
    exposition: "pertuis",
    longueur: "600 m",
    baignade: "libre",
    tags: ["familiale", "parking"],
    goodToKnow: [
      { fr: "Première plage de l'île en venant du continent — pratique pour un arrêt rapide ou un pique-nique", en: "First beach on the island from the mainland — handy for a quick stop or picnic" },
      { fr: "Vents d'est parfois forts et courants à respecter malgré l'eau calme — moins sécurisé que les plages de Sainte-Marie", en: "Easterly winds and currents despite the calm-looking water — less sheltered than Sainte-Marie beaches" },
      { fr: "Le parking du Bois-Fleuri est le plus proche — les vélos fonctionnent mieux que la voiture en été", en: "The Bois-Fleuri car park is nearest — bikes work better than cars in summer" },
    ],
  },
  "rivedoux-nord": {
    commune: "rivedoux-plage",
    lat: 46.1612, lng: -1.2742,
    exposition: "pertuis",
    longueur: "400 m",
    baignade: "surveillee",
    tags: ["familiale", "surveillee", "pmr", "parking"],
    goodToKnow: [
      { fr: "La plage la plus surveillée de Rivedoux — idéale avec des enfants en bas âge", en: "The most lifeguarded beach in Rivedoux — ideal with young children" },
      { fr: "Eau peu profonde, idéale pour les enfants ; la marée basse découvre de larges zones de sable et de rochers", en: "Shallow water ideal for children; low tide reveals large stretches of sand and rock pools" },
      { fr: "Le bord de mer de Rivedoux est accessible à vélo depuis le pont en moins de 10 minutes", en: "Rivedoux seafront is reachable by bike from the bridge in under 10 minutes" },
    ],
  },
  "rivedoux-sud": {
    commune: "rivedoux-plage",
    lat: 46.1573, lng: -1.2724,
    exposition: "pertuis",
    longueur: "300 m",
    baignade: "libre",
    tags: ["chiens", "familiale"],
    goodToKnow: [
      { fr: "Secteur plus tranquille que la plage nord — fréquenté par les habitants plutôt que les touristes de passage", en: "Quieter than the north beach — frequented more by locals than passing tourists" },
      { fr: "Chiens admis sur cette portion en été, contrairement à Rivedoux-Nord", en: "Dogs allowed on this stretch in summer, unlike Rivedoux-Nord" },
      { fr: "La marée descendante découvre une estran rocheuse intéressante pour la pêche à pied", en: "Low tide reveals rock pools well-suited to shore fishing" },
    ],
  },
  "les-grenettes": {
    commune: "sainte-marie-de-re",
    lat: 46.1564, lng: -1.2984,
    exposition: "pertuis",
    longueur: "1,2 km",
    baignade: "surveillee",
    tags: ["familiale", "surveillee", "pmr", "parking"],
    goodToKnow: [
      { fr: "Eau peu profonde et calme, orientée est — la mer se réchauffe rapidement et convient parfaitement aux enfants", en: "Shallow, calm east-facing water — warms up quickly and perfect for children" },
      { fr: "La plage la plus fréquentée de Sainte-Marie en été : arrivez avant 10h ou après 17h pour trouver de la place", en: "Sainte-Marie's most popular beach in summer — arrive before 10am or after 5pm for space" },
      { fr: "Location de kayaks et de paddles sur la plage en juillet-août", en: "Kayak and paddleboard hire on the beach in July-August" },
    ],
  },
  "la-clouse": {
    commune: "sainte-marie-de-re",
    lat: 46.1633, lng: -1.3075,
    exposition: "pertuis",
    longueur: "400 m",
    baignade: "libre",
    tags: ["chiens", "familiale"],
    goodToKnow: [
      { fr: "Plage discrète entre Sainte-Marie et La Flotte, moins connue des touristes de passage", en: "A low-key beach between Sainte-Marie and La Flotte, less known to passing tourists" },
      { fr: "Fond sableux et eau calme — adaptée à la baignade tranquille hors des grandes plages surveillées", en: "Sandy bottom and calm water — good for swimming away from the main supervised beaches" },
      { fr: "Chiens admis, ce qui en fait une alternative appréciée en haute saison", en: "Dogs welcome, making it a popular alternative in high season" },
    ],
  },
  "arnerault": {
    commune: "sainte-marie-de-re",
    lat: 46.1693, lng: -1.3178,
    exposition: "pertuis",
    longueur: "600 m",
    baignade: "libre",
    tags: ["chiens", "dunes"],
    goodToKnow: [
      { fr: "Plage naturelle moins aménagée que les plages de Sainte-Marie — peu de services, beaucoup de tranquillité", en: "A more natural beach than Sainte-Marie's main beaches — few services, lots of peace" },
      { fr: "Les dunes au nord offrent un beau cadre pour s'isoler du vent", en: "The northern dunes offer natural shelter from the wind" },
      { fr: "Accessible à vélo depuis Sainte-Marie-de-Ré en 10 minutes par les pistes cyclables", en: "Reachable by bike from Sainte-Marie-de-Ré in 10 minutes via the cycle paths" },
    ],
  },
  "la-cible": {
    commune: "la-flotte",
    lat: 46.1805, lng: -1.3208,
    exposition: "pertuis",
    longueur: "700 m",
    baignade: "libre",
    tags: ["dunes", "sauvage"],
    goodToKnow: [
      { fr: "Plage entre La Flotte et Saint-Martin, accessible depuis les deux villages à vélo — idéale en itinéraire", en: "Beach between La Flotte and Saint-Martin, reachable by bike from either village" },
      { fr: "Les dunes offrent un bel espace naturel, peu aménagé — pas de commerces sur place", en: "The dunes provide a natural setting with no commercial infrastructure on site" },
      { fr: "Quelques rochers à marée basse : privilégiez la marée haute pour une baignade confortable", en: "Some rocks visible at low tide — high tide is better for comfortable swimming" },
    ],
  },
  "les-gollandieres": {
    commune: "le-bois-plage-en-re",
    lat: 46.2051, lng: -1.3638,
    exposition: "atlantique",
    longueur: "1,2 km",
    baignade: "surveillee",
    tags: ["surf", "kitesurf", "surveillee", "dunes", "parking"],
    goodToKnow: [
      { fr: "Le meilleur spot de surf et de kitesurf du secteur du Bois-Plage — vent régulier et houle atlantique", en: "The best surf and kite spot around Le Bois-Plage — consistent wind and Atlantic swell" },
      { fr: "Surveillée en juillet-août mais les conditions peuvent être vives — pas recommandée pour les très jeunes enfants", en: "Lifeguarded July-August but conditions can be rough — not ideal for very young children" },
      { fr: "Plusieurs écoles de surf et de kitesurf opèrent sur ou près de cette plage en saison", en: "Several surf and kite schools operate on or near this beach in season" },
    ],
  },
  "le-gros-jonc": {
    commune: "le-bois-plage-en-re",
    lat: 46.1776, lng: -1.4078,
    exposition: "atlantique",
    longueur: "1,5 km",
    baignade: "surveillee",
    tags: ["familiale", "surveillee", "surf", "parking", "pmr"],
    goodToKnow: [
      { fr: "La plus grande plage surveillée de la côte atlantique de l'île — postes de secours, douches, location de matériel", en: "The largest lifeguarded beach on the island's Atlantic coast — first aid, showers, equipment hire" },
      { fr: "Houle et courants présents : les baigneurs doivent respecter les zones balisées", en: "Swell and currents are present — swimmers should stay within the flagged zones" },
      { fr: "Le parking est payant en juillet-août ; venez à vélo depuis Le Bois-Plage ou Sainte-Marie", en: "Paid parking July-August — cycling from Le Bois-Plage or Sainte-Marie is easier" },
    ],
  },
  "le-petit-sergent": {
    commune: "le-bois-plage-en-re",
    lat: 46.1810, lng: -1.4147,
    exposition: "atlantique",
    longueur: "500 m",
    baignade: "libre",
    tags: ["surf", "sauvage"],
    goodToKnow: [
      { fr: "Alternative plus tranquille au Gros Jonc — mêmes conditions atlantiques mais bien moins fréquentée", en: "A quieter alternative to Gros Jonc — same Atlantic conditions but far less crowded" },
      { fr: "Non surveillée : eau vive et courants, uniquement pour les nageurs confirmés", en: "Unlifeguarded: lively water and currents — for confident swimmers only" },
      { fr: "Accès par le chemin depuis le parking du Gros Jonc, ou directement à vélo", en: "Access via the path from Gros Jonc car park, or directly by bike" },
    ],
  },
  "le-peu-ragot": {
    commune: "la-couarde-sur-mer",
    lat: 46.1938, lng: -1.4275,
    exposition: "atlantique",
    longueur: "800 m",
    baignade: "libre",
    tags: ["sauvage", "dunes"],
    goodToKnow: [
      { fr: "Plage sauvage et peu balisée — vent souvent fort et courants sensibles, eau atlantique non surveillée", en: "Wild and little-marked — often windy with noticeable currents, unlifeguarded Atlantic water" },
      { fr: "Les dunes derrière la plage forment un beau paysage naturel, accessible à pied depuis La Couarde", en: "The dunes behind the beach form a fine natural landscape, accessible on foot from La Couarde" },
      { fr: "Peu de services sur place — emportez de l'eau et du soleil, les ombrages sont rares", en: "Few services on site — bring water and sunscreen, shade is scarce" },
    ],
  },
  "les-prises": {
    commune: "la-couarde-sur-mer",
    lat: 46.1988, lng: -1.4445,
    exposition: "atlantique",
    longueur: "600 m",
    baignade: "libre",
    tags: ["sauvage", "chiens"],
    goodToKnow: [
      { fr: "Plage naturelle de La Couarde, fréquentée surtout par les campeurs et les cyclistes locaux", en: "Natural beach at La Couarde, mainly frequented by campers and local cyclists" },
      { fr: "Chiens admis, ce qui en fait une option appréciée en juillet-août quand les grandes plages les interdisent", en: "Dogs welcome, making it a handy option in July-August when larger beaches ban them" },
      { fr: "Accès direct depuis la piste cyclable principale de l'île", en: "Direct access from the island's main cycle path" },
    ],
  },
  "la-pergola": {
    commune: "la-couarde-sur-mer",
    lat: 46.1965, lng: -1.4389,
    exposition: "atlantique",
    longueur: "500 m",
    baignade: "libre",
    tags: ["sauvage"],
    goodToKnow: [
      { fr: "L'une des plages les moins fréquentées du secteur de La Couarde — calme même en plein mois d'août", en: "One of the least frequented beaches in the La Couarde area — quiet even at peak August" },
      { fr: "Accès par un chemin sableux depuis la route — préférez le vélo à la voiture", en: "Access via a sandy track from the road — bike preferred over car" },
      { fr: "Pas de service, pas de poste de secours — mer atlantique à respecter", en: "No services, no lifeguard post — treat the Atlantic water with care" },
    ],
  },
  "la-benaie": {
    commune: "la-couarde-sur-mer",
    lat: 46.1952, lng: -1.4230,
    exposition: "pertuis",
    longueur: "700 m",
    baignade: "libre",
    tags: ["sauvage", "chiens", "dunes"],
    goodToKnow: [
      { fr: "Plage du côté pertuis, abritée du vent dominant — eau plus calme que les plages atlantiques voisines", en: "On the sheltered pertuis side — calmer water than the nearby Atlantic beaches" },
      { fr: "Vue sur les marais salants et le continent au loin — paysage différent des plages atlantiques", en: "Views over salt marshes and the distant mainland — a different landscape from Atlantic beaches" },
      { fr: "Chiens admis ; peu de services sur place", en: "Dogs welcome; few services on site" },
    ],
  },
  "le-goisil": {
    commune: "la-couarde-sur-mer",
    lat: 46.2158, lng: -1.4356,
    exposition: "pertuis",
    longueur: "500 m",
    baignade: "libre",
    tags: ["chiens", "sauvage"],
    goodToKnow: [
      { fr: "Plage peu connue au cœur de l'île, dans l'anse entre La Couarde et Loix — calme et naturelle", en: "A little-known beach at the island's heart, in the cove between La Couarde and Loix" },
      { fr: "Eau du pertuis : calme, peu profonde, bien adaptée aux enfants et aux nageurs débutants", en: "Sheltered pertuis water: calm, shallow, well-suited to children and beginner swimmers" },
      { fr: "Accessible à vélo depuis Loix ou La Couarde, sans traverser de zone de circulation automobile", en: "Reachable by bike from Loix or La Couarde without crossing any traffic zones" },
    ],
  },
  "la-salee": {
    commune: "loix",
    lat: 46.2322, lng: -1.4387,
    exposition: "pertuis",
    longueur: "400 m",
    baignade: "libre",
    tags: ["sauvage", "chiens"],
    goodToKnow: [
      { fr: "Plage typique de la côte pertuis de Loix — marais salants visibles depuis la plage, ambiance authentique", en: "A typical pertuis beach at Loix — salt marshes visible from the shoreline, authentic atmosphere" },
      { fr: "Eau calme et peu profonde, fond sableux — baignade facile même pour les petits", en: "Calm, shallow water with a sandy bottom — easy swimming even for small children" },
      { fr: "L'Écomusée du marais salant de Loix est à 5 minutes à vélo — à combiner", en: "Loix salt marsh ecomuseum is 5 minutes by bike — worth combining the two" },
    ],
  },
  "le-boutillon": {
    commune: "loix",
    lat: 46.2377, lng: -1.4440,
    exposition: "pertuis",
    longueur: "500 m",
    baignade: "libre",
    tags: ["sauvage", "chiens"],
    goodToKnow: [
      { fr: "Plage au bout de la presqu'île de Loix — calme et peu fréquentée, vue sur le Fier d'Ars", en: "Beach at the tip of the Loix peninsula — quiet, little-visited, views over the Fier d'Ars" },
      { fr: "Eau du pertuis : pas de vagues, faible profondeur, fond vaseux dans certains secteurs", en: "Pertuis water: no waves, shallow, muddy bottom in some spots" },
      { fr: "Paysage de marais salants et chenaux caractéristique de la presqu'île de Loix", en: "Salt marsh and channel landscape typical of the Loix peninsula" },
    ],
  },
  "la-loge": {
    commune: "loix",
    lat: 46.2251, lng: -1.4516,
    exposition: "pertuis",
    longueur: "400 m",
    baignade: "libre",
    tags: ["sauvage"],
    goodToKnow: [
      { fr: "Petite plage naturelle entre Loix et Ars-en-Ré — peu signalée, à trouver à vélo", en: "A small natural beach between Loix and Ars-en-Ré — little signposted, best found by bike" },
      { fr: "Fond calme et vaseux caractéristique de la côte pertuis — à privilégier à marée haute", en: "Calm, silty bottom typical of the pertuis coast — best at high tide" },
      { fr: "Ambiance très locale, peu touristique même en pleine saison", en: "Very local feel, not touristy even in peak season" },
    ],
  },
  "le-marchais": {
    commune: "ars-en-re",
    lat: 46.2145, lng: -1.4873,
    exposition: "pertuis",
    longueur: "600 m",
    baignade: "libre",
    tags: ["sauvage", "chiens", "dunes"],
    goodToKnow: [
      { fr: "Plage naturelle entre les marais salants d'Ars et le Fier d'Ars — paysage caractéristique du nord de l'île", en: "Natural beach between the Ars salt marshes and the Fier d'Ars — characteristic north island landscape" },
      { fr: "L'accès se fait à vélo depuis Ars-en-Ré par le chemin des marais — 10 minutes de piste", en: "Access by bike from Ars-en-Ré along the marsh path — 10 minutes cycling" },
      { fr: "Vue imprenable sur le Fier d'Ars et les flamants roses qui s'y nourrissent en automne", en: "Views over the Fier d'Ars and the flamingos that feed there in autumn" },
    ],
  },
  "le-lizay": {
    commune: "ars-en-re",
    lat: 46.2173, lng: -1.5238,
    exposition: "atlantique",
    longueur: "1 km",
    baignade: "libre",
    tags: ["sauvage", "dunes"],
    goodToKnow: [
      { fr: "Plage sauvage sur la côte atlantique d'Ars-en-Ré, dans la continuité des grandes plages naturelles du nord de l'île", en: "Wild beach on the Ars-en-Ré Atlantic coast, continuing the string of natural beaches along the island's north" },
      { fr: "Accès par chemin sableux depuis Ars — préférez le vélo, la voiture doit se garer à distance", en: "Access via a sandy track from Ars — bike preferred, cars must park some distance away" },
      { fr: "Peu ou pas de services — apportez tout le nécessaire", en: "Few or no services on site — bring everything you need" },
    ],
  },
  "le-petit-bec": {
    commune: "ars-en-re",
    lat: 46.2296, lng: -1.5621,
    exposition: "atlantique",
    longueur: "400 m",
    baignade: "libre",
    tags: ["sauvage"],
    goodToKnow: [
      { fr: "Petite plage sauvage entre Ars-en-Ré et Les Portes — peu fréquentée et difficile d'accès hors vélo", en: "Small wild beach between Ars-en-Ré and Les Portes — little visited and hard to reach except by bike" },
      { fr: "Conditions atlantiques sans surveillance : réservé aux nageurs expérimentés", en: "Atlantic conditions with no lifeguard — for experienced swimmers only" },
      { fr: "L'un des rares spots qui reste vraiment sauvage même en plein mois d'août", en: "One of the few spots that remains genuinely wild even in mid-August" },
    ],
  },
  "la-redoute": {
    commune: "ars-en-re",
    lat: 46.2225, lng: -1.5097,
    exposition: "atlantique",
    longueur: "1 km",
    baignade: "libre",
    tags: ["sauvage", "dunes", "chiens"],
    goodToKnow: [
      { fr: "Grande plage naturelle au nord-ouest d'Ars-en-Ré — vent souvent présent, idéal pour le cerf-volant et le char à voile", en: "Large natural beach north-west of Ars-en-Ré — often windy, ideal for kite flying and land yachting" },
      { fr: "Le Fort de la Prée (classé) se trouve à proximité — une visite s'impose en combiné", en: "The listed Fort de la Prée is nearby — well worth combining the visit" },
      { fr: "Chiens autorisés sur toute la longueur de la plage hors zone baignade", en: "Dogs allowed along the full beach outside the swimming zone" },
    ],
  },
  "gros-jonc-les-portes": {
    commune: "les-portes-en-re",
    lat: 46.2402, lng: -1.7710,
    exposition: "atlantique",
    longueur: "1,2 km",
    baignade: "libre",
    tags: ["sauvage", "dunes"],
    goodToKnow: [
      { fr: "Côté Les Portes de la plage du Gros Jonc — moins fréquenté que le côté Le Bois-Plage", en: "The Les Portes side of the Gros Jonc beach — less visited than the Le Bois-Plage end" },
      { fr: "Les dunes qui bordent la plage appartiennent à une zone naturelle protégée — ne pas les piétiner", en: "The bordering dunes are a protected natural area — stay on marked paths" },
      { fr: "L'accès à pied ou à vélo depuis Les Portes-en-Ré prend environ 20 minutes", en: "Access on foot or by bike from Les Portes-en-Ré takes around 20 minutes" },
    ],
  },
  "la-patache": {
    commune: "les-portes-en-re",
    lat: 46.2490, lng: -1.7890,
    exposition: "atlantique",
    longueur: "800 m",
    baignade: "libre",
    tags: ["sauvage", "dunes", "chiens"],
    goodToKnow: [
      { fr: "La plage la plus accessible des Portes à pied ou à vélo — 15 minutes depuis le village", en: "The most accessible Les Portes beach on foot or bike — 15 minutes from the village" },
      { fr: "Plage non surveillée avec houle atlantique — courants à respecter, pas adaptée aux jeunes enfants non accompagnés", en: "Unlifeguarded with Atlantic swell — currents to watch, not suitable for unaccompanied young children" },
      { fr: "La cabane La Cabane de la Patache sert des huîtres et du poisson juste derrière la plage", en: "La Cabane de la Patache serves oysters and fresh fish just behind the beach" },
    ],
  },
  "le-grouin": {
    commune: "les-portes-en-re",
    lat: 46.2507, lng: -1.8023,
    exposition: "atlantique",
    longueur: "600 m",
    baignade: "libre",
    tags: ["sauvage", "phare"],
    goodToKnow: [
      { fr: "Plage au nord des Portes, face à l'embouchure du Fier d'Ars — paysage unique entre océan et lagon", en: "Beach at the northern tip of Les Portes, facing the mouth of the Fier d'Ars — unique ocean-meets-lagoon landscape" },
      { fr: "Vue sur le Phare des Baleines à l'horizon et sur les îlots de l'Aiguillon", en: "Views of the Phare des Baleines on the horizon and the Aiguillon islets" },
      { fr: "Vents souvent violents à cette extrémité — plage appréciée des sportifs et des amateurs de paysages", en: "Often strong winds at this extremity — popular with outdoor enthusiasts and landscape photographers" },
    ],
  },
  "trousse-chemise": {
    commune: "saint-clement-des-baleines",
    lat: 46.2265, lng: -1.6472,
    exposition: "atlantique",
    longueur: "1,5 km",
    baignade: "libre",
    tags: ["sauvage", "foret", "naturiste", "chiens"],
    goodToKnow: [
      { fr: "Plage sauvage adossée à la forêt de Trousse-Chemise — l'une des plus belles et des plus préservées de l'île", en: "Wild beach backed by the Trousse-Chemise forest — one of the most beautiful and unspoilt on the island" },
      { fr: "Zone naturiste officielle dans la partie nord de la plage — les deux parties coexistent sans problème", en: "Official naturist zone in the northern section — the two areas coexist without issue" },
      { fr: "Accessible uniquement à pied ou à vélo depuis Saint-Clément — les voitures ne peuvent pas approcher", en: "Accessible only on foot or by bike from Saint-Clément — cars cannot get close" },
    ],
  },
  "plage-du-phare": {
    commune: "saint-clement-des-baleines",
    lat: 46.2354, lng: -1.6762,
    exposition: "atlantique",
    longueur: "400 m",
    baignade: "libre",
    tags: ["phare", "dunes"],
    goodToKnow: [
      { fr: "La plage la plus proche du Phare des Baleines — les deux visites se combinent en une demi-journée", en: "The beach closest to the Phare des Baleines — the two visits combine perfectly in a half-day" },
      { fr: "Vue directe sur le phare (57 m) depuis le bord de mer — excellent pour les photos au lever du soleil", en: "Direct view of the lighthouse (57 m) from the waterline — great for sunrise photography" },
      { fr: "Plage non surveillée, vent et courants atlantiques à respecter malgré la proximité du phare", en: "Unlifeguarded, Atlantic winds and currents present despite the lighthouse's proximity" },
    ],
  },
  "la-conche-des-baleines": {
    commune: "saint-clement-des-baleines",
    lat: 46.2330, lng: -1.6642,
    exposition: "atlantique",
    longueur: "3 km",
    baignade: "libre",
    tags: ["sauvage", "dunes", "foret", "phare"],
    goodToKnow: [
      { fr: "La plus grande plage sauvage de l'île — 3 km de sable fin entre la forêt et l'océan, pratiquement sans aménagement", en: "The island's largest wild beach — 3 km of fine sand between forest and ocean, almost entirely undeveloped" },
      { fr: "Courants forts à certaines périodes — toujours se renseigner sur les conditions avant de se baigner", en: "Strong currents at certain times — always check conditions before swimming" },
      { fr: "Un des seuls endroits sur l'île où l'on peut marcher 30 minutes le long du bord de mer sans voir personne", en: "One of the few places on the island where you can walk 30 minutes along the shore without seeing anyone" },
    ],
  },
};
