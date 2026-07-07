import { Search } from "lucide-react";

export function SearchAndSort() {
  return (
    <div className="flex justify-end gap-7">
      <button type="button">
        <Search className="w-4 h-4" />
      </button>
      <button>Data</button>
      <button>Import ▽</button>
      <button>Nom</button>
    </div>
  );
}
