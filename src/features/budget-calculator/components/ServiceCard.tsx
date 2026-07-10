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
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row md:items-center w-full gap-2">
          {/* Name and description */}
          <div className="flex flex-col gap-1 flex-1">
            <h3 className="font-bold text-lg">{service.name}</h3>
            <p className="text-sm">{service.description}</p>
          </div>

          {/* Price */}
          <span className="font-bold text-2xl whitespace-nowrap md:text-center md:flex-1">
            {service.price} <span className="text-base font-medium">€</span>
          </span>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="checkbox"
            checked={isSelected}
            className="w-5 h-5 cursor-pointer accent-brand-green"
            onChange={() => onToggle(service.id)}
          />
          <span className="hidden md:inline text-sm">
            {isSelected ? "Afegit" : "Afegir"}
          </span>
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
