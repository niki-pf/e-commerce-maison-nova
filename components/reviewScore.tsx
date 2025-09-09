import React from "react";
import { Star } from "lucide-react";
export default function ReviewScore({
  times,
  scoreOutOfFive,
}: {
  times: number;
  scoreOutOfFive: number;
}) {
  return (
    <div className="flex text-xs gap-0.5 ">
      <div className="flex size-25">
        {Array.from({ length: 5 }, () => (
          <Star key={length} fill="#111" strokeWidth={0}></Star>
        ))}
      </div>
      <p>{scoreOutOfFive.toFixed(1)} </p>
      <p className="">{`${times} Reviews`}</p>
    </div>
  );
}
