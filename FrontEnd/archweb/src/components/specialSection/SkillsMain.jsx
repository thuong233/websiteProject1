import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsBg from "./SkillsBg";

const SkillsMain = () => {
  return (
    <div lassName="max-w-[1200px] px-4 mx-auto min-h-[600px] overflow-hidden grid grid-cols-2">
      <SkillsText />
    </div>
  );
};

export default SkillsMain;
