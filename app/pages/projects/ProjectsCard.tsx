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
    description: string;
    icon: string;
    url: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Tilt className=" rounded-lg cursor-pointer overflow-hidden shadow-lg hover:shadow-green-900 h-64">
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
        <Link href={project.url} target="_blank">
          <Image
            src={project.icon}
            alt={project.title}
            width={150}
            height={150}
            className=" mt-4 "
          />
        </Link>
        <div className="h-full flex flex-col  ">
          <h1 className="mt-5 text-lg font-bold h-full text-center ">
            {project.title}
          </h1>
          <p className="  text-md text-justify  p-2 inline-block align-bottom ">
            {project.description}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
