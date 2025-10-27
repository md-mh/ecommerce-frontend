import { Metadata } from "next";
import { getServerData } from "@/utils/get";
import { ProductType } from "@/types/Products";
import ProductsView from "@/components/home/ProductsView";

export const metadata: Metadata = {
  title: "Home - Saimon Store",
  description: "Home page of Saimon Store",
};

export default async function Home() {
  const products: ProductType[] = await getServerData("/products");
  return <ProductsView products={products} />;
}
