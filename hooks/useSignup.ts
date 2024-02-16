"use client";

import { useState } from "react";

export const useSignup = () => {
  const [succesSignUp, setSuccesSignUp] = useState(false);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (username: any, email: any, password: any) => {
    setIsLoading(true);
    setError(false);

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
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      setError(true);
      setErrMessage(json.message);
    }
    if (response.ok) {
      setIsLoading(false);
      setErrMessage("");
      setSuccesSignUp(true);
    }
  };

  return { signup, isLoading, error, errMessage, succesSignUp };
};
