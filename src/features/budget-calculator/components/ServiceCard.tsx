// Maquetar l'estructura HTML semàntica: nom, descripció, preu i checkbox "Afegir"
// Aplicar estils: card amb border, layout en fila (nom+descripció | preu | checkbox)
// Aplicar estil visual quan la card és seleccionada (borde verd com al mockup)

import type { Service } from "@/features/budget-calculator/types/service";
import { WebConfigurator } from "./WebConfigurator";

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onToggle: (id: string) => void;
  webConfig: { pages: number; languages: number };
  onWebConfigChange: (pages: number, languages: number) => void;
}

export function ServiceCard({
  service,
  isSelected,
  onToggle,
  webConfig,
  onWebConfigChange,
}: ServiceCardProps) {
  return (
    <article
      className={`flex flex-col rounded-lg px-8 py-11 shadow-sm ${isSelected ? "border-2 border-brand-green" : "border border-gray-100"}`}
    >
      <div className="flex items-center justify-between gap-5 md:gap-20">
        {/* Esquerra: nom + descripció + preu (mobile) */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-lg">{service.name}</h3>
          <p className="text-sm">{service.description}</p>
          {/* Preu visible només en mòbil */}
          <span className="font-bold text-2xl md:hidden">
            {service.price} <span className="text-base font-medium">€</span>
          </span>
        </div>

        {/* Centre: preu visible només en desktop */}
        <span className="hidden md:block font-bold text-2xl">
          {service.price} <span className="text-base font-medium">€</span>
        </span>

        {/* Dreta: checkbox */}
        <label className="flex items-center gap-2 cursor-pointer shrink-0">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer accent-brand-green"
            onChange={() => onToggle(service.id)}
          />
          <span className="hidden md:inline text-sm">
            {isSelected ? "Afegit" : "Afegir"}
          </span>{" "}
        </label>
      </div>

      {service.configurable && isSelected && (
        <WebConfigurator
          pages={webConfig.pages}
          languages={webConfig.languages}
          onPagesChange={(value) =>
            onWebConfigChange(value, webConfig.languages)
          }
          onLanguagesChange={(value) =>
            onWebConfigChange(webConfig.pages, value)
          }
        />
      )}
    </article>
  );
}
