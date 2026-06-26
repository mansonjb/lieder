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
    <div className="my-10 overflow-hidden rounded-2xl border border-sea/25 bg-white shadow-sm">
      {/* Colored left accent bar via top bar on mobile, left bar on desktop */}
      <div className="h-1 w-full bg-sea-deep sm:hidden" />
      <div className="flex">
        <div className="hidden w-1 shrink-0 bg-gradient-to-b from-sea-deep to-sea/40 sm:block" />
        <div className="flex-1 px-6 py-5">
          <h2 className="mb-4 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sea/15 text-sm">💡</span>
            {heading}
          </h2>
          <ul className="space-y-3.5">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sea/50" />
                <span>{locale === "fr" ? item.fr : item.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
