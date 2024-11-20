const Settings = () => {
  return (
    <div className="col-span-2 rounded-md bg-white px-4 py-6 md:px-6 lg:col-span-1">
      <form action="">
        <fieldset>
          <h3 className="mb-8 text-lg font-semibold">Kontaktní údaje</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
                required
                placeholder=""
              />
              <label
                htmlFor="first-name"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Jméno<span className="text-red-500">&#42;</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
                required
                placeholder=""
              />
              <label
                htmlFor="last-name"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Příjmení<span className="text-red-500">&#42;</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
                placeholder=""
              />
              <label
                htmlFor="phone"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Telefon
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
                required
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                E-mail<span className="text-red-500">&#42;</span>
              </label>
            </div>
          </div>
          <hr className="my-8 block border-0 border-t border-t-body-secondary" />
        </fieldset>
        <fieldset>
          <h3 className="mb-8 text-lg font-semibold">Kontaktní údaje</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="invoice-first-name"
                id="invoice-first-name"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                required
                placeholder=""
              />
              <label
                htmlFor="invoice-first-name"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Jméno<span className="text-red-500">&#42;</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="invoice-last-name"
                id="invoice-last-name"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                required
                placeholder=""
              />
              <label
                htmlFor="invoice-last-name"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Příjmení<span className="text-red-500">&#42;</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="company-name"
                id="company-name"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                required
                placeholder=""
              />
              <label
                htmlFor="company-name"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Název firmy<span className="text-red-500">&#42;</span>
              </label>
            </div>
            <div className="flex gap-3">
              <div className="relative w-full">
                <input
                  type="text"
                  name="invoice-ic"
                  id="invoice-ic"
                  className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                  required
                  placeholder=""
                />
                <label
                  htmlFor="invoice-ic"
                  className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  IČ<span className="text-red-500">&#42;</span>
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="invoice-dic"
                  id="invoice-dic"
                  className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                  placeholder=""
                />
                <label
                  htmlFor="invoice-dic"
                  className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  DIČ
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                name="adress"
                id="adress"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                placeholder=""
              />
              <label
                htmlFor="adress"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Ulice a číslo popisné
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="invoice-city"
                id="invoice-city"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                placeholder=""
              />
              <label
                htmlFor="invoice-city"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Město
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
                placeholder=""
              />
              <label
                htmlFor="postal-code"
                className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-3 scale-[0.65] transform whitespace-nowrap duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                PSČ
              </label>
            </div>
            <div className="relative">
              <select
                name="city"
                id="city"
                className="peer block w-full rounded-lg border border-gray-200 px-2.5 pb-2.5 pt-6 text-sm outline-none focus:border-primary"
              >
                <option value="" disabled selected hidden></option>
                <option value="Česká republika">Česká republika</option>
                <option value="Slovensko">Slovensko</option>
              </select>
              <label
                htmlFor="city"
                className="absolute start-2.5 top-3 z-10 origin-[0] translate-y-1 scale-100 transform whitespace-nowrap duration-300 peer-focus:-translate-y-2 peer-focus:scale-[0.65] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Země
              </label>
              <span className="absolute right-5 top-1/2 size-4 -translate-y-1/2 transform bg-flag-icon bg-contain bg-no-repeat"></span>
            </div>
          </div>
          <hr className="my-8 block border-0 border-t border-t-body-secondary" />
        </fieldset>
        <fieldset>
          <div className="mb-3 flex items-center gap-2">
            <span className="relative flex cursor-pointer items-center">
              <input
                type="checkbox"
                name="personal-questionnaire"
                id="personal-questionnaire"
                className="peer min-h-5 min-w-5 appearance-none rounded-md border border-gray-200 transition-all checked:bg-primary hover:ring hover:ring-gray-300 focus:outline-none"
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
            </span>
            <label htmlFor="personal-questionnaire">
              Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky
            </label>
          </div>
          <div className="mb-8 flex items-center gap-2">
            <span className="relative flex cursor-pointer items-center">
              <input
                type="checkbox"
                name="sales-info"
                id="sales-info"
                className="peer min-h-5 min-w-5 appearance-none rounded-md border border-gray-200 transition-all checked:bg-primary hover:ring hover:ring-gray-300 focus:outline-none"
              />
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
            </span>
            <label htmlFor="sales-info">
              Přeji si dostávat informace o novinkách a slevách nebo inspiraci
            </label>
          </div>
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-darker"
              >
                Uložit změny
              </button>
              <button
                type="button"
                className="rounded-lg border-2 border-primary px-6 py-3 font-semibold transition-colors hover:border-primary-darker hover:bg-blue-200"
              >
                Změnit heslo
              </button>
            </div>
            <div>
              <button
                type="button"
                className="w-full rounded-lg border-2 border-red-500 px-6 py-3 font-semibold text-red-500 transition-colors hover:border-red-700 hover:bg-red-100 hover:text-red-700 sm:w-fit"
              >
                Zrušit účet
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Settings;
