"use client";

import { useDashboardStore } from "../../store/dashboardStore";
import StatusBadge from "../../ui/StatusBadge";
import { User } from "lucide-react";

export default function ChildSelector() {
  const data = useDashboardStore((state) => state.data);
  const selectedChildId = useDashboardStore(
    (state) => state.selectedChildId
  );
  const selectChild = useDashboardStore(
    (state) => state.selectChild
  );

  if (!data || data.parent.children.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Your Children</h2>

      <div className="-mx-4 px-4 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex gap-3 w-max">
          {data.parent.children.map((child) => {
            const isSelected = child.id === selectedChildId;

            return (
              <button
                key={child.id}
                type="button"
                onClick={() => selectChild(child.id)}
                aria-pressed={isSelected}
                aria-label={`Select ${child.name}`}
                className={`min-w-[180px] max-w-xs flex-shrink-0 rounded-xl px-4 py-3 text-left transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  isSelected
                    ? "bg-[var(--card-bg)] border border-[var(--primary)] shadow"
                    : "border border-gray-200 bg-white hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                      <User size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{child.name}</div>
                      <div className="text-xs text-gray-500">{child.studentClass}</div>
                    </div>
                  </div>

                  <div>
                    <StatusBadge status={child.status} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}