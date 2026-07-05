import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useBudgetCalculator } from "@/features/budget-calculator/hooks/useBudgetCalculator";

describe("useBudgetCalculator", () => {
  // Scenario: Select a single service
  // Given the user has not selected any service
  // When they select SEO
  // Then the total is 300€
  it("selecting SEO adds 300€ to the total", () => {
    const { result } = renderHook(() => useBudgetCalculator());

    act(() => {
      result.current.handleToggleService("seo");
    });

    expect(result.current.totalPrice).toBe(300);
  });

  // Scenario: Select multiple services
  // Given the user has not selected any service
  // When they select SEO and ADS
  // Then the total is 700€
  it("selecting SEO and ADS adds 700€ to the total", () => {
    const { result } = renderHook(() => useBudgetCalculator());

    act(() => {
      result.current.handleToggleService("seo");
    });

    act(() => {
      result.current.handleToggleService("ads");
    });

    expect(result.current.totalPrice).toBe(700);
  });

  // Scenario: Configure the Web service
  // Given the user has selected the Web service
  // When they configure 1 page and 3 languages
  // Then the total is 620€
  it("configuring Web service with 1 page and 3 languages adds 620€ to the total", () => {
    const { result } = renderHook(() => useBudgetCalculator());

    act(() => {
      result.current.handleToggleService("web");
    });

    act(() => {
      result.current.handleWebConfigChange(1, 3);
    });

    expect(result.current.totalPrice).toBe(620);
  });

  // Scenario: Deselect a service
  // Given the user has selected SEO
  // When they deselect SEO
  // Then the total is 0€
  it("deselecting SEO sets the total back to 0€", () => {
    const { result } = renderHook(() => useBudgetCalculator());

    act(() => {
      result.current.handleToggleService("seo");
    });

    act(() => {
      result.current.handleToggleService("seo");
    });

    expect(result.current.totalPrice).toBe(0);
  });
});
