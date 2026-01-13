"use client"; 

import { Product } from "@/types/product";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: Product[];
  addToCarts: (product: Product) => void;
  removeFromCarts: (id: string) => void;
  isInCarts: (id: string) => boolean;
  clearCart: () => void;
};

const CartsContext = createContext<CartContextType | null>(null);

export const CartsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Track if localStorage has been read

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load carts", e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      } catch (e) {
      }
    }
  }, [cartItems, isLoaded]);

  const addToCarts = (product: Product) => {
    setCartItems((prev) =>
      prev.find((p) => p.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCarts = (id: string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const isInCarts = (id: string) =>
    cartItems.some((item) => item.id === id);

  return (
    <CartsContext.Provider
      value={{ cartItems, addToCarts, removeFromCarts, isInCarts, clearCart }}
    >
      {children}
    </CartsContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartsContext);
  if (!context) throw new Error("useCart must be used inside CartsProvider");
  return context;
};