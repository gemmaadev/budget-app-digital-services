import { describe, it, expect } from "vitest";
import { encodeBudget, decodeBudget } from "./encodeBudget";
import type { Budget } from "@/shared/types";

const mockBudget: Budget = {
  id: "123",
  date: "2024-01-01T00:00:00.000Z",
  client: { name: "Gemma", email: "gemma@test.com", phone: "123456789" },
  services: ["seo"],
  total: 300,
};

describe("encodeBudget / decodeBudget", () => {
  // Scenario: Encode a budget to Base64
  // Given a valid Budget object
  // When encodeBudget is applied
  // Then it returns a non-empty string
  it("returns a non-empty string when encoding a budget", () => {
    expect(encodeBudget(mockBudget)).toBeTruthy();
  });

  // Scenario: Decode a Base64 string to Budget
  // Given a valid Base64 string
  // When decodeBudget is applied
  // Then it returns the original Budget object
  it("returns the original budget when decoding", () => {
    const encoded = encodeBudget(mockBudget);
    expect(decodeBudget(encoded)).toEqual(mockBudget);
  });

  // Scenario: Encode and decode are inverse operations
  // Given a Budget object
  // When encodeBudget and decodeBudget are applied in sequence
  // Then the result is identical to the original object
  it("encode and decode are inverse operations", () => {
    const result = decodeBudget(encodeBudget(mockBudget));
    expect(result).toEqual(mockBudget);
  });
});
