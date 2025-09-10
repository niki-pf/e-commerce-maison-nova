import React from "react";
import ProductCard from "./product-card";
import { fetchAllProducts } from "@/lib/data/products";

export default async function ProductList() {
  const products = await fetchAllProducts();
  /* No products found */
  if (!products) {
    return null;
  }
  return (
    <div className="flex">
      ProductList
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
