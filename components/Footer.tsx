import Image from "next/image";
import { SocialIcon } from "@/components/Icons";
import { nav, site, socials } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a href="#top" className="inline-flex items-center gap-3">
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
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">On this page</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="text-base underline-offset-4 hover:underline" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#programs">
                Carnival days
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#participate">
                Events and registration
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">Get involved</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#funding" data-interest="donate">
                Donate
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#funding" data-interest="sponsor">
                Sponsors and partners
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#contact" data-interest="volunteer">
                Volunteer
              </a>
            </li>
            <li>
              <a className="text-base underline-offset-4 hover:underline" href="#contact" data-interest="register">
                Register a family
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
          <p>Based in Pittsford, New York. Serving families nationwide.</p>
        </div>
      </div>
    </footer>
  );
}
