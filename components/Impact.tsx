import { SectionLabel } from "@/components/SectionLabel";

const stories = [
  {
    title: "A sibling’s own turn",
    body: "Siblings spend a lot of time being steady in waiting rooms. At a Jacob’s Joy carnival they get a booth, a prize, and a turn that belongs to them — and they usually end up sharing it anyway.",
  },
  {
    title: "Parents in the game",
    body: "Moms and dads are not asked to stand against the wall and supervise. The games are for them, too. A family that plays together gets a memory that isn’t about an appointment.",
  },
  {
    title: "Play that meets each child",
    body: "Some kids run the midway. Some play from a chair, a bed, or a lap. We adapt the booth. We don’t ask a child to shrink their joy to fit our setup.",
  },
];

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>Impact stories</SectionLabel>
        <h2
          id="impact-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          The joy we keep building.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          We don’t publish polished reviews or invented numbers. We build every
          program around moments like these. We measure these moments in
          laughter, prizes won, and parents who got to play. We don’t promise
          medical results. We create opportunities for play, joy, and connection.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="flex h-full flex-col rounded-3xl border-2 border-navy bg-field p-6 sm:p-8">
              <span className="block h-1 w-12 bg-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold leading-tight">{story.title}</h3>
              <p className="mt-4 text-base leading-relaxed">{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
