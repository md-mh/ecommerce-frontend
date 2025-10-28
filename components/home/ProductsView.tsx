"use client";

import { ProductType } from "@/types/Products";
import { useState } from "react";
import ProductCardItem from "./ProductCardItem";
import ProductListItem from "./ProductListItem";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

// The Products View component that displays the products.
function ProductsView({ products }: { products: ProductType[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const perPage = 10;

  const [filterProducts, setFilterProducts] = useState<ProductType[]>(products);
  const [viewProducts, setViewProducts] = useState<ProductType[]>(
    [...products].slice(0, perPage)
  );

  // The function to handle the sorting.
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "rating") {
      const sortedProducts = [...products].sort(
        (a, b) => b.rating?.rate - a.rating?.rate
      );
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else if (value === "price-low-to-high") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else if (value === "price-high-to-low") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else {
      setFilterProducts(products);
      setViewProducts([...products].slice(0, perPage));
    }
  };

  // The function to handle the show more button click.
  const handleShowMore = () =>
    setViewProducts([
      ...viewProducts,
      ...[...filterProducts].slice(
        viewProducts.length,
        viewProducts.length + perPage
      ),
    ]);

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

        <select
          className="p-2 rounded border font-medium transition-colors duration-200 cursor-pointer bg-(--background) text-(--foreground) border-(--border)"
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="rating">Rating</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {viewProducts.map((item) => (
            <ProductCardItem key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div>
          {viewProducts.map((item) => (
            <ProductListItem key={item.id} product={item} />
          ))}
        </div>
      )}
      {viewProducts.length < filterProducts.length && (
        <button
          className="w-1/5 mx-auto my-8 flex justify-center py-2 bg-(--primary) text-(--primary-foreground) font-semibold rounded hover:bg-(--primary)/90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}
export default ProductsView;
