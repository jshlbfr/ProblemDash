import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProblemsPage from "@/pages/ProblemsPage";
import ProblemDetailsPage from "@/pages/ProblemDetailsPage";
import { problems as initialProblems } from "@/data/problems";
import type { Problem } from "@/types/problem";

function App() {
  const [problems, setProblems] = useState<Problem[]>(initialProblems);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage problems={problems} />} />{" "}
        <Route
          path="/problems"
          element={
            <ProblemsPage problems={problems} setProblems={setProblems} />
          }
        />{" "}
        <Route
          path="/problems/:id"
          element={
            <ProblemDetailsPage problems={problems} setProblems={setProblems} />
          }
        />{" "}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
