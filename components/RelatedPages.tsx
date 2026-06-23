import type { Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import { PageCard } from "@/components/PageCard";

export function RelatedPages({
  heading,
  entries,
  locale,
}: {
  heading: string;
  entries: PageEntry[];
  locale: Locale;
}) {
  if (!entries || entries.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink">{heading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e) => (
          <PageCard key={e.key} entry={e} locale={locale} />
        ))}
      </div>
    </section>
  );
}
