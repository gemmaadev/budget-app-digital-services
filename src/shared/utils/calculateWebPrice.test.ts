import { describe, it, expect } from "vitest";
import { calculateWebPrice } from "./calculateWebPrice";

describe("calculateWebPrice", () => {
  // Feature: Càlcul del preu del servei Web

  //   Scenario: Preu amb 1 pàgina i 1 idioma
  //     Given 1 pàgina i 1 idioma
  //     When s'aplica calculateWebPrice
  //     Then el preu és 560€
  it("returns 560€ with 1 page and 1 language", () => {
    expect(calculateWebPrice(1, 1)).toBe(560);
  });

  //   Scenario: Preu amb 1 pàgina i 3 idiomes
  //     Given 1 pàgina i 3 idiomes
  //     When s'aplica calculateWebPrice
  //     Then el preu és 620€
  it("returns 620€ with 1 page and 3 languages", () => {
    expect(calculateWebPrice(1, 3)).toBe(620);
  });

  //   Scenario: Preu amb 5 pàgines i 2 idiomes
  //     Given 5 pàgines i 2 idiomes
  //     When s'aplica calculateWebPrice
  //     Then el preu és 710€
  it("returns 710€ with 5 pages and 2 languages", () => {
    expect(calculateWebPrice(5, 2)).toBe(710);
  });
});
