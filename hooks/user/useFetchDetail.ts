import { useEffect, useState } from "react";

export const useFetchDetail = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const user = localStorage.getItem("token");

  const detailUser = async () => {
    SetIsLoading(true);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user}` },
    });

    const { data } = await response.json();
    setUsername(data.username);
    setEmail(data.email);

    SetIsLoading(false);
  };

  useEffect(() => {
    detailUser();
  }, []);

  return { detailUser, username, email, isLoading, setUsername };
};
