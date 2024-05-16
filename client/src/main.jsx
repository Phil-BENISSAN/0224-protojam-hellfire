import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllCountries } from "./views/AllCountries.jsx";
import { Country } from "./views/Country.jsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "countries",
        element: <AllCountries />,
      },
      {
        path: "countries/:country",
        element: <Country />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
