import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function UssdButton({
  code,
  telHref,
  className,
  variant = "outline",
}: {
  code: string;
  telHref: string;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
}) {
  return (
    <Button asChild variant={variant} className={cn("h-11 rounded-full border-primary/80 bg-white hover:bg-white/90", className)}>
      <Link href={telHref} aria-label={`Dial ${code}`}>
        <span className="text-sm">Dial {code}</span>
      </Link>
    </Button>
  );
}

