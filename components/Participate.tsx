import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { destination, every1CampUrl, pendingLinks } from "@/lib/site";

const paths = [
  {
    place: "Hospitals",
    title: "Bring a Carnival to Your Hospital",
    body: "Hospital staff can ask Jacob’s Joy to bring a free carnival day. We come with carnival games, activities, entertainment, and prizes for patients, siblings, and parents.",
    action: "Bring a Carnival to Your Hospital",
    href: "#contact",
    interest: "hospital",
    external: false,
  },
  {
    place: "Families",
    title: "Ask About a Family Retreat",
    body: "Families facing childhood cancer, disabilities, or other life-altering diseases can ask about a free retreat at a Christian campground. Jacob’s Joy sends children, parents, and siblings for time to rest, play, and make memories together.",
    action: "Ask About a Family Retreat",
    href: "#contact",
    interest: "retreat",
    external: false,
  },
  {
    place: "Every1Camp",
    title: "Explore Every1Camp",
    body: "Families looking for free sports camps can visit Every1Camp. Those camps are Every1Camp’s own program. Jacob’s Joy is the fiscal sponsor.",
    action: "Explore Every1Camp",
    href: every1CampUrl,
    interest: undefined,
    external: true,
  },
];

const actions = [
  {
    label: "Camp Registration",
    interest: "camp",
    ...destination(pendingLinks.campRegistration),
  },
  {
    label: "Sponsor an Event",
    interest: "sponsor",
    ...destination(pendingLinks.eventSponsorship),
  },
  {
    label: "Volunteer at an Event",
    interest: "volunteer",
    ...destination(pendingLinks.eventVolunteer),
  },
];

export function Participate() {
  return (
    <section
      id="participate"
      aria-labelledby="participate-heading"
      className="scroll-mt-28 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>Next steps</SectionLabel>
        <h2
          id="participate-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Where do you want to start?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Hospital staff, families hoping for a retreat, and families looking
          for a sports camp each have their own next step.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <article
              key={path.title}
              className="row-span-4 grid grid-rows-subgrid gap-4 rounded-3xl bg-cream-deep p-6 sm:p-8"
            >
              <p className="font-ui text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                {path.place}
              </p>
              <h3 className="font-display text-2xl font-bold leading-tight text-balance">
                {path.title}
              </h3>
              <p className="text-base leading-relaxed">{path.body}</p>
              <ButtonLink
                href={path.href}
                interest={path.interest}
                target={path.external ? "_blank" : undefined}
                rel={path.external ? "noreferrer" : undefined}
                variant="navy"
                className="h-full w-full text-center leading-snug"
              >
                {path.action}
                {path.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </ButtonLink>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-display text-2xl font-bold leading-tight">
            Camp registration, sponsorship, and volunteering
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {actions.map((action) => (
              <ButtonLink
                key={action.label}
                href={action.href}
                interest={action.external ? undefined : action.interest}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                variant="outline"
                className="w-full"
              >
                {action.label}
                {action.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
