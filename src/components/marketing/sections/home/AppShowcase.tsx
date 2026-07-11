import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { StaggerReveal } from "@/components/marketing/motion/StaggerReveal";

export function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="max-w-[1140px] pb-0 pt-12 md:pt-40">
        <FadeIn className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[22px] font-bold leading-tight text-primary md:text-[43px]">
            Clear journeys for every role
          </h2>
          <p className="mx-auto mt-3 max-w-[370px] text-[11px] font-medium leading-[1.45] text-primary/80 md:mt-8 md:max-w-none md:text-[22px]">
            MechAfrica is designed to support how services actually move — from
            demand to delivery to coordination.
          </p>
          <Button
            asChild
            className="mt-5 h-[30px] rounded-[10px] bg-[#a7ec33] px-5 text-[9px] font-bold text-primary shadow-none hover:bg-[#b4f146] md:mt-10 md:h-[70px] md:rounded-[24px] md:px-11 md:text-[17px]"
          >
            <Link href="/download">
              Download The App <span className="ml-3 md:ml-6">→</span>
            </Link>
          </Button>
        </FadeIn>
      </Container>

      <div className="relative mt-10 h-[260px] sm:mt-12 sm:h-[330px] md:mt-20 md:h-[440px] lg:mt-24 lg:h-[600px] xl:h-[700px]">
        <div
          className="absolute inset-0 bg-[#003d24]"
          style={{ clipPath: "polygon(0 0, 100% 16%, 100% 40%, 0 58%)" }}
        />
        <div
          className="absolute inset-0 bg-primary"
          style={{ clipPath: "polygon(0 58%, 100% 40%, 100% 64%, 0 82%)" }}
        />

        <StaggerReveal
          y={48}
          stagger={0.12}
          className="absolute inset-x-0 top-[8%] flex items-start justify-center gap-1 px-4 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5"
        >
          {/* Each phone sits in a plain wrapper so the reveal transform doesn't fight the static translate-y offsets */}
          <div>
            <Image
              src={IMAGES.marketing.farmersApp}
              alt="Farmers App"
              width={437}
              height={571}
              className="h-[100px] w-auto translate-y-[14%] object-contain sm:h-[150px] md:h-[210px] lg:h-[290px] xl:h-[350px]"
            />
          </div>
          <div>
            <Image
              src={IMAGES.marketing.mechAppHomeScreen}
              alt="MechAfrica App"
              width={975}
              height={975}
              priority
              className="h-[115px] w-auto object-contain sm:h-[175px] md:h-[240px] lg:h-[335px] xl:h-[405px]"
            />
          </div>
          <div>
            <Image
              src={IMAGES.marketing.providersApp}
              alt="Providers App"
              width={447}
              height={558}
              className="h-[100px] w-auto translate-y-[8%] object-contain sm:h-[150px] md:h-[210px] lg:h-[290px] xl:h-[350px]"
            />
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
