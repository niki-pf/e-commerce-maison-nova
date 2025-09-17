import CategoryFilter from "@/components/category-filter";
import { allCategories, menCategories, womenCategories } from "@/lib/constants";
import FilterBy from "@/components/products/filter-by";
import ProductList from "@/components/products/product-list";
import SortOption from "@/components/products/sort-option";
import { productsSortBy } from "@/lib/constants";

import {
  fetchAllProductsOfMultipleCategories,
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
    page = "1",
  } = await searchParams;
  const PAGE_OFFSET = 9;
  let productList: ProductFull[] = [];

  /* TODO: make code more understandable*/

  /* If there is a global search */
  if (query !== "" && category === "" && subcategory === "") {
    const result = await fetchSearchProduct(query);

    /* filters the search result */
    if (result) {
      productList = result.filter((product) =>
        allCategories.includes(product.category)
      );
    }
  }

  /* if no filter params get all products */
  if (query === "" && category === "" && subcategory === "") {
    const result = await fetchAllProductsOfMultipleCategories(allCategories);

    /* filters the seearch result */
    if (result) {
      productList = result;
    }
  }

  if (query === "" && category === "" && subcategory !== "") {
    /* TODO: prio on this part, needs a fetch that handles mutilple categories*/
    /* If no subcat show all product for men/women */
    if (allCategories.includes(subcategory)) {
      const result = await fetchProductOfTypeCategory(subcategory);

      if (result) {
        productList = result;
      }
    }
  }
  
  /* if either man or women */
  if (validCategory(category)) {
    //get list of subcategories for either men or women
    const categories = category === "men" ? menCategories : womenCategories;
    if (categories.includes(subcategory)) {
      /* if valid subcategory*/
      const result = await fetchProductOfTypeCategory(subcategory);

      if (result) {
        productList = result;
      }
    }
    /* filter by search query */
    productList = productList.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
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
  /* Handles the filtering */
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

  /*   const filterParams = [min, max, stars];

  filterParams.map((filter) => {
    if (filter !== "" && !isNaN(parseInt(filter))) {
      console.log(filter);

      productList = productList.filter(
        (product) => product.price > parseInt(min)
      );
    }
  }); */
  /* handles pagination */
  const pages = Math.ceil(productList.length) / PAGE_OFFSET;
  const pageNumber = parseInt(page);
  const start = (pageNumber - 1) * PAGE_OFFSET;
  const end = start + PAGE_OFFSET;
  productList = productList.slice(start, end);

  return (
    <section className="p-10 flex gap-4">
      <div>
        <FilterBy category={category}></FilterBy>
        <SortOption linkList={productsSortBy}></SortOption>
      </div>
      <div className="grid gap-2">
        <CategoryFilter category={category}></CategoryFilter>
        <ProductList productList={productList} pages={pages}></ProductList>
      </div>
    </section>
  );
}
