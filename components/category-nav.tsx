import Link from "next/link";
import Image from "next/image";
import { womenCategories, menCategories } from "@/lib/constants";
import AllProductsLink from "./products/all-products-link";

export default async function CategoryNav({ gender }: { gender: string }) {
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
      <h2 className="text-2xl font-light mb-6 text-center">Shop by Category</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {previews.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products?category=${gender}&subcategory=${cat.slug}`}
            className="flex flex-col items-center"
          >
            <Image
              src={cat.imageUrl}
              alt={cat.name}
              width={250}
              height={250}
              className="object-cover rounded-lg  bg-foreground w-[160px] md:w-[200px] lg:w-[220px]"
            />
            <span className="mt-2 font-light capitalize text-center underline decoration-foreground decoration-4">
              {cat.name.replace("-", " ")}
            </span>
          </Link>
        ))}
        <AllProductsLink></AllProductsLink>
      </div>
    </section>
  );
}
