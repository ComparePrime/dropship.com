"use client";

import { useState } from "react";
import { FaqItem } from "@/lib/types";
import { Icon } from "@/components/icons";
import clsx from "clsx";

const ChevronDown = Icon["chevron-down"];

export function FaqSection({ faq }: { faq: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-content py-16 md:py-24" id="faq">
      <h2 className="section-title text-center">Questions frequentes</h2>
      <div className="mx-auto mt-10 max-w-2xl divide-y divide-ink/10">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-ink md:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={clsx(
                    "h-4 w-4 flex-shrink-0 text-stone transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && <p className="pb-5 text-sm text-stone">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
