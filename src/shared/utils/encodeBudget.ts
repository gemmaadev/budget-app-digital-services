import type { Budget } from "@/shared/types/budget";

// La URL compartible tindrà format: /budgets?code=eyJpZCI6...

export function encodeBudget(budget: Budget): string {
  return btoa(JSON.stringify(budget)); //JSON.stringify convierte un objeto a string, btoa codifica de string a Base64
}

export function decodeBudget(encoded: string): Budget {
  return JSON.parse(atob(encoded)); //atob decodifica de Base64 a string, y JSON.parse convierte la string de vuelta a objeto
}
