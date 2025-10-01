import { PAGE_OFFSET } from "@/lib/constants";
import ProductList from "@/components/products/product-list";
import { productSortList } from "@/lib/constants";

import { fetchProducts } from "@/lib/data/products";
import { URLProps } from "@/lib/interfaces";
import React from "react";
import SortOptions from "@/components/products/sort-options";
import ProductFilters from "@/components/products/product-filters";
import { QueryParamsSchema } from "@/lib/zod-schemas";

export async function generateMetadata({ searchParams }: URLProps) {
  const { gender = "", category = "", query = "" } = await searchParams;
  return {
    title: `Maison Nova - Products`,
    description: `Product listing ${
      gender !== "" ? `for: ${gender} ` : "for men / women "
    } ${
      category !== "" ? ` of product type ${category} ` : "all product types "
    } ${query !== "" ? ` and explicitly: ${gender}` : "."}`,
  };
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  /* save searchParams or set default value */
  const {
    gender = "all",
    category = "",
    query = "",
    min = "",
    max = "",
    stars = "",
    page = "1",
    sortBy = null,
    order = null,
  } = await searchParams;

  const toZodParse = {
    query: query,
    gender: gender,
    category: category,
    min: min,
    max: max,
    ratingMin: stars,
    sortBy: sortBy,
    order: order,
  };

  const result = QueryParamsSchema.safeParse(toZodParse);
  console.log(result.error);
  if (result.success) {
    const { sortBy, order, ...filters } = result.data;
    const sort = { sortBy: sortBy, order: order };

    const productList = await fetchProducts(filters, sort);
    const pages = Math.ceil(productList.length) / PAGE_OFFSET;
    return (
      <section className="flex gap-4 px-4 py-8">
        <div className="grid gap-2 content-start">
          <SortOptions data={productSortList}></SortOptions>
          <ProductFilters category={category}></ProductFilters>
        </div>
        <ProductList productList={productList} pages={pages}></ProductList>
      </section>
    );
  }
}
