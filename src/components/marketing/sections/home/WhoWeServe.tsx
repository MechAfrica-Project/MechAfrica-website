import Link from "next/link";
import { ArrowRight, ClipboardList, Tractor, Users, type LucideIcon } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

type Audience = {
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  href: string;
  badge?: string;
};

const audiences: Audience[] = [
  {
    title: "Farmers",
    icon: Tractor,
    description: "Request services, track progress, and get support — via app or USSD.",
    benefits: ["Request services faster", "Track updates", "Use USSD without a smartphone"],
    href: "/solutions/farmers",
  },
  {
    title: "Service Providers",
    icon: ClipboardList,
    description: "Receive demand, manage jobs, assign teams and assets, and grow visibility.",
    benefits: ["Job management", "Asset coordination", "Professional presence"],
    href: "/solutions/service-providers",
  },
  {
    title: "Agents",
    icon: Users,
    description: "Support onboarding, coordination, and operational follow-ups across the network.",
    benefits: ["Onboarding support", "Issue management", "Field coordination"],
    href: "/solutions/agents",
    badge: "Coming soon",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-muted/40">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Who it serves"
            title="Clear journeys for every role"
            description="MechAfrica is designed to support how services actually move — from demand to delivery to coordination."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {audiences.map((a, idx) => (
            <FadeIn key={a.title} delay={idx * 0.04}>
              <Card className="h-full rounded-3xl">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <a.icon className="size-5" aria-hidden="true" />
                    </div>
                    {a.badge ? <Badge variant="outline">{a.badge}</Badge> : null}
                  </div>
                  <CardTitle className="mt-4 font-serif text-xl">{a.title}</CardTitle>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {a.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button asChild variant="ghost" className="h-10 rounded-full px-4">
                    <Link href={a.href}>
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
