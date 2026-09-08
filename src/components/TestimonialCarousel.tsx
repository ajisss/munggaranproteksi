import { useState } from "react";

type Testimonial = { quote: string; name: string; company: string };

const COLORS = ["#3b5bdb", "#e8472a", "#0ca678", "#f59f00"];

function Avatar({ name, size = "md", active = false, color }: { name: string; size?: "sm" | "md"; active?: boolean; color: string }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const dim = size === "md" ? "w-14 h-14 text-base" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${dim} flex items-center justify-center rounded-full font-semibold text-white transition-all duration-200 ${active ? "ring-2 ring-offset-2 ring-brand-600 scale-110" : "opacity-50"}`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-ink-700">5.0</span>
    </div>
  );
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const indices = testimonials.map((_, i) => i);
  const leftIdx = (active - 1 + testimonials.length) % testimonials.length;
  const rightIdx = (active + 1) % testimonials.length;

  return (
    <div className="flex flex-col items-center">
      {/* Avatar row */}
      <div className="flex items-center gap-3 mb-12">
        {indices.map((i) => (
          <button key={i} onClick={() => setActive(i)}>
            <Avatar name={testimonials[i].name} size={i === active ? "md" : "sm"} active={i === active} color={COLORS[i % COLORS.length]} />
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="relative flex w-full items-center justify-center gap-5">
        {/* Left card */}
        <div
          className="hidden md:block w-[300px] flex-shrink-0 cursor-pointer rounded-2xl border border-ink-200 bg-white p-6 opacity-50 shadow-sm transition-all hover:opacity-70"
          onClick={prev}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: COLORS[leftIdx % COLORS.length] }}>
              {testimonials[leftIdx].name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{testimonials[leftIdx].name}</p>
              <p className="text-xs text-ink-400">{testimonials[leftIdx].company}</p>
            </div>
          </div>
          <StarRow />
          <p className="mt-4 text-sm leading-relaxed text-ink-600 line-clamp-4">&ldquo;{testimonials[leftIdx].quote}&rdquo;</p>
        </div>

        {/* Center card (active) */}
        <div className="w-full max-w-xl flex-shrink-0 rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white" style={{ backgroundColor: COLORS[active % COLORS.length] }}>
              {testimonials[active].name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-ink-900">{testimonials[active].name}</p>
              <p className="text-sm text-ink-400">{testimonials[active].company}</p>
            </div>
          </div>
          <StarRow />
          <p className="mt-5 text-base leading-relaxed text-ink-700">&ldquo;{testimonials[active].quote}&rdquo;</p>
        </div>

        {/* Right card */}
        <div
          className="hidden md:block w-[300px] flex-shrink-0 cursor-pointer rounded-2xl border border-ink-200 bg-white p-6 opacity-50 shadow-sm transition-all hover:opacity-70"
          onClick={next}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: COLORS[rightIdx % COLORS.length] }}>
              {testimonials[rightIdx].name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{testimonials[rightIdx].name}</p>
              <p className="text-xs text-ink-400">{testimonials[rightIdx].company}</p>
            </div>
          </div>
          <StarRow />
          <p className="mt-4 text-sm leading-relaxed text-ink-600 line-clamp-4">&ldquo;{testimonials[rightIdx].quote}&rdquo;</p>
        </div>
      </div>

      {/* Arrow nav */}
      <div className="mt-10 flex gap-4">
        <button onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 shadow-sm transition hover:bg-ink-50">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 shadow-sm transition hover:bg-ink-50">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
