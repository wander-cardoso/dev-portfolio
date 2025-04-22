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
    <div className="p-6 hover:bg-emerald-800 duration-300 grid grid-cols-2 transition-all  items-center cursor-pointer text-center h-60 rounded-lg bg-tertiary">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="mx-auto object-cover"
      />
      <h1 className="text-[1.125rem] mt-4 text-primary font-[600]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg col-span-2 p-2 text-primary opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
