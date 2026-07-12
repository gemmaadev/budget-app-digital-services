import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useBudgetHistory } from "@/features/budget-history/hooks/useBudgetHistory";
import type { Budget } from "@/shared/types";

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

  // Scenario: Filter by client name
  // Given there are budgets for "Joan" and "Ona"
  // When the user searches for "Joan"
  // Then only Joan's budget is shown
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

  // Scenario: Sort by total descending
  // Given there are budgets of 300€ and 700€
  // When the user sorts by Import
  // Then the 700€ budget appears first
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

  // Scenario: Empty list
  // Given no budgets are saved
  // Then an empty array is returned
  it("returns empty array when no budgets saved", () => {
    const { result } = renderHook(() => useBudgetHistory());
    expect(result.current.filteredBudgets).toHaveLength(0);
  });
});
