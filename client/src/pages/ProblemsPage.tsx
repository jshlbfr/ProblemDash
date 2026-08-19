import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import AddProblemDialog from "@/components/problems/AddProblemDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Problem } from "@/types/problem";
import type { CreateProblemInput } from "@/schemas/problemSchema";
import type { Dispatch, SetStateAction } from "react";

type ProblemsPageProps = {
  problems: Problem[];
  setProblems: Dispatch<SetStateAction<Problem[]>>;
};

function ProblemsPage({ problems, setProblems }: ProblemsPageProps) {
  function handleAddProblem(problemInput: CreateProblemInput) {
    const newProblem: Problem = {
      id: Date.now(),
      title: problemInput.title,
      description: problemInput.description,
      status: "open",
      priority: problemInput.priority,
      createdAt: new Date().toLocaleDateString(),
    };

    setProblems((currentProblems) => [...currentProblems, newProblem]);
  }

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Problems</h1>

          <p className="mt-1 text-muted-foreground">
            View and manage your reported problems.
          </p>
        </div>
        <AddProblemDialog onAddProblem={handleAddProblem} />{" "}
      </div>

      <div className="mt-8 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {problems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell className="font-medium">
                  <Link
                    to={`/problems/${problem.id}`}
                    className="hover:underline"
                  >
                    {problem.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{problem.status}</Badge>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary">{problem.priority}</Badge>
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {problem.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default ProblemsPage;
