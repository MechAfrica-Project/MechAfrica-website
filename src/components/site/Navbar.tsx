"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";
import { UssdButton } from "@/components/site/UssdButton";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNav() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const solutionsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setSolutionsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSolutionsOpen(false);
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!solutionsRef.current) return;
      const target = event.target as Node | null;
      if (target && !solutionsRef.current.contains(target)) setSolutionsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, []);

  return (
    <div className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => {
        if ("href" in item) {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-5 py-3 text-[15px] font-medium text-[#151915] transition-colors hover:text-primary",
                active && "border border-[#d9ddd8] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
              )}
            >
              {item.label}
            </Link>
          );
        }

        const active = pathname.startsWith("/solutions");
        return (
          <div key={item.label} className="relative" ref={solutionsRef}>
            <button
              type="button"
              className={cn(
                "inline-flex items-center rounded-full px-1 py-3 text-[15px] font-medium text-[#151915] transition-colors hover:text-primary",
                active && "text-primary"
              )}
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
            >
              {item.label}
            </button>

            <div
              className={cn(
                "absolute left-0 top-full z-50 mt-3 w-72 rounded-xl border bg-background/95 p-2 shadow-lg backdrop-blur transition",
                solutionsOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              role="menu"
              aria-label="Solutions menu"
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground",
                    isActivePath(pathname, child.href) && "bg-accent text-foreground"
                  )}
                  onClick={() => setSolutionsOpen(false)}
                >
                  <span>{child.label}</span>
                  <span className="text-xs text-muted-foreground">Learn more</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[86%] max-w-sm">
        <SheetHeader className="gap-2">
          <SheetTitle className="text-left">
            <Logo size={30} />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {navItems.map((item) => {
            if ("href" in item) {
              const active = isActivePath(pathname, item.href);
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground",
                      active && "bg-accent text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              );
            }

            return (
              <div key={item.label} className="pt-2">
                <div className="px-3 pb-2 text-xs font-semibold tracking-wide text-muted-foreground">
                  {item.label}
                </div>
                <div className="flex flex-col gap-1">
                  {item.children.map((child) => {
                    const active = isActivePath(pathname, child.href);
                    return (
                      <SheetClose asChild key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground",
                            active && "bg-accent text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-2 border-t p-4">
          <Button asChild className="h-11 rounded-full">
            <Link href="/download">Download</Link>
          </Button>
          <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex h-[104px] w-full max-w-[1128px] items-center justify-between gap-8 px-5 sm:px-6">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>

        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <DesktopNav />

        <div className="hidden items-center gap-3 md:flex">
          <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} className="h-[58px] px-8 text-primary" />
          <Button asChild className="h-[58px] rounded-full bg-primary px-12 text-[15px] font-medium text-white hover:bg-primary/90">
            <Link href="/download">Download</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

