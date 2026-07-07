import { SearchAndSort } from "./components/SearchAndSort";

export function BudgetHistorySection() {
  return (
    <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 py-10">
      <SearchAndSort
        searchTerm=""
        sortBy="date"
        onSearch={() => {}}
        onSort={() => {}}
      />
    </div>
  );
}
