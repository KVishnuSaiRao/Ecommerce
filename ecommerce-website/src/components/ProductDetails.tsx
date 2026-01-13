"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product"; 
import { FiStar,FiArrowLeft,FiHeart } from "react-icons/fi";

export default function ProductDetails({ productId }: { productId: string }) {
  const router = useRouter();
  const { addToCarts, removeFromCarts, isInCarts } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/products/${productId}`);
        
        if (!res.ok) {
          throw new Error("Product not found");
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
        fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-500 mb-4">
          {error || "Product not found"}
        </h2>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <FiArrowLeft/> Go Back
        </button>
      </div>
    );
  }

  const inCart = isInCarts(product.id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm font-medium text-gray-500 hover:text-black hover:underline transition flex items-center gap-1"
      >
        <FiArrowLeft/> Back to products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-112.5 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{product.name}</h1>
          <p className="text-md text-gray-500 mb-6">{product.brand}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            
            {product.discount && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  ₹{Math.round(product.price / (1 - product.discount / 100)).toLocaleString()}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
                  -{product.discount}% OFF
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-6 mb-8 text-sm font-medium">
            <div className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
              <FiStar fill="#EAB308" />
              <span>{product.rating}</span>
            </div>
            <span className="text-gray-600 underline cursor-pointer">{product.reviews} reviews</span>
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {product.colors && (
            <div className="mb-8">
                <h4 className="font-semibold text-sm text-gray-900 mb-3">Available Colors</h4>
                <div className="flex gap-3">
                {product.colors.map((color) => (
                    <span
                    key={color}
                    className="px-4 py-2 border border-gray-200 rounded-full text-sm hover:border-black cursor-pointer transition"
                    >
                    {color}
                    </span>
                ))}
                </div>
            </div>
          )}

            <button
            onClick={() => (inCart ? removeFromCarts(product.id) : addToCarts(product))}
            className={`
                flex items-center justify-center gap-2 
                w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white 
                transition-all transform active:scale-95 shadow-lg
                ${inCart 
                ? "bg-red-500 hover:bg-red-600 shadow-red-200" 
                : "bg-black hover:bg-gray-800 shadow-gray-200"
                }
            `}
            >
            <FiHeart 
                className="w-5 h-5" 
            />
            <span>{inCart ? "Remove from cart" : "Add to cart"}</span>
            </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t pt-12">
        
        {product.info && (
            <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Product Specifications</h3>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between border-b pb-2 border-gray-200">
                    <span className="text-gray-500">Color</span>
                    <span className="font-medium">{product.info.color}</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-gray-200">
                    <span className="text-gray-500">Weight</span>
                    <span className="font-medium">{product.info.weight}</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-gray-200">
                    <span className="text-gray-500">Warranty</span>
                    <span className="font-medium">{product.info.warranty}</span>
                </div>
                <div className="flex justify-between pt-2">
                    <span className="text-gray-500">Return Policy</span>
                    <span className="font-medium">{product.info.return}</span>
                </div>
            </div>
            </div>
        )}

        {product.comments && (
            <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h3>
            <div className="space-y-4 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
                {product.comments.map((c, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-5 hover:shadow-sm transition bg-white">
                    <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                            {c.username.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900">{c.username}</span>
                    </div>
                    <span className="text-yellow-500 text-sm"><FiStar fill="#EAB308" /> {c.rating}.0</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.comment}</p>
                </div>
                ))}
            </div>
            </div>
        )}

      </div>
    </div>
  );
}