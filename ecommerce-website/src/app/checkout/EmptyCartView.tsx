import React from "react";
import { useRouter } from "next/navigation";

export default function EmptyCartView() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="text-6xl mb-4">🛒</div>
      <h2 className="text-2xl font-bold mb-2">Checkout is Empty</h2>
      <button
        onClick={() => router.push("/")}
        className="bg-black text-white px-6 py-2 rounded mt-4 hover:bg-gray-800 transition"
      >
        Go Shopping
      </button>
    </div>
  );
}