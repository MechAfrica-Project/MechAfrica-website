import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";

export function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="max-w-[1140px] pb-0 pt-40 max-md:pt-20">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[43px] font-bold leading-tight text-primary max-md:text-3xl">
            Clear journeys for every role
          </h2>
          <p className="mt-8 text-[22px] font-medium leading-[1.45] text-primary/80 max-md:text-base">
            MechAfrica is designed to support how services actually move —
            from demand to delivery to coordination.
          </p>
          <Button asChild className="mt-10 h-[70px] rounded-[24px] bg-[#a7ec33] px-11 text-[17px] font-bold text-primary shadow-none hover:bg-[#b4f146] max-md:h-12 max-md:rounded-full">
            <Link href="/download">
              Download The App <span className="ml-6">→</span>
            </Link>
          </Button>
        </div>
      </Container>

      <div className="relative mt-28 h-[910px] bg-white max-md:mt-12 max-md:h-[620px]">
        <div
          className="absolute inset-x-0 top-0 h-[610px] bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 25%, 100% 82%, 0 66%)" }}
        />
        <div className="absolute left-1/2 top-[80px] flex w-[1660px] -translate-x-1/2 items-start justify-center max-md:top-[70px] max-md:w-[1050px]">
          <Image
            src={IMAGES.marketing.farmersApp}
            alt="Farmers App"
            width={540}
            height={739}
            className="mt-[88px] w-[540px] object-contain max-md:w-[350px]"
          />
          <Image
            src={IMAGES.marketing.mechAppHomeScreen}
            alt="MechAfrica App"
            width={575}
            height={575}
            className="-ml-8 w-[575px] object-contain max-md:-ml-5 max-md:w-[370px]"
            priority
          />
          <Image
            src={IMAGES.marketing.providersApp}
            alt="Providers App"
            width={560}
            height={712}
            className="-ml-2 mt-[64px] w-[560px] object-contain max-md:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
