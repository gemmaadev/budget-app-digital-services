import { describe, it, expect } from "vitest";
import { calculateWebPrice } from "./calculateWebPrice";

describe("calculateWebPrice", () => {
  // Scenario: Price with 1 page and 1 language
  // Given 1 page and 1 language
  // When calculateWebPrice is applied
  // Then the price is 560€
  it("returns 560€ with 1 page and 1 language", () => {
    expect(calculateWebPrice(1, 1)).toBe(560);
  });

  // Scenario: Price with 1 page and 3 languages
  // Given 1 page and 3 languages
  // When calculateWebPrice is applied
  // Then the price is 620€
  it("returns 620€ with 1 page and 3 languages", () => {
    expect(calculateWebPrice(1, 3)).toBe(620);
  });

  // Scenario: Price with 5 pages and 2 languages
  // Given 5 pages and 2 languages
  // When calculateWebPrice is applied
  // Then the price is 710€
  it("returns 710€ with 5 pages and 2 languages", () => {
    expect(calculateWebPrice(5, 2)).toBe(710);
  });
});
