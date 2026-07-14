import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({
  id,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
}
