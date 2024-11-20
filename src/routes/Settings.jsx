const Settings = () => {
    return (
        <div className="bg-white py-6 px-4 rounded-md col-span-2 lg:col-span-1 md:px-6">
            <form action="">
                <fieldset>
                    <h3 className="font-semibold text-lg mb-8">Kontaktní údaje</h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div className="relative">
                            <input type="text" name="first-name" id="first-name" className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error peer" required placeholder=""/>
                            <label htmlFor="first-name" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Jméno<span className="text-red-500">&#42;</span></label>
                        </div>
                        <div className="relative">
                            <input type="text" name="last-name" id="last-name"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error peer" required placeholder=""/>
                            <label htmlFor="last-name" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Příjmení<span className="text-red-500">&#42;</span></label>
                       </div>
                       <div className="relative">
                            <input type="tel" name="phone" id="phone"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error peer" placeholder=""/>
                            <label htmlFor="phone" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Telefon</label>
                        </div>
                        <div className="relative">
                            <input type="email" name="email" id="email"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error peer" required placeholder=""/>
                            <label htmlFor="email" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail<span className="text-red-500">&#42;</span></label>
                        </div>
                    </div>
                    <hr className="my-8 block border-0 border-t border-t-body-secondary"/>
                </fieldset>
                <fieldset>
                    <h3 className="font-semibold text-lg mb-8">Kontaktní údaje</h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <div className="relative">
                            <input type="text" name="invoice-first-name" id="invoice-first-name"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" required placeholder=""/>
                            <label htmlFor="first-name" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Jméno<span className="text-red-500">&#42;</span></label>
                        </div>
                        <div className="relative">
                            <input type="text" name="invoice-last-name" id="invoice-last-name"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" required placeholder=""/>
                            <label htmlFor="last-name" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Příjmení<span className="text-red-500">&#42;</span></label>
                        </div>
                        <div className="relative">
                            <input type="text" name="company-name" id="company-name"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" required placeholder=""/>
                            <label htmlFor="company-name" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Název firmy<span className="text-red-500">&#42;</span></label>
                        </div>
                        <div className="flex gap-3">
                            <div className="relative w-full">
                                <input type="text" name="invoice-ic" id="invoice-ic"  className="block  rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" required placeholder=""/>
                                <label htmlFor="invoice-ic" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">IČ<span className="text-red-500">&#42;</span></label>
                            </div>
                            <div className="relative w-full">
                                <input type="text" name="invoice-dic" id="invoice-dic"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer"placeholder=""/>
                                <label htmlFor="invoice-dic" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">DIČ</label>
                            </div>
                        </div>
                        <div className="relative">
                            <input type="text" name="adress" id="adress"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" placeholder=""/>
                            <label htmlFor="adress" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ulice a číslo popisné</label>
                        </div>
                        <div className="relative">
                            <input type="text" name="invoice-city" id="invoice-city"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" placeholder=""/>
                            <label htmlFor="invoice-city" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Město</label>
                        </div>
                        <div className="relative">
                            <input type="text" name="postal-code" id="postal-code"  className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer" placeholder=""/>
                            <label htmlFor="postal-code" className="absolute duration-300 whitespace-nowrap transform -translate-y-3 scale-[0.65] top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">PSČ</label>
                        </div>
                        <div className="relative">
                            <select name="city" id="city" className="block rounded-lg px-2.5 pb-2.5 pt-6 w-full text-sm outline-none border border-gray-200 focus:border-primary peer">
                                <option value="" disabled selected hidden></option>
                                <option value="Česká republika">Česká republika</option>
                                <option value="Slovensko">Slovensko</option>
                            </select>
                            <label htmlFor="city" className="absolute duration-300 whitespace-nowrap transform translate-y-1 scale-100 top-3 z-10 origin-[0] start-2.5 peer-focus:scale-[0.65] peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Země</label>
                            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-flag-icon bg-no-repeat bg-contain size-4"></span>
                        </div>
                    </div>
                    <hr className="my-8 block border-0 border-t border-t-body-secondary"/>
                </fieldset>
                <fieldset>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="flex items-center cursor-pointer relative">
                            <input type="checkbox" name="personal-questionnaire" id="personal-questionnaire" className="border border-gray-200 min-w-5 min-h-5 appearance-none rounded-md focus:outline-none checked:bg-primary hover:ring hover:ring-gray-300 transition-all peer"/>
                            <span className="text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 w-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                        </span>
                        <label htmlFor="personal-questionnaire">Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky</label>
                    </div>
                    <div className="flex items-center gap-2 mb-8">
                        <span className="flex items-center cursor-pointer relative">
                            <input type="checkbox" name="sales-info" id="sales-info" className="border border-gray-200 min-w-5 min-h-5 appearance-none rounded-md focus:outline-none checked:bg-primary hover:ring hover:ring-gray-300 transition-all peer"/>
                            <span className="text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 w-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </span>
                        </span>
                        <label htmlFor="sales-info">Přeji si dostávat informace o novinkách a slevách nebo inspiraci</label>
                    </div>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button type="submit" className="py-3 px-6 bg-primary border-2 border-primary text-white rounded-lg font-semibold transition-colors hover:bg-primary-darker">Uložit změny</button>
                            <button type="button" className="py-3 px-6 border-2 border-primary rounded-lg font-semibold transition-colors hover:border-primary-darker hover:bg-blue-200">Změnit heslo</button>
                        </div>
                        <div>
                            <button type="button" className="py-3 px-6 border-2 w-full border-red-500 text-red-500 rounded-lg font-semibold transition-colors hover:border-red-700 hover:bg-red-100 hover:text-red-700 sm:w-fit">Zrušit účet</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Settings;