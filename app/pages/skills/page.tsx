"use client";

import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import SectionHeading from "../../components/Helper/SectionHeading";

const Skills = () => {
  return (
    <div
      className="pt-16 pb-16 w-full h-full"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        color: "var(--text-primary)",
      }}
    >
      <SectionHeading> My Skills </SectionHeading>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 justify-center w-full items-center mt-20">
        {skillsData.map((skill) => {
          return (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
