"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveals its direct children with a scroll-triggered GSAP stagger.
 * Render it as the grid/list container itself (pass the layout classes via className).
 */
export function StaggerReveal({
  children,
  className,
  y = 36,
  stagger = 0.06,
  duration = 0.9,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || el.children.length === 0) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        el.children,
        { opacity: 0, y, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
