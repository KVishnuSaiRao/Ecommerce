export type Comment = {
  username: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  brand: string;
  reviews: number;
  stock: number;
  discount: number;
  colors: string[];
  info: {
    color: string;
    weight: string;
    guarantee: string;
    warranty: string;
    return: string;
  };
  comments: Comment[];
};

export type SortOption =
  | ""
  | "price-asc"
  | "price-desc"
  | "rating-asc"
  | "rating-desc"
  | "discount-asc"
  | "discount-desc";