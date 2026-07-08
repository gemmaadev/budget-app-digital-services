import { useState } from "react";
import services from "@/data/services.json";
import { calculateWebPrice } from "@/shared/utils";

export function useBudgetCalculator() {
  // Gestionar estat dels serveis seleccionats: selectedServices: string[]
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(),
  );
  // Gestionar estat de configuració web: webConfig: { pages: number, languages: number }
  const [webConfig, setWebConfig] = useState({ pages: 1, languages: 1 });

  // Implementar handleToggleService(id: string) per afegir/treure serveis
  const handleToggleService = (id: string) => {
    const newSelected = new Set(selectedServices);

    if (selectedServices.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }

    setSelectedServices(newSelected);
  };

  // Implementar handleWebConfigChange — és la funció que actualitza webConfig quan l'usuari canvia pàgines o idiomes
  const handleWebConfigChange = (pages: number, languages: number) => {
    setWebConfig({ pages: pages, languages: languages });
  };

  // Implementar fórmula del servei Web: (pages + languages) * 30 + 500
  const webPrice = calculateWebPrice(webConfig.pages, webConfig.languages);

  // Implementar càlcul del total: suma de tots els serveis seleccionats
  const totalPrice = services
    .filter((service) => selectedServices.has(service.id))
    .reduce((total, service) => {
      if (service.id === "web") {
        return total + webPrice;
      }
      return total + service.price;
    }, 0);

  const onReset = () => {
    setSelectedServices(new Set());
    setWebConfig({ pages: 1, languages: 1 });
  };

  // Retornar: selectedServices, webConfig, totalPrice, handleToggleService, handleWebConfigChange
  return {
    selectedServices,
    webConfig,
    totalPrice,
    handleToggleService,
    handleWebConfigChange,
    onReset,
  };
}
