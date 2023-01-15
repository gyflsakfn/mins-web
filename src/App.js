import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeComponent from "./component/ThemeComponent";
import { Suspense } from "react";
import Loading from "./component/ui/Loading";
import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import Theme from "./theme/Theme";
import Footer from "./section/footer/Footer";

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
              <Suspense fallback={<Loading />}>
                <ThemeComponent />
                <Navbar />
                <Outlet />
                <Footer />
                <Theme />
              </Suspense>
            </ModalProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
