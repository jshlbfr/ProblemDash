import type { Problem } from "@/types/problem";

export const problems: Problem[] = [
  {
    id: 1,
    title: "Login page returns an error",
    description: "An error appears when the user attempts to log in.",
    status: "open",
    priority: "high",
    createdAt: "Aug 18, 2026",
  },
  {
    id: 2,
    title: "Dashboard statistics are not updating",
    description: "Dashboard does not update when new changes are made.",
    status: "in-progress",
    priority: "medium",
    createdAt: "Aug 17, 2026",
  },
  {
    id: 3,
    title: "Sidebar overlaps content on mobile",
    description: "When sidebar is open, it overlaps.",
    status: "open",
    priority: "medium",
    createdAt: "Aug 16, 2026",
  },
  {
    id: 4,
    title: "Incorrect success message after saving",
    description: "Message for success displays wrong info.",
    status: "resolved",
    priority: "low",
    createdAt: "Aug 15, 2026",
  },
];
