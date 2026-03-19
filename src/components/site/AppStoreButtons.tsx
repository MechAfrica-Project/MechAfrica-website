import Link from "next/link";
import { Apple, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type StoreButtonProps = {
  href: string;
  store: "Google Play" | "App Store";
  className?: string;
};

function StoreButton({ href, store, className }: StoreButtonProps) {
  const Icon = store === "App Store" ? Apple : Smartphone;
  const label =
    store === "App Store" ? "Download on the App Store" : "Get it on Google Play";

  return (
    <Button asChild variant="outline" className={cn("h-11 rounded-full", className)}>
      <Link href={href} aria-label={label}>
        <Icon className="size-4" />
        <span className="text-sm">{store}</span>
      </Link>
    </Button>
  );
}

export function AppStoreButtons({
  playStoreHref,
  appStoreHref,
  className,
}: {
  playStoreHref: string;
  appStoreHref: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <StoreButton href={playStoreHref} store="Google Play" />
      <StoreButton href={appStoreHref} store="App Store" />
    </div>
  );
}

