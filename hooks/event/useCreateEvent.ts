"use client";
import React, { useState } from "react";

export const useCreateEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const create = async (
    title: any,
    desc: any,
    category: any,
    location: any,
    startEvent: any,
    endEvent: any,
    price: any,
    file: any,
    user: any
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("category", category);
    formData.append("location", location);
    formData.append("startEvent", startEvent);
    formData.append("endEvent", endEvent);
    formData.append("price", price);
    formData.append("image", file);
    setIsLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: formData,
    });
    // const json = await response.json();
    // console.log(json);
    if (!response.ok) {
      setIsLoading(false);
      setIsError(true);
      setIsSuccess(false);
    }
    if (response.ok) {
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
    }
  };
  return { create, isLoading, isError, isSuccess };
};
