import { ServiceCard } from "./components/ServiceCard";
import services from "@/data/services.json";

export default function BudgetCalculatorPage() {
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
