import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductFull } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calcDaysSince(dateToCalc: string) {
  const msPerDay = 1000 * 60 * 60 * 24;

  const previusDate = new Date(dateToCalc);
  const today = new Date();
  const diffInMS = today.getTime() - previusDate.getTime();
  const daysAgo = Math.floor(diffInMS / msPerDay);
  return daysAgo;
}

export function descendingReviewRating(reviews: ProductFull["reviews"]) {
  reviews.sort((first, next) => {
    console.log(reviews);

    if (first.rating < next.rating) {
      return 1;
    }
    if (first.rating > next.rating) {
      return -1;
    }
    return 0;
  });
}

export function ascendingReviewRating(reviews: ProductFull["reviews"]) {
  reviews.sort((first, next) => {
    console.log(reviews);

    if (first.rating < next.rating) {
      return 1;
    }
    if (first.rating > next.rating) {
      return -1;
    }
    return 0;
  });
}
