"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { FiStar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter(); // 👈 Next.js router
  const { addToCarts, removeFromCarts, isInCarts } = useCart();
  const inCart = isInCarts(product.id);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation
    inCart ? removeFromCarts(product.id) : addToCarts(product);
  };

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)} // 👈 Updated navigation
      className={`cursor-pointer rounded-lg p-3 transition bg-white hover:shadow-lg border 
        ${
          inCart
            ? "border-yellow-400 ring-1 ring-yellow-400"
            : "border-gray-200"
        }`}
      role="button"
      aria-label={`View ${product.name}`}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <button
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition"
          onClick={handleHeartClick}
        >
          <FiHeart fill={inCart ? "#EAB308" : "none"} />
        </button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg leading-tight text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          </div>

          <div className="flex items-center text-sm text-yellow-500 font-medium">
            <FiStar fill="#EAB308" />
            <span className="ml-1">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ₹{Math.round(product.price).toLocaleString()}
            </span>

            {product.discount && product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ₹
                {Math.round(
                  product.price / (1 - product.discount / 100)
                ).toLocaleString()}
              </span>
            )}

            {product.discount && (
              <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                -{product.discount}%
              </span>
            )}
          </div>

          <div className="text-xs text-gray-400">{product.reviews} reviews</div>
        </div>
      </div>
    </div>
  );
}
