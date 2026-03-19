import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bell, ClipboardCheck, ShieldCheck, Users } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";

export const metadata: Metadata = {
  title: "For Agents | MechAfrica",
  description:
    "The MechAfrica Agents App (planned release) supports onboarding and field coordination across farmers and service providers.",
};

export default function AgentsPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>For agents</Badge>
                <Badge variant="outline">Planned release</Badge>
                <Badge variant="outline">Operations support</Badge>
              </div>

              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Field coordination that strengthens service delivery
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Agents App is an upcoming tool for onboarding, coordination, and issue resolution across the
                MechAfrica network — designed for on-the-ground operations.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                  <Link href={siteConfig.appLinks.agents.waitlist}>
                    Join waitlist <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-full px-5">
                  <Link href="/contact">Contact us</Link>
                </Button>
                <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                  <Link href="/how-it-works#agents">See agent role</Link>
                </Button>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <OptionalPhotoCard
                src={IMAGES.marketing.agents}
                alt="Field agent coordinating with farmers and service providers"
                aspect="4/3"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeader
                eyebrow="Who agents are"
                title="Operational support for onboarding and coordination"
                description="Agents support adoption and delivery quality across communities and districts."
              />
            </FadeIn>

            <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
              {[
                {
                  title: "Onboarding support",
                  text: "Help farmers and providers get started and complete profiles.",
                  icon: Users,
                },
                {
                  title: "Coordination and follow-ups",
                  text: "Support scheduling and follow-ups where coordination improves delivery.",
                  icon: ClipboardCheck,
                },
                {
                  title: "Issue management",
                  text: "Track issues and ensure requests move forward to completion.",
                  icon: ShieldCheck,
                },
                {
                  title: "Notification-based workflows",
                  text: "Respond to alerts and updates that keep the network aligned.",
                  icon: Bell,
                },
              ].map((b, idx) => (
                <FadeIn key={b.title} delay={idx * 0.03}>
                  <div className="rounded-3xl border bg-card p-6 shadow-sm">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <b.icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="font-serif text-lg font-semibold">{b.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Planned features"
              title="What the Agents App will support"
              description="Coming soon — designed for practical field coordination."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Agent profiles and territories",
                text: "Define districts/communities, responsibilities, and onboarding assignments.",
              },
              {
                title: "Onboarding checklists",
                text: "Track readiness for farmers and providers with clear steps and follow-ups.",
              },
              {
                title: "Case + issue tracking",
                text: "Log issues, route them to the right team, and close the loop with updates.",
              },
              {
                title: "Operational notifications",
                text: "Reminders for pending requests, field updates, and resolution tasks.",
              },
              {
                title: "Offline-first workflows",
                text: "Support field work even when connectivity is unreliable.",
              },
              {
                title: "Cross-role coordination",
                text: "Help reduce bottlenecks by supporting routing and communication between roles.",
              },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.03}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="font-serif text-xl font-semibold text-foreground">{x.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary text-primary-foreground">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Want to be part of the rollout?
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  Join the waitlist to learn more about the Agents App release timeline and pilot opportunities.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-black/15 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Agents App</div>
                    <Badge variant="outline">Coming soon</Badge>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                      <Link href={siteConfig.appLinks.agents.waitlist}>
                        Join waitlist <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-transparent">
                      <Link href="/contact">Contact us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

