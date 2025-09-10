import ProductCard from "@/components/product-card";
import { fetchProduct } from "@/lib/data/products";
import React from "react";

export default async function ProductsPage() {
  return (
    <div className="p-10">
      ProductsPage, example productcard
      <ProductCard id={"1"}></ProductCard>
    </div>
  );
}
