"use client";
import { allCategories } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { menCategories, womenCategories } from "../../lib/constants";
import Link from "next/link";

export default function CategoryFilter({ category }: { category: string }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  let subcategories = allCategories;

  if (category !== "") {
    subcategories = category === "men" ? menCategories : womenCategories;
  }

  function getLink(category: string) {
    params.set("subcategory", category);
    return `${pathName}?${params.toString()}`;
  }
  const paramSubcategory =
    params.get("subcategory") !== "" ? params.get("subcategory") : "";
  const isActive = "bg-background ring-2";
  return (
    <div className="grid max-w-full grid-flow-row gap-2">
      {subcategories.map((link, index) => (
        <Link
          key={index}
          href={getLink(link)}
          className={`border-1 text-sm h-min px-2 py-1 w-max nowrap rounded shadow${
            paramSubcategory === link ? isActive : ""
          }`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
