import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/images";
import { SolutionAppSection } from "@/components/marketing/SolutionAppSection";

export const metadata: Metadata = {
  title: "For Agents | MechAfrica",
  description:
    "The MechAfrica Agents App (planned release) supports onboarding and field coordination across farmers and service providers.",
};

export default function AgentsPage() {
  return (
    <SolutionAppSection
      heading="Agents App"
      heroImage={IMAGES.marketing.agents}
      heroAlt="Field agent coordinating with farmers"
      phoneImage={IMAGES.marketing.agentApp}
      phoneAlt="MechAfrica app splash screen"
      phoneWidth={975}
      phoneHeight={975}
      paragraphs={[
        "MechAfrica equips field agents with a coordination toolkit designed to support onboarding, communication, and issue resolution across the farmer and provider network.",
        "Agents help new farmers and service providers get started — completing profiles, explaining how requests and USSD access work, and ensuring each community has a reliable point of contact on the ground.",
        "Through structured checklists and real-time notifications, agents track onboarding progress, follow up on pending requests, and route issues to the right team so nothing falls through the cracks.",
        "Built for low-connectivity environments, the Agents App keeps field teams productive and informed, strengthening service delivery across every district MechAfrica reaches.",
      ]}
      banner={{
        type: "cta",
        href: siteConfig.appLinks.agents.waitlist,
        label: "Join waitlist",
      }}
    />
  );
}
