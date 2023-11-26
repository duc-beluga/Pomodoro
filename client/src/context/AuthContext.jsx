import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const isLoggedIn = user?.id;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/auth/login/success`,
          {
            credentials: "include",
          }
        );
        const json = await response.json();
        console.log("AuthContext", json.user);
        setUser(json.user);
      } catch (error) {
        toast.error("Error getting user data! Please try again.");
      }
    };

    getUser();
  }, [user?.id]);

  const login = (userData) => {
    // TODO: implement your login logic here
  };

  const logout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {
          credentials: "include",
        }
      );

      await response.json();
      setUser(null);
      toast.success("Successfully logged out!");
    } catch (error) {
      toast.error("Error logging out! Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
