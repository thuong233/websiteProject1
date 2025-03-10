import React from "react";

const links = [
  { link: "About Us", section: "about" },
  { link: "Specializations", section: "skills" },
  { link: "News", section: "news" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24 "></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto ">
        <p className="text-3xl text-lightGrey">Bolortoya Bartdjor</p>
        <ul className="flex gap-4 text-lightGrey ">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer "
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown ">
        © 2025 Bolortoya Bartdjor | All Rights Reserved
      </p>
    </div>
  );
};

export default FooterMain;
