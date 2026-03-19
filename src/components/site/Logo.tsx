import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="MechAfrica home"
    >
      <Image
        src="/assets/pngs/logoV3.png"
        width={size * 2.4}
        height={size}
        alt="MechAfrica"
        priority
      />
    </Link>
  );
}

