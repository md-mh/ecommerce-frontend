import Image from "next/image";
import { ProductType } from "@/types/Products";
import AddCart from "../shared/AddCart";
import Link from "next/link";
import Rating from "../shared/Rating";
import Category from "../shared/Category";

function ProductCardItem({ product }: { product: ProductType }) {
  return (
    <div className="flex flex-col bg-card rounded-lg shadow border border-border transition-colors duration-200">
      <div className="flex justify-center items-center bg-(--muted) rounded-t-lg p-4">
        <Link href={`/product-details/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={180}
            height={180}
            className="rounded-lg object-contain bg-transparent h-[160px] w-full mx-auto cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-1 gap-4 px-4 pt-2 pb-4">
        <Link href={`/product-details/${product.id}`}>
          <h2
            className="text-base font-semibold text-(--foreground) truncate"
            title={product.title}
          >
            {product.title}
          </h2>
        </Link>
        <div className="flex flex-row items-center justify-between gap-2">
          <Category category={product.category} />
          <Rating rate={product.rating?.rate} count={product.rating?.count} />
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="bg-(--primary)/10 text-(--primary) text-sm font-medium px-3 py-1 rounded">{`$${product.price}`}</span>
          <AddCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCardItem;
