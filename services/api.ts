import { DashboardData } from "../types/dashboard";

// Simulate network latency and a REST-like service
export async function fetchDashboardData(): Promise<DashboardData> {
  await new Promise((res) => setTimeout(res, 600));

  const data: DashboardData = {
    parent: {
      id: "parent_1",
      name: "John Doe",
      children: [
        {
          id: "child_1",
          name: "Michael Doe",
          studentClass: "Primary 5",
          status: "Active",
          fees: {
            total: 55000,
            paid: 25000,
            outstanding: 30000,
            status: "Partial",
          },
          results: [
            { subject: "Mathematics", ca1: 18, ca2: 17, exam: 45 },
            { subject: "English", ca1: 15, ca2: 16, exam: 40 },
            { subject: "Science", ca1: 14, ca2: 15, exam: 42 },
            { subject: "Social Studies", ca1: 13, ca2: 14, exam: 38 },
            { subject: "Computer", ca1: 16, ca2: 15, exam: 44 },
          ],
          overallAverage: 78,
          classPosition: "5th",
        },
        {
          id: "child_2",
          name: "Sarah Doe",
          studentClass: "JSS 2",
          status: "Active",
          fees: {
            total: 45000,
            paid: 45000,
            outstanding: 0,
            status: "Paid",
          },
          results: [
            { subject: "Mathematics", ca1: 17, ca2: 18, exam: 46 },
            { subject: "English", ca1: 16, ca2: 17, exam: 44 },
            { subject: "Science", ca1: 15, ca2: 14, exam: 40 },
            { subject: "Home Economics", ca1: 14, ca2: 13, exam: 36 },
            { subject: "Art", ca1: 18, ca2: 17, exam: 48 },
          ],
          overallAverage: 82,
          classPosition: "3rd",
        },
      ],
    },
  };

  return data;
}
