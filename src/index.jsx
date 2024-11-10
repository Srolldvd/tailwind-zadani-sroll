import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Orders from "./routes/orders";
import Sidebar from "./components/Sidebar";
import Invoices from "./routes/Invoices";
import Settings from "./routes/Settings";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Sidebar></Sidebar>
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
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
