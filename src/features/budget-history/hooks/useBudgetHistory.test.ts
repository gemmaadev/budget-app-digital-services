import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useBudgetHistory } from "@/features/budget-history/hooks/useBudgetHistory";
import type { Budget } from "@/shared/types/budget";

const mockBudgetJoan: Budget = {
  id: "1",
  date: "2024-01-01T00:00:00.000Z",
  client: { name: "Joan", email: "joan@test.com", phone: "123456789" },
  services: ["seo"],
  total: 300,
};

const mockBudgetOna: Budget = {
  id: "2",
  date: "2024-01-02T00:00:00.000Z",
  client: { name: "Ona", email: "ona@test.com", phone: "987654321" },
  services: ["ads"],
  total: 700,
};

describe("useBudgetHistory", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  //   Scenario: Cercar per nom
  //     Given hi ha pressupostos de "Joan" i "Ona"
  //     When l'usuari cerca "Joan"
  //     Then només es mostra el pressupost de "Joan"
  it("filters budgets by client name", () => {
    localStorage.setItem(
      "budgets",
      JSON.stringify([mockBudgetJoan, mockBudgetOna]),
    );
    const { result } = renderHook(() => useBudgetHistory());

    act(() => {
      result.current.handleSearch({
        target: { value: "Joan" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.filteredBudgets).toHaveLength(1);
    expect(result.current.filteredBudgets[0].client.name).toBe("Joan");
  });

  //   Scenario: Ordenar per import descendent
  //     Given hi ha pressupostos de 300€ i 700€
  //     When l'usuari ordena per Import
  //     Then el pressupost de 700€ apareix primer
  it("sorts budgets by total descending", () => {
    localStorage.setItem(
      "budgets",
      JSON.stringify([mockBudgetJoan, mockBudgetOna]),
    );
    const { result } = renderHook(() => useBudgetHistory());

    act(() => {
      result.current.handleSort("total");
    });

    expect(result.current.filteredBudgets[0].total).toBe(700);
  });

  //   Scenario: Llista buida
  //     Given no hi ha pressupostos guardats
  //     Then es mostra el missatge "No hi ha pressupostos"
  it("returns empty array when no budgets saved", () => {
    const { result } = renderHook(() => useBudgetHistory());
    expect(result.current.filteredBudgets).toHaveLength(0);
  });
});
