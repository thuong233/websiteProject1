import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Us", section: "about" },
  { link: "Specialization", section: "skills" },
  { link: "News", section: "news" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavBarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer text-white hover:text-orange transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-orange w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarLinks;
