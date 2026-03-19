import { HomeHero } from "@/components/marketing/sections/home/Hero";
import { PartnersStrip } from "@/components/marketing/sections/home/PartnersStrip";
import { WhatWeDo } from "@/components/marketing/sections/home/WhatWeDo";
import { WhoWeServe } from "@/components/marketing/sections/home/WhoWeServe";
import { PlatformAccess } from "@/components/marketing/sections/home/PlatformAccess";
import { FieldMoments } from "@/components/marketing/sections/home/FieldMoments";
import { WhyItMatters } from "@/components/marketing/sections/home/WhyItMatters";
import { PlatformHighlights } from "@/components/marketing/sections/home/PlatformHighlights";
import { HowItWorksPreview } from "@/components/marketing/sections/home/HowItWorksPreview";
import { ImpactProof } from "@/components/marketing/sections/home/ImpactProof";
import { Testimonials } from "@/components/marketing/sections/home/Testimonials";
import { FinalCTA } from "@/components/marketing/sections/home/FinalCTA";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <PartnersStrip />
      <WhatWeDo />
      <WhoWeServe />
      <PlatformAccess />
      <FieldMoments />
      <WhyItMatters />
      <PlatformHighlights />
      <HowItWorksPreview />
      <ImpactProof />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

