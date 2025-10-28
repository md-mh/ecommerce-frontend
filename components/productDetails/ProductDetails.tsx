import { ProductType } from "@/types/Products";
import Image from "next/image";
import AddCart from "../shared/AddCart";
import Rating from "../shared/Rating";
import Category from "../shared/Category";

// The Product Details component that displays the product details in single page.
function ProductDetails({ product }: { product: ProductType }) {
  return (
    <>
      <div className="container max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-10 shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-(--muted) p-6">
            <Image
              src={product?.image}
              alt={product?.title}
              width={400}
              height={400}
              className="object-contain w-full h-96"
              priority
            />
          </div>
          {/* Product Info */}
          <div className="md:w-1/2 w-full flex flex-col justify-between p-6">
            <div>
              <h1 className="text-3xl font-bold text-(--foreground)">
                {product?.title}
              </h1>
              <div className="flex flex-row items-center justify-between gap-2 my-5">
                <Category category={product.category} />
                <Rating
                  rate={product.rating?.rate}
                  count={product.rating?.count}
                />
              </div>
              <p className="text-(--foreground) mb-6">{product?.description}</p>
            </div>
            <div>
              <div className="text-2xl font-semibold text-(--primary) mb-4">
                ${product?.price}
              </div>

              <AddCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
