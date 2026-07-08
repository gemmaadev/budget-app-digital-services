import type { ClientData, Budget } from "@/features/budget-share/types/budget";

// El hook rep com a paràmetres: selectedServices, webConfig, totalPrice i onReset (per netejar la selecció de serveis)
export function useBudgetForm(
  selectedServices: Set<string>,
  webConfig: { pages: number; languages: number },
  totalPrice: number,
  onReset: () => void,
) {
  // Implementar handleBudgetSubmit(clientData: ClientData):
  const handleBudgetSubmit = (clientData: ClientData) => {
    // Construir l'objecte Budget amb crypto.randomUUID() i new Date().toISOString()
    const newBudget: Budget = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      client: clientData,
      services: Array.from(selectedServices),
      webConfig: webConfig,
      total: totalPrice,
    };

    // Recupera pressupostos existents de localStorage
    const existing: Budget[] = JSON.parse(
      localStorage.getItem("budgets") ?? "[]",
    );

    // Afegeix el nou pressupost i guarda la llista actualitzada
    localStorage.setItem("budgets", JSON.stringify([...existing, newBudget]));

    // Crida onReset() per netejar la selecció de serveis
    onReset();
  };

  // Retornar: handleBudgetSubmit
  return {
    handleBudgetSubmit,
  };
}
