import React from "react";
import SingleNews from "./SingleNews";

const newsItems = [
  {
    title: "News One",
    imgSrc: "/images-20250212T212142Z-001/images/project.jpg",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta possimus, temporibus maxime alias praesentium soluta iusto veritatis eius suscipit? ",
    categories: ["Fashion", "Products"],
  },
  {
    title: "News Two",
    imgSrc: "/images-20250212T212142Z-001/images/project.jpg",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta possimus, temporibus maxime alias praesentium soluta iusto veritatis eius suscipit?",
    categories: ["Fashion", "Products"],
  },
  {
    title: "News Three",
    imgSrc: "images-20250212T212142Z-001/images/project.jpg",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta possimus, temporibus maxime alias praesentium soluta iusto veritatis eius suscipit?",
    categories: ["Fashion", "Products"],
  },
  {
    title: "News Four",
    imgSrc: "images-20250212T212142Z-001/images/project.jpg",
    description:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta possimus, temporibus maxime alias praesentium soluta iusto veritatis eius suscipit? ",
    categories: ["Fashion", "Products"],
  },
];

const NewsText = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide space-x-6 py-4 px-4">
      {newsItems.map((item, index) => (
        <SingleNews key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsText;
