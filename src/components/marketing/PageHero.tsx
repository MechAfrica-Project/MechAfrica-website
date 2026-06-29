import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { Container } from "@/components/site/Container";

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
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[150px] sm:h-[220px] md:h-[320px] lg:h-[400px]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: "polygon(0 78%, 100% 60%, 100% 100%, 0 100%)" }}
        />
      </div>

      <Container className="max-w-[900px] pb-10 pt-6 sm:pb-14 sm:pt-8 md:pb-20 md:pt-10">
        <h1 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
          {heading}
        </h1>
        <p className="mt-3 max-w-[640px] text-[13px] leading-relaxed text-primary/85 sm:mt-4 sm:text-base md:mt-5 md:text-lg">
          {description}
        </p>
        {cta ? <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7">{cta}</div> : null}
      </Container>
    </section>
  );
}
