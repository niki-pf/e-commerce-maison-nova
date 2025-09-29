import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3).max(32),
  description: z.string().min(5).max(255),
  gender: z.string(),
  category: z.string(),
  tags: z
    .string()
    .transform((value) =>
      value
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
    )
    .pipe(z.array(z.string())),
  price: z.coerce.number().gt(0),
  images: z
    .string()
    .transform((value) => value.split(",").map((v) => v.trim()))
    .pipe(z.array(z.url())),
  thumbnail: z.url(),
});

export type Product = z.infer<typeof productSchema>;
