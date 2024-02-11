import { Button } from "@/components/ui/button";
import Image from "next/image";
import EventContainer from "@/components/HomeComponent/EventContainer";
import Hero from "@/components/HomeComponent/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <EventContainer />
    </>
  );
};

export default Home;
