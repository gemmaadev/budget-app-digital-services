import { ServiceCard } from "./components/ServiceCard";
import { BudgetSummary } from "./components/BudgetSummary";
import { useBudgetCalculator } from "./hooks/useBudgetCalculator";
import { useBudgetForm } from "@/features/budget-form/hooks/useBudgetForm";
import { ClientForm } from "@/features/budget-form/components/ClientForm";

import services from "@/data/services.json";

export default function BudgetCalculatorSection() {
  const {
    selectedServices,
    webConfig,
    totalPrice,
    handleToggleService,
    handleWebConfigChange,
    onReset,
  } = useBudgetCalculator();

  const { handleBudgetSubmit } = useBudgetForm(
    selectedServices,
    webConfig,
    totalPrice,
    onReset,
  );

  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-10">
      <section className="flex flex-col gap-5 py-10">
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
        <BudgetSummary totalPrice={totalPrice} />
      </section>

      <section>
        <ClientForm onSubmit={handleBudgetSubmit} />
        {/* ClientForm lives here because it needs selectedServices, webConfig and totalPrice from useBudgetCalculator */}
      </section>
    </div>
  );
}
