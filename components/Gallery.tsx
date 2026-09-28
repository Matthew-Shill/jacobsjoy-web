import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-28 bg-cream-deep py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>Photo gallery</SectionLabel>
        <h2
          id="gallery-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          The Joy of the Lord was Jacob’s Strength
        </h2>
        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo) => (
            <li key={photo.src} className="mb-5 break-inside-avoid">
              <figure className="rounded-3xl bg-field p-3">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="h-auto w-full rounded-2xl"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
