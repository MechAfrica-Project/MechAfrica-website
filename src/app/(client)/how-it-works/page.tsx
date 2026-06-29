import type { Metadata } from "next";
import Link from "next/link";
import {
  Bell,
  Compass,
  Layers3,
  MapPin,
  Phone,
  RefreshCcw,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/PageHero";
import { TiltedCallout } from "@/components/marketing/TiltedCallout";
import { EcosystemDiagram } from "@/components/marketing/EcosystemDiagram";

export const metadata: Metadata = {
  title: "How It Works | MechAfrica",
  description:
    "See how MechAfrica connects farmers, service providers, and field agents in Ghana — with mobile apps, offline-first workflows, and USSD access for farmers.",
};

const farmerFlow = [
  { title: "Request a service", text: "Choose a service, add farm details, and submit (app or USSD)." },
  { title: "Get matched and updated", text: "Get confirmations and status updates as work is scheduled." },
  { title: "Track and complete", text: "Follow progress to completion and confirm when the job is done." },
];

const providerFlow = [
  { title: "Receive demand", text: "See incoming requests by location and category." },
  { title: "Accept and schedule", text: "Confirm availability and plan routes and time windows." },
  { title: "Assign assets and teams", text: "Allocate equipment, operators, and time slots effectively." },
  { title: "Deliver and close out", text: "Track active work, share updates, and mark completion." },
];

const agentFlow = [
  { title: "Onboard users", text: "Support onboarding and profile readiness for farmers and providers." },
  { title: "Coordinate operations", text: "Help resolve bottlenecks and improve delivery reliability." },
  { title: "Support issues", text: "Manage follow-ups and field-level support workflows." },
];

const infrastructure = [
  { title: "Mobile apps", text: "Role-based app experiences for farmers and service providers.", icon: Layers3 },
  { title: "USSD access", text: `Farmers can request services via ${siteConfig.ussd.code} without a smartphone.`, icon: Phone },
  { title: "Offline-first sync", text: "Work in low-connectivity areas and sync when ready.", icon: RefreshCcw },
  { title: "Notifications", text: "Status updates keep demand and supply aligned.", icon: Bell },
  { title: "Location-aware operations", text: "Better routing and coordination across districts.", icon: MapPin },
  { title: "Trusted workflows", text: "Clear steps and accountability improve reliability over time.", icon: ShieldCheck },
  { title: "Routing and coordination", text: "Match demand to providers and track delivery end-to-end.", icon: Route },
  { title: "Agent support", text: "Field support for onboarding and coordination (planned).", icon: Users },
  { title: "Field-ready design", text: "Practical UX built for on-the-ground realities.", icon: Compass },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        heroImage={IMAGES.marketing.logistics}
        heroAlt="Service providers loading produce for transport"
        heading="How MechAfrica works"
        description="Requests move from farmer to provider to completion — supported by USSD access, offline-first workflows, and clear status updates."
        cta={
          <>
            <Button asChild className="h-11 rounded-full bg-primary px-5 text-white hover:bg-primary/90">
              <Link href="/download">Download & access</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary/30 px-5 text-primary hover:bg-primary/5"
            >
              <Link href="/contact">Partner or get support</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              A connected network, not a single app
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Farmers request services, providers deliver, and agents support onboarding and
              coordination.
            </p>
          </div>
          <div className="mt-10">
            <EcosystemDiagram />
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Clear steps for each audience
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Each role has a distinct journey — designed to reduce friction and improve
              delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div id="farmers" className="rounded-2xl bg-accent p-6">
              <div className="font-serif text-lg font-bold text-primary">For farmers</div>
              <p className="mt-2 text-sm text-primary/80">
                Request → track → complete (via app or USSD)
              </p>
              <ol className="mt-5 space-y-3">
                {farmerFlow.map((s, idx) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">{s.title}</div>
                      <div className="text-sm text-primary/80">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div id="providers" className="rounded-2xl bg-accent p-6">
              <div className="font-serif text-lg font-bold text-primary">For providers</div>
              <p className="mt-2 text-sm text-primary/80">
                Receive demand → accept → assign assets → complete
              </p>
              <ol className="mt-5 space-y-3">
                {providerFlow.map((s, idx) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">{s.title}</div>
                      <div className="text-sm text-primary/80">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div id="agents" className="rounded-2xl bg-accent p-6">
              <div className="flex items-start justify-between gap-2">
                <div className="font-serif text-lg font-bold text-primary">For agents</div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Planned release
                </span>
              </div>
              <p className="mt-2 text-sm text-primary/80">
                Onboard → support → coordinate (coming soon)
              </p>
              <ol className="mt-5 space-y-3">
                {agentFlow.map((s, idx) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">{s.title}</div>
                      <div className="text-sm text-primary/80">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Infrastructure that keeps delivery reliable
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Apps, USSD, offline-first design, and coordination workflows built for service
              delivery at scale.
            </p>
          </div>

          <div id="infrastructure" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((x) => (
              <div key={x.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                  <x.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="font-serif text-base font-bold text-primary">{x.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-primary/80">{x.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TiltedCallout
        heading="Ready to access MechAfrica?"
        description="Download the apps, or dial USSD for farmers without a smartphone."
        primaryCta={{ label: "Download & access", href: "/download" }}
        secondaryCta={{ label: `Dial ${siteConfig.ussd.code}`, href: siteConfig.ussd.telHref }}
      />
    </>
  );
}
