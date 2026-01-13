"use client"; 

import { SortOption } from "@/types/product";
import React from "react";


type Props = {
  title: any;
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  rating: string;
  setRating: (v: string) => void;
  sort: SortOption;
  setSort: (v: SortOption) => void;
  view: "grid" | "list";
  setView: (v: "grid" | "list") => void;
  categories: string[];
};

export default function ProductsNavbar({
  title,
  search,
  setSearch,
  category,
  setCategory,
  rating,
  setRating,
  sort,
  setSort,
  view,
  setView,
  categories,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 my-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800 mr-2">{title}</h2>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Ratings</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="discount-desc">Discount: High to Low</option>
        </select>

        <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 text-sm font-medium ${
                view === "grid" ? "bg-black text-white" : "bg-white hover:bg-gray-100"
            }`}
            >
            Grid
            </button>
            <button
            onClick={() => setView("list")}
            className={`px-4 py-2 text-sm font-medium ${
                view === "list" ? "bg-black text-white" : "bg-white hover:bg-gray-100"
            }`}
            >
            List
            </button>
        </div>
      </div>
    </div>
  );
}