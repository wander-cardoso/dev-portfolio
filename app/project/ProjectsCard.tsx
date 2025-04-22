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
    <Tilt className=" p-6 rounded-lg bg-tertiary h-64  cursor-pointer  overflow-hidden shadow-lg hover:shadow-green-900 ">
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
        />
      </Link>
      <h1 className="mt-4 text-lg font-bold text-gray-100">{project.title}</h1>
      <p className="mt-3 text-sm text-primary text-opacity-80 text-justify text-ellipsis ">
        {project.description}
      </p>
    </Tilt>
  );
};

export default ProjectCard;
