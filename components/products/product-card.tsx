import React from "react";
import Image from "next/image";
import { ProductFull } from "@/lib/interfaces";
import Link from "next/link";
import ReviewScore from "./review-score";

export default async function ProductCard({
  product,
}: {
  product: ProductFull;
}) {
  const MIN_DISCOUNT_TO_DISPLAY = 10;

  if (!product) {
    return null;
  }

  return (
    <article className="grid max-w-[500px] productCard grid-rows-subgrid justify-start gap-2">
      <div className="flex justify-between gap-2 mb-auto row-start-3">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-lg">{product.title}</h1>
        </Link>

        {/* If discount is greater than MIN_DISCOUNT_TO_DISPLAY display the discounted price */}
        {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
          <div className="flex gap-2 ">
            <p className="line-through">{`$${product.price}`}</p>
            <p>
              {`$${Math.round(
                product.price -
                  (product.discountPercentage / 100) * product.price
              ).toFixed(2)}`}
            </p>
          </div>
        ) : (
          <p>{`$${product.price}`}</p>
        )}
      </div>

      <figure className="grid row-start-1 relative">
        {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
          <p className="absolute font-medium bg-background top-0 mt-4 ml-4 p-3 text-discount">
            {`${Math.floor(product.discountPercentage)} % off`}
          </p>
        ) : (
          ""
        )}
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="bg-foreground p-2"></Image>
      </figure>

      <div className="row-start-2">
        <ReviewScore
          nrOfReviews={product.reviews.length}
          scoreOutOfFive={product.rating}></ReviewScore>
      </div>
      <div className=" mt-auto flex gap-1 flex-wrap">
        {product.tags.map((tag, index) => (
          <p
            key={index}
            className="uppercase border-1 rounded px-2 py-1.5 shadow w-max h-min">
            {tag}
          </p>
        ))}
      </div>
    </article>
  );
}
