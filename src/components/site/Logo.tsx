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
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Image
          src="/assets/pngs/logo.png"
          fill
          alt=""
          sizes={`${size}px`}
          className="scale-[1.85] object-contain"
          priority
        />
      </span>
      <span
        className="flex flex-col font-sans font-medium leading-[0.92] text-primary"
        style={{ fontSize: size * 0.38 }}
      >
        <span className="font-bold">Mech</span>
        <span>Africa</span>
      </span>
    </Link>
  );
}

