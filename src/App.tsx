import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BudgetDetailPage from "./pages/BudgetDetailPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/budgets" element={<BudgetDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
