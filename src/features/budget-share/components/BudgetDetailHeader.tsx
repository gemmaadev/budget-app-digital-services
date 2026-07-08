import type { Budget } from "@/shared/types/budget";
interface BudgetDetailHeaderProps {
  budget: Budget;
}

export function BudgetDetailHeader({ budget }: BudgetDetailHeaderProps) {
  const formattedDate = new Date(budget.date).toLocaleDateString("ca-ES");

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Detall del pressupost</h1>
        <p>Creat el {formattedDate}</p>
      </div>

      <button
        type="submit"
        className="rounded-lg text-white whitespace-nowrap bg-brand-green active:opacity-80 px-4 py-1"
      >
        Descarregar PDF
      </button>
    </div>
  );
}
