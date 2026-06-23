import type { Dict } from "@/data/i18n/ui";

// Bloc de transparence affiliation (conformite + confiance). En pied des pages monetisees.
export function AffiliateDisclosure({
  dict,
  variant = "box",
}: {
  dict: Dict;
  variant?: "box" | "inline";
}) {
  if (variant === "inline") {
    return (
      <p className="text-xs leading-relaxed text-muted">
        {dict.affiliate.short}
      </p>
    );
  }
  return (
    <aside className="mt-12 rounded-2xl border border-line bg-paper-2 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {dict.stay22.sponsored}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink/85">
        {dict.affiliate.disclosure}
      </p>
    </aside>
  );
}
