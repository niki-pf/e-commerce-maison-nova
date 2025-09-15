import CategoryFilter from "@/components/category-filter";
import { menCategories, womenCategories } from "@/components/category-nav";
import FilterBy from "@/components/filter-by";
import ProductList from "@/components/product-list";
import SortOption from "@/components/sort-option";
import { productsSortBy } from "@/lib/constants";

import {
  fetchProductOfTypeCategory,
  fetchSearchProduct,
} from "@/lib/data/products";
import { ProductFull } from "@/lib/interfaces";
import {
  ascendingDiscount,
  ascendingName,
  ascendingPrice,
  ascendingRating,
  descendingDiscount,
  descendingName,
  descendingPrice,
  descendingRating,
  validCategory,
} from "@/lib/utils";
import React from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const {
    category = "",
    subcategory = "",
    query = "",
    sort = "",
    min = "",
    max = "",
    stars = "",
  } = await searchParams;

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

  /* Sort */
  switch (sort) {
    case "name-asc":
      productList = ascendingName(productList);
      break;
    case "name-desc":
      productList = descendingName(productList);
      break;

    case "price-asc":
      productList = ascendingPrice(productList);
      break;

    case "price-desc":
      productList = descendingPrice(productList);
      break;

    case "rating-asc":
      productList = ascendingRating(productList);
      break;

    case "rating-desc":
      productList = descendingRating(productList);
      break;

    case "discount-asc":
      productList = ascendingDiscount(productList);
      break;
    case "discount-desc":
      productList = descendingDiscount(productList);
      break;

    default:
      productList;
  }

  if (min !== "" && !isNaN(parseInt(min))) {
    productList = productList.filter(
      (product) => product.price > parseInt(min)
    );
  }
  if (max !== "" && !isNaN(parseInt(max))) {
    productList = productList.filter(
      (product) => product.price < parseInt(max)
    );
  }
  if (stars !== "" && !isNaN(parseInt(stars))) {
    productList = productList.filter(
      (product) => product.rating > parseInt(stars)
    );
  }
  return (
    <section className="p-10 flex gap-4">
      <div className="">
        <FilterBy category={category}></FilterBy>
        <SortOption linkList={productsSortBy}></SortOption>
      </div>
      <div className="grid gap-2">
        <CategoryFilter category={category}></CategoryFilter>
        <ProductList productList={productList}></ProductList>
      </div>
    </section>
  );
}
