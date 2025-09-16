import { log } from "console";
import { Star } from "lucide-react";
import React from "react";

function countFreq(numbers: number[], target: number) {
  let counter = 0;
  numbers.map((num) => (num === target ? counter++ : null));
  return counter;
}

function RatingBarRow({
  target,
  numbers,
}: {
  target: number;
  numbers: number[];
}) {
  const percentage = (
    (countFreq(numbers, target) / numbers.length) *
    100
  ).toFixed(0);
  const dynamicWidth = `${percentage}%`;

  return (
    <div className="relative w-60">
      <div className="absolute top-1.5 left-0 bg-white w-full rounded p-1.5"></div>
      <div
        className={`absolute top-1.5 left-0 bg-black rounded py-1.5 `}
        style={{ width: `${dynamicWidth}` }}></div>
    </div>
  );
}

export default function RatingBarChart({ numbers }: { numbers: number[] }) {
  numbers.sort();

  return (
    <div className="grid">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="grid barChart text-left grid-cols-subgrid gap-2 w-80 p-2">
          <p>{5 - index}</p>
          <Star fill="black"></Star>
          <RatingBarRow target={5 - index} numbers={numbers}></RatingBarRow>
          <p className="text-left ml-1">{countFreq(numbers, 5 - index)}</p>
        </div>
      ))}
    </div>
  );
}
