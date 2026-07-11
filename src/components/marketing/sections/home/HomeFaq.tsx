"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What is MechAfrica and who is it for?",
    answer:
      "MechAfrica is a digital agricultural services platform for farmers, service providers, and field teams. Farmers can request services such as ploughing, harrowing, planting, spraying, fertilization, harvesting, threshing, bagging, drone support, and transportation, while providers manage requests and coordinate delivery.",
  },
  {
    question: "Can farmers use MechAfrica without internet?",
    answer:
      `Yes. Farmers can request services through USSD by dialing ${siteConfig.ussd.code}, so they do not need a smartphone or data connection. The mobile apps are also designed with low-connectivity field conditions in mind.`,
  },
  {
    question: "How does MechAfrica help service providers?",
    answer:
      "Service providers get a clearer way to receive requests, plan work, coordinate equipment and teams, and improve visibility with farmers who need timely and reliable services.",
  },
];

function FaqRow({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className="border-t border-white/45">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 py-2.5 text-left md:gap-8 md:py-6"
        aria-expanded={open}
      >
        <span className={cn("max-w-[790px] text-[12px] font-bold leading-snug sm:text-[13px] md:text-[21px]", open ? "text-white" : "text-white/90")}>
          {question}
        </span>
        <ArrowRight
          className={cn(
            "mt-0.5 size-3 shrink-0 text-white/75 transition-transform duration-200 md:mt-1 md:size-6",
            open && "rotate-90 text-white"
          )}
        />
      </button>

      {open && (
        <div className="max-w-[850px] whitespace-pre-line pb-3 md:pb-8">
          <p className="text-[11px] font-medium leading-[1.55] text-white/78 sm:text-[12px] md:text-[18px]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function HomeFaq() {
  return (
    <section className="relative -mt-1 overflow-hidden bg-primary">
      <div
        className="absolute inset-x-0 bottom-0 h-12 bg-white md:h-44"
        style={{ clipPath: "polygon(0 60%, 100% 100%, 100% 100%, 0 100%)" }}
      />
      <Container className="relative z-10 max-w-[350px] pb-[86px] pt-12 sm:max-w-[420px] md:max-w-[930px] md:pb-72 md:pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-normal text-white/80 md:text-[17px]">
            FAQ
          </p>
          <h2 className="mt-1 font-serif text-[24px] font-bold leading-[1.08] text-white sm:text-[28px] md:mt-4 md:text-[43px]">
            Answers to your<br />questions
          </h2>
        </div>

        <div className="mx-auto mt-4 max-w-[930px] md:mt-16">
          {faqItems.map((item, i) => (
            <FaqRow
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={i === 0}
            />
          ))}
          <div className="border-t border-white/45" />
        </div>
      </Container>
    </section>
  );
}
