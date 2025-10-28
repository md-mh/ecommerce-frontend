"use client";

import Image from "next/image";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import type { IRootState } from "@/redux/rootReducer";
import { removeFromCart, clearCart } from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";

// The Cart component that displays the cart items and total price in header.
export default function Cart() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: IRootState) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    // Confirm id is number and call dispatch synchronously
    if (typeof id === "number") {
      dispatch(removeFromCart(id));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setOpen(false);
  };

  const handleCheckout = () => {
    router.push("/cart");
    setOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="relative p-2 rounded-md border border-border hover:bg-muted transition bg-card cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Open cart"
      >
        <CiShoppingCart className="w-5 h-5 text-foreground" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-(--primary) text-(--primary-foreground) text-xs rounded-full w-5 h-5 flex items-center justify-center border border-background shadow pt-1">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {open && (
        <div className="absolute right-0 z-50 w-[370px] max-w-xs top-full border border-border rounded-lg shadow-2xl mt-2 bg-(--background)">
          <div className="bg-foreground flex flex-col animate-fade-in">
            <div className="flex-1 p-4 overflow-y-auto max-h-[60vh]">
              {cartItems.length === 0 ? (
                <div className="text-muted-foreground text-center mt-8">
                  Your cart is empty.
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-(--muted) rounded overflow-hidden flex items-center justify-center min-w-12 min-h-12">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="font-bold text-(--foreground) text-sm">
                          {item.title}
                        </div>

                        <div className="flex justify-between gap-2">
                          <div className="text-sm text-(--muted-foreground)">
                            ${item.price.toFixed(2)} x {item.quantity}
                          </div>

                          <div className="font-semibold text-(--foreground)">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>

                          <button
                            type="button"
                            className="ml-2 text-(--destructive) hover:text-(--destructive)/80 text-xs cursor-pointer"
                            aria-label={`Remove ${item.title} from cart`}
                            onClick={() => handleRemove(Number(item.id))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-t border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-(--primary) font-semibold">Total</span>
                <span className="text-(--primary) font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                className="w-full py-2 bg-(--primary) text-(--primary-foreground) font-semibold rounded hover:bg-(--primary)/90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Checkout
              </button>
              {cartItems.length > 0 && (
                <button
                  className="w-full mt-2 py-2 bg-(--muted) text-(--foreground) font-semibold rounded hover:bg-(--muted)/80 transition text-xs cursor-pointer"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
