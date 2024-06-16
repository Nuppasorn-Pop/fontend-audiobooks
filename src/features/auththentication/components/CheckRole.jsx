/* eslint-disable react/prop-types */
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function CheckRole({ children }) {
  const { authUser, isAuthLoading } = useAuth();

  if (authUser?.role === "USER" && !isAuthLoading) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {isAuthLoading && <Spinner />}
      {children}
    </>
  );
}
