import { notFound } from "next/navigation";

export interface ProductFull {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  images: string[];
  reviews: [
    {
      rating: number;
      comment: string;
      date: Date;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
}

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      console.log(`There was an error fetching a product with id: ${id}`);
      return notFound();
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (error) {
    console.log("API network error");
  }
}
