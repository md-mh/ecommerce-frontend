"use client";

import { ProductType, SortType } from "@/types/Products";
import { useState } from "react";
import ProductCardItem from "./ProductCardItem";
import ProductListItem from "./ProductListItem";
import { FaList, FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

// The Products View component that displays the products.
function ProductsView({ products }: { products: ProductType[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const perPage = 10;
  const [sort, setSort] = useState<SortType>("default");
  const [searchProducts, setSearchProducts] = useState<ProductType[]>(products);
  const [filterProducts, setFilterProducts] =
    useState<ProductType[]>(searchProducts);
  const [viewProducts, setViewProducts] = useState<ProductType[]>(
    [...searchProducts].slice(0, perPage)
  );

  // The function to handle the sorting.
  const handleSortChange = (value: SortType) => {
    setSort(value);

    if (value === "rating") {
      const sortedProducts = [...searchProducts].sort(
        (a, b) => b.rating?.rate - a.rating?.rate
      );
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else if (value === "price-low-to-high") {
      const sortedProducts = [...searchProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else if (value === "price-high-to-low") {
      const sortedProducts = [...searchProducts].sort(
        (a, b) => b.price - a.price
      );
      setFilterProducts(sortedProducts);
      setViewProducts([...sortedProducts].slice(0, perPage));
    } else {
      setFilterProducts(searchProducts);
      setViewProducts([...searchProducts].slice(0, perPage));
    }
  };

  // The function to handle the search.
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const searchData: ProductType[] = [...products].filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchProducts(searchData);
    setSort("default");
    setFilterProducts(searchData);
    setViewProducts([...searchData].slice(0, perPage));
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
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-6 md:mt-0">
        <div className="col-span-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              className="w-full p-2 rounded border font-medium transition-colors duration-200 bg-(--background) text-(--foreground) border-(--border) focus:outline-none focus:ring-2 focus:ring-(--primary)/30"
              onChange={handleSearch}
            />
            <FaSearch
              size={20}
              className="text-(--foreground) absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-end mb-6 mt-8 space-x-3">
          <div className="flex items-center gap-2">
            <p className="text-(--foreground)">Sort by:</p>
            <select
              className="p-2 rounded border font-medium transition-colors duration-200 cursor-pointer bg-(--background) text-(--foreground) border-(--border)"
              onChange={(e) => handleSortChange(e.target.value as SortType)}
              value={sort}
            >
              <option value="default">Default</option>
              <option value="rating">Rating</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>

          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded border font-medium transition-colors duration-200 cursor-pointer hidden md:block
            ${
              view === "grid"
                ? "bg-(--primary) text-(--primary-foreground) border-(--primary)"
                : "bg-(--accent) border-(--border) hover:bg-(--secondary)"
            }
          `}
          >
            <IoGrid size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded border font-medium transition-colors duration-200 cursor-pointer hidden md:block
            ${
              view === "list"
                ? "bg-(--primary) text-(--primary-foreground) border-(--primary)"
                : "bg-(--accent) border-(--border) hover:bg-(--secondary)"
            }
          `}
          >
            <FaList size={20} />
          </button>
        </div>
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
          className="w-1/2 md:w-1/4 mx-auto my-8 flex justify-center py-2 bg-(--primary) text-(--primary-foreground) font-semibold rounded hover:bg-(--primary)/90 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}
export default ProductsView;
