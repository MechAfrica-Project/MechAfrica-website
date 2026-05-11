import Image from "next/image";

import { IMAGES } from "@/lib/images";
import { testimonials } from "@/content/site-config";
import { Container } from "@/components/site/Container";

export function FieldStories() {
  const story = testimonials[0];
  if (!story) return null;

  return (
    <section className="relative min-h-[810px] overflow-hidden bg-white">
      <Image
        src={IMAGES.marketing.stories}
        alt="Farmer in the field"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent" />

      <Container className="relative z-10 max-w-[1140px] pb-56 pt-20 md:pt-28">
        <div className="max-w-[650px]">
          <h2 className="font-serif text-[43px] font-bold leading-tight text-primary max-md:text-3xl">
            Stories from the field
          </h2>
          <p className="mt-8 text-[28px] font-medium leading-[1.55] text-primary max-md:text-lg">
            {story.quote}
          </p>
          <div className="mt-10 flex items-center gap-5 border-l-[18px] border-primary pl-5">
            <div>
              <p className="text-[22px] font-bold leading-tight text-primary max-md:text-base">{story.name}</p>
              <p className="text-[20px] font-medium leading-tight text-primary/85 max-md:text-sm">{story.role}</p>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-primary"
        style={{ clipPath: "polygon(0 42%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
