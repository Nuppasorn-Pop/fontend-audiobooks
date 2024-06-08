import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import CheckRole from "../features/auththentication/components/CheckRole";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainContainer />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/myshelf", element: <h1>My shelf</h1> },
      { path: "/createaudiobook", element: <h1>Create audiobook</h1> },
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
        <AdminPage />
      </CheckRole>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
