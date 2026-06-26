import Image from "next/image";

export function Hero({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_16px_40px_rgba(46,125,116,0.18)]">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 820px"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent" />
        {alt && (
          <p className="absolute bottom-3 left-4 font-mono text-[11px] tracking-[0.1em] text-white/85">
            {alt}
          </p>
        )}
      </div>
    </figure>
  );
}
