import Link from "next/link";
import Image from "next/image";

// Lista med kategorier för Women och Men
const womenCategories = [
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
  "tops",
];

const menCategories = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "sunglasses",
];

export default async function CategoryNav({ gender }) {
  const categories = gender === "women" ? womenCategories : menCategories;

  const previews = await Promise.all(
    categories.map(async (cat) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${cat}?limit=1`,
        { cache: "no-store" }
      );
      const data = await res.json();
      return {
        name: cat,
        slug: cat,
        imageUrl: data.products[0].thumbnail,
      };
    })
  );
return (
  <section className="px-2 md:px-6 lg:px-12 max-w-8xl mx-auto my-12">
    <h2 className="text-2xl font-light mb-6 text-center">
      Shop by Category
    </h2>

    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {previews.map((cat) => (
        <Link
          key={cat.slug}
          href={`/${gender}/${cat.slug}`}
          className="flex flex-col items-center"
        >
          <Image
            src={cat.imageUrl}
            alt={cat.name}
            width={250}
            height={250}
            className="object-cover rounded-lg  bg-gray-100   w-[160px] md:w-[250px] lg:w-[300px]"
          />
          <span className="mt-2 font-light capitalize text-center underline decoration-gray-400">
            {cat.name.replace("-", " ")}
          </span>
        </Link>
      ))}
    </div>
  </section>
);
