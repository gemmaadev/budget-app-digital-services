import BudgetCalculatorSection from "./features/budget-calculator/BudgetCalculatorSection";
import { BudgetHistorySection } from "./features/budget-history/BudgetHistorySection";

export default function App() {
  return (
    <main>
      <BudgetCalculatorSection />
      <BudgetHistorySection />
    </main>
  );
}
