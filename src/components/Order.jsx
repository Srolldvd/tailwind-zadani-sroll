const Order = () => {
    return (
        <section className="bg-white flex flex-col gap-6 p-6 rounded-xl">
            <div>
                <div className="flex justify-between mb-3 flex-wrap gap-2">
                    <h4 className="text-md font-semibold md:text-lg">Číslo objednávky: 2200245834</h4>
                    <span className="px-2 py-1 font-medium text-xs leading-normal rounded-sm bg-green-100 text-green-700">Zaplaceno</span>
                </div>
                <div className="flex gap-2">
                    <span className="bg-gray-200 rounded-lg p-[.875rem] text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </span>
                    <span className="bg-gray-200 rounded-lg p-[.875rem] text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </span>
                    <span className="bg-gray-200 rounded-lg p-[.875rem] text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-4 sm:justify-between sm:flex-row">
                <div>
                    <p className="whitespace-nowrap">Datum objednávky: <span className="text-info">6.12.2022</span></p>
                    <p className="whitespace-nowrap">Cena celkem <span className="text-info">1500 Kč</span></p>
                </div>
                <div className="sm:text-right">
                    <a href="#" className="text-primary font-medium hover:underline">Potřebujete poradit?</a>
                    <p className="font-semibold">314 004 540 (po-pá 8:00-16:00)</p>
                </div>
            </div>
            <div className="flex justify-between flex-col-reverse sm:flex-row gap-4">
                <button type="button" className="py-3 px-12 bg-primary text-white rounded-lg font-semibold hover:bg-primary-darker">
                    Detail
                </button>
                <div className="flex items-center gap-6 self-end">
                    <button type="button" className="flex items-center gap-1 font-medium hover:underline">
                        Zopakovat
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                    </button>
                    <button type="button" className="flex items-center gap-1 font-medium hover:underline">
                        Stornovat
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Order;