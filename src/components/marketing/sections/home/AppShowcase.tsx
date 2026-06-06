import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";

export function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="max-w-[1140px] pb-0 pt-12 md:pt-40">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[22px] font-bold leading-tight text-primary md:text-[43px]">
            Clear journeys for every role
          </h2>
          <p className="mx-auto mt-3 max-w-[370px] text-[11px] font-medium leading-[1.45] text-primary/80 md:mt-8 md:max-w-none md:text-[22px]">
            MechAfrica is designed to support how services actually move —
            from demand to delivery to coordination.
          </p>
          <Button asChild className="mt-5 h-[30px] rounded-[10px] bg-[#a7ec33] px-5 text-[9px] font-bold text-primary shadow-none hover:bg-[#b4f146] md:mt-10 md:h-[70px] md:rounded-[24px] md:px-11 md:text-[17px]">
            <Link href="/download">
              Download The App <span className="ml-3 md:ml-6">→</span>
            </Link>
          </Button>
        </div>
      </Container>

      <div className="relative mt-11 h-[365px] bg-white md:mt-28 md:h-[910px]">
        <div
          className="absolute inset-x-0 top-0 h-[250px] bg-primary md:h-[610px]"
          style={{ clipPath: "polygon(0 0, 100% 25%, 100% 82%, 0 66%)" }}
        />
        <div className="absolute left-1/2 top-[22px] flex w-[760px] -translate-x-1/2 items-start justify-center md:top-[80px] md:w-[1660px]">
          <Image
            src={IMAGES.marketing.farmersApp}
            alt="Farmers App"
            width={540}
            height={739}
            className="mt-[42px] w-[235px] object-contain md:mt-[88px] md:w-[540px]"
          />
          <Image
            src={IMAGES.marketing.mechAppHomeScreen}
            alt="MechAfrica App"
            width={575}
            height={575}
            className="-ml-4 w-[250px] object-contain md:-ml-8 md:w-[575px]"
            priority
          />
          <Image
            src={IMAGES.marketing.providersApp}
            alt="Providers App"
            width={560}
            height={712}
            className="-ml-1 mt-[32px] w-[250px] object-contain md:-ml-2 md:mt-[64px] md:w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
