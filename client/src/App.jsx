import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import React from "react";


function App() {
  const location = useLocation().pathname;

  return (
    <>
      <Navbar location={location} />
      <Outlet />
    </>
  );
}

export default App;
