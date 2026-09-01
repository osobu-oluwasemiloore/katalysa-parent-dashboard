"use client";

import React from "react";
import { Users } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

export default function EmptyState({ title = "No data", description = "There is nothing to show right now." }: Props) {
  return (
    <div className="p-6 bg-[var(--card-bg)] rounded-lg border border-dashed border-gray-200 text-center max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-3">
        <div className="p-3 rounded-full bg-blue-50 text-blue-600">
          <Users size={20} />
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}
