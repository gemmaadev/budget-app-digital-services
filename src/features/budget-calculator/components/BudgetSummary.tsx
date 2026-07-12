interface BudgetSummaryProps {
  totalPrice: number;
}

export function BudgetSummary({ totalPrice }: BudgetSummaryProps) {
  return (
    <div className="flex flex-row justify-between items-center rounded-lg bg-total-price p-5">
      <p className="font-bold text-base">Preu pressupostat:</p>
      <span className="font-bold text-3xl">
        {totalPrice} <span className="text-base font-medium">€</span>
      </span>
    </div>
  );
}
