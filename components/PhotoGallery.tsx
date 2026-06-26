import Image from "next/image";

type Props = { images: string[]; alt: string };

export function PhotoGallery({ images, alt }: Props) {
  if (images.length < 2) return null;

  const [main, second, third] = images;
  const count = images.length;

  if (images.length === 2) {
    return (
      <div className="mt-6 h-56 overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(46,125,116,0.12)] sm:h-72">
        <div className="grid h-full grid-cols-2 gap-0.5 bg-line">
          <div className="relative overflow-hidden">
            <Image src={main} alt={alt} fill className="object-cover" sizes="50vw" priority />
          </div>
          <div className="relative overflow-hidden">
            <Image src={second} alt={alt} fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-6 h-60 overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(46,125,116,0.12)] sm:h-80">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-0.5 bg-line">
        <div className="relative col-span-2 row-span-2 overflow-hidden">
          <Image src={main} alt={alt} fill className="object-cover" sizes="(max-width:640px) 66vw, 44vw" priority />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />
        </div>
        <div className="relative overflow-hidden">
          <Image src={second} alt={alt} fill className="object-cover" sizes="(max-width:640px) 34vw, 22vw" />
        </div>
        {third ? (
          <div className="relative overflow-hidden">
            <Image src={third} alt={alt} fill className="object-cover" sizes="(max-width:640px) 34vw, 22vw" />
            {count > 3 && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="font-mono text-sm font-bold text-white">+{count - 3}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded bg-sand/40" />
        )}
      </div>
      <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 font-mono text-[10px] text-white/90">
        {count} photos
      </div>
    </div>
  );
}
