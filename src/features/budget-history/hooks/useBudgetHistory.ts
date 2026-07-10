import { useState } from "react";
import type { Budget } from "@/shared/types";

export function useBudgetHistory() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Only three possible values: 'date' | 'total' | 'name'
  const [sortBy, setSortBy] = useState<"date" | "total" | "name">("date");

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
