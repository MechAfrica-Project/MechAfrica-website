import Image from "next/image";

import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";

const services = [
  { label: "Harvesting", image: IMAGES.marketing.harvesting },
  { label: "Ripping", image: IMAGES.marketing.ripping },
  { label: "Ploughing", image: IMAGES.marketing.ploughing },
  { label: "Spraying", image: IMAGES.marketing.spraying },
  { label: "Drone", image: IMAGES.marketing.drone },
  { label: "Transportation", image: IMAGES.marketing.transportation },
  { label: "Threshing", image: IMAGES.marketing.threshing },
  { label: "Planting", image: IMAGES.marketing.planting },
];

export function AvailableServices() {
  return (
    <section className="relative overflow-hidden bg-[#fffbe2] py-36 max-md:py-20">
      <div
        className="absolute inset-x-0 top-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 38%, 0 8%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-white"
        style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
      />
      <Container className="relative z-10 max-w-[1140px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[43px] font-bold leading-tight text-primary max-md:text-3xl">
            Available Services
          </h2>
          <p className="mt-7 text-[21px] font-medium text-primary/80 max-md:text-base">
            From land preparation to harvesting — and more
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-4 lg:gap-x-14 lg:gap-y-24">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-7">
              <div className="relative size-40 overflow-hidden rounded-full sm:size-44 lg:size-[218px]">
                <Image src={s.image} alt={s.label} fill className="object-cover" />
              </div>
              <span className="text-center text-[25px] font-bold leading-tight text-primary max-md:text-lg">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
