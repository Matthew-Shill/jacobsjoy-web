import { SectionLabel } from "@/components/SectionLabel";

const ways = [
  {
    interest: "donate",
    title: "Donate",
    body: "Any amount keeps a booth open. Gifts are tax-deductible and go to free events for children and their families.",
    action: "Give",
  },
  {
    interest: "sponsor",
    title: "Sponsor a carnival day",
    body: "Underwrite one day. You cover games, prizes, entertainment, and the cost of showing up. Families see joy, not an invoice.",
    action: "Sponsor",
  },
  {
    interest: "volunteer",
    title: "Volunteer",
    body: "Run a game, greet a family, or help prizes find the right hands. Come glad to be there. That’s the job.",
    action: "Volunteer",
  },
  {
    interest: "register",
    title: "Register a family",
    body: "Parents and caregivers: tell us about your child, your siblings, and the day you need. A caregiver attends with every child.",
    action: "Register",
  },
  {
    interest: "partner",
    title: "Host a carnival",
    body: "Hospitals, camps, and family retreats: if you have the families, we bring the carnival. Tell us the space, the day, and what the kids love.",
    action: "Partner with us",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" aria-labelledby="involved-heading" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionLabel>Ways to get involved</SectionLabel>
        <h2
          id="involved-heading"
          className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Families, donors, volunteers, and partners all have a way in.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Pick the door that fits. Every one of them lands with a real person
          at Jacob’s Joy.
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <li key={way.interest} className="flex h-full flex-col rounded-3xl bg-navy p-6 text-cream sm:p-8">
              <h3 className="font-display text-2xl font-bold leading-tight">{way.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-cream">{way.body}</p>
              <a
                href="#contact"
                data-interest={way.interest}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 font-ui text-base font-semibold text-navy hover:bg-gold-deep"
              >
                {way.action}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
