import { SearchAndSort } from "./components/SearchAndSort";
import { BudgetCard } from "./components/BudgetCard";
import { useBudgetHistory } from "./hooks/useBudgetHistory";

export function BudgetHistorySection() {
  const { filteredBudgets, searchTerm, sortBy, handleSearch, handleSort } =
    useBudgetHistory();

  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-10">
      <h2>Pressupostos en curs:</h2>
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
