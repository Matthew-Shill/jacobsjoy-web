import { ButtonLink } from "@/components/ButtonLink";
import { destination, pendingLinks } from "@/lib/site";

const sponsor = destination(pendingLinks.eventSponsorship);

export function FinalCta() {
  return (
    <section aria-labelledby="final-heading" className="bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Come be part of it
        </p>
        <h2
          id="final-heading"
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          Help fund carnival days, family retreats, and sports camps.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream">
          A gift to Jacob’s Joy brings free carnival days to children’s hospitals
          and sends families on free retreats at Christian campgrounds. A gift
          directed to Every1Camp supports free sports camps for children with
          disabilities.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="#donate" variant="gold" className="w-full sm:w-auto">
            Donate to Jacob’s Joy
          </ButtonLink>
          <ButtonLink
            href="#support-every1camp"
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            Support Every1Camp
          </ButtonLink>
          <ButtonLink
            href={sponsor.href}
            interest={sponsor.external ? undefined : "sponsor"}
            target={sponsor.external ? "_blank" : undefined}
            rel={sponsor.external ? "noreferrer" : undefined}
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            Sponsor an Event
            {sponsor.external ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
