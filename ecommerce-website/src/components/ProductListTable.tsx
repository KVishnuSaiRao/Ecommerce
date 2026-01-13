"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { FiStar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const columns = [
  { key: "product", label: "Product", width: "30%" },
  { key: "price", label: "Price", width: "15%" },
  { key: "rating", label: "Rating", width: "10%" },
  { key: "category", label: "Category", width: "20%" },
  { key: "description", label: "Description", width: "20%" },
  { key: "cart", label: "", width: "5%" },
];

export default function ProductListTable({ products }: { products: Product[] }) {
  const router = useRouter(); 
  const { isInCarts, addToCarts, removeFromCarts } = useCart();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const start = page * rowsPerPage;
  const visibleRows = products.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(products.length / rowsPerPage);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <div className="max-h-150 overflow-y-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="sticky top-0 bg-gray-50 z-10 border-b shadow-sm">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  style={{ width: c.width }}
                  className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {visibleRows.map((product) => {
              const inCart = isInCarts(product.id);

              return (
                <tr
                  key={product.id}
                  onClick={() => router.push(`/product/${product.id}`)} // 👈 Navigation
                  className={`cursor-pointer transition hover:bg-blue-50 ${inCart ? "bg-yellow-50/50" : ""}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-16 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.brand}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.discount && (
                            <span className="text-xs text-green-600 font-medium">
                                -{product.discount}% Off
                            </span>
                        )}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                      <FiStar fill="#EAB308" /> {product.rating}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-600">
                    {product.category}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-500 truncate max-w-xs">
                    {product.description}
                  </td>

                  <td
                    className="px-4 py-3 text-right"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="p-2 hover:bg-gray-200 rounded-full transition">
                        <FiHeart 
                        fill={inCart ? "#EAB308" : "none"} 
                        onClick={() =>
                            inCart
                            ? removeFromCarts(product.id)
                            : addToCarts(product)
                        }
                        />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200">
        <span className="text-sm text-gray-700">
          Page <span className="font-medium">{page + 1}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </span>

        <div className="flex items-center gap-4">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(0);
            }}
            className="border-gray-300 rounded-md text-sm py-1 pl-2 pr-7 focus:ring-blue-500 focus:border-blue-500"
          >
            {[5, 10, 15, 25].map((n) => (
              <option key={n} value={n}>
                {n} / page
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <button
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>

            <button
                disabled={page + 1 >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}