"use client";
import { allCategories } from "@/lib/constants";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { menCategories, womenCategories } from "../lib/constants";
import Link from "next/link";

export default function CategoryFilter({ category }: { category: string }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  let subcategories = allCategories;

  if (category !== "") {
    subcategories = category === "men" ? menCategories : womenCategories;
  }

  function getLink(category: string) {
    params.set("subcategory", category);
    return `${pathName}?${params.toString()}`;
  }

  return (
    <div className="flex gap-2">
      {subcategories.map((link, index) => (
        <Link
          key={index}
          href={getLink(link)}
          className="border-1 px-2 py-1 rounded shadow">
          {link}
        </Link>
      ))}
    </div>
  );
}
