"use client";

import React from "react";

interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const bg = status === "Active" ? "bg-green-100 text-green-800" : status === "Paid" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${bg}`}>{status}</span>
  );
}
