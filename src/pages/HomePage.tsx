import BudgetCalculatorSection from "@/features/budget-calculator/BudgetCalculatorSection";
import { BudgetHistorySection } from "@/features/budget-history/BudgetHistorySection";

export default function HomePage() {
  return (
    <>
      <nav className="px-6 py-3 border-b border-gray-100">
        <img
          src="/src/assets/logos/logo-frontender.png"
          alt="Logo Frontender"
          className="h-10"
        />
      </nav>
      <header className="flex flex-col bg-[url('/src/assets/images/header-image.png')] bg-cover bg-center h-50 items-center justify-center gap-3">
        <h1 className="font-bold text-4xl text-center">
          Aconsegueix la millor qualitat
        </h1>
      </header>
      <main>
        <BudgetCalculatorSection />
        <BudgetHistorySection />
      </main>
    </>
  );
}
