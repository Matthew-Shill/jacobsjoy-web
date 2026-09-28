import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { every1CampUrl } from "@/lib/site";

const programs = [
  {
    place: "Children’s Hospitals",
    title: "Free carnival days at children’s hospitals",
    body: "We bring carnival games, activities, entertainment, and prizes to children’s hospitals, giving kids and their families something fun to look forward to during difficult hospital days. Children, siblings, and parents can enjoy time together, with activities adapted so more kids can participate.",
  },
  {
    place: "Family Retreats",
    title: "Free family retreats at Christian campgrounds",
    body: "We send families facing childhood cancer, disabilities, or other life-altering diseases on free retreats at Christian campgrounds across the country. These getaways give children, parents, and siblings a break from difficult hospital days and time to rest, play, and make memories together.",
  },
  {
    place: "Partnership with Every1Camp",
    title: "Free sports camps through Every1Camp",
    body: "Jacob’s Joy serves as the fiscal sponsor of Every1Camp, which provides free sports camps for children with disabilities. Through this partnership, donations made through Jacob’s Joy can support camps where kids can play sports, make friends, and experience the joy of being included.",
    action: "Learn more about Every1Camp",
    href: every1CampUrl,
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article
              key={program.place}
              id={program.href ? "every1camp" : undefined}
              aria-labelledby={program.href ? "every1camp-heading" : undefined}
              className="row-span-4 grid grid-rows-subgrid gap-4 rounded-3xl bg-cream p-6 text-navy sm:p-8"
            >
              <p className="flex items-start gap-3 font-ui text-sm font-semibold uppercase leading-snug tracking-[0.14em] text-muted">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-navy">
                  {index + 1}
                </span>
                <span className="pt-1">{program.place}</span>
              </p>
              <h3
                id={program.href ? "every1camp-heading" : undefined}
                className="font-display text-3xl font-bold leading-tight text-balance lg:text-[1.65rem]"
              >
                {program.title}
              </h3>
              <div className="text-base leading-relaxed">
                <p>{program.body}</p>
                {program.href ? (
                  <div className="mt-6">
                    <ButtonLink
                      href={program.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="navy"
                      className="w-full"
                    >
                      {program.action}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
              <p className="font-ui text-sm font-bold uppercase tracking-[0.16em]">
                Always free for families
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
