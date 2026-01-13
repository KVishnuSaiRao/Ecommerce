import React from "react";
import { Product } from "@/types/product"; 

interface Props {
  cartItems: Product[]; 
  removeFromCarts: (id: string) => void;
}

export default function ReviewItemsList({ cartItems, removeFromCarts }: Props) {
  return (
    <div className="lg:col-span-3 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Review Items ({cartItems.length})</h1>
      {cartItems.map((item) => {
        const discount = item.discount || 0;
        const originalPrice =
          discount > 0 ? item.price / (1 - discount / 100) : item.price;

        return (
          <div
            key={item.id}
            className="flex gap-4 border p-4 rounded-lg bg-white shadow-sm items-center"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.brand}</p>
            </div>
            <div className="text-right">
              {discount > 0 && (
                <div className="text-xs text-gray-400 line-through">
                  ₹{Math.round(originalPrice).toLocaleString()}
                </div>
              )}
              <div className="font-bold">₹{item.price.toLocaleString()}</div>
              {discount > 0 && (
                <div className="text-[10px] text-green-600 font-bold bg-green-50 inline-block px-1 rounded">
                  {discount}% OFF
                </div>
              )}
              <button
                onClick={() => removeFromCarts(item.id)}
                className="block w-full text-right text-xs text-red-500 hover:underline mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}