import { Quote } from "lucide-react";

import { testimonials } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export function Testimonials() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Stories"
            title="Trust is built through lived experience"
            description="Use these flexible story cards to publish real farmer, provider, and partner narratives."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <FadeIn key={`${t.type}-${t.name}`} delay={idx * 0.04}>
              <Card className="h-full rounded-3xl">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-serif text-lg">{t.type}</CardTitle>
                    {t.isPlaceholder ? <Badge variant="outline">Placeholder</Badge> : null}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl border bg-muted/40 p-4">
                    <div className="flex items-start gap-2">
                      <Quote className="mt-0.5 size-4 text-primary/70" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-foreground">{t.quote}</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

