import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useBudgetForm } from "@/features/budget-form/hooks/useBudgetForm";

// Feature: Creació i persistència de pressupostos

describe("useBudgetForm", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  //   Scenario: Guardar pressupost a localStorage
  //     Given l'usuari ha seleccionat el servei SEO
  //     And ha emplenat el formulari amb dades vàlides
  //     When envia el formulari
  //     Then localStorage conté un pressupost amb el servei SEO i total 300€
  it("save budget to localStorage with correct total", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    // When — envia el formulari
    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    // Then — localStorage conté el pressupost
    const budgets = JSON.parse(localStorage.getItem("budgets") ?? "[]");
    expect(budgets[0].total).toBe(300);
  });

  //   Scenario: El pressupost té ID únic i data
  //     Given l'usuari ha emplenat el formulari correctament
  //     When envia el formulari
  //     Then el pressupost guardat té un id únic i una data en format ISO
  it("saves budget with unique id and ISO date", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    // When — envia el formulari
    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    //Then el pressupost guardat té un id únic i una data en format ISO
    const budgets = JSON.parse(localStorage.getItem("budgets") ?? "[]");
    expect(budgets[0].id).toBeDefined();
    expect(budgets[0].date).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); //regex comprova que la data comenci amb el format ISO
  });

  //   Scenario: Reset després d'enviar
  //     Given l'usuari ha seleccionat serveis i emplenat el formulari
  //     When envia el formulari
  //     Then onReset és cridat per netejar la selecció de serveis
  it("calls onReset after submitting the form", () => {
    const onReset = vi.fn();

    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, onReset),
    );

    // When — envia el formulari
    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    //Then onReset és cridat per netejar la selecció de serveis
    expect(onReset).toHaveBeenCalled();
  });

  //   Scenario: Múltiples pressupostos
  //     Given ja existeix un pressupost a localStorage
  //     When l'usuari envia un segon pressupost
  //     Then localStorage conté els dos pressupostos
  it("saves multiple budgets to localStorage", () => {
    const { result } = renderHook(() =>
      useBudgetForm(new Set(["seo"]), { pages: 1, languages: 1 }, 300, vi.fn()),
    );

    // When — envia el formulari primer cop
    act(() => {
      result.current.handleBudgetSubmit({
        name: "Gemma",
        phone: "123456789",
        email: "gemma@test.com",
      });
    });

    // When — envia el formulari segon cop
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
