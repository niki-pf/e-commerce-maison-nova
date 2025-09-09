import { fetchProduct } from "@/lib/data/products";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import ReviewScore from "@/components/reviewScore";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const MIN_DISCOUNT_TO_DISPLAY = 10;

  const { id } = await params;

  if (!id) {
    console.log("There is no ID in params");
    return notFound();
  }

  const product = await fetchProduct(id);

  if (!product) {
    console.log("Tried fetching, no return ");
    return notFound();
  }
  const showDecimals = product.price > 1000 ? 0 : 2;
  return (
    <section className="px-8">
      <div className="grid gap-4">
        <figure className="grid grid-cols-2 gap-2 relative">
          {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
            <p className="absolute md:font-medium text-sm md:text-lg bg-background top-0 mt-1 ml-1 p-1  text-destructive ">
              {`${Math.floor(product.discountPercentage)} % off`}
            </p>
          ) : (
            ""
          )}
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${product.title} + ${index}`}
              width={500}
              height={500}
              className=" bg-accent"></Image>
          ))}
        </figure>
        <div className="row-start-2 flex justify-between">
          <div>
            <h2 className="text-lg">{product.title}</h2>
            <ReviewScore times={5} scoreOutOfFive={4}></ReviewScore>
          </div>

          {/* If discount is greater than MIN_DISCOUNT_TO_DISPLAY display the discounted price */}
          {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
            <div className="flex gap-2 ">
              <p className="line-through text-lg ">{`$${product.price.toFixed(
                showDecimals
              )}`}</p>

              <p className="font-medium text-lg">
                {`$${Math.round(
                  product.price -
                    (product.discountPercentage / 100) * product.price
                ).toFixed(showDecimals)}`}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold ">
              {product.price.toFixed(showDecimals)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
