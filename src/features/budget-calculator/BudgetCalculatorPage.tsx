import { ServiceCard } from "./components/ServiceCard";
import services from "@/data/services.json";

export default function BudgetCalculatorPage() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-6 flex flex-col gap-4 py-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={false}
            onToggle={() => {}}
          />
        ))}
      </div>
    </section>
  );
}
