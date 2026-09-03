import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/pages/HomePage";
import { getHeadlineCounts } from "@/lib/metrics";

export default function Home() {
  return <HomePage />;
}

export async function generateMetadata(): Promise<Metadata> {
  const { farmers, providers } = await getHeadlineCounts();

  return {
    title: "MechAfrica | Agricultural services network in Ghana",
    description: `MechAfrica connects ${farmers} farmers and ${providers} service providers across 9 regions of Ghana to request, manage, and deliver farm services via mobile apps and USSD (*928*123#).`,
  };
}
