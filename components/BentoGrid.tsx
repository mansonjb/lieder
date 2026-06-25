import Image from "next/image";
import Link from "next/link";

export type BentoItem = { src: string; alt: string; href?: string; label?: string };

export function BentoGrid({ items }: { items: BentoItem[] }) {
  const [main, a, b, c] = items;
  if (!main || !a) return null;

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2.5 h-[340px] sm:h-[460px]">
      {/* Main — large left, spans 2 cols × 2 rows */}
      <BentoCell item={main} className="col-span-2 row-span-2" />
      {/* Top right */}
      {a && <BentoCell item={a} className="row-span-1" />}
      {/* Bottom right */}
      {b && <BentoCell item={b} className="row-span-1" />}
    </div>
  );
}

function BentoCell({
  item,
  className = "",
}: {
  item: BentoItem;
  className?: string;
}) {
  const inner = (
    <div className={`group relative h-full w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 66vw, 44vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      {item.label && (
        <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90">
          {item.label}
        </p>
      )}
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={`block ${className}`} tabIndex={-1} aria-hidden>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}
