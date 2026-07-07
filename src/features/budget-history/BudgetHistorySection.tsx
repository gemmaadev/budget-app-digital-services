import { SearchAndSort } from "./components/SearchAndSort";
import { BudgetCard } from "./components/BudgetCard";

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
        <BudgetCard />
      </section>
    </div>
  );
}
