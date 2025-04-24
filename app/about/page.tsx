import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import SectionHeading from "../components/Helper/SectionHeading";

const About = () => {
  return (
    <div
      className=" pt-16 pb-16 
    "
      style={{
        backgroundColor: "var(--bg-tertiary)",
        color: "var(--text-primary)",
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
        {/*text content*/}
        <div>
          <div data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold  ">
              {aboutInfo.title}
            </h1>
            <p className="mt-6 text-base text-gray-500">
              {aboutInfo.description}
            </p>
            {/* check out my skills*/}
            <div className="mt-8">
              <div className="style_checkbox">
                <div className="checkbox bg-blue-800">
                  <FaCheck />
                </div>
                <p className="checkbox_text">Front-End Development</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="style_checkbox">
                <div className=" checkbox bg-orange-800 ">
                  <FaCheck />
                </div>
                <p className="checkbox_text">Back-End Development</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="style_checkbox">
                <div className="checkbox bg-green-800">
                  <FaCheck />
                </div>
                <p className="checkbox_text ">Full-Stack Development</p>
              </div>
            </div>
            {/*Stats content*/}
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          <div>
            {/* 1st stats*/}
            <Image
              src="/images/customer.png"
              alt="image satisfation client"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-gray-500 text-center text-sm mt-3 font-bold">
              {aboutInfo.client}
            </p>
          </div>
          <div>
            {/* 2st stats*/}
            <Image
              src="/images/experience.png"
              alt="image satisfation client"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="text-gray-500 text-center text-sm mt-3 font-bold">
              {aboutInfo.experience}
            </p>
          </div>
          <div className="mx-auto items-center col-span-2">
            {/* 3st stats*/}
            <Image
              src="/images/completed.png"
              alt="image satisfation client"
              width={80}
              height={80}
              className="mx-auto items-center col-span-2"
            />
            <p className="text-gray-500 text-center text-sm mt-3 font-bold">
              {aboutInfo.projects}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
