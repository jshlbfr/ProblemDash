import { CheckCircle2, CircleAlert, Clock3, ListTodo } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import type { Problem } from "@/types/problem";

type DashboardPageProps = {
  problems: Problem[];
};

function DashboardPage({ problems }: DashboardPageProps) {
  const totalProblems = problems.length;

  const openProblems = problems.filter(
    (problem) => problem.status === "open",
  ).length;

  const inProgressProblems = problems.filter(
    (problem) => problem.status === "in-progress",
  ).length;

  const resolvedProblems = problems.filter(
    (problem) => problem.status === "resolved",
  ).length;

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

          <p className="mt-1 text-muted-foreground">
            Overview of your problems and activity.
          </p>
        </div>

        <Button>Add Problem</Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Problems"
          value={totalProblems}
          icon={ListTodo}
        />

        <StatCard title="Open" value={openProblems} icon={CircleAlert} />

        <StatCard
          title="In Progress"
          value={inProgressProblems}
          icon={Clock3}
        />

        <StatCard
          title="Resolved"
          value={resolvedProblems}
          icon={CheckCircle2}
        />
      </div>
    </main>
  );
}

export default DashboardPage;
