import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./section/footer/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
