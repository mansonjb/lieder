import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import type { Dict } from "@/data/i18n/ui";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { FaqBlock, type FaqItem } from "@/components/FaqBlock";
import { Stay22InlineCta } from "@/components/Stay22InlineCta";
import { RelatedPages } from "@/components/RelatedPages";
import { ancestors, pageHref, relatedOf } from "@/lib/registry";

// ── Visual helper ────────────────────────────────────────────────────────────

function DashedSection({ label }: { label: string }) {
  return (
    <div className="my-10 flex items-center gap-4">
      <div className="h-px flex-1 border-t-2 border-dashed border-line" />
      <span className="shrink-0 rounded-full border border-dashed border-sea/40 px-4 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
        {label}
      </span>
      <div className="h-px flex-1 border-t-2 border-dashed border-line" />
    </div>
  );
}

// ── Month rating ─────────────────────────────────────────────────────────────

const MONTHS_FR = ["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"];
const MONTHS_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// 0=off  1=ok  2=idéal
const MONTH_RATING = [0,0,0,1,2,2,1,1,2,1,0,0];
const MONTH_CLS = [
  "bg-paper text-muted",
  "bg-amber-50 text-amber-700 border border-amber-200",
  "bg-sea text-white shadow-sm",
];

// ── Colour palette for activity pills ────────────────────────────────────────

const PILL_COLORS = [
  "border-sea/30 bg-sea/5 text-sea-deep",
  "border-amber-200 bg-amber-50 text-amber-700",
  "border-emerald-200 bg-emerald-50 text-emerald-700",
  "border-sky-200 bg-sky-50 text-sky-700",
  "border-rose-200 bg-rose-50 text-rose-700",
];

// ── Main component ────────────────────────────────────────────────────────────

