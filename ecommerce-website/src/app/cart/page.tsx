"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Product, SortOption } from "@/types/product";
import { useCart } from "@/context/CartContext"; 
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import ProductListTable from "@/components/ProductListTable";
import ProductsNavbar from "@/components/Navbar"; 
import { filterAndSortProducts } from "@/utils/products";

export default function Cart() {
  const router = useRouter(); 
  const [view, setView] = useState<"grid" | "list">("grid");
  
  const { cartItems } = useCart(); 

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [sort, setSort] = useState<SortOption>("");

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const categories = useMemo(
    () => Array.from(new Set(cartItems.map((p) => p.category))),
    [cartItems]
  );

  const filteredCarts = useMemo(() => {
    return filterAndSortProducts({
      products: cartItems,
      search,
      category,
      rating,
      sort,
    });
  }, [cartItems, search, category, rating, sort]);
  return (
    <div className="px-6 pb-16 pt-6">
      <ProductsNavbar
        title={
          <div className="flex items-center gap-2">
            <FiShoppingCart size={24} />
            <span>Cart</span>
          </div>
        }
        view={view}
        setView={setView}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        rating={rating}
        setRating={setRating}
        sort={sort}
        setSort={setSort}
      />

      {cartItems.length > 0 && (
        <div className="flex justify-end my-6">
          <button
            onClick={() => router.push("/checkout")}
            className="bg-black text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-gray-800 transition transform active:scale-95 flex items-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <span className="bg-white text-black text-xs px-2 py-1 rounded">
              ₹{totalPrice.toLocaleString()}
            </span>
          </button>
        </div>
      )}

      {filteredCarts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-lg mt-6 border border-dashed border-gray-300">
           <p className="text-gray-500 text-lg">Your carts list is empty.</p>
           <p className="text-sm text-gray-400">Go back and heart some products!</p>
           <button 
             onClick={() => router.push("/")}
             className="mt-4 text-blue-600 underline hover:text-blue-800"
           >
             Browse Products
           </button>
        </div>
      )}

      {view === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCarts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {view === "list" && (
        <ProductListTable products={filteredCarts} />
      )}
    </div>
  );
}