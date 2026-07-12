import { useState } from "react";
import type { Budget } from "@/shared/types";

export function useBudgetHistory() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Only three possible values: 'date' | 'total' | 'name'
  const [sortBy, setSortBy] = useState<"date" | "total" | "name">("date");

  // NOTE: budgets are read directly from localStorage on every render.
  // This means new budgets appear after the component re-mounts (e.g. page refresh).
  // A global state solution (Context API or Zustand) would solve this in a future iteration.
  const budgets: Budget[] = JSON.parse(localStorage.getItem("budgets") ?? "[]");

  const filteredBudgets = budgets
    .filter((budget) =>
      budget.client.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((budgetA, budgetB) => {
      if (sortBy === "date") return budgetB.date.localeCompare(budgetA.date);
      if (sortBy === "total") return budgetB.total - budgetA.total;
      if (sortBy === "name")
        return budgetA.client.name.localeCompare(budgetB.client.name);
      return 0;
    });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (criteria: "date" | "total" | "name") => {
    setSortBy(criteria);
  };

  return {
    filteredBudgets,
    searchTerm,
    sortBy,
    handleSearch,
    handleSort,
  };
}
