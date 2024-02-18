import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2 mx-auto text-start hero__content">
      <h1 className="text-4xl animate__fadeInLeft font-bold">
        Nonstop social event
      </h1>
      <p className="text-base text-gray-800">
        Discover the ultimate event organizing guide with our comprehensive list
        of resources, simplify your event planning process with our curated list
        of top event organizing tools and tips.
      </p>
      <Link href={"#explore"}>
        <Button className="w-full lg:w-fit rounded-full mt-2 py-6 lg:py-4">
          Explore now.
        </Button>
      </Link>
    </div>
  );
};

export default HeroContent;
