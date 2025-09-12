import { Star } from "lucide-react";
import React from "react";

export default function Stars({
  scoreOutOfFive,
  starCn,
}: {
  scoreOutOfFive: number;
  starCn?: string;
}) {
  return (
    <div className="flex relative">
      <div className="flex absolute">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            className={`size-4 ${starCn}`}
            key={index}
            strokeWidth={1}></Star>
        ))}
      </div>
      <div className="absolute flex">
        {Array.from({ length: scoreOutOfFive }).map((_, index) => (
          <Star
            className={`size-4 ${starCn}`}
            key={index}
            fill="#111"
            strokeWidth={1}></Star>
        ))}
      </div>
    </div>
  );
}
