"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Product, SortOption } from "@/types/product";
import { filterAndSortProducts } from "@/utils/products"; 
import { FiShoppingBag } from "react-icons/fi";
import ProductsNavbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductListTable from "./ProductListTable";

const PAGE_SIZE = 8;
const LOADING_DELAY = 500;

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [apiLoading, setApiLoading] = useState(true);

  const [view, setView] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [sort, setSort] = useState<SortOption>("");

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setApiLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (view === "grid") setVisibleCount(PAGE_SIZE);
  }, [view, search, category, rating, sort]);

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts({
      products,
      search,
      category,
      rating,
      sort,
    });
  }, [products, search, category, rating, sort]);

  useEffect(() => {
    if (view !== "grid") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          visibleCount < filteredProducts.length &&
          !loading
        ) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + PAGE_SIZE, filteredProducts.length)
            );
            setLoading(false);
          }, LOADING_DELAY);
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [view, visibleCount, filteredProducts.length, loading]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const SkeletonCard = () => (
    <div className="w-full h-64 bg-gray-200 animate-pulse rounded-xl" />
  );

  if (apiLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-16 pt-6">
      <ProductsNavbar
        title={
          <div className="flex items-center gap-2">
            <FiShoppingBag size={24} />
            <span>Products</span>
          </div>
        }
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        rating={rating}
        setRating={setRating}
        sort={sort}
        setSort={setSort}
        view={view}
        setView={setView}
        categories={categories}
      />

      {view === "grid" ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, visibleCount).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            
            {loading &&
              Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
          </div>
          
          <div ref={loaderRef} className="h-10 w-full" />
        </>
      ) : (
        <ProductListTable products={filteredProducts} />
      )}
    </div>
  );
}