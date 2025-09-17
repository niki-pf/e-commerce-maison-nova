"use client";
import { SortData } from "@/lib/interfaces";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function SortOptions({ data }: { data: SortData[] }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sortParam = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  function getLink(sortValue: string) {
    const params = sortParam;
    if (sortValue === "") {
      params.delete("sort");
      return `${pathName}?${params.toString()}`;
    }
    params.set("sort", sortValue);
    return `${pathName}?${params.toString()}`;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    replace(getLink(value));
  };

  return (
    <div className="p-8 border-2 grid py-4 text-xl">
      <label htmlFor="options">Sort By:</label>
      <select id="options" onChange={handleChange} defaultValue={"default"}>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
