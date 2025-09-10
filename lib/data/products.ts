import { notFound } from "next/navigation";
import { ProductFull } from "../interfaces";

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      console.log(`There was an error fetching a product with id: ${id}`);
      return [];
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (error) {
    console.log("API network error");
  }
}

export async function fetchProducts() {
  try {
    const response = await fetch(`https://dummyjson.com/products/`);

    if (!response.ok) {
      console.log(`There was an error fetching all products`);
      return [];
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {
    console.log("API network error");
  }
}

export async function fetchSearchProduct(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );

    if (!response.ok) {
      console.log(`There was an error searching for products`);
      return [];
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {
    console.log("API network error");
  }
}

export async function fetchProductOfTypeCategory(category: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!response.ok) {
      console.log(`There was an error fetching all products by category`);
      return [] as ProductFull[];
    }
    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {
    console.log("API network error");
  }
}
