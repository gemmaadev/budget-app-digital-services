// Maquetar l'estructura HTML semàntica: nom, descripció, preu i checkbox "Afegir"
// Aplicar estils: card amb border, layout en fila (nom+descripció | preu | checkbox)
// Aplicar estil visual quan la card és seleccionada (borde verd com al mockup)

import type { Service } from "@/features/budget-calculator/types/service";

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function ServiceCard({
  service,
  isSelected,
  onToggle,
}: ServiceCardProps) {
  return (
    <article
      className={`flex flex-col md:flex-row md:items-center md:justify-between border rounded-lg p-8 shadow-sm gap-2 md:gap-9 ${isSelected ? "border-2 border-brand-green" : "border-gray-100"}`}
    >
      <div className="flex flex-col gap-1 flex-1 pr-4">
        <h3 className="font-bold text-lg">{service.name}</h3>
        <p className="text-sm">{service.description}</p>
      </div>

      <div className="flex items-center justify-between md:justify-end md:gap-19">
        <span className="font-bold text-2xl">
          {service.price} <span className="text-base font-medium">€</span>
        </span>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer accent-brand-green"
            onChange={() => onToggle(service.id)}
          />
          <span className="hidden md:inline text-sm">Afegir</span>
        </label>
      </div>
    </article>
  );
}
