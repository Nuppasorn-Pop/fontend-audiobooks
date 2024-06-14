import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<h>Loading...</h>}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          transition={Slide}
        />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
