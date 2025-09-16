"use client";
import { ProductFull } from "@/lib/interfaces";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProductPagination({ pages }: { pages: number }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sortParam = new URLSearchParams(searchParams);

  function getLink(page: string) {
    const params = sortParam;
    if (page === "0") {
      params.delete("page");
      return `${pathName}?${params.toString()}`;
    }
    params.set("page", page);
    return `${pathName}?${params.toString()}`;
  }
  return (
    <div>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: pages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={getLink((index + 1).toString())}
                isActive={searchParams.get("page") === (index + 1).toString()}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
