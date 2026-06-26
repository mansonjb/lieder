import type { ComponentType } from "react";
import type { Dict } from "@/data/i18n/ui";
import { localeHref, type Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import {
  ancestors,
  childrenOf,
  getByKey,
  pageHref,
  relatedOf,
} from "@/lib/registry";
import { abs, CONTENT_UPDATED, orgNode, WEBSITE_ID } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { Stay22Map } from "@/components/Stay22Map";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BestTimeWidget } from "@/components/BestTimeWidget";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedPages } from "@/components/RelatedPages";
import { PageCard, SILO_META } from "@/components/PageCard";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { heroImage, homeHero, bentoImages, galleryImages } from "@/lib/images";
import { BentoGrid, type BentoItem } from "@/components/BentoGrid";
import { StatBar } from "@/components/StatBar";
import { CtaBanner } from "@/components/CtaBanner";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VillageStatBar } from "@/components/VillageStatBar";
import { VillageTags } from "@/components/VillageTags";
import { GoodToKnow } from "@/components/GoodToKnow";
import { RestaurantHighlights } from "@/components/RestaurantHighlights";
import { BeachStatBar } from "@/components/BeachStatBar";
import { BeachTags } from "@/components/BeachTags";
import { AccommodationHighlights } from "@/components/AccommodationHighlights";
import { AccommodationTypesGrid } from "@/components/AccommodationTypesGrid";
import { Stay22InlineCta } from "@/components/Stay22InlineCta";
import { SeasonBand } from "@/components/SeasonBand";
import { ClimateChart } from "@/components/ClimateChart";
import { ClimateHighlights } from "@/components/ClimateHighlights";
import { SeasonGrid } from "@/components/SeasonGrid";
import { VillageMap } from "@/components/VillageMap";
import { VillageLinks } from "@/components/VillageLinks";
import { VILLAGE_META } from "@/data/village-meta";
import { BEACH_META } from "@/data/beach-meta";
import { getVillageFaqs, OU_DORMIR_FAQS } from "@/data/faq-content";

type Props = {
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
  Body: ComponentType | null;
};

const SILO_LABEL: Record<string, (d: Dict) => string> = {
  villages: (d) => d.nav.villages,
  plages: (d) => d.nav.plages,
  "ou-dormir": (d) => d.nav.ouDormir,
  "ou-dormir-mariage": (d) => d.nav.ouDormir,
  "que-faire": (d) => d.nav.queFaire,
  restaurants: (d) => d.nav.restaurants,
  gastronomie: (d) => d.nav.restaurants,
  "quand-venir": (d) => d.nav.quandVenir,
  evenements: (d) => d.nav.quandVenir,
  sejour: (d) => d.nav.sejour,
  preparer: (d) => d.nav.preparer,
  comparatifs: (d) => d.nav.comparatifs,
  legal: (d) => d.footer.legal,
};

const HOME_GROUPS: { fr: string; en: string; keys: string[] }[] = [
  {
    fr: "Découvrir l'île",
    en: "Discover the island",
    keys: ["villages", "plages", "que-faire", "restaurants"],
  },
  {
    fr: "Organiser son séjour",
    en: "Plan your stay",
    keys: ["ou-dormir", "quand-venir", "sejour", "preparer", "comparatifs"],
  },
];

const QUICK_NAV: { key: string; icon: string; fr: string; en: string }[] = [
  { key: "villages",    icon: "🏘",  fr: "Villages",    en: "Villages"    },
  { key: "plages",      icon: "🌊",  fr: "Plages",      en: "Beaches"     },
  { key: "ou-dormir",   icon: "🛏",  fr: "Dormir",      en: "Stay"        },
  { key: "que-faire",   icon: "🚴",  fr: "Activités",   en: "Activities"  },
  { key: "restaurants", icon: "🍽",  fr: "Restaurants", en: "Restaurants" },
  { key: "preparer",    icon: "🗺",  fr: "Préparer",    en: "Plan ahead"  },
];

function buildCrumbs(entry: PageEntry, locale: Locale, dict: Dict): Crumb[] {
  if (entry.template === "home") return [];
  const items: Crumb[] = [
    { name: dict.breadcrumb.home, href: localeHref(locale, "") },
  ];
  for (const a of ancestors(entry)) {
    items.push({ name: a.h1[locale], href: pageHref(a, locale) });
  }
  items.push({ name: entry.h1[locale] });
  return items;
}

