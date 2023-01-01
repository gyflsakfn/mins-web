import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
