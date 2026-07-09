interface BudgetDetailActivityProps {
  createdAt: string;
}
export function BudgetDetailActivity({ createdAt }: BudgetDetailActivityProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("ca-ES");

  return (
    <section className="flex flex-col border border-gray-100 rounded-lg shadow-sm p-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">Historial d'activitat</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-brand-green mt-1 shrink-0" />
            <div>
              <p className="font-bold text-sm item">Pressupost creat</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-300 mt-1 shrink-0" />
            <div>
              <p className="font-bold text-sm">Pressupost enviat</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-300 mt-1 shrink-0" />
            <div>
              <p className="font-bold text-sm">Pressupost visualitzat</p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
