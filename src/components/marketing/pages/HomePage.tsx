import { HomeHero } from "@/components/marketing/sections/home/Hero";
import { WhatWeDo } from "@/components/marketing/sections/home/WhatWeDo";
import { PartnersStrip } from "@/components/marketing/sections/home/PartnersStrip";
import { AvailableServices } from "@/components/marketing/sections/home/AvailableServices";
import { FocusCrops } from "@/components/marketing/sections/home/FocusCrops";
import { AppShowcase } from "@/components/marketing/sections/home/AppShowcase";
import { FieldStories } from "@/components/marketing/sections/home/FieldStories";
import { HomeFaq } from "@/components/marketing/sections/home/HomeFaq";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <PartnersStrip />
      <AvailableServices />
      <FocusCrops />
      <AppShowcase />
      <FieldStories />
      <HomeFaq />
    </>
  );
}
