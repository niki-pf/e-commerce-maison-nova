import ProductList from "@/components/product-list";
import React from "react";

export default async function ProductsPage() {
  const testIds: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <section className="p-10">
      ProductsPage, example productcard
      <ProductList ></ProductList>
    </section>
  );
}
