import { useState } from "react";
import type { ClientData } from "@/features/budget-share/types/budget";
import { FormField } from "./FormField";

interface ClientFormProps {
  onSubmit: (clientData: ClientData) => void;
}

export function ClientForm({ onSubmit }: ClientFormProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const isPhoneValid = /^\d{9,}$/.test(formData.phone.trim());
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    formData.email,
  );

  const isFormValid =
    formData.name.trim() !== "" && isPhoneValid && isEmailValid;

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    setTouched({ name: true, phone: true, email: true });

    if (!isFormValid) return;

    onSubmit(formData);
    setFormData({ name: "", phone: "", email: "" });
    setTouched({ name: false, phone: false, email: false });
  };

  return (
    <form
      className="flex flex-col rounded-lg p-6 shadow-sm border border-gray-100 gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">Demana pressupost</h2>
      <div className="flex flex-col gap-3 items-center lg:flex-row md:gap-4">
        <FormField
          id="name"
          type="text"
          placeholder="Nom"
          label="Nom complet"
          value={formData.name}
          error="Camp obligatori"
          showError={touched.name && formData.name.trim() === ""}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          onBlur={() => setTouched({ ...touched, name: true })}
        />
        <FormField
          id="phone"
          type="tel"
          placeholder="Telèfon"
          label="Telèfon"
          value={formData.phone}
          error="Introdueix un telèfon vàlid"
          showError={touched.phone && !isPhoneValid}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
          onBlur={() => setTouched({ ...touched, phone: true })}
        />
        <FormField
          id="email"
          type="email"
          placeholder="Email"
          label="Correu electrònic"
          value={formData.email}
          error="Introdueix un email vàlid"
          showError={touched.email && !isEmailValid}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          onBlur={() => setTouched({ ...touched, email: true })}
        />
        <button
          type="submit"
          className="rounded-lg text-white py-4 px-2 md:py-3 md:px-11 w-full whitespace-nowrap bg-brand-green active:opacity-80 lg:self-start"
        >
          Sol·licitar pressupost
        </button>
      </div>
    </form>
  );
}
