import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALES,
  getDict,
  isLocale,
  localeHref,
  type Locale,
} from "@/lib/i18n";
import { allPages, getBySlug, loaderKey } from "@/lib/registry";
import { LOADERS } from "@/content/loaders.generated";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBody } from "@/components/PageBody";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = [];
  for (const e of allPages()) {
    for (const l of LOCALES) {
      params.push({ locale: l, slug: e.slug[l] ? e.slug[l].split("/") : [] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const entry = getBySlug(loc, slug);
  if (!entry) return {};
  return buildMetadata({
    locale: loc,
    title: entry.title[loc],
    description: entry.description[loc],
    slugByLocale: entry.slug,
    type: entry.template === "home" ? "website" : "article",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const loc = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const entry = getBySlug(loc, slug);
  if (!entry) notFound();

  const dict = getDict(loc);
  const loader = LOADERS[loaderKey(loc, entry)];
  const Body = loader ? (await loader()).default : null;
  const alt: Record<Locale, string> = {
    fr: localeHref("fr", entry.slug.fr),
    en: localeHref("en", entry.slug.en),
  };

  return (
    <>
      <Header locale={loc} dict={dict} alt={alt} />
      <main>
        <PageBody entry={entry} locale={loc} dict={dict} Body={Body} />
      </main>
      <Footer locale={loc} dict={dict} />
    </>
  );
}
