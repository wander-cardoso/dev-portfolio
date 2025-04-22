import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[6vh] h-full  bg-[#021119] overflow-hidden ">
      <div className="flex justify-center flex-col w-4/5 h-auto pt-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gaps-12 ">
          {/* Text Content */}
          <div>
            {/* Sub heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-5 text-gray-300 font-semibold">
              Hi There👋🏼 <br /> Sou <strong>{BaseInfo.name}.</strong>
            </h1>
            {/* Title */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-primary">
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-primary text-opacity-60">
              {BaseInfo.description}
            </p>
            {/* Button */}
            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-primary font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg my-8 bg-green-950 hover:bg-green-800 flex items-center space-x-2">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          <div className="m-auto p-auto w-[18.75rem] h-[18.75rem] md:w-[400px] md:h-[380px] md:flex lg:block rounded-[3rem] border-[3.5px] border-green-950 overflow-hidden">
            <Image
              src="/images/minha-foto.png"
              alt={BaseInfo.name}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
