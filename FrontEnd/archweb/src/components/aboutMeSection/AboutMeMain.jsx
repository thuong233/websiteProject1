import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center w-full px-10 py-16 gap-20 "
    >
      <div className="mt-[100px]">
        <AboutMeImage />
      </div>
      <div className="w-full bg-gray-300 text-black text-center p-10 rounded-lg">
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMeMain;
