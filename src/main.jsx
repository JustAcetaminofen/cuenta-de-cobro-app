import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./error404";
import { App } from "./routes/app/index";
import { Cdc } from "./routes/cdc";
import { CdcGenerated } from "./routes/cdc/cdcGenerated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cdc",
        element: <Cdc />,
      },
      {
        path: "cdc/:id",
        element: <CdcGenerated />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
