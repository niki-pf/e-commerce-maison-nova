import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const NavMain = () => {
  return (
    <header className="relative h-[50] px-8 w-screen flex justify-between items-center">
      <NavItems />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="text-2xl font-bold uppercase">
          Maison Nova
        </Link>
      </div>
      <div className="flex gap-3">
        <span>
          <Search size={20} />
        </span>
        <span>
          <User size={20} />
        </span>
        <span>
          <ShoppingCart size={20} />
        </span>
      </div>
    </header>
  );
};

export default NavMain;
