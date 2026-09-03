import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/pages/HomePage";

export default function Home() {
  return <HomePage />;
}

export const metadata: Metadata = {
  title: "MechAfrica | Agricultural services network in Ghana",
  description:
    "MechAfrica connects 21,759+ farmers and 3,554+ service providers across 9 regions of Ghana to request, manage, and deliver farm services via mobile apps and USSD (*928*123#).",
};
