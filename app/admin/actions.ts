"use server";
import { createProduct } from "@/lib/data/product";
import { Product, productSchema } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod"

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

export async function updateProduct (){

}