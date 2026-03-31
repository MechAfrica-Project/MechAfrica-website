import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/pages/HomePage";

export default function Home() {
  return <HomePage />;
}

export const metadata: Metadata = {
  title: "MechAfrica | Agricultural services network in Ghana",
  description:
    "MechAfrica connects 100k+ farmers and 300+ service providers in Ghana to request, manage, and deliver farm services via mobile apps and USSD (*928*193#).",
};
