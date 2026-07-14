import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Heading({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-display text-4xl md:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Paragraph({
  className,
  children,
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "leading-8 text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
