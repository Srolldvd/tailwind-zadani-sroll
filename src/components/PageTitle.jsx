import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const [pageTitle, setPageTitle] = useState("Home");

  const titleMap = [
    { path: "/tailwind-zadani-sroll/", title: "Home" },
    { path: "/tailwind-zadani-sroll/orders", title: "Moje objednávky" },
    { path: "/tailwind-zadani-sroll/invoices", title: "Faktury" },
    { path: "/tailwind-zadani-sroll/settings", title: "Nastavení" },
  ];

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  return (
    <h1 className="py-8 text-2xl font-semibold lg:col-span-2 lg:text-3xl">
      {pageTitle}
    </h1>
  );
};

export default PageTitle;
