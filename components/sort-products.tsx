"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function SortProducts() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sortParam = new URLSearchParams(searchParams);
  console.log(sortParam.toString());
  const sortBy = [
    { prompt: "Recommended", value: "recommended" },
    { prompt: "Name", value: "name" },
    { prompt: "Price: low to high", value: "prise-asc" },
    { prompt: "Price: high to low", value: "price-desc" },
    { prompt: "Rating: high to low", value: "rating-asc" },
    { prompt: "Rating: low to high", value: "rating-desc" },
    { prompt: "Discount", value: "discount" },
  ];
  function getLink(sortValue: string) {
    const params = sortParam;
    params.set("sort", sortValue);
    return `${pathName}?${params.toString()}`;
  }
  return (
    <div className="border-1 p-8">
      Sort by
      <ul>
        {sortBy.map((sort, index) => (
          <li key={index}>
            <Link href={getLink(sort.value)}>{sort.prompt}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
