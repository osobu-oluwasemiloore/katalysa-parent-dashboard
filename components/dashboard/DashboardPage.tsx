"use client";

import { useEffect } from "react";
import { useDashboardStore } from "../../store/dashboardStore";

import DashboardHeader from "./DashboardHeader";
import ChildSelector from "./ChildSelector";
import StudentProfile from "./StudentProfile";
import FeeSummary from "./FeeSummary";
import ResultsTable from "./ResultsTable";
import DashboardSkeleton from "./DashboardSkeleton";

import ErrorState from "../../ui/ErrorState";
import EmptyState from "../../ui/EmptyState";

export default function DashboardPage() {
  const data = useDashboardStore((state) => state.data);
  const loading = useDashboardStore((state) => state.loading);
  const error = useDashboardStore((state) => state.error);
  const fetchDashboard = useDashboardStore(
    (state) => state.fetchDashboard
  );

  const selectedChildId = useDashboardStore(
    (state) => state.selectedChildId
  );

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchDashboard();
    }
  }, [data, loading, error, fetchDashboard]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={fetchDashboard}
      />
    );
  }

  if (!data || data.parent.children.length === 0) {
    return (
      <EmptyState
        title="No children found"
        description="No children are currently linked to this parent account."
      />
    );
  }

  const selectedChild =
    data.parent.children.find(
      (child) => child.id === selectedChildId
    ) ?? data.parent.children[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <DashboardHeader parentName={data.parent.name} />

      <section className="mt-6">
        <ChildSelector />
      </section>

      <section className="mt-4">
        <StudentProfile />

        <div className="mt-4">
          <FeeSummary />
        </div>
      </section>

      <section className="mt-6">
        <h3 className="mb-3 text-lg font-semibold">
          Academic Results
        </h3>

        <ResultsTable />
      </section>
    </div>
  );
}