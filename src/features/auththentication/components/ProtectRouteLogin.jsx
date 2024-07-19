/* eslint-disable react/prop-types */
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectRouteLogin({ children }) {
  const { authUser, isAuthLoading } = useAuth();
  if (authUser && !isAuthLoading) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isAuthLoading && <Spinner />}
      {children}
    </>
  );
}
