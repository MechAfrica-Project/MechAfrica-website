import { partners, siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import Image from "next/image";

export function PartnersStrip() {
  return (
    <section aria-label="Strategic backing" className="border-y bg-background">
      <Container className="py-10">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-foreground">Partners & backing</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.partnershipLine} Focused on practical service delivery in Ghana — including areas with
              unreliable connectivity.
            </p>
          </div>

          <div className="grid w-full max-w-lg gap-3 sm:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center rounded-2xl border bg-card px-3 py-4 text-center shadow-sm"
              >
                <Image
                  src={p.image}
                  alt={p.name + ' logo'}
                  width={500}
                  height={200}
                  className="h-10 mb-2 object-contain max-w-35"
                />
                {/* Removed partner note as requested */}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

