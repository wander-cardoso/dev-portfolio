"use client";

import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title, percent } = skill;
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      className="skill__card"
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg-skill-hover)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--bg-skill)")
      }
    >
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="mx-auto object-cover"
      />
      <h1 className="text-[1.125rem] mt-4 text-textprimary font-[600]">
        {title}
      </h1>
      <div className="bg-black mt-4 rounded-lg col-span-2 p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
