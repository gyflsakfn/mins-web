import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./section/footer/Footer";
import { ModalProvider } from "./context/ModalContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ModalProvider>
            <Navbar />
            <Outlet />
            <Footer />
          </ModalProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
