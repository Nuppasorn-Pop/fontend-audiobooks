import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import CheckRole from "../features/auththentication/components/CheckRole";
import ProfilePage from "../pages/ProfilePage";
import CreateAudiobookPage from "../pages/CreateAudiobookPage";
import ProtectRoute from "../features/auththentication/components/ProtectRoute";
import AudiobookPage from "../pages/AudiobookPage";
import AudiobookConextProvider from "../contexts/AudiobookContext";
import MyShelfPage from "../pages/MyShelfPage";
import MyFavoritePage from "../pages/MyFavoritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <AudiobookConextProvider>
          <MainContainer />
        </AudiobookConextProvider>
      </ProtectRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/myshelf", element: <MyShelfPage /> },
      { path: "/createaudiobook", element: <CreateAudiobookPage /> },
      { path: "/:audiobookId", element: <AudiobookPage /> },
      { path: "/myfavorite", element: <MyFavoritePage /> },
    ],
  },
  {
    path: "login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <CheckRole>
        <AudiobookConextProvider>
          <MainContainer />
        </AudiobookConextProvider>
      </CheckRole>
    ),
    children: [{ path: "/admin", element: <AdminPage /> }],
  },
  {
    path: "*",
    element: <h1>If everything go wrong come here</h1>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
