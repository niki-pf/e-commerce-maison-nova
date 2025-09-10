"use client";

import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative h-[50] md:px-8 px-4 w-full flex justify-between items-center ">
      {/*** Desktop navigation ***/}
      <nav className="hidden md:flex">
        <NavItems direction="row" />
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/*** Mobile navigation ***/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6">
          <NavItems direction="col" onLinkClick={() => setIsOpen(false)} />
        </nav>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="text-xl md:text-2xl font-bold uppercase">
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
