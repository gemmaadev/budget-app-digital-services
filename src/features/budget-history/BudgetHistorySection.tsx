import { SearchAndSort } from "./components/SearchAndSort";
import { BudgetCard } from "./components/BudgetCard";
import type { Budget } from "@/features/budget-form/types/budget";

const mockBudget: Budget = { //Hardcoded de moment 
  id: "123",
  date: "2024-01-01",
  client: { name: "Ona Costa", email: "ona@test.com", phone: "123456789" },
  services: ["seo", "ads"],
  total: 700,
};

export function BudgetHistorySection() {
  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-10">
      <SearchAndSort
        searchTerm=""
        sortBy="date"
        onSearch={() => {}}
        onSort={() => {}}
      />
      <section>
        <BudgetCard budget={mockBudget} />
      </section>
    </div>
  );
}
