"use client";

import React from "react";
import { useSelectedChild } from "../../store/dashboardStore";
import { formatCurrency } from "../../lib/formatCurrency";
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react";

export default function FeeSummary() {
  const child = useSelectedChild();
  if (!child) return null;

  const { fees } = child;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-[var(--card-bg)] p-4 rounded-lg border shadow-sm flex items-center gap-3">
        <div className="p-2 rounded-md bg-blue-50 text-blue-600">
          <CreditCard size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Fees</p>
          <p className="text-xl font-semibold mt-1">{formatCurrency(fees.total)}</p>
        </div>
      </div>

      <div className="bg-[var(--card-bg)] p-4 rounded-lg border shadow-sm flex items-center gap-3">
        <div className="p-2 rounded-md bg-green-50 text-green-600">
          <CheckCircle size={20} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Amount Paid</p>
          <p className="text-xl font-semibold mt-1">{formatCurrency(fees.paid)}</p>
        </div>
      </div>

      <div className="bg-[var(--card-bg)] p-4 rounded-lg border shadow-sm flex items-center gap-3">
        <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">
          <AlertCircle size={20} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Outstanding</p>
          <p className="text-xl font-semibold mt-1">{formatCurrency(fees.outstanding)}</p>
          <p className="mt-2"><span className="text-sm text-gray-600">Status:</span> <span className="font-medium">{fees.status}</span></p>
        </div>
      </div>
    </div>
  );
}
