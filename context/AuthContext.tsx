"use client";
import { createContext, useEffect, useReducer, useState } from "react";

// Definisikan tipe untuk children
interface AuthContextProviderProps {
  children: React.ReactNode;
}

// Definisikan tipe untuk aksi
type AuthAction = { type: string; payload?: any };
export const AuthContext = createContext(null);

export const authReducer = (state: any, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center my-auto">
        <div className="custom-loader"></div>
      </div>
    ); // Tampilkan loading jika masih memuat
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
