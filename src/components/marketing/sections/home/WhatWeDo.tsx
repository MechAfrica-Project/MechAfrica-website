import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";

export function WhatWeDo() {
  return (
    <section className="relative -mt-1 bg-primary text-white">
      <div className="relative mx-auto h-[400px] max-w-[570px] overflow-visible md:hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-[260px] bg-[#00492f]"
          style={{ clipPath: "polygon(0 18%, 100% 40%, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 bg-white"
          style={{ clipPath: "polygon(0 78%, 100% 42%, 100% 100%, 0 100%)" }}
        />

        <Image
          src={IMAGES.marketing.homeFarmer}
          alt="Smiling farmer"
          width={260}
          height={203}
          className="absolute right-[10px] top-[-95px] z-10 w-[345px] object-contain max-[480px]:right-[-18px] max-[480px]:top-[-72px] max-[480px]:w-[285px] max-[360px]:right-[-38px] max-[360px]:w-[260px]"
          priority
        />

        <div className="absolute left-[12%] top-8 z-20 max-w-[260px] max-[480px]:max-w-[240px]">
          <h2 className="font-serif text-[21px] font-bold leading-tight">
            What MechAfrica does?
          </h2>
          <p className="mt-3 max-w-[260px] text-[11px] font-medium leading-[1.5] text-white/86 max-[480px]:max-w-[230px]">
            MechAfrica reduces friction across the service chain — so farmers
            can plan and providers can deliver, even with unreliable connectivity.
          </p>
          <Button
            asChild
            className="mt-7 h-[30px] rounded-[10px] bg-[#a7ec33] px-4 text-[9px] font-bold text-primary shadow-none hover:bg-[#b4f146]"
          >
            <Link href="/about">
              Learn more <span className="ml-3">→</span>
            </Link>
          </Button>
        </div>

        <article className="absolute left-[12%] top-[188px] z-20 w-[140px] rounded-[14px] border border-white/55 bg-primary/45 p-2 pb-3 max-[480px]:left-[6%] max-[480px]:w-[96px] max-[480px]:rounded-[12px] max-[480px]:p-1.5">
          <div className="relative h-[64px] overflow-hidden rounded-[10px] max-[480px]:h-[46px] max-[480px]:rounded-[8px]">
            <Image
              src="/images/marketing/home-card-farmers.png"
              alt="Farmer holding fresh produce"
              fill
              sizes="140px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-4 text-[11px] font-medium leading-[1.35] text-white/90 max-[480px]:mt-2 max-[480px]:text-[9px]">
            Farmers struggle to find timely, reliable services
          </p>
        </article>

        <article className="absolute left-[38.5%] top-[158px] z-20 w-[140px] rounded-[14px] bg-[#a7ec33] p-3 text-center text-primary shadow-[0_12px_28px_rgba(0,0,0,0.14)] max-[480px]:left-1/2 max-[480px]:w-[96px] max-[480px]:-translate-x-1/2 max-[480px]:rounded-[12px] max-[480px]:p-2">
          <h3 className="text-[11px] font-bold leading-[1.35] max-[480px]:text-[8.5px]">
            We connect Farmers<br />to Service Providers
          </h3>
          <div className="mt-4 flex h-[58px] items-center justify-center rounded-[12px] bg-white max-[480px]:mt-3 max-[480px]:h-[44px] max-[480px]:rounded-[9px]">
            <Image
              src="/assets/pngs/logo.png"
              width={46}
              height={46}
              alt="MechAfrica Africa mark"
              className="scale-[1.75] object-contain"
            />
          </div>
        </article>

        <article className="absolute right-[10.8%] top-[188px] z-20 w-[140px] rounded-[14px] border border-white/55 bg-primary/45 p-2 pb-3 max-[480px]:right-[6%] max-[480px]:w-[96px] max-[480px]:rounded-[12px] max-[480px]:p-1.5">
          <div className="relative h-[64px] overflow-hidden rounded-[10px] max-[480px]:h-[46px] max-[480px]:rounded-[8px]">
            <Image
              src="/images/marketing/home-card-providers.png"
              alt="Tractor in a field"
              fill
              sizes="140px"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-4 text-center text-[11px] font-medium leading-[1.35] text-white/90 max-[480px]:mt-2 max-[480px]:text-[9px]">
            Providers struggle with visibility and coordination
          </p>
        </article>
      </div>

      <div className="relative hidden md:block">
        <div
          className="absolute inset-x-0 top-0 h-20 bg-[#a7ec33] lg:h-24"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[300px] bg-[#00492f] lg:h-[340px]"
          style={{ clipPath: "polygon(0 20%, 100% 48%, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-white lg:h-24"
          style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
        />

        <Container className="relative z-10 max-w-[1040px] pb-32 pt-16 lg:pb-40 lg:pt-20">
          <Image
            src={IMAGES.marketing.homeFarmer}
            alt="Smiling farmer"
            width={610}
            height={477}
            className="absolute z-10 w-[340px] object-contain lg:w-[410px] xl:w-[430px]"
            style={{ right: "7%", top: "-96px" }}
            priority
          />

          <div className="relative z-30 max-w-[500px]">
            <h2 className="font-serif text-[30px] font-bold leading-tight tracking-normal lg:text-[36px]">
              What MechAfrica does?
            </h2>
            <p className="mt-4 max-w-[470px] text-[15px] font-medium leading-[1.48] text-white/85 lg:mt-5 lg:text-[17px]">
              MechAfrica reduces friction across the service chain — so farmers
              can plan and providers can deliver, even with unreliable connectivity.
            </p>
            <Button
              asChild
              className="mt-9 h-[44px] rounded-[14px] bg-[#a7ec33] px-6 text-[12px] font-bold text-primary shadow-none hover:bg-[#b4f146] lg:mt-11 lg:h-[52px] lg:rounded-[18px] lg:px-7 lg:text-[14px]"
            >
              <Link href="/about">
                Learn more <span className="ml-4">→</span>
              </Link>
            </Button>
          </div>

          <div className="relative z-30 mt-14 grid max-w-[900px] items-end gap-6 md:grid-cols-[1fr_1.02fr_1fr] lg:mt-16 lg:gap-7">
            <article className="rounded-[22px] border border-white/55 bg-primary/45 p-4 pb-5 backdrop-blur-sm">
              <div className="relative h-[112px] overflow-hidden rounded-[15px] lg:h-[128px]">
                <Image
                  src="/images/marketing/home-card-farmers.png"
                  alt="Farmer holding fresh produce"
                  fill
                  sizes="(min-width: 768px) 342px, 140px"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-5 text-[15px] font-medium leading-[1.35] text-white/90 lg:text-[17px]">
                Farmers struggle to find timely, reliable services
              </p>
            </article>

            <article className="rounded-[24px] bg-[#a7ec33] p-5 text-center text-primary shadow-[0_18px_38px_rgba(0,0,0,0.14)] lg:p-6">
              <h3 className="text-[15px] font-bold leading-[1.3] lg:text-[17px]">
                We connect Farmers<br />to Service Providers
              </h3>
              <div className="mt-6 flex h-[112px] items-center justify-center rounded-[20px] bg-white lg:h-[128px]">
                <Image
                  src="/assets/pngs/logo.png"
                  width={128}
                  height={128}
                  alt="MechAfrica Africa mark"
                  className="scale-[1.75] object-contain"
                />
              </div>
            </article>

            <article className="rounded-[22px] border border-white/55 bg-primary/45 p-4 pb-5 backdrop-blur-sm">
              <div className="relative h-[112px] overflow-hidden rounded-[15px] lg:h-[128px]">
                <Image
                  src="/images/marketing/home-card-providers.png"
                  alt="Tractor in a field"
                  fill
                  sizes="(min-width: 768px) 342px, 140px"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-5 text-[15px] font-medium leading-[1.35] text-white/90 lg:text-[17px]">
                Providers struggle with visibility and coordination
              </p>
            </article>
          </div>
        </Container>
      </div>
    </section>
  );
}
