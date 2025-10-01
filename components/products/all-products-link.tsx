import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AllProductsLink({ gender }: { gender?: string }) {
  let genderLink = "";
  if (gender) {
    genderLink = gender !== "men" ? "women" : "men";
  }
  return (
    <Link
      href={`/products${genderLink ? `category=${genderLink}` : ""}`}
      className="undescore flex p-0.5 items-center gap-2 hover:underline focus-visible:underline">
      Display all... <ArrowRight></ArrowRight>
    </Link>
  );
}
