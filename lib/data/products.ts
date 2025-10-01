import { Pagination } from "@/components/ui/pagination";
import prisma from "../prisma";
import {
  Product,
  ProductFilters,
  ProductSort,
  QueryParams,
} from "../zod-schemas";

function mapProduct(product: any): Product {
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

export async function fetchProduct(id: string): Promise<Product | null> {
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
): Promise<Product[]> {
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
): Promise<Product[]> {
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
): Promise<Product[]> {
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

export async function fetchAllProducts(): Promise<Product[] | null> {
  const products = await prisma.product.findMany();

  if (!products) {
    return null;
  }
  return products;
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  if (!slug) return null;
  const product = await prisma.product.findUnique({
    where: { slug: slug },
  });

  if (product) {
    return product;
  }
  return null;
}

export async function fetchProducts(
  filters: ProductFilters = {},
  sort: ProductSort = {}
) {
  try {
    const where: any = {};

    if (filters.query) {
      where.title = { conatins: filters.query, mode: "insensitive" };
    }
    if (filters.category) {
      where.category = filters.category;
    }
    if (filters.gender) {
      where.gender = filters.gender;
    }

    if (filters.priceMin || filters.priceMax) {
      where.price = {};
      if (filters.priceMin) where.price.gte = filters.priceMin;
      if (filters.priceMax) where.price.lte = filters.priceMax;
    }

    if (filters.ratingMin) {
      where.rating = { gte: filters.ratingMin };
    }

    const orderBy = sort.sortBy
      ? { [sort.sortBy]: sort.order === "desc" ? "desc" : "asc" }
      : undefined;

    const products = await prisma.product.findMany({
      where,
      orderBy,
    });
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
    return error;
  }
}
