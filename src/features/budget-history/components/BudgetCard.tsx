export function BudgetCard() {
  return (
    <article className="flex flex-col md:flex-row rounded-lg px-8 py-10 shadow-sm border border-gray-100 gap-4">
      <div className="flex justify-between md:block flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-2xl">Joan Farrés</h3>
          <p className="text-sm">joan.farre@gmail.com</p>
          <p className="text-sm">666 666 666</p>
        </div>

        <div className="flex flex-col items-end md:hidden gap-1">
          <p className="text-sm">Total</p>
          <span className="font-bold text-2xl">400€</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-md">Serveis contractats:</h3>
        <ul>
          <li>• Ads</li>
          <li>• SEO</li>
        </ul>
      </div>

      <div className="hidden md:flex flex-col gap-1 flex-1 items-end justify-center">
        <p className="text-sm">Total</p>
        <span className="font-bold text-3xl">400€</span>
      </div>
    </article>
  );
}
