"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Container";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What's the difference between a contractor certified by GAF and a regular roofer?",
    answer:
      "A contractor certified by GAF has undergone comprehensive training, adheres to strict installation best practices, and meets ongoing performance standards established by North America's largest roofing manufacturer. These contractors can offer limited warranties that are stronger and longer-lasting than those available from uncertified installers.\n\nBy contrast, a regular roofer may not follow the same quality protocols or stay updated with innovations in the roofing industry. When you choose a GAF-certified professional, you're working with a roofing contractor who has proven their commitment to excellence, safety, and customer satisfaction. It's a difference that directly impacts the durability and lifespan of your roof system.",
  },
  {
    question: "How long does a typical residential roofing project take?",
    answer:
      "Most residential roofing projects take one to three days, depending on the roof size, weather, material availability, and the complexity of the installation.",
  },
  {
    question: "How do you find a roofing contractor you can d?",
    answer:
      "Review certifications, compare references, ask about warranties, and choose a contractor who clearly explains the scope, schedule, and installation process.",
  },
];

function FaqRow({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className="border-t border-white/45">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-8 py-6 text-left"
        aria-expanded={open}
      >
        <span className={cn("max-w-[790px] text-[21px] font-bold leading-snug max-md:text-base", open ? "text-white" : "text-white/90")}>
          {question}
        </span>
        <ArrowRight
          className={cn(
            "mt-1 size-6 shrink-0 text-white/75 transition-transform duration-200",
            open && "rotate-90 text-white"
          )}
        />
      </button>

      {open && (
        <div className="max-w-[850px] whitespace-pre-line pb-8">
          <p className="text-[18px] font-medium leading-[1.45] text-white/78 max-md:text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function HomeFaq() {
  return (
    <section className="relative -mt-1 overflow-hidden bg-primary">
      <div
        className="absolute inset-x-0 bottom-0 h-44 bg-white"
        style={{ clipPath: "polygon(0 60%, 100% 100%, 100% 100%, 0 100%)" }}
      />
      <Container className="relative z-10 max-w-[930px] pb-72 pt-36 max-md:pb-44 max-md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[17px] font-bold uppercase tracking-normal text-white/80">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-[43px] font-bold leading-[1.08] text-white max-md:text-3xl">
            Answers to your<br />roofing questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-[930px]">
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
