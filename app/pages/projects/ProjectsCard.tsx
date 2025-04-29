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
          color: "var(--text-primary)",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--button-bg-hover)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--button-bg)")
        }
        className="h-full w-full justify-bottom"
      >
        <Link
          href={project.url}
          target="_blank"
          className="flex flex-col items-center"
        >
          <Image
            src={project.icon}
            alt={project.title}
            width={120}
            height={120}
            className="w-30 mt-4"
          />
        </Link>
        <h1 className="mt-4 text-lg font-bold text-center ">{project.title}</h1>
        <p className="mt-3  text-sm text-opacity-80 flex al text-justify  p-2 ">
          {project.description}
        </p>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
