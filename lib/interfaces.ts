export interface ProductFull {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  images: string[];
  thumbnail: string;
}

export interface CartProduct {
  id:number;
  title: string;
  price: number;
  discountPercentage: number;
  image: string;
}