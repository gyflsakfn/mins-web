import { Outlet } from "react-router-dom";
import Navbar from "./section/navbar/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./section/footer/Footer";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeComponent from "./component/ThemeComponent";
import Theme from "./theme/Theme";
import { Suspense } from "react";
import Loading from "./component/Loading";

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
                <Suspense fallback={<Loading />}>
                  <Navbar />
                  <Outlet />
                  <Theme />
                  <Footer />
                </Suspense>
              </ThemeComponent>
            </ModalProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
