import React from "react";

interface Props {
  totalMRP: number;
  totalProductDiscount: number;
  subTotal: number;
  bonusDiscountAmount: number;
  finalTotal: number;
}

export default function PricingSummary({
  totalMRP,
  totalProductDiscount,
  subTotal,
  bonusDiscountAmount,
  finalTotal,
}: Props) {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex justify-between text-gray-500">
        <span>Total MRP</span>
        <span>₹{Math.round(totalMRP).toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-green-600">
        <span>Discount on MRP</span>
        <span>- ₹{Math.round(totalProductDiscount).toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-gray-900 font-medium pt-2 border-t border-dashed">
        <span>Subtotal</span>
        <span>₹{subTotal.toLocaleString()}</span>
      </div>

      {bonusDiscountAmount > 0 && (
        <div className="flex justify-between text-blue-600 font-medium animate-pulse">
          <span>Bonus Coupon (10%)</span>
          <span>- ₹{bonusDiscountAmount.toLocaleString()}</span>
        </div>
      )}

      <div className="border-t pt-4 mt-2 flex justify-between text-2xl font-bold text-gray-900">
        <span>Total</span>
        <span>₹{Math.round(finalTotal).toLocaleString()}</span>
      </div>
    </div>
  );
}