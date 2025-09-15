"use client";
import { allCategories, menCategories, womenCategories } from "@/lib/constants";
import { Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent } from "react";
import Stars from "./stars";

export default function FilterBy({ category }: { category: string }) {
  const starRating = [1, 2, 3, 4, 5];
  const priceOptions = [
    { prompt: "Max Price", value: "max" },
    { prompt: "Min Price", value: "min" },
  ];

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const filters = [
      { filter: "min", value: formData.get("min")?.toString() },
      { filter: "max", value: formData.get("max")?.toString() },
      { filter: "stars", value: formData.get("stars")?.toString() },
    ];

    const newLink = filters.map((filter) => {
      if (filter.value === undefined || filter.value === "") {
        params.delete(filter.filter);
      } else {
        params.set(filter.filter, filter.value);
      }
    });
    replace(`${pathName}?${params}`);
  }

  return (
    <div className="p-8 border-2 grid py-4 text-xl">
      {/* choose sub category */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start gap-4">
        {priceOptions.map((option, index) => (
          <label key={index}>
            {option.prompt}
            <input type="number" name={option.value} className="border-2" />
          </label>
        ))}

        {starRating.map((star) => (
          <div key={star} className="flex gap-2">
            <input
              type="checkbox"
              name="stars"
              id={`star-${star}`}
              value={star}
            />
            <label htmlFor={`star-${star}`}>
              <Stars scoreOutOfFive={star}></Stars>
            </label>
          </div>
        ))}
        <button className="border-2 p-1 shaddow rounded-full ">Search</button>
      </form>
    </div>
  );
}
