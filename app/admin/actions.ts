"use server";
import { generateSlug } from "@/lib/utils";
import { z } from "zod";

const NewProductSchema = z.object({
  title: z.string().max(32),
  description: z.string().max(255),
  category: z.string(),
  gender: z.string(),
  tags: z
    .string()
    .transform((value) =>
      value
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
    )
    .pipe(z.array(z.string())),
  price: z.coerce.number().min(0),
  images: z
    .string()
    .transform((value) => value.split(",").map((v) => v.trim()))
    .pipe(z.array(z.string().url())),
  thumbnail: z.string().url(),
});
type NewProduct = z.infer<typeof NewProductSchema>;
export async function NewProduct(formData: FormData) {
  const fields = {
    slug: generateSlug(formData.get("title") as string),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    gender: formData.get("gender") as string,
    category: formData.get("category") as string,
    tags: formData.get("tags"),
    price: formData.get("price") as string,
    images: formData.get("images") as string,
    thumbnail: formData.get("thumbnail") as string,
  };
  const result = NewProductSchema.safeParse(fields);
  if (!result.success) {
    console.error(result.error);
    return;
  }
}
