"use client";

import { ProductType } from "@/types/Products";

const AddCart = ({ product }: { product: ProductType }) => {
  const handleAddToCart = () => {
    console.log(product);
  };

  return (
    <button
      className="mt-2 bg-(--primary) hover:bg-(--primary)/90 text-(--primary-foreground) rounded px-4 py-2 font-semibold shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-(--primary) cursor-pointer"
      type="button"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};
export default AddCart;
