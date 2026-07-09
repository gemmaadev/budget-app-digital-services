import { BudgetDetailHeader } from "@/features/budget-share/components/BudgetDetailHeader";
import { BudgetDetailSummary } from "@/features/budget-share/components/BudgetDetailSummary";
import { BudgetDetailTerms } from "@/features/budget-share/components/BudgetDetailTerms";
import { BudgetDetailActivity } from "@/features/budget-share/components/BudgetDetailActivity";
import { BudgetCard } from "@/features/budget-history/components/BudgetCard";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { decodeBudget } from "@/shared";
import NotFound from "./NotFound";

export default function BudgetDetailPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get("data");

  if (!dataParam) return <NotFound />;

  const budget = decodeBudget(dataParam);

  return (
    <div className="mx-auto max-w-6xl px-10 flex flex-col gap-11 py-10">
      <BudgetDetailHeader budget={budget} />
      <BudgetCard budget={budget} showLink={false} />
      <BudgetDetailSummary budget={budget} />
      <BudgetDetailTerms />
      <BudgetDetailActivity createdAt={budget.date} />

      <Link to="/" className="text-lg text-brand-green">
        ← Tornar a pressupostos
      </Link>
    </div>
  );
}
