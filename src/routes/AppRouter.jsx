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
        <MainContainer />
      </ProtectRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/profile", element: <ProfilePage /> },
      {
        path: "/myshelf",
        element: (
          <AudiobookConextProvider>
            <MyShelfPage />
          </AudiobookConextProvider>
        ),
      },
      { path: "/createaudiobook", element: <CreateAudiobookPage /> },
      {
        path: "/:audiobookId",
        element: (
          <AudiobookConextProvider>
            <AudiobookPage />
          </AudiobookConextProvider>
        ),
      },
      {
        path: "/myfavorite",
        element: (
          <AudiobookConextProvider>
            <MyFavoritePage />
          </AudiobookConextProvider>
        ),
      },
    ],
  },
  {
    path: "/login",
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
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
