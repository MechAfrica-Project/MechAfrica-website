"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/site/Container";

const MotionImage = motion.create(Image);

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  heroImage,
  heroAlt,
  heading,
  description,
  cta,
}: {
  heroImage: StaticImageData;
  heroAlt: string;
  heading: string;
  description: string;
  cta?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[150px] sm:h-[220px] md:h-[320px] lg:h-[400px] overflow-hidden">
        <MotionImage
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: "polygon(0 78%, 100% 60%, 100% 100%, 0 100%)" }}
        />
      </div>

      <Container className="max-w-[900px] pb-10 pt-6 sm:pb-14 sm:pt-8 md:pb-20 md:pt-10">
        <motion.h1
          className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-primary/85 sm:mt-4 sm:text-base md:mt-5 md:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
        >
          {description}
        </motion.p>
        {cta ? (
          <motion.div
            className="mt-5 flex flex-wrap gap-2.5 sm:mt-7"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            {cta}
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
