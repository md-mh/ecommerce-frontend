import { getServerData } from "@/utils/get";
import { ProductType } from "@/types/Products";
import ProductDetailsView from "@/components/productDetails/ProductDetails";

// Get the product data from the server.
async function getData(slug: string) {
  const data = await getServerData(`/products/${slug}`);
  return data;
}

// Generate the SEO metadata for the product details page.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const fetchdata = await getData(slug);
  return {
    title: fetchdata?.title,
    description: fetchdata?.description,
  };
}

// The Product Details page that displays the product details.
export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const product = await getData(slug);
  return (
    <>
      <ProductDetailsView product={product as ProductType} />
    </>
  );
}
