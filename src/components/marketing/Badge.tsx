import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "muted",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "muted" | "secondary" | "outline" | "primary";
}) {
  const variantClass =
    variant === "secondary"
      ? "bg-secondary text-secondary-foreground"
      : variant === "primary"
        ? "bg-primary text-primary-foreground"
        : variant === "outline"
          ? "border border-border bg-background text-foreground"
          : "bg-muted text-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variantClass,
        className
      )}
      {...props}
    />
  );
}

