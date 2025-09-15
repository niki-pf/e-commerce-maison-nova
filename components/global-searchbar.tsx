"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import Searchbar from "./searchbar";
import { useSearchParams } from "next/navigation";

export default function GlobalSearchbar() {
  const toggle = false;
  const [showSearch, setShowSearch] = useState(toggle);
  const searchParams = useSearchParams();
  function handleToggle() {
    setShowSearch((prev) => !prev);
    const params = new URLSearchParams();
  }

  return (
    <div>
      {!showSearch ? (
        <Search size={20} onClick={handleToggle} className="m-0.5"></Search>
      ) : (
        <Searchbar globalSearch={true}></Searchbar>
      )}
    </div>
  );
}
