"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { IMAGES } from "@/lib/images";

const MotionImage = motion.create(Image);

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: tractor sinks slightly and text lifts as the hero scrolls away
  const tractorY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[370px] overflow-hidden bg-white md:h-[500px] lg:h-[560px] 2xl:h-[620px]"
    >
      <div className="absolute inset-x-0 top-0 h-[130px] md:h-[240px] lg:h-[300px] 2xl:h-[335px] overflow-hidden">
        <MotionImage
          src={IMAGES.marketing.farmField}
          alt="Cultivated field"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-[101px] h-[105px] bg-white md:h-[300px]  lg:h-[340px] 2xl:h-[390px]"
        style={{ clipPath: "polygon(0 24%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[170px] bg-[#a7ec33] md:h-[210px] lg:h-[260px] 2xl:h-[290px]"
        style={{ clipPath: "polygon(0 8%, 100% 60%, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto h-full max-w-[570px] md:max-w-[1512px]">
        <MotionImage
          src={IMAGES.marketing.homeTractor}
          alt="Orange tractor"
          width={790}
          height={659}
          priority
          className="absolute left-[5px] top-[100px] md:top-27 lg:top-22 z-10 w-55 md:w-95 lg:w-140 xl:"
          initial={reduceMotion ? false : { opacity: 0, x: -110 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          style={reduceMotion ? undefined : { y: tractorY }}
        />

        <motion.div
          className="absolute right-[55px] top-[115px] z-20 max-w-[205px] text-primary max-[480px]:right-[18px] max-[480px]:top-[130px] max-[480px]:max-w-[145px] max-[360px]:right-[14px] max-[360px]:max-w-[130px] md:right-[8%] md:top-[170px] md:max-w-[340px] lg:right-[11%] lg:top-[180px] lg:max-w-[390px] xl:right-[12.5%]"
          style={reduceMotion ? undefined : { y: textY }}
        >
          <motion.h1
            className="font-serif text-[20px] font-light leading-tight tracking-normal max-[480px]:text-[18px] md:text-[34px] lg:text-[40px] xl:text-[42px]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          >
            <strong className="font-extrabold">Mech</strong> Africa
          </motion.h1>
          <motion.p
            className="mt-2 text-[10.5px] font-medium leading-[1.45] text-primary max-[480px]:text-[9.5px] md:mt-4 md:text-[16px] lg:text-[18px] xl:text-[22px]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          >
            MechAfrica connects farmers struggling to find timely, reliable
            services to Providers who struggle with visibility and coordination
            — via <strong className="font-bold">mobile apps</strong> and{" "}
            <strong className="font-bold">USSD</strong>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
