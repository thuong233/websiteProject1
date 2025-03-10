import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavBarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-md text-xl font-bold text-white border-orange border flex items-center gap-1 bg-gradient-to-r from-lightBrown to-orange hover:border-grey hover:scale-110 transition-all-duration-500 hover:shadow-cyanShadow">
      Hire us
      <div className="sm:hidden md:block">
        {" "}
        {/*for hiding the down right arrow when scren is compressed*/}
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavBarBtn;
