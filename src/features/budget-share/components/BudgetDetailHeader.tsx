export function BudgetDetailHeader() {
  return (
    <div className="mx-auto max-w-6xl px-10 flex flex-col gap-2 py-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Detall del pressupost</h1>
          <p>Creat el 24/05/2026</p>
        </div>

        <button
          type="submit"
          className="rounded-lg text-white whitespace-nowrap bg-brand-green active:opacity-80 px-4 py-1"
        >
          Descarregar PDF
        </button>
      </div>
    </div>
  );
}
