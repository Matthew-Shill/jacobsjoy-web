import { SectionLabel } from "@/components/SectionLabel";

const ways = [
  {
    href: "#donate",
    title: "Donate",
    body: "Any amount helps fund games, prizes, and accessible experiences. Gifts are tax-deductible and go to free programs for children and their families.",
    action: "Give",
  },
  {
    href: "#contact",
    interest: "sponsor",
    title: "Sponsor a program",
    body: "Help fund games, prizes, entertainment, and accessible experiences. Families see joy, not an invoice.",
    action: "Sponsor",
  },
  {
    href: "#contact",
    interest: "volunteer",
    title: "Volunteer",
    body: "Run a game, greet a family, or help prizes find the right hands. Come glad to be there. That’s the job.",
    action: "Volunteer",
  },
  {
    href: "#contact",
    interest: "register",
    title: "Register a family",
    body: "Parents and caregivers: tell us about your child, your siblings, and the experience you need. A caregiver attends with every child.",
    action: "Register",
  },
  {
    href: "#contact",
    interest: "partner",
    title: "Host a program",
    body: "Hospitals and family retreats: if you have the families, we bring games, prizes, and a place to play together. Tell us the space and what the kids love.",
    action: "Partner with us",
  },
  {
    href: "#every1camp",
    title: "Support Every1Camp",
    body: "Jacob’s Joy fiscally sponsors Every1Camp. Gifts through that partnership help make free inclusive camp experiences accessible to children with disabilities.",
    action: "Learn About Every1Camp",
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
            <li key={way.title} className="flex h-full flex-col rounded-3xl bg-navy p-6 text-cream sm:p-8">
              <h3 className="font-display text-2xl font-bold leading-tight">{way.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-cream">{way.body}</p>
              <a
                href={way.href}
                data-interest={"interest" in way ? way.interest : undefined}
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
