import type { Metadata } from "next";
import { Fragment } from "react";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/images";
import { SolutionAppSection } from "@/components/marketing/SolutionAppSection";

export const metadata: Metadata = {
  title: "For Farmers | MechAfrica",
  description:
    "Request ploughing, spraying, harvesting, and more through the MechAfrica Farmers App or USSD. Track updates and complete jobs with confidence.",
};

export default function FarmersPage() {
  return (
    <SolutionAppSection
      heading="Farmer's App"
      heroImage={IMAGES.marketing.farmField}
      heroAlt="Farmer in a maize field at sunset"
      phoneImage={IMAGES.marketing.farmersApp}
      phoneAlt="MechAfrica Farmers App home screen"
      phoneWidth={437}
      phoneHeight={571}
      paragraphs={[
        "MechAfrica has built a coordinated agricultural service network designed for the realities of modern farming, reducing friction across the entire service chain — from request to delivery to ongoing support.",
        "Farmers can easily request essential services such as land preparation, planting, spraying, harvesting, threshing, logistics, and more through a simple mobile app or USSD access, making the platform accessible even in low-connectivity areas.",
        "Trusted service providers with different specializations are then matched to demand, allowing them to respond quickly, communicate updates, and deliver efficient support to farmers. With real-time operational management, teams can track requests, schedule jobs, and coordinate assets seamlessly across multiple locations.",
        <Fragment key="ussd-paragraph">
          By combining offline-first workflows with both <strong className="font-semibold">app</strong> and{" "}
          <strong className="font-semibold">USSD</strong> support ({siteConfig.ussd.code}), MechAfrica ensures that
          agricultural work continues smoothly, expanding access and empowering farmers and providers alike.
        </Fragment>,
      ]}
      banner={{
        type: "qr",
        androidUrl: siteConfig.appLinks.farmer.playStore,
        iosUrl: siteConfig.appLinks.farmer.appStore,
      }}
    />
  );
}
