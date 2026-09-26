import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/lib/site";

const covered = [
  "Games and activities",
  "Prizes children want to take home",
  "Entertainment",
  "Travel and setup, so the carnival can come to them",
];

export function Funding() {
  return (
    <section id="funding" aria-labelledby="funding-heading" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <SectionLabel>Donors and sponsors</SectionLabel>
          <h2
            id="funding-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Donors and sponsors fully fund every event.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              Families never see a bill. That is the whole model. Gifts and
              sponsorships pay for the carnival so a parent can say yes without
              doing math in a hospital hallway.
            </p>
            <p>
              Jacob’s Joy, Inc. is a 501(c)(3) nonprofit. Donations are
              tax-deductible and go to putting on free events for children and
              their families.
            </p>
          </div>
          <h3 className="mt-8 font-ui text-sm font-semibold uppercase tracking-[0.18em]">
            A gift covers
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {covered.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-deep px-4 py-3 font-ui text-base font-semibold">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed">
            Want to put your family or company on a carnival day? Tell us. We’ll
            say what that day needs. You fund it. Families just show up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact" interest="donate" variant="gold" className="w-full sm:w-auto">
              Donate
            </ButtonLink>
            <ButtonLink href="#contact" interest="sponsor" variant="navy" className="w-full sm:w-auto">
              Sponsor a day
            </ButtonLink>
          </div>
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
            Include your contact information so we can send a receipt. Sizable
            gifts are easiest by check.
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
