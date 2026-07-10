import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ClientForm } from "./ClientForm";

describe("ClientForm", () => {
  // Scenario: Invalid form — empty fields
  // Given the user has not filled in any field
  // When they try to submit the form
  // Then validation errors are shown
  it("shows validation errors when submitting empty form", () => {
    render(<ClientForm onSubmit={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /sol·licitar/i }));

    expect(screen.getByText("Camp obligatori")).toBeInTheDocument();
  });

  // Scenario: Invalid email
  // Given the user has filled in name and phone
  // When they enter an email without @
  // Then an email format error is shown
  it("shows email format error when trying to submit incorrect email input", () => {
    render(<ClientForm onSubmit={vi.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Nom"), {
      target: { value: "Gemma" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telèfon"), {
      target: { value: "123456789" },
    });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "emailtest" },
    });
    fireEvent.blur(screen.getByPlaceholderText("Email"));

    expect(screen.getByText("Introdueix un email vàlid")).toBeInTheDocument();
  });

  // Scenario: Invalid phone
  // Given the user has filled in name and email
  // When they enter letters in the phone field
  // Then a phone format error is shown
  it("shows phone format error when entering letters", () => {
    render(<ClientForm onSubmit={vi.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Nom"), {
      target: { value: "Gemma" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "gemma@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Telèfon"), {
      target: { value: "12345678P" },
    });
    fireEvent.blur(screen.getByPlaceholderText("Telèfon"));

    expect(screen.getByText("Introdueix un telèfon vàlid")).toBeInTheDocument();
  });

  // Scenario: Valid form
  // Given the user has filled in all fields correctly
  // When they submit the form
  // Then onSubmit is called and the form is cleared
  it("calls onSubmit and clears form when submitting valid form", () => {
    const onSubmit = vi.fn();
    render(<ClientForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Nom"), {
      target: { value: "Gemma" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telèfon"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "gemma@test.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sol·licitar/i }));

    expect(onSubmit).toHaveBeenCalled();
    expect(screen.getByPlaceholderText("Nom")).toHaveValue("");
  });
});
