import React from "react";
import ProductCard from "./product-card";
import { ProductFull } from "@/lib/interfaces";
import ProductPagnation from "./product-pagnation";

export default async function ProductList({
  productList,
  pages,
}: {
  productList: ProductFull[];
  pages: number;
}) {
  return (
    <div className="grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
      <ProductPagnation pages={pages}></ProductPagnation>
    </div>
  );
}
