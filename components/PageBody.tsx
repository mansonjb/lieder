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
import { heroImage, homeHero } from "@/lib/images";

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

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
            {dict.home.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
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

        {homeHero() ? (
          <div className="mx-auto max-w-6xl px-5">
            <Hero src={homeHero()!} alt="Île de Ré" priority />
          </div>
        ) : null}

        {/* Grouped category sections */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          {HOME_GROUPS.map((group) => {
            const pages = group.keys
              .map((k) => getByKey(k))
              .filter((p): p is NonNullable<typeof p> => p != null);
            return (
              <div key={group.fr} className="mt-14">
                <SectionDivider label={locale === "fr" ? group.fr : group.en} />
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pages.map((p) => (
                    <PageCard key={p.key} entry={p} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })}

          {Body ? (
            <div className="longform mx-auto mt-16 max-w-3xl">
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

        {stay}
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

        <FaqBlock heading={dict.faq.heading} items={[]} />
        {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
      </div>
    );
  }

  // ---- Templates "article" -------------------------------------------
  const mapHigh = ["ou-dormir", "comparatif", "quand-venir", "sejour"].includes(
    entry.template,
  );
  const showComparison =
    entry.template === "ou-dormir" || entry.template === "comparatif";
  const showBestTime = entry.template === "quand-venir";
  const kids = entry.template === "village" ? childrenOf(entry.key) : [];

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <JsonLd data={primaryJsonLd(entry, locale)} />
      <ArticleHeader entry={entry} locale={locale} dict={dict} />
      {hero ? <Hero src={hero} alt={entry.h1[locale]} priority /> : null}
      {showBestTime ? (
        <BestTimeWidget
          locale={locale}
          heading={dict.bestTime.heading}
          note={dict.bestTime.note}
        />
      ) : null}
      {mapHigh ? stay : null}
      {showComparison ? (
        <ComparisonTable heading={dict.comparison.heading} emptyLabel={dict.wip} />
      ) : null}
      {body}
      {!mapHigh ? stay : null}
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
      <FaqBlock heading={dict.faq.heading} items={[]} />
      <RelatedPages
        heading={dict.related.heading}
        entries={related}
        locale={locale}
      />
      {entry.stay22 ? <AffiliateDisclosure dict={dict} /> : null}
    </article>
  );
}
