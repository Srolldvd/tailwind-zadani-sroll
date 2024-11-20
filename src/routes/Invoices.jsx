import InvoicesRow from "../components/InvoicesRow";

const Invoices = () => {
    const rowsPerPage = 9;

    return (
        <div className="col-span-2 lg:col-span-1">
            <div className="max-w-full overflow-x-auto pb-4 md:pb-0">
                <table className="w-full bg-white rounded-t-xl">
                    <thead>
                        <tr className="border-b border-b-[#DFE2E2]">
                            <th className="p-4 text-sm text-left whitespace-nowrap">Číslo faktury</th>
                            <th className="p-4 text-sm text-left whitespace-nowrap">Číslo objednávky</th>
                            <th className="p-4 text-sm text-left whitespace-nowrap">Cena celkem</th>
                            <th className="p-4 text-sm text-right whitespace-nowrap">Stažení</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(rowsPerPage)].map((x, i) =>
                            <InvoicesRow key={i} />
                        )}
                    </tbody>
                </table>
                <div className="flex flex-wrap items-center mt-8 sticky gap-4 left-0 md:grid md:grid-cols-[3fr_2fr] md:static">
                    <button type="button" className="py-3 px-6 bg-primary w-fit text-white rounded-lg font-semibold transition-colors hover:bg-primary-darker md:ml-auto">Načíst další</button>
                    <div className="flex gap-2 justify-self-end ml-auto md:ml-0">
                        <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm text-primary">1</span>
                        <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">2</span>
                        <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">3</span>
                        <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm">...</span>
                        <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">56</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices;