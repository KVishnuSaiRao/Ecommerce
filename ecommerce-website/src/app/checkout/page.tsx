"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext"; 
import { useRouter } from "next/navigation";
import SuccessView from "./SuccessView";
import EmptyCartView from "./EmptyCartView";
import ReviewItemsList from "./ReviewItemsList";
import PricingSummary from "./PricingSummary";
import CouponWidget from "./CouponWidget";


export default function CheckoutPage() {
  const { cartItems, removeFromCarts, clearCart } = useCart();
  const router = useRouter();
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const { totalMRP, totalProductDiscount, subTotal } = cartItems.reduce(
    (acc, item) => {
      const discount = item.discount || 0;
      const originalPrice = discount > 0 
        ? item.price / (1 - discount / 100) 
        : item.price;
      
      acc.totalMRP += originalPrice;
      acc.subTotal += item.price;
      acc.totalProductDiscount += (originalPrice - item.price);
      return acc;
    },
    { totalMRP: 0, totalProductDiscount: 0, subTotal: 0 }
  );

  const bonusDiscountAmount = discountCode ? subTotal * 0.10 : 0;
  const finalTotal = subTotal - bonusDiscountAmount;

  const handleClearCart = () => {
    if (typeof clearCart === 'function') {
        clearCart();
    } else {
        cartItems.forEach((item) => removeFromCarts(item.id));
    }
  };

  const checkForCoupon = async () => {
    if (hasChecked) return;
    setCheckLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:4000/admin/generate-code", {
        method: "POST",
      });
      const data = await res.json();
      setHasChecked(true); 

      if (data.code) {
        setDiscountCode(data.code);
        setStatus({ 
            type: "success", 
            msg: `This is your #3rd Order. This is the 3rd Order! 10% Discount applied.`
        });
      } else {
        setStatus({ 
            type: "error", 
            msg: `No discount available. Only ${data.orders_until_next_discount-1} more order(s) until the next win!` 
        });
      }
    } catch (e) {
      console.error(e);
      setStatus({ type: "error", msg: "Failed to connect to server." });
    } finally {
      setCheckLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;
    setLoading(true);

    const payload = {
      userId: "guest-user-123",
      discountCode: discountCode,
      items: cartItems.map((item) => ({
        itemId: item.id,
        price: item.price,
      })),
    };

    try {
       for (const item of cartItems) {
         await fetch("http://localhost:4000/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: payload.userId, itemId: item.id, price: item.price })
         });
       }

       const res = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: payload.userId, discountCode: payload.discountCode }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Checkout failed");

      setStatus({ 
        type: "success", 
        msg: `Order #${data.order.orderId} placed successfully!` 
      });
      
      handleClearCart();
      setTimeout(() => router.push("/"), 4000);

    } catch (err: any) {
      setStatus({ type: "error", msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (status?.type === 'success' && status.msg.includes("Order #")) {
     return <SuccessView msg={status.msg} />;
  }

  if (cartItems.length === 0) {
    return <EmptyCartView />;
  }

  return (
    <div className="max-w-10xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      
      <ReviewItemsList 
        cartItems={cartItems} 
        removeFromCarts={removeFromCarts} 
      />

      <div className="lg:col-span-2 sticky top-24 h-fit">
        <div className="bg-white p-6 rounded-xl border shadow-sm max-h-[82vh] overflow-y-auto custom-scrollbar">
          <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>
          <PricingSummary 
             totalMRP={totalMRP}
             totalProductDiscount={totalProductDiscount}
             subTotal={subTotal}
             bonusDiscountAmount={bonusDiscountAmount}
             finalTotal={finalTotal}
          />

          <CouponWidget 
             hasChecked={hasChecked}
             checkLoading={checkLoading}
             checkForCoupon={checkForCoupon}
             discountCode={discountCode}
             statusMsg={status?.type === 'error' ? status.msg : undefined}
          />

          {status && !status.msg.includes("Order #") && status.type === 'success' && (
             <div className="p-3 rounded-md mb-4 text-sm font-medium bg-green-100 text-green-800">
                {status.msg}
             </div>
          )}
          {status && status.type === 'error' && (
             <div className="p-3 rounded-md mb-4 text-sm font-medium bg-red-50 text-red-600">
                {status.msg}
             </div>
          )}

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-white transition shadow-lg ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
            }`}
          >
            {loading ? "Processing Order..." : `Pay ₹${Math.round(finalTotal).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}