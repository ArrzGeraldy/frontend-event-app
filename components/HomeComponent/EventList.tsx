import React from "react";
import Link from "next/link";
import Card from "../ui/shared/Card";

interface Event {
  id: string;
  image: object;
  title: string;
  author: object;
}

interface EventsListProps {
  events: Event[];
}

const EventList = ({ events }: EventsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {events.map((event: any, i: any) => (
        <div key={i} className="w-full">
          {/* card */}
          <Card event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
