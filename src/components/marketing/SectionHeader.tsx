import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/marketing/Badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-2xl", alignClass, className)}>
      {eyebrow ? (
        <div className={cn("mb-3", align === "center" && "flex justify-center")}>
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

