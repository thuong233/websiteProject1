import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="text-6xl text-orange font-bold mb-10">About Us</h2>
      <p className="text-2xl font-bold text-left py-0 px-0 text-orange ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempore
        facere maiores exercitationem quaerat pariatur tenetur maxime soluta at
        ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        temporibus porro ea, laborum possimus, vero, cum sequi vitae dolorem
        inventore voluptatibus sunt mollitia praesentium perferendis enim illum
        delectus corrupti. Odit architecto dicta, nostrum ipsum excepturi
        veritatis distinctio dolor? Consequuntur!
      </p>
      <button className="border border-orange rounded-lg py-2 px-4 text-xl flex items-center mt-10 hover:bg-white transition-all duration-500 cursor-pointer md:self-start sm:self-center text-orange hover:text-black ">
        Our Projects
      </button>
    </div>
  );
};

export default AboutMeText;
