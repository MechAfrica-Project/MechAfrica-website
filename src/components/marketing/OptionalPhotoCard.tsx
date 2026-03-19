"use client";

import type { ImageProps } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { OptionalImage } from "@/components/marketing/OptionalImage";

type Aspect = "4/3" | "16/9" | "16/10" | "1/1";

function aspectClass(aspect: Aspect) {
  switch (aspect) {
    case "16/9":
      return "aspect-video";
    case "16/10":
      return "aspect-[16/10]";
    case "1/1":
      return "aspect-square";
    case "4/3":
    default:
      return "aspect-[4/3]";
  }
}

export function OptionalPhotoCard({
  src,
  alt,
  className,
  aspect = "4/3",
  priority,
  sizes,
}: {
  src: ImageProps["src"];
  alt: string;
  className?: string;
  aspect?: Aspect;
  priority?: boolean;
  sizes?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-card shadow-sm",
        className
      )}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,176,0,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,61,46,0.18),transparent_60%)]" />

      <div className={cn("relative w-full", aspectClass(aspect))}>
        <OptionalImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes || "(max-width: 768px) 92vw, (max-width: 1280px) 50vw, 620px"}
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-secondary/15 via-transparent to-primary/15"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
