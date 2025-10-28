import { getServerData } from "@/utils/get";
import { ProductType } from "@/types/Products";
import ProductDetailsView from "@/components/productDetails/ProductDetails";

async function getData(slug: string) {
  const data = await getServerData(`/products/${slug}`);
  return data;
}

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
