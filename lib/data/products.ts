import { notFound } from "next/navigation";
import { ProductFull } from "../interfaces";
import ProductList from "@/components/products/product-list";

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`There was an error fetching a product with id: ${id}`);
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (error) {}
}

export async function fetchProducts() {
  try {
    const response = await fetch(`https://dummyjson.com/products/`);

    if (!response.ok) {
      throw new Error(`There was an error fetching all products`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {}
}

export async function fetchSearchProduct(query: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error(`There was an error searching for products`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {}
}

export async function fetchProductOfTypeCategory(category: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error(`There was an error fetching all products by category`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (error) {}
}

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
) {
  try {
    let productList: ProductFull[] = [];
    const result = await Promise.all(
      /* returns array of produlist */
      categories.map(async (category) => {
        const result = await fetchProductOfTypeCategory(category);
        /* returns empty array if result is undefined */
        return Array.isArray(result) ? result : [];
      })
    );
    if (result) {
      /* flattens the result from fetching categories */
      productList = result.flat();
    } else {
      throw new Error(
        `There was a problem fetching all products of multiple categories`
      );
    }
    return productList;
  } catch (error) {}
}
