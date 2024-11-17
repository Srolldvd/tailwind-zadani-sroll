import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import PageTitle from "./components/PageTitle";
import Orders from "./routes/orders";
import Sidebar from "./components/Sidebar";
import Invoices from "./routes/Invoices";
import Settings from "./routes/Settings";
import "./index.css";

const Layout = () => (
  <main className="grid grid-cols-[auto_1fr] gap-x-8 px-16">
      <PageTitle></PageTitle>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
  </main>
)


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div>
          </div>
        ),
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
