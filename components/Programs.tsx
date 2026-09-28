import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";

const programs = [
  {
    place: "Children’s hospitals",
    title: "A midway that meets children where they are",
    body: "Games, activities, entertainment, and prizes come to the hospital — a playroom, a common space, or the bedside. Children play at their own pace. Siblings get a turn. Parents get to be in the game.",
  },
  {
    place: "Family retreats",
    title: "The whole family, one carnival",
    body: "Retreats are for parents, children, and siblings on the same team. The carnival gives everyone a shared win — a game, a prize, a story to retell on the way home.",
  },
];

const included = [
  "Games and activities adapted so more kids can play",
  "Entertainment that gathers a room",
  "Prizes children actually want to win",
  "A real turn for siblings",
  "Parents in the fun, not along the wall",
  "No cost to families — not a fee, not a suggested gift",
];

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel onDark>Joyful, inclusive experiences</SectionLabel>
        <h2
          id="programs-heading"
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl"
        >
          Joyful, inclusive experiences for children and families.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream">
          Every program is free, adaptive, inclusive, and family-centered. We
          show up for children facing cancer, disabilities, and other serious
          illnesses — and for the siblings and parents who are in it with them.
        </p>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <article
              key={program.place}
              className="relative flex h-full flex-col rounded-3xl bg-cream p-6 text-navy sm:p-8"
            >
              <p className="flex items-center gap-3 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-navy">
                  {index + 1}
                </span>
                {program.place}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
                {program.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed">{program.body}</p>
              <p className="mt-6 font-ui text-sm font-bold uppercase tracking-[0.16em]">
                Always free for families
              </p>
            </article>
          ))}
        </div>

        <article
          id="every1camp"
          aria-labelledby="every1camp-heading"
          className="mt-6 rounded-3xl bg-cream p-6 text-navy sm:p-8"
        >
          <p className="font-ui text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Partnership
          </p>
          <h3
            id="every1camp-heading"
            className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl"
          >
            Every1Camp, made possible by Jacob’s Joy, Inc.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed">
            Jacob’s Joy, Inc. is proud to partner with Every1Camp. Through this
            partnership, you can make charitable gifts to Every1Camp to help
            make free inclusive camp experiences accessible to children with
            disabilities, creating a place where every child can participate,
            belong, and experience joy.
          </p>
          <div className="mt-6">
            <ButtonLink href="#donate" variant="gold">
              Support Every1Camp
            </ButtonLink>
          </div>
        </article>

        <div className="mt-12 rounded-3xl border border-cream/20 p-6 sm:p-8">
          <h3 className="font-display text-3xl font-bold text-cream">What our programs include</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-cream">
                <span className="mt-2 inline-block size-2.5 shrink-0 rounded-sm bg-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream">
            Some children run from booth to booth. Some play from a chair, a bed,
            or a lap. We change the game so they can join it. We don’t ask a
            child to change who they are to be included.
          </p>
        </div>
      </div>
    </section>
  );
}
