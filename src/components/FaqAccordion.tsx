import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-ink-900">{item.question}</span>
              <Plus
                className={`h-[18px] w-[18px] flex-none text-ink-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            {isOpen && <p className="px-6 pb-5 text-sm text-ink-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
