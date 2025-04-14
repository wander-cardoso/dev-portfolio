import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import React from "react";
import ProjectCard from "./ProjectsCard";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-primary">
      <SectionHeading> Meus Projetos </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto items-center mt-20 ">
        {projectData.map((project) => {
          return (
            <div key={project.id} className="rounded-lg">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
