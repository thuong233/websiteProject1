import React from "react";

const NavBarLogo = () => {
  return (
    <div>
      <h1 className="text-white text-2xl sm:hidden md:block">Architecture</h1>
      <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
        ARQ
      </h1>{" "}
      {/* for changing from architecture to arq when screen gets smaller*/}
    </div>
  );
};

export default NavBarLogo;
