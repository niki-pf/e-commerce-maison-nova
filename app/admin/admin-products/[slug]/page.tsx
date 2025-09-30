import React from "react";

import ProductForm from "@/app/admin/admin-products/_components/product-form";
import { fetchProductBySlug } from "@/lib/data/products";
import { redirect } from "next/navigation";
import Link from "next/link";

export interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const {slug} = await params;

  if (!slug) {
    redirect("/admin/admin-products");
  }
  if (slug === "new") {
    return <ProductForm></ProductForm>;
  } else {
    const product = await fetchProductBySlug(slug);
    if (!product) {
      return (
        <>
          <p className="text-destructive">Product not found</p>
          <Link href={"/admin/admin-products"}>Return</Link>
        </>
      );
    }
    return <ProductForm product={product}></ProductForm>;
  }
}
