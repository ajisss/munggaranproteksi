import { useMemo, useState } from "react";
import { X } from "lucide-react";

type GalleryItem = {
  title: string;
  category: string;
  categoryLabel: string;
  src: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    for (const item of items) map.set(item.category, item.categoryLabel);
    return [{ value: "all", label: "Semua" }, ...Array.from(map, ([value, label]) => ({ value, label }))];
  }, [items]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory)),
    [items, activeCategory],
  );

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => {
              setActiveCategory(cat.value);
              setLightboxIndex(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-brand-600 text-white"
                : "bg-ink-100 text-ink-600 hover:bg-ink-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={`${item.category}-${item.title}`}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group overflow-hidden rounded-2xl border border-ink-100 bg-white text-left"
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <p className="p-4 text-sm font-medium text-ink-800">{item.title}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Tutup"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.title} className="max-h-[75vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">{active.title}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
