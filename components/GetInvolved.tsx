import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { destination, donations, pendingLinks, site } from "@/lib/site";

const covered = [
  "Carnival games, activities, entertainment, and prizes",
  "Free family retreats",
  "Travel and setup for hospital carnival days",
];

const sponsor = destination(pendingLinks.eventSponsorship);
const volunteer = destination(pendingLinks.eventVolunteer);
const every1CampGift = destination(donations.every1Camp);

const moreWays = [
  {
    title: "Sponsor a Carnival or Retreat",
    body: "Help cover the cost of a hospital carnival day or a family retreat so children and their families can participate for free.",
    href: sponsor.href,
    interest: sponsor.external ? undefined : "sponsor",
    external: sponsor.external,
  },
  {
    title: "Volunteer at a Hospital Carnival",
    body: "Help run carnival games, welcome families, and hand out prizes.",
    href: volunteer.href,
    interest: volunteer.external ? undefined : "volunteer",
    external: volunteer.external,
  },
  {
    title: "Become a monthly partner",
    body: "A monthly gift to Jacob’s Joy helps fund free carnival days and free family retreats.",
    href: donations.monthly,
    interest: undefined,
    external: true,
  },
];

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="involved-heading"
      className="scroll-mt-28 py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <SectionLabel>Get Involved</SectionLabel>
          <h2
            id="involved-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Give, sponsor, or volunteer.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              Your support helps bring free carnival days to children’s hospitals
              and provide free family retreats. You help give children and their
              families time to have fun, rest, and make memories together without
              the financial burden.
            </p>
            <p>
              Jacob’s Joy, Inc. is a 501(c)(3) nonprofit. Donations are
              tax-deductible.
            </p>
          </div>
          <h3 className="mt-8 font-ui text-sm font-semibold uppercase tracking-[0.18em]">
            A gift to Jacob’s Joy covers
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {covered.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-cream-deep px-4 py-3 font-ui text-base font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>

          <div id="donate" className="scroll-mt-28 mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-3xl bg-cream-deep p-6">
              <h3 className="font-display text-2xl font-bold leading-tight">
                Donate to Jacob’s Joy
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed">
                A donation to Jacob’s Joy supports free carnival days at
                children’s hospitals and free family retreats.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={donations.oneTime}
                  target="_blank"
                  rel="noreferrer"
                  variant="gold"
                  className="w-full"
                >
                  Donate to Jacob’s Joy
                  <span className="sr-only"> (opens in a new tab)</span>
                </ButtonLink>
              </div>
            </div>
            <div
              id="support-every1camp"
              className="scroll-mt-28 flex flex-col rounded-3xl bg-cream-deep p-6"
            >
              <h3 className="font-display text-2xl font-bold leading-tight">
                Support Every1Camp
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed">
                Support Every1Camp’s free sports camps for children with
                disabilities by directing your donation through Jacob’s Joy.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={every1CampGift.href}
                  interest={every1CampGift.external ? undefined : "every1camp"}
                  target={every1CampGift.external ? "_blank" : undefined}
                  rel={every1CampGift.external ? "noreferrer" : undefined}
                  variant="navy"
                  className="w-full"
                >
                  Support Every1Camp
                  {every1CampGift.external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="mt-10 divide-y divide-navy/15 border-y border-navy/15">
            {moreWays.map((way) => (
              <li key={way.title} className="py-5">
                <a
                  href={way.href}
                  data-interest={way.interest}
                  target={way.external ? "_blank" : undefined}
                  rel={way.external ? "noreferrer" : undefined}
                  className="font-ui text-lg font-semibold underline underline-offset-4"
                >
                  {way.title}
                  {way.external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </a>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  {way.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-3xl border-2 border-navy bg-field p-6 shadow-[8px_8px_0_0_#E8A817] sm:p-8">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em]">
            Mail a check
          </p>
          <p className="mt-3 font-display text-3xl font-bold leading-tight">
            Make checks payable to {site.name}
          </p>
          <address className="mt-5 text-lg leading-relaxed not-italic">
            {site.street}
            <br />
            {site.cityLine}
          </address>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Include your contact information so we can send a receipt. If the
            gift should go to Every1Camp, write Every1Camp on the memo line.
            Otherwise the gift supports hospital carnival days and free family
            retreats.
          </p>
          <p className="mt-4 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            EIN {site.ein}
          </p>
          <p className="mt-6 text-base">
            Or call{" "}
            <a className="font-semibold underline underline-offset-4" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a className="font-semibold underline underline-offset-4" href={site.emailHref}>
              {site.email}
            </a>
            .
          </p>
        </aside>
      </div>
    </section>
  );
}
