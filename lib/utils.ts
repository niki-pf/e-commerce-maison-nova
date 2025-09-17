import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductFull } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validCategory(category: string) {
  const validCategories = ["men", "women"];
  return validCategories.includes(category);
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
  return reviews.sort((first, next) => {
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
  return reviews.sort((first, next) => {
    if (first.rating < next.rating) {
      return -1;
    }
    if (first.rating > next.rating) {
      return 1;
    }
    return 0;
  });
}
export function ascendingName(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.title < next.title) {
      return -1;
    }
    if (first.title > next.title) {
      return 1;
    }
    return 0;
  });
}
export function descendingName(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.title < next.title) {
      return 1;
    }
    if (first.title > next.title) {
      return -1;
    }
    return 0;
  });
}
export function ascendingPrice(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.price < next.price) {
      return -1;
    }
    if (first.price > next.price) {
      return 1;
    }
    return 0;
  });
}
export function descendingPrice(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.price < next.price) {
      return 1;
    }
    if (first.price > next.price) {
      return -1;
    }
    return 0;
  });
}
export function ascendingRating(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.rating < next.rating) {
      return -1;
    }
    if (first.rating > next.rating) {
      return 1;
    }
    return 0;
  });
}
export function descendingRating(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.price < next.price) {
      return 1;
    }
    if (first.price > next.price) {
      return -1;
    }
    return 0;
  });
}
export function ascendingDiscount(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.discountPercentage < next.discountPercentage) {
      return -1;
    }
    if (first.discountPercentage > next.discountPercentage) {
      return 1;
    }
    return 0;
  });
}
export function descendingDiscount(products: ProductFull[]) {
  return products.sort((first, next) => {
    if (first.discountPercentage < next.discountPercentage) {
      return 1;
    }
    if (first.discountPercentage > next.discountPercentage) {
      return -1;
    }
    return 0;
  });
}
/* 
export function sortAscending(products: ProductFull[], sortBy: string) {

  return products.sort((first, next) => {
    if (first[{sortBy}] < next.discountPercentage) {
      return -1;
    }
    if (first.discountPercentage > next.discountPercentage) {
      return 1;
    }
    return 0;
  });
}

export function sortDescending(products: ProductFull[]) {

  return products.sort((first, next) => {
    if (first.discountPercentage < next.discountPercentage) {
      return 1;
    }
    if (first.discountPercentage > next.discountPercentage) {
      return -1;
    }
    return 0;
  });
} */
