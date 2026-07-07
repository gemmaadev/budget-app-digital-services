export function BudgetCard() {
  return (
    <article className="flex bg-white flex-row rounded-lg px-8 py-10 shadow-sm border border-gray-100 gap-4 justify-between ">
      {/* Client */}
      <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-2xl">Joan Farrés</h3>
          <p className="text-sm">joan.farre@gmail.com</p>
          <p className="text-sm">666 666 666</p>
        </div>
        {/* Serveis */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="font-bold text-md">Serveis contractats:</h3>
          <ul>
            <li>• Ads</li>
            <li>• SEO</li>
          </ul>
        </div>
      </div>
      {/* Total */}
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-sm">Total</p>
        <span className="font-bold text-3xl">400€</span>
      </div>
    </article>
  );
}
