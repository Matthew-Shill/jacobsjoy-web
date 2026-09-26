"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { interests, site, type InterestValue } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  message: string;
  interest: string;
  company: string;
};

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const empty: Fields = {
  name: "",
  email: "",
  message: "",
  interest: "",
  company: "",
};

function interestLabel(value: string) {
  return interests.find((item) => item.value === value)?.label;
}

function compose(values: Fields) {
  const label = interestLabel(values.interest);
  return [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    label ? `Interested in: ${label}` : null,
    "",
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

function validate(values: Fields): Errors {
  const next: Errors = {};
  if (values.name.trim().length < 2) next.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    next.email = "Enter an email address we can reply to.";
  }
  if (values.message.trim().length < 10) {
    next.message = "Share a few sentences so we know how to help.";
  }
  return next;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const shouldFocusErrors = useRef(false);
  const formId = useId();

  useEffect(() => {
    if (!shouldFocusErrors.current || Object.keys(errors).length === 0) return;
    shouldFocusErrors.current = false;
    summaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-interest]",
      );
      const interest = target?.getAttribute("data-interest");
      if (!interest) return;
      setFields((current) => ({ ...current, interest }));
      setReady(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    setCopied(false);
    if (Object.keys(nextErrors).length > 0) {
      shouldFocusErrors.current = true;
      setReady(null);
      return;
    }

    const body = compose(fields);
    setReady(body);
    if (fields.company.trim()) return;

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      "Hello from the Jacob’s Joy website",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  async function copyMessage() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\n\n${ready}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const errorItems = (
    ["name", "email", "message"] as const
  ).flatMap((key) => (errors[key] ? [{ key, message: errors[key] }] : []));

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-3xl border-2 border-navy bg-field p-6 sm:p-8"
    >
      <h3 className="font-display text-3xl font-bold">Send a note</h3>
      <p className="mt-2 text-base leading-relaxed text-muted">
        Name, email, and a message. We use this only to reply.{" "}
        <a className="font-semibold text-navy underline underline-offset-4" href="/privacy">
          Privacy policy
        </a>.
      </p>

      {errorItems.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-2xl border-2 border-danger bg-cream px-4 py-3 text-danger"
        >
          <p className="font-ui font-semibold">Please fix the following:</p>
          <ul className="mt-2 list-disc pl-5">
            {errorItems.map((item) => (
              <li key={item.key}>
                <a className="underline" href={`#${formId}-${item.key}`}>
                  {item.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company website</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor={`${formId}-name`} className="font-ui text-base font-semibold">
            Name <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className="mt-2 min-h-12 w-full rounded-xl border-2 border-navy/20 bg-cream px-4 text-base text-navy"
            required
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className="mt-2 text-danger">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="font-ui text-base font-semibold">
            Email <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="mt-2 min-h-12 w-full rounded-xl border-2 border-navy/20 bg-cream px-4 text-base text-navy"
            required
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="mt-2 text-danger">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-interest`} className="font-ui text-base font-semibold">
            How can we help? <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id={`${formId}-interest`}
            name="interest"
            value={fields.interest}
            onChange={(event) => update("interest", event.target.value as InterestValue | "")}
            className="mt-2 min-h-12 w-full rounded-xl border-2 border-navy/20 bg-cream px-4 text-base text-navy"
          >
            <option value="">Choose one</option>
            {interests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className="font-ui text-base font-semibold">
            Message <span className="font-normal text-muted">(required)</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={6}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className="mt-2 w-full rounded-xl border-2 border-navy/20 bg-cream px-4 py-3 text-base leading-relaxed text-navy"
            required
          />
          {errors.message ? (
            <p id={`${formId}-message-error`} className="mt-2 text-danger">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-navy px-6 font-ui text-base font-semibold text-cream hover:bg-navy-soft sm:w-auto"
      >
        Send message
      </button>

      {ready ? (
        <div role="status" className="mt-6 rounded-2xl bg-cream-deep p-4">
          <p className="font-ui font-semibold">Your note is ready to send.</p>
          <p className="mt-2 text-base leading-relaxed">
            Your email app should open with this message addressed to{" "}
            <a className="font-semibold underline" href={site.emailHref}>
              {site.email}
            </a>
            . If it doesn’t, copy the note below and send it yourself. We reply{" "}
            {site.hours}.
          </p>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-field p-4 font-body text-base leading-relaxed">
            {ready}
          </pre>
          <button
            type="button"
            onClick={copyMessage}
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-navy px-5 font-ui text-base font-semibold"
          >
            {copied ? "Copied" : "Copy message"}
          </button>
        </div>
      ) : null}
    </form>
  );
}
