import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";
import { HomePage } from "@/components/marketing/pages/HomePage";

export default function Home() {
  return <HomePage />;
}

export const metadata: Metadata = {
  title: "MechAfrica | Agricultural services network in Ghana",
  description: siteConfig.description,
};
