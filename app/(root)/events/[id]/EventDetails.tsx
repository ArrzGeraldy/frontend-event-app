"use client";
import { Button } from "@/components/ui/button";
import { PiCalendar, PiMapPin } from "react-icons/pi";
const EventDetails = ({ data }: any) => {
  return (
    <div className="text-gray-500 flex flex-col gap-3 text-sm">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
        {data.title}
      </h2>
      <div>
        <span className="bg-emerald-100 text-xs px-4 font-bold py-1 rounded-full text-emerald-500 ">
          {data.price === "0" ? "Free" : `$${data.price}`}
        </span>
        <span className="bg-gray-200 text-xs px-4 font-bold py-1 rounded-full text-gray-500 ms-2">
          {data.category}
        </span>
      </div>

      <div className="flex items-center gap-1 mt-2">
        <PiCalendar className="text-3xl" />
        <p>
          {data.startEvent} - {data.endEvent}
        </p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <PiMapPin className="text-3xl" />
        <p>{data.location}</p>
      </div>
      <Button className="w-fit bg-indigo-500 rounded-full">Get Ticket</Button>
    </div>
  );
};

export default EventDetails;
