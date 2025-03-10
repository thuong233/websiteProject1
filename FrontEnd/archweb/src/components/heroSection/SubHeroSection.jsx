import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightgrey text-orange  font-bold flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-darkGrey">
      <p className=" md:block sm:hidden">Innovate</p>
      <p className="md:block sm:hidden">Create</p>
      <p>Design</p>
    </div>
  );
};

export default SubHeroSection;
