import hero from "../assets/images/hero.jpg";
import about from "../assets/images/about.png";
import svcEpoxy from "../assets/images/svc-epoxy.jpeg";
import svcSandblasting from "../assets/images/svc-sandblasting.jpeg";
import svcConcrete from "../assets/images/svc-concrete.jpeg";
import svcPipewrap from "../assets/images/svc-pipewrap.jpeg";

export const IMAGES = {
  hero,
  about,
  "svc-epoxy": svcEpoxy,
  "svc-sandblasting": svcSandblasting,
  "svc-concrete": svcConcrete,
  "svc-pipewrap": svcPipewrap,
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  "epoxy-flooring": "Epoxy Flooring",
  "sandblasting-painting": "Sandblasting & Painting",
  "polished-concrete": "Polished Concrete",
  "pipe-wrapping": "Pipe Wrapping",
};

// Tiga item pertama adalah foto asli proyek (dipakai juga di beranda); sisanya foto ilustrasi
// dengan keterangan umum tanpa nama klien.
export const PORTFOLIO_ITEMS = [
  { category: "epoxy-flooring", title: "Floor Coating — Syngenta Indonesia, Gunung Putri", image: "/gallery/featured-syngenta.jpg" },
  { category: "sandblasting-painting", title: "Sandblasting & Painting — PT. Riung Mitra Lestari, Kalimantan Selatan", image: "/gallery/featured-riung.jpg" },
  { category: "pipe-wrapping", title: "Pipe Wrapping 3LPE — Pertamina Gas, Jawa Timur", image: "/gallery/featured-pertamina.jpg" },

  { category: "epoxy-flooring", title: "Epoxy Floor Coating, Area Produksi", image: "/gallery/portfolio-13.jpg" },
  { category: "epoxy-flooring", title: "Marking & Epoxy Lantai Area Parkir", image: "/gallery/portfolio-6.jpg" },
  { category: "epoxy-flooring", title: "Aplikasi Self-Leveling Epoxy", image: "/gallery/portfolio-5.jpg" },
  { category: "epoxy-flooring", title: "Penuangan Epoxy Lantai Industri", image: "/gallery/portfolio-9.jpg" },
  { category: "epoxy-flooring", title: "Coating Permukaan Lantai & Atap", image: "/gallery/portfolio-2.jpg" },

  { category: "sandblasting-painting", title: "Sandblasting Dinding Tangki", image: "/gallery/portfolio-10.jpg" },
  { category: "sandblasting-painting", title: "Surface Preparation & Sandblasting", image: "/gallery/portfolio-17.jpg" },
  { category: "sandblasting-painting", title: "Sandblasting Lambung Struktur Baja", image: "/gallery/portfolio-1.jpg" },
  { category: "sandblasting-painting", title: "Pengecatan Semprot Pipa", image: "/gallery/portfolio-11.jpg" },
  { category: "sandblasting-painting", title: "Pengecatan Tangki & Struktur Baja", image: "/gallery/portfolio-12.jpg" },
  { category: "sandblasting-painting", title: "Sandblasting Tangki Penyimpanan", image: "/gallery/portfolio-14.jpg" },

  { category: "polished-concrete", title: "Polished Concrete, Proses Grinding Lantai", image: "/gallery/portfolio-8.jpg" },
  { category: "polished-concrete", title: "Polished Concrete, Area Gudang", image: "/gallery/portfolio-15.jpg" },

  { category: "pipe-wrapping", title: "Pipe Wrapping 3LPE, Instalasi Jalur Pipa", image: "/gallery/portfolio-7.jpg" },
];
