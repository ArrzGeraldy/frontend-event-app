"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
interface AuthContextType {
  dispatch: (action: any) => void;
}

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext() as AuthContextType;

  const login = async (email: any, password: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(true);
    }

    if (response.ok) {
      localStorage.setItem("token", json.data.access_token);

      dispatch({ type: "LOGIN", payload: json.data.access_token });

      setIsLoading(false);
      setError(false);
      // window.location.reload();
    }
  };

  return { login, isLoading, error };
};
