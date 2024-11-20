import InvoicesRow from "../components/InvoicesRow";

const Invoices = () => {
  const rowsPerPage = 9;

  return (
    <div className="col-span-2 lg:col-span-1">
      <div className="max-w-full overflow-x-auto pb-4 md:pb-0">
        <table className="w-full rounded-t-xl bg-white">
          <thead>
            <tr className="border-b border-b-[#DFE2E2]">
              <th className="whitespace-nowrap p-4 text-left text-sm">
                Číslo faktury
              </th>
              <th className="whitespace-nowrap p-4 text-left text-sm">
                Číslo objednávky
              </th>
              <th className="whitespace-nowrap p-4 text-left text-sm">
                Cena celkem
              </th>
              <th className="whitespace-nowrap p-4 text-right text-sm">
                Stažení
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(rowsPerPage)].map((x, i) => (
              <InvoicesRow key={i} />
            ))}
          </tbody>
        </table>
        <div className="sticky left-0 mt-8 flex flex-wrap items-center gap-4 md:static md:grid md:grid-cols-[3fr_2fr]">
          <button
            type="button"
            className="w-fit rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-darker md:ml-auto"
          >
            Načíst další
          </button>
          <div className="ml-auto flex gap-2 justify-self-end md:ml-0">
            <span className="text flex h-8 w-8 items-center justify-center rounded-sm bg-white py-1 text-sm font-semibold text-primary">
              1
            </span>
            <span className="text flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm bg-white py-1 text-sm font-semibold hover:underline">
              2
            </span>
            <span className="text flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm bg-white py-1 text-sm font-semibold hover:underline">
              3
            </span>
            <span className="text flex h-8 w-8 items-center justify-center rounded-sm bg-white py-1 text-sm font-semibold">
              ...
            </span>
            <span className="text flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm bg-white py-1 text-sm font-semibold hover:underline">
              56
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
