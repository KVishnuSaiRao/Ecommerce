import { Product } from "../types/product";

const CART_KEY = "cart";

export const getCartItems = (): Product[] => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const isInCarts = (id: string): boolean => {
  return getCartItems().some((item) => item.id === id);
};

export const addToCarts = (product: Product) => {
  const cart = getCartItems();
  if (!cart.find((p) => p.id === product.id)) {
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const removeFromCarts = (id: string) => {
  const updated = getCartItems().filter((item) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(updated));
};

export const getCartCount = (): number => getCartItems().length;
