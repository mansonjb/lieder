// Gamme de prix indicative (1 a 4). Affiche des symboles euro pleins / vides.
export function PriceRange({
  level,
  label,
}: {
  level: 1 | 2 | 3 | 4;
  label?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="font-mono text-sm tracking-tight" aria-hidden>
        <span className="text-ink">{"€".repeat(level)}</span>
        <span className="text-line">{"€".repeat(4 - level)}</span>
      </span>
      {label ? <span className="text-sm text-muted">{label}</span> : null}
    </span>
  );
}
