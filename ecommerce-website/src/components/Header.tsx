"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; 
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/cart"); 
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 shadow bg-white">
      <h1 
        className="text-xl font-bold cursor-pointer hover:text-blue-600 transition"
        onClick={() => router.push("/")}
      >
        Ecommerce Shopping
      </h1>

      <button 
        className="relative flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
        onClick={handleCartClick}
      >
        <span className="flex gap-2"><FiShoppingCart size={15} className="mt-1"/> Cart</span>
        {cartItems.length > 0 && (
          <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs font-bold">
            {cartItems.length}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;