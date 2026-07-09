import { describe, it, expect } from "vitest";
import { encodeBudget, decodeBudget } from "./encodeBudget";
import type { Budget } from "@/shared/types/budget";

const mockBudget: Budget = {
  id: "123",
  date: "2024-01-01T00:00:00.000Z",
  client: { name: "Gemma", email: "gemma@test.com", phone: "123456789" },
  services: ["seo"],
  total: 300,
};

describe("encodeBudget", () => {
  // Feature: Codificació i decodificació de pressupostos per URL

  //   Scenario: Codificar un pressupost a Base64
  //     Given un objecte Budget vàlid
  //     When s'aplica encodeBudget
  //     Then retorna un string no buit
  it("returns a non-empty string when encoding a budget", () => {
    expect(encodeBudget(mockBudget)).toBeTruthy();
  });

  //   Scenario: Decodificar un string Base64 a Budget
  //     Given un string Base64 vàlid
  //     When s'aplica decodeBudget
  //     Then retorna l'objecte Budget original
  it("returns the original budget when decoding", () => {
    const encoded = encodeBudget(mockBudget);
    expect(decodeBudget(encoded)).toEqual(mockBudget);
  });
  //   Scenario: Encode i decode són inversos
  //     Given un objecte Budget
  //     When s'aplica encodeBudget i després decodeBudget
  //     Then el resultat és idèntic a l'objecte original
  it("encode and decode are inverse operations", () => {
    const result = decodeBudget(encodeBudget(mockBudget));
    expect(result).toEqual(mockBudget);
  });
});
