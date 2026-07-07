import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ClientForm } from "./ClientForm";

// Feature: Validació del formulari de pressupost

describe("ClientForm", () => {
  //   Scenario: Formulari invàlid — camps buits
  //     Given l'usuari no ha emplenat cap camp
  //     When intenta enviar el formulari
  //     Then es mostren els errors de validació
  it("shows validation errors when submitting empty form", () => {
    // Given — renderitza el formulari buit
    render(<ClientForm onSubmit={vi.fn()} />);

    // When — envia el formulari sense emplenar res
    fireEvent.click(screen.getByRole("button", { name: /sol·licitar/i }));

    // Then — es mostren els errors
    expect(screen.getByText("Camp obligatori")).toBeInTheDocument();
  });

  //   Scenario: Email invàlid
  //     Given l'usuari ha emplenat nom i telèfon
  //     When introdueix un email sense @
  //     Then es mostra un error de format d'email
  it("shows email format error when trying to submit incorrect email input", () => {
    // Given — renderitza el formulari
    render(<ClientForm onSubmit={vi.fn()} />);

    // Given — emplena nom i telèfon correctament
    fireEvent.change(screen.getByPlaceholderText("Nom"), {
      target: { value: "Gemma" },
    });
    fireEvent.change(screen.getByPlaceholderText("Telèfon"), {
      target: { value: "123456789" },
    });

    // When — introdueix un email sense @
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "emailtest" },
    });
    fireEvent.blur(screen.getByPlaceholderText("Email"));

    // Then
    expect(screen.getByText("Introdueix un email vàlid")).toBeInTheDocument();
  });

  //   Scenario: Telèfon invàlid
  //     Given l'usuari ha emplenat nom i email
  //     When introdueix lletres al camp de telèfon
  //     Then es mostra un error de format de telèfon
  it("shows phone format error when entering letters", () => {
    // Given — renderitza el formulari
    render(<ClientForm onSubmit={vi.fn()} />);

    // Given — emplena nom i email correctament
    fireEvent.change(screen.getByPlaceholderText("Nom"), {
      target: { value: "Gemma" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "gemma@test.com" },
    });

    //     When introdueix lletres al camp de telèfon
    fireEvent.change(screen.getByPlaceholderText("Telèfon"), {
      target: { value: "12345678P" },
    });
    fireEvent.blur(screen.getByPlaceholderText("Telèfon"));

    // Then
    expect(screen.getByText("Introdueix un telèfon vàlid")).toBeInTheDocument();
  });

  //   Scenario: Formulari vàlid
  //     Given l'usuari ha emplenat tots els camps correctament
  //     When envia el formulari
  //     Then el formulari es neteja
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
