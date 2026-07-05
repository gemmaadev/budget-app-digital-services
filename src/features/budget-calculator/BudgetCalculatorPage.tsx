import { ServiceCard } from "./components/ServiceCard";
import { BudgetSummary } from "./components/BudgetSummary";
import { useBudgetCalculator } from "./hooks/useBudgetCalculator";
import services from "@/data/services.json";

export default function BudgetCalculatorPage() {
  const {
    selectedServices,
    webConfig,
    totalPrice,
    handleToggleService,
    handleWebConfigChange,
  } = useBudgetCalculator();

  return (
    <section className="mx-auto max-w-2xl px-6 flex flex-col gap-2 py-10">
      <div className="flex flex-col gap-4 py-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedServices.has(service.id)}
            onToggle={handleToggleService}
            webConfig={webConfig}
            onWebConfigChange={handleWebConfigChange}
          />
        ))}
      </div>
      <BudgetSummary totalPrice={totalPrice} />
    </section>
  );
}
