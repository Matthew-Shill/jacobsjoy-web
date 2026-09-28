import { ButtonLink } from "@/components/ButtonLink";

export function FinalCta() {
  return (
    <section aria-labelledby="final-heading" className="bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Come be part of the joy
        </p>
        <h2
          id="final-heading"
          className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          Bring more joy to children and families.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream">
          If a child you love could use games, prizes, and people who showed up
          just to play, start here. If you can help fund that experience for a
          family who shouldn’t have to pay for joy, start here too.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="#donate" variant="gold" className="w-full sm:w-auto">
            Donate
          </ButtonLink>
          <ButtonLink
            href="#contact"
            interest="sponsor"
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            Sponsor a program
          </ButtonLink>
          <ButtonLink
            href="#contact"
            interest="register"
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            Register a family
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
