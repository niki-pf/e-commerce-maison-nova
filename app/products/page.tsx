import { menCategories, womenCategories } from "@/components/category-nav";
import ProductList from "@/components/product-list";
import Searchbar from "@/components/searchbar";
import {
  fetchProductOfTypeCategory,
  fetchSearchProduct,
} from "@/lib/data/products";
import { ProductFull } from "@/lib/interfaces";
import { validCategory } from "@/lib/utils";
import React from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category = "", subcategory = "", query = "" } = await searchParams;

  let productList: ProductFull[] = [];
  /* TODO: make code more understandable*/
  /* Search for products if no other params */
  if (query !== "" && category === "" && subcategory === "") {
    const result = await fetchSearchProduct(query);

    if (result) {
      productList = result;
    }
  } else {
    if (validCategory(category)) {
      const categories = category === "men" ? menCategories : womenCategories;
      if (subcategory !== "") {
        if (categories.includes(subcategory)) {
          const result = await fetchProductOfTypeCategory(subcategory);

          if (result) {
            //filter by query
            productList = result.filter((project) =>
              project.title.toLowerCase().includes(query.toLowerCase())
            );
          }
        }
      } else {
        /* TODO: prio on this part, needs a fetch that handles mutilple categories*/
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
      <div>
        <Searchbar></Searchbar>
      </div>
      <ProductList productList={productList}></ProductList>
    </section>
  );
}
