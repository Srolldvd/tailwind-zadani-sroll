const InvoicesRow = () => {
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-5">121548784515487</td>
      <td className="whitespace-nowrap px-6 py-5">121548784515487</td>
      <td className="whitespace-nowrap px-6 py-5">-1500 Kč</td>
      <td className="px-6 py-5">
        <a
          href="#"
          className="flex items-center justify-end gap-1 text-primary hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
          <span className="text-xs font-medium">Stáhnout</span>
        </a>
      </td>
    </tr>
  );
};

export default InvoicesRow;
