import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </AuthContextProvider>
  );
}

export default App;
