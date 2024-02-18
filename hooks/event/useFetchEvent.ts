import { useEffect, useState } from "react";

export const useFetchEvent = (defaultCategory: string = "") => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState();
  const [lastPage, setlastPage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    if (category === "all") setCategory("");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/event?page=${page}&limit=6&search=${search}&category=${category}`
    );
    const responseData = await response.json();

    setEvents(responseData.data);
    setIsNextPage(responseData.pagination.next_page);
    setlastPage(responseData.pagination.last_page);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search, page, category]);

  return {
    events,

    page,
    isNextPage,
    lastPage,
    isLoading,
    setSearch,
    setPage,
    setCategory,
  };
};
