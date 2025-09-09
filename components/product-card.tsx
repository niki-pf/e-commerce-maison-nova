import React from "react";
import Image from "next/image";
import { fetchProduct } from "@/lib/data/products";

export default async function ProductCard({ id }: { id: string }) {
  const product = await fetchProduct(id);

  if (!product) {
    return null;
  }

  return (
    <article className="grid w-100 grid-rows-subgrid gap-4">
      <div className="row-start-2 flex justify-between">
        <h1 className="text-lg">{product.title}</h1>

        {/* If discount is greater than 10 % display the discounted price */}
        {product.discountPercentage < 10 ? (
          <p className="text-lg font-bold ">{product.price}</p>
        ) : (
          <div className="flex gap-2 ">
            <p className="line-through text-lg ">{`$${product.price}`}</p>
            <p className="font-bold text-lg">
              {`$${Math.round(
                product.price -
                  (product.discountPercentage / 100) * product.price
              ).toFixed(2)}`}
            </p>
          </div>
        )}
      </div>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={400}
        height={500}
        className="bg-accent p-2"></Image>
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
