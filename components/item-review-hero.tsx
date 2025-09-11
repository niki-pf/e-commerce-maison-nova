import Image from "next/image";
import ReviewScore from "./review-score";
import Link from "next/link";
import Carousel from "./carousel";

export default async function ItemWithReview({ categories }) {
  const allProductsArrays = await Promise.all(
    categories.map(async (cat) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${cat}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      return data.products;
    })
  );

  const allProducts = allProductsArrays.flat();

  // Ta de fyra bästa
  const topProducts = allProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  //   const exampleReviews = [
  //     "Absolutely love this product! Highly recommend.",
  //     "Quality exceeded my expectations.",
  //     "Looks great and feels durable.",
  //     "I would buy this again for sure!",
  //     "Exactly what I was looking for, very satisfied.",
  //     "Works perfectly and arrived on time.",
  //     "Really happy with the purchase, excellent value.",
  //     "Simple, effective, and well-made.",
  //     "Does exactly what it promises, no complaints.",
  //     "A solid product, I would definitely recommend it.",
  //   ];

  // Skapa slides: ett stort kort per slide
  const slides = topProducts.map((prod) => {
    // Ta den bästa reviewen från samma produkt
    const bestReview =
      prod.reviews && prod.reviews.length > 0
        ? prod.reviews.reduce((prev, curr) =>
            curr.rating > prev.rating ? curr : prev
          )
        : { comment: "No reviews yet", reviewerName: "Anonymous" };

    return (
      <article
        key={prod.id}
        className="flex flex-col md:flex-row items-center justify-center w-3/4 mx-auto gap-50 p-6 rounded-lg mb-12 "
      >
        <section className="flex flex-col gap-4 text-center md:text-left">
          <ReviewScore scoreOutOfFive={prod.rating} nrOfReviews={prod.stock} />
          <p className="text-3xl text-gray-700 italic">
            "{bestReview.comment}"
          </p>
          <p className="font-semibold text-gray-900">
            - {bestReview.reviewerName}
          </p>
          <p className="font-light underline decoration-gray-400">
            {prod.title}
          </p>
        </section>
        <section className="flex-shrink-0">
          <Link href={`/product/${prod.id}`}>
            <Image
              src={prod.images[0]}
              alt={prod.title}
              width={600}
              height={600}
              className="rounded-lg object-cover w-full md:w-[600px] h-auto bg-gray-100"
            />
          </Link>
        </section>
      </article>
    );
  });

  return (
    <div className="hidden md:block">
      <Carousel slides={slides} />
    </div>
  );
}
