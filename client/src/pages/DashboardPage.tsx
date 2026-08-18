import { CheckCircle2, CircleAlert, Clock3, ListTodo } from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";

function DashboardPage() {
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
        <StatCard title="Total Problems" value={24} icon={ListTodo} />

        <StatCard title="Open" value={12} icon={CircleAlert} />

        <StatCard title="In Progress" value={7} icon={Clock3} />

        <StatCard title="Resolved" value={5} icon={CheckCircle2} />
      </div>
    </main>
  );
}

export default DashboardPage;
