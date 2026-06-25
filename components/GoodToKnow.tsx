import type { Locale } from "@/lib/i18n";

type Item = { fr: string; en: string };

export function GoodToKnow({
  items,
  locale,
}: {
  items: Item[];
  locale: Locale;
}) {
  if (!items.length) return null;

  const heading = locale === "fr" ? "Bon à savoir" : "Good to know";

  return (
    <div className="my-10 rounded-2xl border border-sea/30 bg-sea-deep/5 px-6 py-5">
      <h2 className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
        <span className="text-base">💡</span>
        {heading}
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink">
            <span className="mt-0.5 shrink-0 text-sea-deep">›</span>
            <span>{locale === "fr" ? item.fr : item.en}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
