import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { destination, pendingLinks } from "@/lib/site";

const registration = destination(pendingLinks.campRegistration);

const programs = [
  {
    place: "Children’s Hospitals",
    title: "Free carnival days at children’s hospitals",
    body: "We bring carnival games, activities, entertainment, and prizes to children’s hospitals, giving kids and their families something fun to look forward to during difficult hospital days. Children, siblings, and parents can enjoy time together, with activities adapted so more kids can participate.",
    action: "Bring a Carnival to Your Hospital",
    href: "#contact",
    interest: "hospital",
    external: false,
    anchor: undefined,
  },
  {
    place: "Family Retreats",
    title: "Free family retreats",
    body: "We provide free family retreats for families facing childhood cancer, disabilities, or other life-altering diseases. These getaways give children, parents, and siblings a break from difficult hospital days and time to rest, play, and make memories together.",
    action: "Ask About a Family Retreat",
    href: "#contact",
    interest: "retreat",
    external: false,
    anchor: undefined,
  },
  {
    place: "Partnership with Every1Camp",
    title: "Free sports camps through Every1Camp",
    body: "Jacob’s Joy partners with Every1Camp to support free sports camps for children with disabilities. These camps give kids opportunities to play sports, make friends, and experience the joy of being included.",
    action: "Every1Camp Registration",
    href: registration.href,
    interest: registration.external ? undefined : "camp",
    external: registration.external,
    anchor: "every1camp",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="scroll-mt-28 bg-navy py-16 text-cream md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel onDark>Programs</SectionLabel>
        <h2
          id="programs-heading"
          className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl"
        >
          What We Do
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:gap-x-6 lg:gap-y-4">
          {programs.map((program, index) => (
            <article
              key={program.place}
              id={program.anchor}
              aria-labelledby={program.anchor ? `${program.anchor}-heading` : undefined}
              className="flex flex-col gap-4 rounded-3xl bg-cream p-6 text-navy sm:p-8 lg:row-span-5 lg:grid lg:grid-rows-subgrid"
            >
              <p className="flex items-start gap-3 font-ui text-sm font-semibold uppercase leading-snug tracking-[0.14em] text-muted">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-navy">
                  {index + 1}
                </span>
                <span className="pt-1">{program.place}</span>
              </p>
              <h3
                id={program.anchor ? `${program.anchor}-heading` : undefined}
                className="font-display text-3xl font-bold leading-tight text-balance lg:text-[1.65rem]"
              >
                {program.title}
              </h3>
              <p className="text-base leading-relaxed">{program.body}</p>
              <p className="font-ui text-sm font-bold uppercase tracking-[0.16em]">
                Always free for families
              </p>
              <ButtonLink
                href={program.href}
                interest={program.interest}
                target={program.external ? "_blank" : undefined}
                rel={program.external ? "noreferrer" : undefined}
                variant="navy"
                className="h-full w-full"
              >
                {program.action}
                {program.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
