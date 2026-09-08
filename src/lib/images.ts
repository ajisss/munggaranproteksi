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

export const PORTFOLIO_ITEMS = [
  {
    category: "epoxy-flooring",
    title: "Floor Coating — Syngenta Indonesia, Gunung Putri",
    image: "/gallery/portfolio-1.jpg",
  },
  {
    category: "epoxy-flooring",
    title: "Epoxy Floor Coating — Area Produksi",
    image: "/gallery/portfolio-2.jpg",
  },
  {
    category: "sandblasting-painting",
    title: "Surface Preparation & Sandblasting",
    image: "/gallery/portfolio-7.jpg",
  },
  {
    category: "sandblasting-painting",
    title: "Sandblasting & Painting — PT. Riung Mitra Lestari, Kalimantan Selatan",
    image: "/gallery/portfolio-8.jpg",
  },
  {
    category: "polished-concrete",
    title: "Polished Concrete — Area Retail",
    image: "/gallery/portfolio-9.jpg",
  },
  {
    category: "polished-concrete",
    title: "Polished Concrete — Lobby",
    image: "/gallery/portfolio-10.jpg",
  },
  {
    category: "pipe-wrapping",
    title: "Pipe Wrapping 3LPE — BYD Site, Subang",
    image: "/gallery/portfolio-14.jpg",
  },
  {
    category: "pipe-wrapping",
    title: "Pipe Wrapping 3LPE — Pertamina Gas, Jawa Timur",
    image: "/gallery/portfolio-17.jpg",
  },
];
