import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";

const moments = [
  {
    title: "Community onboarding",
    description: "Field support that helps farmers and providers get started with confidence.",
    image: IMAGES.marketing.onboarding,
    alt: "Community onboarding moment in a rural farming setting",
  },
  {
    title: "USSD reach",
    description: "A basic-phone option so farmers can request services without a smartphone.",
    image: IMAGES.marketing.ussd,
    alt: "Farmer dialing USSD on a basic phone",
  },
  {
    title: "Delivery logistics",
    description: "Coordination that helps providers deliver work on time across locations.",
    image: IMAGES.marketing.logistics,
    alt: "Logistics and transport support in a rural commerce setting",
  },
] as const;

export function FieldMoments() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="In the field"
            title="Designed for real-world delivery"
            description="Practical workflows supported by onboarding, USSD access, and coordination."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {moments.map((m, idx) => {
            const spanClass = idx === 2 ? "lg:col-span-12" : "lg:col-span-6";
            const aspect = idx === 2 ? "16/9" : "16/10";
            const sizes =
              idx === 2
                ? "(max-width: 768px) 92vw, (max-width: 1280px) 92vw, 1100px"
                : "(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 560px";

            return (
              <FadeIn key={m.title} delay={idx * 0.04} className={spanClass}>
                <div className="h-full">
                  <OptionalPhotoCard src={m.image} alt={m.alt} aspect={aspect} sizes={sizes} />
                  <div className="mt-4">
                    <div className="font-serif text-lg font-semibold text-foreground">{m.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

