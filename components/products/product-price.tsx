import { MIN_DISCOUNT_TO_DISPLAY } from "@/lib/constants";
import React from "react";

export default function ProductPrice({
  discount,
  price,
}: {
  discount: number;
  price: number;
}) {
  return (
    <>
      {discount > MIN_DISCOUNT_TO_DISPLAY ? (
        <div className="flex gap-2 ">
          <p className="line-through">{`$${price}`}</p>
          <p>{`$${Math.round(price - (discount / 100) * price).toFixed(2)}`}</p>
        </div>
      ) : (
        <p>{`$${price}`}</p>
      )}
    </>
  );
}
