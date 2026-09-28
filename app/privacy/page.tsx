import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy | Jacob’s Joy, Inc.",
  description:
    "How Jacob’s Joy, Inc. handles messages you send, gifts processed by Stripe, and what the YouTube videos on this site may collect.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const updated = "September 27, 2026";

export default function PrivacyPage() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 outline-none">
      <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-navy">
          <span className="mr-3 inline-block h-0.5 w-8 bg-gold align-middle" aria-hidden="true" />
          Jacob’s Joy, Inc.
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 font-ui text-base text-muted">Updated {updated}</p>
        <p className="mt-6 text-lg leading-relaxed">
          This page explains what {site.name} does with information you give us
          through this website. We wrote it in plain language because the people
          who write to us are families, volunteers, hospitals, retreats, and donors.
        </p>

        <section className="mt-12" aria-labelledby="who-heading">
          <h2 id="who-heading" className="font-display text-3xl font-bold">
            Who we are
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            {site.name} is a 501(c)(3) nonprofit based in Pittsford, New York. We
            create joyful, inclusive experiences for children and families at
            children’s hospitals and family retreats. We also partner with
            Every1Camp. Gifts through that partnership help make free inclusive
            camp experiences accessible to children with disabilities. Jacob’s Joy
            does not operate those camps. You can reach us at{" "}
            <a className="font-semibold underline underline-offset-4" href={site.emailHref}>
              {site.email}
            </a>{" "}
            or{" "}
            <a className="font-semibold underline underline-offset-4" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            . Mail goes to {site.street}, {site.cityLine}.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="collect-heading">
          <h2 id="collect-heading" className="font-display text-3xl font-bold">
            What you can send us
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            The contact form asks for your name, email address, and a message.
            You can also tell us whether you want to register a family, sponsor a
            program, donate, support Every1Camp, volunteer, or host a program.
            That choice is optional.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            The form does not save that information on the website. When you
            send it, your own email app opens with the note addressed to{" "}
            {site.email}. If the app does not open, you can copy the note and
            email us yourself. After you send it, the message lives in our email,
            the same way any other email to us does.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            We do not ask you to create an account. We do not ask for a child’s
            contact information. Card payments are handled by Stripe, described
            below. This website does not store card numbers.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="use-heading">
          <h2 id="use-heading" className="font-display text-3xl font-bold">
            How we use it
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            We use what you send to reply, and to plan the thing you wrote about:
            a program, a gift, a sponsorship, volunteering, support for Every1Camp,
            or a visit to a hospital or retreat. We do not sell personal
            information. We do not share it with advertisers. We do not use it
            to build a mailing list unless you asked to hear from us.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            We keep an email for as long as we need it to answer you and to keep
            a record of a donation, sponsorship, or program. You can ask us to
            delete a message. Write to{" "}
            <a className="font-semibold underline underline-offset-4" href={site.emailHref}>
              {site.email}
            </a>{" "}
            and say what you want removed. We will delete it unless we have to
            keep a copy for taxes or another legal duty, such as a donation
            receipt.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="gifts-heading">
          <h2 id="gifts-heading" className="font-display text-3xl font-bold">
            Gifts
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            One-time gifts and monthly gifts leave this website and are completed
            on Stripe. Stripe collects the payment details, processes the gift,
            and sends the receipt. This website does not see or store your card
            number. Stripe’s rules are in the{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Stripe Privacy Policy
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . We keep our own record of a gift for as long as tax rules require.
            To ask about a receipt, or to ask us to delete a record we are
            allowed to delete, write to{" "}
            <a className="font-semibold underline underline-offset-4" href={site.emailHref}>
              {site.email}
            </a>
            .
          </p>
          <p className="mt-4 text-base leading-relaxed">
            A separate online gift for Every1Camp is not connected yet. Until
            that Stripe link is ready, the Every1Camp button opens the same
            contact note described above. Checks can still be mailed to the
            address on this page.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Golf tournament registration and tournament sponsorship open on
            GolfStatus, a separate site. GolfStatus’s own policy applies once
            you are there. Jacob’s Joy does not store those registrations on
            this website.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="children-heading">
          <h2 id="children-heading" className="font-display text-3xl font-bold">
            Children
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            This website is for adults: parents and caregivers, hospital and
            retreat partners, volunteers, and donors. The form is not a place for a child
            to send us personal information. Photos on the site are of Jacob and
            his family, shared by the organization. They are not photos collected
            from visitors.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="videos-heading">
          <h2 id="videos-heading" className="font-display text-3xl font-bold">
            Videos
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Story videos play in the page from YouTube’s privacy-enhanced player
            (youtube-nocookie.com). YouTube and Google may still receive
            information when the player loads, such as the fact that a browser
            requested the video. Their rules are in the{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google Privacy Policy
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . Links to Instagram, Facebook, LinkedIn, and YouTube leave this
            site. Those companies’ own policies apply once you are there.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="cookies-heading">
          <h2 id="cookies-heading" className="font-display text-3xl font-bold">
            Cookies and logs
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            This website does not set its own advertising or analytics cookies,
            and it does not run a tracker of its own. The YouTube player may set
            a cookie when a video loads. Stripe and GolfStatus may set cookies
            after you follow a gift or tournament link onto their sites. A
            website host may also keep ordinary technical logs, such as a browser
            type or an internet address, to keep the site secure and running. We
            do not use those logs to identify you or to sell anything.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="changes-heading">
          <h2 id="changes-heading" className="font-display text-3xl font-bold">
            Changes
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            If we start collecting information in a new way, we will update this
            page and change the date at the top. The current version is {updated}.
          </p>
          <p className="mt-8">
            <a className="font-ui text-base font-semibold underline underline-offset-4" href="/#top">
              Back to Jacob’s Joy
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
