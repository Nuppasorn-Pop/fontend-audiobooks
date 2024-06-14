/* eslint-disable react/prop-types */
import { createContext } from "react";
import authApi from "../apis/auth-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getMe();
          setAuthUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (body) => {
    const res = await authApi.login(body);
    setAccessToken(res.data.accessToken);

    const resGetAuthUser = await authApi.getMe();
    setAuthUser(resGetAuthUser.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authUser, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
