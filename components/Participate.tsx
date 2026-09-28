import { ButtonLink } from "@/components/ButtonLink";
import { SectionLabel } from "@/components/SectionLabel";

const steps = [
  {
    title: "Say hello",
    body: "A parent, hospital, or retreat calls or writes. Tell us who will be there and what you hope the experience feels like.",
  },
  {
    title: "We plan the program around your people",
    body: "Games, pacing, and access are built for the children and families on the list. Seated or standing, from a bed or a booth, the activity comes to the child.",
  },
  {
    title: "Donors and sponsors cover the cost",
    body: "Families do not pay. Partners fund the games, prizes, entertainment, travel, and setup. Your only job is to show up.",
  },
  {
    title: "Everybody plays",
    body: "Kids, siblings, and parents. A parent or caregiver comes with every child. No fee at the door. The fullness of childhood.",
  },
];

export function Participate() {
  return (
    <section id="participate" aria-labelledby="participate-heading" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>How families participate</SectionLabel>
        <h2
          id="participate-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          From the first hello to meaningful connection.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          There is no application maze and no bill. We reply Monday through
          Friday and plan the program with the people who will actually be in
          the room.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-cream-deep p-6 sm:p-8">
              <p className="font-display text-5xl font-bold leading-none text-navy">
                <span className="sr-only">Step </span>
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="mt-3 block h-1 w-12 bg-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="#contact" interest="register" variant="gold">
            Register a family
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
