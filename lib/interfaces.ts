export interface ProductFull {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  images: string[];
  thumbnail: string;
}

export interface CartProduct {
  id:number;
  title: string;
  price: number;
  discountPercentage: number;
  image: string;
  quantity?: number;
}
export interface SortData {
  title: string;
  value: string;
  key: string;
  type: string;
}

export interface URLProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
