import { Button } from "@/components/ui/button";

function DashboardPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">ProblemDash</h1>

      <p className="mt-2 text-muted-foreground">
        A dashboard for tracking and managing problems.
      </p>

      <Button className="mt-6">Add Problem</Button>
    </main>
  );
}

export default DashboardPage;
