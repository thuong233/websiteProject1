import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroBg from "./HeroBg";

const HeroMain = () => {
  return (
    <div className=" relative pt-40 pb-16 flex flex-col">
      <div className="absolute inset-0 bg-black2 bg-opacity-75 z-10"></div>
      <HeroBg />
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative z-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
