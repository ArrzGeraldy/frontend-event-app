import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import EventDetails from "./EventDetails";

const page = async ({ params }: any) => {
  const id = params.id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/event/${id}`);
  const result = await response.json();
  const { data } = result;
  return (
    <section>
      <article className="w-5/6 mx-auto py-12 flex flex-col md:flex-row gap-4 md:gap-8">
        <Image
          width={400}
          height={200}
          src={data.image.url}
          alt="..."
          className="rounded-lg drop-shadow-md w-[400px] h-[266px] object-cover object-center"
        />

        <EventDetails data={data} />
      </article>
      <article className="w-5/6 mx-auto gap-8 text-sm">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-2">{data.desc}</p>
      </article>
    </section>
  );
};

export default page;
