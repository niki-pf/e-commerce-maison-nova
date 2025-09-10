import { menCategories, womenCategories } from "@/components/category-nav";
import ProductList from "@/components/product-list";
import {
  fetchAllProductOfTypeCategory,
  ProductFull,
} from "@/lib/data/products";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category = "", subCategory = "", query = "" } = await searchParams;

  let getProductIdList;

  if (category === "men") {
    getProductIdList = menCategories.map((category) =>
      fetchAllProductOfTypeCategory(category)
    );
  }
  if (category === "women") {
    getProductIdList = womenCategories.map((category) =>
      fetchAllProductOfTypeCategory(category)
    );
  }
  console.log(getProductIdList);
  return (
    <section className="p-10">
      ProductsPage, example productcard
      <ProductList></ProductList>
    </section>
  );
}
