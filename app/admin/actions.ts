"use server";
import { createProduct } from "@/lib/data/product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

const productSchema = z.object({
  title: z.string().max(32),
  description: z.string().max(255),
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
type Product = z.infer<typeof productSchema>;

export async function crateNewProduct(
  prevState: unknown,
  formData: FormData
): Promise<{
  validationErrors: Record<string, string[]>
  data: Product;
  dbError: string;
} | null> {
  const product: Product = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    gender: formData.get("gender") as string,
    category: formData.get("category") as string,
    tags: formData.get("tags") as unknown as string[],
    price: formData.get("price") as unknown as number,
    images: formData.get("images") as unknown as string[],
    thumbnail: formData.get("thumbnail") as string,
  };
  const result = productSchema.safeParse(product);

  if (!result.success) {
    const errors = z.flattenError(result.error);
    
    return {
      validationErrors: errors.fieldErrors,
      data: product,
      dbError: ""
    };
  }
  await createProduct(result.data);
  revalidatePath("/");
  redirect("/admin/products");
}
