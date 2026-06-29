import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/images";
import { SolutionAppSection } from "@/components/marketing/SolutionAppSection";

export const metadata: Metadata = {
  title: "For Service Providers | MechAfrica",
  description:
    "The MechAfrica Service Provider App helps you receive requests, manage jobs, assign assets and teams, and track delivery.",
};

export default function ServiceProvidersPage() {
  return (
    <SolutionAppSection
      heading="Service App"
      heroImage={IMAGES.marketing.serviceProviderFactory}
      heroAlt="Agricultural service workshop with tractors and equipment"
      phoneImage={IMAGES.marketing.providersApp}
      phoneAlt="MechAfrica Service Provider App home screen"
      phoneWidth={447}
      phoneHeight={558}
      paragraphs={[
        "MechAfrica empowers agricultural service providers with a dedicated operations platform designed to help them receive, manage, and deliver farming services efficiently at scale.",
        "Through the provider app, tractor owners, spraying teams, harvest operators, logistics providers, and other agricultural specialists can receive verified service requests directly from farmers, respond quickly to demand, and manage ongoing jobs from one centralized system.",
        "The platform enables providers to schedule tasks, coordinate operators, assign machinery, monitor active requests in real time, and keep farmers updated throughout the service process.",
        "With smart workflow management and location-based coordination, service providers can optimize operations across multiple farms and regions while reducing delays and inefficiencies. Built with both mobile app and offline-first support, MechAfrica ensures providers stay connected and productive even in low-network environments, creating a more reliable and scalable agricultural service ecosystem.",
      ]}
      banner={{
        type: "qr",
        androidUrl: siteConfig.appLinks.provider.playStore,
        iosUrl: siteConfig.appLinks.provider.appStore,
      }}
    />
  );
}
