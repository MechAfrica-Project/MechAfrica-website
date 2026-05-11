import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { impactMetrics, siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { UssdButton } from "@/components/site/UssdButton";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Impact", href: "/impact" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks = [
  { label: "For Farmers", href: "/solutions/farmers" },
  { label: "For Service Providers", href: "/solutions/service-providers" },
  { label: "For Agents", href: "/solutions/agents" },
];

const legalLinks = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const footerMetrics = [
    { value: impactMetrics[0]?.value ?? "—", label: "Farmers" },
    { value: impactMetrics[1]?.value ?? "—", label: "Providers" },
    { value: siteConfig.ussd.code, label: "USSD" },
  ];

  return (
    <footer className="border-t bg-background text-foreground">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <Logo />
            <p className="max-w-md text-sm text-muted-foreground">
              MechAfrica is a Ghana-first agricultural services network connecting farmers, service providers,
              and field teams — with offline-first workflows and USSD access.
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {footerMetrics.map((m) => (
                <div key={m.label} className="rounded-full border border-border bg-muted px-3 py-1">
                  <span className="font-semibold text-foreground">{m.value}</span>{" "}
                  <span className="text-muted-foreground">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 rounded-2xl border border-border bg-muted p-4">
              <div className="text-sm font-semibold">Need a smartphone-free option?</div>
              <div className="flex flex-wrap items-center gap-2">
                <UssdButton
                  code={siteConfig.ussd.code}
                  telHref={siteConfig.ussd.telHref}
                />
                <div className="text-sm text-muted-foreground">
                  Farmers can request services via USSD.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm font-semibold">Quick links</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground transition-colors" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Solutions</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {solutionLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-foreground transition-colors" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Contact</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 opacity-70" />
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 opacity-70" />
                  <span>{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 opacity-70" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>

              <div className="pt-3">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.farmer.playStore}
                  appStoreHref={siteConfig.appLinks.farmer.appStore}
                  className="justify-start"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted-foreground">{siteConfig.partnershipLine}</div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}

            <Link href="/download" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              Download <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
