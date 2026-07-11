import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { StaggerReveal } from "@/components/marketing/motion/StaggerReveal";

export function WhatWeDo() {
  return (
    <section className="relative -mt-12 bg-[#a7ec33] text-white">
      {/* Primary background — diagonal clip lets lime green section bg show through at top */}
      <div
        className="absolute inset-x-0 top-0 h-14 bg-primary md:h-20 lg:h-24"
        style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="absolute inset-x-0 top-14 bottom-0 bg-primary md:top-20 lg:top-24" />

      {/* Mobile decorative strips at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[260px] bg-[#00492f] md:hidden"
        style={{ clipPath: "polygon(0 18%, 100% 40%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-10 bg-white md:hidden"
        style={{ clipPath: "polygon(0 78%, 100% 42%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 hidden h-[300px] bg-[#00492f] md:block lg:h-[340px]"
        style={{ clipPath: "polygon(0 20%, 100% 48%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 hidden h-20 bg-white md:block lg:h-24"
        style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
      />

      <Container className="relative z-10 max-w-[570px] pb-14 pt-8 md:max-w-[1040px] md:pb-32 md:pt-16 lg:pb-40 lg:pt-20">
        <Image
          src={IMAGES.marketing.homeFarmer}
          alt="Smiling farmer"
          width={610}
          height={477}
          className="absolute z-10 object-contain right-[-30px] top-[45px] md:top-[-100] lg:top-[-120] w-[260px] md:w-150 lg:w-180"
          priority
        />

        <FadeIn className="relative z-20 ml-[12%] max-w-[260px] max-[480px]:max-w-[240px] md:ml-0 md:max-w-[500px]">
          <h2 className="font-serif text-[21px] font-bold leading-tight md:text-[30px] lg:text-[36px]">
            What MechAfrica does?
          </h2>
          <p className="mt-3 max-w-[260px] text-[11px] font-medium leading-[1.5] text-white/86 max-[480px]:max-w-[230px] md:mt-4 md:max-w-[470px] md:text-[15px] lg:mt-5 lg:text-[17px]">
            MechAfrica reduces friction across the service chain — so farmers
            can plan and providers can deliver, even with unreliable
            connectivity.
          </p>
          <Button
            asChild
            className="mt-7 h-[30px] rounded-[10px] bg-[#a7ec33] px-4 text-[9px] font-bold text-primary shadow-none hover:bg-[#b4f146] md:mt-9 md:h-[44px] md:rounded-[14px] md:px-6 md:text-[12px] lg:mt-11 lg:h-[52px] lg:rounded-[18px] lg:px-7 lg:text-[14px]"
          >
            <Link href="/about">
              Learn more <span className="ml-3 md:ml-4">→</span>
            </Link>
          </Button>
        </FadeIn>

        <StaggerReveal
          stagger={0.12}
          className="relative z-20 mt-7 grid grid-cols-3 items-end gap-2 md:mt-14 md:max-w-[900px] md:gap-6 lg:mt-16 lg:gap-7"
        >
          <article className="rounded-[12px] border border-white/55 bg-primary/45 p-1.5 pb-2.5 max-[480px]:rounded-[10px] md:rounded-[22px] md:p-4 md:pb-5 md:backdrop-blur-sm">
            <div className="relative h-[46px] overflow-hidden rounded-[8px] max-[480px]:h-[40px] md:h-[112px] md:rounded-[15px] lg:h-[128px]">
              <Image
                src="/images/marketing/home-card-farmers.png"
                alt="Farmer holding fresh produce"
                fill
                sizes="(min-width: 768px) 342px, 140px"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-2 text-[9px] font-medium leading-[1.35] text-white/90 max-[480px]:text-[8px] md:mt-5 md:text-[15px] lg:text-[17px]">
              Farmers struggle to find timely, reliable services
            </p>
          </article>

          <article className="rounded-[12px] bg-[#a7ec33] p-2 text-center text-primary shadow-[0_12px_28px_rgba(0,0,0,0.14)] max-[480px]:p-1.5 md:rounded-[24px] md:p-5 lg:p-6">
            <h3 className="text-[8.5px] font-bold leading-[1.35] md:text-[15px] lg:text-[17px]">
              We connect Farmers
              <br />
              to Service Providers
            </h3>
            <div className="mt-3 flex h-[44px] items-center justify-center rounded-[9px] bg-white max-[480px]:mt-2.5 max-[480px]:h-[36px] md:mt-6 md:h-[112px] md:rounded-[20px] lg:h-[128px]">
              <Image
                src="/assets/pngs/logo.png"
                width={128}
                height={128}
                alt="MechAfrica Africa mark"
                className=""
              />
            </div>
          </article>

          <article className="rounded-[12px] border border-white/55 bg-primary/45 p-1.5 pb-2.5 max-[480px]:rounded-[10px] md:rounded-[22px] md:p-4 md:pb-5 md:backdrop-blur-sm">
            <div className="relative h-[46px] overflow-hidden rounded-[8px] max-[480px]:h-[40px] md:h-[112px] md:rounded-[15px] lg:h-[128px]">
              <Image
                src="/images/marketing/home-card-providers.png"
                alt="Tractor in a field"
                fill
                sizes="(min-width: 768px) 342px, 140px"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-2 text-center text-[9px] font-medium leading-[1.35] text-white/90 max-[480px]:text-[8px] md:mt-5 md:text-[15px] lg:text-[17px]">
              Providers struggle with visibility and coordination
            </p>
          </article>
        </StaggerReveal>
      </Container>
    </section>
  );
}
