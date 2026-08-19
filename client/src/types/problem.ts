export type ProblemStatus = "open" | "in-progress" | "resolved";

export type ProblemPriority = "low" | "medium" | "high";

export type Problem = {
  id: number;
  title: string;
  description: string;
  status: ProblemStatus;
  priority: ProblemPriority;
  createdAt: string;
};
