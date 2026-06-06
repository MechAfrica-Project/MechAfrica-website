import Image from "next/image";

import { partners } from "@/content/site-config";
import { Container } from "@/components/site/Container";

export function PartnersStrip() {
  return (
    <section className="bg-white py-11 md:py-36">
      <Container className="max-w-[1140px] px-8 md:px-4">
        <div className="mx-auto max-w-[1050px] text-center">
          <h2 className="font-serif text-[20px] font-bold leading-tight text-primary md:text-[43px]">
            Partners &amp; Backing
          </h2>
          <p className="mx-auto mt-4 max-w-[470px] text-[11px] font-medium leading-[1.45] text-primary/85 md:mt-7 md:max-w-none md:text-[21px]">
            Built through the partnership of leading organizations in agricultural
            innovation and support. Focused on practical service delivery in Ghana —
            including areas with unreliable connectivity.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 md:mt-24 md:gap-x-20 md:gap-y-10">
          {partners.map((p, index) => (
            <Image
              key={p.name}
              src={p.image}
              alt={p.name}
              width={index === 1 ? 220 : 185}
              height={70}
              className={index === 1 ? "h-auto w-[112px] object-contain md:w-[220px]" : "h-auto w-[88px] object-contain md:w-[185px]"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
