import Link from "next/link";
import Image from "next/image";

export default function CategoryNav({ gender, categories }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/${gender}/${cat.slug}`}>
          <a className="flex flex-col items-center">
            <Image
              src={cat.imageUrl}
              alt={cat.name}
              width={150}
              height={150}
              className="object-cover rounded-lg"
            />
            <span className="mt-2 font-medium capitalize">
              {cat.name.replace("-", " ")}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
