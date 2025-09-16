import { ProductFull } from "@/lib/interfaces";
import React from "react";
import Stars from "../stars";
import {
  ascendingReviewRating,
  calcDaysSince,
  descendingReviewRating,
} from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import SortBy from "./sort-option";
export const reviewSortBy = [
  { prompt: "Stars: high to low", value: "rating-desc" },
  { prompt: "Stars: low to high", value: "rating-asc" },
];
export default function ReviewList({
  reviews,
  sort,
}: {
  reviews: ProductFull["reviews"];
  sort?: string;
}) {
  let sortedReviews: ProductFull["reviews"];

  if (sort) {
    sortedReviews =
      sort === "rating-asc"
        ? ascendingReviewRating(reviews)
        : descendingReviewRating(reviews);
  } else {
    sortedReviews = reviews;
  }

  return (
    <div className="grid gap-8">
      <div className="flex justify-end">
        <SortBy linkList={reviewSortBy}></SortBy>
      </div>
      <div className="w-full overflow-auto">
        <div className="grid gap-8">
          {sortedReviews.map((review, index) => (
            <div key={index} className="grid grid-cols-4 border-b-1 pb-16">
              <div className="grid h-min gap-2 ">
                <p className="font-bold">{review.reviewerName}</p>
                <div className="flex gap-1">
                  <CircleCheck stroke="white" fill="black"></CircleCheck>
                  <p className="flex gap-2">Verified</p>
                </div>
              </div>
              <div className="grid grid-rows-2 col-start-2 col-span-3 gap-8">
                <div className="flex justify-between ">
                  <Stars starCn="size-8" scoreOutOfFive={review.rating}></Stars>
                  <p>{`${calcDaysSince(review.date)} days ago`}</p>
                </div>
                <p className="font-semibold">{review.comment}</p>
                <p className="max-w-192">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  accusantium consequatur temporibus sunt consectetur
                  perferendis magnam vero ut, deleniti ipsa ipsam, vitae labore
                  molestias aut nemo numquam exercitationem enim quae!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
