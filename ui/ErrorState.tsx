"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message = "Something went wrong.", onRetry }: Props) {
  return (
    <div className="p-6 bg-[var(--card-bg)] rounded-lg border border-red-100 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-red-50 text-red-600">
          <AlertTriangle size={20} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-700">Error</h3>
          <p className="text-sm text-red-600 mt-2">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-4 inline-flex items-center gap-2 rounded bg-red-600 text-white px-3 py-1.5 text-sm"
            >
              <RefreshCw size={14} /> Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
