"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import type { IRootState } from "@/redux/rootReducer";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import Link from "next/link";

// The Cart View component that displays the cart items and total price.
function CartView() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: IRootState) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    if (typeof id === "number") {
      dispatch(removeFromCart(id));
    }
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = Number(e.target.value);
    if (value > 0) {
      dispatch(updateQuantity({ id, quantity: value }));
    }
  };

  return (
    <>
      {/* Cart Column */}
      <div className="bg-(--card) rounded-lg shadow p-6 ">
        <h2 className="text-2xl font-bold mb-6 text-(--foreground)">
          Your Cart
        </h2>

        <div className="w-full">
          {cartItems.length === 0 ? (
            <div className="text-muted-foreground text-center mt-8">
              Your cart is empty.
            </div>
          ) : (
            <>
              <ul className="space-y-5">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-(--muted) rounded overflow-hidden flex items-center justify-center min-w-16 min-h-16">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="font-bold text-(--foreground) text-lg md:text-xl">
                        {item.title}
                      </div>

                      <div className="flex justify-between gap-2 items-center">
                        <div className="text-lg md:text-xl text-(--muted-foreground)">
                          ${item.price.toFixed(2)}{" "}
                          <span className="mx-1 font-medium text-xl md:text-2xl">
                            ×
                          </span>{" "}
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(e, Number(item.id))
                            }
                            className="w-16 h-8 text-center text-base md:text-lg border border-(--border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary)/30 mb-3"
                          />
                        </div>

                        <div className="font-semibold text-(--foreground) text-xl md:text-2xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button
                          type="button"
                          className="ml-2 text-(--destructive) hover:text-(--destructive)/80 text-base md:text-lg font-medium cursor-pointer"
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

              <div className="border-t border-border p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-(--primary) font-semibold text-lg md:text-xl">
                    Total
                  </span>
                  <span className="text-(--primary) font-bold text-lg md:text-xl">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        <Link href="/" className="w-1/2 mx-auto flex justify-center">
          <button className="w-full py-2 bg-(--primary) text-(--primary-foreground) font-semibold rounded hover:bg-(--primary)/90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
}
export default CartView;
