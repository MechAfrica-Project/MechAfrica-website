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
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { EcosystemDiagram } from "@/components/marketing/EcosystemDiagram";

export const metadata: Metadata = {
  title: "How It Works | MechAfrica",
  description:
    "See how MechAfrica connects farmers, service providers, and agents with offline-first workflows, notifications, and USSD access for requesting and delivering farm services.",
};

const farmerFlow = [
  { title: "Request a service", text: "Choose a service, add farm details, and submit — via app or USSD." },
  { title: "Get matched and updated", text: "Receive confirmations and status updates as work is scheduled." },
  { title: "Track and complete", text: "Follow progress to completion and confirm when the job is done." },
];

const providerFlow = [
  { title: "Receive demand", text: "See incoming requests by location and category." },
  { title: "Accept and schedule", text: "Confirm availability, plan routes, and set expectations." },
  { title: "Assign assets and teams", text: "Allocate equipment, operators, and time slots effectively." },
  { title: "Deliver and close out", text: "Track active work, share updates, and mark completion." },
];

const agentFlow = [
  { title: "Onboard users", text: "Support farmer/provider onboarding and profile readiness." },
  { title: "Coordinate operations", text: "Help resolve bottlenecks and improve delivery reliability." },
  { title: "Support issues", text: "Manage follow-ups and field-level support workflows." },
];

const infrastructure = [
  { title: "Mobile apps", text: "Farmers and providers use tailored app experiences for their workflows.", icon: Layers3 },
  { title: "USSD access", text: `Farmers can request services via ${siteConfig.ussd.code} without a smartphone.`, icon: Phone },
  { title: "Offline-first sync", text: "Keep work moving in low-connectivity areas and sync when ready.", icon: RefreshCcw },
  { title: "Notifications", text: "Status updates keep demand and supply aligned.", icon: Bell },
  { title: "Location-aware operations", text: "Support better routing and coordination across districts.", icon: MapPin },
  { title: "Trusted workflows", text: "Clear steps and auditability improve reliability over time.", icon: ShieldCheck },
  { title: "Routing and coordination", text: "Match demand to providers and track delivery end-to-end.", icon: Route },
  { title: "Ecosystem support", text: "Agents help coordination and adoption (Agents App planned).", icon: Users },
  { title: "Field-ready design", text: "Practical UX built for on-the-ground realities.", icon: Compass },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Step-by-step</Badge>
              <Badge variant="outline">Apps + USSD</Badge>
              <Badge variant="outline">Offline-first</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              How MechAfrica works
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              MechAfrica connects farmers, service providers, and field agents through one platform. Requests
              flow from demand to delivery with clear status updates — designed for low-connectivity environments.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                <Link href="/download">Choose your access method</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-5">
                <Link href="/contact">Partner or get support</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Ecosystem model"
              title="A connected network, not a single app"
              description="Farmers request services, providers deliver, and agents support onboarding and coordination — all backed by platform infrastructure."
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="mt-10">
              <EcosystemDiagram />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Flows"
              title="Clear steps for each audience"
              description="Each role has a distinct journey — designed to reduce friction and improve delivery reliability."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FadeIn delay={0.02}>
              <div id="farmers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="font-serif text-xl font-semibold text-foreground">For farmers</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Request → track → complete (via app or USSD)
                </p>
                <ol className="mt-5 space-y-3">
                  {farmerFlow.map((s, idx) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{s.title}</div>
                        <div className="text-sm text-muted-foreground">{s.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div id="providers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="font-serif text-xl font-semibold text-foreground">For providers</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Receive demand → accept → assign assets → complete
                </p>
                <ol className="mt-5 space-y-3">
                  {providerFlow.map((s, idx) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{s.title}</div>
                        <div className="text-sm text-muted-foreground">{s.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div id="agents" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-serif text-xl font-semibold text-foreground">For agents</div>
                  <Badge variant="outline">Planned release</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Onboard → support → coordinate (coming soon)
                </p>
                <ol className="mt-5 space-y-3">
                  {agentFlow.map((s, idx) => (
                    <li key={s.title} className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{s.title}</div>
                        <div className="text-sm text-muted-foreground">{s.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Infrastructure"
              title="The platform layer that makes delivery reliable"
              description="MechAfrica combines apps, USSD, offline-first design, and coordination workflows to support service delivery at scale."
            />
          </FadeIn>

          <div id="infrastructure" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.02}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <x.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-lg font-semibold text-foreground">{x.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.08}>
            <div className="mt-10 rounded-3xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-semibold text-foreground">Use anchors on this page</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Jump to:{" "}
                <Link className="underline underline-offset-4" href="#farmers">
                  Farmers
                </Link>
                ,{" "}
                <Link className="underline underline-offset-4" href="#providers">
                  Providers
                </Link>
                ,{" "}
                <Link className="underline underline-offset-4" href="#agents">
                  Agents
                </Link>
                ,{" "}
                <Link className="underline underline-offset-4" href="#infrastructure">
                  Infrastructure
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-primary text-primary-foreground">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to access MechAfrica?
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  Download the apps for richer workflows, or dial USSD for farmer access without a smartphone.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="/download">Download / access</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-white/30 bg-transparent px-5"
                  >
                    <Link href={siteConfig.ussd.telHref}>Dial {siteConfig.ussd.code}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

