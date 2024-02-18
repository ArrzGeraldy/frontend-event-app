"use client";
import AsideItems from "@/components/DashboardContent/Aside/AsideItems";
import EventsLIstUser from "@/components/DashboardContent/EventsLIstUser";
import Profile from "@/components/DashboardContent/Profile";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useFetchDetail } from "@/hooks/user/useFetchDetail";
import { useFetchEventsUser } from "@/hooks/user/useFetchEventsUser";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [active, setActive] = useState("profile");

  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();

  const {
    eventsUser,
    isLoading: loadingEventUser,
    isdeleted,
    setIsdeleted,
  } = useFetchEventsUser();
  const {
    detailUser,
    username,
    email,
    isLoading: detailLoading,
    setUsername,
  } = useFetchDetail();

  useEffect(() => {
    if (!user) redirect("/");
    detailUser();
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
              detailLoading={detailLoading}
              setUsername={setUsername}
            />
          )}
          {active === "myEvents" && (
            <EventsLIstUser
              eventsUser={eventsUser}
              isLoading={isLoading}
              loadingEventUser={loadingEventUser}
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
