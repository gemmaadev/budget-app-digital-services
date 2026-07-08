import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface SearchAndSortProps {
  searchTerm: string;
  sortBy: "date" | "total" | "name";
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (criteria: "date" | "total" | "name") => void;
}

export function SearchAndSort({
  searchTerm,
  sortBy,
  onSearch,
  onSort,
}: SearchAndSortProps) {
  const [isSortVisible, setIsSortVisible] = useState(false);

  return (
    <div className="flex flex-col gap-8 pb-6 md:flex-row md:justify-end">
      <div className="flex justify-end gap-4 items-center">
        <Search className="w-7 h-7 md:w-5 md:h-5" />
        <input
          type="search"
          value={searchTerm}
          onChange={onSearch}
          placeholder="Cerca..."
          className="border rounded-lg px-3 py-1 focus:outline-none"
        />
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsSortVisible(!isSortVisible)}
        >
          <SlidersHorizontal className="w-7 h-7 md:w-5 md:h-5" />
        </button>
      </div>

      {/* botons ocults en mòbil fins que es clica SlidersHorizontal */}
      <div
        className={`justify-end gap-8 text-md md:flex ${isSortVisible ? "flex" : "hidden"}`}
      >
        <button
          onClick={() => onSort("date")}
          className={sortBy === "date" ? "font-bold" : ""}
        >
          Data
        </button>
        <button
          onClick={() => onSort("total")}
          className={sortBy === "total" ? "font-bold" : ""}
        >
          Import ▽
        </button>
        <button
          onClick={() => onSort("name")}
          className={sortBy === "name" ? "font-bold" : ""}
        >
          Nom
        </button>
      </div>
    </div>
  );
}
