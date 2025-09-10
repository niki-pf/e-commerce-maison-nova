import { menCategories, womenCategories } from "@/components/category-nav";
import ProductList from "@/components/product-list";
import {
  fetchProduct,
  fetchProductOfTypeCategory,
  fetchProducts,
  fetchSearchProduct,
} from "@/lib/data/products";
import { ProductFull } from "@/lib/interfaces";
import { notFound } from "next/navigation";
import React from "react";

function validCategory(category: string) {
  const validCategories = ["men", "women"];
  return validCategories.includes(category);
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category = "", subCategory = "", query = "" } = await searchParams;

  let productList: ProductFull[] = [];
  /* TODO: make code more understandable*/
  /* Search for products if no other params */
  if (query !== "" && category === "" && subCategory === "") {
    const result = await fetchSearchProduct(query);
    console.log(result);

    if (result) {
      productList = result;
    }
  } else {
    if (validCategory(category)) {
      const categories = category === "men" ? menCategories : womenCategories;
      if (subCategory !== "") {
        if (categories.includes(subCategory)) {
          const result = await fetchProductOfTypeCategory(subCategory);

          if (result) {
            //filter by query
            productList = result.filter((project) =>
              project.title.toLowerCase().includes(query.toLowerCase())
            );
          }
        }
      } else {
        /* TODO: prio on this part make needs a fetch that handles mutilple categories*/
        /* If no subcat show all product for men/women */
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetchProductOfTypeCategory(category);
            return Array.isArray(res) ? res : [];
          })
        );
        productList = result.flat();
      }
    }
  }

  return (
    <section className="p-10">
      ProductsPage, example productcard
      <ProductList productList={productList}></ProductList>
      {/*       <ProductList></ProductList>
       */}
    </section>
  );
}
