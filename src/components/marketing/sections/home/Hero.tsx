import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="relative h-[370px] overflow-hidden bg-white md:h-[500px] lg:h-[560px] 2xl:h-[620px]">
      <div className="absolute inset-x-0 top-0 h-[130px] md:h-[240px] lg:h-[300px] 2xl:h-[335px]">
        <Image
          src={IMAGES.marketing.farmField}
          alt="Cultivated field"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div
        className="absolute inset-x-0 top-[101px] h-[205px] bg-white md:top-[165px] md:h-[300px] lg:top-[215px] lg:h-[340px] 2xl:top-[245px] 2xl:h-[390px]"
        style={{ clipPath: "polygon(0 24%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[130px] bg-[#a7ec33] md:h-[210px] lg:h-[260px] 2xl:h-[290px]"
        style={{ clipPath: "polygon(0 8%, 100% 60%, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto h-full max-w-[570px] md:max-w-[1512px]">
        <Image
          src={IMAGES.marketing.homeTractor}
          alt="Orange tractor"
          width={790}
          height={659}
          priority
          className="absolute left-[18px] top-[100px] z-10 w-[275px] max-w-none object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)] max-[480px]:left-[-20px] max-[480px]:top-[124px] max-[480px]:w-[220px] max-[360px]:left-[-34px] max-[360px]:w-[190px] md:left-[-4px] md:top-[105px] md:w-[420px] md:max-w-[42vw] md:drop-shadow-[0_20px_24px_rgba(0,0,0,0.12)] lg:w-[500px] xl:w-[540px]"
        />

        <div className="absolute right-[55px] top-[155px] z-20 max-w-[205px] text-primary max-[480px]:right-[18px] max-[480px]:top-[150px] max-[480px]:max-w-[145px] max-[360px]:right-[14px] max-[360px]:max-w-[130px] md:right-[8%] md:top-[210px] md:max-w-[340px] lg:right-[11%] lg:top-[275px] lg:max-w-[390px] xl:right-[12.5%]">
          <h1 className="font-serif text-[20px] font-light leading-tight tracking-normal max-[480px]:text-[18px] md:text-[34px] lg:text-[40px] xl:text-[42px]">
            <strong className="font-extrabold">Mech</strong> Africa
          </h1>
          <p className="mt-2 text-[10.5px] font-medium leading-[1.45] text-primary max-[480px]:text-[9.5px] md:mt-4 md:text-[16px] lg:text-[18px] xl:text-[19px]">
            MechAfrica connects farmers struggling to find timely, reliable
            services to Providers who struggle with visibility and coordination
            — via <strong className="font-bold">mobile apps</strong> and{" "}
            <strong className="font-bold">USSD</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
