import React from "react";
import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useContext, useEffect, useState } from "react";

export interface GlobalContextProps {
  isLoggedIn: boolean;
  user: {
    userName: string;
    email: string;
    userId: string;
  } | null;
  loading: boolean;
}

const GlobalContext = createContext<GlobalContextProps>({
  isLoggedIn: false,
  loading: false,
  user: null,
} as GlobalContextProps);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobaProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return <GlobalContext.Provider value={{ isLoggedIn, user, loading }}>{children}</GlobalContext.Provider>;
};

export default GlobaProvider;
