import Image from "next/image";
import { ProductType } from "@/types/Products";
import AddCart from "../shared/AddCart";
import Link from "next/link";

function ProductListItem({ product }: { product: ProductType }) {
  return (
    <div className="flex items-center bg-(--card) rounded-lg shadow border border-(--border) p-4 mb-4 max-w-3xl mx-auto w-full transition-colors duration-200">
      <Link href={`/product-details/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="rounded-lg object-contain p-3 max-w-[100px] max-h-[100px] cursor-pointer"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 ml-4">
        <Link href={`/product-details/${product.id}`}>
          <h2 className="text-lg md:text-xl font-semibold text-(--foreground)">
            {product.title}
          </h2>
        </Link>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="bg-(--primary)/10 px-3 py-1 rounded text-(--primary) font-medium text-sm">
            ${product.price}
          </span>
          <span className="bg-(--muted-foreground)/10 text-(--muted-foreground) text-xs font-mono px-2 py-0.5 rounded">
            {product?.category}
          </span>
        </div>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <AddCart product={product} />
      </div>
    </div>
  );
}
export default ProductListItem;
