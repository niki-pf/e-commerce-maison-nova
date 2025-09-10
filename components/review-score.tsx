import React from "react";
import { Star } from "lucide-react";

export default function ReviewScore({
  nrOfReviews,
  scoreOutOfFive,
}: {
  nrOfReviews: number;
  scoreOutOfFive: number;
}) {
  return (
    <div className="flex text-xs gap-0.5">
      <div className="flex relative">
        <div className="flex absolute">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star className="size-4" key={index} strokeWidth={1}></Star>
          ))}
        </div>
        <div className="absolute flex size-25">
          {Array.from({ length: scoreOutOfFive }).map((_, index) => (
            <Star
              className="size-4"
              key={index}
              fill="#111"
              strokeWidth={1}></Star>
          ))}
        </div>
      </div>
      <div className="ml-20 flex gap-1">
        <p>{`(${scoreOutOfFive.toFixed(1)})`} </p>
        <p className="">{`${nrOfReviews} Reviews`}</p>
      </div>
    </div>
  );
}

