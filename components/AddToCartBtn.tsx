"use client";

import React from "react";

interface AddToCartBtnProps {
  product: {
    title: string;
    price: number;
    discountPercentage: number;
    tags: string[];
    images: string[];
  };
}

const AddToCartBtn = ({ product }: AddToCartBtnProps) => {
  const addToCart = () => {
    console.log("Produkten: ", product.price, product);

    const cartProduct = {
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      image: product.images[0],
    };

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <button
      className="w-full py-3 text-center bg-gray-900 text-background shadow tracking-wider uppercase cursor-pointer"
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
