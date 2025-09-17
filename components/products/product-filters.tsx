"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent } from "react";
import Stars from "../stars";
import Searchbar from "../globals/searchbar";
import CategoryFilter from "./category-filter";

export default function ProductFilter({ category }: { category: string }) {
  const starRating = [1, 2, 3, 4, 5];
  const priceOptions = [
    { prompt: "Max Price", value: "max" },
    { prompt: "Min Price", value: "min" },
  ];

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const paramMin = params.get("min") !== "" ? params.get("min") : "";
  const paramMax = params.get("max") !== "" ? params.get("max") : "";
  const paramStars = params.getAll("stars");

  console.log(paramStars.includes);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const filters = [
      { filter: "min", value: formData.get("min")?.toString() },
      { filter: "max", value: formData.get("max")?.toString() },
      { filter: "stars", value: formData.getAll("stars")?.toString() },
    ];

    filters.map((filter) => {
      if (filter.value === undefined || filter.value === "") {
        params.delete(filter.filter);
      } else {
        params.set(filter.filter, filter.value);
      }
    });
    replace(`${pathName}?${params}`);
  }
  return (
    <div className="p-8 border-2 grid gap-2 py-4 text-xl">
      <Searchbar globalSearch={false}></Searchbar>
      <CategoryFilter category={category}></CategoryFilter>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start gap-4">
        {priceOptions.map((option, index) => (
          <label key={index}>
            {option.prompt}
            <input
              type="number"
              name={option.value}
              defaultValue={option.value}
              className="border-2"
            />
          </label>
        ))}

        {starRating.map((star) => (
          <div key={star} className="flex gap-2">
            <input
              type="checkbox"
              name="stars"
              id={`star-${star}`}
              value={star}
              defaultChecked={paramStars.includes(star.toString())}
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
