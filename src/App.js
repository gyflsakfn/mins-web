import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./section/footer/Footer";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeComponent from "./component/ThemeComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ThemeProvider>
            <ModalProvider>
              <ThemeComponent>
                <Navbar />
                <Outlet />
                <Footer />
              </ThemeComponent>
            </ModalProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
