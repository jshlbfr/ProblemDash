import EditProblemDialog from "@/components/problems/EditProblemDialog";
import { useNavigate, useParams } from "react-router-dom";
import type { Problem } from "@/types/problem";
import type { Dispatch, SetStateAction } from "react";
import type { CreateProblemInput } from "@/schemas/problemSchema";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ProblemDetailsPageProps = {
  problems: Problem[];
  setProblems: Dispatch<SetStateAction<Problem[]>>;
};

function ProblemDetailsPage({
  problems,
  setProblems,
}: ProblemDetailsPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const problem = problems.find((problem) => problem.id === Number(id));

  function handleEditProblem(problemInput: CreateProblemInput) {
    setProblems((currentProblems) =>
      currentProblems.map((currentProblem) =>
        currentProblem.id === Number(id)
          ? {
              ...currentProblem,
              title: problemInput.title,
              description: problemInput.description,
              priority: problemInput.priority,
            }
          : currentProblem,
      ),
    );
  }

  function handleDeleteProblem() {
    setProblems((currentProblems) =>
      currentProblems.filter(
        (currentProblem) => currentProblem.id !== Number(id),
      ),
    );

    navigate("/problems");
  }

  if (!problem) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold tracking-tight">Problem not found</h1>

        <p className="mt-2 text-muted-foreground">
          The problem you're looking for doesn't exist.
        </p>

        <Button className="mt-4" onClick={() => navigate("/problems")}>
          Back to Problems
        </Button>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{problem.title}</h1>

          <p className="mt-2 text-muted-foreground">{problem.description}</p>
        </div>
        <div className="flex gap-2">
          <EditProblemDialog
            problem={problem}
            onEditProblem={handleEditProblem}
          />

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this problem?</AlertDialogTitle>

                <AlertDialogDescription>
                  This action cannot be undone. This problem will be permanently
                  removed.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleDeleteProblem}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>{" "}
      </div>

      <div className="mt-6 space-y-2">
        <p>
          <strong>Status:</strong> {problem.status}
        </p>

        <p>
          <strong>Priority:</strong> {problem.priority}
        </p>

        <p>
          <strong>Created:</strong> {problem.createdAt}
        </p>
      </div>
    </main>
  );
}

export default ProblemDetailsPage;
