import { useState } from "react";

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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`flex-none text-ink-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </button>
            {isOpen && <p className="px-6 pb-5 text-sm text-ink-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
