import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <p>test</p>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;