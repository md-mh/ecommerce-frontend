import Image from "next/image";
import { ProductType } from "@/types/Products";

function ProductCardItem({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col bg-card rounded-lg shadow border border-border transition-colors duration-200">
      <div className="flex justify-center items-center bg-(--muted) rounded-t-lg p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={180}
          height={180}
          className="rounded-lg object-contain bg-transparent h-[160px] w-full mx-auto"
        />
      </div>
      <div className="flex flex-col flex-1 gap-4 px-4 pt-2 pb-4">
        <h2
          className="text-base font-semibold text-(--foreground) truncate"
          title={product.title}
        >
          {product.title}
        </h2>
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="bg-(--primary)/10 text-(--primary) text-sm font-medium px-3 py-1 rounded">{`$${product.price}`}</span>
          <span className="bg-(--muted-foreground)/10 text-(--muted-foreground) text-xs font-mono px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <button
          className="mt-2 bg-(--primary) hover:bg-(--primary)/90 text-(--primary-foreground) rounded px-4 py-2 font-semibold shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-(--primary) cursor-pointer"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCardItem;
