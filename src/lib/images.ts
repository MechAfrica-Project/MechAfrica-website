import type { StaticImageData } from "next/image";

import homeHero from "../../public/images/marketing/home-hero.png";
import farmers from "../../public/images/marketing/farmers.png";
import providers from "../../public/images/marketing/providers.png";
import agents from "../../public/images/marketing/agents.png";
import bagging from "../../public/images/marketing/bagging.png";
import fertilization from "../../public/images/marketing/fertilization.png";
import harrowing from "../../public/images/marketing/harrowing.png";
import impact from "../../public/images/marketing/impact.png";
import onboarding from "../../public/images/marketing/onboarding.png";
import ussd from "../../public/images/marketing/ussd.png";
import logistics from "../../public/images/marketing/logistics.png";
import drone from "../../public/images/marketing/drone.png";
import farmersApp from "../../public/images/marketing/farmersApp.png";
import farmField from "../../public/images/marketing/farmField.png";
import harvesting from "../../public/images/marketing/harvesting.png";
import homeFarmer from "../../public/images/marketing/homeFarmer.png";
import homeTractor from "../../public/images/marketing/homeTractor.png";
import mechAppHomeScreen from "../../public/images/marketing/mechAppHomeScreen.png";
import planting from "../../public/images/marketing/planting.png";
import ploughing from "../../public/images/marketing/ploughing.png";
import providersApp from "../../public/images/marketing/ProvidersApp.png";
import ripping from "../../public/images/marketing/ripping.png";
import serviceProviderFactory from "../../public/images/marketing/serviceProviderFactory.png";
import spraying from "../../public/images/marketing/spraying.png";
import stories from "../../public/images/marketing/stories.png";
import threshing from "../../public/images/marketing/threshing.png";
import transportation from "../../public/images/marketing/transportation.png";
import agentApp from "../../public/images/marketing/agentsApp.png";

export type MarketingImageKey =
  | "homeHero"
  | "farmers"
  | "providers"
  | "agents"
  | "bagging"
  | "fertilization"
  | "harrowing"
  | "impact"
  | "onboarding"
  | "ussd"
  | "logistics"
  | "drone"
  | "farmersApp"
  | "farmField"
  | "harvesting"
  | "homeFarmer"
  | "homeTractor"
  | "mechAppHomeScreen"
  | "planting"
  | "ploughing"
  | "providersApp"
  | "ripping"
  | "serviceProviderFactory"
  | "spraying"
  | "stories"
  | "threshing"
  | "transportation"
  | "agentApp";

export const IMAGES: {
  marketing: Record<MarketingImageKey, StaticImageData>;
} = {
  marketing: {
    homeHero,
    farmers,
    providers,
    agents,
    bagging,
    fertilization,
    harrowing,
    impact,
    onboarding,
    ussd,
    logistics,
    drone,
    farmersApp,
    farmField,
    harvesting,
    homeFarmer,
    homeTractor,
    mechAppHomeScreen,
    planting,
    ploughing,
    providersApp,
    ripping,
    serviceProviderFactory,
    spraying,
    stories,
    threshing,
    transportation,
    agentApp,
  },
};
