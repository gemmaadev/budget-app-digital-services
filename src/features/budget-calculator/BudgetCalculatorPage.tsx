import { ServiceCard } from "./components/ServiceCard";
import { BudgetSummary } from "./components/BudgetSummary";
import services from "@/data/services.json";

export default function BudgetCalculatorPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 flex flex-col gap-2 py-10">
      <div className="flex flex-col gap-4 py-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={true}
            onToggle={() => {}}
          />
        ))}
      </div>
      <BudgetSummary totalPrice={0} />
    </section>
  );
}
