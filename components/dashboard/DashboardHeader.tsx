"use client";

import React from "react";
import { User, Home } from "lucide-react";

interface Props {
  parentName: string;
}

export default function DashboardHeader({ parentName }: Props) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-md bg-white p-2 shadow-sm border">
          <Home size={20} className="text-[var(--primary)]" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Parent Dashboard</p>
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {parentName}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
