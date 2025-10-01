import {
  allCategories,
  menCategories,
  PAGE_OFFSET,
  womenCategories,
} from "@/lib/constants";
import ProductList from "@/components/products/product-list";
import { productSortList } from "@/lib/constants";

import {
  fetchAllProductsOfMultipleCategories,
  fetchProductOfTypeCategory,
  fetchSearchProduct,
} from "@/lib/data/products";
import { URLProps } from "@/lib/interfaces";
import {
  ascendingSortByKey,
  descendingSortByKey,
  validCategory,
} from "@/lib/utils";
import React from "react";
import SortOptions from "@/components/products/sort-options";
import ProductFilters from "@/components/products/product-filters";
import { Product } from "@/lib/zod-schemas";

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
    gender = "",
    category = "",
    query = "",
    sort = "",
    min = "",
    max = "",
    stars = "",
    page = "1",
  } = await searchParams;
  let productList: Product[] = [];
  let sortBy = "";
  let order = "";

  if (sort) {
    productSortList.forEach((sortMethod) => {
      if (sortMethod.value === sort) {
        sortBy = sortMethod.key;
        order = sortMethod.type;
      }
    });
  }

  /* If there is a global search fetch result */
  if (query !== "" && gender === "" && category === "") {
    const result = await fetchSearchProduct(query, sortBy, order);

    if (result) {
      productList = result.filter((product) =>
        allCategories.includes(product.category)
      );
    }
  }

  /* all products if there no filter */
  if (gender === "" && category === "") {
    const result = await fetchAllProductsOfMultipleCategories(allCategories);

    if (result) {
      productList = result;

      if (sort) {
        productSortList.map((sortBy) => {
          if (sortBy.value === sort) {
            productList =
              sortBy.type === "asc"
                ? ascendingSortByKey(productList, sortBy.key as keyof Product)
                : descendingSortByKey(productList, sortBy.key as keyof Product);
          }
        });
      }
    }
  }

  /* if only a category */
  if (gender === "" && category !== "") {
    const result = await fetchProductOfTypeCategory(category, sortBy, order);

    if (result) {
      productList = result;
    }
  }

  /* if is a valid category ie men | women,  */
  if (validCategory(category)) {
    let categories = gender === "men" ? menCategories : womenCategories;
    if (categories.includes(category)) {
      const result = await fetchProductOfTypeCategory(category, sortBy, order);
      if (result) {
        productList = result;
      }
    } else {
      const result = await fetchAllProductsOfMultipleCategories(categories);
      if (result) {
        productList = result;
      }
    }
  }

  /* Filters */
  if (query !== "") {
    productList = productList.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
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
      (product) => product.rating > parseInt(stars[0])
    );
  }

  /* Handle pagination */
  const pages = Math.ceil(productList.length) / PAGE_OFFSET;
  const pageNumber = parseInt(page);
  const start = (pageNumber - 1) * PAGE_OFFSET;
  const end = start + PAGE_OFFSET;
  productList = productList.slice(start, end);

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
