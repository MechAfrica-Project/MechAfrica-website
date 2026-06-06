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
    <section className="relative overflow-hidden bg-[#fffbe2] py-16 md:py-36">
      <div
        className="absolute inset-x-0 top-0 h-10 bg-white md:h-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 38%, 0 8%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-12 bg-white md:h-24"
        style={{ clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)" }}
      />
      <Container className="relative z-10 max-w-[1140px] px-8 md:px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[21px] font-bold leading-tight text-primary md:text-[43px]">
            Available Services
          </h2>
          <p className="mt-3 text-[11px] font-medium text-primary/80 md:mt-7 md:text-[21px]">
            From land preparation to harvesting — and more
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-4 md:mt-20 lg:gap-x-14 lg:gap-y-24">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3 md:gap-7">
              <div className="relative size-[112px] max-w-full overflow-hidden rounded-full max-[360px]:size-[96px] sm:size-[108px] md:size-44 lg:size-[218px]">
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  sizes="(min-width: 1024px) 218px, (min-width: 768px) 176px, (min-width: 640px) 108px, 92px"
                  className="object-cover"
                />
              </div>
              <span className="text-center text-[12px] font-bold leading-tight text-primary md:text-[25px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
