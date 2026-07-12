import type { Budget } from "@/shared/types";

// Shared URL format: /budgets?data=eyJpZCI6...

export function encodeBudget(budget: Budget): string {
  return btoa(JSON.stringify(budget));
}

export function decodeBudget(encoded: string): Budget {
  return JSON.parse(atob(encoded));
}
