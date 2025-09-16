"use client";

import { listItemMenu } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItemsProps = {
  direction?: "row" | "col";
  onLinkClick?: () => void;
};

const NavItems = ({ direction = "row", onLinkClick }: NavItemsProps) => {
  const pathname = usePathname();
  const isRow = direction === "row";
  return (
    <ul
      className={`flex items-center ${
        isRow ? "flex-row gap-7 h-[50px]" : "flex-col items-start gap-4 py-4"
      }`}
    >
      {listItemMenu.map((listItem, idx) => {
        const isActive =
          pathname === listItem.href ||
          (pathname.startsWith(listItem.href) && listItem.href !== "/");

        return (
          <li
            key={idx}
            className={`relative h-full flex items-center ${
              isRow ? "h-full" : ""
            }
             ${
               isActive ? "after:w-full" : ""
             } after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-gray-900 after:w-0 after:transition-all hover:after:w-full`}
          >
            <Link href={listItem.href} onClick={onLinkClick}>
              {listItem.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
