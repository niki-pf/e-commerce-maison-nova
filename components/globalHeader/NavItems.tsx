"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const listItemMenu = [
  { label: "Dam", href: "/dam" },
  { label: "Herr", href: "/herr" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakta", href: "/kontakta" },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="h-[50px] flex gap-7 items-center">
        {listItemMenu.map((listItem, idx) => {
          const isActive =
            pathname === listItem.href ||
            (pathname.startsWith(listItem.href) && listItem.href !== "/");

          return (
            <li
              key={idx}
              className={`h-full flex items-center relative ${
                isActive ? "after:w-full" : ""
              } after:absolute after:left-0 after:bottom-0 after:h-1 after:bg-gray-900 after:w-0 after:transition-all hover:after:w-full`}
            >
              <Link href={listItem.href}>{listItem.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
