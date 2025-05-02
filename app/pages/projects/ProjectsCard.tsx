"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Tilt from "react-parallax-tilt";

import "react-multi-carousel/lib/styles.css";

type Props = {
  project: {
    id: number;
    title: string;
    percent: string;
    description: string;
    icon: string;
    url: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  const { percent } = project;
  return (
    <Tilt className=" rounded-lg cursor-pointer overflow-hidden shadow-lg hover:shadow-green-900 h-64">
      <Link href={project.url} target="_blank">
        <div
          style={{
            backgroundColor: "var(--button-bg)",
            color: "var(--text-tertiary)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--button-bg-hover)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--button-bg)")
          }
          className="h-full w-full flex flex-col items-center align-self-end"
        >
          <div className="flex">
            <Image
              src={project.icon}
              alt={project.title}
              width={150}
              height={150}
              className=" mt-4 rounded-sm"
            />
            <div className="bg-black stick fixed w-18 h-8  ml-36 rounded-lg p-2 text-white opacity-80">
              {percent}
            </div>
          </div>

          <div className="h-full flex flex-col">
            <h1 className="mt-5 text-lg font-bold h-full text-center">
              {project.title}
            </h1>
            <p className="  md:text-md text-sm text-justify  p-2 inline-block align-bottom ">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};

export default ProjectCard;
