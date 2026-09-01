"use client";

import React from "react";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="h-6 w-44 bg-gray-200 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>

      <div className="h-12 bg-gray-200 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="h-24 bg-gray-200 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
      </div>

      <div className="h-48 bg-gray-200 rounded"></div>
    </div>
  );
}
