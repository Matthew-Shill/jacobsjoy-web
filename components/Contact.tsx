import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Tell us how you want to be part of it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Families, hospitals, retreats, Every1Camp supporters, volunteers,
            donors, and sponsors — write or call. A person reads every note.
          </p>
          <dl className="mt-8 space-y-5 text-base">
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Phone
              </dt>
              <dd className="mt-1 text-lg">
                <a className="font-semibold underline underline-offset-4" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Email
              </dt>
              <dd className="mt-1 text-lg">
                <a className="font-semibold underline underline-offset-4" href={site.emailHref}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Mailing address
              </dt>
              <dd className="mt-1 text-lg">
                <address className="not-italic">
                  {site.name}
                  <br />
                  {site.street}
                  <br />
                  {site.cityLine}
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Hours
              </dt>
              <dd className="mt-1 text-lg leading-relaxed">
                {site.hours}
                <span className="mt-1 block text-base text-muted">{site.hoursNote}</span>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
