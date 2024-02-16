"use client";
import AsideItems from "@/components/DashboardContent/Aside/AsideItems";
import EventsLIstUser from "@/components/DashboardContent/EventsLIstUser";
import Profile from "@/components/DashboardContent/Profile";
import { useAuthContext } from "@/hooks/useAuthContext";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [active, setActive] = useState("profile");
  const [eventsUser, setEventsUser] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isdeleted, setIsdeleted] = useState("");
  const { user } = useAuthContext();

  const fetchUserEvents = async () => {
    const user = localStorage.getItem("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/events`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user}`,
      },
    });
    const json = await response.json();
    setEventsUser(json.data);
  };

  const detailUser = async () => {
    const user = localStorage.getItem("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user}` },
    });

    const { data } = await response.json();
    setUsername(data.username);
    setEmail(data.email);
  };

  useEffect(() => {
    if (!user) redirect("/");
    detailUser();
    fetchUserEvents();
  }, [isdeleted, user]);
  return (
    <section className="bg-gray-50 flex gap-4">
      <aside className="fixed z-10 bottom-0 w-screen lg:static bg-white border border-t-gray-400 lg:border-t-0 lg:w-1/5">
        <AsideItems active={active} setActive={setActive} />
      </aside>

      <article className="w-full">
        <div className="w-11/12 mx-auto">
          {active === "profile" && (
            <Profile
              username={username}
              email={email}
              setUsername={setUsername}
            />
          )}
          {active === "myEvents" && (
            <EventsLIstUser
              eventsUser={eventsUser}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isdeleted={isdeleted}
              setIsdeleted={setIsdeleted}
            />
          )}
        </div>
      </article>
    </section>
  );
};

export default page;
