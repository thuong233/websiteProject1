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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 ">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white ">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
