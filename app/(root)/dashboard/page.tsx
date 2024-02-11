"use client";
import EventsLIstUser from "@/components/DashboardContent/EventsLIstUser";
import Profile from "@/components/DashboardContent/Profile";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect, useState } from "react";
import { PiNotepad, PiUserCircle } from "react-icons/pi";

const page = () => {
  const [active, setActive] = useState("profile");
  const [eventsUser, setEventsUser] = useState();

  const fetchUserEvents = async () => {
    const user = localStorage.getItem("token");
    console.log(user);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/events`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user}`,
      },
    });
    const json = await response.json();
    setEventsUser(json.data);
    console.log(json);
  };

  useEffect(() => {
    fetchUserEvents();
  }, []);
  return (
    <section className="bg-gray-50 flex gap-4">
      <aside className="w-1/5 h-screen bg-white border-e-2 px-8 py-4 flex flex-col gap-4 text-sm">
        <h4 className="font-semibold text-2xl">Welcome</h4>
        <button
          onClick={() => setActive("profile")}
          className={
            active == "profile"
              ? "bg-black text-white text-start px-4 py-2 rounded-lg flex gap-2 items-center"
              : "text-start px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-200 transition-all"
          }
        >
          <PiUserCircle className="text-3xl" />
          Profile
        </button>
        <button
          onClick={() => setActive("myEvents")}
          className={
            active == "myEvents"
              ? "bg-black text-white text-start px-4 py-2 rounded-lg flex gap-2 items-center"
              : "text-start px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-gray-200 transition-all"
          }
        >
          <PiNotepad size={32} className="text-3xl" />
          My events
        </button>
      </aside>
      <article className="w-full">
        <div className="w-11/12 mx-auto">
          {active === "profile" && <Profile />}
          {active === "myEvents" && <EventsLIstUser eventsUser={eventsUser} />}
        </div>
      </article>
    </section>
  );
};

export default page;
