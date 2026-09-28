import type { ComponentProps, ReactNode } from "react";

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-deep",
  navy: "bg-navy text-cream hover:bg-navy-soft",
  outline:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-cream",
  outlineLight:
    "border-2 border-cream bg-transparent text-cream hover:bg-cream hover:text-navy",
} as const;

type Variant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  interest?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "navy",
  interest,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      data-interest={interest}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-ui text-base font-semibold leading-snug tracking-wide ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
