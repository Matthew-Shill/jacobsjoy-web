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
                Jacob Linn was a sweet and loving boy whose faith and joy touched
                every heart around him. At only four years old, Jacob was
                diagnosed with medulloblastoma, a rare and aggressive form of
                brain cancer.
              </p>
              <p>
                Jacob loved superheroes, Paw Patrol, and reading his Bible. Jacob
                found happiness in simple moments with his family, from wrestling
                with his dad to lively dance parties with his siblings before
                bedtime as they tried to get all their energy out.
              </p>
              <p>
                On September 21, 2021, one day before his sixth birthday, Jacob
                was called home to Heaven. Surrounded by his family, he exchanged
                suffering for perfect joy in the presence of the Lord.
              </p>
              <p>
                Jacob’s Joy, Inc. was created in his memory to share that same
                joy and hope with children and families facing their own battles.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed">{site.mission}</p>
            </div>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                When Jacob woke from emergency brain surgery, he was left
                paralyzed and unable to speak. He had always been a talkative,
                loving, and outgoing boy, so losing his ability to communicate
                was especially hard. But even though he could barely move his
                arms, one of the first things he was able to do was make the “I
                love you” hand sign, something he and his parents had shared
                since he was little.
              </p>
              <p>
                His parents weren’t sure how much of what they were saying was
                getting through to him. Seeing that familiar sign let them know
                he could hear them and was responding. In the middle of
                everything he was going through, Jacob found a way to tell them
                he loved them. The “I love you” hand sign in our logo honors
                that moment.
              </p>
            </div>
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
