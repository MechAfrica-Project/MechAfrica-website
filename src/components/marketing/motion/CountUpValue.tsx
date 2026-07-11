"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Counts numeric values like "50,000+" up from zero when scrolled into view.
 * Non-numeric values ("Ghana", "*928*123#") render unchanged.
 */
export function CountUpValue({ value, className }: { value: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const match = value.match(/^([\d,]+)(.*)$/);
      if (!el || !match) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const target = Number(match[1].replace(/,/g, ""));
      const suffix = match[2] ?? "";
      const state = { n: 0 };

      el.textContent = `0${suffix}`;

      gsap.to(state, {
        n: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(state.n).toLocaleString("en-US")}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
