import { Link } from "react-router-dom";
import type { Budget } from "@/shared/types";
import { encodeBudget } from "@/shared";

interface BudgetCardProps {
  budget: Budget;
  showLink?: boolean;
}

export function BudgetCard({ budget, showLink = true }: BudgetCardProps) {
  return (
    <article className="flex bg-white flex-row rounded-lg px-8 py-10 shadow-sm border border-gray-100 gap-4 justify-between ">
      {/* Client info */}
      <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-2xl">{budget.client.name}</h3>
          <p className="text-sm">{budget.client.email}</p>
          <p className="text-sm">{budget.client.phone}</p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-md">Serveis contractats:</h3>
          <ul>
            {budget.services.map((service) => (
              <li key={service}>
                •
                {service === "web" && budget.webConfig
                  ? `Web (${budget.webConfig.pages} pàgines, ${budget.webConfig.languages} llenguatges)`
                  : service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Total */}
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Total</p>
          <span className="font-bold text-3xl">
            {budget.total}
            <span className="text-base font-medium">€</span>
          </span>

          {showLink && (
            <Link
              to={`/budgets?data=${encodeBudget(budget)}`}
              className="text-3xl text-brand-green text-end"
            >
              →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
