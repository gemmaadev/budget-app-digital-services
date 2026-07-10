import { useState } from "react";
import services from "@/data/services.json";
import { calculateWebPrice } from "@/shared/utils";

export function useBudgetCalculator() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(),
  );

  const [webConfig, setWebConfig] = useState({ pages: 1, languages: 1 });

  const handleToggleService = (id: string) => {
    setSelectedServices((prev) => {
      const newSelected = new Set(prev);
      if (prev.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };
  const handleWebConfigChange = (pages: number, languages: number) => {
    setWebConfig((prev) => ({ ...prev, pages, languages }));
  };

  const webPrice = calculateWebPrice(webConfig.pages, webConfig.languages);

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

  return {
    selectedServices,
    webConfig,
    totalPrice,
    handleToggleService,
    handleWebConfigChange,
    onReset,
  };
}
