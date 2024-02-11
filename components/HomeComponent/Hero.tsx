import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      className="w-full flex hero__height bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/images/blur-bg.png)`,
      }}
    >
      <div className="w-5/6 mx-auto flex items-center justify-between gap-12 ">
        <div className="flex flex-col gap-6 lg:w-2/5 text-center lg:text-start">
          <h1 className="text-5xl font-bold">Nonstop Social Event</h1>
          <p className="text-base text-gray-800">
            Discover the ultimate event organizing guide with our comprehensive
            list of resources, simplify your event planning process with our
            curated list of top event organizing tools and tips.
          </p>
          <Button className="w-full lg:w-fit rounded-full bg-indigo-600">
            Explore now.
          </Button>
        </div>
        <div className="h-full flex items-end relative">
          <div>
            <Image
              width={320}
              height={600}
              src={"/assets/images/hero/hero.png"}
              alt="...."
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
