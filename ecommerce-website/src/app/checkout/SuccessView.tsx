import React from "react";

export default function SuccessView({ msg }: { msg: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-4 text-green-700">Order Placed!</h2>
      <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-sm border border-green-200">
        {msg}
      </div>
      <p className="text-gray-500 mt-6">Redirecting you to home page...</p>
    </div>
  );
}