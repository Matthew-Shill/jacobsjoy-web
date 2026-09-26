import type { ReactNode } from "react";

export function SectionLabel({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`font-ui text-xs font-semibold uppercase tracking-[0.22em] ${onDark ? "text-gold" : "text-navy"}`}
    >
      <span
        className="mr-3 inline-block h-0.5 w-8 bg-gold align-middle"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
