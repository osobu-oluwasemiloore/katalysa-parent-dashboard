export type FeeStatus = "Paid" | "Partial" | "Unpaid";

export interface FeeSummary {
  total: number;
  paid: number;
  outstanding: number;
  status: FeeStatus;
}

export interface SubjectResult {
  subject: string;
  ca1: number;
  ca2: number;
  exam: number;
}

export interface Child {
  id: string;
  name: string;
  studentClass: string;
  status: "Active" | "Inactive" | string;
  fees: FeeSummary;
  results: SubjectResult[];
  overallAverage: number;
  classPosition: string;
}

export interface ParentData {
  id: string;
  name: string;
  children: Child[];
}

export interface DashboardData {
  parent: ParentData;
}
