import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsBg from "./SkillsBg";
import SkillsPic from "./SkillsPic";

const SkillsMain = () => {
  return (
    <div className="flex justify-between items-start w-full px-10">
      <SkillsText />

      <div className="ml-auto mt-[100px]">
        <SkillsPic className="w-fit" />
      </div>
    </div>
  );
};

export default SkillsMain;
