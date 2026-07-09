import { SearchAndSort } from "./components/SearchAndSort";
import { BudgetCard } from "./components/BudgetCard";
import { useBudgetHistory } from "./hooks/useBudgetHistory";

export function BudgetHistorySection() {
  const { filteredBudgets, searchTerm, sortBy, handleSearch, handleSort } =
    useBudgetHistory();

  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-7 py-10 md:gap-2">
      <hr className="border-t-2 border-dashed border-gray-300 pb-8" />
      <h2 className="text-2xl font-bold">Pressupostos en curs:</h2>
      <SearchAndSort
        searchTerm={searchTerm}
        sortBy={sortBy}
        onSearch={handleSearch}
        onSort={handleSort}
      />

      <section>
        {filteredBudgets.length === 0 ? (
          <p>No hi ha pressupostos</p>
        ) : (
          filteredBudgets.map((budget) => (
            <BudgetCard key={budget.id} budget={budget} />
          ))
        )}
      </section>
    </div>
  );
}
