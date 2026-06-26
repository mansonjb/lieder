import type { Locale } from "@/lib/i18n";
import type { VillageLink } from "@/data/village-meta";
import { VILLAGE_META } from "@/data/village-meta";

export function VillageLinks({ slug, locale }: { slug: string; locale: Locale }) {
  const links = VILLAGE_META[slug]?.links;
  if (!links?.length) return null;

  const heading = locale === "fr" ? "Liens utiles" : "Useful links";

  return (
    <div className="my-8">
      <h2 className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-sea-deep">
        <span className="text-base">🔗</span>
        {heading}
      </h2>
      <div className="flex flex-col gap-2">
        {links.map((link: VillageLink, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm transition-all duration-150 hover:border-sea hover:shadow-sm"
          >
            <span className="shrink-0 text-base">{link.icon}</span>
            <span className="flex-1 text-ink group-hover:text-sea-deep transition-colors duration-150">
              {locale === "fr" ? link.label.fr : link.label.en}
            </span>
            <span className="shrink-0 font-mono text-[10px] text-muted group-hover:text-sea transition-colors duration-150">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
