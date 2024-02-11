"use client";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email: any, password: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
      method: "post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("token", json.data.access_token);

      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
