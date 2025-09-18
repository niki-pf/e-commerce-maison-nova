import { MIN_DISCOUNT_TO_DISPLAY } from "@/lib/constants";
import React from "react";

export default function DiscountTag({ discount }: { discount: number }) {
  return (
    <>
      {discount > MIN_DISCOUNT_TO_DISPLAY ? (
        <p className="absolute bg-background top-0 mt-1 ml-1 p-1 text-discount ">
          {`${Math.floor(discount)} % off`}
        </p>
      ) : (
        ""
      )}
    </>
  );
}
