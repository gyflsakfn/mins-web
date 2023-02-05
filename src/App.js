import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./component/ui/Loading";
import Navbar from "./section/navbar/Navbar";
import Footer from "./section/footer/Footer";
import ThemeComponent from "./pages/ThemeComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
    },
  },
});

const Theme = lazy(() => import("./theme/Theme"));

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ThemeProvider>
            <ModalProvider>
              <ThemeComponent />
              <Navbar />
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
              <Footer />
              <Theme />
            </ModalProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