function CategoryChip({ silo, dict, locale }: { silo: string; dict: Dict; locale: Locale }) {
  const meta = SILO_META[silo];
  const label = SILO_LABEL[silo]?.(dict) ?? silo;
  if (!meta) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
      style={{ background: meta.color + "18", color: meta.color }}
    >
      <span>{meta.icon}</span>
      {label}
    </span>
  );
}

function ArticleHeader({
  entry,
  locale,
  dict,
}: {
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
}) {
  return (
    <header className="mb-6">
      <Breadcrumb items={buildCrumbs(entry, locale, dict)} />
      <div className="mt-5">
        <CategoryChip silo={entry.silo} dict={dict} locale={locale} />
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {entry.h1[locale]}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {entry.description[locale]}
      </p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {dict.meta.updated} {entry.lastUpdated}
      </p>
    </header>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
        {label}
      </h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}

function primaryJsonLd(entry: PageEntry, locale: Locale): object {
  const url = abs(localeHref(locale, entry.slug[locale]));
  const geo = entry.geo
    ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: entry.geo.lat,
          longitude: entry.geo.lng,
        },
      }
    : {};
  if (entry.template === "plage") {
    return {
      "@context": "https://schema.org",
      "@type": "Beach",
      name: entry.h1[locale],
      description: entry.description[locale],
      url,
      ...geo,
    };
  }
  if (entry.template === "village") {
    return {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: entry.h1[locale],
      description: entry.description[locale],
      url,
      ...geo,
    };
  }
  if (entry.template === "activite") {
    return {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: entry.h1[locale],
      description: entry.description[locale],
      url,
      ...geo,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.h1[locale],
    description: entry.description[locale],
    inLanguage: locale,
    datePublished: entry.lastUpdated,
    dateModified: CONTENT_UPDATED,
    author: orgNode(),
    publisher: orgNode(),
    mainEntityOfPage: url,
  };
}

