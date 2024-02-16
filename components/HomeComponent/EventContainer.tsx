"use client";
import { useEffect, useState } from "react";
import Pagination from "@/components/HomeComponent/Pagination";
import EventList from "@/components/HomeComponent/EventList";
import HeadEventList from "@/components/HomeComponent/HeadEventList";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState();
  const [lastPage, setlastPage] = useState();
  let data;

  const fetchData = async () => {
    if (category === "all") setCategory("");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/event?page=${page}&limit=6&search=${search}&category=${category}`
    );
    const responseData = await response.json();
    data = responseData.data;

    setEvents(data);
    setIsNextPage(responseData.pagination.next_page);
    setlastPage(responseData.pagination.last_page);
  };

  const handleNextPage = () => {
    if (!isNextPage) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchData();
  }, [search, page, category]);

  return (
    <section className="w-5/6 mx-auto flex flex-col gap-4" id="event">
      <div className="text-3xl font-bold mb-0">Event List.</div>
      <HeadEventList setSearch={setSearch} setCategory={setCategory} />
      <EventList events={events} />
      <Pagination
        page={page}
        lastPage={lastPage}
        setPage={setPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        isNextPage={isNextPage}
      />
    </section>
  );
};

export default EventContainer;
