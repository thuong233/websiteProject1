import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Project 1",
    year: "2020",
    align: "right",
    image: "../../public/images-20250212T212142Z-001/images/project.jpg",
    link: "#",
  },
  {
    name: "Project 2",
    year: "2020",
    align: "left",
    image: "../../public/images-20250212T212142Z-001/images/project.jpg",
    link: "#",
  },
  {
    name: "Project 3",
    year: "2020",
    align: "right",
    image: "../../public/images-20250212T212142Z-001/images/project.jpg",
    link: "#",
  },
  {
    name: "Project 4",
    year: "2020",
    align: "left",
    image: "../../public/images-20250212T212142Z-001/images/project.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {" "}
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              align={item.align}
              year={item.year}
              link={item.link}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
