import Image from "next/image";

type Props = { images: string[]; alt: string };

export function PhotoGallery({ images, alt }: Props) {
  if (images.length < 2) return null;

  const [main, second, third] = images;

  if (images.length === 2) {
    return (
      <div className="mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl h-56 sm:h-72">
        <div className="relative overflow-hidden">
          <Image src={main} alt={alt} fill className="object-cover" sizes="50vw" priority />
        </div>
        <div className="relative overflow-hidden">
          <Image src={second} alt={alt} fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-3 grid-rows-2 gap-2 overflow-hidden rounded-2xl h-60 sm:h-80">
      <div className="col-span-2 row-span-2 relative overflow-hidden">
        <Image src={main} alt={alt} fill className="object-cover" sizes="(max-width:640px) 66vw, 44vw" priority />
      </div>
      <div className="relative overflow-hidden">
        <Image src={second} alt={alt} fill className="object-cover" sizes="(max-width:640px) 34vw, 22vw" />
      </div>
      {third ? (
        <div className="relative overflow-hidden">
          <Image src={third} alt={alt} fill className="object-cover" sizes="(max-width:640px) 34vw, 22vw" />
        </div>
      ) : (
        <div className="bg-sand/40 rounded" />
      )}
    </div>
  );
}
