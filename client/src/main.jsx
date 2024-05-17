import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllCountries } from "./views/AllCountries/AllCountries.jsx";
import { Country } from "./views/Country/Country.jsx";
import countries from "./data.json";

const getCountries = () => {
  return countries;
};

const getCountryById = (id) => {
  for (let country of countries) {
    if (country.id === id) {
      return country;
    }
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/countries",
        element: <AllCountries />,
        loader: () => getCountries(),
      },
      {
        path: "/countries/:country",
        element: <Country />,
        loader: ({ params }) => getCountryById(params.id),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
