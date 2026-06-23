import type { ComponentType } from "react";
import type { Dict } from "@/data/i18n/ui";
import { localeHref, type Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import {
  ancestors,
  childrenOf,
  pageHref,
  pillars,
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
import { PageCard } from "@/components/PageCard";
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

function ArticleHeader({
  entry,
  locale,
  dict,
}: {
  entry: PageEntry;
  locale: Locale;
  dict: Dict;
}) {
  const silo = SILO_LABEL[entry.silo]?.(dict) ?? entry.silo;
  return (
    <header className="mb-2">
      <Breadcrumb items={buildCrumbs(entry, locale, dict)} />
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
        {silo}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
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
    const silos = pillars().filter((p) => p.template !== "home");
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
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
            {dict.home.heroEyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.home.heroSub}
          </p>
        </section>
        {homeHero() ? (
          <div className="mx-auto max-w-6xl px-5">
            <Hero src={homeHero()!} alt="Île de Ré" priority />
          </div>
        ) : null}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {dict.home.silosHeading}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {silos.map((s) => (
              <PageCard key={s.key} entry={s} locale={locale} />
            ))}
          </div>
          {Body ? (
            <div className="longform mx-auto mt-14 max-w-3xl">
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
    return (
      <div className="mx-auto max-w-5xl px-5 py-10">
        <JsonLd data={primaryJsonLd(entry, locale)} />
        <ArticleHeader entry={entry} locale={locale} dict={dict} />
        {stay}
        {body}
        <section className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kids.map((k) => (
              <PageCard key={k.key} entry={k} locale={locale} />
            ))}
          </div>
        </section>
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
          <div className="grid gap-4 sm:grid-cols-2">
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