export function EvjfPage({
  locale,
  entry,
  dict,
}: {
  locale: Locale;
  entry: PageEntry;
  dict: Dict;
}) {
  const fr = locale === "fr";
  const related = relatedOf(entry);

  const crumbs: Crumb[] = [
    { name: dict.breadcrumb.home, href: localeHref(locale, "") },
    ...ancestors(entry).map((a) => ({ name: a.h1[locale], href: pageHref(a, locale) })),
    { name: entry.h1[locale] },
  ];

  // ── Data ──────────────────────────────────────────────────────────────────

  const heroPills = fr
    ? ["5h de Paris en train", "85 km de pistes cyclables", "Mai–Juin ou Septembre idéal"]
    : ["5h from Paris by train", "85 km of cycle paths", "May–June or September ideal"];

  const stats = fr
    ? [
        { value: "85 km", label: "de pistes vélo" },
        { value: "10", label: "villages de charme" },
        { value: "25+", label: "plages" },
        { value: "2 400 h", label: "de soleil/an" },
        { value: "30 min", label: "depuis La Rochelle" },
      ]
    : [
        { value: "85 km", label: "of cycle paths" },
        { value: "10", label: "charming villages" },
        { value: "25+", label: "beaches" },
        { value: "2,400 h", label: "sunshine/year" },
        { value: "30 min", label: "from La Rochelle" },
      ];

  const reasons = fr
    ? [
        {
          icon: "🚲",
          title: "Un terrain de jeu à échelle humaine",
          desc: "85 km de pistes cyclables sans voiture ni feux rouges. Louer des vélos pour tout le groupe est l'activité EVJF numéro 1 sur l'île, accessible à toutes, inoubliable pour toutes.",
        },
        {
          icon: "🌊",
          title: "La mer, les plages et la liberté",
          desc: "25 plages, une eau qui monte à 22 °C en été, et une côte sauvage à l'ouest. Paddle, surf, kayak de mer : tout est là, sans avoir à se déplacer loin.",
        },
        {
          icon: "🏡",
          title: "Des maisons pour se retrouver",
          desc: "Grandes villas avec piscine et jardin pour 8 à 15 personnes. C'est autour de la table de la maison qu'un vrai EVJF se construit : apéro rosé, playlist, fous rires.",
        },
      ]
    : [
        {
          icon: "🚲",
          title: "A playground at human scale",
          desc: "85 km of car-free cycle paths. Renting bikes for the whole group is the number-one hen party activity on the island, accessible for everyone, unforgettable for all.",
        },
        {
          icon: "🌊",
          title: "The sea, the beaches, the freedom",
          desc: "25 beaches, sea reaching 22 °C in summer, and a wild west coast. Paddleboarding, surfing, kayaking: all within easy reach, no long drives needed.",
        },
        {
          icon: "🏡",
          title: "Houses made for togetherness",
          desc: "Large villas with pools and gardens for 8–15 people. It's around the kitchen table that a hen party really comes alive: rosé, playlists, laughter.",
        },
      ];

  const timeline = fr
    ? [
        { icon: "🏡", time: "Vendredi 18h", title: "Arrivée & installation", desc: "Prise de possession de la maison, déballage, premier apéro rosé en terrasse." },
        { icon: "🍽", time: "Vendredi soir", title: "Dîner maison ou restaurant", desc: "Barbecue dans le jardin ou table réservée à Saint-Martin. Prévoir à l'avance en saison." },
        { icon: "🚲", time: "Samedi 9h", title: "Balade vélo côtière", desc: "Location groupée, balade vers les salines d'Ars ou la pointe des Baleines. 15–25 € / personne." },
        { icon: "🦪", time: "Samedi 12h30", title: "Déjeuner aux huîtres", desc: "Cabane ostréicole à La Flotte ou au Bois-Plage : huîtres + muscadet + pain-beurre, les pieds dans le sable." },
        { icon: "🏄", time: "Samedi après-midi", title: "Activité nautique au choix", desc: "Paddle en groupe (moniteur inclus), cours de surf collectif, ou kayak de mer côtier." },
        { icon: "🥂", time: "Samedi soir", title: "Soirée dans la maison & sortie", desc: "Apéro maison, dîner de groupe, puis sortie dans les rues de Saint-Martin si l'énergie est là." },
        { icon: "☀️", time: "Dimanche matin", title: "Marché & farniente", desc: "Marché de Saint-Martin (mardi & samedi) ou balade sur la côte, avant un départ tranquille après le déjeuner." },
      ]
    : [
        { icon: "🏡", time: "Friday 6pm", title: "Arrival & settling in", desc: "Settle into the house, unpack, and start with a first rosé apéritif on the terrace." },
        { icon: "🍽", time: "Friday evening", title: "Dinner in or out", desc: "BBQ in the garden or a table reserved at a Saint-Martin restaurant. Book ahead in peak season." },
        { icon: "🚲", time: "Saturday 9am", title: "Coastal bike ride", desc: "Group rental, ride to the salt marshes of Ars or Pointe des Baleines. €15–25 per person." },
        { icon: "🦪", time: "Saturday 12:30pm", title: "Oyster lunch", desc: "Oyster shack at La Flotte or Le Bois-Plage: oysters + Muscadet + bread, feet in the sand." },
        { icon: "🏄", time: "Saturday afternoon", title: "Water activity of choice", desc: "Group paddleboarding (instructor included), group surf lesson, or coastal sea kayaking." },
        { icon: "🥂", time: "Saturday evening", title: "House apéro & evening out", desc: "Pre-dinner drinks at home, group dinner, then a stroll through Saint-Martin's streets if the energy's there." },
        { icon: "☀️", time: "Sunday morning", title: "Market & lazy morning", desc: "Saint-Martin market (Tue & Sat) or a last coastal walk before a relaxed post-lunch departure." },
      ];

  const accomTypes = fr
    ? [
        { icon: "🏡", color: "#0f766e", title: "Maisons de groupe", price: "150–300 €/pers./week-end", desc: "La formule EVJF par excellence : 8 à 15 personnes, piscine, jardin, grande cuisine ouverte. Réservez 3 à 6 mois à l'avance." },
        { icon: "🏠", color: "#4d7c0f", title: "Villas avec piscine", price: "200–400 €/pers./week-end", desc: "Quelques villas haut de gamme pour un EVJF luxe. Idéal si le groupe préfère l'espace et le confort." },
        { icon: "🛎", color: "#b45309", title: "Hôtels & chambres d'hôtes", price: "80–200 €/chambre/nuit", desc: "Pour les petits groupes (4–8 personnes) qui préfèrent l'indépendance. Plusieurs hôtels ont des chambres adjacentes." },
      ]
    : [
        { icon: "🏡", color: "#0f766e", title: "Group houses", price: "€150–300/person/weekend", desc: "The classic hen party choice: 8–15 people, pool, garden, large open kitchen. Book 3–6 months ahead." },
        { icon: "🏠", color: "#4d7c0f", title: "Pool villas", price: "€200–400/person/weekend", desc: "A few premium villas for a luxury hen party. Perfect if the group wants space and comfort." },
        { icon: "🛎", color: "#b45309", title: "Hotels & B&Bs", price: "€80–200/room/night", desc: "For smaller groups (4–8 people) who prefer independence. Several hotels have adjacent rooms available." },
      ];

  const activities = fr
    ? [
        { icon: "🚲", label: "Location de vélos" },
        { icon: "🏄", label: "Cours de surf collectif" },
        { icon: "🛶", label: "Kayak de mer" },
        { icon: "🏄‍♀️", label: "Stand-up paddle" },
        { icon: "🦪", label: "Dégustation d'huîtres" },
        { icon: "🍷", label: "Pineau & vins locaux" },
        { icon: "🎨", label: "Atelier poterie" },
        { icon: "📸", label: "Séance photo sur l'île" },
        { icon: "⛵", label: "Croisière Fort Boyard" },
        { icon: "🧖", label: "Spa & soins bien-être" },
        { icon: "🌅", label: "Yoga du matin sur plage" },
        { icon: "🎣", label: "Pêche à pied" },
      ]
    : [
        { icon: "🚲", label: "Bike rental" },
        { icon: "🏄", label: "Group surf lesson" },
        { icon: "🛶", label: "Sea kayaking" },
        { icon: "🏄‍♀️", label: "Stand-up paddleboarding" },
        { icon: "🦪", label: "Oyster tasting" },
        { icon: "🍷", label: "Pineau & local wines" },
        { icon: "🎨", label: "Pottery workshop" },
        { icon: "📸", label: "Island photo session" },
        { icon: "⛵", label: "Fort Boyard cruise" },
        { icon: "🧖", label: "Spa & wellness" },
        { icon: "🌅", label: "Morning beach yoga" },
        { icon: "🎣", label: "Shellfish foraging" },
      ];

  const budget = fr
    ? [
        { item: "Hébergement (maison de groupe)", price: "150–300 €" },
        { item: "Location de vélos (2 jours)", price: "30–50 €" },
        { item: "Activité nautique principale", price: "25–80 €" },
        { item: "Repas & restaurants (week-end)", price: "60–150 €" },
        { item: "Transport La Rochelle–île", price: "20–40 €" },
      ]
    : [
        { item: "Group house accommodation", price: "€150–300" },
        { item: "Bike rental (2 days)", price: "€30–50" },
        { item: "Main water activity", price: "€25–80" },
        { item: "Meals & restaurants (weekend)", price: "€60–150" },
        { item: "La Rochelle–island transport", price: "€20–40" },
      ];

  const checklist = fr
    ? [
        "Réserver la maison au moins 3–6 mois à l'avance (6–9 mois pour juillet-août)",
        "Réserver les vélos à l'avance en haute saison",
        "Choisir le village de base : Saint-Martin pour la soirée, La Flotte pour la tranquillité",
        "Prévoir l'activité principale dès la réservation (paddle, surf, Fort Boyard…)",
        "Anticiper les embouteillages au pont le samedi de juillet-août",
        "Vérifier que la maison est dog-friendly si besoin",
        "Prévoir un budget courses maison en plus des restaurants",
      ]
    : [
        "Book the house at least 3–6 months ahead (6–9 months for July–August)",
        "Pre-book bikes in peak season",
        "Choose your base village: Saint-Martin for evenings out, La Flotte for peace and quiet",
        "Book the main activity early (paddleboarding, surf, Fort Boyard…)",
        "Plan for bridge traffic on Saturday mornings in July–August",
        "Check the house is dog-friendly if needed",
        "Budget for grocery shopping in addition to restaurants",
      ];

  const faqItems: FaqItem[] = fr
    ? [
        {
          q: "Combien de personnes pour un EVJF à l'Île de Ré ?",
          a: "Les groupes de 6 à 15 personnes s'y sentent comme chez elles. Au-delà de 15, trouver une seule maison et circuler ensemble devient complexe. Mieux vaut réserver deux maisons proches l'une de l'autre.",
        },
        {
          q: "Quand réserver pour ne pas rater la bonne maison ?",
          a: "Pour juillet-août, réservez 6 à 9 mois à l'avance : les meilleures villas avec piscine partent dès janvier. Pour mai, juin ou septembre, 3 à 4 mois suffisent généralement. Ces mois sont aussi bien moins chers et moins fréquentés.",
        },
        {
          q: "Comment rejoindre l'Île de Ré sans voiture ?",
          a: "TGV jusqu'à La Rochelle (3h15 depuis Paris Montparnasse), puis navette Océtis jusqu'au pont, puis taxi ou vélos jusqu'à votre maison. En été, des navettes directes desservent plusieurs villages de l'île depuis La Rochelle.",
        },
        {
          q: "Quelles activités originales proposer en dehors du vélo ?",
          a: "Croisière vers Fort Boyard (2h, accessible depuis La Rochelle), atelier poterie à Saint-Martin, séance photo professionnelle sur l'île, yoga du matin sur la plage, ou dégustation de Pineau des Charentes chez un vigneron local.",
        },
        {
          q: "Quel budget prévoir par personne pour un week-end EVJF ?",
          a: "Comptez entre 250 et 500 € par personne pour 3 jours. Le principal poste est la maison de groupe (150–300 €/pers.), auquel s'ajoutent l'activité principale (25–80 €), les repas (60–150 € sur le week-end) et les transports (20–40 €).",
        },
        {
          q: "Est-ce possible de faire un EVJF en dehors de l'été ?",
          a: "Absolument : mai, juin et septembre sont les meilleures périodes : moins chères, moins fréquentées, et la météo est souvent très agréable. En dehors de l'été, vérifiez que vos activités nautiques sont encore ouvertes : certains prestataires ferment mi-octobre.",
        },
      ]
    : [
        {
          q: "How many people for a hen party on Île de Ré?",
          a: "Groups of 6 to 15 feel right at home. Beyond 15, finding a single house and moving around together becomes tricky. Better to book two nearby houses.",
        },
        {
          q: "When should we book to get the best house?",
          a: "For July–August, book 6–9 months ahead, the best pool villas go by January. For May, June or September, 3–4 months is usually enough. Those months are also considerably cheaper and quieter.",
        },
        {
          q: "How do we get to Île de Ré without a car?",
          a: "TGV to La Rochelle (3h15 from Paris Montparnasse), then the Océtis shuttle to the bridge, then a taxi or bikes to your house. In summer, direct shuttles serve several island villages from La Rochelle.",
        },
        {
          q: "What original activities can we add beyond cycling?",
          a: "A cruise to Fort Boyard (2h, departs La Rochelle), pottery workshop in Saint-Martin, professional photo session on the island, morning beach yoga, or a Pineau des Charentes tasting at a local winery.",
        },
        {
          q: "What budget should we plan per person for a hen party weekend?",
          a: "Budget €250–500 per person for 3 days. The main cost is the group house (€150–300/person), plus the main activity (€25–80), meals (€60–150 over the weekend) and transport (€20–40).",
        },
        {
          q: "Can we do a hen party outside summer?",
          a: "Absolutely: May, June and September are the best months: cheaper, quieter, and the weather is usually lovely. Outside summer, check that water activities are still running: some operators close from mid-October.",
        },
      ];

  const months = fr ? MONTHS_FR : MONTHS_EN;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={crumbs} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative -mx-5 mb-10 mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-sea-deep via-sea to-teal-500 px-8 py-14 text-white sm:px-12 sm:py-16">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/8" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-56 w-56 rounded-full bg-black/10" />
        <div className="pointer-events-none absolute bottom-4 right-10 h-20 w-20 rounded-full bg-white/12" />

        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/65">
          ✨ {fr ? "Enterrement de Vie de Jeune Fille" : "Hen Party · Île de Ré"}
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-[2.4rem]">
          {fr
            ? <>L'Île de Ré :<br />l'EVJF qu'elle n'oubliera pas</>
            : <>Île de Ré :<br />the hen party she won't forget</>}
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/85">
          {fr
            ? "Vélo au soleil, déjeuner aux huîtres, rosé les pieds dans le sable. À 30 minutes de La Rochelle, l'île réunit tout ce qui rend un EVJF mémorable."
            : "Cycling in the sunshine, oyster lunches, rosé with your toes in the sand. Just 30 minutes from La Rochelle, the island has everything for an unforgettable hen party."}
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {heroPills.map((p, i) => (
            <span
              key={i}
              className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <div className="mb-10 flex flex-wrap justify-start gap-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex min-w-[90px] flex-col items-center rounded-2xl border border-line bg-white px-5 py-3 shadow-sm"
          >
            <span className="text-xl font-bold text-sea-deep">{s.value}</span>
            <span className="mt-0.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Intro + highlighted text ─────────────────────────────────────── */}
      <p className="text-[15px] leading-relaxed text-ink/85">
        {fr ? (
          <>
            Ce qui rend l'Île de Ré{" "}
            <mark className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-800 not-italic">
              unique pour un EVJF
            </mark>
            {", c'est sa capacité à combiner "}
            <mark className="rounded bg-sea/10 px-1.5 py-0.5 text-sea-deep not-italic">
              dolce vita à l'atlantique
            </mark>
            {" et "}
            <mark className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700 not-italic">
              accessibilité depuis Paris
            </mark>
            {". Pas besoin de voiture : le vélo suffit. Pas besoin de naviguer entre dix restaurants : chaque village a sa terrasse, ses cabanes à huîtres, son atmosphère."}
          </>
        ) : (
          <>
            What makes Île de Ré{" "}
            <mark className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-800 not-italic">
              unique for a hen party
            </mark>
            {" is its blend of "}
            <mark className="rounded bg-sea/10 px-1.5 py-0.5 text-sea-deep not-italic">
              Atlantic dolce vita
            </mark>
            {" and "}
            <mark className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700 not-italic">
              easy access from Paris
            </mark>
            {". No car needed: bikes are enough. No decision fatigue: every village has its terrace, its oyster shack, its own atmosphere."}
          </>
        )}
      </p>

      {/* ── Pull quote ───────────────────────────────────────────────────── */}
      <blockquote className="my-8 rounded-r-2xl border-l-4 border-sea-deep bg-sea/5 py-5 pl-6 pr-5">
        <p className="text-[17px] italic leading-relaxed text-ink/80">
          {fr
            ? "« L'Île de Ré, c'est comme si quelqu'un avait inventé l'EVJF parfait : assez petite pour tout faire à vélo, assez belle pour justifier des centaines de photos. »"
            : "\"Île de Ré feels like someone designed the perfect hen party setting: small enough to explore by bike, beautiful enough for a thousand photos.\""}
        </p>
      </blockquote>

      {/* ── Pourquoi ─────────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Pourquoi l'Île de Ré ?" : "Why Île de Ré?"} />
      <div className="grid gap-4 sm:grid-cols-3">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="rounded-2xl border-2 border-dashed border-sea/25 bg-white p-5 shadow-sm"
          >
            <span className="text-3xl">{r.icon}</span>
            <p className="mt-3 font-semibold text-ink">{r.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Programme type ───────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Programme type week-end" : "Sample weekend itinerary"} />
      <div className="relative ml-3 border-l-2 border-dashed border-sea/30 pl-8">
        {timeline.map((step, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            <div className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-sea/30 bg-white text-lg shadow-sm">
              {step.icon}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sea-deep">
              {step.time}
            </p>
            <p className="mt-0.5 font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Stay22 CTA (mid-page) ────────────────────────────────────────── */}
      <div className="mt-12">
        <Stay22InlineCta
          locale={locale}
          address="Île de Ré, France"
          label={{
            fr: "Trouver votre maison pour l'EVJF",
            en: "Find your hen party house on Île de Ré",
          }}
          sub={{
            fr: "Maisons de groupe, villas avec piscine, gîtes, carte interactive mise à jour en temps réel",
            en: "Group houses, pool villas, gîtes, interactive map updated in real time",
          }}
          variant="card"
          campaign="evjf-mid"
        />
      </div>

      {/* ── Hébergements ─────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Hébergements pour groupes" : "Accommodation for groups"} />
      <div className="grid gap-4 sm:grid-cols-3">
        {accomTypes.map((a, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="h-1 w-full" style={{ background: a.color }} />
            <div className="p-5">
              <span className="text-3xl">{a.icon}</span>
              <p className="mt-3 font-semibold text-ink">{a.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.desc}</p>
              <p
                className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: a.color }}
              >
                {a.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Activités ────────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Activités EVJF" : "Hen party activities"} />
      <div className="flex flex-wrap gap-2.5">
        {activities.map((a, i) => (
          <span
            key={i}
            className={"rounded-full border px-4 py-1.5 text-sm " + PILL_COLORS[i % PILL_COLORS.length]}
          >
            {a.icon} {a.label}
          </span>
        ))}
      </div>

      {/* ── Bonus tip box (dashed) ───────────────────────────────────────── */}
      <div className="mt-8 rounded-2xl border-2 border-dashed border-amber-200 bg-amber-50/60 px-6 py-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-600">
          💡 {fr ? "Bon à savoir" : "Good to know"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          {fr
            ? "L'île de Ré n'a pas d'offre de clubbing. C'est une destination de terrasse, de fête douce et de plein air. Si le groupe veut une vraie soirée dansante, La Rochelle (30 min) offre plusieurs clubs et bars live. Prévoir un taxi ou VTC retour."
            : "Île de Ré has no clubbing scene. It's a destination for terrace nights, relaxed celebrations, and outdoor life. If the group wants a proper night out, La Rochelle (30 min) has several clubs and live bars. Arrange a taxi or rideshare back."}
        </p>
      </div>

      {/* ── Budget ───────────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Budget indicatif" : "Budget guide"} />
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
        <div className="px-5 py-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {fr ? "Poste" : "Item"}
                </th>
                <th className="pb-3 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {fr ? "Budget / personne" : "Budget / person"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {budget.map((b, i) => (
                <tr key={i}>
                  <td className="py-3 text-ink/85">{b.item}</td>
                  <td className="py-3 text-right font-semibold text-sea-deep">{b.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-sea/20 bg-sea/5">
                <td className="py-3 font-bold text-ink">
                  {fr ? "Total estimé (3 jours)" : "Estimated total (3 days)"}
                </td>
                <td className="py-3 text-right font-bold text-sea-deep">250 – 500 €</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ── Quand partir ─────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Quand partir ?" : "When to go?"} />
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
        <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
        <div className="p-5">
          <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
            {months.map((m, i) => (
              <div
                key={m}
                className={"rounded-xl px-1 py-3 text-center text-xs font-medium " + MONTH_CLS[MONTH_RATING[i]]}
              >
                {m}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-sea inline-block" />
              {fr ? "Idéal (Mai, Juin, Sep)" : "Ideal (May, Jun, Sep)"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-amber-100 border border-amber-200 inline-block" />
              {fr ? "Correct (Avr, Juil, Août, Oct)" : "Good (Apr, Jul, Aug, Oct)"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-paper inline-block border border-line" />
              {fr ? "Hors saison" : "Off season"}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {fr
              ? "Juillet et août = pleine saison : très beau, mais très cher et réservations complètes plusieurs mois à l'avance. Mai, juin et septembre offrent le meilleur rapport qualité-prix pour un EVJF."
              : "July and August = peak season: gorgeous, but very expensive and fully booked months ahead. May, June and September offer the best value for a hen party."}
          </p>
        </div>
      </div>

      {/* ── Checklist ────────────────────────────────────────────────────── */}
      <DashedSection label={fr ? "Checklist organisation" : "Planning checklist"} />
      <ul className="space-y-3">
        {checklist.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sea/10 font-mono text-[11px] text-sea-deep">
              ✓
            </span>
            <span className="text-sm leading-relaxed text-ink">{item}</span>
          </li>
        ))}
      </ul>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqBlock
        heading={fr ? "Questions fréquentes : EVJF à l'Île de Ré" : "Hen party FAQs: Île de Ré"}
        items={faqItems}
      />

      {/* ── Related + disclosure ─────────────────────────────────────────── */}
      <RelatedPages heading={dict.related.heading} entries={related} locale={locale} />
    </>
  );
}
