import InvoicesRow from "../components/InvoicesRow";

const Invoices = () => {
    const rowsPerPage = 9;

    return (
        <div>
            <table className="w-full bg-white rounded-t-xl">
                <thead>
                    <tr className="border-b border-b-[#DFE2E2]">
                        <th className="p-4 text-sm text-left">Číslo faktury</th>
                        <th className="p-4 text-sm text-left">Číslo objednávky</th>
                        <th className="p-4 text-sm text-left">Cena celkem</th>
                        <th className="p-4 text-sm text-right">Stažení</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(rowsPerPage)].map((x, i) =>
                        <InvoicesRow key={i} />
                    )}
                </tbody>
            </table>
            <div className="grid grid-cols-[3fr_2fr] items-center mt-8">
                <button type="button" className="justify-self-end py-3 px-6 bg-primary text-white rounded-lg font-semibold transition-colors hover:bg-primary-darker">Načíst další</button>
                <div className="flex gap-2 justify-self-end">
                    <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm text-primary">1</span>
                    <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">2</span>
                    <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">3</span>
                    <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm">...</span>
                    <span className="flex items-center justify-center bg-white font-semibold w-8 h-8 py-1 text-sm text rounded-sm cursor-pointer hover:underline">56</span>
                </div>
            </div>
        </div>
    )
}

export default Invoices;