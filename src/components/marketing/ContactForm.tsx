"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Topic = "partnership" | "support" | "app_help" | "general" | "agents";

const topicOptions: { value: Topic; label: string; description: string }[] = [
  { value: "partnership", label: "Partnership inquiry", description: "Pilots, districts, institutions, integration" },
  { value: "support", label: "Support inquiry", description: "Help using MechAfrica or resolving an issue" },
  { value: "app_help", label: "App / help inquiry", description: "Downloads, access methods, troubleshooting" },
  { value: "agents", label: "Agents waitlist", description: "Learn about Agents App pilots and rollout" },
  { value: "general", label: "General inquiry", description: "Anything else" },
];

export function ContactForm({
  defaultTopic = "general",
  className,
}: {
  defaultTopic?: Topic;
  className?: string;
}) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);
  const [topic, setTopic] = React.useState<Topic>(defaultTopic);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(json?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setTopic(defaultTopic);
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className={cn("rounded-3xl border bg-card p-6 shadow-sm", className)}>
      <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="name">
              Full name
            </label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="email">
              Email
            </label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="phone">
              Phone (optional)
            </label>
            <Input id="phone" name="phone" placeholder="+233 ..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground" htmlFor="organization">
              Organization (optional)
            </label>
            <Input id="organization" name="organization" placeholder="Company / institution" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="topic">
            Inquiry type
          </label>
          <select
            id="topic"
            name="topic"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value as Topic)}
            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          >
            {topicOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <div className="text-xs text-muted-foreground">
            {topicOptions.find((o) => o.value === topic)?.description}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="message">
            Message
          </label>
          <Textarea id="message" name="message" required placeholder="How can we help?" />
        </div>

        <input type="hidden" name="source" value="public-website" />

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Button
            type="submit"
            variant="secondary"
            className="h-11 rounded-full px-5"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
              </>
            ) : (
              "Send message"
            )}
          </Button>

          {status === "success" ? (
            <div className="inline-flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              Message received. We’ll get back to you soon.
            </div>
          ) : null}
        </div>

        {status === "error" ? (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-foreground">
            <div className="font-semibold">Couldn’t send message</div>
            <div className="mt-1 text-muted-foreground">
              {error || "Please try again. If the issue continues, email us at "}
              <a className="underline underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              .
            </div>
          </div>
        ) : null}

        <div className="text-xs text-muted-foreground">
          We’ll only use your details to respond to this inquiry.{" "}
          <Link className="underline underline-offset-4" href="/legal/privacy">
            Privacy policy
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

