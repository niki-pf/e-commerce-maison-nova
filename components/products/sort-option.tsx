"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

interface Props {
  prompt: string;
  value: string;
}

export default function SortOption({ linkList }: { linkList: Props[] }) {
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
        {linkList.map((link, index) => (
          <option key={index} value={link.value}>
            {link.prompt}
          </option>
        ))}
      </select>
    </div>
  );
}
