export function ClientForm() {
  return (
    <form className="flex flex-col rounded-lg p-6 shadow-sm border border-gray-100 gap-6">
      <h2 className="text-xl font-bold">Demana pressupost</h2>
      <div className="flex flex-col gap-5 items-center lg:flex-row md:gap-4">
        <div className="border border-gray-200 rounded-lg p-3 w-full">
          <label htmlFor="name" className="sr-only">
            Nom complet
          </label>
          <input type="text" id="name" required placeholder="Nom" />
          <p className="text-red-500 text-sm hidden">El nom és obligatori</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-3 w-full">
          <label htmlFor="phone" className="sr-only">
            Telèfon:
          </label>
          <input type="tel" id="phone" required placeholder="Telèfon" />
          <p className="text-red-500 text-sm hidden">
            El telèfon és obligatori
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-3 w-full">
          <label htmlFor="email" className="sr-only">
            Correu electrònic:
          </label>
          <input type="email" id="email" required placeholder="Email" />
          <p className="text-red-500 text-sm hidden">
            El correu electrònic és obligatori
          </p>
        </div>

        <button
          type="submit"
          className="bg-brand-green rounded-lg text-white py-4 px-2 md:py-3 md:px-11 w-full whitespace-nowrap"
        >
          Sol·licitar pressupost
        </button>
      </div>
    </form>
  );
}
