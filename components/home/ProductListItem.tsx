import Image from "next/image";
import { ProductType } from "@/types/Products";

function ProductListItem({ product }: { product: ProductType }) {
  return (
    <div className="flex items-center bg-(--card) rounded-lg shadow border border-(--border) p-4 mb-4 max-w-3xl mx-auto w-full transition-colors duration-200">
      <div className="">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="rounded-lg object-contain p-3 max-w-[100px] max-h-[100px]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 ml-4">
        <h2 className="text-lg md:text-xl font-semibold text-(--foreground)">
          {product.title}
        </h2>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="bg-(--primary)/10 px-3 py-1 rounded text-(--primary) font-medium text-sm">
            ${product.price}
          </span>
          <span className="bg-(--gray-200) px-2 py-0.5 rounded text-xs font-mono text-(--gray-700)">
            {product.category}
          </span>
        </div>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <button
          className="bg-(--primary) text-(--primary-foreground) rounded px-5 py-2 font-semibold shadow hover:bg-(--primary)/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-(--primary) cursor-pointer"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductListItem;
