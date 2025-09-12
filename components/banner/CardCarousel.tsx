"use client";

import React, { useRef } from "react";
import FavouriteCard from "./FavouriteCard";

interface CardItem {
  imageSrc: string;
  altText: string;
  productName: string;
  productPrice: string;
  brandName: string;
}

interface CardItemProps {
  cards: CardItem[];
}

const CardCarousel = ({ cards }: CardItemProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full my-10 flex gap-4 overflow-x-auto">
      {cards.map((card, idx) => (
        <FavouriteCard
          key={idx}
          imageSrc={card.imageSrc}
          altText={card.altText}
          productName={card.productName}
          productPrice={card.productPrice}
          brandName={card.brandName}
        />
      ))}
    </div>
  );
};

export default CardCarousel;
