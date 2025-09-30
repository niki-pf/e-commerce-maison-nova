import { ProductFull } from "../interfaces";
import prisma from "../prisma";
import { Product } from "../zod-schemas";

function mapProduct(product: any): ProductFull {
  return {
    ...product,
    reviews: product.review.map((r: any) => ({
      id: r.id.toString(),
      productId: r.productId,
      rating: r.rating,
      comment: r.comment,
      date: r.date?.toISOString() || "",
      reviewerName: r.reviewerName || "",
      reviewerEmail: r.reviewerEmail || "",
    })),
  };
}

export async function fetchProduct(id: string): Promise<ProductFull | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: { review: true },
    });

    if (!product) return null;

    return mapProduct(product);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchSearchProduct(
  query: string,
  sortBy: string,
  order: string
): Promise<ProductFull[]> {
  try {
    const products = await prisma.product.findMany({
      where: { title: { contains: query, mode: "insensitive" } },
      orderBy: sortBy
        ? { [sortBy]: order === "desc" ? "desc" : "asc" }
        : undefined,
      include: { review: true },
    });

    return products.map(mapProduct);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchProductOfTypeCategory(
  category: string,
  sortBy: string,
  order: string
): Promise<ProductFull[]> {
  try {
    const products = await prisma.product.findMany({
      where: { category },
      orderBy: sortBy
        ? { [sortBy]: order === "desc" ? "desc" : "asc" }
        : undefined,
      include: { review: true },
    });

    return products.map(mapProduct);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
): Promise<ProductFull[]> {
  try {
    const products = await prisma.product.findMany({
      where: { category: { in: categories } },
      include: { review: true },
    });

    return products.map(mapProduct);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllProducts() {
  const products = await prisma.product.findMany();

  if (!products) {
    return null;
  }
  return products;
}

export async function fetchProductBySlug(slug: string) {
  if (!slug) return null;
  const product = await prisma.product.findUnique({
    where: { slug: slug },
  });

  if (product) {
    return product;
  }
}

// export async function fetchProduct(id: string) {
//   try {
//     const response = await fetch(`https://dummyjson.com/products/${id}`);

//     if (!response.ok) {
//       throw new Error(`There was an error fetching a product with id: ${id}`);
//     }

//     const data: ProductFull = await response.json();
//     return data;
//   } catch (error) {}
// }

// export async function fetchSearchProduct(
//   query: string,
//   sortBy: string,
//   order: string
// ) {
//   try {
//     const response = await fetch(
//       `https://dummyjson.com/products/search?q=${query}&sortBy=${sortBy}&order=${order}`
//     );

//     if (!response.ok) {
//       throw new Error(`There was an error searching for products`);
//     }

//     const data = await response.json();
//     const products: ProductFull[] = data.products;
//     return products;
//   } catch (error) {}
// }

// export async function fetchProductOfTypeCategory(
//   category: string,
//   sortBy: string,
//   order: string
// ) {
//   try {
//     const response = await fetch(
//       `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`
//     );

//     if (!response.ok) {
//       throw new Error(`There was an error fetching all products by category`);
//     }

//     const data = await response.json();
//     const products: ProductFull[] = data.products;
//     return products;
//   } catch (error) {}
// }

// export async function fetchAllProductsOfMultipleCategories(
//   categories: string[]
// ) {
//   try {
//     let productList: ProductFull[] = [];
//     const result = await Promise.all(
//       /* returns array of produlist */
//       categories.map(async (category) => {
//         const result = await fetchProductOfTypeCategory(category, "", "");
//         /* returns empty array if result is undefined */
//         return Array.isArray(result) ? result : [];
//       })
//     );
//     if (result) {
//       /* flattens the result from fetching categories */
//       productList = result.flat();
//     } else {
//       throw new Error(
//         `There was a problem fetching all products of multiple categories`
//       );
//     }
//     return productList;
//   } catch (error) {}
// }
