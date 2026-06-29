import Link from "next/link";

import { Button } from "@/components/ui/button";

export function TiltedCallout({
  heading,
  description,
  primaryCta,
  secondaryCta,
}: {
  heading: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#a7ec33]" />
      <div
        className="absolute inset-0 bg-primary"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 86%)" }}
      />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-[560px]">
            <h2 className="font-serif text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {heading}
            </h2>
            {description ? (
              <p className="mt-2 text-[13px] leading-relaxed text-white/85 sm:mt-3 sm:text-sm md:text-base">
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Button asChild className="h-10 rounded-full bg-white px-6 text-sm font-semibold text-primary hover:bg-white/90 sm:h-12 sm:px-8">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-full border-white/40 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 sm:h-12 sm:px-8"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
