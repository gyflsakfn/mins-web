import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeComponent from "./component/ThemeComponent";
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
              <Suspense fallback={<Loading />}>
                <ThemeComponent />
              </Suspense>
            </ModalProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
