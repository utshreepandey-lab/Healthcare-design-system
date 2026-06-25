"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "./faqData";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      className="shrink-0 text-emphasis transition-transform duration-300 ease-in-out group-aria-expanded:rotate-180"
    >
      <path d="M9 13L16 20L23 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccordionDemo() {
  return (
    <div className="w-full">
      <div className="h-px w-full bg-border" />
      <Accordion defaultValue={["item-1"]}>
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="not-last:border-b-0">
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 py-6 text-left outline-none">
                <span className="font-sans text-2xl leading-7 font-medium text-emphasis">
                  {item.question}
                </span>
                <ChevronIcon />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pt-2 pb-6">
              <p className="font-sans text-xl leading-6 font-normal text-body">{item.answer}</p>
            </AccordionContent>
            <div className="h-px w-full bg-border" />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
