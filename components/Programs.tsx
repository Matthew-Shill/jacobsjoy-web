import { SectionLabel } from "@/components/SectionLabel";

const programs = [
  {
    place: "Children’s hospitals",
    title: "A midway for the day they’re having",
    body: "Games, activities, entertainment, and prizes come to the hospital — a playroom, a common space, or the bedside. Children play at the pace of that day. Siblings get a turn. Parents get to be in the game.",
  },
  {
    place: "Camps",
    title: "A carnival day at camp",
    body: "We set up booths and prizes alongside a camp day. Activities are adaptive and inclusive, so more children can play the same game together instead of watching it.",
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
        <SectionLabel onDark>Free carnival days</SectionLabel>
        <h2
          id="programs-heading"
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl"
        >
          Free carnival days at children’s hospitals, camps, and family retreats.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream">
          Three places. One kind of day. Every program is free, adaptive,
          inclusive, and family-centered. We show up for children facing cancer,
          disabilities, and other serious illnesses — and for the siblings and
          parents who are in it with them.
        </p>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
          <div
            className="absolute top-10 right-8 left-8 hidden h-px bg-gold lg:block"
            aria-hidden="true"
          />
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

        <div className="mt-12 rounded-3xl border border-cream/20 p-6 sm:p-8">
          <h3 className="font-display text-3xl font-bold text-cream">What the day includes</h3>
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
