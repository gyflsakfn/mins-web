import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
