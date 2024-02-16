import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="w-full flex relative h-screen bg-gray-50 bg-cover bg-center hero__height">
      <div className="w-5/6 mx-auto flex items-center justify-between gap-12 overflow-y-hidden hero__container">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