export function PageBody({ entry, locale, dict, Body }: Props) {
  const related = relatedOf(entry);
  const hero = heroImage(entry.key);
  const gallery = galleryImages(entry.key);
  const mapLabel =
    entry.mapLabel?.[locale] ?? (locale === "fr" ? "l'Île de Ré" : "Île de Ré");
  const stay =
    entry.stay22 && entry.geo ? (
      <Stay22Map
        geo={entry.geo}
        label={mapLabel}
        campaign={entry.key || "home"}
        dict={dict}
      />
    ) : null;
  const body = <div className="longform">{Body ? <Body /> : null}</div>;

  // ---- Home -----------------------------------------------------------
  if (entry.template === "home") {
    // Bento grid: build BentoItem array from available images
    const bento = bentoImages().map(({ key, src }): BentoItem => {
      const e = getByKey(key);
      return {
        src,
        alt: e ? e.h1[locale] : key,
        href: e ? pageHref(e, locale) : undefined,
        label: e ? e.h1[locale] : undefined,
      };
    });

    const ouDormirEntry = getByKey("ou-dormir");
    const ouDormirHref = ouDormirEntry ? pageHref(ouDormirEntry, locale) : "/ou-dormir";

    return (
      <>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            name: SITE_NAME,
            url: SITE_URL,
            inLanguage: locale,
            publisher: orgNode(),
          }}
        />

        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
            {dict.home.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.home.heroSub}
          </p>
          {/* Quick-nav pills */}
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
            {QUICK_NAV.map(({ key, icon, fr, en }) => {
              const e = getByKey(key);
              if (!e) return null;
              return (
                <a
                  key={key}
                  href={pageHref(e, locale)}
                  className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink shadow-sm transition-all duration-150 hover:border-sea hover:shadow-md"
                >
                  <span>{icon}</span>
                  <span>{locale === "fr" ? fr : en}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="mx-auto max-w-6xl px-5">
          <StatBar locale={locale} />
        </div>

        {/* ── Bento photo grid ── */}
        {bento.length >= 2 ? (
          <div className="mx-auto mt-8 max-w-6xl px-5">
            <BentoGrid items={bento} />
          </div>
        ) : homeHero() ? (
          <div className="mx-auto mt-8 max-w-6xl px-5">
            <Hero src={homeHero()!} alt="Île de Ré" priority />
          </div>
        ) : null}

        {/* ── Category sections ── */}
        <section className="mx-auto max-w-6xl px-5 pb-24">

          {/* Group 1: Discover */}
          {(() => {
            const g = HOME_GROUPS[0];
            const pages = g.keys.map((k) => getByKey(k)).filter((p): p is NonNullable<typeof p> => p != null);
            return (
              <div className="mt-16">
                <SectionDivider label={locale === "fr" ? g.fr : g.en} />
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {pages.map((p) => (
                    <PageCard key={p.key} entry={p} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ── CTA Banner: accommodation ── */}
          <div className="mt-14">
            <CtaBanner href={ouDormirHref} locale={locale} variant="stay" />
          </div>

          {/* Group 2: Plan */}
          {(() => {
            const g = HOME_GROUPS[1];
            const pages = g.keys.map((k) => getByKey(k)).filter((p): p is NonNullable<typeof p> => p != null);
            return (
              <div className="mt-14">
                <SectionDivider label={locale === "fr" ? g.fr : g.en} />
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pages.map((p) => (
                    <PageCard key={p.key} entry={p} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ── Signatures: activities strip ── */}
          <div className="mt-16">
            <SectionDivider label={locale === "fr" ? "Ce qu'on fait ici" : "What you'll do here"} />
            <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { icon: "🚴", fr: "Vélo — 100 km de pistes plates",       en: "Cycling — 100 km of flat paths"     },
                { icon: "🌊", fr: "Plages atlantiques & pertuis abrité",   en: "Atlantic & sheltered beaches"        },
                { icon: "🦪", fr: "Huîtres & cabanes ostréicoles",         en: "Oysters & seafood shacks"            },
                { icon: "🧂", fr: "Fleur de sel des marais salants",       en: "Hand-harvested sea salt"             },
                { icon: "🔭", fr: "Phare des Baleines — 257 marches",      en: "Phare des Baleines lighthouse"      },
                { icon: "🦅", fr: "Réserve de Lilleau des Niges",          en: "Lilleau des Niges bird reserve"      },
                { icon: "⛵", fr: "Voile, kayak & paddle",                 en: "Sailing, kayaking & paddle"          },
                { icon: "🍷", fr: "Pineau des Charentes & vins de l'île",  en: "Pineau des Charentes & island wines" },
              ].map((s) => (
                <div
                  key={s.fr}
                  className="flex shrink-0 items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 shadow-sm"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="whitespace-nowrap text-sm text-ink">{locale === "fr" ? s.fr : s.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTAs colorés ── */}
          {(() => {
            const CTA_ITEMS = [
              {
                key: "villages",
                icon: "🏘",
                color: "#3fa99b",
                fr: { label: "Villages", title: "10 communes à découvrir", sub: "Ports, marais salants, maisons blanches aux volets verts" },
                en: { label: "Villages", title: "10 communes to discover", sub: "Harbours, salt marshes, white houses with green shutters" },
              },
              {
                key: "plages",
                icon: "🌊",
                color: "#2e7d74",
                fr: { label: "Plages", title: "Les plus belles plages de l'île", sub: "Atlantique sauvage, pertuis abrité, eau turquoise" },
                en: { label: "Beaches", title: "The island's finest beaches", sub: "Wild Atlantic, sheltered coves, turquoise waters" },
              },
              {
                key: "ou-dormir",
                icon: "🛏",
                color: "#5e8c7d",
                fr: { label: "Hébergement", title: "Où dormir sur l'Île de Ré", sub: "Hôtels de charme, gîtes, campings — carte en temps réel" },
                en: { label: "Stay", title: "Where to sleep on Île de Ré", sub: "Boutique hotels, cottages, campsites — live map" },
              },
            ];
            return (
              <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {CTA_ITEMS.map((item) => {
                  const e = getByKey(item.key);
                  if (!e) return null;
                  const t = locale === "fr" ? item.fr : item.en;
                  return (
                    <a
                      key={item.key}
                      href={pageHref(e, locale)}
                      className="group relative overflow-hidden rounded-2xl px-6 py-7 text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                      style={{ background: item.color }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-[0.12]"
                        style={{ background: "white" }}
                      />
                      <span className="text-2xl">{item.icon}</span>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">{t.label}</p>
                      <h3 className="mt-2 font-display text-xl leading-snug text-white">{t.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">{t.sub}</p>
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80 transition-[gap] duration-150 group-hover:underline">
                        {locale === "fr" ? "Voir →" : "See →"}
                      </p>
                    </a>
                  );
                })}
              </div>
            );
          })()}

          {/* ── Editorial body ── */}
          {Body ? (
            <div className="longform mx-auto mt-16 max-w-3xl border-t border-line pt-12">
              <Body />
            </div>
          ) : null}

          <AffiliateDisclosure dict={dict} />
        </section>
      </>
    );
  }

  // ---- Pilier ---------------------------------------------------------
  if (entry.template === "pillar") {
    const kids = childrenOf(entry.key);
    const meta = SILO_META[entry.silo];
    const siloLabel = SILO_LABEL[entry.silo]?.(dict) ?? entry.silo;

    return (
      <div className="mx-auto max-w-5xl px-5 py-10">
        <JsonLd data={primaryJsonLd(entry, locale)} />
        <Breadcrumb items={buildCrumbs(entry, locale, dict)} />

        {/* Colored category banner */}
        {meta ? (
          <div
            className="mt-6 mb-8 flex items-center gap-4 rounded-2xl px-6 py-5"
            style={{ background: meta.color + "12" }}
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
              style={{ background: meta.color + "28" }}
            >
              {meta.icon}
            </span>
            <div>
              <p
                className="font-mono text-[11px] uppercase tracking-[0.18em]"
                style={{ color: meta.color }}
              >
                {siloLabel}
              </p>
              <h1 className="mt-0.5 font-display text-3xl leading-tight text-ink sm:text-4xl">
                {entry.h1[locale]}
              </h1>
            </div>
          </div>
        ) : (
          <h1 className="mt-6 mb-4 font-display text-3xl text-ink">{entry.h1[locale]}</h1>
        )}

        <p className="mb-8 text-lg leading-relaxed text-muted">{entry.description[locale]}</p>

        {body}

        {kids.length > 0 ? (
          <section className="mt-12">
            <SectionDivider label={locale === "fr" ? "Dans cette rubrique" : "In this section"} />
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {kids.map((k) => (
                <PageCard key={k.key} entry={k} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        <Stay22InlineCta
          locale={locale}
          address="Île de Ré, France"
          label={{ fr: "Trouver un hébergement sur l'Île de Ré", en: "Find accommodation on Île de Ré" }}
          sub={{ fr: "Hôtels, gîtes, campings — carte temps réel", en: "Hotels, cottages, campsites — live map" }}
          variant="card"
          campaign={`pillar-${entry.silo}`}
        />

        {stay ? (
          <div className="mt-14">
            <SectionDivider label={locale === "fr" ? "Trouver un hébergement" : "Find accommodation"} />
            <div className="mt-2">{stay}</div>
          </div>
        ) : null}

        <FaqBlock heading={dict.faq.heading} items={[]} />
        {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
      </div>
    );
  }

  // ---- Template "village" --------------------------------------------
  if (entry.template === "village") {
    const communeSlug = entry.key.replace("villages/", "");
    const villageMeta = VILLAGE_META[communeSlug];
    const kids = childrenOf(entry.key);

    return (
      <article className="mx-auto max-w-3xl px-5 py-10">
        <JsonLd data={primaryJsonLd(entry, locale)} />
        <ArticleHeader entry={entry} locale={locale} dict={dict} />

        {/* Gallery or single hero */}
        {gallery.length >= 2 ? (
          <PhotoGallery images={gallery} alt={entry.h1[locale]} />
        ) : hero ? (
          <Hero src={hero} alt={entry.h1[locale]} priority />
        ) : null}

        {/* Island map with all villages */}
        <VillageMap locale={locale} highlighted={communeSlug} />

        {/* Stats bar + characteristic tags */}
        <VillageStatBar slug={communeSlug} locale={locale} />
        <VillageTags slug={communeSlug} locale={locale} />

        {/* CTA réservation inline */}
        <Stay22InlineCta
          locale={locale}
          address={`${entry.h1[locale].replace(/^Visiter /, "")}, Île de Ré, France`}
          label={{ fr: `Réserver à ${entry.h1[locale].replace(/^Visiter /, "")}`, en: `Book accommodation in ${entry.h1[locale].replace(/^Visit /, "")}` }}
          sub={{ fr: "Hôtels, gîtes, campings disponibles", en: "Hotels, cottages, campsites available" }}
          variant="band"
          campaign={`village-top-${communeSlug}`}
        />

        {/* Main editorial prose */}
        <div className="mt-8">{body}</div>

        {/* Good to know callout */}
        {villageMeta?.goodToKnow?.length ? (
          <GoodToKnow items={villageMeta.goodToKnow} locale={locale} />
        ) : null}

        {/* External links */}
        <VillageLinks slug={communeSlug} locale={locale} />

        {/* Restaurant highlights */}
        <RestaurantHighlights slug={communeSlug} locale={locale} />

        {/* Accommodation highlights */}
        <AccommodationHighlights slug={communeSlug} locale={locale} />

        {/* CTA bandeau après les hébergements */}
        <Stay22InlineCta
          locale={locale}
          address={`${entry.h1[locale].replace(/^Visiter /, "")}, Île de Ré, France`}
          label={{ fr: "Comparer tous les hébergements disponibles", en: "Compare all available accommodation" }}
          variant="band"
          campaign={`village-bottom-${communeSlug}`}
        />

        {/* Sub-pages of this village */}
        {kids.length > 0 ? (
          <section className="mt-12">
            <SectionDivider label={locale === "fr" ? "Dans ce village" : "In this village"} />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {kids.map((k) => (
                <PageCard key={k.key} entry={k} locale={locale} />
              ))}
            </div>
          </section>
        ) : null}

        <FaqBlock heading={dict.faq.heading} items={getVillageFaqs(communeSlug, locale)} />
        <RelatedPages heading={dict.related.heading} entries={related} locale={locale} />

        {/* Grand CTA avant la carte */}
        {entry.stay22 ? (
          <div className="mt-10">
            <CtaBanner href={`/ou-dormir/${communeSlug}`} locale={locale} variant="stay" />
          </div>
        ) : null}

        {/* Stay22 accommodation map */}
        {stay ? (
          <div className="mt-10">
            <SectionDivider label={locale === "fr" ? "Hébergements à proximité" : "Nearby accommodation"} />
            <div className="mt-2">{stay}</div>
          </div>
        ) : null}
        {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
      </article>
    );
  }

  // ---- Template "plage" ------------------------------------------------
  if (entry.template === "plage") {
    const beachSlug = entry.key.replace("plages/", "");
    const beachMeta = BEACH_META[beachSlug];

    const communeEntry = beachMeta?.commune ? getByKey(`villages/${beachMeta.commune}`) : null;
    const rawCommuneName = communeEntry ? communeEntry.h1[locale] : null;
    const communeName = rawCommuneName?.replace(/^(Visiter |Visit )/i, "") ?? null;
    const communeHref = communeEntry ? pageHref(communeEntry, locale) : null;
    const restaurantEntry = beachMeta?.commune ? getByKey(`restaurants/${beachMeta.commune}`) : null;
    const restaurantHref = restaurantEntry ? pageHref(restaurantEntry, locale) : null;

    const beachStayNote =
      locale === "fr"
        ? "Les plages de l'Île de Ré n'accueillent pas d'hébergements directement — les hôtels, gîtes et campings les plus proches sont dans les villages voisins, souvent à cinq minutes à vélo."
        : "Île de Ré's beaches have no accommodation directly on-site — the nearest hotels, cottages and campsites are in the surrounding villages, usually a five-minute bike ride away.";

    return (
      <article className="mx-auto max-w-3xl px-5 py-10">
        <JsonLd data={primaryJsonLd(entry, locale)} />
        <ArticleHeader entry={entry} locale={locale} dict={dict} />

        {gallery.length >= 2 ? (
          <PhotoGallery images={gallery} alt={entry.h1[locale]} />
        ) : hero ? (
          <Hero src={hero} alt={entry.h1[locale]} priority />
        ) : null}

        <BeachStatBar slug={beachSlug} locale={locale} />
        <BeachTags slug={beachSlug} locale={locale} />

        {/* CTA hébergement près de la plage */}
        {communeName && (
          <Stay22InlineCta
            locale={locale}
            address={`${communeName}, Île de Ré, France`}
            label={{ fr: `Dormir à 5 min de la plage — ${communeName}`, en: `Stay 5 min from the beach — ${communeName}` }}
            variant="band"
            campaign={`beach-top-${beachSlug}`}
          />
        )}

        <div className="mt-8">{body}</div>

        {beachMeta?.goodToKnow?.length ? (
          <GoodToKnow items={beachMeta.goodToKnow} locale={locale} />
        ) : null}

        {/* Link to nearest village + restaurants */}
        {(communeHref || restaurantHref) && communeName ? (
          <div className="my-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {locale === "fr" ? "Village le plus proche" : "Nearest village"}
              </p>
              <p className="mt-0.5 font-semibold text-ink">{communeName}</p>
            </div>
            <div className="flex gap-2">
              {communeHref && (
                <a
                  href={communeHref}
                  className="rounded-xl border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink hover:border-sea hover:text-sea-deep"
                >
                  {locale === "fr" ? "Le village →" : "The village →"}
                </a>
              )}
              {restaurantHref && (
                <a
                  href={restaurantHref}
                  className="rounded-xl bg-sea-deep px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white hover:bg-sea"
                >
                  {locale === "fr" ? "Restaurants →" : "Restaurants →"}
                </a>
              )}
            </div>
          </div>
        ) : null}

        <FaqBlock heading={dict.faq.heading} items={[]} />
        <RelatedPages heading={dict.related.heading} entries={related} locale={locale} />

        <SeasonBand locale={locale} />

        {stay ? (
          <div className="mt-6">
            <SectionDivider label={locale === "fr" ? "Hébergements à proximité" : "Nearby accommodation"} />
            <p className="mt-3 text-sm leading-relaxed text-muted">{beachStayNote}</p>
            <div className="mt-2">{stay}</div>
          </div>
        ) : null}
        {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
      </article>
    );
  }

  // ---- Templates "article" (non-village, non-plage) -------------------
  // ou-dormir root = guide principal ; sub-pages = hotels, campings, etc.
  const isOuDormirRoot = entry.template === "ou-dormir" && entry.key === "ou-dormir";
  const showComparison = entry.template === "comparatif";
  const showBestTime = entry.template === "quand-venir";
  const articleFaqs = isOuDormirRoot ? OU_DORMIR_FAQS[locale] : [];

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <JsonLd data={primaryJsonLd(entry, locale)} />
      <ArticleHeader entry={entry} locale={locale} dict={dict} />
      {gallery.length >= 2 ? (
        <PhotoGallery images={gallery} alt={entry.h1[locale]} />
      ) : hero ? (
        <Hero src={hero} alt={entry.h1[locale]} priority />
      ) : null}
      {showBestTime ? (
        <>
          {/* Chiffres-clés climatiques (soulignages) */}
          <ClimateHighlights locale={locale} />

          {/* Graphique températures + ensoleillement */}
          <ClimateChart locale={locale} />

          {/* Widget mois par saison */}
          <BestTimeWidget
            locale={locale}
            heading={dict.bestTime.heading}
            note={dict.bestTime.note}
          />

          {/* Grille des 4 saisons détaillée */}
          <SeasonGrid locale={locale} />
        </>
      ) : null}

      {/* Bandeau urgence saison sur les pages ou-dormir (hors root) */}
      {entry.template === "ou-dormir" && !isOuDormirRoot ? (
        <SeasonBand locale={locale} />
      ) : null}

      {/* Guide ou-dormir principal uniquement — pas sur les sous-pages hotels/campings */}
      {isOuDormirRoot ? <AccommodationTypesGrid locale={locale} /> : null}

      {showComparison ? (
        <ComparisonTable heading={dict.comparison.heading} emptyLabel={dict.wip} />
      ) : null}

      {body}

      {/* CTA Stay22 après le contenu éditorial */}
      {entry.stay22 ? (
        <Stay22InlineCta
          locale={locale}
          address={entry.mapLabel?.[locale] ?? "Île de Ré, France"}
          label={{ fr: "Voir les hébergements disponibles", en: "Browse available accommodation" }}
          sub={{ fr: "Carte interactive mise à jour en temps réel", en: "Interactive map updated in real time" }}
          variant="card"
          campaign={`article-mid-${entry.key}`}
        />
      ) : null}

      <FaqBlock heading={dict.faq.heading} items={articleFaqs} />
      <RelatedPages
        heading={dict.related.heading}
        entries={related}
        locale={locale}
      />

      {/* Grand CTA avant la carte Stay22 */}
      {entry.stay22 && !isOuDormirRoot ? (
        <div className="mt-8">
          <CtaBanner href="/ou-dormir" locale={locale} variant="stay" />
        </div>
      ) : null}

      {stay ? (
        <div className="mt-8">
          <SectionDivider label={locale === "fr" ? "Hébergements à proximité" : "Nearby accommodation"} />
          <div className="mt-2">{stay}</div>
        </div>
      ) : null}
      {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
    </article>
  );
}
