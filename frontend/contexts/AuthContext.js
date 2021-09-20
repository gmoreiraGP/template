import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const AuthContext = React.createContext({

});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  const logout = () => {
    Cookies.remove("token");
    
    setUser(null);
    setIsLoading(false);
    console.log("Redirecting");
    router.push(redirectLocation || "/login");
  };

  const authenticate = async (token) => {
    setIsLoading(true);
    try {
      
      setUser(user);
      Cookies.set("token", token);
    } catch (error) {
      console.log({ error });
      
      setUser(null);
      Cookies.remove("token");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;
    authenticate(token);
  }, []);

  useEffect(() => {
    //
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        logout,
        isLoading,
        isAuthenticated: !!user,
        token: Cookies.get("token"),
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
