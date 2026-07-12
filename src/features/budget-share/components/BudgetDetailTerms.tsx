export function BudgetDetailTerms() {
  return (
    <section className="flex flex-col border border-gray-100 rounded-lg shadow-sm p-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">Termes i condicions</h2>
        <ul className="flex flex-col gap-2">
          <li>
            • El termini d’execució estimat és de 4 a 6 setmanes des de
            l’acceptació del pressupost.
          </li>
          <li>
            • El 50% del pagament s’ha d’abonar per avançat per iniciar el
            projecte.
          </li>
          <li>
            • Aquest pressupost és vàlid durant 30 dies des de la data
            d’emissió.
          </li>
          <li>
            • Qualsevol modificació del projecte pot afectar el preu final.
          </li>
        </ul>
      </div>
    </section>
  );
}
