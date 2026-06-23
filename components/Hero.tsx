import Image from "next/image";

// Hero "carte postale" : photo encadree (cadre blanc + ombre douce teal).
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
    <figure className="my-6 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_12px_34px_rgba(46,125,116,0.12)]">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 820px"
          className="object-cover"
          priority={priority}
        />
      </div>
    </figure>
  );
}
