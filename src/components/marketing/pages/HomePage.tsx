import { HomeHero } from "@/components/marketing/sections/home/Hero";
import { PartnersStrip } from "@/components/marketing/sections/home/PartnersStrip";
import { WhatWeDo } from "@/components/marketing/sections/home/WhatWeDo";
import { ServiceCategoriesSection } from "@/components/marketing/ServiceCategoriesSection";
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
      <ServiceCategoriesSection
        eyebrow="Available services"
        title="From land preparation to harvesting — and more"
        description="Request the service category you need through the app or USSD. Availability varies by district."
        backgroundClassName="bg-background"
      />
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

