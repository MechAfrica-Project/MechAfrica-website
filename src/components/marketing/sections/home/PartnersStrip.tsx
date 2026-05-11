import Image from "next/image";

import { partners } from "@/content/site-config";
import { Container } from "@/components/site/Container";

export function PartnersStrip() {
  return (
    <section className="bg-white py-36 max-md:py-20">
      <Container className="max-w-[1140px]">
        <div className="mx-auto max-w-[1050px] text-center">
          <h2 className="font-serif text-[43px] font-bold leading-tight text-primary max-md:text-3xl">
            Partners &amp; Backing
          </h2>
          <p className="mt-7 text-[21px] font-medium leading-[1.45] text-primary/85 max-md:text-base">
            Built through the partnership of leading organizations in agricultural
            innovation and support. Focused on practical service delivery in Ghana —
            including areas with unreliable connectivity.
          </p>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-20 gap-y-10 max-md:mt-12">
          {partners.map((p, index) => (
            <Image
              key={p.name}
              src={p.image}
              alt={p.name}
              width={index === 1 ? 220 : 185}
              height={70}
              className="object-contain"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
