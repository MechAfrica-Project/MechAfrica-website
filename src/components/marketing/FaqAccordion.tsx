"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => {
        const open = openIndex === idx;
        const contentId = `faq-${idx}`;
        return (
          <div key={item.question} className="rounded-2xl border bg-card shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={open}
              aria-controls={contentId}
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <div className="font-serif text-lg font-semibold text-foreground">{item.question}</div>
              <ChevronDown
                className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={contentId}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

