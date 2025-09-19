import {
  BannerPositionVariants,
  HeightVariant,
  PositionVariant,
} from "./types";

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
  id: number;
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

export interface AddToCartBtnProps {
  product: ProductFull;
}

export interface FullPageBlockProps {
  imageSrc: string;
  altText: string;
  h2?: string;
  paragraph?: string;
  link: string;
  linkPrompt: string;
  pos?: PositionVariant;
}

export interface SplitHeroProps {
  leftImageUrl: string;
  rightImageUrl: string;
  leftButtonText: string;
  rightButtonText: string;
  leftHref: string;
  rightHref: string;
  buttonY?: string;
}

export interface BannerProps {
  imageSrc: string;
  altText: string;
  h2?: string;
  paragraph?: string;
  button?: string;
  pos?: BannerPositionVariants;
  height?: HeightVariant;
}

export interface BannerWrapperProps {
  banners: BannerProps[];
}
