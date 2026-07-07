import { useState } from "react";
import type { Budget } from "@/features/budget-form/types/budget";

export function useBudgetHistory() {
  // Gestionar estat de cerca: searchTerm: string
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Gestionar estat d'ordenació: sortBy: 'date' | 'total' | 'name'
  const [sortBy, setSortBy] = useState<"date" | "total" | "name">("date"); //variable només pot tenir tres valors possibles, i comença amb "date".

  // Llegir pressupostos de localStorage i parsejar-los
  const budgets: Budget[] = JSON.parse(localStorage.getItem("budgets") ?? "[]");

  // Filtrar pressupostos per nom del client en temps real
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

  // Ordenar pressupostos segons el criteri actiu
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (criteria: "date" | "total" | "name") => {
    setSortBy(criteria);
  };

  // Retornar: filteredBudgets, searchTerm, sortBy, handleSearch, handleSort
  return {
    filteredBudgets,
    searchTerm,
    sortBy,
    handleSearch,
    handleSort,
  };
}
