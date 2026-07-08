import { BudgetDetailHeader } from "@/features/budget-share/components/BudgetDetailHeader";
import { BudgetDetailSummary } from "@/features/budget-share/components/BudgetDetailSummary";
import { BudgetDetailTerms } from "@/features/budget-share/components/BudgetDetailTerms";
import { BudgetDetailActivity } from "@/features/budget-share/components/BudgetDetailActivity";
import { BudgetCard } from "@/features/budget-history/components/BudgetCard";
import type { Budget } from "@/shared/types/budget";
import { Link } from "react-router-dom";

const mockBudget: Budget = {
  id: "123",
  date: new Date().toISOString(),
  client: { name: "Ona Costa", email: "ona@test.com", phone: "123456789" },
  services: ["seo", "web"],
  webConfig: { pages: 2, languages: 1 },
  total: 680,
};

export default function BudgetDetailPage() {
  return (
    <div className="mx-auto max-w-6xl px-10 flex flex-col gap-11 py-10">
      <BudgetDetailHeader budget={mockBudget} />
      <BudgetCard budget={mockBudget} showLink={false} />
      <BudgetDetailSummary budget={mockBudget} />
      <BudgetDetailTerms />
      <BudgetDetailActivity createdAt={mockBudget.date} />

      <Link to="/" className="text-lg text-brand-green">
        ← Tornar a pressupostos
      </Link>
    </div>
  );
}
