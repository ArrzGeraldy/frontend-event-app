"use client";
import Pagination from "@/components/HomeComponent/Pagination";
import EventList from "@/components/HomeComponent/EventList";
import HeadEventList from "@/components/HomeComponent/HeadEventList";
import { useFetchEvent } from "@/hooks/event/useFetchEvent";

const EventContainer = () => {
  const {
    events,
    page,
    isNextPage,
    lastPage,
    setSearch,
    setPage,
    setCategory,
    isLoading,
  } = useFetchEvent();

  const handleNextPage = () => {
    if (!isNextPage) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  return (
    <section className="w-5/6 mx-auto flex flex-col gap-4" id="event">
      <div className="text-3xl font-bold mb-0">Event List.</div>
      <HeadEventList setSearch={setSearch} setCategory={setCategory} />
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center my-auto">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <EventList events={events} />
      )}

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
