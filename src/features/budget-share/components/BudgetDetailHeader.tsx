import type { Budget } from "@/shared/types/budget";

interface BudgetDetailHeaderProps {
  budget: Budget;
  onExportPDF: () => void;
}

export function BudgetDetailHeader({
  budget,
  onExportPDF,
}: BudgetDetailHeaderProps) {
  const formattedDate = new Date(budget.date).toLocaleDateString("ca-ES");

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Detall del pressupost</h1>
        <p>Creat el {formattedDate}</p>
      </div>
      <button
        type="submit"
        className="rounded-lg text-white whitespace-nowrap bg-brand-green active:opacity-80 px-4 md:py-1"
        onClick={onExportPDF}
      >
        Descarregar PDF
      </button>
    </div>
  );
}
