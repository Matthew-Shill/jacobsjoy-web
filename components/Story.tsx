import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { site, storyPhotos, videos } from "@/lib/site";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="scroll-mt-28 bg-cream-deep py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Jacob’s story</SectionLabel>
            <h2
              id="story-heading"
              className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            >
              Jacob’s joy was never a small thing.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                Jacob Linn was a sweet, loving boy who treated an ordinary day
                like it was the main event. He loved superheroes and Paw Patrol.
                He read his Bible. He wrestled his dad. Before bed he pulled his
                siblings into dance parties loud enough to spend every last bit
                of energy.
              </p>
              <p>
                When he was four, his family learned he had brain cancer. On
                September 21, 2021 — the day before his sixth birthday — Jacob
                was called home to heaven, surrounded by the people who knew his
                laugh best.
              </p>
              <p>
                Jacob’s Joy, Inc. was created in his memory. The work today is
                free carnival days at children’s hospitals, free family retreats
                at Christian campgrounds, and support for free sports camps
                through our partnership with Every1Camp.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed">{site.mission}</p>
            </div>
            <p className="mt-8 text-lg leading-relaxed">
              Our logo is the “I love you” hand sign — the same one Jacob and his
              dad share in photos from his hospital room. It is still how this
              work says what it means.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="sm:col-span-2">
              <Image
                src={storyPhotos.portrait.src}
                alt={storyPhotos.portrait.alt}
                width={storyPhotos.portrait.width}
                height={storyPhotos.portrait.height}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full rounded-[1.75rem]"
              />
            </figure>
            <figure>
              <Image
                src={storyPhotos.carving.src}
                alt={storyPhotos.carving.alt}
                width={storyPhotos.carving.width}
                height={storyPhotos.carving.height}
                sizes="(min-width: 640px) 240px, 100vw"
                className="h-auto w-full rounded-2xl"
              />
            </figure>
            <figure>
              <Image
                src={storyPhotos.ily.src}
                alt={storyPhotos.ily.alt}
                width={storyPhotos.ily.width}
                height={storyPhotos.ily.height}
                sizes="(min-width: 640px) 240px, 100vw"
                className="h-auto w-full rounded-2xl"
              />
            </figure>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-3xl font-bold">Hear it in their words</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            {videos.map((video) => (
              <figure key={video.id}>
                <div className="aspect-video overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption className="mt-3 font-ui text-base text-muted">
                  {video.caption}{" "}
                  <a
                    href={video.href}
                    className="font-semibold text-navy underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Watch on YouTube
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
