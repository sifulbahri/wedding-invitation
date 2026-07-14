import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "full";
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
