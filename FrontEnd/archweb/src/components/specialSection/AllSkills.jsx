import React from "react";
import { SiApachecouchdb } from "react-icons/si";
import { LuMapPinHouse } from "react-icons/lu";
import { GiGreenhouse } from "react-icons/gi";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "INTERIOR DESIGN",
    icon: SiApachecouchdb,
  },
  {
    skill: "RESIDENTIAL ARCHITECTURE",
    icon: LuMapPinHouse,
  },
  {
    skill: "SUSTAINABLE ARCHITECTURE",
    icon: GiGreenhouse,
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.text} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
