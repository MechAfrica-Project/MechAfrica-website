import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";

export function WhatWeDo() {
  return (
    <section className="relative -mt-1 bg-primary text-white">
      <div
        className="absolute inset-x-0 top-0 h-28 bg-[#a7ec33]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[420px] bg-[#00492f]"
        style={{ clipPath: "polygon(0 18%, 100% 48%, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-white"
        style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
      />

      <Container className="relative z-10 max-w-[1140px] pb-52 pt-44 max-md:pb-28 max-md:pt-20">
        <Image
          src={IMAGES.marketing.homeFarmer}
          alt="Smiling farmer"
          width={610}
          height={477}
          className="absolute z-10 w-[560px] object-contain max-lg:w-[500px] max-md:hidden"
          style={{ right: "5%", top: "-135px" }}
          priority
        />

        <div className="relative z-30 max-w-[590px]">
          <h2 className="font-serif text-[43px] font-bold leading-tight tracking-normal max-md:text-3xl">
                What MechAfrica does?
          </h2>
          <p className="mt-6 max-w-[570px] text-[22px] font-medium leading-[1.48] text-white/85 max-md:text-base">
                MechAfrica reduces friction across the service chain — so farmers
                can plan and providers can deliver, even with unreliable connectivity.
          </p>
          <Button
            asChild
            className="mt-16 h-[70px] rounded-[24px] bg-[#a7ec33] px-9 text-[17px] font-bold text-primary shadow-none hover:bg-[#b4f146] max-md:mt-8 max-md:h-12 max-md:rounded-full"
          >
            <Link href="/about">
              Learn more <span className="ml-6">→</span>
            </Link>
          </Button>
        </div>

        <div className="relative z-30 mt-20 grid items-end gap-8 md:grid-cols-[1fr_1.02fr_1fr]">
          <article className="rounded-[30px] border border-white/55 bg-primary/45 p-5 pb-8 backdrop-blur-sm">
            <div className="relative h-[168px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/marketing/home-card-farmers.png"
                alt="Farmer holding fresh produce"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="mt-8 text-[24px] font-medium leading-[1.35] text-white/90 max-md:text-lg">
              Farmers struggle to find timely, reliable services
            </p>
          </article>

          <article className="rounded-[32px] bg-[#a7ec33] p-7 text-center text-primary shadow-[0_22px_50px_rgba(0,0,0,0.16)]">
            <h3 className="text-[24px] font-bold leading-[1.3] max-md:text-lg">
              We connect Farmers<br />to Service Providers
            </h3>
            <div className="mt-8 flex h-[150px] items-center justify-center rounded-[28px] bg-white">
              <Image
                src="/assets/pngs/logo.png"
                width={128}
                height={128}
                alt="MechAfrica Africa mark"
                className="scale-[1.75] object-contain"
              />
            </div>
          </article>

          <article className="rounded-[30px] border border-white/55 bg-primary/45 p-5 pb-8 backdrop-blur-sm">
            <div className="relative h-[168px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/marketing/home-card-providers.png"
                alt="Tractor in a field"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="mt-8 text-[24px] font-medium leading-[1.35] text-white/90 max-md:text-lg">
              Providers struggle with visibility and coordination
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
