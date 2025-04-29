"use client";

import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import SectionHeading from "../../components/Helper/SectionHeading";

const Skills = () => {
  return (
    <div
      className="pt-16 pb-16"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        color: "var(--text-primary)",
      }}
    >
      <SectionHeading> My Skills </SectionHeading>
      <div className="mt--20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[90%] mx-auto items-center mt-20">
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
