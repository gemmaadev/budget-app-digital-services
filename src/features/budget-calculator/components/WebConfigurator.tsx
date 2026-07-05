// Maquetar els dos selectors: "Nombre de pàgines" i "Nombre d'idiomes"
// Afegir botons + i - a cada selector
// Afegir icona ⓘ amb tooltip explicatiu del cost
import { Info } from "lucide-react";

interface WebConfiguratorProps {
  pages: number;
  languages: number;
}

export function WebConfigurator({ pages, languages }: WebConfiguratorProps) {
  return (
    <div className="flex flex-col gap-2 pt-6">
      <div className="flex items-center justify-end gap-3">
        <Info className="w-4 h-4 cursor-help" />
        <label className="text-sm">Número pàgines:</label>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" className="px-3 py-1">
            -
          </button>
          <span className="px-3 py-1 border-x border-gray-200">{pages}</span>
          <button type="button" className="px-3 py-1">
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Info className="w-4 h-4 cursor-help" />
        <label className="text-sm">Número llenguatges:</label>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" className="px-3 py-1">
            -
          </button>
          <span className="px-3 py-1 border-x border-gray-200">
            {languages}
          </span>
          <button type="button" className="px-3 py-1">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
