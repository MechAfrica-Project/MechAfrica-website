"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { IMAGES } from "@/lib/images";
import { testimonials } from "@/content/site-config";
import { Container } from "@/components/site/Container";

const AUTOPLAY_MS = 6000;

export function FieldStories() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const story = testimonials[index];

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  React.useEffect(() => {
    if (testimonials.length <= 1 || reduceMotion) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, reduceMotion]);

  if (!story) return null;

  return (
    <section className="relative min-h-[305px] overflow-hidden bg-white md:min-h-[810px]">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.marketing[story.image]}
            alt={`${story.name}, ${story.role}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover object-center md:object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-white/0 md:via-white/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent md:from-white/80" />

      <Container className="relative z-10 max-w-[1140px] px-10 pb-20 pt-8 md:pb-56 md:pt-28">
        <div className="max-w-[205px] md:max-w-[650px]">
          <h2 className="font-serif text-[17px] font-bold leading-tight text-primary md:text-[43px]">
            Stories from the field
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[6px] font-bold uppercase tracking-wide text-primary md:mt-8 md:px-3 md:py-1 md:text-[12px]">
                {story.type}
              </span>
              <p className="mt-2 text-[9px] font-medium leading-[1.55] text-primary md:mt-5 md:text-[28px]">
                {story.quote}
              </p>
              <div className="mt-3 flex items-center gap-2 border-l-[8px] border-primary pl-2 md:mt-10 md:gap-5 md:border-l-[18px] md:pl-5">
                <div>
                  <p className="text-[8px] font-bold leading-tight text-primary md:text-[22px]">
                    {story.name}
                  </p>
                  <p className="text-[7px] font-medium leading-tight text-primary/85 md:text-[20px]">
                    {story.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="mt-4 flex items-center gap-3 md:mt-10 md:gap-5">
              <button
                type="button"
                aria-label="Previous story"
                onClick={prev}
                className="flex size-[16px] items-center justify-center rounded-full border border-primary/40 text-primary transition hover:bg-primary/10 md:size-9"
              >
                <ChevronLeft className="size-[9px] md:size-4" />
              </button>

              <div className="flex items-center gap-1.5 md:gap-2.5">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name + item.role}
                    type="button"
                    aria-label={`Show ${item.type.toLowerCase()}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-[3px] rounded-full transition-all md:h-[4px] ${
                      i === index ? "w-5 bg-primary md:w-10" : "w-2.5 bg-primary/30 md:w-5"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next story"
                onClick={next}
                className="flex size-[16px] items-center justify-center rounded-full border border-primary/40 text-primary transition hover:bg-primary/10 md:size-9"
              >
                <ChevronRight className="size-[9px] md:size-4" />
              </button>
            </div>
          )}
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-primary md:h-48"
        style={{ clipPath: "polygon(0 42%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
