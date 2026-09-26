import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

const facts = [
  "Free for every family",
  "Hospitals, camps, and retreats",
  "Nationwide",
];

export function Hero() {
  return (
    <section className="overflow-x-clip" aria-labelledby="hero-heading">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            <span
              className="mr-3 inline-block h-0.5 w-8 bg-gold align-middle"
              aria-hidden="true"
            />
            501(c)(3) nonprofit
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-6xl"
          >
            Every child deserves a day that feels like childhood.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline} We bring free carnival days — games, activities,
            entertainment, and prizes — to children’s hospitals, camps, and
            family retreats.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="#funding"
              interest="donate"
              variant="gold"
              className="w-full sm:w-auto"
            >
              Donate
            </ButtonLink>
            <ButtonLink
              href="#funding"
              interest="sponsor"
              variant="navy"
              className="w-full sm:w-auto"
            >
              Sponsor a day
            </ButtonLink>
            <ButtonLink
              href="#contact"
              interest="register"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Register a family
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 font-ui text-base font-semibold">
                <span className="inline-block size-2.5 rounded-sm bg-gold" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative pb-4 pl-4 sm:pb-5 sm:pl-5">
            <div
              className="absolute bottom-0 left-0 h-[94%] w-[94%] rounded-[2rem] bg-gold"
              aria-hidden="true"
            />
            <Image
              src="/photos/hero.jpg"
              alt="Jacob smiling outdoors in a baseball cap, sunlight on his face and green grass behind him."
              width={750}
              height={992}
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="relative h-auto w-full rounded-[2rem]"
            />
          </div>
          <div className="mt-5 flex overflow-hidden rounded-2xl border-2 border-navy bg-field shadow-[8px_8px_0_0_#0A1A3B]">
            <div className="flex-1 px-5 py-4">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em]">
                Admit one family
              </p>
              <p className="font-display text-4xl font-bold leading-none">Free</p>
              <p className="mt-2 text-base text-muted">
                Kids, siblings, and parents. No fee at the door.
              </p>
            </div>
            <div className="flex w-14 items-center justify-center border-l-2 border-dashed border-navy bg-gold sm:w-16">
              <span className="rotate-180 font-ui text-xs font-bold uppercase tracking-[0.22em] text-navy [writing-mode:vertical-rl]">
                Joy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
