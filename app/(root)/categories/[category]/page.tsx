"use client";
import Card from "@/components/ui/shared/Card";
import SkeletonCard from "@/components/ui/shared/SkeletonCard";
import { useFetchEvent } from "@/hooks/event/useFetchEvent";
import React, { useEffect } from "react";

const page = ({ params }: any) => {
  const { category } = params;
  const capitalizeFirstLetter = (category: any) => {
    if (typeof category !== "string" || category.length === 0) {
      return "";
    }

    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  const categoryName = capitalizeFirstLetter(category);
  const { events, isLoading } = useFetchEvent(categoryName);

  const renderEvent = () => {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {events.map((event) => (
          <Card event={event} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/assets/images/category/banner/${category}.jpg)`,
        }}
        className="w-full h-[60vh] bg-cover bg-center"
      ></div>
      <article className="w-5/6 mx-auto mt-12 ">
        <h1 className="text-3xl font-semibold mb-8">Event {categoryName}</h1>
        {isLoading ? <SkeletonCard /> : renderEvent()}
      </article>
    </div>
  );
};

export default page;
