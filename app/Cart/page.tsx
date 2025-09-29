"use client";

import Link from "next/link";
import Image from "next/image";
import { userCartStore } from "@/lib/stores/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import { convertCurrency } from "@/lib/utils";

export default function CartPage() {
  const cartList = userCartStore((state) => state.cart);
  const removeFromCart = userCartStore((state) => state.removeFromCart);
  const incrementCartItem = userCartStore((state) => state.incrementCartItem);
  const decrementCartItem = userCartStore((state) => state.decrementCartItem);

  // Calculate totals
  const getNumbersOfProducts = () =>
    cartList.reduce((sum, cart) => sum + (cart.quantity || 0), 0);

  const getTotalPriceOfProductsUSD = () =>
    cartList.reduce((total, cart) => {
      const discountPrice = Math.round(
        cart.price - (cart.discountPercentage / 100) * cart.price
      );
      return total + discountPrice * (cart.quantity || 0);
    }, 0);

  const getTotalPriceOfProductsSEK = () =>
    convertCurrency(getTotalPriceOfProductsUSD());

  return (
    <div className="min-h-screen bg-muted py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-accent-foreground mb-2">Min varukorg</h1>
          <p className="text-muted-foreground">
            Har du redan ett konto?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Logga in för en bättre shoppingupplevelse
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            {cartList.length === 0 ? (
              <div className="bg-background rounded-lg shadow-md p-6 text-center">
                <p>Din kundvagn är tom!</p>
              </div>
            ) : (
              cartList.map((cartItem, idx) => {
                const discountPriceUSD = Math.round(
                  cartItem.price -
                    (cartItem.discountPercentage / 100) * cartItem.price
                );
                const itemTotalUSD = discountPriceUSD * (cartItem.quantity ?? 0);
                return (
                  <div
                    key={idx}
                    className="bg-background rounded-lg shadow-md p-6 mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 rounded bg-muted">
                        <Image
                          src={cartItem.image}
                          alt={cartItem.title}
                          fill
                          className="object-contain rounded"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">
                            {cartItem.title}
                          </h3>
                          <span className="text-lg font-bold">
                            {convertCurrency(itemTotalUSD)} kr
                          </span>
                        </div>

                        {/* Price breakdown */}
                        <div className="mt-3 flex items-center gap-4">
                          <span className="text-muted-foreground line-through">
                            {convertCurrency(cartItem.price)} kr
                          </span>
                          <span className="text-destructive font-semibold">
                            -
                            {convertCurrency(
                              (cartItem.discountPercentage / 100) *
                                cartItem.price
                            )}{" "}
                            kr
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="mt-4 flex items-center gap-2">
                          <button
                            className="px-2 border-border rounded"
                            onClick={() => decrementCartItem(cartItem.id)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4">{cartItem.quantity}</span>
                          <button
                            className="px-2 border rounded"
                            onClick={() => incrementCartItem(cartItem.id)}
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            className="ml-auto text-destructive"
                            onClick={() => removeFromCart(cartItem.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Beställningssumma</h2>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Produkter ({getNumbersOfProducts()})</span>
                  <span>{getTotalPriceOfProductsSEK()} kr</span>
                </div>
              </div>

              {/* Shipping */}
              <div className="border-t border-border pt-4 mb-4">
                <h3 className="font-semibold mb-2">Frakt och hantering</h3>
                <div className="flex justify-between">
                  <span>Fast frakt</span>
                  <span>{convertCurrency(10)} kr</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Totalt</span>
                  <span>{getTotalPriceOfProductsSEK() + convertCurrency(10)} kr</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/80 transition duration-200 mb-6">
                Checkout
              </button>

              {/* Discount / Vouchers */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Rabattkod</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Skriv in rabattkod här"
                    className="flex-1 border border-border rounded-lg px-3 py-2 text-sm"
                  />
                  <button className="bg-black text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/80">
                    Använd
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Presentkort</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Presentkort/Tillgodo..."
                    className="flex-1 border border-border rounded-lg px-3 py-2 text-sm"
                  />
                  <button className="bg-black text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/80">
                    Använd
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
