"use client";

import React from "react";
import { useSelectedChild } from "../../store/dashboardStore";

function gradeFromPercent(p: number) {
  if (p >= 75) return "A";
  if (p >= 65) return "B";
  if (p >= 50) return "C";
  if (p >= 40) return "D";
  return "F";
}

export default function ResultsTable() {
  const child = useSelectedChild();
  if (!child) return null;

  return (
    <div className="bg-[var(--card-bg)] rounded-lg border shadow-sm overflow-hidden">
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-[720px] w-full table-auto text-left">
          <caption className="sr-only">Academic results</caption>
          <thead className="bg-gray-50">
            <tr className="text-sm text-gray-600">
              <th scope="col" className="px-4 py-3">Subject</th>
              <th scope="col" className="px-4 py-3">CA1</th>
              <th scope="col" className="px-4 py-3">CA2</th>
              <th scope="col" className="px-4 py-3">Exam</th>
              <th scope="col" className="px-4 py-3">Total</th>
              <th scope="col" className="px-4 py-3">Percentage</th>
              <th scope="col" className="px-4 py-3">Grade</th>
              <th scope="col" className="px-4 py-3">Remark</th>
            </tr>
          </thead>
          <tbody>
            {child.results.map((r, idx) => {
              const total = r.ca1 + r.ca2 + r.exam;
              const percent = Math.round(total);
              const grade = gradeFromPercent(percent);
              const remark = grade === "A" || grade === "B" ? "Good" : grade === "C" ? "Average" : grade === "D" ? "Below Average" : "Fail";
              return (
                <tr key={r.subject} className={idx % 2 === 0 ? "" : "bg-white"}>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{r.subject}</td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{r.ca1}</td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{r.ca2}</td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{r.exam}</td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{total}</td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{percent}%</td>
                  <td className="px-4 py-3 border-t">
                    <span className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-white bg-blue-600">{grade}</span>
                  </td>
                  <td className="px-4 py-3 border-t text-sm text-gray-700">{remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="bg-[var(--card-bg)] p-3 rounded-md">
          <p className="text-sm text-gray-500">Overall Average</p>
          <p className="text-xl font-semibold">{child.overallAverage}%</p>
        </div>
        <div className="bg-[var(--card-bg)] p-3 rounded-md">
          <p className="text-sm text-gray-500">Class Position</p>
          <p className="text-xl font-semibold">{child.classPosition}</p>
        </div>
      </div>
    </div>
  );
}
