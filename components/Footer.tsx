import Image from "next/image";
import { SocialIcon } from "@/components/Icons";
import { destination, nav, pendingLinks, site, socials } from "@/lib/site";

const sponsor = destination(pendingLinks.eventSponsorship);
const volunteer = destination(pendingLinks.eventVolunteer);
const camp = destination(pendingLinks.campRegistration);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a href="/#top" className="inline-flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt=""
              width={500}
              height={500}
              className="h-16 w-16"
            />
            <span className="font-display text-2xl font-bold leading-none">
              Jacob’s Joy
            </span>
          </a>
          <p className="mt-4 text-base leading-relaxed text-muted">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">Visit</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="text-base underline-offset-4 hover:underline" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="/#golf">
                Golf tournament
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="/#participate">
                Next steps
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">Get involved</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="/#donate">
                Donate to Jacob’s Joy
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="/#support-every1camp">
                Support Every1Camp
              </a>
            </li>
            <li>
              <a
                className="text-base underline-offset-4 hover:underline"
                href={sponsor.external ? sponsor.href : "/#contact"}
                data-interest={sponsor.external ? undefined : "sponsor"}
                target={sponsor.external ? "_blank" : undefined}
                rel={sponsor.external ? "noreferrer" : undefined}
              >
                Sponsor an Event
              </a>
            </li>
            <li>
              <a
                className="text-base underline-offset-4 hover:underline"
                href={volunteer.external ? volunteer.href : "/#contact"}
                data-interest={volunteer.external ? undefined : "volunteer"}
                target={volunteer.external ? "_blank" : undefined}
                rel={volunteer.external ? "noreferrer" : undefined}
              >
                Volunteer at an Event
              </a>
            </li>
            <li>
              <a
                className="text-base underline-offset-4 hover:underline"
                href={camp.external ? camp.href : "/#contact"}
                data-interest={camp.external ? undefined : "camp"}
                target={camp.external ? "_blank" : undefined}
                rel={camp.external ? "noreferrer" : undefined}
              >
                Camp Registration
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="/#contact" data-interest="retreat">
                Ask About a Family Retreat
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">Contact</p>
          <address className="mt-4 space-y-2 text-base not-italic leading-relaxed">
            <p>
              {site.street}
              <br />
              {site.cityLine}
            </p>
            <p>
              <a className="underline underline-offset-4" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="underline underline-offset-4" href={site.emailHref}>
                {site.email}
              </a>
            </p>
            <p>{site.hours}</p>
          </address>
          <ul className="mt-5 flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/15 px-3 font-ui text-sm font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon name={social.label} className="size-5" />
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 font-ui text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} · A 501(c)(3) nonprofit · EIN {site.ein}
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Based in Pittsford, New York. Serving families nationwide.</span>
            <a className="underline underline-offset-4" href="/privacy">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
