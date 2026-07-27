import Image from "next/image";

import { founder, partners } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { StaggerReveal } from "@/components/marketing/motion/StaggerReveal";

export function PartnersStrip() {
  return (
    <section className="bg-white py-8 md:py-11">
      <Container className="max-w-[1140px] px-8 md:px-4">
        <FadeIn className="mx-auto max-w-[1050px] text-center">
          <h2 className="font-serif text-[20px] font-bold leading-tight text-primary md:text-[43px]">
            Built by MechLink. Backed by partners.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[11px] font-medium leading-[1.45] text-primary/85 md:mt-7 md:max-w-none md:text-[21px]">
            MechAfrica is developed by MechLink Limited and scaled through SAMA —
            Strengthened Access to Mechanization for Agribusiness — led by Agrinvest with
            funding from AGRA. Today it reaches 12,150+ farmers across 9 regions of Ghana.
          </p>
        </FadeIn>

        <StaggerReveal
          stagger={0.15}
          className="mt-10 flex flex-col items-center gap-8 md:mt-24 md:gap-12"
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src={founder.image}
              alt={founder.name}
              width={220}
              height={70}
              className="h-auto w-[112px] object-contain md:w-[220px]"
            />
            <span className="text-[9px] font-semibold uppercase tracking-wide text-primary/70 md:text-[13px]">
              {founder.note}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 md:gap-x-20 md:gap-y-10">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.image}
                alt={p.name}
                width={185}
                height={70}
                className="h-auto w-[88px] object-contain md:w-[185px]"
              />
            ))}
          </div>
        </StaggerReveal>
      </Container>
    </section>
  );
}
