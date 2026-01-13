// src/utils/productFilters.ts
import { Product, SortOption } from "@/types/product";

interface FilterParams {
  products: Product[];
  search: string;
  category: string;
  rating: string;
  sort: SortOption;
}

export const filterAndSortProducts = ({
  products,
  search,
  category,
  rating,
  sort,
}: FilterParams): Product[] => {
  let data = [...products];

  // 1. Search Filter
  if (search) {
    const q = search.toLowerCase();
    data = data.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // 2. Category Filter
  if (category) {
    data = data.filter((p) => p.category === category);
  }

  // 3. Rating Filter
  if (rating) {
    data = data.filter((p) => p.rating >= Number(rating));
  }

  // 4. Sorting Logic
  switch (sort) {
    case "price-asc":
      data.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      data.sort((a, b) => b.price - a.price);
      break;
    case "rating-asc":
      data.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      data.sort((a, b) => b.rating - a.rating);
      break;
    case "discount-asc":
      data.sort((a, b) => (a.discount ?? 0) - (b.discount ?? 0));
      break;
    case "discount-desc":
      data.sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
      break;
  }

  return data;
};

export const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

