import { Slide, ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </>
  );
}

export default App;
