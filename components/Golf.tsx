import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";
import { golfTournamentUrl } from "@/lib/site";

export function Golf() {
  return (
    <section id="golf" aria-labelledby="golf-heading" className="scroll-mt-28 bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel onDark>On the course</SectionLabel>
        <h2
          id="golf-heading"
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl"
        >
          Jacob’s Joy Annual Golf Tournament
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream">
          The tournament raises support for free carnival days at children’s
          hospitals, free family retreats at Christian campgrounds, and our
          partnership with Every1Camp. Register as a golfer or become a
          tournament sponsor.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href={golfTournamentUrl}
            target="_blank"
            rel="noreferrer"
            variant="gold"
            className="w-full sm:w-auto"
          >
            Register to Golf
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>
          <ButtonLink
            href={golfTournamentUrl}
            target="_blank"
            rel="noreferrer"
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            Become a Tournament Sponsor
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
