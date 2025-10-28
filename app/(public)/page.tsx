import { Metadata } from "next";
import { getServerData } from "@/utils/get";
import { ProductType } from "@/types/Products";
import ProductsView from "@/components/home/ProductsView";

// SEO Metadata
export const metadata: Metadata = {
  title: "Home - Saimon Store",
  description: "Home page of Saimon Store",
};

// The Home page that displays the products.
export default async function Home() {
  // Get the products from the server.
  const products: ProductType[] = await getServerData("/products");
  // Display the products.
  return <ProductsView products={products} />;
}
