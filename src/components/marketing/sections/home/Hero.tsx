import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="relative h-[850px] overflow-hidden bg-white max-md:h-auto max-md:pb-20">
      <div className="absolute inset-x-0 top-0 h-[370px] max-md:relative max-md:h-[250px]">
        <Image
          src={IMAGES.marketing.farmField}
          alt="Cultivated field"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div
        className="absolute inset-x-0 top-[275px] h-[445px] bg-white max-md:top-[190px] max-md:h-[430px]"
        style={{ clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[250px] bg-[#a7ec33]"
        style={{ clipPath: "polygon(0 6%, 100% 60%, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto h-full max-w-[1512px] max-md:min-h-[580px]">
        <Image
          src={IMAGES.marketing.homeTractor}
          alt="Orange tractor"
          width={790}
          height={659}
          priority
          className="absolute left-[-8px] top-[300px] z-10 w-[790px] max-w-[55vw] object-contain drop-shadow-[0_20px_24px_rgba(0,0,0,0.12)] max-md:left-[-80px] max-md:top-[235px] max-md:w-[560px] max-md:max-w-none"
        />

        <div className="absolute right-[12.5%] top-[405px] z-20 max-w-[435px] text-primary max-xl:right-[8%] max-lg:right-[5%] max-md:relative max-md:right-auto max-md:top-auto max-md:mx-6 max-md:mt-12 max-md:max-w-none">
          <h1 className="font-serif text-[46px] font-light leading-tight tracking-normal max-md:text-4xl">
            <span className="font-bold">Mech</span> Africa
          </h1>
          <p className="mt-6 text-[23px] font-medium leading-[1.43] text-primary max-md:text-lg">
            MechAfrica connects farmers struggling to find timely, reliable
            services to Providers who struggle with visibility and coordination —
            via <strong className="font-bold">mobile apps</strong> and{" "}
            <strong className="font-bold">USSD</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
