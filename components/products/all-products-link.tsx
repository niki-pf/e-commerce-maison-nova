import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AllProductsLink({ category }: { category?: string }) {
  let categoryLink = "";
  if (category) {
    categoryLink = category !== "men" ? "women" : "men";
  }
  return (
    <Link
      href={`/products${categoryLink ? `category=${categoryLink}` : ""}`}
      className="undescore flex p-0.5 items-center gap-2 hover:underline focus-visible:underline">
      Display all... <ArrowRight></ArrowRight>
    </Link>
  );
}
