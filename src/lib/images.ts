import type { StaticImageData } from "next/image";

import homeHero from "../../public/images/marketing/home-hero.png";
import farmers from "../../public/images/marketing/farmers.png";
import providers from "../../public/images/marketing/providers.png";
import agents from "../../public/images/marketing/agents.png";
import impact from "../../public/images/marketing/impact.png";
import onboarding from "../../public/images/marketing/onboarding.png";
import ussd from "../../public/images/marketing/ussd.png";
import logistics from "../../public/images/marketing/logistics.png";

export type MarketingImageKey =
  | "homeHero"
  | "farmers"
  | "providers"
  | "agents"
  | "impact"
  | "onboarding"
  | "ussd"
  | "logistics";

export const IMAGES: {
  marketing: Record<MarketingImageKey, StaticImageData>;
} = {
  marketing: {
    homeHero,
    farmers,
    providers,
    agents,
    impact,
    onboarding,
    ussd,
    logistics,
  },
};
