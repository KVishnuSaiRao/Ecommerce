import React from "react";
import { FiCreditCard } from "react-icons/fi";

interface Props {
  hasChecked: boolean;
  checkLoading: boolean;
  checkForCoupon: () => void;
  discountCode: string | null;
  statusMsg: string | undefined;
}

export default function CouponWidget({
  hasChecked,
  checkLoading,
  checkForCoupon,
  discountCode,
  statusMsg, 
}: Props) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">
          <FiCreditCard />
        </span>
        <div>
          <p className="text-sm font-bold text-gray-800">Every 3rd Order Wins!</p>
          <p className="text-xs text-gray-500">Check if you are the lucky winner.</p>
        </div>
      </div>

      {!hasChecked ? (
        <button
          onClick={checkForCoupon}
          disabled={checkLoading}
          className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition flex justify-center shadow-sm"
        >
          {checkLoading ? "Checking..." : "Check Eligibility"}
        </button>
      ) : (
        <div className="animate-in fade-in zoom-in duration-300">
          {discountCode ? (
            <>
              <p className="text-xs font-bold text-green-600 mb-1 ml-1">
                Coupon Generated:
              </p>
              <input
                type="text"
                value={discountCode}
                readOnly
                className="w-full border-2 border-dashed border-green-500 bg-green-50 text-green-800 font-mono text-lg font-bold text-center py-2 rounded-lg focus:outline-none cursor-not-allowed"
              />
              <p className="text-xs text-green-600 mt-2 text-center font-medium">
                10% Discount Applied to Total!
              </p>
            </>
          ) : (
            <div className="bg-gray-100 border border-gray-200 text-gray-500 text-center py-3 rounded-lg text-sm font-medium">
               {statusMsg || "Not eligible this time "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}