"use client";
import Image from "next/image";
import React from "react";
import "animate.css";

const HeroImage = () => {
  return (
    <div className="img__hero-container flex items-end w-1/2 justify-end">
      <Image
        width={420}
        height={600}
        src={"/assets/images/hero-img.png"}
        alt="..."
        className="img__hero"
      />
      <div className="round"></div>
      <div className="round-2"></div>
      <div className="triangle flex">
        <div className="line-bottom"></div>
        <div className="flex">
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
      </div>
      <div className="triangle-2 flex">
        <div className="line-bottom"></div>
        <div className="flex">
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
      </div>
      <div className="touch"></div>
      <div className="touch-2"></div>
    </div>
  );
};

export default HeroImage;
