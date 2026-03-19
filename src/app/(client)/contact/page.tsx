import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/marketing/ContactForm";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Contact | MechAfrica",
  description:
    "Contact MechAfrica for partnerships, support, and app access inquiries. Includes a contact form and placeholder contact details for launch.",
};

function normalizeTopic(value: string | undefined) {
  const v = (value || "").toLowerCase();
  if (v === "agents") return "agents";
  if (v === "partnership") return "partnership";
  if (v === "support") return "support";
  if (v === "app_help") return "app_help";
  return "general";
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { topic?: string };
}) {
  const defaultTopic = normalizeTopic(searchParams?.topic) as
    | "partnership"
    | "support"
    | "app_help"
    | "general"
    | "agents";

  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Contact</Badge>
              <Badge variant="outline">Partnership</Badge>
              <Badge variant="outline">Support</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let’s talk
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Use the form to send a partnership inquiry, get support, or ask about access methods. Contact
              details below are placeholders — update them for launch.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <FadeIn className="lg:col-span-5">
              <SectionHeader
                eyebrow="Get in touch"
                title="Partnerships, support, and ecosystem coordination"
                description="Select the inquiry type so we can route your message to the right team."
              />

              <div className="mt-8 space-y-3 rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-primary/80" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-primary/80" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-primary/80" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Office</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.contact.address}</div>
                  </div>
                </div>

                <div className="pt-3 text-xs text-muted-foreground">
                  Tip: store contact details in <code>src/content/site-config.ts</code>.
                </div>
              </div>

              <div className="mt-6 rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-sm font-semibold text-foreground">Agents App waitlist</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Agents App is planned for a future release. Use the form and choose “Agents waitlist”, or
                  visit the Agents page for details.
                </p>
                <div className="mt-4">
                  <Link className="text-sm font-semibold underline underline-offset-4" href="/solutions/agents">
                    Learn about agents
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-7" delay={0.06}>
              <ContactForm defaultTopic={defaultTopic} />
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}

