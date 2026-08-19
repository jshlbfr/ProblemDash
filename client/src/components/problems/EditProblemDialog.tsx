import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Problem } from "@/types/problem";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createProblemSchema,
  type CreateProblemInput,
} from "@/schemas/problemSchema";

type EditProblemDialogProps = {
  problem: Problem;
  onEditProblem: (problem: CreateProblemInput) => void;
};

function EditProblemDialog({ problem, onEditProblem }: EditProblemDialogProps) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(problem.title);
  const [description, setDescription] = useState(problem.description);
  const [priority, setPriority] = useState(problem.priority);

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = createProblemSchema.safeParse({
      title,
      description,
      priority,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (field) {
          fieldErrors[String(field)] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    onEditProblem(result.data);

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {" "}
      <DialogTrigger render={<Button />}>Edit Problem</DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Problem</DialogTitle>

            <DialogDescription>
              Update the details of this problem.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 py-6">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Title</Label>

              <Input
                id="edit-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              {errors.title && (
                <p className="text-sm text-destructive">{errors.title}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-description">Description</Label>

              <Textarea
                id="edit-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />

              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>Priority</Label>

              <Select
                value={priority}
                onValueChange={(value) =>
                  setPriority(value as Problem["priority"])
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save Changes</Button>{" "}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditProblemDialog;
