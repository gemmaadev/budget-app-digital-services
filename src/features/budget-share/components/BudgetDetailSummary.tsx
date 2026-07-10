import services from "@/data/services.json";
import type { Budget } from "@/shared/types";
import { calculateWebPrice } from "@/shared/utils";

interface BudgetDetailSummaryProps {
  budget: Budget;
}

export function BudgetDetailSummary({ budget }: BudgetDetailSummaryProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-bold text-xl">Resum</h2>
      <article className="flex flex-col border border-gray-100 rounded-lg shadow-sm">
        {budget.services.map((serviceId) => {
          const serviceData = services.find(
            (service) => service.id === serviceId,
          );
          if (!serviceData) return null;

          const isWeb = serviceId === "web" && budget.webConfig;
          const price = isWeb
            ? calculateWebPrice(
                budget.webConfig!.pages,
                budget.webConfig!.languages,
              )
            : serviceData.price;

          const name = isWeb
            ? `Web (${budget.webConfig!.pages} pàgines, ${budget.webConfig!.languages} idiomes)`
            : serviceData.name;

          return (
            <div
              key={serviceId}
              className="flex justify-between p-5 border-b border-gray-100 gap-8"
            >
              <div>
                <p className="font-bold">{name}</p>
                <p className="text-sm">{serviceData.description}</p>
              </div>
              <span className="flex whitespace-nowrap items-center">
                {price} €
              </span>
            </div>
          );
        })}
      </article>

      <div className="flex flex-row justify-between items-center rounded-lg bg-total-price p-5">
        <p className="font-bold text-base">Total pressupost:</p>
        <span className="font-bold text-3xl">
          {budget.total} <span className="text-base font-medium">€</span>
        </span>
      </div>
    </section>
  );
}
