import React from "react";

const NavBarLogo = () => {
  return (
    <div className="flex items-center h-[60px] overflow-hidden">
      <h1 className="text-white  font-bold text-2xl md:block">
        Architecture
        <div className="h-full flex items-center justify-right">
          <img
            src="../../public/images-20250212T212142Z-001/images/archlogo.png"
            alt=""
            className="max-h-[100px] w-auto"
          />
        </div>
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
        tootnot
      </h1>{" "}
      {/* for changing from architecture to arq when screen gets smaller*/}
    </div>
  );
};

export default NavBarLogo;
