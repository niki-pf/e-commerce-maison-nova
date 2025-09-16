import {
  fetchAllProductsOfMultipleCategories,
  fetchProduct,
} from "@/lib/data/products";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import ReviewScore from "@/components/review-score";
import { Box, Gift, Truck } from "lucide-react";
import { allCategories } from "@/lib/constants";
import ReviewList from "@/components/review-list";
import Stars from "@/components/stars";
import RatingBarChart from "@/components/rating-bar-chart";
import AddToCartBtn from "@/components/AddToCartBtn";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

/* Generate meta data for page */
export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  if (id && Number.isNaN(id)) {
    const product = await fetchProduct(id);
    if (product) {
      return {
        title: `Maison Nova - ${product.title}`,
        description: "Detailed information about a product",
      };
    }
  }
  return {
    title: "Maison Nova - 404",
    description: "The product don't exist",
  };
}
/* Static params */
export async function generateStaticParams() {
  const allProducts = await fetchAllProductsOfMultipleCategories(allCategories);

  // is not undefined
  if (allProducts) {
    return allProducts.map((product) => ({
      slug: product.id,
    }));
  }
}

export default async function Page({ params, searchParams }: Props) {
  const MIN_DISCOUNT_TO_DISPLAY = 10;

  const { id } = await params;
  const { sort } = await searchParams;

  if (!id) {
    return notFound();
  }

  const product = await fetchProduct(id);

  if (!product) {
    return notFound();
  }

  /* Display decmials if price is under 1000 */
  const showDecimals = product.price > 1000 ? 0 : 2;

  /* Display the images in two columns if the product have two or more images */
  const imageGrid = product.images.length < 2 ? "grid-cols-1" : "grid-cols-2";

  return (
    <>
      <section className="px-8 pt-16 pb-8 grid gap-4 ">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <figure className={`grid ${imageGrid} gap-2 relative`}>
            {/* Display discount if over a specific value */}
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
                className=" bg-accent"
              ></Image>
            ))}
          </figure>
          <section className="grid gap-8 h-min max-w-[60ch]">
            {/* Productinfo */}
            <div className=" flex justify-between border-b-1 pb-8">
              <div>
                <h2 className="text-2xl">{product.title}</h2>
                <ReviewScore
                  nrOfReviews={product.reviews.length}
                  scoreOutOfFive={product.rating}
                ></ReviewScore>
              </div>

              {/* If discount is greater than MIN_DISCOUNT_TO_DISPLAY display the discounted price */}
              {product.discountPercentage > MIN_DISCOUNT_TO_DISPLAY ? (
                <div className="flex gap-2 text-2xl">
                  <p className="line-through text-2xl ">{`$${product.price.toFixed(
                    showDecimals
                  )}`}</p>

                  <p className="font-medium">
                    {`$${Math.round(
                      product.price -
                        (product.discountPercentage / 100) * product.price
                    ).toFixed(showDecimals)}`}
                  </p>
                </div>
              ) : (
                <p className="font-bold ">
                  {product.price.toFixed(showDecimals)}
                </p>
              )}
            </div>
            {/* Decsription */}
            <section className="grid gap-4 border-b-1 pb-8">
              <h3 className="font-bold font-xl">Description</h3>
              <p>
                {product.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore esse quam ducimus vel facilis. Natus at
                tempore tenetur pariatur, distinctio ab praesentium dignissimos
                soluta optio deserunt nobis incidunt nemo atque.{" "}
              </p>
            </section>
            {/* Buy options */}
            <div className="border-b-1 pb-8 ">
              <AddToCartBtn product={product} />
            </div>
            {/* General order information */}
            <section className="grid justify-start gap-8 md:border-b-1 pb-8">
              <div className="flex gap-10">
                <Truck size={50} strokeWidth={1}></Truck>
                <div>
                  <p className="font-bold">Free Shipping</p>
                  <p>On all orders over $100</p>
                </div>
              </div>
              <div className="flex gap-10">
                <Box size={50} strokeWidth={1}></Box>
                <div>
                  <p className="font-bold">Easy Returns</p>
                  <p>Extenden through November 31</p>
                </div>
              </div>
              <div className="flex gap-10">
                <Gift size={50} strokeWidth={1}></Gift>
                <div>
                  <p className="font-bold">Send It As A Gift</p>
                  <p>Add a free personalized note during checkout</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <section className="pt-8 grid gap-8 px-32">
        <h2 className="text-center font-bold text-2xl">Reviews</h2>
        <div className="flex gap-16 bg-accent p-16 ">
          <div className="grid content-start gap-4">
            <p className="font-semibold">{`${product.rating.toFixed(
              1
            )} Overall Rating`}</p>
            <Stars scoreOutOfFive={product.rating} starCn="size-6"></Stars>
          </div>
          <RatingBarChart
            numbers={product.reviews.map((review) => review.rating)}
          ></RatingBarChart>
        </div>
        <ReviewList sort={sort} reviews={product.reviews}></ReviewList>
      </section>
    </>
  );
}
