import Billing from "@/components/cart/Billing";
import CartView from "@/components/cart/CartView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - Saimon Store",
  description: "Cart page of Saimon Store",
};

export default async function CartPage() {
  return (
    <>
      <div className="container max-w-7xl mx-auto py-10 px-4">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <CartView />
          <Billing />
        </div>
      </div>
    </>
  );
}
