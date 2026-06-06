import Image from "next/image";

import { IMAGES } from "@/lib/images";
import { testimonials } from "@/content/site-config";
import { Container } from "@/components/site/Container";

export function FieldStories() {
  const story = testimonials[0];
  if (!story) return null;

  return (
    <section className="relative min-h-[305px] overflow-hidden bg-white md:min-h-[810px]">
      <Image
        src={IMAGES.marketing.stories}
        alt="Farmer in the field"
        fill
        sizes="100vw"
        className="object-cover object-center md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-white/0 md:via-white/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent md:from-white/80" />

      <Container className="relative z-10 max-w-[1140px] px-10 pb-20 pt-8 md:pb-56 md:pt-28">
        <div className="max-w-[205px] md:max-w-[650px]">
          <h2 className="font-serif text-[17px] font-bold leading-tight text-primary md:text-[43px]">
            Stories from the field
          </h2>
          <p className="mt-2 text-[9px] font-medium leading-[1.55] text-primary md:mt-8 md:text-[28px]">
            {story.quote}
          </p>
          <div className="mt-3 flex items-center gap-2 border-l-[8px] border-primary pl-2 md:mt-10 md:gap-5 md:border-l-[18px] md:pl-5">
            <div>
              <p className="text-[8px] font-bold leading-tight text-primary md:text-[22px]">{story.name}</p>
              <p className="text-[7px] font-medium leading-tight text-primary/85 md:text-[20px]">{story.role}</p>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-primary md:h-48"
        style={{ clipPath: "polygon(0 42%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
