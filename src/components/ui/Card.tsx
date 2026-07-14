import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
