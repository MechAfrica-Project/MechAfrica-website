import { Sprout } from "lucide-react";

import { focusCrops } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { OptionalImage } from "@/components/marketing/OptionalImage";

export function FocusCrops() {
  return (
    <section className="bg-white py-14 md:py-24">
      <Container className="max-w-[1140px] px-8 md:px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[21px] font-bold leading-tight text-primary md:text-[43px]">
            Crops we focus on
          </h2>
          <p className="mt-3 text-[11px] font-medium text-primary/80 md:mt-7 md:text-[21px]">
            Services matched to the crops Ghanaian farmers grow most
          </p>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:mt-16 md:grid-cols-6 md:gap-y-10">
          {focusCrops.map((crop) => (
            <div key={crop.name} className="flex flex-col items-center gap-2 md:gap-4">
              <div className="relative flex size-[72px] items-center justify-center overflow-hidden rounded-full bg-accent sm:size-20 md:size-28 lg:size-32">
                <Sprout className="size-6 text-primary/60 md:size-8" aria-hidden="true" />
                <OptionalImage
                  src={crop.image}
                  alt={crop.name}
                  fill
                  sizes="(min-width: 1024px) 128px, (min-width: 768px) 112px, 80px"
                  className="object-cover"
                />
              </div>
              <span className="text-center text-[12px] font-bold leading-tight text-primary md:text-[18px]">
                {crop.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
