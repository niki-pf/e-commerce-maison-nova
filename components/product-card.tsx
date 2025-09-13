import React from "react";
import Image from "next/image";
import { ProductFull } from "@/lib/interfaces";
import Link from "next/link";

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
    <article className="grid max-w-[500px] productCard focus:ring-2 grid-rows-subgrid gap-4">
      <div className="row-start-2 flex justify-between">
        <Link href={`/products/${product.id}`}>
          <h1 className="text-lg">{product.title}</h1>
        </Link>

        {/* If discount is greater than MIN_DISCOUNT_TO_DISPLAY display the discounted price */}
        {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
          <div className="flex gap-2 ">
            <p className="line-through text-lg ">{`$${product.price}`}</p>
            <p className="font-bold text-lg">
              {`$${Math.round(
                product.price -
                  (product.discountPercentage / 100) * product.price
              ).toFixed(2)}`}
            </p>
          </div>
        ) : (
          <p className="text-lg font-bold ">{product.price}</p>
        )}
      </div>

      <figure className="grid relative">
        {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
          <p className="absolute font-medium bg-background top-0 mt-4 ml-4 p-3 text-destructive text-xl ">
            {`${Math.floor(product.discountPercentage)} % off`}
          </p>
        ) : (
          ""
        )}
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          className="bg-accent p-2"></Image>
      </figure>

      <div className="flex gap-1">
        {product.tags.map((tag, index) => (
          <p key={index} className="uppercase border-1 px-2 py-1.5 shadow">
            {tag}
          </p>
        ))}
      </div>
    </article>
  );
}
