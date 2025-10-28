"use client";

import { ProductType } from "@/types/Products";
import { useState } from "react";
import ProductCardItem from "./ProductCardItem";
import ProductListItem from "./ProductListItem";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

function ProductsView({ products }: { products: ProductType[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto px-4 transition-colors duration-200">
      <div className="flex justify-end mb-6 mt-8 space-x-3">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded border font-medium transition-colors duration-200 cursor-pointer
            ${
              view === "grid"
                ? "bg-(--primary) text-(--primary-foreground) border-(--primary)"
                : "bg-(--accent) border-(--border) hover:bg-(--secondary)"
            }
          `}
          aria-label="Grid view"
        >
          <IoGrid size={20} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded border font-medium transition-colors duration-200 cursor-pointer
            ${
              view === "list"
                ? "bg-(--primary) text-(--primary-foreground) border-(--primary)"
                : "bg-(--accent) border-(--border) hover:bg-(--secondary)"
            }
          `}
          aria-label="List view"
        >
          <FaList size={20} />
        </button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCardItem key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div>
          {products.map((item) => (
            <ProductListItem key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductsView;
