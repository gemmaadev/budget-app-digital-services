import type { ClientData, Budget } from "@/shared/types";

export function useBudgetForm(
  selectedServices: Set<string>,
  webConfig: { pages: number; languages: number },
  totalPrice: number,
  onReset: () => void,
) {
  const handleBudgetSubmit = (clientData: ClientData) => {
    const newBudget: Budget = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      client: clientData,
      services: Array.from(selectedServices),
      webConfig: webConfig,
      total: totalPrice,
    };

    const existing: Budget[] = JSON.parse(
      localStorage.getItem("budgets") ?? "[]",
    );

    localStorage.setItem("budgets", JSON.stringify([...existing, newBudget]));

    onReset();
  };

  return {
    handleBudgetSubmit,
  };
}
