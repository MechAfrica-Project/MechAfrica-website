import Link from "next/link";
import { Phone } from "lucide-react";

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
    <Button asChild variant={variant} className={cn("h-11 rounded-full", className)}>
      <Link href={telHref} aria-label={`Dial ${code}`}>
        <Phone className="size-4" />
        <span className="text-sm">Dial {code}</span>
      </Link>
    </Button>
  );
}

