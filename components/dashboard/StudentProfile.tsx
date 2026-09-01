"use client";

import React from "react";
import StatusBadge from "../../ui/StatusBadge";
import { useSelectedChild } from "../../store/dashboardStore";
import { User } from "lucide-react";

export default function StudentProfile() {
  const child = useSelectedChild();
  if (!child) return null;

  return (
    <div className="bg-[var(--card-bg)] rounded-lg p-4 border shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <User size={20} />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">{child.name}</h2>
          <p className="text-sm text-gray-500">{child.studentClass}</p>
        </div>
        <div className="flex-shrink-0">
          <StatusBadge status={child.status} />
        </div>
      </div>
    </div>
  );
}
