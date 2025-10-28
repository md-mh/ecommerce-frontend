// The Product Type interface that defines the product type.
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type SortType =
  | "default"
  | "rating"
  | "price-low-to-high"
  | "price-high-to-low";
