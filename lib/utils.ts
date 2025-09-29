export const convertCurrency = (usd: number): number => {
  const exchangeRate = 10.5;
  return Math.round(usd * exchangeRate);
};
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function ascendingSortByKey<T>(data: T[], key: keyof T): T[] {
  return data.sort((first, next) => {
    if (first[key] < next[key]) {
      return -1;
    }
    if (first[key] > next[key]) {
      return 1;
    }
    return 0;
  });
}

export function descendingSortByKey<T>(data: T[], key: keyof T): T[] {
  return data.sort((first, next) => {
    if (first[key] < next[key]) {
      return 1;
    }
    if (first[key] > next[key]) {
      return -1;
    }
    return 0;
  });
}

export function generateSlug(toSlug: string) {
  const slug = toSlug
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 50);
  return slug;
}

export const convertCurrency = (usd: number) :  number => {
  const exchangeRate = 10.5;
  return Math.round(usd * exchangeRate);
}
