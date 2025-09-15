import React from "react";
import { Star } from "lucide-react";
import Stars from "./stars";

export default function ReviewScore({
  nrOfReviews,
  scoreOutOfFive,
}: {
  nrOfReviews: number;
  scoreOutOfFive: number;
}) {
  return (
    <div className="flex text-xs gap-0.5">
      <Stars scoreOutOfFive={scoreOutOfFive}></Stars>
      <div className="ml-20 flex gap-1">
        <p>{`(${scoreOutOfFive.toFixed(1)})`} </p>
        <p className="">{`${nrOfReviews} Reviews`}</p>
      </div>
    </div>
  );
}
