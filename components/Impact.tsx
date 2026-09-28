import { SectionLabel } from "@/components/SectionLabel";

const stories = [
  {
    title: "A hospital carnival day",
    body: "Carnival games, activities, entertainment, and prizes come to the children’s hospital. Patients, siblings, and parents get time together, and activities are adapted so more kids can take part.",
  },
  {
    title: "A family retreat",
    body: "We send the whole family — children, parents, and siblings — on a free retreat at a Christian campground. They get time away from difficult hospital days to rest, play, and make memories together.",
  },
  {
    title: "An Every1Camp sports camp",
    body: "Every1Camp provides free sports camps for children with disabilities. Kids play sports, make friends, and spend the day included. Jacob’s Joy is the fiscal sponsor, and Every1Camp keeps its own name.",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="scroll-mt-28 bg-cream-deep py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>The experiences</SectionLabel>
        <h2
          id="impact-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Carnival days, retreats, and sports camps.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Each one gives children and their families a different kind of time
          together.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="row-span-3 grid grid-rows-subgrid gap-4 rounded-3xl border-2 border-navy bg-field p-6 sm:p-8"
            >
              <span className="block h-1 w-12 bg-gold" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold leading-tight text-balance">
                {story.title}
              </h3>
              <p className="text-base leading-relaxed">{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
