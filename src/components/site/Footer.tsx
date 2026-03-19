import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/content/site-config";
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

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <Logo className="text-primary-foreground" />
            <p className="max-w-md text-sm text-primary-foreground/80">
              MechAfrica is a coordinated agricultural service network that helps farmers access
              services, helps providers manage demand and assets, and supports operations through
              field agents — with offline-first workflows and USSD access.
            </p>

            <div className="space-y-2 rounded-2xl bg-black/15 p-4">
              <div className="text-sm font-semibold">Need a smartphone-free option?</div>
              <div className="flex flex-wrap items-center gap-2">
                <UssdButton
                  code={siteConfig.ussd.code}
                  telHref={siteConfig.ussd.telHref}
                  variant="secondary"
                  className="border-transparent"
                />
                <div className="text-sm text-primary-foreground/80">
                  Farmers can request services via USSD.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-sm font-semibold">Quick links</div>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-primary-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Solutions</div>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {solutionLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="hover:text-primary-foreground" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold">Contact</div>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 opacity-80" />
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 opacity-80" />
                  <span>{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 opacity-80" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>

              <div className="pt-3">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.farmer.playStore}
                  appStoreHref={siteConfig.appLinks.farmer.appStore}
                  className="justify-start"
                />
                <div className="mt-2 text-xs text-primary-foreground/70">
                  Placeholder store links — replace in <code>src/content/site-config.ts</code>.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-primary-foreground/70">{siteConfig.partnershipLine}</div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-primary-foreground/70">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-primary-foreground">
                {l.label}
              </Link>
            ))}

            <Link href="/download" className="inline-flex items-center gap-1 hover:text-primary-foreground">
              Download <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        <div className="mt-4 text-xs text-primary-foreground/60">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

