import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: () =>
    z.object({
      title: z.string(),
      shortDescription: z.string(),
      icon: z.enum(["epoxy", "sandblasting", "concrete", "pipewrap"]),
      cardImage: z.string(),
      heroImage: z.string(),
      order: z.number(),
      features: z.array(z.string()),
      process: z.array(
        z.object({
          step: z.string(),
          detail: z.string(),
        }),
      ),
    }),
});

export const collections = { services };
