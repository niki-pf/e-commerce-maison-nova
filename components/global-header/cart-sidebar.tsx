import React from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { userCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { log } from "console";

const EXPIRATION_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

interface CartSidebarProps {
  cartIsOpen: boolean;
  setCartIsOpen: (isOpen: boolean) => void;
}

const CartSidebar = ({ cartIsOpen, setCartIsOpen }: CartSidebarProps) => {
  const cartList = userCartStore((state) => state.cart);
  console.log("Cart: ", cartList);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[500px] p-3 bg-white shadow-md z-50 transform transition-transform duration-300 ${
        cartIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <p className="text-2xl font-semibold">Kundvagn</p>
        <button className="cursor-pointer" onClick={() => setCartIsOpen(false)}>
          <X />
        </button>
      </div>
      {/*** List of products in cart ***/}
      <div>
        <ul className="flex flex-col">
          {cartList.map((cartItem, idx) => (
            <li key={idx} className="flex justify-between gap-2 bg-amber-400">
              <div className="relative w-30 aspect-square bg-blue-500">
                <Image
                  src={cartItem.image}
                  alt={`Image of ${cartItem.title}`}
                  fill
                  className="object-fit"
                />
              </div>
              <div className="flex flex-col justify-between">
                <p>{cartItem.title}</p>
                <div className="">
                  <p>${cartItem.price}</p>
                  <p className="line-through">{cartItem.discountPercentage}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <span className="mt-1">
                  <Trash2 size={20} />
                </span>
                <div className="p-2 flex gap-4 border-2 border-black">
                  <button className="cursor-pointer">
                    <Minus size={20} />
                  </button>
                  <span>1</span>
                  <button className="cursor-pointer">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartSidebar;
