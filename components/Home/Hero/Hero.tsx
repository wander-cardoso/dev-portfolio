import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden ">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gaps-12 ">
          {/* Text Content */}
          <div>
            {/* Sub heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-5 text-gray-300 font-semibold">
              Hi There👋🏼 <br /> Sou <strong>{BaseInfo.name}.</strong>
            </h1>
            {/* Title */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>
            {/* Button */}
            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg my-8 bg-blue-900 flex items-center space-x-2">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          {/* Image Content */}
          {/* ATENCAO ATENCAO ATENCAOA TENCAO ATENCAO FALTA ARRUMAR ESQUEMA DE IMAGEM PARA TELA MOBILE w-[300px] h-[300px] ATENCAO ATENCAO ATENCAOA TENCAO ATENCAO */}
          <div className="mx-auto w-[18.75rem] h-[18.75rem] md:w-[500px] md:h-[500px] md:flex lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
