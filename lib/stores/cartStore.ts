import { create } from "zustand";
import { CartProduct, ProductFull } from "../interfaces";
import { persist } from "zustand/middleware";

interface ICartState {
    cart: CartProduct[];
    count: number;
    addToCart: (product: CartProduct) => void; 
    // removeFromCart: (id: number) => void;
    // clearCart: () => void;
} 

// const addItem = (cartItem: CartProduct[], product: ProductFull): CartProduct[] => {
//     const item = cartItem.find((item) => item.id === product.id);

//     if (item) {

//     }

//     return [...cartItem, { ...product, count: 1}]
// }

export const userCartStore = create <ICartState>((set) => ({
    cart: [],
    count: 0,
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    // removeFromCart: (id) => set
}));