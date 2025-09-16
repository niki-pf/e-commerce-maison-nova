import React from "react";
import ProductCard from "./product-card";
import { ProductFull } from "@/lib/interfaces";

export default async function ProductList({
  productList,
}: {
  productList: ProductFull[];
}) {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
