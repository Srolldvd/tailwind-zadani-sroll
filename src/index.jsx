import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import Orders from "./routes/orders";
import Sidebar from "./components/Sidebar";
import Invoices from "./routes/Invoices";
import Settings from "./routes/Settings";
import "./index.css";

const Layout = () => (
  <main className="grid grid-cols-[auto_1fr] gap-x-8 px-4 sm:px-6 md:px-10 lg:px-16">
    <PageTitle></PageTitle>
    <Sidebar></Sidebar>
    <Outlet></Outlet>
  </main>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/tailwind-zadani-sroll/",
        element: <div></div>,
      },
      {
        path: "/tailwind-zadani-sroll/orders",
        element: <Orders />,
      },
      {
        path: "/tailwind-zadani-sroll/invoices",
        element: <Invoices />,
      },
      {
        path: "/tailwind-zadani-sroll/settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
