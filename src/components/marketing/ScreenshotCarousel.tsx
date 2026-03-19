"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ScreenshotSlide = {
  title: string;
  description: string;
  audience: "Farmers App" | "Provider App" | "Agents App";
};

export function ScreenshotCarousel({
  slides,
  className,
}: {
  slides: ScreenshotSlide[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  const active = slides[index];

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className={cn("rounded-3xl border bg-card p-6 shadow-sm", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-foreground">App screenshots (placeholders)</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Replace these mock screens with real product screenshots when ready.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={prev}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={next}
            aria-label="Next screenshot"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold tracking-wide text-muted-foreground">{active.audience}</div>
          <div className="mt-2 font-serif text-2xl font-semibold text-foreground">{active.title}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {slides.map((s, i) => (
              <button
                key={`${s.audience}-${s.title}`}
                type="button"
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  i === index
                    ? "border-transparent bg-accent text-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted/40"
                )}
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(244,176,0,0.22),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(11,61,46,0.16),transparent_55%)] blur-xl" />
            <div className="rounded-[2.4rem] border bg-background shadow-sm">
              <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-border" />

              <div className="p-4 pt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${index}`}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                    animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border bg-muted/35 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-foreground">{active.audience}</div>
                      <div className="text-xs text-muted-foreground">Placeholder UI</div>
                    </div>
                    <div className="mt-3 space-y-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-start gap-2 rounded-xl bg-background/80 p-2">
                          <div className="mt-0.5 size-3 rounded-full bg-primary/30" />
                          <div className="flex-1">
                            <div className="h-2 w-2/3 rounded bg-border" />
                            <div className="mt-2 h-2 w-1/2 rounded bg-border/70" />
                          </div>
                          <div className="h-2 w-12 rounded bg-border/70" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

