import { useEffect, useState } from "react";

export const useFetchEventsUser = () => {
  const [eventsUser, setEventsUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isdeleted, setIsdeleted] = useState("");

  const user = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserEvents = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/user/events`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${user}`,
          },
        }
      );
      const json = await response.json();
      setEventsUser(json.data);

      setIsLoading(false);
    };
    fetchUserEvents();
  }, [isdeleted]);

  return { eventsUser, isLoading, isdeleted, setIsdeleted };
};
