"use client";

import { CartProduct, ProductFull } from "@/lib/interfaces";
import { userCartStore } from "@/lib/stores/cartStore";
import React from "react";

interface AddToCartBtnProps {
  product: ProductFull;
}

const AddToCartBtn = ({ product }: AddToCartBtnProps) => {
  const addToCart = userCartStore((state) => state.addToCart);
  // Create a product object for cart
  // const addToCart = () => {
  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    discountPercentage: product.discountPercentage,
    image: product.images[0],
  };

  // console.log(cart)

  //   // Check if any products is localStorage, else create an empty array and add product top cart.
  //   let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   cart.push(cartProduct);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //};
  return (
    <button
      className="w-full py-3 text-center bg-gray-900 text-background shadow tracking-wider uppercase cursor-pointer"
      onClick={() => addToCart(cartProduct)}
    >
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
