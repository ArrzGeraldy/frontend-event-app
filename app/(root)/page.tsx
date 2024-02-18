"use client";
import EventContainer from "@/components/HomeComponent/EventContainer";
import Hero from "@/components/HomeComponent/Hero/Hero";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="w-5/6 mx-auto" id="explore">
        <h2 className="text-3xl font-semibold mb-8">Explore Events</h2>
        <div className="px-4 md:px-0">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Link
                  href={"/categories/music"}
                  style={{
                    backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/assets/images/category/music-img.jpg")`,
                  }}
                  className="w-full h-60 rounded-md flex justify-center items-end py-8 category-card"
                >
                  <p className="text-3xl text-white">Music</p>
                </Link>
                <Link
                  href={"/categories/programming"}
                  style={{
                    backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/assets/images/category/programming-img.jpg")`,
                  }}
                  className="w-full h-60 rounded-md flex justify-center items-end py-8 category-card"
                >
                  <p className="text-3xl text-white">Programming</p>
                </Link>
                <Link
                  href={"/categories/technology"}
                  style={{
                    backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/assets/images/category/technology-img.jpg")`,
                  }}
                  className="w-full h-60 rounded-md flex justify-center items-end py-8 category-card"
                >
                  <p className="text-3xl text-white">Technology</p>
                </Link>
              </CarouselItem>
              <CarouselItem className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Link
                  href={"/categories/festival"}
                  style={{
                    backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/assets/images/category/festival-img.jpg")`,
                  }}
                  className="w-full h-60 rounded-md flex justify-center items-end py-8 category-card"
                >
                  <p className="text-3xl text-white">Festival</p>
                </Link>
                <Link
                  href={"/categories/education"}
                  style={{
                    backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/assets/images/category/education-img.jpg")`,
                  }}
                  className="w-full h-60 rounded-md flex justify-center items-end py-8 category-card"
                >
                  <p className="text-3xl text-white">Education</p>
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <EventContainer />
    </>
  );
};

export default Home;
