"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-md">
      <div className="h-1 bg-gold" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="/#top" aria-label="Jacob’s Joy, Inc., home" className="flex min-w-0 items-center gap-3 rounded-full">
          <Image
            src="/brand/logo.png"
            alt="Jacob’s Joy, Inc."
            width={500}
            height={500}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
          <span className="hidden font-display text-xl font-bold leading-none tracking-tight sm:block sm:text-2xl" aria-hidden="true">
            Jacob’s Joy
            <span className="mt-1 block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Inc.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-ui text-base font-semibold text-navy hover:text-blue"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href="/#donate" variant="gold">
            Donate
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink
            href="/#donate"
            variant="gold"
            className="px-4"
            onClick={() => setOpen(false)}
          >
            Donate
          </ButtonLink>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border-2 border-navy font-ui text-sm font-semibold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-navy/10 bg-cream px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item, index) => (
              <li key={item.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="block rounded-xl px-2 py-3 font-ui text-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 px-2 font-ui text-sm text-muted">
            <a className="font-semibold text-navy underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
        </nav>
      ) : null}
    </header>
  );
}
