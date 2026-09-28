import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { destination, pendingLinks } from "@/lib/site";

const sponsor = destination(pendingLinks.eventSponsorship);
const volunteer = destination(pendingLinks.eventVolunteer);
const camp = destination(pendingLinks.campRegistration);

const ways = [
  {
    href: "#donate",
    title: "Donate to Jacob’s Joy",
    body: "Support free carnival days at children’s hospitals and free family retreats at Christian campgrounds.",
    action: "Donate to Jacob’s Joy",
  },
  {
    href: "#support-every1camp",
    title: "Support Every1Camp",
    body: "Direct a gift through Jacob’s Joy to Every1Camp’s free sports camps for children with disabilities.",
    action: "Support Every1Camp",
  },
  {
    href: sponsor.href,
    interest: sponsor.external ? undefined : "sponsor",
    external: sponsor.external,
    title: "Sponsor an Event",
    body: "Help pay for a hospital carnival day or a family retreat. Families attend free of charge.",
    action: "Sponsor an Event",
  },
  {
    href: volunteer.href,
    interest: volunteer.external ? undefined : "volunteer",
    external: volunteer.external,
    title: "Volunteer at an Event",
    body: "Help at a hospital carnival day — run a carnival game, greet a family, or hand out prizes.",
    action: "Volunteer at an Event",
  },
  {
    href: "#contact",
    interest: "hospital",
    title: "Bring a Carnival to Your Hospital",
    body: "Hospital staff can ask us to bring carnival games, activities, entertainment, and prizes for patients and their families.",
    action: "Bring a Carnival to Your Hospital",
  },
  {
    href: "#contact",
    interest: "retreat",
    title: "Ask About a Family Retreat",
    body: "Families can ask about a free retreat at a Christian campground for children, parents, and siblings.",
    action: "Ask About a Family Retreat",
  },
];

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="involved-heading"
      className="scroll-mt-28 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>Ways to get involved</SectionLabel>
        <h2
          id="involved-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Give, sponsor, volunteer, or ask about a program.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Hospital carnival days, family retreats, and Every1Camp each have a
          way in. Camp registration is here too.
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <li
              key={way.title}
              className="row-span-3 grid grid-rows-subgrid gap-4 rounded-3xl bg-navy p-6 text-cream sm:p-8"
            >
              <h3 className="font-display text-2xl font-bold leading-tight text-balance">
                {way.title}
              </h3>
              <p className="text-base leading-relaxed text-cream">{way.body}</p>
              <a
                href={way.href}
                data-interest={"interest" in way ? way.interest : undefined}
                target={"external" in way && way.external ? "_blank" : undefined}
                rel={"external" in way && way.external ? "noreferrer" : undefined}
                className="inline-flex h-full min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-center font-ui text-base font-semibold leading-snug text-navy hover:bg-gold-deep"
              >
                {way.action}
                {"external" in way && way.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink
            href={camp.href}
            interest={camp.external ? undefined : "camp"}
            target={camp.external ? "_blank" : undefined}
            rel={camp.external ? "noreferrer" : undefined}
            variant="outline"
          >
            Camp Registration
            {camp.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
