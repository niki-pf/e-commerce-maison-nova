import { notFound } from "next/navigation";
import { ProductFull } from "../interfaces";

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      console.log(`There was an error fetching a product with id: ${id}`);
      return notFound();
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (error) {
    console.log("API network error");
  }
}
