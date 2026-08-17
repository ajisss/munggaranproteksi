import hero from "../assets/placeholders/hero.svg";
import about from "../assets/placeholders/about.svg";
import svcEpoxy from "../assets/placeholders/svc-epoxy.svg";
import svcSandblasting from "../assets/placeholders/svc-sandblasting.svg";
import svcConcrete from "../assets/placeholders/svc-concrete.svg";
import svcPipewrap from "../assets/placeholders/svc-pipewrap.svg";
import portfolioEpoxy1 from "../assets/placeholders/portfolio-epoxy-1.svg";
import portfolioEpoxy2 from "../assets/placeholders/portfolio-epoxy-2.svg";
import portfolioSandblasting1 from "../assets/placeholders/portfolio-sandblasting-1.svg";
import portfolioSandblasting2 from "../assets/placeholders/portfolio-sandblasting-2.svg";
import portfolioConcrete1 from "../assets/placeholders/portfolio-concrete-1.svg";
import portfolioConcrete2 from "../assets/placeholders/portfolio-concrete-2.svg";
import portfolioPipewrap1 from "../assets/placeholders/portfolio-pipewrap-1.svg";
import portfolioPipewrap2 from "../assets/placeholders/portfolio-pipewrap-2.svg";

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
    image: portfolioEpoxy1,
  },
  {
    category: "epoxy-flooring",
    title: "Epoxy Floor Coating — Area Produksi",
    image: portfolioEpoxy2,
  },
  {
    category: "sandblasting-painting",
    title: "Surface Preparation & Sandblasting",
    image: portfolioSandblasting1,
  },
  {
    category: "sandblasting-painting",
    title: "Sandblasting & Painting — PT. Riung Mitra Lestari, Kalimantan Selatan",
    image: portfolioSandblasting2,
  },
  {
    category: "polished-concrete",
    title: "Polished Concrete — Area Retail",
    image: portfolioConcrete1,
  },
  {
    category: "polished-concrete",
    title: "Polished Concrete — Lobby",
    image: portfolioConcrete2,
  },
  {
    category: "pipe-wrapping",
    title: "Pipe Wrapping 3LPE — BYD Site, Subang",
    image: portfolioPipewrap1,
  },
  {
    category: "pipe-wrapping",
    title: "Pipe Wrapping 3LPE — Pertamina Gas, Jawa Timur",
    image: portfolioPipewrap2,
  },
];
