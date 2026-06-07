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

      <div className="relative mt-11 h-[330px] bg-white sm:h-[420px] md:mt-28 md:h-[910px]">
        <div
          className="absolute inset-x-0 top-0 h-[215px] bg-primary sm:h-[270px] md:h-[610px]"
          style={{ clipPath: "polygon(0 0, 100% 25%, 100% 82%, 0 66%)" }}
        />
        <div className="absolute inset-x-0 top-4 flex items-start justify-center gap-3 md:top-[80px] md:gap-6">
          <Image
            src={IMAGES.marketing.farmersApp}
            alt="Farmers App"
            width={600}
            height={750}
            className="mt-[22px] w-[27vw] max-w-[380px] object-contain md:mt-[88px]"
          />
          <Image
            src={IMAGES.marketing.mechAppHomeScreen}
            alt="MechAfrica App"
            width={600}
            height={750}
            className="w-[32vw] max-w-[460px] object-contain"
            priority
          />
          <Image
            src={IMAGES.marketing.providersApp}
            alt="Providers App"
            width={600}
            height={750}
            className="mt-[16px] w-[27vw] max-w-[380px] object-contain md:mt-[64px]"
          />
        </div>
      </div>
    </section>
  );
}
