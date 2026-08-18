import { z } from "zod";

export const createProblemSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title must be 100 characters or less."),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(1000, "Description must be 1000 characters or less."),

  priority: z.enum(["low", "medium", "high"]),
});

export type CreateProblemInput = z.infer<typeof createProblemSchema>;
