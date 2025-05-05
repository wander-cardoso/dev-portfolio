"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Tilt from "react-parallax-tilt";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { LuMonitorUp } from "react-icons/lu";

type Props = {
  project: {
    id: number;
    title: string;
    percent: string;
    description: string;
    icon: string;
    url: string;
    url2: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  const { percent } = project;
  const [showModal, setShowModal] = React.useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Tilt className="relative rounded-lg cursor-pointer overflow-hidden shadow-lg hover:shadow-green-900 h-64">
        <div
          onClick={handleCardClick}
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
          className="h-full w-full flex flex-col items-center"
        >
          <div className="flex">
            <Image
              src={project.icon}
              alt={project.title}
              width={150}
              height={150}
              className="mt-4 rounded-sm"
            />
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-black fixed w-18 h-8 ml-36 rounded-lg p-2 text-white opacity-80"
            >
              {percent}
            </div>
          </div>

          <div className="h-full flex flex-col">
            <h1 className="mt-5 text-lg font-bold h-full text-center">
              {project.title}
            </h1>
            <p className="md:text-md text-sm text-justify p-2">
              {project.description}
            </p>
          </div>
        </div>
      </Tilt>

      {/* Modal */}
      {showModal && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div
            style={{
              backgroundColor: "var(--button-bg)",
              color: "var(--text-tertiary)",
            }}
            className="p-6 rounded-xl w-[90%] max-w-md animate-fade-in-up "
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Select an option
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href={project.url}
                target="_blank"
                onClick={closeModal}
                className="skill__card__select"
              >
                Click to view site
                <LuMonitorUp />
              </Link>
              <Link
                href={project.url2}
                target="_blank"
                onClick={closeModal}
                className="skill__card__select"
              >
                Check it out on GitHub
                <FaGithub />
              </Link>
              <button
                onClick={closeModal}
                className="mt-2 text-sm text-gray-500 hover:underline self-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
