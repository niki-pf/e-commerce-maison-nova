
import React from "react";

import ProductForm from "@/components/product-form";
import { fetchProduct } from "@/lib/data/products";

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  const {slug} =  await params;
  if (slug !== "new") {
  return (
    <ProductForm></ProductForm>
  )
  } else {
    const product = await fetchProduct(slug)
    
    if (product) {
      console.log(product.title);
      
      return (
    <ProductForm product={product}></ProductForm>
  )
}
  }

}
