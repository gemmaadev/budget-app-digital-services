import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useBudgetForm } from "@/features/budget-form/hooks/useBudgetForm";

describe("useBudgetForm", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Scenario: Save budget to localStorage
  // Given the user has selected SEO and filled in valid form data
  // When the form is submitted
  // Then localStorage contains a budget with SEO service and total 300€
  it("save budget to localStorage with correct total", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    const budgets = JSON.parse(localStorage.getItem("budgets") ?? "[]");
    expect(budgets[0].total).toBe(300);
  });

  // Scenario: Budget has unique ID and ISO date
  // Given the user has filled in the form correctly
  // When the form is submitted
  // Then the saved budget has a unique id and an ISO format date
  it("saves budget with unique id and ISO date", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    const budgets = JSON.parse(localStorage.getItem("budgets") ?? "[]");
    expect(budgets[0].id).toBeDefined();
    expect(budgets[0].date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); // regex checks that the date starts with ISO format
  });

  // Scenario: Reset after submitting
  // Given the user has selected services and filled in the form
  // When the form is submitted
  // Then onReset is called to clear the service selection
  it("calls onReset after submitting the form", () => {
    const onReset = vi.fn();

    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, onReset),
    );

    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    expect(onReset).toHaveBeenCalled();
  });

  // Scenario: Multiple budgets
  // Given a budget already exists in localStorage
  // When the user submits a second budget
  // Then localStorage contains both budgets
  it("saves multiple budgets to localStorage", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    act(() => {
      result.current.handleBudgetSubmit({
        name: "Anna",
        phone: "987654321",
        email: "anna@test.com",
      });
    });

    const budgets = JSON.parse(localStorage.getItem("budgets") ?? "[]");
    expect(budgets.length).toBe(2);
  });
});
