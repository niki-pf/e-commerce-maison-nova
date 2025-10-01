import { Product } from "@/lib/zod-schemas";

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
) {
  try {
    let productList: Product[] = [];
    const result = await Promise.all(
      /* returns array of produlist */
      categories.map(async (category) => {
        const result = await fetchProductOfTypeCategory(category, "", "");
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

export async function fetchProductOfTypeCategory(
  category: string,
  sortBy: string,
  order: string
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`
    );

    if (!response.ok) {
      throw new Error(`There was an error fetching all products by category`);
    }

    const data = await response.json();
    const products: Product[] = data.products;
    return products;
  } catch (error) {}
}