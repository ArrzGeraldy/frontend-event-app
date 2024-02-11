"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (username: any, email: any, password: any) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/auth/register`,
      {
        method: "post",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );

    if (!response.ok) {
      setIsLoading(false);
      setError(null);
    }
    if (response.ok) {
      redirect("/login");
    }
  };

  return { signup, isLoading, error };
};
